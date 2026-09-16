// Server-side verification of social share links for the reward campaign.
// Supported platforms: Xiaohongshu (小红书) and X. A claim is accepted when
// the shared post is publicly reachable and its content mentions MusicPod.

// Campaign rule: the post must carry the #musicpod hashtag (case-insensitive).
// The lookahead rejects longer tags like #musicpod2 so only the exact tag counts.
const HASHTAG = /#musicpod(?![a-z0-9_])/i;

// Campaign window: only posts published on or after this instant qualify.
const CAMPAIGN_START_MS = Date.parse("2026-09-15T00:00:00Z");

const OEMBED_MONTHS = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
};

// The oEmbed permalink anchor renders the post date as "August 12, 2026".
// Parsed manually so the comparison does not depend on the runtime timezone.
function oembedPostedTimeMs(html) {
  const anchors = html.match(/>([^<>]*[A-Z][a-z]+ \d{1,2}, \d{4}[^<>]*)<\/a>/g) ?? [];
  const last = anchors.at(-1);
  const match = last?.match(/([A-Z][a-z]+) (\d{1,2}), (\d{4})/);
  if (!match) return NaN;
  const month = OEMBED_MONTHS[match[1]];
  return month === undefined ? NaN : Date.UTC(Number(match[3]), month, Number(match[2]));
}
const FETCH_TIMEOUT_MS = 10_000;
const USER_AGENT =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";

// RFC 3986 URL characters only, so pasted text like
// "https://xhslink.cn/o/9BPwJKtSEh 复制此链接" yields a clean URL.
const URL_PATTERN = /https?:\/\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+/i;

const XHS_HOSTS = new Set(["xiaohongshu.com", "xhslink.com", "xhslink.cn"]);
const X_HOSTS = new Set(["x.com", "twitter.com", "mobile.twitter.com", "t.co"]);

const XHS_NOTE_ID_PATTERN = /(?:discovery\/item|explore)\/([0-9a-f]{24})/;
const X_STATUS_ID_PATTERN = /\/status(?:es)?\/(\d{5,})/;

export const verificationErrorCodes = [
  "invalid_link",
  "unsupported_platform",
  "too_old",
  "content_not_found",
  "content_mismatch",
  "verification_unavailable",
];

export function extractShareUrl(text) {
  if (typeof text !== "string") return null;
  return text.match(URL_PATTERN)?.[0] ?? null;
}

function platformForUrl(rawUrl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (XHS_HOSTS.has(host)) return "xhs";
  if (X_HOSTS.has(host)) return "x";
  return null;
}

async function fetchPage(url, fetchImpl) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    return await fetchImpl(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
      },
      redirect: "follow",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function sha256Hex(value) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

// The page's initial state is a JS object literal (it can contain `undefined`),
// so sanitize it into JSON before parsing. The note is identified by having
// noteId + desc + time together: comments carry noteId/time but never a desc.
function xhsNoteTimeMs(html, noteId) {
  const stateMatch = html.match(/__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\})\s*;?\s*<\/script>/);
  if (!stateMatch) return NaN;
  try {
    const state = JSON.parse(stateMatch[1].replace(/\bundefined\b/g, "null"));
    let noteTime;
    const walk = (value) => {
      if (noteTime !== undefined || value === null || typeof value !== "object") return;
      if (
        value.noteId === noteId &&
        typeof value.desc === "string" &&
        typeof value.time === "number"
      ) {
        noteTime = value.time;
        return;
      }
      for (const child of Object.values(value)) walk(child);
    };
    walk(state);
    if (noteTime === undefined) return NaN;
    return noteTime < 1e12 ? noteTime * 1000 : noteTime;
  } catch {
    return NaN;
  }
}

async function verifyXhs(rawUrl, fetchImpl) {
  const response = await fetchPage(rawUrl, fetchImpl);
  if (response.status === 404) return { error: "content_not_found" };
  if (!response.ok) return { error: "verification_unavailable" };

  const html = await response.text();
  const finalUrl = response.url || rawUrl;
  const noteId =
    finalUrl.match(XHS_NOTE_ID_PATTERN)?.[1] ?? html.match(/"noteId":"([0-9a-f]{24})"/)?.[1];
  if (!noteId) return { error: "content_not_found" };

  // Campaign posts must be recent; the note's publish time is only trusted
  // when read from its own object in the initial state.
  const noteTimeMs = xhsNoteTimeMs(html, noteId);
  if (!Number.isFinite(noteTimeMs)) return { error: "verification_unavailable" };
  if (noteTimeMs < CAMPAIGN_START_MS) return { error: "too_old" };

  // The note body is embedded in the page's initial-state JSON; the campaign
  // hashtag must appear in a desc/title field for the note to qualify.
  const textFields = [
    ...(html.match(/"desc"\s*:\s*"(?:[^"\\]|\\.)*"/g) ?? []),
    ...(html.match(/<meta[^>]*og:title[^>]*content="([^"]*)"/g) ?? []),
  ];
  if (!textFields.some((field) => HASHTAG.test(field))) {
    return { error: "content_mismatch" };
  }

  return { platform: "xhs", contentId: noteId, proofKey: `xhs:${noteId}` };
}

async function resolveStatusUrl(rawUrl, fetchImpl) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  if (url.hostname.toLowerCase().replace(/^www\./, "") === "t.co") {
    const response = await fetchPage(rawUrl, fetchImpl);
    const finalUrl = response.url || rawUrl;
    return finalUrl.match(X_STATUS_ID_PATTERN) ? finalUrl : null;
  }

  return url.pathname.match(X_STATUS_ID_PATTERN) ? `https://x.com${url.pathname}` : null;
}

async function verifyX(rawUrl, fetchImpl) {
  const statusUrl = await resolveStatusUrl(rawUrl, fetchImpl);
  if (!statusUrl) return { error: "invalid_link" };

  const statusId = statusUrl.match(X_STATUS_ID_PATTERN)[1];
  const oembed = await fetchPage(
    `https://publish.twitter.com/oembed?omit_script=1&dnt=true&url=${encodeURIComponent(statusUrl)}`,
    fetchImpl,
  );
  // 404 = deleted tweet, 403 = protected account.
  if (oembed.status === 404 || oembed.status === 403) return { error: "content_not_found" };
  if (!oembed.ok) return { error: "verification_unavailable" };

  const payload = await oembed.json();
  const shareableText = `${payload.author_name ?? ""} ${payload.html ?? ""}`;
  const postedTimeMs = oembedPostedTimeMs(String(payload.html ?? ""));
  if (!Number.isFinite(postedTimeMs)) return { error: "verification_unavailable" };
  if (postedTimeMs < CAMPAIGN_START_MS) return { error: "too_old" };
  if (!HASHTAG.test(shareableText)) return { error: "content_mismatch" };

  return { platform: "x", contentId: statusId, proofKey: `x:${statusId}` };
}

/**
 * Verifies pasted share text and resolves to either a failure reason or the
 * verified content identity whose hash reserves a reward code.
 *
 * @param {string} shareText
 * @param {{ fetchImpl?: typeof fetch }} [options]
 * @returns {Promise<{ error: string } | { platform: string, contentId: string, proofHash: string }>}
 */
export async function verifyShareText(shareText, { fetchImpl = fetch } = {}) {
  const rawUrl = extractShareUrl(shareText);
  if (!rawUrl) return { error: "invalid_link" };

  const platform = platformForUrl(rawUrl);
  if (!platform) return { error: "unsupported_platform" };

  try {
    const result = platform === "xhs" ? await verifyXhs(rawUrl, fetchImpl) : await verifyX(rawUrl, fetchImpl);
    if ("error" in result) return result;
    return { platform: result.platform, contentId: result.contentId, proofHash: await sha256Hex(result.proofKey) };
  } catch {
    return { error: "verification_unavailable" };
  }
}

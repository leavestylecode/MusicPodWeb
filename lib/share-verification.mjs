// Server-side verification of social share links for the reward campaign.
// Supported platforms: Xiaohongshu (小红书) and X. A claim is accepted when
// the shared post is publicly reachable and its content mentions MusicPod.

const KEYWORD = /musicpod/i;
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

async function verifyXhs(rawUrl, fetchImpl) {
  const response = await fetchPage(rawUrl, fetchImpl);
  if (response.status === 404) return { error: "content_not_found" };
  if (!response.ok) return { error: "verification_unavailable" };

  const html = await response.text();
  const finalUrl = response.url || rawUrl;
  const noteId =
    finalUrl.match(XHS_NOTE_ID_PATTERN)?.[1] ?? html.match(/"noteId":"([0-9a-f]{24})"/)?.[1];
  if (!noteId) return { error: "content_not_found" };

  // The note body is embedded in the page's initial-state JSON; a keyword hit in
  // any desc/title field proves the note is about MusicPod.
  const textFields = [
    ...(html.match(/"desc"\s*:\s*"(?:[^"\\]|\\.)*"/g) ?? []),
    ...(html.match(/<meta[^>]*og:title[^>]*content="([^"]*)"/g) ?? []),
  ];
  if (!textFields.some((field) => KEYWORD.test(field))) {
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
  if (!KEYWORD.test(shareableText)) return { error: "content_mismatch" };

  return { platform: "x", contentId: statusId, proofKey: `x:${statusId}` };
}

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

import { NextResponse } from "next/server";
import { claimRewardCode, hasClaimForProof } from "../../../../db/reward-codes";
import { verifyShareText } from "../../../../lib/share-verification.mjs";

const rateWindowMs = 10 * 60 * 1000;
const maxAttemptsPerWindow = 5;
const attempts = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  return (
    request.headers.get("cf-connecting-ip") ??
    forwarded.split(",")[0].trim() ??
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((time) => now - time < rateWindowMs);
  attempts.set(key, recent);

  if (recent.length >= maxAttemptsPerWindow) return true;
  recent.push(now);
  if (attempts.size > 5000) {
    for (const [candidate, times] of attempts) {
      if (times.every((time) => now - time >= rateWindowMs)) attempts.delete(candidate);
    }
  }
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  try {
    const body = await request.json() as { shareText?: unknown };
    const shareText = typeof body.shareText === "string" ? body.shareText.slice(0, 2000) : "";

    const verification = await verifyShareText(shareText);
    if ("error" in verification) {
      const status = verification.error === "verification_unavailable" ? 503 : 400;
      return NextResponse.json({ error: verification.error }, { status });
    }

    // A share link is public; never re-issue a code that was already handed out
    // for it, otherwise anyone scraping the campaign hashtag could farm codes.
    if (await hasClaimForProof(verification.proofHash)) {
      return NextResponse.json({ error: "already_claimed" }, { status: 409 });
    }

    const reward = await claimRewardCode(verification.proofHash);
    if (!reward) {
      return NextResponse.json({ error: "codes_unavailable" }, { status: 409 });
    }

    return NextResponse.json(reward, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    console.error("Reward claim failed", error);
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }
}

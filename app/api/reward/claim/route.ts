import { NextResponse } from "next/server";
import { claimRewardCode } from "../../../../db/reward-codes";

const proofHashPattern = /^[a-f0-9]{64}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { proofHash?: unknown };
    const proofHash = typeof body.proofHash === "string" ? body.proofHash.toLowerCase() : "";

    if (!proofHashPattern.test(proofHash)) {
      return NextResponse.json({ error: "invalid_proof" }, { status: 400 });
    }

    const reward = await claimRewardCode(proofHash);
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

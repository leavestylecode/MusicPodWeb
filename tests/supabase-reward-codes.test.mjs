import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import test from "node:test";
import { encryptRewardPayload } from "../lib/reward-code-crypto.mjs";
import { claimSupabaseRewardCode } from "../lib/supabase-reward-codes.mjs";

test("claims and decrypts a Supabase reward without exposing credentials", async () => {
  const rewardCodeKey = randomBytes(32).toString("base64url");
  const reward = {
    code: "ABCD1234EFGH5678JK",
    redemptionUrl: "https://apps.apple.com/redeem?ctx=offercodes&id=6784645886&code=ABCD1234EFGH5678JK",
  };
  const encryptedPayload = await encryptRewardPayload(reward, rewardCodeKey);
  let request;

  const claimed = await claimSupabaseRewardCode({
    fetchImpl: async (url, options) => {
      request = { url, options };
      return new Response(JSON.stringify([{ encrypted_payload: encryptedPayload }]), { status: 200 });
    },
    proofHash: "a".repeat(64),
    rewardCodeKey,
    secretKey: "server-secret",
    url: "https://musicpod.supabase.co",
  });

  assert.deepEqual(claimed, reward);
  assert.equal(request.url, "https://musicpod.supabase.co/rest/v1/rpc/musicpod_claim_reward_code");
  assert.equal(request.options.headers.apikey, "server-secret");
  assert.deepEqual(JSON.parse(request.options.body), { p_proof_hash: "a".repeat(64) });
});

test("returns null when Supabase has no unclaimed reward codes", async () => {
  const claimed = await claimSupabaseRewardCode({
    fetchImpl: async () => new Response("[]", { status: 200 }),
    proofHash: "b".repeat(64),
    rewardCodeKey: randomBytes(32).toString("base64url"),
    secretKey: "server-secret",
    url: "https://musicpod.supabase.co",
  });

  assert.equal(claimed, null);
});

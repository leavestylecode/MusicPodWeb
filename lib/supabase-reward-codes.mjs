import { decryptRewardPayload } from "./reward-code-crypto.mjs";

export async function claimSupabaseRewardCode({
  fetchImpl = fetch,
  proofHash,
  rewardCodeKey,
  secretKey,
  url,
}) {
  const response = await fetchImpl(`${url}/rest/v1/rpc/musicpod_claim_reward_code`, {
    body: JSON.stringify({ p_proof_hash: proofHash }),
    cache: "no-store",
    headers: {
      apikey: secretKey,
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const body = await response.text();
  if (!response.ok) throw new Error(`Supabase reward claim failed with status ${response.status}.`);

  const rows = body ? JSON.parse(body) : [];
  const encryptedPayload = Array.isArray(rows) ? rows[0]?.encrypted_payload : rows?.encrypted_payload;
  if (!encryptedPayload) return null;

  return decryptRewardPayload(encryptedPayload, rewardCodeKey);
}

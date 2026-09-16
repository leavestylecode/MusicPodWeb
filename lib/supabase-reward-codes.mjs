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

export async function hasSupabaseClaimForProof({ fetchImpl = fetch, proofHash, secretKey, url }) {
  const response = await fetchImpl(
    `${url}/rest/v1/musicpod_reward_codes?select=proof_hash&proof_hash=eq.${encodeURIComponent(proofHash)}`,
    {
      headers: { apikey: secretKey, Authorization: `Bearer ${secretKey}` },
      method: "GET",
    },
  );

  if (!response.ok) throw new Error(`Supabase proof lookup failed with status ${response.status}.`);

  const rows = await response.json();
  return Array.isArray(rows) && rows.length > 0;
}

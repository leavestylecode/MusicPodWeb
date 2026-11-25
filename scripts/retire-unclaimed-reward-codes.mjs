import { decryptRewardPayload } from "../lib/reward-code-crypto.mjs";

const allowKeyRotation = process.argv.includes("--allow-key-rotation");

const supabaseUrl = process.env.SUPABASE_URL;
const secretKey = process.env.SUPABASE_SECRET_KEY;
const rewardCodeKey = process.env.REWARD_CODE_KEY;

if (!supabaseUrl || !secretKey || !rewardCodeKey) {
  throw new Error("SUPABASE_URL, SUPABASE_SECRET_KEY, and REWARD_CODE_KEY are required.");
}

const endpoint = new URL(supabaseUrl);
if (endpoint.protocol !== "https:") throw new Error("SUPABASE_URL must use HTTPS.");

const authHeaders = {
  apikey: secretKey,
  Authorization: `Bearer ${secretKey}`,
};

function countFromContentRange(header) {
  if (!header) return null;
  const total = header.split("/")[1];
  if (total === undefined || total === "*") return null;
  const parsed = Number(total);
  return Number.isFinite(parsed) ? parsed : null;
}

async function supabaseCount(path) {
  const response = await fetch(`${endpoint.origin}/rest/v1/${path}`, {
    headers: { ...authHeaders, Prefer: "count=exact" },
    method: "HEAD",
  });
  if (!response.ok) {
    throw new Error(`Supabase count request failed with status ${response.status}.`);
  }
  return countFromContentRange(response.headers.get("content-range"));
}

// The import script encrypts with REWARD_CODE_KEY, so a mismatched key would make
// every future claim fail at decryption. Verify the key against a stored payload
// before the pool is emptied. After a key rotation the existing pool no longer
// decrypts with the new key by design; pass --allow-key-rotation to skip this
// check in that case.
const existing = await fetch(
  `${endpoint.origin}/rest/v1/musicpod_reward_codes?select=encrypted_payload&limit=1`,
  { headers: authHeaders, method: "GET" },
);
if (!existing.ok) throw new Error(`Supabase preflight failed with status ${existing.status}.`);

const existingRows = await existing.json();
if (Array.isArray(existingRows) && existingRows.length > 0) {
  if (allowKeyRotation) {
    console.log("Key rotation mode: skipped REWARD_CODE_KEY verification against the existing pool.");
  } else {
    await decryptRewardPayload(existingRows[0].encrypted_payload, rewardCodeKey);
    console.log("Verified REWARD_CODE_KEY against the existing code pool.");
  }
} else {
  console.log("Code pool is empty; skipped REWARD_CODE_KEY verification.");
}

const unclaimedBefore = (await supabaseCount(
  "musicpod_reward_codes?select=id&claimed_at=is.null&limit=1",
)) ?? 0;
if (unclaimedBefore === 0) {
  console.log("No unclaimed codes to retire. The pool only serves newly imported codes.");
  process.exit(0);
}

const response = await fetch(
  `${endpoint.origin}/rest/v1/musicpod_reward_codes?claimed_at=is.null`,
  {
    body: JSON.stringify({ claimed_at: new Date().toISOString() }),
    headers: { ...authHeaders, "Content-Type": "application/json", Prefer: "return=minimal,count=exact" },
    method: "PATCH",
  },
);
if (!response.ok) {
  throw new Error(`Supabase retire request failed with status ${response.status}.`);
}

const retired = countFromContentRange(response.headers.get("content-range"));
const unclaimedAfter = (await supabaseCount(
  "musicpod_reward_codes?select=id&claimed_at=is.null&limit=1",
)) ?? 0;
if (unclaimedAfter !== 0) {
  throw new Error(`Retire incomplete: ${unclaimedAfter} codes are still unclaimed.`);
}

console.log(`Retired ${retired ?? unclaimedBefore} unclaimed codes (${unclaimedBefore} found).`);
console.log("Claim requests will report codes_unavailable until the next batch is imported.");

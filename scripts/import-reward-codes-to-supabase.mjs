import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { encryptRewardPayload } from "../lib/reward-code-crypto.mjs";

function option(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

const inputPath = option("--input");
const supabaseUrl = process.env.SUPABASE_URL;
const secretKey = process.env.SUPABASE_SECRET_KEY;
const rewardCodeKey = process.env.REWARD_CODE_KEY;

if (!inputPath) throw new Error("Use --input with the App Store offer-code CSV path.");
if (!supabaseUrl || !secretKey || !rewardCodeKey) {
  throw new Error("SUPABASE_URL, SUPABASE_SECRET_KEY, and REWARD_CODE_KEY are required.");
}

const endpoint = new URL(supabaseUrl);
if (endpoint.protocol !== "https:") throw new Error("SUPABASE_URL must use HTTPS.");

const rows = (await readFile(inputPath, "utf8"))
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line, index) => {
    const separator = line.indexOf(",");
    if (separator < 1) throw new Error(`Invalid CSV row ${index + 1}.`);
    return { code: line.slice(0, separator), redemptionUrl: line.slice(separator + 1) };
  });

const codes = new Set(rows.map(({ code }) => code));
if (codes.size !== rows.length) throw new Error("The CSV contains duplicate redemption codes.");

const batchSize = 200;
let imported = 0;

for (let offset = 0; offset < rows.length; offset += batchSize) {
  const batch = [];
  for (const row of rows.slice(offset, offset + batchSize)) {
    batch.push({
      code_hash: createHash("sha256").update(row.code).digest("hex"),
      encrypted_payload: await encryptRewardPayload(row, rewardCodeKey),
    });
  }

  const response = await fetch(
    `${endpoint.origin}/rest/v1/musicpod_reward_codes?on_conflict=code_hash`,
    {
      body: JSON.stringify(batch),
      headers: {
        apikey: secretKey,
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
        Prefer: "resolution=ignore-duplicates,return=minimal",
      },
      method: "POST",
    },
  );

  if (!response.ok) {
    throw new Error(`Supabase import failed with status ${response.status}.`);
  }

  imported += batch.length;
  console.log(`Prepared ${Math.min(imported, rows.length)} of ${rows.length} codes.`);
}

console.log(`Supabase import completed for ${rows.length} unique encrypted codes.`);

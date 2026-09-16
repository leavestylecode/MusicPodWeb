import { decryptRewardPayload } from "../lib/reward-code-crypto.mjs";
import {
  claimSupabaseRewardCode,
  hasSupabaseClaimForProof,
} from "../lib/supabase-reward-codes.mjs";
import { getRewardCodeKey, getRuntimeDatabase, getSupabaseConfig } from "../lib/runtime-env";

type ClaimedCode = {
  code: string;
  redemptionUrl: string;
};

type StoredCode = {
  code: string;
  redemptionUrl: string | null;
};

let initialization: Promise<void> | undefined;

function database() {
  return getRuntimeDatabase();
}

async function ensureRewardCodesTable() {
  const db = database();

  initialization ??= db.batch([
    db.prepare(`
      CREATE TABLE IF NOT EXISTS reward_codes (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        code TEXT NOT NULL,
        redemption_url TEXT,
        claimed_at TEXT,
        proof_hash TEXT
      )
    `),
    db.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_reward_codes_code ON reward_codes (code)"),
    db.prepare("CREATE UNIQUE INDEX IF NOT EXISTS idx_reward_codes_proof_hash ON reward_codes (proof_hash)"),
    db.prepare("PRAGMA optimize"),
  ]).then(() => undefined);

  await initialization;
}

async function decodeStoredCode(stored: StoredCode): Promise<ClaimedCode> {
  if (stored.redemptionUrl) {
    return { code: stored.code, redemptionUrl: stored.redemptionUrl };
  }
  return decryptRewardPayload(stored.code, getRewardCodeKey());
}

async function findClaimByProof(proofHash: string): Promise<ClaimedCode | null> {
  const row = await database()
    .prepare("SELECT code, redemption_url AS redemptionUrl FROM reward_codes WHERE proof_hash = ? LIMIT 1")
    .bind(proofHash)
    .first<StoredCode>();

  return row ? decodeStoredCode(row) : null;
}

async function claimD1RewardCode(proofHash: string): Promise<ClaimedCode | null> {
  await ensureRewardCodesTable();

  const existing = await findClaimByProof(proofHash);
  if (existing) return existing;

  try {
    const claimed = await database()
      .prepare(`
        UPDATE reward_codes
        SET claimed_at = CURRENT_TIMESTAMP, proof_hash = ?
        WHERE id = (
          SELECT id FROM reward_codes
          WHERE claimed_at IS NULL
          ORDER BY id
          LIMIT 1
        )
        RETURNING code, redemption_url AS redemptionUrl
      `)
      .bind(proofHash)
      .first<StoredCode>();

    if (!claimed) return null;

    try {
      return await decodeStoredCode(claimed);
    } catch (error) {
      await database()
        .prepare("UPDATE reward_codes SET claimed_at = NULL, proof_hash = NULL WHERE proof_hash = ?")
        .bind(proofHash)
        .run();
      throw error;
    }
  } catch (error) {
    const claimedByConcurrentRequest = await findClaimByProof(proofHash);
    if (claimedByConcurrentRequest) return claimedByConcurrentRequest;
    throw error;
  }
}

export async function claimRewardCode(proofHash: string): Promise<ClaimedCode | null> {
  const supabase = getSupabaseConfig();
  if (supabase) {
    return claimSupabaseRewardCode({
      ...supabase,
      proofHash,
      rewardCodeKey: getRewardCodeKey(),
    });
  }

  return claimD1RewardCode(proofHash);
}

export async function hasClaimForProof(proofHash: string): Promise<boolean> {
  const supabase = getSupabaseConfig();
  if (supabase) {
    return hasSupabaseClaimForProof({ ...supabase, proofHash });
  }

  await ensureRewardCodesTable();
  const row = await database()
    .prepare("SELECT 1 FROM reward_codes WHERE proof_hash = ? LIMIT 1")
    .bind(proofHash)
    .first();
  return Boolean(row);
}

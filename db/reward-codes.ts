import { getRuntimeDatabase } from "../lib/runtime-env";

type ClaimedCode = {
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

async function findClaimByProof(proofHash: string): Promise<ClaimedCode | null> {
  const row = await database()
    .prepare("SELECT code, redemption_url AS redemptionUrl FROM reward_codes WHERE proof_hash = ? LIMIT 1")
    .bind(proofHash)
    .first<ClaimedCode>();

  return row ?? null;
}

export async function claimRewardCode(proofHash: string): Promise<ClaimedCode | null> {
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
      .first<ClaimedCode>();

    return claimed ?? null;
  } catch (error) {
    const claimedByConcurrentRequest = await findClaimByProof(proofHash);
    if (claimedByConcurrentRequest) return claimedByConcurrentRequest;
    throw error;
  }
}

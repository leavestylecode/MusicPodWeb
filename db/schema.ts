import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const rewardCodes = sqliteTable(
  "reward_codes",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    code: text("code").notNull(),
    redemptionUrl: text("redemption_url"),
    claimedAt: text("claimed_at"),
    proofHash: text("proof_hash"),
  },
  (table) => [
    uniqueIndex("idx_reward_codes_code").on(table.code),
    uniqueIndex("idx_reward_codes_proof_hash").on(table.proofHash),
  ],
);

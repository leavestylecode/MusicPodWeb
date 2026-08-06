CREATE TABLE `reward_codes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`redemption_url` text,
	`claimed_at` text,
	`proof_hash` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_reward_codes_code` ON `reward_codes` (`code`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_reward_codes_proof_hash` ON `reward_codes` (`proof_hash`);--> statement-breakpoint
PRAGMA optimize;

import { randomBytes } from "node:crypto";
import { chmod, readFile, writeFile } from "node:fs/promises";
import { encryptRewardPayload } from "../lib/reward-code-crypto.mjs";

function option(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

const inputPath = option("--input");
const outputPath = option("--output");
const keyFile = option("--key-file");
const keyOutputPath = option("--key-out");

if (!inputPath || !outputPath || (!keyFile && !keyOutputPath) || (keyFile && keyOutputPath)) {
  throw new Error("Use --input, --output, and exactly one of --key-file or --key-out.");
}

const encodedKey = keyFile
  ? (await readFile(keyFile, "utf8")).trim()
  : randomBytes(32).toString("base64url");

if (keyOutputPath) {
  await writeFile(keyOutputPath, `${encodedKey}\n`, { mode: 0o600 });
  await chmod(keyOutputPath, 0o600);
}

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

const encryptedRows = [];
for (const row of rows) encryptedRows.push(await encryptRewardPayload(row, encodedKey));

const batchSize = 100;
const statements = [
  "-- MusicPod offer codes encrypted with AES-256-GCM. The key is stored only in the hosting environment.",
];
for (let offset = 0; offset < encryptedRows.length; offset += batchSize) {
  const values = encryptedRows
    .slice(offset, offset + batchSize)
    .map((value) => `('${value.replaceAll("'", "''")}', NULL)`)
    .join(",\n");
  statements.push(`INSERT OR IGNORE INTO reward_codes (code, redemption_url) VALUES\n${values};`);
}
statements.push("PRAGMA optimize;");

await writeFile(outputPath, `${statements.join("\n--> statement-breakpoint\n")}\n`);
console.log(`Encrypted ${rows.length} unique reward codes.`);

import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import test from "node:test";
import { decryptRewardPayload, encryptRewardPayload } from "../lib/reward-code-crypto.mjs";

test("encrypts offer codes without exposing their plaintext and restores the redemption link", async () => {
  const key = randomBytes(32).toString("base64url");
  const payload = {
    code: "ABCD1234EFGH5678JK",
    redemptionUrl: "https://apps.apple.com/redeem?ctx=offercodes&id=6784645886&code=ABCD1234EFGH5678JK",
  };

  const encrypted = await encryptRewardPayload(payload, key);
  assert.match(encrypted, /^v1\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/);
  assert.doesNotMatch(encrypted, /ABCD1234EFGH5678JK|apps\.apple\.com/);
  assert.deepEqual(await decryptRewardPayload(encrypted, key), payload);
});

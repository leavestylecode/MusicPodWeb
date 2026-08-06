const encryptedPrefix = "v1.";
const codePattern = /^[A-Z0-9]{18}$/;

function decodeBase64Url(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
}

function encodeBase64Url(value) {
  let binary = "";
  for (const byte of value) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function importRewardKey(encodedKey, usage) {
  const key = decodeBase64Url(encodedKey);
  if (key.byteLength !== 32) throw new Error("Reward code key must contain 32 bytes.");
  return crypto.subtle.importKey("raw", key, "AES-GCM", false, usage);
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") throw new Error("Invalid reward payload.");
  if (!codePattern.test(payload.code)) throw new Error("Invalid reward code.");

  const url = new URL(payload.redemptionUrl);
  if (
    url.origin !== "https://apps.apple.com" ||
    url.pathname !== "/redeem" ||
    url.searchParams.get("ctx") !== "offercodes" ||
    url.searchParams.get("id") !== "6784645886" ||
    url.searchParams.get("code") !== payload.code
  ) {
    throw new Error("Invalid reward redemption URL.");
  }

  return { code: payload.code, redemptionUrl: url.toString() };
}

export async function encryptRewardPayload(payload, encodedKey) {
  const validPayload = validatePayload(payload);
  const key = await importRewardKey(encodedKey, ["encrypt"]);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(validPayload));
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext));
  return `${encryptedPrefix}${encodeBase64Url(iv)}.${encodeBase64Url(ciphertext)}`;
}

export async function decryptRewardPayload(value, encodedKey) {
  if (!value.startsWith(encryptedPrefix)) throw new Error("Unsupported reward payload.");
  const parts = value.split(".");
  if (parts.length !== 3) throw new Error("Invalid reward payload encoding.");

  const key = await importRewardKey(encodedKey, ["decrypt"]);
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: decodeBase64Url(parts[1]) },
    key,
    decodeBase64Url(parts[2]),
  );
  return validatePayload(JSON.parse(new TextDecoder().decode(plaintext)));
}

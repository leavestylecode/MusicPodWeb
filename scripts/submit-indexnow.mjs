import {
  buildIndexNowPayload,
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
} from "../lib/indexnow.mjs";

const skipPreflight = process.argv.includes("--skip-preflight");

if (!skipPreflight) {
  const keyResponse = await fetch(INDEXNOW_KEY_LOCATION, {
    headers: { Accept: "text/plain" },
  });
  if (!keyResponse.ok) {
    throw new Error(
      `IndexNow key verification failed: ${INDEXNOW_KEY_LOCATION} returned HTTP ${keyResponse.status}. Deploy first, then run again.`,
    );
  }
  const keyBody = (await keyResponse.text()).trim();
  if (keyBody !== INDEXNOW_KEY) {
    throw new Error(`IndexNow key file mismatch at ${INDEXNOW_KEY_LOCATION}.`);
  }
  console.log(`Verified IndexNow key file at ${INDEXNOW_KEY_LOCATION}`);
}

const payload = buildIndexNowPayload();
const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const responseText = (await response.text()).trim();
if (response.status !== 200 && response.status !== 202) {
  throw new Error(
    `IndexNow submission failed with HTTP ${response.status}${responseText ? `: ${responseText}` : ""}`,
  );
}

console.log(
  `Submitted ${payload.urlList.length} URLs to IndexNow (HTTP ${response.status})${responseText ? `: ${responseText}` : ""}`,
);

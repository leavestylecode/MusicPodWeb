export const INDEXNOW_HOST = "www.musicpod.app";
export const INDEXNOW_ORIGIN = `https://${INDEXNOW_HOST}`;
export const INDEXNOW_KEY = "6d82d2fab4d7d0ef778e3fad41049805";
export const INDEXNOW_KEY_LOCATION = `${INDEXNOW_ORIGIN}/${INDEXNOW_KEY}.txt`;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const INDEXABLE_LOCALES = [
  "en",
  "zh-cn",
  "zh-tw",
  "ja",
  "ko",
  "es",
  "fr",
  "de",
  "pt-br",
];

const INDEXABLE_SUFFIXES = ["", "/ipod-music", "/privacy"];

export const INDEXNOW_URLS = INDEXABLE_SUFFIXES.flatMap((suffix) =>
  INDEXABLE_LOCALES.map((locale) => `${INDEXNOW_ORIGIN}/${locale}${suffix}`),
);

export function buildIndexNowPayload(urls = INDEXNOW_URLS) {
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  };
}

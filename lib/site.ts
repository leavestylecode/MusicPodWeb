import {
  defaultLocale,
  localeDetails,
  localePath,
  locales,
} from "./locales";

export const SITE_ORIGIN = "https://www.musicpod.app";
export const SITE_METADATA_BASE = new URL(SITE_ORIGIN);
export const SITE_NAME = "MusicPod";
export const SITE_TAGLINE = "iPod Music, Reborn on iPhone";
export const SITE_DESCRIPTION =
  "The classic iPod music experience, rebuilt as a native iPhone app with a click wheel and your Apple Music library.";
export const SITE_OG_IMAGE = "/og.png";
export const SITE_CONTENT_UPDATED = "2026-09-17";
export const DEVELOPER_NAME = "Leavestylecode";
export const DEVELOPER_BRAND = "LeaveStyle";
export const DEVELOPER_URL = "https://leavestyle.com/";

/**
 * Mirrored from the App Store listing (itunes lookup API, 2026-09). Update
 * manually when the listing changes so the structured data stays truthful.
 */
export const APP_STORE_RATING = {
  value: 4.2,
  count: 5,
} as const;

export const DEVELOPER_SCHEMA = {
  "@type": "Organization",
  "@id": `${DEVELOPER_URL}#organization`,
  name: DEVELOPER_NAME,
  alternateName: DEVELOPER_BRAND,
  url: DEVELOPER_URL,
  founder: {
    "@type": "Person",
    name: "Huixin Jia",
    alternateName: ["贾慧鑫", "Jia Huixin"],
    sameAs: ["https://www.linkedin.com/in/huixin-jia-8903b3154/"],
  },
} as const;

export const WEBSITE_SCHEMA_ID = `${SITE_ORIGIN}/#website`;
export const SOFTWARE_SCHEMA_ID = `${SITE_ORIGIN}/#software`;

export function siteUrl(pathname = "/") {
  return new URL(pathname, `${SITE_ORIGIN}/`).toString();
}

/**
 * A single source of truth for the reciprocal hreflang set used by both page
 * metadata and the XML sitemap.
 */
export function languageAlternates(pathname = "/") {
  return Object.fromEntries([
    ...locales.map((locale) => [
      localeDetails[locale].htmlLang,
      siteUrl(localePath(locale, pathname)),
    ]),
    ["x-default", siteUrl(localePath(defaultLocale, pathname))],
  ]);
}

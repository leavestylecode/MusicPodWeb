import {
  defaultLocale,
  localeDetails,
  localePath,
  locales,
} from "./locales";

export const SITE_ORIGIN = "https://www.musicpod.app";
export const SITE_METADATA_BASE = new URL(SITE_ORIGIN);
export const SITE_NAME = "MusicPod";
export const SITE_TAGLINE = "Retro iPod Music Player for iPhone";
export const SITE_DESCRIPTION =
  "An iPod-style music player for iPhone with a click wheel, Cover Flow, Apple Music, and imported audio. Free to download with optional in-app purchases.";
export const SITE_OG_IMAGE = "/og.png";
export const SITE_CONTENT_UPDATED = "2026-10-23";
export const DEVELOPER_NAME = "Leavestylecode";
export const DEVELOPER_BRAND = "LeaveStyle";
export const DEVELOPER_URL = "https://leavestyle.com/";

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

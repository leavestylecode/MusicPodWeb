import {
  defaultLocale,
  localeDetails,
  localePath,
  locales,
} from "./locales";

export const SITE_ORIGIN = "https://www.musicpod.app";
export const SITE_METADATA_BASE = new URL(SITE_ORIGIN);
export const DEVELOPER_NAME = "Leavestylecode";
export const DEVELOPER_BRAND = "LeaveStyle";
export const DEVELOPER_URL = "https://leavestyle.com/";

export const DEVELOPER_SCHEMA = {
  "@type": "Organization",
  "@id": `${DEVELOPER_URL}#organization`,
  name: DEVELOPER_NAME,
  alternateName: DEVELOPER_BRAND,
  url: DEVELOPER_URL,
} as const;

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

import {
  defaultLocale,
  localeDetails,
  localePath,
  locales,
  type Locale,
} from "./locales";

export const SITE_ORIGIN = "https://www.musicpod.app";
export const SITE_METADATA_BASE = new URL(SITE_ORIGIN);
export const SITE_NAME = "MusicPod";
export const SITE_TAGLINE = "Retro iPod Music Player for iPhone";
export const SITE_DESCRIPTION =
  "An iPod-style music player for iPhone with a click wheel, Cover Flow, Apple Music, Spotify, and imported audio. Free to download with optional in-app purchases.";
export const SITE_OG_IMAGE = "/og.png";
export const SITE_CONTENT_UPDATED = "2026-11-25";
export const DEVELOPER_NAME = "Leavestylecode";
export const DEVELOPER_BRAND = "LeaveStyle";
export const DEVELOPER_URL = "https://www.leavestyle.com/";
export const CONTACT_EMAIL = "leavestyle101@gmail.com";

export const SUPPORTED_AUDIO_FORMATS = [
  "MP3",
  "M4A",
  "AAC",
  "WAV",
  "AIFF",
  "AIF",
  "AIFC",
  "FLAC",
  "CAF",
] as const;

export const UNSUPPORTED_ENCRYPTED_FORMATS = ["NCM", "QMC", "KGM"] as const;

export const PORTFOLIO_APPS = [
  {
    name: "MusicPal",
    description: "Companion music app by LeaveStyle.",
    href: (locale: Locale) =>
      `https://www.musicpal.app/${locale === "zh-tw" ? "tw" : locale === "zh-cn" ? "zh" : "en"}`,
  },
  {
    name: "DeepMusic",
    description: "Music app by LeaveStyle.",
    href: (locale: Locale) =>
      `https://www.deepmusic.app/${locale === "zh-cn" || locale === "zh-tw" ? "zh/" : ""}`,
  },
  {
    name: "ImageFit",
    description: "Image tool by LeaveStyle.",
    href: (locale: Locale) =>
      `https://imagefit.app/${locale === "zh-cn" || locale === "zh-tw" ? "zh" : "en"}`,
  },
] as const;

export function developerHomeUrl(locale: Locale) {
  return `${DEVELOPER_URL}${locale === "zh-cn" || locale === "zh-tw" ? "" : "en"}`;
}

export const DEVELOPER_SCHEMA = {
  "@type": "Organization",
  "@id": `${DEVELOPER_URL}#organization`,
  name: DEVELOPER_NAME,
  alternateName: DEVELOPER_BRAND,
  url: DEVELOPER_URL,
  email: CONTACT_EMAIL,
  knowsAbout: [
    "iOS app development",
    "SwiftUI",
    "MusicKit",
    "iPod-style music players",
    "offline audio playback",
  ],
  founder: {
    "@type": "Person",
    "@id": `${DEVELOPER_URL}#founder`,
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

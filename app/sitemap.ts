import type { MetadataRoute } from "next";
import { localePath, locales } from "../lib/locales";
import { languageAlternates, SITE_CONTENT_UPDATED, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = languageAlternates();
  const privacyLanguages = languageAlternates("/privacy");
  const guideLanguages = languageAlternates("/ipod-music");

  return [
    ...locales.map((locale) => ({
      url: siteUrl(localePath(locale)),
      lastModified: new Date(SITE_CONTENT_UPDATED),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: homeLanguages },
    })),
    ...locales.map((locale) => ({
      url: siteUrl(localePath(locale, "/ipod-music")),
      lastModified: new Date(SITE_CONTENT_UPDATED),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 0.8 : 0.7,
      alternates: { languages: guideLanguages },
    })),
    ...locales.map((locale) => ({
      url: siteUrl(localePath(locale, "/privacy")),
      lastModified: new Date(SITE_CONTENT_UPDATED),
      changeFrequency: "yearly" as const,
      priority: locale === "en" ? 0.5 : 0.4,
      alternates: { languages: privacyLanguages },
    })),
  ];
}

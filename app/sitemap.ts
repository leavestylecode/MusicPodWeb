import type { MetadataRoute } from "next";
import { localePath, locales } from "../lib/locales";
import { languageAlternates, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages = languageAlternates();
  const privacyLanguages = languageAlternates("/privacy");

  return [
    ...locales.map((locale) => ({
      url: siteUrl(localePath(locale)),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: homeLanguages },
    })),
    ...locales.map((locale) => ({
      url: siteUrl(localePath(locale, "/privacy")),
      lastModified: new Date("2026-07-17"),
      changeFrequency: "yearly" as const,
      priority: locale === "en" ? 0.5 : 0.4,
      alternates: { languages: privacyLanguages },
    })),
  ];
}

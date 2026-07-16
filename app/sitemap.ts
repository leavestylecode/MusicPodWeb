import type { MetadataRoute } from "next";
import { localeDetails, locales } from "../lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.musicpod.app";
  const homeLanguages = Object.fromEntries(
    locales.map((locale) => [localeDetails[locale].htmlLang, `${origin}/${locale}`]),
  );
  const privacyLanguages = Object.fromEntries(
    locales.map((locale) => [localeDetails[locale].htmlLang, `${origin}/${locale}/privacy`]),
  );

  return [
    ...locales.map((locale) => ({
      url: `${origin}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: { languages: homeLanguages },
    })),
    ...locales.map((locale) => ({
      url: `${origin}/${locale}/privacy`,
      lastModified: new Date("2026-07-16"),
      changeFrequency: "yearly" as const,
      priority: locale === "en" ? 0.5 : 0.4,
      alternates: { languages: privacyLanguages },
    })),
  ];
}

import type { MetadataRoute } from "next";
import { localeDetails, locales } from "../lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://www.musicpod.app";
  const languages = Object.fromEntries(
    locales.map((locale) => [localeDetails[locale].htmlLang, `${origin}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${origin}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}

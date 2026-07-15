export const locales = [
  "en",
  "zh-cn",
  "zh-tw",
  "ja",
  "ko",
  "es",
  "fr",
  "de",
  "pt-br",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDetails: Record<
  Locale,
  {
    htmlLang: string;
    label: string;
    shortLabel: string;
    openGraphLocale: string;
  }
> = {
  en: { htmlLang: "en", label: "English", shortLabel: "EN", openGraphLocale: "en_US" },
  "zh-cn": { htmlLang: "zh-CN", label: "简体中文", shortLabel: "简", openGraphLocale: "zh_CN" },
  "zh-tw": { htmlLang: "zh-TW", label: "繁體中文", shortLabel: "繁", openGraphLocale: "zh_TW" },
  ja: { htmlLang: "ja", label: "日本語", shortLabel: "日本語", openGraphLocale: "ja_JP" },
  ko: { htmlLang: "ko", label: "한국어", shortLabel: "한국어", openGraphLocale: "ko_KR" },
  es: { htmlLang: "es", label: "Español", shortLabel: "ES", openGraphLocale: "es_ES" },
  fr: { htmlLang: "fr", label: "Français", shortLabel: "FR", openGraphLocale: "fr_FR" },
  de: { htmlLang: "de", label: "Deutsch", shortLabel: "DE", openGraphLocale: "de_DE" },
  "pt-br": { htmlLang: "pt-BR", label: "Português (Brasil)", shortLabel: "PT", openGraphLocale: "pt_BR" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value.toLowerCase() as Locale);
}

export function localePath(locale: Locale, hash = "") {
  return `/${locale}${hash}`;
}

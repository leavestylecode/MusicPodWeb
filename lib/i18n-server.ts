import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, localeDetails, locales, type Locale } from "./locales";

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  try {
    const requested = new Negotiator({ headers: { "accept-language": acceptLanguage } }).languages();
    const supported = locales.map((locale) => localeDetails[locale].htmlLang);
    const matched = match(requested, supported, localeDetails[defaultLocale].htmlLang);

    return locales.find(
      (locale) => localeDetails[locale].htmlLang.toLowerCase() === matched.toLowerCase(),
    ) ?? defaultLocale;
  } catch {
    return defaultLocale;
  }
}

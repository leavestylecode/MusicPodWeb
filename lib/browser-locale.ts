import type { Locale } from "./locales";

export function rememberLocale(locale: Locale) {
  document.cookie = `musicpod_locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

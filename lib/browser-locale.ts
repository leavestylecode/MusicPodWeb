import type { Locale } from "./locales";

export function rememberLocale(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `musicpod_locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { detectLocale } from "../../../lib/i18n-server";
import { isLocale } from "../../../lib/locales";

export default async function PrivacyLocaleRedirect() {
  const [cookieStore, requestHeaders] = await Promise.all([cookies(), headers()]);
  const remembered = cookieStore.get("musicpod_locale")?.value;
  const locale = remembered && isLocale(remembered)
    ? remembered
    : detectLocale(requestHeaders.get("accept-language"));

  redirect(`/${locale}/privacy`);
}

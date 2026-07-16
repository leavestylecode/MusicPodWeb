import Image from "next/image";
import type { Locale } from "@/lib/locales";

type AppStoreBadgeProps = {
  locale: Locale;
};

const marketingLocales: Record<Locale, string> = {
  en: "en-us",
  "zh-cn": "zh-cn",
  "zh-tw": "zh-tw",
  ja: "ja-jp",
  ko: "ko-kr",
  es: "es-es",
  fr: "fr-fr",
  de: "de-de",
  "pt-br": "pt-br",
};

const badgeWidths: Record<Locale, number> = {
  en: 120,
  "zh-cn": 109,
  "zh-tw": 109,
  ja: 109,
  ko: 130,
  es: 120,
  fr: 127,
  de: 120,
  "pt-br": 120,
};

export function AppStoreBadge({ locale }: AppStoreBadgeProps) {
  const marketingLocale = marketingLocales[locale];
  const badgeUrl = (style: "black" | "white") =>
    `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/${style}/${marketingLocale}?size=250x83`;

  return (
    <span className="app-store-badge-artwork">
      <Image
        alt=""
        className="app-store-badge-image app-store-badge-black"
        height={40}
        src={badgeUrl("black")}
        unoptimized
        width={badgeWidths[locale]}
      />
      <Image
        alt=""
        className="app-store-badge-image app-store-badge-white"
        height={40}
        src={badgeUrl("white")}
        unoptimized
        width={badgeWidths[locale]}
      />
    </span>
  );
}

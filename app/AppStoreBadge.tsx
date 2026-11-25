import type { Locale } from "@/lib/locales";

type AppStoreBadgeProps = {
  locale: Locale;
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
  const badgeUrl = (style: "black" | "white") =>
    `/product/app-store/${locale}-${style}.svg`;

  return (
    <span aria-hidden="true" className="app-store-badge-artwork" style={{ aspectRatio: badgeWidths[locale] / 40 }}>
      <span className="app-store-badge-fallback">App Store</span>
      <span
        className="app-store-badge-image app-store-badge-black"
        style={{ backgroundImage: `url("${badgeUrl("black")}")` }}
      />
      <span
        className="app-store-badge-image app-store-badge-white"
        style={{ backgroundImage: `url("${badgeUrl("white")}")` }}
      />
    </span>
  );
}

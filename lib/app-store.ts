import type { Locale } from "./locales";

export const APP_STORE_ID = "6784645886";

const productUrls: Record<Locale, string> = {
  en: "https://apps.apple.com/us/app/musicpod-classic-music-player/id6784645886",
  "zh-cn": "https://apps.apple.com/cn/app/musicpod-%E7%BB%8F%E5%85%B8%E5%A4%8D%E5%8F%A4pod%E6%92%AD%E6%94%BE%E5%99%A8/id6784645886",
  "zh-tw": "https://apps.apple.com/tw/app/musicpod-%E5%BE%A9%E5%8F%A4%E9%9F%B3%E6%A8%82%E6%92%AD%E6%94%BE%E5%99%A8/id6784645886",
  ja: "https://apps.apple.com/jp/app/musicpod-%E3%83%AC%E3%83%88%E3%83%AD%E9%9F%B3%E6%A5%BD%E3%83%97%E3%83%AC%E3%83%BC%E3%83%A4%E3%83%BC/id6784645886",
  ko: "https://apps.apple.com/kr/app/musicpod-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EC%9D%8C%EC%95%85-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4/id6784645886",
  es: "https://apps.apple.com/mx/app/musicpod-reproductor-cl%C3%A1sico/id6784645886",
  fr: "https://apps.apple.com/fr/app/musicpod-lecteur-classique/id6784645886",
  de: "https://apps.apple.com/de/app/musicpod-klassischer-player/id6784645886",
  "pt-br": "https://apps.apple.com/br/app/musicpod-player-de-m%C3%BAsica/id6784645886",
};

export function appStoreUrl(locale: Locale) {
  return productUrls[locale];
}

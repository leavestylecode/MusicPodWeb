import type { Locale } from "./locales";

export type CaptureScene = "classic" | "home" | "cover-flow" | "immersive" | "theme";

export function capturePath(locale: Locale, scene: CaptureScene) {
  return `/product/captures/${locale}/${scene}.webp`;
}

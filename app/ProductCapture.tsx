import Image from "next/image";
import type { Locale } from "../lib/locales";
import { capturePath, type CaptureScene } from "../lib/product-captures";

import "./product-capture.css";

type ProductCaptureProps = {
  locale: Locale;
  scene: CaptureScene;
  alt: string;
  detail?: boolean;
};

export function ProductCapture({ locale, scene, alt, detail = false }: ProductCaptureProps) {
  const screen = (
    <Image
      alt={alt}
      className="product-capture"
      height={1311}
      loading="lazy"
      src={capturePath(locale, scene)}
      unoptimized
      width={603}
    />
  );

  return detail
    ? <div className="capture-detail" data-scene={scene}>{screen}</div>
    : <div className="product-device">{screen}</div>;
}

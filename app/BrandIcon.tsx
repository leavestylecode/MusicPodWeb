import type { CSSProperties } from "react";
import Image from "next/image";

type BrandIconProps = {
  className?: string;
  priority?: boolean;
  size: number;
};

export function BrandIcon({ className = "", priority = false, size }: BrandIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`brand-icon ${className}`.trim()}
      style={{ "--brand-icon-size": `${size}px` } as CSSProperties}
    >
      <Image
        alt=""
        className="brand-icon-image brand-icon-light"
        height={size}
        priority={priority}
        src="/app-icon.png"
        unoptimized
        width={size}
      />
      <Image
        alt=""
        className="brand-icon-image brand-icon-dark"
        height={size}
        priority={priority}
        src="/app-icon-dark.png"
        unoptimized
        width={size}
      />
    </span>
  );
}

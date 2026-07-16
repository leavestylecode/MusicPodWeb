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
      <span className="brand-icon-dark brand-icon-dark-art">
        <span className="brand-icon-wheel">
          <span className="brand-icon-menu">MENU</span>
          <span className="brand-icon-skip brand-icon-previous"><i /><i /></span>
          <span className="brand-icon-skip brand-icon-next"><i /><i /></span>
          <span className="brand-icon-pause"><i /><i /></span>
          <span className="brand-icon-center" />
        </span>
      </span>
    </span>
  );
}

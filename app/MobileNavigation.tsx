"use client";

import { useRef } from "react";
import { useExclusiveDetails } from "../lib/use-exclusive-details";

type MobileNavigationProps = {
  label: string;
  items: readonly { href: string; label: string }[];
};

export function MobileNavigation({ items, label }: MobileNavigationProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  useExclusiveDetails(detailsRef);

  return (
    <details className="mobile-navigation" ref={detailsRef}>
      <summary aria-label={label}>
        <span aria-hidden="true" className="mobile-navigation-icon"><i /><i /><i /></span>
      </summary>
      <nav aria-label={label} className="mobile-navigation-popover">
        {items.map((item, index) => (
          <a href={item.href} key={item.href} onClick={() => detailsRef.current?.removeAttribute("open")}>
            <span>0{index + 1}</span>
            <strong>{item.label}</strong>
            <i aria-hidden="true">↘</i>
          </a>
        ))}
      </nav>
    </details>
  );
}

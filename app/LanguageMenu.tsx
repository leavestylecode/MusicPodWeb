"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { rememberLocale } from "../lib/browser-locale";
import {
  localeDetails,
  locales,
  localizedHref,
  type Locale,
} from "../lib/locales";

export function LanguageMenu({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname() ?? `/${locale}`;
  const [locationParts, setLocationParts] = useState({ search: "", hash: "" });
  const current = localeDetails[locale];

  useEffect(() => {
    const syncLocationParts = () => {
      setLocationParts({
        search: window.location.search,
        hash: window.location.hash,
      });
    };

    syncLocationParts();
    window.addEventListener("hashchange", syncLocationParts);
    window.addEventListener("popstate", syncLocationParts);

    return () => {
      window.removeEventListener("hashchange", syncLocationParts);
      window.removeEventListener("popstate", syncLocationParts);
    };
  }, [pathname]);

  const selectLocale = (nextLocale: Locale) => {
    rememberLocale(nextLocale);
    detailsRef.current?.removeAttribute("open");
  };

  return (
    <details className="language-menu" ref={detailsRef}>
      <summary aria-label={`${label}: ${current.label}`}>
        <span className="language-current-long">{current.label}</span>
        <span className="language-current-short">{current.shortLabel}</span>
        <span className="language-chevron" aria-hidden="true">⌄</span>
      </summary>
      <div className="language-popover" aria-label={label} role="group">
        {locales.map((nextLocale) => {
          const option = localeDetails[nextLocale];

          return (
            <Link
              aria-current={nextLocale === locale ? "page" : undefined}
              href={localizedHref(
                nextLocale,
                pathname,
                locationParts.search,
                locationParts.hash,
              )}
              hrefLang={option.htmlLang}
              key={nextLocale}
              lang={option.htmlLang}
              onClick={() => selectLocale(nextLocale)}
              prefetch={false}
            >
              <span>{option.label}</span>
              {nextLocale === locale ? <span aria-hidden="true">✓</span> : null}
            </Link>
          );
        })}
      </div>
    </details>
  );
}

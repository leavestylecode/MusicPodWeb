"use client";

import Link from "next/link";
import { useRef } from "react";
import { rememberLocale } from "../lib/browser-locale";
import { localeDetails, locales, type Locale } from "../lib/locales";

export function LanguageMenu({
  locale,
  label,
  pathSuffix = "",
}: {
  locale: Locale;
  label: string;
  pathSuffix?: string;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const current = localeDetails[locale];

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
              href={`/${nextLocale}${pathSuffix}`}
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

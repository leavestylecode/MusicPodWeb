"use client";

import { useEffect, useRef, useState } from "react";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeToggleLabels = {
  label: string;
  system: string;
  light: string;
  dark: string;
};

const storageKey = "musicpod-theme";
const preferenceIcons: Record<ThemePreference, string> = {
  system: "◐",
  light: "☀︎",
  dark: "☾",
};

function isThemePreference(value: string | undefined): value is ThemePreference {
  return value === "system" || value === "light" || value === "dark";
}

function resolveTheme(preference: ThemePreference, systemDark: boolean): ResolvedTheme {
  return preference === "system" ? (systemDark ? "dark" : "light") : preference;
}

function applyTheme(preference: ThemePreference, systemDark: boolean) {
  const resolved = resolveTheme(preference, systemDark);
  const root = document.documentElement;
  root.dataset.theme = resolved;
  root.dataset.themePreference = preference;
  root.style.colorScheme = resolved;
  return resolved;
}

export function ThemeToggle({ labels }: { labels: ThemeToggleLabels }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const preferenceRef = useRef<ThemePreference>("system");
  const [preference, setPreference] = useState<ThemePreference>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("light");

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const initial = document.documentElement.dataset.themePreference;
    const nextPreference = isThemePreference(initial) ? initial : "system";
    preferenceRef.current = nextPreference;
    const initialResolved = applyTheme(nextPreference, media.matches);
    const frame = window.requestAnimationFrame(() => {
      setPreference(nextPreference);
      setResolved(initialResolved);
    });

    const handleSystemChange = () => {
      if (preferenceRef.current === "system") {
        setResolved(applyTheme("system", media.matches));
      }
    };

    media.addEventListener("change", handleSystemChange);
    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", handleSystemChange);
    };
  }, []);

  const selectTheme = (nextPreference: ThemePreference) => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    preferenceRef.current = nextPreference;
    setPreference(nextPreference);
    setResolved(applyTheme(nextPreference, media.matches));

    try {
      if (nextPreference === "system") localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, nextPreference);
    } catch {}

    detailsRef.current?.removeAttribute("open");
  };

  const preferenceLabels: Record<ThemePreference, string> = {
    system: labels.system,
    light: labels.light,
    dark: labels.dark,
  };

  return (
    <details className="theme-menu" ref={detailsRef}>
      <summary aria-label={`${labels.label}: ${preferenceLabels[preference]}`}>
        <span aria-hidden="true" className="theme-summary-icon">
          {resolved === "dark" ? preferenceIcons.dark : preferenceIcons.light}
        </span>
      </summary>
      <div aria-label={labels.label} className="theme-popover" role="group">
        {(Object.keys(preferenceLabels) as ThemePreference[]).map((option) => (
          <button
            aria-pressed={preference === option}
            key={option}
            onClick={() => selectTheme(option)}
            type="button"
          >
            <span aria-hidden="true" className="theme-option-icon">{preferenceIcons[option]}</span>
            <span>{preferenceLabels[option]}</span>
            <span aria-hidden="true" className="theme-option-check">
              {preference === option ? "✓" : ""}
            </span>
          </button>
        ))}
      </div>
    </details>
  );
}

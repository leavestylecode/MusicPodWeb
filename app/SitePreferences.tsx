import { getDictionary } from "../lib/dictionaries";
import type { Locale } from "../lib/locales";
import { LanguageMenu } from "./LanguageMenu";
import { ThemeToggle } from "./ThemeToggle";

export function SitePreferences({ locale }: { locale: Locale }) {
  const { nav, theme } = getDictionary(locale);

  return (
    <div className="site-preferences">
      <ThemeToggle labels={theme} />
      <LanguageMenu label={nav.language} locale={locale} />
    </div>
  );
}

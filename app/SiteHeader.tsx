import Link from "next/link";
import { getDictionary } from "../lib/dictionaries";
import { localePath, type Locale } from "../lib/locales";
import { BrandIcon } from "./BrandIcon";

export function SiteHeader({ locale }: { locale: Locale }) {
  const { nav } = getDictionary(locale);

  return (
    <header className="site-header">
      <nav aria-label={nav.label}>
        <Link aria-label={nav.home} className="brand" href={localePath(locale)}>
          <BrandIcon priority size={30} />
          <span>MusicPod</span>
        </Link>
      </nav>
    </header>
  );
}

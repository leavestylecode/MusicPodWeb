import type { Locale } from "../lib/locales";
import { developerHomeUrl, PORTFOLIO_APPS } from "../lib/site";

const headings: Record<Locale, string> = {
  en: "More apps by LeaveStyle",
  "zh-cn": "LeaveStyle 的更多产品",
  "zh-tw": "LeaveStyle 的更多產品",
  ja: "LeaveStyle のほかのアプリ",
  ko: "LeaveStyle의 다른 앱",
  es: "Más apps de LeaveStyle",
  fr: "Autres apps de LeaveStyle",
  de: "Weitere Apps von LeaveStyle",
  "pt-br": "Mais apps da LeaveStyle",
};

export function PortfolioLinks({ locale }: { locale: Locale }) {
  return (
    <nav className="portfolio-links" aria-label={headings[locale]}>
      <a
        className="footer-link"
        href={developerHomeUrl(locale)}
        rel="external noopener"
        target="_blank"
      >
        {headings[locale]}
      </a>
      {PORTFOLIO_APPS.map((product) => (
        <a
          className="footer-link"
          href={product.href(locale)}
          key={product.name}
          rel="external noopener"
          target="_blank"
        >
          {product.name}
        </a>
      ))}
    </nav>
  );
}

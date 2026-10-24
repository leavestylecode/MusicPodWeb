import type { Locale } from "../lib/locales";

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
  const zh = locale === "zh-cn" || locale === "zh-tw";
  const products = [
    { name: "MusicPal", href: `https://www.musicpal.app/${locale === "zh-tw" ? "tw" : zh ? "zh" : "en"}` },
    { name: "DeepMusic", href: `https://www.deepmusic.app/${zh ? "zh/" : ""}` },
    { name: "ImageFit", href: `https://imagefit.app/${zh ? "zh" : "en"}` },
  ];

  return (
    <nav className="portfolio-links" aria-label={headings[locale]}>
      <a className="footer-link" href={`https://www.leavestyle.com/${zh ? "" : "en"}`}>{headings[locale]}</a>
      {products.map((product) => <a className="footer-link" href={product.href} key={product.name}>{product.name}</a>)}
    </nav>
  );
}

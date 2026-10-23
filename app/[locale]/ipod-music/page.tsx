import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandIcon } from "../../BrandIcon";
import { LanguageMenu } from "../../LanguageMenu";
import { ThemeToggle } from "../../ThemeToggle";
import "../../guide-page.css";
import { appStoreUrl } from "../../../lib/app-store";
import { getDictionary } from "../../../lib/dictionaries";
import { getIpodMusicDictionary } from "../../../lib/ipod-music-dictionaries";
import { isLocale, localeDetails, localePath, type Locale } from "../../../lib/locales";
import {
  DEVELOPER_SCHEMA,
  languageAlternates,
  SITE_CONTENT_UPDATED,
  SITE_NAME,
  SITE_OG_IMAGE,
  WEBSITE_SCHEMA_ID,
  siteUrl,
} from "../../../lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) {
    return {
      title: "Page not found — MusicPod",
      robots: { index: false, follow: false },
    };
  }

  const locale: Locale = rawLocale;
  const messages = getIpodMusicDictionary(locale);
  const canonicalPath = localePath(locale, "/ipod-music");

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: siteUrl(canonicalPath),
      languages: languageAlternates("/ipod-music"),
    },
    openGraph: {
      type: "website",
      locale: localeDetails[locale].openGraphLocale,
      siteName: SITE_NAME,
      title: messages.meta.title,
      description: messages.meta.social,
      url: siteUrl(canonicalPath),
      images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: messages.meta.title, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.social,
      images: [SITE_OG_IMAGE],
    },
  };
}

export default async function IpodMusicPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const siteMessages = getDictionary(locale);
  const messages = getIpodMusicDictionary(locale);
  const home = localePath(locale);
  const guideUrl = siteUrl(localePath(locale, "/ipod-music"));
  const downloadHref = appStoreUrl(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: messages.meta.title,
        description: messages.meta.description,
        url: guideUrl,
        dateModified: SITE_CONTENT_UPDATED,
        inLanguage: localeDetails[locale].htmlLang,
        author: DEVELOPER_SCHEMA,
        publisher: DEVELOPER_SCHEMA,
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: siteUrl(home) },
            { "@type": "ListItem", position: 2, name: messages.pageLabel, item: guideUrl },
          ],
        },
      },
    ],
  };

  return (
    <div className="site-shell privacy-shell guide-page">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />

      <a className="skip-link" href="#main-content">{siteMessages.skip}</a>

      <header className="site-header privacy-header">
        <Link aria-label={siteMessages.nav.home} className="brand" href={home}>
          <BrandIcon priority size={34} />
          <span>MusicPod</span>
        </Link>

        <div className="header-actions">
          <ThemeToggle labels={siteMessages.theme} />
          <LanguageMenu label={siteMessages.nav.language} locale={locale} />
        </div>
      </header>

      <main className="privacy-main" id="main-content" tabIndex={-1}>
        <section aria-labelledby="ipod-music-title" className="privacy-hero">
          <div className="privacy-hero-copy">
            <h1 id="ipod-music-title">{messages.pageLabel}</h1>
          </div>
        </section>

        <div className="privacy-layout">
          <article className="privacy-document">
            {messages.sections.map((section) => (
              <section className="privacy-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                <div className="privacy-section-body">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.steps ? (
                    <ol className="guide-steps">
                      {section.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  ) : null}
                  {section.items ? (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                  {section.id === "click-wheel" ? (
                    <figure className="guide-screenshot">
                      <Image alt={messages.screenshot.alt} height={2622} loading="lazy" sizes="(max-width: 760px) 70vw, 240px" src="/product/musicpod-home.webp" unoptimized width={1206} />
                    </figure>
                  ) : null}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <p>© 2026 MusicPod</p>
        <div className="footer-meta">
          <Link className="footer-link" href={`${home}/privacy`}>{siteMessages.footer.privacy}</Link>
          <a className="footer-link" href={downloadHref} rel="external noopener" target="_blank">App Store</a>
        </div>
      </footer>
    </div>
  );
}

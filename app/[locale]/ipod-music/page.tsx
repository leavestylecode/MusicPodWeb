import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "../../AppStoreBadge";
import { BrandIcon } from "../../BrandIcon";
import { LanguageMenu } from "../../LanguageMenu";
import { ThemeToggle } from "../../ThemeToggle";
import { appStoreUrl } from "../../../lib/app-store";
import { getDictionary } from "../../../lib/dictionaries";
import { getIpodMusicDictionary } from "../../../lib/ipod-music-dictionaries";
import { isLocale, localeDetails, localePath, type Locale } from "../../../lib/locales";
import {
  DEVELOPER_BRAND,
  DEVELOPER_SCHEMA,
  DEVELOPER_URL,
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
      {
        "@type": "FAQPage",
        "@id": `${guideUrl}#faq`,
        inLanguage: localeDetails[locale].htmlLang,
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        mainEntity: messages.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <div className="site-shell privacy-shell">
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

        <nav aria-label={messages.pageLabel} className="site-nav privacy-header-title">
          <span className="status-dot" aria-hidden="true" />
          <span>{messages.pageLabel}</span>
        </nav>

        <div className="header-actions">
          <ThemeToggle labels={siteMessages.theme} />
          <LanguageMenu label={siteMessages.nav.language} locale={locale} />
          <Link className="header-status privacy-back" href={home}>
            <span aria-hidden="true">←</span>
            {messages.back}
          </Link>
        </div>
      </header>

      <main className="privacy-main" id="main-content" tabIndex={-1}>
        <section aria-labelledby="ipod-music-title" className="privacy-hero">
          <div className="privacy-hero-copy">
            <p className="kicker"><span className="kicker-line" aria-hidden="true" />{messages.hero.eyebrow}</p>
            <h1 id="ipod-music-title">{messages.hero.title}</h1>
            <p className="privacy-intro">{messages.hero.intro}</p>
          </div>

          <div className="privacy-principles" role="list">
            {messages.pillars.map((pillar, index) => (
              <article className="privacy-principle" key={pillar.title} role="listitem">
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h2>{pillar.title}</h2>
                  <p>{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="privacy-layout">
          <aside className="privacy-sidebar">
            <nav aria-label={messages.toc} className="privacy-toc">
              <h2>{messages.toc}</h2>
              <ol>
                {messages.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="privacy-document">
            {messages.sections.map((section) => (
              <section className="privacy-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>

        <section aria-labelledby="ipod-music-faq-title" className="faq-section section-pad" id="faq">
          <div className="faq-heading">
            <p className="section-kicker">{messages.faq.kicker}</p>
            <h2 id="ipod-music-faq-title">{messages.faq.title}</h2>
          </div>
          <div className="faq-list">
            {messages.faq.items.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary className="faq-question">
                  <h3>{item.question}</h3>
                  <span aria-hidden="true" className="faq-toggle" />
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="availability section-pad">
          <BrandIcon className="availability-icon" size={96} />
          <p className="section-kicker">{messages.cta.kicker}</p>
          <h2>{messages.cta.title}</h2>
          <p>{messages.cta.body}</p>
          <a
            aria-label={`${messages.cta.badgeKicker} ${messages.cta.badge}`}
            className="availability-badge"
            href={downloadHref}
            rel="external noopener"
            target="_blank"
          >
            <AppStoreBadge locale={locale} />
          </a>
          <small>{messages.cta.requirement}</small>
        </section>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" href={home}>
          <BrandIcon size={28} />
          <strong>MusicPod</strong>
        </Link>
        <div className="footer-meta">
          <Link className="footer-link" href={`${home}/privacy`}>{siteMessages.footer.privacy}</Link>
          <span aria-current="page" className="footer-link">{siteMessages.footer.ipodMusic}</span>
          <a
            className="footer-link"
            href={DEVELOPER_URL}
            rel="author external noopener"
            target="_blank"
          >
            {siteMessages.footer.developer} {DEVELOPER_BRAND}<span aria-hidden="true"> ↗</span>
          </a>
          <p>© 2026 MusicPod. {siteMessages.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

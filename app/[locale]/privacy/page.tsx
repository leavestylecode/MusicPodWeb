import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "../../../lib/dictionaries";
import { getPrivacyDictionary } from "../../../lib/privacy-dictionaries";
import { privacyPolicyConfig } from "../../../lib/privacy-config";
import { isLocale, localeDetails, localePath, type Locale } from "../../../lib/locales";
import { languageAlternates, siteUrl } from "../../../lib/site";
import { BrandIcon } from "../../BrandIcon";
import { LanguageMenu } from "../../LanguageMenu";
import { ThemeToggle } from "../../ThemeToggle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const messages = getPrivacyDictionary(locale);
  const canonicalPath = localePath(locale, "/privacy");

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: siteUrl(canonicalPath),
      languages: languageAlternates("/privacy"),
    },
    openGraph: {
      type: "website",
      locale: localeDetails[locale].openGraphLocale,
      siteName: "MusicPod",
      title: messages.meta.title,
      description: messages.meta.description,
      url: siteUrl(canonicalPath),
      images: [{ url: "/og.png", width: 1200, height: 630, alt: messages.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: ["/og.png"],
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const siteMessages = getDictionary(locale);
  const messages = getPrivacyDictionary(locale);
  const home = localePath(locale);
  const privacyUrl = siteUrl(localePath(locale, "/privacy"));
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: messages.meta.title,
    description: messages.meta.description,
    url: privacyUrl,
    dateModified: privacyPolicyConfig.lastUpdated,
    inLanguage: localeDetails[locale].htmlLang,
    isPartOf: {
      "@type": "WebSite",
      name: "MusicPod",
      url: siteUrl(),
    },
  };

  return (
    <div className="site-shell privacy-shell">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema).replace(/</g, "\\u003c") }}
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
        <section aria-labelledby="privacy-title" className="privacy-hero">
          <div className="privacy-hero-copy">
            <p className="kicker"><span className="kicker-line" aria-hidden="true" />{messages.hero.eyebrow}</p>
            <h1 id="privacy-title">{messages.hero.title}</h1>
            <p className="privacy-intro">{messages.hero.intro}</p>
            <div className="privacy-meta" aria-label={`${messages.hero.updated} · ${messages.hero.version}`}>
              <span>{messages.hero.updated}</span>
              <span aria-hidden="true">·</span>
              <span>{messages.hero.version}</span>
            </div>
          </div>

          <div className="privacy-principles" role="list">
            {messages.principles.map((principle, index) => (
              <article className="privacy-principle" key={principle.title} role="listitem">
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <h2>{principle.title}</h2>
                  <p>{principle.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="privacy-layout">
          <aside className="privacy-sidebar">
            <nav aria-label={messages.contents} className="privacy-toc">
              <h2>{messages.contents}</h2>
              <ol>
                {messages.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, "")}</a>
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
                {section.note ? <aside className="privacy-note">{section.note}</aside> : null}
                {section.links ? (
                  <div className="privacy-source-links">
                    {section.links.map((link) => (
                      <a
                        href={privacyPolicyConfig.links[link.target]}
                        key={link.target}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {link.label}<span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                ) : null}
                {section.id === "contact" ? (
                  <dl className="privacy-contact-card">
                    <div><dt>{messages.contact.operator}</dt><dd>{privacyPolicyConfig.operator}</dd></div>
                    <div><dt>{messages.contact.product}</dt><dd>{privacyPolicyConfig.product}</dd></div>
                    <div>
                      <dt>{messages.contact.email}</dt>
                      <dd><a href={`mailto:${privacyPolicyConfig.email}`}>{privacyPolicyConfig.email}</a></dd>
                    </div>
                  </dl>
                ) : null}
              </section>
            ))}

            <p className="privacy-translation-note">{messages.translationNote}</p>
          </article>
        </div>
      </main>

      <footer className="site-footer">
        <Link className="footer-brand" href={home}>
          <BrandIcon size={28} />
          <strong>MusicPod</strong>
        </Link>
        <div className="footer-meta">
          <span aria-current="page" className="footer-link">{siteMessages.footer.privacy}</span>
          <p>© 2026 MusicPod. {siteMessages.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

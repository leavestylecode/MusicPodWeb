import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "../AppStoreBadge";
import { BrandIcon } from "../BrandIcon";
import { ClickWheelDemo } from "../ClickWheelDemo";
import { CoverFlowShowcase } from "../CoverFlowShowcase";
import { LanguageMenu } from "../LanguageMenu";
import { MobileNavigation } from "../MobileNavigation";
import { PersonalizationShowcase } from "../PersonalizationShowcase";
import { SpotlightCard } from "../SpotlightCard";
import { StrandsShowcase } from "../StrandsShowcase";
import { ThemeToggle } from "../ThemeToggle";
import { appStoreUrl } from "../../lib/app-store";
import { getDictionary } from "../../lib/dictionaries";
import { getProductCopy } from "../../lib/product-dictionaries";
import "../product-page.css";
import { isLocale, localeDetails, localePath } from "../../lib/locales";
import { getRewardDictionary } from "../../lib/reward-dictionaries";
import {
  DEVELOPER_BRAND,
  DEVELOPER_SCHEMA,
  DEVELOPER_URL,
  SITE_NAME,
  SITE_OG_IMAGE,
  SOFTWARE_SCHEMA_ID,
  WEBSITE_SCHEMA_ID,
  siteUrl,
} from "../../lib/site";

const libraryIcons = [
  "/product/icons/favorites.webp",
  "/product/icons/playlists.webp",
  "/product/icons/albums.webp",
  "/product/icons/shuffle.webp",
] as const;

export default async function MusicPodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const messages = getDictionary(locale);
  const product = getProductCopy(locale);
  const rewardMessages = getRewardDictionary(locale);
  const home = localePath(locale);
  const rewardHref = localePath(locale, "/reward");
  const downloadHref = appStoreUrl(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      DEVELOPER_SCHEMA,
      {
        "@type": "WebSite",
        "@id": WEBSITE_SCHEMA_ID,
        name: SITE_NAME,
        url: siteUrl(),
        inLanguage: localeDetails[locale].htmlLang,
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
      },
      {
        "@type": "SoftwareApplication",
        "@id": SOFTWARE_SCHEMA_ID,
        name: SITE_NAME,
        alternateName: "iPod music player for iPhone",
        description: messages.meta.description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "iOS 17 or later",
        url: siteUrl(home),
        downloadUrl: downloadHref,
        image: siteUrl(SITE_OG_IMAGE),
        screenshot: siteUrl("/product/musicpod-home.webp"),
        inLanguage: localeDetails[locale].htmlLang,
        featureList: [
          messages.wheel.kicker,
          messages.highlights.coverFlow.kicker,
          "Apple Music",
          product.localMusic,
          product.photoTitle,
        ],
        author: { "@id": DEVELOPER_SCHEMA["@id"] },
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <div className="site-shell product-page">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />

      <a className="skip-link" href="#main-content">{messages.skip}</a>

      <header className="site-header">
        <Link aria-label={messages.nav.home} className="brand" href={home}>
          <BrandIcon priority size={34} />
          <span>MusicPod</span>
        </Link>

        <nav aria-label={messages.nav.label} className="site-nav">
          <a href="#experience">{messages.nav.experience}</a>
          <a href="#highlights">{messages.nav.highlights}</a>
          <a href="#personalize">{messages.nav.personalize}</a>
        </nav>

        <MobileNavigation
          items={[
            { href: "#experience", label: messages.nav.experience },
            { href: "#highlights", label: messages.nav.highlights },
            { href: "#personalize", label: messages.nav.personalize },
            { href: rewardHref, label: rewardMessages.navLabel },
          ]}
          label={messages.nav.label}
        />

        <div className="header-actions">
          <ThemeToggle labels={messages.theme} />
          <LanguageMenu label={messages.nav.language} locale={locale} />
          <Link className="header-status" href={rewardHref}>
            <span className="status-dot" aria-hidden="true" />
            {rewardMessages.navLabel}
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-title" className="mp-hero" id="top">
          <div className="mp-hero-copy">
            <h1 id="hero-title">{product.title.map((line) => <span key={line}>{line}</span>)}</h1>
            <p className="mp-intro">{product.intro}</p>
            <div className="mp-hero-actions">
              <a
                aria-label={`${messages.hero.primaryKicker} ${messages.hero.primary}`}
                className="mp-store-link"
                href={downloadHref}
                rel="external noopener"
                target="_blank"
              >
                <AppStoreBadge locale={locale} />
              </a>
            </div>
          </div>
          <figure className="mp-hero-visual">
            <picture>
              <source media="(max-width: 760px)" srcSet="/product/studio/hands.webp" />
              <source media="(min-width: 761px)" sizes="100vw" srcSet="/product/studio/hero-1280.webp 1280w, /product/studio/hero.webp 1916w" />
              <Image
                alt={product.heroAlt}
                className="mp-hero-image"
                fetchPriority="high"
                height={821}
                loading="eager"
                src="/product/studio/hero.webp"
                unoptimized
                width={1916}
              />
            </picture>
          </figure>
        </section>

        <section aria-labelledby="experience-title" className="mp-experience mp-container mp-section" id="experience">
          <div className="mp-copy">
            <h2 id="experience-title"><Link href={`${home}/ipod-music#click-wheel`}>{messages.wheel.title}</Link></h2>
            <p className="mp-description">{messages.wheel.body}</p>
            <ul className="mp-library-icons" aria-label={messages.highlights.library.kicker}>
              {libraryIcons.map((icon, index) => (
                <li key={icon}>
                  <Image alt="" height={72} src={icon} unoptimized width={72} />
                  <span>{messages.highlights.library.items[index]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mp-wheel-stage">
            <ClickWheelDemo messages={messages.wheel} />
          </div>
        </section>

        <section aria-labelledby="albums-title" className="mp-albums mp-section" id="highlights">
          <div className="mp-container">
            <div className="mp-section-heading">
              <div>
                <h2 id="albums-title">{product.cover.map((line) => <span key={line}>{line}</span>)}</h2>
              </div>
              <p className="mp-description">{messages.highlights.coverFlow.body}</p>
            </div>
            <SpotlightCard className="mp-album-stage" spotlightColor="rgba(255, 255, 255, 0.08)">
              <CoverFlowShowcase
                groupLabel={messages.highlights.coverFlow.body}
                selectTemplate={messages.wheel.select}
              />
            </SpotlightCard>
          </div>
        </section>

        <section aria-labelledby="listening-title" className="mp-listening mp-section">
          <div className="mp-listening-grid mp-container">
            <div className="mp-copy">
              <h2 id="listening-title">{product.listen.map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="mp-description">{messages.highlights.nowPlaying.body}</p>
              <div className="mp-strands-preview">
                <StrandsShowcase
                  ariaLabel={`${messages.highlights.nowPlaying.title} ${messages.highlights.nowPlaying.track}`}
                  artist={messages.highlights.nowPlaying.artist}
                  track={messages.highlights.nowPlaying.track}
                />
              </div>
            </div>
            <figure className="mp-vinyl-visual">
              <Image alt={product.vinylAlt} height={933} sizes="(max-width: 760px) 100vw, 560px" src="/product/studio/vinyl-player.webp" unoptimized width={700} />
            </figure>
          </div>
        </section>

        <section aria-labelledby="library-title" className="mp-library mp-container mp-section">
          <div className="mp-library-heading">
            <h2 id="library-title">{product.libraryTitle}</h2>
          </div>
          <div className="mp-sources">
            <article>
              <span aria-hidden="true" className="mp-source-symbol">♪</span>
              <h3>Apple Music</h3>
              <p>{product.appleBody}</p>
            </article>
            <article>
              <svg aria-hidden="true" className="mp-source-symbol" fill="none" viewBox="0 0 48 48"><path d="M6 15a3 3 0 0 1 3-3h11l5 5h14a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" stroke="currentColor" strokeWidth="2"/><path d="M25 23v9m0-9 8-2v9m-8 2c0 3-6 4-6 1s6-4 6-1Zm8-2c0 3-6 4-6 1s6-4 6-1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              <h3><Link href={`${home}/ipod-music#import-local-music`}>{product.localMusic}</Link></h3>
              <p>{product.localBody}</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="style-title" className="mp-personalize mp-section" id="personalize">
          <div className="mp-personalize-grid mp-container">
            <PersonalizationShowcase
              combinationsLabel={messages.personalize.combinations}
              paletteLabel={messages.personalize.palette}
              presetNames={messages.personalize.presets}
            />
            <div className="mp-copy">
              <h2 id="style-title">{product.style.map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="mp-description">{messages.personalize.body}</p>
              <div className="mp-photo-note">
                <Image alt={product.photoAlt} height={1241} src="/product/studio/photo-background.webp" unoptimized width={600} />
                <h3>{product.photoTitle}</h3>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="mp-faq mp-container mp-section" id="faq">
          <div className="mp-copy">
            <h2 id="faq-title">{messages.faq.kicker}</h2>
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

        <section aria-labelledby="download-title" className="mp-download" id="availability">
          <BrandIcon size={80} />
          <h2 id="download-title">{messages.availability.title}</h2>
          <a
            aria-label={`${messages.availability.badgeKicker} ${messages.availability.badge}`}
            className="mp-store-link"
            href={downloadHref}
            rel="external noopener"
            target="_blank"
          >
            <AppStoreBadge locale={locale} />
          </a>
          <small>{product.requirement}</small>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <BrandIcon size={28} />
          <strong>MusicPod</strong>
        </div>
        <div className="footer-meta">
          <Link className="footer-link" href={`${home}/ipod-music`}>{messages.footer.ipodMusic}</Link>
          <Link className="footer-link" href={`${home}/privacy`}>{messages.footer.privacy}</Link>
          <a
            className="footer-link"
            href={DEVELOPER_URL}
            rel="author external noopener"
            target="_blank"
          >
            {DEVELOPER_BRAND}<span aria-hidden="true"> ↗</span>
          </a>
          <p>© 2026 MusicPod</p>
        </div>
      </footer>
    </div>
  );
}

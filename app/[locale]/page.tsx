import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "../AppStoreBadge";
import { BrandIcon } from "../BrandIcon";
import { ProductCapture } from "../ProductCapture";
import { SiteHeader } from "../SiteHeader";
import { PortfolioLinks } from "../PortfolioLinks";
import { appStoreUrl } from "../../lib/app-store";
import { getDictionary } from "../../lib/dictionaries";
import { getIpodMusicDictionary } from "../../lib/ipod-music-dictionaries";
import { getProductCopy } from "../../lib/product-dictionaries";
import "../product-page.css";
import { isLocale, localePath } from "../../lib/locales";
import { DEVELOPER_BRAND, DEVELOPER_URL } from "../../lib/site";
import { buildHomeStructuredData, serializeJsonLd } from "../../lib/structured-data";

export default async function MusicPodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale;
  const messages = getDictionary(locale);
  const guide = getIpodMusicDictionary(locale);
  const product = getProductCopy(locale);
  const home = localePath(locale);
  const downloadHref = appStoreUrl(locale);
  const structuredData = buildHomeStructuredData(locale);

  return (
    <div className="site-shell product-page">
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
        type="application/ld+json"
      />

      <a className="skip-link" href="#main-content">{messages.skip}</a>

      <SiteHeader locale={locale} />

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-title" className="mp-hero" id="top">
          <picture className="mp-hero-art">
            <source media="(max-width: 540px)" srcSet="/product/studio/player-in-hand-mobile.webp" />
            <Image
              alt={product.captures.classic}
              fetchPriority="high"
              height={854}
              loading="eager"
              src="/product/studio/player-in-hand.webp"
              unoptimized
              width={1916}
            />
          </picture>
          <div className="mp-hero-content mp-container">
            <div className="mp-hero-copy">
              <h1 id="hero-title"><span>{product.title[0]}</span>{" "}<span>{product.title[1]}</span></h1>
              <p className="mp-intro">{product.intro}</p>
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
        </section>

        <section aria-labelledby="library-title" className="mp-container mp-section" id="music-sources">
          <h2 id="library-title">{product.libraryTitle}</h2>
          <div className="mp-sources">
            <article className="mp-source">
              <Image alt="" className="mp-source-icon" height={48} src="/product/sources/apple-music.png" unoptimized width={48} />
              <h3>Apple Music</h3>
              <p>{product.appleBody}</p>
              <p className="mp-source-requirement">{product.appleRequirement}</p>
            </article>
            <article className="mp-source">
              <Image alt="" className="mp-source-icon" height={42} src="/product/sources/spotify.svg" unoptimized width={42} />
              <h3>Spotify</h3>
              <p>{product.spotifyBody}</p>
              <p className="mp-source-requirement">{product.spotifyRequirement}</p>
            </article>
            <article className="mp-source">
              <div className="mp-source-icon mp-source-local">
                <svg aria-hidden="true" fill="none" height="29" viewBox="0 0 32 32" width="29">
                  <path d="M3.5 8.5h9l3 3h13v13a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2zM17 21v-6l5-1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <ellipse cx="15.3" cy="21.4" fill="currentColor" rx="2.4" ry="1.7" transform="rotate(-14 15.3 21.4)" />
                </svg>
              </div>
              <h3>{product.localMusic}</h3>
              <p>{product.localBody}</p>
              <p className="mp-source-requirement">{product.localRequirement}</p>
            </article>
          </div>
        </section>

        <section aria-labelledby="experience-title" className="mp-experience mp-section" id="experience">
          <div className="mp-container">
            <h2 id="experience-title">{messages.wheel.title}</h2>
            <div className="mp-gallery" id="highlights">
              <figure>
                <ProductCapture alt={messages.wheel.kicker} detail locale={locale} scene="home" />
                <figcaption>
                  <h3>{messages.wheel.kicker}</h3>
                  <p>{messages.wheel.body}</p>
                </figcaption>
              </figure>
              <figure>
                <ProductCapture alt={product.captures.coverFlow} detail locale={locale} scene="cover-flow" />
                <figcaption>
                  <h3>{messages.highlights.coverFlow.kicker}</h3>
                  <p>{messages.highlights.coverFlow.body}</p>
                </figcaption>
              </figure>
              <figure>
                <ProductCapture alt={messages.highlights.nowPlaying.kicker} detail locale={locale} scene="immersive" />
                <figcaption>
                  <h3>{messages.highlights.nowPlaying.kicker}</h3>
                  <p>{messages.highlights.nowPlaying.body}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section aria-labelledby="style-title" className="mp-personalize mp-section" id="personalize">
          <div className="mp-personalize-grid mp-container">
            <div className="mp-theme-visual">
              <ProductCapture alt={product.captures.home} locale={locale} scene="home" />
              <ProductCapture alt={product.captures.theme} locale={locale} scene="theme" />
            </div>
            <div className="mp-copy">
              <h2 id="style-title">{messages.personalize.title}</h2>
              <p className="mp-description">{messages.personalize.body}</p>
              <fieldset className="mp-finishes">
                <legend>{messages.personalize.palette}</legend>
                <label>
                  <input id="finish-white" name="finish" type="radio" value="white" />
                  <span className="mp-swatch mp-swatch-white" aria-hidden="true" />
                  <span>{product.finish.white}</span>
                </label>
                <label>
                  <input defaultChecked name="finish" type="radio" value="green" />
                  <span className="mp-swatch mp-swatch-green" aria-hidden="true" />
                  <span>{product.finish.green}</span>
                </label>
              </fieldset>
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

      <footer className="site-footer mp-container">
        <PortfolioLinks locale={locale} />
        <div className="footer-brand">
          <BrandIcon size={28} />
          <strong>MusicPod</strong>
        </div>
        <div className="footer-meta">
          <Link className="footer-link" href={`${home}/ipod-music`}>{guide.pageLabel}</Link>
          <Link className="footer-link" href={`${home}/privacy`}>{messages.footer.privacy}</Link>
          <a
            className="footer-link"
            href={`${DEVELOPER_URL}${locale.startsWith("zh") ? "" : "en"}`}
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

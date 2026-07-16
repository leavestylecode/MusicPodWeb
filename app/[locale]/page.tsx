import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "../AppStoreBadge";
import { ClickWheelDemo } from "../ClickWheelDemo";
import { LanguageMenu } from "../LanguageMenu";
import { PersonalizationShowcase } from "../PersonalizationShowcase";
import { SpotlightCard } from "../SpotlightCard";
import { ThemeToggle } from "../ThemeToggle";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, localePath } from "../../lib/locales";

const libraryIcons = [
  "/product/icons/favorites.webp",
  "/product/icons/playlists.webp",
  "/product/icons/albums.webp",
  "/product/icons/shuffle.webp",
] as const;

const albumArtwork = [
  { src: "/product/albums/ocean.webp", width: 1400, height: 933 },
  { src: "/product/albums/desert.webp", width: 1400, height: 2489 },
  { src: "/product/albums/neon.webp", width: 1400, height: 2100 },
  { src: "/product/albums/light.webp", width: 1400, height: 927 },
  { src: "/product/albums/purple.webp", width: 1400, height: 2100 },
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
  const home = localePath(locale);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MusicPod",
    description: messages.meta.description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS 17 or later",
    url: `https://www.musicpod.app/${locale}`,
  };

  return (
    <div className="site-shell">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />

      <a className="skip-link" href="#main-content">{messages.skip}</a>

      <header className="site-header">
        <Link aria-label={messages.nav.home} className="brand" href={home}>
          <Image alt="" height="34" src="/app-icon.png" unoptimized width="34" />
          <span>MusicPod</span>
        </Link>

        <nav aria-label={messages.nav.label} className="site-nav">
          <a href="#experience">{messages.nav.experience}</a>
          <a href="#highlights">{messages.nav.highlights}</a>
          <a href="#personalize">{messages.nav.personalize}</a>
        </nav>

        <div className="header-actions">
          <ThemeToggle labels={messages.theme} />
          <LanguageMenu label={messages.nav.language} locale={locale} />
          <a className="header-status" href="#availability">
            <span className="status-dot" aria-hidden="true" />
            {messages.nav.soon}
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section aria-labelledby="hero-title" className="hero" id="top">
          <div className="hero-copy">
            <p className="kicker"><span className="kicker-line" aria-hidden="true" />{messages.hero.kicker}</p>
            <h1 className="hero-title" id="hero-title">
              <span>{messages.hero.title[0]}</span>
              <span>{messages.hero.title[1]}</span>
            </h1>
            <p className="hero-body">{messages.hero.body}</p>

            <div className="hero-actions">
              <a
                aria-label={`${messages.hero.primaryKicker} ${messages.hero.primary}`}
                className="store-button"
                href="#availability"
              >
                <AppStoreBadge locale={locale} />
              </a>
              <a className="text-button" href="#experience">
                {messages.hero.secondary}<span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul aria-label={messages.hero.productLabel} className="hero-badges">
              {messages.hero.badges.map((badge) => <li key={badge}>{badge}</li>)}
            </ul>
          </div>

          <div aria-label={messages.hero.productLabel} className="hero-product" role="group">
            <div className="product-disc" aria-hidden="true" />
            <Image className="product-float product-float-a" src="/product/icons/theme.webp" alt="" width="150" height="150" aria-hidden="true" unoptimized />
            <Image className="product-float product-float-b" src="/product/icons/playlists.webp" alt="" width="124" height="124" aria-hidden="true" unoptimized />

            <figure className="device-stage">
              <div className="device-frame">
                <span className="device-island" aria-hidden="true" />
                <Image
                  alt={messages.hero.screenshotAlt}
                  className="product-screenshot"
                  fetchPriority="high"
                  height="2622"
                  loading="eager"
                  sizes="(max-width: 760px) 72vw, 330px"
                  src="/product/musicpod-home.webp"
                  unoptimized
                  width="1206"
                />
                <span className="device-glass" aria-hidden="true" />
              </div>
              <figcaption><span>{messages.hero.actual}</span><span>{messages.hero.native}</span></figcaption>
            </figure>
          </div>
        </section>

        <section aria-label={messages.mantra.label} className="mantra section-pad">
          <p className="section-kicker">{messages.mantra.eyebrow}</p>
          <h2>{messages.mantra.words.map((word) => <span key={word}>{word}</span>)}</h2>
        </section>

        <section className="wheel-section section-pad" id="experience">
          <div className="wheel-copy reveal">
            <p className="section-kicker light">01 · {messages.wheel.kicker}</p>
            <h2>{messages.wheel.title}</h2>
            <p>{messages.wheel.body}</p>
          </div>

          <div className="wheel-panel reveal">
            <div className="interaction-label"><span aria-hidden="true" />{messages.wheel.try}</div>
            <ClickWheelDemo messages={messages.wheel} />
          </div>
        </section>

        <section className="highlights section-pad" id="highlights">
          <div className="section-heading reveal">
            <p className="section-kicker">02 · {messages.highlights.kicker}</p>
            <h2>{messages.highlights.title}</h2>
          </div>

          <div className="story-grid">
            <SpotlightCard className="story-card library-story reveal" spotlightColor="rgba(255, 45, 55, 0.13)">
              <div className="story-copy">
                <p className="card-kicker">{messages.highlights.library.kicker}</p>
                <h3>{messages.highlights.library.title}</h3>
                <p>{messages.highlights.library.body}</p>
              </div>
              <div aria-label={messages.highlights.library.kicker} className="library-ribbon" role="list">
                {libraryIcons.map((icon, index) => (
                  <div className="library-item" key={icon} role="listitem" style={{ "--item": index } as CSSProperties}>
                    <Image alt="" height="140" src={icon} unoptimized width="140" />
                    <span>{messages.highlights.library.items[index]}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard className="story-card cover-story reveal" spotlightColor="rgba(133, 96, 255, 0.24)">
              <div className="story-copy light-copy">
                <p className="card-kicker">{messages.highlights.coverFlow.kicker}</p>
                <h3>{messages.highlights.coverFlow.title}</h3>
                <p>{messages.highlights.coverFlow.body}</p>
              </div>
              <div aria-hidden="true" className="cover-flow">
                {albumArtwork.map((artwork, index) => (
                  <div className={`album album-${index + 1}`} key={artwork.src}>
                    <Image
                      alt=""
                      height={artwork.height}
                      sizes="(max-width: 620px) 150px, 220px"
                      src={artwork.src}
                      unoptimized
                      width={artwork.width}
                    />
                  </div>
                ))}
              </div>
            </SpotlightCard>

            <SpotlightCard className="story-card playing-story reveal" spotlightColor="rgba(255, 255, 255, 0.42)">
              <div className="story-copy">
                <p className="card-kicker">{messages.highlights.nowPlaying.kicker}</p>
                <h3>{messages.highlights.nowPlaying.title}</h3>
                <p>{messages.highlights.nowPlaying.body}</p>
              </div>
              <div aria-hidden="true" className="playing-visual">
                <div className="record">
                  <Image alt="" height="512" src="/product/textures/vinyl.webp" unoptimized width="512" />
                  <i />
                </div>
                <div className="track-info">
                  <strong>{messages.highlights.nowPlaying.track}</strong>
                  <span>{messages.highlights.nowPlaying.artist}</span>
                  <div className="waveform">
                    {Array.from({ length: 19 }).map((_, index) => <i key={index} style={{ "--bar": index } as CSSProperties} />)}
                  </div>
                  <div><span>1:42</span><span>3:58</span></div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        <section className="personalize section-pad" id="personalize">
          <PersonalizationShowcase
            combinationsLabel={messages.personalize.combinations}
            paletteLabel={messages.personalize.palette}
            presetNames={messages.personalize.presets}
          />

          <div className="personalize-copy reveal">
            <p className="section-kicker">03 · {messages.personalize.kicker}</p>
            <h2>{messages.personalize.title}</h2>
            <p>{messages.personalize.body}</p>
            <dl className="personalize-stats">
              {messages.personalize.stats.map((stat) => <div key={stat.label}><dt>{stat.value}</dt><dd>{stat.label}</dd></div>)}
            </dl>
          </div>
        </section>

        <section className="native-section section-pad">
          <div className="native-heading reveal">
            <p className="section-kicker light">04 · {messages.native.kicker}</p>
            <h2>{messages.native.title}</h2>
            <p>{messages.native.body}</p>
          </div>
          <ul className="technology-list reveal">
            {messages.native.technologies.map((technology, index) => (
              <li key={technology}><span>0{index + 1}</span><strong>{technology}</strong></li>
            ))}
          </ul>
        </section>

        <section className="availability section-pad" id="availability">
          <Image alt="" className="availability-icon" height="96" src="/app-icon.png" unoptimized width="96" />
          <p className="section-kicker">{messages.availability.kicker}</p>
          <h2>{messages.availability.title}</h2>
          <p>{messages.availability.body}</p>
          <div aria-label={`${messages.availability.badgeKicker} ${messages.availability.badge}`} className="availability-badge">
            <AppStoreBadge locale={locale} />
          </div>
          <small>{messages.availability.requirement}</small>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image alt="" height="28" src="/app-icon.png" unoptimized width="28" />
          <strong>MusicPod</strong>
        </div>
        <p>© 2026 MusicPod. {messages.footer.rights}</p>
      </footer>
    </div>
  );
}

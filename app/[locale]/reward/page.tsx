import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "../../AppStoreBadge";
import { BrandIcon } from "../../BrandIcon";
import { LanguageMenu } from "../../LanguageMenu";
import { ReviewReward } from "../../ReviewReward";
import { ThemeToggle } from "../../ThemeToggle";
import { appStoreReviewUrl } from "../../../lib/app-store";
import { getDictionary } from "../../../lib/dictionaries";
import { isLocale, localeDetails, localePath, locales, type Locale } from "../../../lib/locales";
import { getRewardDictionary } from "../../../lib/reward-dictionaries";
import { languageAlternates, SITE_METADATA_BASE, siteUrl } from "../../../lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const messages = getRewardDictionary(rawLocale);
  const canonicalPath = localePath(rawLocale, "/reward");

  return {
    metadataBase: SITE_METADATA_BASE,
    title: messages.metaTitle,
    description: messages.metaDescription,
    alternates: {
      canonical: siteUrl(canonicalPath),
      languages: languageAlternates("/reward"),
    },
    openGraph: {
      type: "website",
      locale: localeDetails[rawLocale].openGraphLocale,
      title: messages.metaTitle,
      description: messages.metaDescription,
      url: siteUrl(canonicalPath),
    },
  };
}

export default async function RewardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale: Locale = rawLocale;
  const siteMessages = getDictionary(locale);
  const messages = getRewardDictionary(locale);
  const home = localePath(locale);

  return (
    <div className="reward-shell">
      <header className="site-header reward-header">
        <Link aria-label={messages.back} className="brand" href={home}>
          <BrandIcon priority size={34} />
          <span>MusicPod</span>
        </Link>

        <Link className="reward-header-back" href={home}>
          <span aria-hidden="true">←</span>{messages.back}
        </Link>

        <div className="header-actions">
          <ThemeToggle labels={siteMessages.theme} />
          <LanguageMenu label={siteMessages.nav.language} locale={locale} />
        </div>
      </header>

      <main className="reward-main">
        <section className="reward-hero">
          <div className="reward-hero-copy">
            <h1>
              {messages.title.map((line) => (
                <span key={line.tone}>
                  {line.before}<em className={`reward-title-accent ${line.tone}`}>{line.accent}</em>{line.after}
                </span>
              ))}
            </h1>
            <a
              aria-label={messages.review}
              className="reward-store-link"
              href={appStoreReviewUrl(locale)}
              rel="external noopener"
              target="_blank"
            >
              <AppStoreBadge locale={locale} />
            </a>
          </div>
        </section>

        <ReviewReward messages={messages} />
      </main>
    </div>
  );
}

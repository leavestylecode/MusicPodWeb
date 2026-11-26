import { appStoreUrl } from "./app-store";
import { getDictionary } from "./dictionaries";
import { getIpodMusicDictionary } from "./ipod-music-dictionaries";
import { localeDetails, localePath, locales, type Locale } from "./locales";
import { privacyPolicyConfig } from "./privacy-config";
import { getPrivacyDictionary } from "./privacy-dictionaries";
import { capturePath } from "./product-captures";
import { getProductCopy } from "./product-dictionaries";
import {
  DEVELOPER_SCHEMA,
  GUIDE_PUBLISHED_ISO,
  SITE_CONTENT_UPDATED_ISO,
  SITE_NAME,
  SITE_OG_IMAGE,
  SOFTWARE_SCHEMA_ID,
  SUPPORTED_AUDIO_FORMATS,
  WEBSITE_SCHEMA_ID,
  siteUrl,
} from "./site";

const allHtmlLanguages = locales.map((locale) => localeDetails[locale].htmlLang);

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildHomeStructuredData(locale: Locale) {
  const messages = getDictionary(locale);
  const product = getProductCopy(locale);
  const home = localePath(locale);
  const homeUrl = siteUrl(home);
  const guideUrl = siteUrl(localePath(locale, "/ipod-music"));
  const privacyUrl = siteUrl(localePath(locale, "/privacy"));
  const webpageId = `${homeUrl}#webpage`;
  const downloadHref = appStoreUrl(locale);
  const language = localeDetails[locale].htmlLang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      DEVELOPER_SCHEMA,
      {
        "@type": "WebSite",
        "@id": WEBSITE_SCHEMA_ID,
        name: SITE_NAME,
        alternateName: "MusicPod — Retro iPod Music Player for iPhone",
        description: messages.meta.description,
        url: siteUrl(),
        inLanguage: allHtmlLanguages,
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        about: { "@id": SOFTWARE_SCHEMA_ID },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: homeUrl,
        name: messages.meta.title,
        description: messages.meta.description,
        inLanguage: language,
        dateModified: SITE_CONTENT_UPDATED_ISO,
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        about: { "@id": SOFTWARE_SCHEMA_ID },
        mainEntity: { "@id": SOFTWARE_SCHEMA_ID },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: siteUrl(SITE_OG_IMAGE),
          width: 1200,
          height: 630,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-title", ".mp-intro", "#music-sources", "#faq"],
        },
        relatedLink: [guideUrl, privacyUrl, siteUrl("/llms.txt")],
      },
      {
        "@type": "SoftwareApplication",
        "@id": SOFTWARE_SCHEMA_ID,
        name: SITE_NAME,
        alternateName: ["iPod music player for iPhone", "MusicPod — Classic Music Player"],
        description: messages.meta.description,
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "MusicPlayer",
        operatingSystem: "iOS 17 or later",
        softwareRequirements: "iPhone running iOS 17 or later",
        availableOnDevice: "iPhone",
        isAccessibleForFree: true,
        url: homeUrl,
        downloadUrl: downloadHref,
        installUrl: downloadHref,
        sameAs: downloadHref,
        image: siteUrl(SITE_OG_IMAGE),
        screenshot: siteUrl(capturePath(locale, "classic")),
        inLanguage: language,
        dateModified: SITE_CONTENT_UPDATED_ISO,
        featureList: [
          messages.wheel.kicker,
          messages.highlights.coverFlow.kicker,
          "Apple Music",
          "Spotify",
          product.localMusic,
          product.photoTitle,
          `Offline local audio (${SUPPORTED_AUDIO_FORMATS.join(", ")})`,
          "LRC synced lyrics",
          "No MusicPod account required",
        ],
        author: { "@id": DEVELOPER_SCHEMA["@id"] },
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        mainEntityOfPage: { "@id": webpageId },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: downloadHref,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${homeUrl}#faq`,
        url: `${homeUrl}#faq`,
        inLanguage: language,
        isPartOf: { "@id": webpageId },
        about: { "@id": SOFTWARE_SCHEMA_ID },
        mainEntity: messages.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function buildGuideStructuredData(locale: Locale) {
  const messages = getIpodMusicDictionary(locale);
  const home = localePath(locale);
  const homeUrl = siteUrl(home);
  const guideUrl = siteUrl(localePath(locale, "/ipod-music"));
  const webpageId = `${guideUrl}#webpage`;
  const articleId = `${guideUrl}#article`;
  const language = localeDetails[locale].htmlLang;

  const howToNodes = messages.sections
    .filter((section) => Boolean(section.steps?.length))
    .map((section) => ({
      "@type": "HowTo",
      "@id": `${guideUrl}#howto-${section.id}`,
      name: section.title,
      description: section.paragraphs[0] ?? messages.meta.description,
      inLanguage: language,
      about: { "@id": SOFTWARE_SCHEMA_ID },
      isPartOf: { "@id": webpageId },
      url: `${guideUrl}#${section.id}`,
      step: section.steps!.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        text,
        url: `${guideUrl}#${section.id}`,
      })),
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      DEVELOPER_SCHEMA,
      {
        "@type": "WebPage",
        "@id": webpageId,
        name: messages.meta.title,
        description: messages.meta.description,
        url: guideUrl,
        datePublished: GUIDE_PUBLISHED_ISO,
        dateModified: SITE_CONTENT_UPDATED_ISO,
        inLanguage: language,
        author: { "@id": DEVELOPER_SCHEMA["@id"] },
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        about: { "@id": SOFTWARE_SCHEMA_ID },
        mainEntity: { "@id": articleId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#ipod-music-title", ".privacy-intro", ".privacy-section h2", ".guide-steps"],
        },
        relatedLink: [homeUrl, siteUrl(localePath(locale, "/privacy")), siteUrl("/llms.txt")],
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: homeUrl },
            { "@type": "ListItem", position: 2, name: messages.pageLabel, item: guideUrl },
          ],
        },
      },
      {
        "@type": "TechArticle",
        "@id": articleId,
        headline: messages.meta.title,
        name: messages.pageLabel,
        description: messages.meta.description,
        url: guideUrl,
        image: siteUrl(SITE_OG_IMAGE),
        datePublished: GUIDE_PUBLISHED_ISO,
        dateModified: SITE_CONTENT_UPDATED_ISO,
        inLanguage: language,
        dependencies: "iPhone running iOS 17 or later",
        proficiencyLevel: "Beginner",
        author: { "@id": DEVELOPER_SCHEMA["@id"] },
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        about: { "@id": SOFTWARE_SCHEMA_ID },
        mainEntityOfPage: { "@id": webpageId },
        mentions: [
          { "@type": "Thing", name: "Apple Music" },
          { "@type": "Thing", name: "Spotify" },
          { "@type": "Thing", name: "Cover Flow" },
          { "@type": "Thing", name: "FLAC" },
          { "@type": "Thing", name: "MP3" },
          { "@type": "Thing", name: "LRC" },
        ],
      },
      ...howToNodes,
    ],
  };
}

export function buildPrivacyStructuredData(locale: Locale) {
  const messages = getPrivacyDictionary(locale);
  const home = localePath(locale);
  const homeUrl = siteUrl(home);
  const privacyUrl = siteUrl(localePath(locale, "/privacy"));
  const language = localeDetails[locale].htmlLang;

  return {
    "@context": "https://schema.org",
    "@graph": [
      DEVELOPER_SCHEMA,
      {
        "@type": "WebPage",
        "@id": `${privacyUrl}#webpage`,
        name: messages.meta.title,
        description: messages.meta.description,
        url: privacyUrl,
        dateModified: `${privacyPolicyConfig.lastUpdated}T00:00:00Z`,
        inLanguage: language,
        author: { "@id": DEVELOPER_SCHEMA["@id"] },
        publisher: { "@id": DEVELOPER_SCHEMA["@id"] },
        isPartOf: { "@id": WEBSITE_SCHEMA_ID },
        about: { "@id": SOFTWARE_SCHEMA_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#privacy-title", ".privacy-intro", ".privacy-principles"],
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: homeUrl },
            { "@type": "ListItem", position: 2, name: messages.pageLabel, item: privacyUrl },
          ],
        },
      },
    ],
  };
}

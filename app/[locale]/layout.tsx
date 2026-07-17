import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, localeDetails, localePath, locales, type Locale } from "../../lib/locales";
import {
  DEVELOPER_NAME,
  DEVELOPER_URL,
  languageAlternates,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_METADATA_BASE,
  siteUrl,
} from "../../lib/site";
import { ThemeScript } from "../ThemeScript";
import "../globals.css";

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050506" },
  ],
  width: "device-width",
  initialScale: 1,
};

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

  const locale: Locale = rawLocale;
  const messages = getDictionary(locale);
  const info = localeDetails[locale];
  const canonicalPath = localePath(locale);

  return {
    metadataBase: SITE_METADATA_BASE,
    title: messages.meta.title,
    description: messages.meta.description,
    applicationName: SITE_NAME,
    authors: [{ name: DEVELOPER_NAME, url: DEVELOPER_URL }],
    creator: DEVELOPER_NAME,
    publisher: DEVELOPER_NAME,
    category: "music",
    classification: "Music player for iPhone",
    referrer: "origin-when-cross-origin",
    formatDetection: { telephone: false, address: false, email: false },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
    keywords: ["MusicPod", "iPod", "Apple Music", "iPhone", "Click Wheel", "MusicKit"],
    alternates: {
      canonical: siteUrl(canonicalPath),
      languages: languageAlternates(),
    },
    openGraph: {
      type: "website",
      locale: info.openGraphLocale,
      alternateLocale: locales.filter((entry) => entry !== locale).map((entry) => localeDetails[entry].openGraphLocale),
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeDetails[locale].htmlLang} suppressHydrationWarning>
      <head>
        <link data-musicpod-theme-icon href="/app-icon.png" rel="icon" type="image/png" />
        <link data-musicpod-theme-icon href="/app-icon.png" rel="shortcut icon" type="image/png" />
        <link href="/app-icon.png" rel="apple-touch-icon" />
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}

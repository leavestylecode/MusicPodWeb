import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, localeDetails, locales, type Locale } from "../../lib/locales";
import "../globals.css";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f5f7",
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
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const languageAlternates = Object.fromEntries(
    locales.map((entry) => [localeDetails[entry].htmlLang, `/${entry}`]),
  );

  return {
    metadataBase,
    title: messages.meta.title,
    description: messages.meta.description,
    applicationName: "MusicPod",
    creator: "Leavestylecode",
    publisher: "Leavestylecode",
    keywords: ["MusicPod", "iPod", "Apple Music", "iPhone", "Click Wheel", "MusicKit"],
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languageAlternates, "x-default": "/en" },
    },
    icons: {
      icon: "/app-icon.png",
      shortcut: "/app-icon.png",
      apple: "/app-icon.png",
    },
    openGraph: {
      type: "website",
      locale: info.openGraphLocale,
      alternateLocale: locales.filter((entry) => entry !== locale).map((entry) => localeDetails[entry].openGraphLocale),
      siteName: "MusicPod",
      title: messages.meta.title,
      description: messages.meta.social,
      url: `/${locale}`,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: messages.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.social,
      images: ["/og.png"],
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
    <html lang={localeDetails[locale].htmlLang}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION, SITE_METADATA_BASE, SITE_NAME } from "../../lib/site";
import { ThemeScript } from "../ThemeScript";
import "../globals.css";

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: SITE_METADATA_BASE,
  title: `${SITE_NAME} — Your music. Your iPod.`,
  description: SITE_DESCRIPTION,
  robots: { index: false, follow: true },
};

export default function DefaultLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
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

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
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
  title: "MusicPod — Your music. Your iPod.",
  description: "A tactile music player for iPhone, built around the click wheel and your Apple Music library.",
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

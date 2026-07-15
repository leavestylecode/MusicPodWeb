import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "MusicPod — 把 iPhone 变回 iPod",
    description:
      "用点按式转盘浏览 Apple Music 资料库。Cover Flow、动态黑胶、触感回馈与完整个性化，一台为 iOS 26 重新想象的 iPod。",
    applicationName: "MusicPod",
    creator: "Leavestylecode",
    publisher: "Leavestylecode",
    keywords: ["MusicPod", "iPod", "Apple Music", "音乐播放器", "iOS 26", "Click Wheel"],
    alternates: { canonical: "/" },
    icons: {
      icon: "/app-icon.png",
      shortcut: "/app-icon.png",
      apple: "/app-icon.png",
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName: "MusicPod",
      title: "MusicPod — 把 iPhone 变回 iPod",
      description: "转动、点按，然后只管听。一台为 Apple Music 时代重新想象的 iPod。",
      url: "/",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "MusicPod — 把 iPhone 变回 iPod" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "MusicPod — 把 iPhone 变回 iPod",
      description: "转动、点按，然后只管听。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

import type { NextConfig } from "next";

const LLMS_DISCOVERY_HEADER = {
  key: "Link",
  value: '<https://www.musicpod.app/llms.txt>; rel="describedby"; type="text/markdown"',
};

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/",
        headers: [LLMS_DISCOVERY_HEADER],
      },
      {
        source: "/:locale(en|zh-cn|zh-tw|ja|ko|es|fr|de|pt-br)",
        headers: [LLMS_DISCOVERY_HEADER],
      },
      {
        source: "/:locale(en|zh-cn|zh-tw|ja|ko|es|fr|de|pt-br)/:path*",
        headers: [LLMS_DISCOVERY_HEADER],
      },
      {
        source: "/product/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;

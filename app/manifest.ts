import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "../lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Your music. Your iPod.`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/en",
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#e8222b",
    icons: [
      { src: "/app-icon.png", sizes: "120x120", type: "image/png" },
      { src: "/app-icon-dark.png", sizes: "256x256", type: "image/png" },
    ],
  };
}

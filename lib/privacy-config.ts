import { CONTACT_EMAIL, DEVELOPER_NAME } from "./site";

export const privacyPolicyConfig = {
  operator: DEVELOPER_NAME,
  product: "MusicPod",
  email: CONTACT_EMAIL,
  version: "1.1",
  lastUpdated: "2026-11-25",
  links: {
    appleMusicPrivacy: "https://www.apple.com/legal/privacy/data/en/apple-music/",
    applePrivacy: "https://www.apple.com/legal/privacy/",
    spotifyPrivacy: "https://www.spotify.com/legal/privacy-policy/",
    vercelPrivacy: "https://vercel.com/legal/privacy-notice",
  },
} as const;

export type PrivacyPolicyLink = keyof typeof privacyPolicyConfig.links;

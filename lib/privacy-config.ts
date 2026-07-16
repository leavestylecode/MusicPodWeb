import { DEVELOPER_NAME } from "./site";

export const privacyPolicyConfig = {
  operator: DEVELOPER_NAME,
  product: "MusicPod",
  email: "privacy@musicpod.app",
  version: "1.0",
  lastUpdated: "2026-07-16",
  links: {
    appleMusicPrivacy: "https://www.apple.com/legal/privacy/data/en/apple-music/",
    applePrivacy: "https://www.apple.com/legal/privacy/",
    vercelPrivacy: "https://vercel.com/legal/privacy-notice",
  },
} as const;

export type PrivacyPolicyLink = keyof typeof privacyPolicyConfig.links;

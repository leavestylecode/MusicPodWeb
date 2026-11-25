import { APP_STORE_ID, appStoreUrl } from "./app-store";
import { getDictionary } from "./dictionaries";
import { getIpodMusicDictionary } from "./ipod-music-dictionaries";
import { localeDetails, localePath, locales } from "./locales";
import { privacyPolicyConfig } from "./privacy-config";
import { getProductCopy } from "./product-dictionaries";
import {
  CONTACT_EMAIL,
  DEVELOPER_BRAND,
  DEVELOPER_NAME,
  DEVELOPER_URL,
  PORTFOLIO_APPS,
  SITE_CONTENT_UPDATED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_TAGLINE,
  SUPPORTED_AUDIO_FORMATS,
  UNSUPPORTED_ENCRYPTED_FORMATS,
  developerHomeUrl,
  siteUrl,
} from "./site";

const PORTFOLIO_LINKS = [
  { name: DEVELOPER_BRAND, url: developerHomeUrl("en"), description: "Independent developer studio behind MusicPod." },
  ...PORTFOLIO_APPS.map((app) => ({
    name: app.name,
    url: app.href("en"),
    description: app.description,
  })),
] as const;

export function buildLlmsTxt(): string {
  const en = getDictionary("en");
  const enProduct = getProductCopy("en");
  const formats = SUPPORTED_AUDIO_FORMATS.join(", ");
  const unsupported = UNSUPPORTED_ENCRYPTED_FORMATS.join(", ");

  const localePages = locales.map((locale) => {
    const info = localeDetails[locale];
    const home = siteUrl(localePath(locale));
    const guide = siteUrl(localePath(locale, "/ipod-music"));
    return `- ${info.label} (${info.htmlLang}): [Product](${home}) | [Guide](${guide}) | [App Store](${appStoreUrl(locale)})`;
  });

  const privacyPages = locales.map((locale) => {
    const info = localeDetails[locale];
    return `- [${info.label} Privacy Policy (${info.htmlLang})](${siteUrl(localePath(locale, "/privacy"))})`;
  });

  return [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is a native iPhone music player that brings the classic iPod click wheel and Cover Flow experience to iOS. It supports Apple Music, Spotify, and imported offline local audio (${formats}) with synced LRC lyrics. Developed by ${DEVELOPER_NAME} (${DEVELOPER_BRAND}).`,
    "",
    "## Key Facts",
    `- **Product**: ${SITE_NAME} — ${SITE_TAGLINE}`,
    `- **Official Website**: ${SITE_ORIGIN}`,
    `- **App Store**: [MusicPod on the App Store (ID ${APP_STORE_ID})](${appStoreUrl("en")})`,
    `- **Developer**: ${DEVELOPER_NAME} (${DEVELOPER_BRAND}), founded by Huixin Jia`,
    `- **Platform**: iPhone running iOS 17 or later`,
    `- **Pricing**: ${en.faq.items[0]?.answer ?? "Free to download, with optional in-app purchases."}`,
    `- **Account**: ${en.faq.items[1]?.answer ?? "No MusicPod account is needed. Connecting to Spotify requires a Spotify account."}`,
    `- **Apple Music**: ${enProduct.appleBody} ${enProduct.appleRequirement}`,
    `- **Spotify**: ${enProduct.spotifyBody} ${enProduct.spotifyRequirement}`,
    `- **Local Music**: ${enProduct.localBody} ${enProduct.localRequirement}`,
    `- **Supported Local Audio Formats**: ${formats} (plus LRC synced lyrics)`,
    `- **Unsupported Formats**: Protected/DRM downloads and encrypted formats such as ${unsupported}`,
    `- **Core Features**: Click wheel navigation, Cover Flow album browsing, full-screen Now Playing with animated waveform, customizable body/wheel finishes, icons, and personal photo backgrounds`,
    `- **Privacy**: No MusicPod account, no ads, no third-party tracking SDKs; app preferences stay on-device`,
    `- **Contact**: ${CONTACT_EMAIL}`,
    `- **Last Updated**: ${SITE_CONTENT_UPDATED}`,
    "",
    "## Primary Pages",
    `- [MusicPod Overview (English)](${siteUrl("/en")}): ${SITE_DESCRIPTION}`,
    `- [MusicPod User Guide (English)](${siteUrl("/en/ipod-music")}): Step-by-step instructions for importing local audio, Apple Music, Spotify, click wheel controls, and Cover Flow.`,
    `- [Privacy Policy (English)](${siteUrl("/en/privacy")}): Data handling, permissions, and privacy principles (updated ${privacyPolicyConfig.lastUpdated}).`,
    `- [Full AI Reference (llms-full.txt)](${siteUrl("/llms-full.txt")}): Single-file knowledge base with complete specifications, compatibility matrix, guides, and bilingual Q&A.`,
    "",
    "## Localized Editions",
    ...localePages,
    "",
    "## Related Products by LeaveStyle",
    ...PORTFOLIO_LINKS.map((item) => `- [${item.name}](${item.url}): ${item.description}`),
    "",
    "## Optional",
    ...privacyPages,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  const en = getDictionary("en");
  const zh = getDictionary("zh-cn");
  const enProduct = getProductCopy("en");
  const zhProduct = getProductCopy("zh-cn");
  const enGuide = getIpodMusicDictionary("en");
  const zhGuide = getIpodMusicDictionary("zh-cn");
  const formats = SUPPORTED_AUDIO_FORMATS.join(", ");
  const unsupported = UNSUPPORTED_ENCRYPTED_FORMATS.join(", ");

  const renderGuideSections = (sections: typeof enGuide.sections) =>
    sections.flatMap((section) => {
      const lines = [`### ${section.title}`];
      for (const paragraph of section.paragraphs) {
        lines.push("", paragraph);
      }
      if (section.steps?.length) {
        lines.push("");
        section.steps.forEach((step, index) => {
          lines.push(`${index + 1}. ${step}`);
        });
      }
      if (section.items?.length) {
        lines.push("");
        for (const item of section.items) {
          lines.push(`- ${item}`);
        }
      }
      lines.push("");
      return lines;
    });

  return [
    `# ${SITE_NAME} — Complete Product & Technical Reference`,
    "",
    `> Canonical reference for AI search engines and assistants answering questions about ${SITE_NAME} (${SITE_ORIGIN}). Last updated: ${SITE_CONTENT_UPDATED}.`,
    "",
    "## 1. Entity & Product Summary",
    "",
    `${SITE_NAME} is a native iPhone music player designed around the classic iPod click wheel and Cover Flow. It lets iPhone users browse and play Apple Music, Spotify, and imported offline audio files from one tactile interface without creating a MusicPod account.`,
    "",
    "| Attribute | Verified Value |",
    "| --- | --- |",
    `| Product Name | ${SITE_NAME} |`,
    `| Category | Retro iPod-style Music Player for iPhone (iOS Multimedia Application) |`,
    `| Official Website | ${SITE_ORIGIN} |`,
    `| App Store ID | ${APP_STORE_ID} |`,
    `| App Store URL (US/EN) | ${appStoreUrl("en")} |`,
    `| Developer / Operator | ${DEVELOPER_NAME} (${DEVELOPER_BRAND}) |`,
    `| Founder | Huixin Jia (贾慧鑫) — https://www.linkedin.com/in/huixin-jia-8903b3154/ |`,
    `| Developer Website | ${DEVELOPER_URL} |`,
    `| System Requirement | iPhone running iOS 17 or later |`,
    `| Pricing | Free to download, with optional in-app purchases |`,
    `| Account Policy | No MusicPod account required (Spotify playback requires a Spotify Premium account) |`,
    `| Supported Local Formats | ${formats} |`,
    `| Lyrics Support | Synced lyrics from LRC files (for local music) |`,
    `| Unsupported Formats | Protected/DRM downloads; encrypted formats (${unsupported}) |`,
    `| Supported Languages | ${locales.map((locale) => `${localeDetails[locale].label} (${localeDetails[locale].htmlLang})`).join(", ")} |`,
    `| Privacy Contact | ${CONTACT_EMAIL} |`,
    `| Content Last Updated | ${SITE_CONTENT_UPDATED} |`,
    "",
    "## 2. Music Sources & Compatibility Matrix",
    "",
    "| Source | What You Can Play | Subscription / App Requirement | Account Needed | Offline Support |",
    "| --- | --- | --- | --- | --- |",
    `| **Apple Music** | ${enProduct.appleBody} | ${enProduct.appleRequirement} | Apple Account (via iOS MusicKit permission) | Plays downloaded and synced songs in iPhone's Music library |`,
    `| **Spotify** | ${enProduct.spotifyBody} | ${enProduct.spotifyRequirement} | Spotify account | Handled via Spotify |`,
    `| **${enProduct.localMusic}** | ${enProduct.localBody} (${formats}) | ${enProduct.localRequirement} | None | Full offline playback after importing into MusicPod, including synced LRC lyrics |`,
    "",
    "## 3. Core Experience & Customization",
    "",
    `- **${en.wheel.kicker}**: ${en.wheel.body} Slide around the wheel to scroll menus and lists, press center to select, press MENU to go back, and use dedicated play/pause and previous/next controls.`,
    `- **${en.highlights.coverFlow.kicker}**: ${en.highlights.coverFlow.body}`,
    `- **${en.highlights.nowPlaying.kicker}**: ${en.highlights.nowPlaying.body}`,
    `- **${en.personalize.title}**: ${en.personalize.body}`,
    "",
    "## 4. Step-by-Step Guide (English)",
    "",
    `Canonical URL: ${siteUrl("/en/ipod-music")}`,
    "",
    ...renderGuideSections(enGuide.sections),
    "## 5. Frequently Asked Questions (English)",
    "",
    ...en.faq.items.map((item) => `- **${item.question}** ${item.answer}`),
    `- **Can I use MusicPod without an Apple Music or Spotify subscription?** Yes. Local audio files imported from the Files app, as well as purchased and synced songs in your iPhone Music library, play without any streaming subscription.`,
    "",
    "## 6. 中文核心信息与使用指南 (Simplified Chinese)",
    "",
    `- **产品定位**：${zh.meta.title}。${zh.meta.description}`,
    `- **Apple Music**：${zhProduct.appleBody}${zhProduct.appleRequirement}`,
    `- **Spotify**：${zhProduct.spotifyBody}${zhProduct.spotifyRequirement}`,
    `- **${zhProduct.localMusic}**：${zhProduct.localBody}${zhProduct.localRequirement}`,
    ...zh.faq.items.map((item) => `- **${item.question}** ${item.answer}`),
    `- **官方中文页面**：[产品首页](${siteUrl("/zh-cn")}) | [使用指南](${siteUrl("/zh-cn/ipod-music")}) | [隐私政策](${siteUrl("/zh-cn/privacy")}) | [App Store](${appStoreUrl("zh-cn")})`,
    "",
    ...renderGuideSections(zhGuide.sections),
    "## 7. Privacy & Data Handling",
    "",
    `- Full Privacy Policy: ${siteUrl("/en/privacy")} (version ${privacyPolicyConfig.version}, last updated ${privacyPolicyConfig.lastUpdated})`,
    "- No MusicPod account required.",
    "- No advertising or third-party tracking SDKs; personal information is not sold or rented.",
    "- Imported local audio files and LRC lyrics remain on your iPhone inside MusicPod and are never uploaded to developer servers.",
    "- Apple Music library access happens through Apple's MusicKit only after system permission is granted; optional Spotify playback connects directly to Spotify under Spotify's Privacy Policy.",
    "- App appearance and player preferences are stored locally on the user's iPhone; website assets including App Store badges are self-hosted on musicpod.app.",
    `- Privacy inquiries: ${CONTACT_EMAIL}`,
    "",
    "## 8. All Regional URLs & App Store Links",
    "",
    ...locales.map((locale) => {
      const info = localeDetails[locale];
      return `- **${info.label} (${info.htmlLang})**: Home ${siteUrl(localePath(locale))} | Guide ${siteUrl(localePath(locale, "/ipod-music"))} | Privacy ${siteUrl(localePath(locale, "/privacy"))} | App Store ${appStoreUrl(locale)}`;
    }),
    "",
    "## 9. Related Apps by LeaveStyle",
    "",
    ...PORTFOLIO_LINKS.map((item) => `- **${item.name}**: ${item.url} — ${item.description}`),
    "",
  ].join("\n");
}

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

let workerPromise;

async function getWorker() {
  workerPromise ??= import(new URL(`../dist/server/index.js?test=${process.pid}-${Date.now()}`, import.meta.url)).then(
    ({ default: worker }) => worker,
  );
  return workerPromise;
}

async function render(pathname = "/en", requestHeaders = {}) {
  const worker = await getWorker();

  return worker.fetch(
    new Request(`https://musicpod.example${pathname}`, {
      headers: { accept: "text/html", ...requestHeaders },
      redirect: "manual",
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the international English product page", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>MusicPod — Your music\. Your iPod\.<\/title>/);
  assert.match(html, /Your music\./);
  assert.match(html, /The click wheel is back\./);
  assert.match(html, /Coming to App Store\./);
  assert.match(html, /Coming soon on the/);
  assert.match(html, /app-store-badge-artwork/);
  assert.match(html, /class="theme-menu"/);
  assert.match(html, /id="musicpod-theme"/);
  assert.match(html, /app-icon-dark\.png/);
  assert.match(html, /data-musicpod-theme-icon/);
  assert.match(html, /rel="icon" type="image\/png"/);
  assert.match(html, /rel="shortcut icon" type="image\/png"/);
  assert.match(html, /brand-icon-dark/);
  assert.match(html, /Skip to content/);
  assert.match(html, /\/product\/musicpod-home\.webp/);
  assert.match(html, /cover-flow-showcase/);
  assert.match(html, /strands-showcase/);
  assert.match(html, /Strands · (?:<!-- -->)?Now playing/);
  assert.match(html, /Midnight Memory/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /href="https:\/\/leavestyle\.com\/"/);
  assert.match(html, /An independent product by/);
  assert.match(html, /Leavestylecode/);
  assert.match(html, /href="\/en\/privacy"/);
  assert.match(html, /href="\/zh-cn"/);
  assert.match(html, /hreflang="fr"/i);
  assert.match(html, /https?:\/\/[^\"]+\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|\/_vinext\/image/i);
});

test("ships localized HTML and metadata for every supported market", async () => {
  const expectations = [
    ["/zh-cn", "zh-CN", "你的音乐"],
    ["/zh-tw", "zh-TW", "你的音樂"],
    ["/ja", "ja", "あなたの音楽。"],
    ["/ko", "ko", "내 음악."],
    ["/es", "es", "Tu música."],
    ["/fr", "fr", "Votre musique."],
    ["/de", "de", "Deine Musik."],
    ["/pt-br", "pt-BR", "Sua música."],
  ];

  await Promise.all(expectations.map(async ([pathname, htmlLang, phrase]) => {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(`<html lang="${htmlLang}">`), pathname);
    assert.match(html, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), pathname);
    assert.match(html, new RegExp(`rel="canonical" href="https://www\\.musicpod\\.app${pathname}"`), pathname);
  }));
});

test("publishes a localized, launch-ready privacy policy", async () => {
  const expectations = [
    ["/en/privacy", "Privacy Policy — MusicPod", "Your music stays yours."],
    ["/zh-cn/privacy", "隐私政策 — MusicPod", "你的音乐，始终属于你。"],
    ["/zh-tw/privacy", "隱私權政策 — MusicPod", "你的音樂，始終屬於你。"],
    ["/ja/privacy", "プライバシーポリシー — MusicPod", "あなたの音楽は、あなたのもの。"],
    ["/ko/privacy", "개인정보 처리방침 — MusicPod", "내 음악은 언제나 나의 것."],
    ["/es/privacy", "Política de privacidad — MusicPod", "Tu música sigue siendo tuya."],
    ["/fr/privacy", "Politique de confidentialité — MusicPod", "Votre musique reste la vôtre."],
    ["/de/privacy", "Datenschutzerklärung — MusicPod", "Deine Musik bleibt deine."],
    ["/pt-br/privacy", "Política de Privacidade — MusicPod", "Sua música continua sendo sua."],
  ];

  await Promise.all(expectations.map(async ([pathname, title, heading]) => {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</title>`), pathname);
    assert.match(html, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), pathname);
    assert.match(html, new RegExp(`rel="canonical" href="https://www\\.musicpod\\.app${pathname}"`), pathname);
    assert.match(html, /privacy@musicpod\.app/, pathname);
    assert.match(html, /application\/ld\+json/, pathname);
    assert.match(html, /href="https:\/\/leavestyle\.com\/"/, pathname);
  }));

  const english = await (await render("/en/privacy")).text();
  assert.match(english, /No MusicPod account/);
  assert.match(english, /MusicPod does not sell or rent personal information/);
  assert.match(english, /Apple Music &amp; Privacy/);
  assert.match(english, /Vercel Privacy Notice/);
  assert.match(english, /href="\/zh-cn\/privacy"/);
  assert.match(english, /musicpod_locale/);
  assert.match(english, /musicpod-theme/);
});

test("selects a locale from browser preferences and remembers an explicit choice", async () => {
  const french = await render("/", { "accept-language": "fr-FR,fr;q=0.9,en;q=0.8" });
  assert.equal(french.status, 307);
  assert.equal(french.headers.get("location"), "https://musicpod.example/fr");

  const remembered = await render("/", {
    "accept-language": "fr-FR,fr;q=0.9",
    cookie: "musicpod_locale=de",
  });
  assert.equal(remembered.status, 307);
  assert.equal(remembered.headers.get("location"), "https://musicpod.example/de");

  const privacyFrench = await render("/privacy", {
    "accept-language": "fr-FR,fr;q=0.9,en;q=0.8",
  });
  assert.equal(privacyFrench.status, 307);
  assert.equal(privacyFrench.headers.get("location"), "https://musicpod.example/fr/privacy");
});

test("publishes international discovery metadata", async () => {
  const [sitemapResponse, robotsResponse] = await Promise.all([
    render("/sitemap.xml"),
    render("/robots.txt"),
  ]);
  assert.equal(sitemapResponse.status, 200);
  assert.equal(robotsResponse.status, 200);

  const [sitemap, robots] = await Promise.all([
    sitemapResponse.text(),
    robotsResponse.text(),
  ]);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/en/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/en\/privacy/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br\/privacy/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.match(robots, /Sitemap: https:\/\/www\.musicpod\.app\/sitemap\.xml/i);
});

test("ships the product media, internationalization source, and image sizing guard", async () => {
  const assets = [
    "../public/app-icon.png",
    "../public/app-icon-dark.png",
    "../public/og.png",
    "../public/product/musicpod-home.webp",
    "../public/product/icons/albums.webp",
    "../public/product/icons/playlists.webp",
    "../public/product/icons/theme.webp",
    "../public/product/textures/vinyl.webp",
  ];

  await Promise.all(assets.map((asset) => access(new URL(asset, import.meta.url))));

  const [page, privacyPage, styles, showcase, coverFlow, strands, appStoreBadge, brandIcon, themeToggle, themeScript, dictionaries, privacyDictionaries, packageJson] = await Promise.all([
    readFile(new URL("../app/[locale]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[locale]/privacy/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/PersonalizationShowcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/CoverFlowShowcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/StrandsShowcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/AppStoreBadge.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/BrandIcon.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ThemeToggle.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ThemeScript.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/dictionaries.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/privacy-dictionaries.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /SpotlightCard/);
  assert.match(page, /footer\.privacy/);
  assert.match(privacyPage, /privacyPolicyConfig/);
  assert.doesNotMatch(privacyPage, /pathSuffix/);
  assert.match(privacyPage, /application\/ld\+json/);
  assert.match(page, /MusicPod actual app interface|productLabel/);
  assert.match(styles, /img\s*{[^}]*height:\s*auto;/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /:root\[data-theme="dark"\]/);
  assert.match(styles, /prefers-color-scheme:\s*dark/);
  assert.match(showcase, /#e8222b/);
  assert.match(showcase, /#f28d03/);
  assert.match(showcase, /#eaba00/);
  assert.match(showcase, /#00803d/);
  assert.match(showcase, /#009e9e/);
  assert.match(showcase, /#c9cbcc/);
  assert.match(showcase, /#0082ce/);
  assert.match(showcase, /#52388b/);
  assert.match(showcase, /#cd2370/);
  assert.match(showcase, /setInterval/);
  assert.match(showcase, /}, 3000\);/);
  assert.match(showcase, /personalization-carousel-track/);
  assert.match(showcase, /finishes\.map/);
  assert.match(showcase, /const navigationIcons = \[/);
  assert.match(showcase, /const leftIcon = navigationIcons/);
  assert.match(showcase, /const rightIcon = navigationIcons/);
  assert.match(showcase, /personalization-icon-active/);
  assert.match(styles, /\.personalization-screen\s*{[^}]*aspect-ratio:\s*1;/s);
  assert.match(styles, /\.personalization-icon-row\s*{[^}]*inset:\s*0;/s);
  assert.match(styles, /\.personalization-icon-row \.personalization-icon-active\s*{[^}]*left:\s*50%;/s);
  assert.match(styles, /\.personalization-wheel\s*{[^}]*width:\s*72%;/s);
  assert.match(styles, /\.personalization-center\s*{[^}]*width:\s*34%;/s);
  assert.match(page, /CoverFlowShowcase/);
  assert.match(page, /StrandsShowcase/);
  assert.match(coverFlow, /rotateY\(\$\{-clamped \* 58\}deg\)/);
  assert.match(coverFlow, /setInterval\(\(\) => move\(1\), 3000\)/);
  assert.match(coverFlow, /data-flipped/);
  assert.match(coverFlow, /onPointerDown/);
  assert.match(coverFlow, /onPointerMove=\{handlePointerMove\}/);
  assert.match(coverFlow, /getCoverFlowGestureIntent/);
  assert.match(coverFlow, /getCoverFlowSwipeDirection/);
  assert.doesNotMatch(
    coverFlow.match(/function handlePointerDown[\s\S]*?\n  }/)?.[0] ?? "",
    /setPointerCapture/,
  );
  assert.match(coverFlow, /ArrowLeft/);
  assert.match(strands, /ResizeObserver/);
  assert.match(strands, /frequency = 4\.25 \+ index \* 0\.8/);
  assert.match(strands, /velocity = 1\.55 \+ index \* 0\.95/);
  assert.match(strands, /smootherStep\(value \/ 0\.23\)/);
  assert.match(strands, /prefers-reduced-motion: reduce/);
  assert.match(styles, /\.strands-showcase\s*{[^}]*aspect-ratio:\s*1;/s);
  assert.match(styles, /\.cover-flow-cover\s*{[^}]*width:\s*222px;[^}]*height:\s*222px;/s);
  assert.match(styles, /\.app-store-badge-image/);
  assert.match(appStoreBadge, /tools\.applemediaservices\.com\/api\/badges/);
  assert.match(appStoreBadge, /marketingLocales/);
  assert.match(appStoreBadge, /badgeUrl\("white"\)/);
  assert.match(brandIcon, /brand-icon-dark-art/);
  assert.match(brandIcon, /brand-icon-wheel/);
  assert.match(styles, /html\[data-theme="dark"\] \.brand-icon-dark/);
  assert.match(styles, /html\[data-theme="dark"\] \.availability::before\s*{[^}]*content:\s*none;/s);
  assert.match(styles, /rgba\(255, 41, 56, 0\.17\)/);
  assert.match(themeToggle, /matchMedia\("\(prefers-color-scheme: dark\)"\)/);
  assert.match(themeToggle, /link\[data-musicpod-theme-icon\]/);
  assert.match(themeToggle, /resolved === "dark" \? "\/app-icon-dark\.png" : "\/app-icon\.png"/);
  assert.match(themeToggle, /localStorage\.(setItem|removeItem)/);
  assert.match(themeToggle, /"system" \| "light" \| "dark"/);
  assert.match(themeScript, /dataset\.theme/);
  assert.match(themeScript, /syncThemeIcons/);
  assert.match(themeScript, /DOMContentLoaded/);
  assert.match(themeScript, /musicpod-theme/);
  assert.match(page, /iOS 17 or later/);
  assert.match(dictionaries, /iOS 17\+/);
  assert.match(dictionaries, /Classic color combinations/);
  assert.match(dictionaries, /"pt-br": ptBR/);
  assert.match(privacyDictionaries, /No MusicPod account/);
  assert.match(privacyDictionaries, /privacy@musicpod\.app|Privacy email/);
  assert.match(privacyDictionaries, /"pt-br": ptBR/);
  assert.match(packageJson, /@formatjs\/intl-localematcher/);
  assert.doesNotMatch(packageJson, /react-icons/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

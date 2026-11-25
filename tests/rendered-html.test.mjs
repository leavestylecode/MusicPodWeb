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
  assert.match(html, /<title>MusicPod — Retro iPod Music Player for iPhone<\/title>/);
  assert.match(html, /id="hero-title"><span>Your music<\/span>.*?<span>In your hands<\/span><\/h1>/);
  assert.match(html, /class="site-shell product-page"/);
  assert.match(html, /Sunset Radio playing above the black click wheel/);
  assert.doesNotMatch(html, /mp-phone|mp-demo-link|Try the wheel/);
  assert.match(html, /Local music needs no subscription/);
  assert.match(html, /optional in-app purchases/);
  assert.match(html, /Turn to browse. Press to choose./);
  assert.match(html, /Download MusicPod\./);
  assert.match(html, /Download on the/);
  assert.match(html, /app-store-badge-artwork/);
  assert.match(html, /href="https:\/\/apps\.apple\.com\/us\/app\/musicpod-classic-music-player\/id6784645886"/);
  assert.doesNotMatch(html, /href="\/en\/reward"|Lifetime reward/);
  assert.deepEqual(
    [...html.matchAll(/<section\b[^>]*\bid="([^"]+)"/g)].map((match) => match[1]),
    ["top", "music-sources", "experience", "personalize", "faq", "availability"],
  );
  assert.match(html, /Three ways to listen\./);
  assert.match(html, /Requires MusicPod 2\.6 or later\. Playback requires the Spotify app and Spotify Premium\./);
  assert.match(html, /Import songs or entire folders from the Files app and play them offline\./);
  assert.doesNotMatch(html, /hero-reward-button|mp-hero-meta|mp-gestures/);
  assert.doesNotMatch(html, /reward-promo/);
  assert.match(html, /class="theme-menu"/);
  assert.match(html, /id="musicpod-theme"/);
  assert.match(html, /app-icon-dark\.png/);
  assert.match(html, /data-musicpod-theme-icon/);
  assert.match(html, /rel="icon" type="image\/png"/);
  assert.match(html, /rel="shortcut icon" type="image\/png"/);
  assert.match(html, /brand-icon-dark/);
  assert.match(html, /Skip to content/);
  assert.doesNotMatch(html, /wheel-demo|cover-flow-showcase|strands-showcase|personalization-showcase/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /href="https:\/\/www\.leavestyle\.com\/(?:en)?"/);
  assert.match(html, /Leavestylecode/);
  assert.match(html, /href="\/en\/privacy"/);
  assert.doesNotMatch(html, /href="\/en\/ipod-music|MusicPod guide/);
  assert.match(html, /href="\/zh-cn"/);
  assert.match(html, /hreflang="fr"/i);
  assert.match(html, /name="robots" content="index, follow"/i);
  assert.match(html, /name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/i);
  assert.match(html, /rel="manifest" href="https:\/\/www\.musicpod\.app\/manifest\.webmanifest"/i);
  assert.match(html, /https?:\/\/[^\"]+\/og\.png/);
  assert.match(html, /"@type":"WebSite"/);
  assert.match(html, /"@type":"SoftwareApplication"/);
  assert.match(html, /"featureList"/);
  assert.match(html, /"offers":\{"@type":"Offer","price":"0"/);
  assert.doesNotMatch(html, /"aggregateRating"|"ratingValue"|"ratingCount"/);
  assert.match(html, /"downloadUrl":"https:\/\/apps\.apple\.com\/us\/app\/[^"]+"/);
  assert.doesNotMatch(html, /"@type":"FAQPage"/);
  assert.match(html, /id="faq"/);
  assert.match(html, /<h2 id="faq-title">FAQ<\/h2>/);
  assert.equal((html.match(/<details class="faq-item"/g) ?? []).length, 4);
  assert.doesNotMatch(html, /What is MusicPod\?|Is there an iPod app for iPhone\?/);
  assert.match(html, /Is MusicPod free\?/);
  assert.match(html, /Do I need an Apple Music subscription\?/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|\/_vinext\/image/i);
});

test("provides appearance and language controls in the shared navigation", async () => {
  for (const path of ["/zh-cn", "/zh-cn/ipod-music", "/zh-cn/privacy", "/zh-cn/reward"]) {
    const html = await (await render(path)).text();
    const header = html.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)?.[1] ?? "";
    const footer = html.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1] ?? "";
    const nav = header.match(/<nav\b[^>]*>([\s\S]*?)<\/nav>/)?.[1] ?? "";
    const links = [...nav.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((match) => match[1]);
    const locales = ["en", "zh-cn", "zh-tw", "ja", "ko", "es", "fr", "de", "pt-br"];
    const suffix = path.slice("/zh-cn".length);

    assert.deepEqual(links, ["/zh-cn", ...locales.map((locale) => `/${locale}${suffix}`)], path);
    assert.equal((nav.match(/class="theme-menu"/g) ?? []).length, 1, path);
    assert.equal((nav.match(/class="language-menu"/g) ?? []).length, 1, path);
    assert.equal((nav.match(/<button\b/g) ?? []).length, 3, path);
    assert.doesNotMatch(footer, /site-preferences|>使用指南<\/a>/, path);
  }
});

test("server-renders the localized share reward page", async () => {
  const response = await render("/zh-cn/reward");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>分享送终身会员 — MusicPod<\/title>/);
  assert.match(html, /在小红书或 X/);
  assert.match(html, /分享体验/);
  assert.match(html, /终身/);
  assert.match(html, /会员/);
  assert.match(html, /reward-title-accent share/);
  assert.match(html, /reward-title-accent lifetime/);
  assert.match(html, /粘贴分享文案或链接/);
  assert.match(html, /class="reward-share-textarea"/);
  assert.match(html, /https:\/\/xhslink\.com/);
  assert.match(html, /验证并领取/);
  assert.doesNotMatch(html, /五星好评|拖入截图|直接领取|action=write-review/);
  assert.match(html, /href="https:\/\/apps\.apple\.com\/cn\/app\/musicpod-[^"]+\/id6784645886"/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.musicpod\.app\/zh-cn\/reward"/);
  assert.match(html, /name="robots" content="noindex, nofollow"/i);
  assert.match(html, /property="og:image" content="https:\/\/www\.musicpod\.app\/og\.png"/i);
});

test("server-renders the localized iPod music guide", async () => {
  const enResponse = await render("/en/ipod-music");
  assert.equal(enResponse.status, 200);

  const html = await enResponse.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>MusicPod Guide — Import Music, Apple Music &amp; Click Wheel<\/title>/);
  assert.match(html, /id="ipod-music-title">MusicPod guide<\/h1>/);
  assert.match(html, /rel="canonical" href="https:\/\/www\.musicpod\.app\/en\/ipod-music"/);
  assert.match(html, /hreflang="fr"/i);
  assert.match(html, /"@type":"WebPage"/);
  assert.match(html, /"@type":"BreadcrumbList"/);
  assert.doesNotMatch(html, /"@type":"FAQPage"/);
  assert.match(html, /How to import local music/);
  assert.match(html, /Choose Files/);
  assert.match(html, /FLAC/);
  assert.match(html, /class="guide-steps"/);
  assert.match(html, /href="https:\/\/apps\.apple\.com\/us\/app\/[^"]+"/);
  assert.match(html, /<a\b(?=[^>]*aria-label="MusicPod home")(?=[^>]*href="\/en")[^>]*>/);

  const zhResponse = await render("/zh-cn/ipod-music");
  assert.equal(zhResponse.status, 200);

  const zhHtml = await zhResponse.text();
  assert.match(zhHtml, /<title>MusicPod 使用指南：导入音乐、Apple Music 与转盘操作<\/title>/);
  assert.match(zhHtml, /id="ipod-music-title">使用指南<\/h1>/);
  assert.match(zhHtml, /rel="canonical" href="https:\/\/www\.musicpod\.app\/zh-cn\/ipod-music"/);
});

test("renders a branded 404 page for unknown routes", async () => {
  const expectations = ["/xyz", "/en/unknown", "/en/privacy/extra"];

  await Promise.all(expectations.map(async (pathname) => {
    const response = await render(pathname);
    assert.equal(response.status, 404, pathname);

    const html = await response.text();
    assert.match(html, /This page could not be found\./, pathname);
    assert.match(html, /Back to MusicPod/, pathname);
    assert.match(html, /not-found-shell/, pathname);
  }));
});

test("submits the pasted share text to the reward API", async () => {
  const source = await readFile(new URL("../app/ShareReward.tsx", import.meta.url), "utf8");
  assert.match(source, /fetch\("\/api\/reward\/claim"/);
  assert.match(source, /JSON\.stringify\(\{ shareText \}\)/);
  assert.match(source, /className="reward-share-textarea"/);
  assert.match(source, /role="alert"/);
  assert.match(source, /alreadyClaimed/);
  assert.match(source, /\{reward\.redemptionUrl\}<span aria-hidden="true">↗<\/span>/);
  assert.doesNotMatch(source, /type="file"|onDrop|dataTransfer|detectSelectedStars|claimDirectly/i);
});

test("ships localized HTML and metadata for every supported market", async () => {
  const expectations = [
    ["/zh-cn", "zh-CN", "回到手中"],
    ["/zh-tw", "zh-TW", "回到手中"],
    ["/ja", "ja", "その手に"],
    ["/ko", "ko", "내 손안에"],
    ["/es", "es", "En tus manos"],
    ["/fr", "fr", "À portée de main"],
    ["/de", "de", "In deiner Hand"],
    ["/pt-br", "pt-BR", "Nas suas mãos"],
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
    ["/zh-cn/privacy", "隐私政策 — MusicPod", "你的音乐 始终属于你"],
    ["/zh-tw/privacy", "隱私權政策 — MusicPod", "你的音樂 始終屬於你"],
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
    assert.match(html, /leavestyle101@gmail\.com/, pathname);
    assert.match(html, /application\/ld\+json/, pathname);
    assert.match(html, /href="https:\/\/www\.leavestyle\.com\/(?:en)?"/, pathname);
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

test("keeps product and guide SEO consistent across all nine languages", async () => {
  const languages = [
    ["en", "en"], ["zh-cn", "zh-CN"], ["zh-tw", "zh-TW"],
    ["ja", "ja"], ["ko", "ko"], ["es", "es"], ["fr", "fr"],
    ["de", "de"], ["pt-br", "pt-BR"],
  ];
  const sectionIds = ["get-started", "import-local-music", "apple-music", "spotify", "click-wheel", "cover-flow"];
  const titles = new Set();
  const descriptions = new Set();

  await Promise.all(languages.map(async ([locale, language]) => {
    const home = `/${locale}`;
    const guide = `${home}/ipod-music`;
    const [homeResponse, guideResponse] = await Promise.all([render(home), render(guide)]);
    assert.equal(homeResponse.status, 200, home);
    assert.equal(guideResponse.status, 200, guide);
    const [homeHtml, guideHtml] = await Promise.all([homeResponse.text(), guideResponse.text()]);

    for (const [pathname, html] of [[home, homeHtml], [guide, guideHtml]]) {
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, pathname);
      assert.ok(html.includes(`<html lang="${language}">`), pathname);
      assert.ok(html.includes(`rel="canonical" href="https://www.musicpod.app${pathname}"`), pathname);
      assert.match(html, /name="robots" content="index, follow"/i, pathname);
      assert.doesNotMatch(html, /name="robots" content="[^"]*noindex/i, pathname);
      assert.equal((html.match(/<link rel="alternate"/gi) ?? []).length, 10, pathname);
      const title = html.match(/<title>(.*?)<\/title>/)?.[1];
      const description = html.match(/name="description" content="([^"]+)"/)?.[1];
      assert.ok(title && description, pathname);
      assert.ok(!titles.has(title), `Unique title: ${pathname}`);
      assert.ok(!descriptions.has(description), `Unique description: ${pathname}`);
      titles.add(title);
      descriptions.add(description);
      const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
        .flatMap((match) => JSON.parse(match[1])["@graph"]);
      assert.ok(graphs.length > 0, pathname);
      assert.ok(graphs.every((entry) => entry["@type"] !== "FAQPage"), pathname);
      for (const [otherLocale, otherLanguage] of [...languages, ["en", "x-default"]]) {
        const suffix = pathname === guide ? "/ipod-music" : "";
        assert.ok(html.toLowerCase().includes(`hreflang="${otherLanguage}" href="https://www.musicpod.app/${otherLocale}${suffix}"`.toLowerCase()), pathname);
      }
      if (pathname === home) {
        const app = graphs.find((entry) => entry["@type"] === "SoftwareApplication");
        assert.equal(app?.url, `https://www.musicpod.app${home}`, home);
        assert.equal(app?.inLanguage, language, home);
        assert.equal(app?.screenshot, `https://www.musicpod.app/product/captures/${locale}/classic.webp`, home);
        assert.equal(app?.offers.price, "0", home);
        assert.ok(app.featureList.includes("Apple Music"), home);
        assert.ok(app.featureList.includes("Spotify (MusicPod 2.6+)"), home);
        assert.equal(app.aggregateRating, undefined, home);
      }
    }

    assert.ok(homeHtml.includes('id="music-sources"'), home);
    assert.equal((homeHtml.match(/class="mp-source"/g) ?? []).length, 3, home);
    assert.ok(!homeHtml.includes(`href="${home}/reward"`), home);
    assert.ok(!homeHtml.includes(`href="${guide}`), home);
    assert.deepEqual([...guideHtml.matchAll(/class="privacy-section" id="([^"]+)"/g)].map((match) => match[1]), sectionIds, guide);
    assert.equal((guideHtml.match(/class="guide-steps"/g) ?? []).length, 3, guide);
    const hero = homeHtml.match(/<section[^>]+class="mp-hero"[^>]*>([\s\S]*?)<\/section>/)?.[1];
    assert.ok(hero, home);
    assert.equal((hero.match(/<a\b/g) ?? []).length, 1, home);
    assert.match(hero, /href="https:\/\/apps\.apple\.com\//, home);
    for (const appearance of ["black", "white"]) {
      const badge = `/product/app-store/${locale}-${appearance}.svg`;
      assert.ok(homeHtml.includes(badge), badge);
      await access(new URL(`../public${badge}`, import.meta.url));
    }
    for (const asset of ["player-in-hand.webp", "player-in-hand-mobile.webp"]) {
      assert.ok(hero.includes(`/product/studio/${asset}`), asset);
      await access(new URL(`../public/product/studio/${asset}`, import.meta.url));
    }
    for (const scene of ["home", "cover-flow", "immersive", "theme"]) {
      const src = `/product/captures/${locale}/${scene}.webp`;
      assert.ok(homeHtml.includes(`src="${src}"`), src);
      await access(new URL(`../public${src}`, import.meta.url));
    }
    assert.ok(guideHtml.includes(`src="/product/captures/${locale}/home.webp"`), guide);
  }));
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
  const [sitemapResponse, robotsResponse, manifestResponse] = await Promise.all([
    render("/sitemap.xml"),
    render("/robots.txt"),
    render("/manifest.webmanifest"),
  ]);
  assert.equal(sitemapResponse.status, 200);
  assert.equal(robotsResponse.status, 200);
  assert.equal(manifestResponse.status, 200);

  const [sitemap, robots, manifest] = await Promise.all([
    sitemapResponse.text(),
    robotsResponse.text(),
    manifestResponse.text(),
  ]);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/en/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/en\/privacy/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/en\/ipod-music/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br\/ipod-music/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br\/privacy/);
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/zh-cn\/privacy/);
  assert.doesNotMatch(sitemap, /reward/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(sitemap, /hreflang="x-default"/);
  assert.match(sitemap, /<lastmod>2026-11-25T00:00:00\.000Z<\/lastmod>/);
  assert.match(robots, /Sitemap: https:\/\/www\.musicpod\.app\/sitemap\.xml/i);
  assert.match(robots, /Host: https:\/\/www\.musicpod\.app\//i);
  assert.match(manifestResponse.headers.get("content-type") ?? "", /^application\/manifest\+json\b/i);
  assert.equal(JSON.parse(manifest).short_name, "MusicPod");
});

test("ships the product media, internationalization source, and image sizing guard", async () => {
  const assets = [
    "../public/app-icon.png",
    "../public/app-icon-dark.png",
    "../public/og.png",
    "../public/product/sources/apple-music.png",
    "../public/product/sources/spotify.svg",
  ];

  await Promise.all(assets.map((asset) => access(new URL(asset, import.meta.url))));

  const [page, privacyPage, styles, appStoreBadge, brandIcon, themeToggle, themeScript, dictionaries, privacyDictionaries, packageJson] = await Promise.all([
    readFile(new URL("../app/[locale]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/[locale]/privacy/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/AppStoreBadge.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/BrandIcon.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ThemeToggle.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/ThemeScript.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/dictionaries.ts", import.meta.url), "utf8"),
    readFile(new URL("../lib/privacy-dictionaries.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /footer\.privacy/);
  assert.match(privacyPage, /privacyPolicyConfig/);
  assert.doesNotMatch(privacyPage, /pathSuffix/);
  assert.match(privacyPage, /application\/ld\+json/);
  assert.match(styles, /img\s*{[^}]*height:\s*auto;/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /:root\[data-theme="dark"\]/);
  assert.match(styles, /prefers-color-scheme:\s*dark/);
  assert.match(styles, /\.app-store-badge-image/);
  assert.match(appStoreBadge, /\/product\/app-store\//);

  assert.match(appStoreBadge, /badgeUrl\("white"\)/);
  assert.match(brandIcon, /src="\/app-icon-dark\.png"/);
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
  assert.match(dictionaries, /Choose a color/);
  assert.match(dictionaries, /"pt-br": ptBR/);
  assert.match(privacyDictionaries, /No MusicPod account/);
  assert.match(privacyDictionaries, /Privacy email/);
  assert.match(privacyDictionaries, /"pt-br": ptBR/);
  assert.match(packageJson, /@formatjs\/intl-localematcher/);
  assert.doesNotMatch(packageJson, /react-icons/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

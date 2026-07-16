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
  assert.match(html, /Skip to content/);
  assert.match(html, /\/product\/musicpod-home\.webp/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /href="\/zh-cn"/);
  assert.match(html, /hreflang="fr"/i);
  assert.match(html, /https?:\/\/[^\"]+\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|\/_vinext\/image/i);
});

test("ships localized HTML and metadata for every supported market", async () => {
  const expectations = [
    ["/zh-cn", "zh-CN", "你的音乐。"],
    ["/zh-tw", "zh-TW", "你的音樂。"],
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
    assert.match(html, new RegExp(`rel="canonical" href="https?://[^\"]+${pathname}"`), pathname);
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
  assert.match(sitemap, /https:\/\/www\.musicpod\.app\/pt-br/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(robots, /Sitemap: https:\/\/www\.musicpod\.app\/sitemap\.xml/i);
});

test("ships the product media, internationalization source, and image sizing guard", async () => {
  const assets = [
    "../public/app-icon.png",
    "../public/og.png",
    "../public/product/musicpod-home.webp",
    "../public/product/icons/albums.webp",
    "../public/product/icons/playlists.webp",
    "../public/product/icons/theme.webp",
    "../public/product/textures/vinyl.webp",
  ];

  await Promise.all(assets.map((asset) => access(new URL(asset, import.meta.url))));

  const [page, styles, showcase, dictionaries, packageJson] = await Promise.all([
    readFile(new URL("../app/[locale]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/PersonalizationShowcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../lib/dictionaries.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /SpotlightCard/);
  assert.match(page, /MusicPod actual app interface|productLabel/);
  assert.match(styles, /img\s*{[^}]*height:\s*auto;/);
  assert.match(styles, /prefers-reduced-motion/);
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
  assert.match(showcase, /personalization-carousel-track/);
  assert.match(showcase, /finishes\.map/);
  assert.match(styles, /\.personalization-screen\s*{[^}]*aspect-ratio:\s*1;/s);
  assert.match(styles, /\.personalization-wheel\s*{[^}]*width:\s*72%;/s);
  assert.match(styles, /\.personalization-center\s*{[^}]*width:\s*34%;/s);
  assert.match(dictionaries, /Classic color combinations/);
  assert.match(dictionaries, /"pt-br": ptBR/);
  assert.match(packageJson, /@formatjs\/intl-localematcher/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

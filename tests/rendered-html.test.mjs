import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://musicpod.example/", {
      headers: { accept: "text/html" },
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

test("server-renders the MusicPod marketing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<title>MusicPod — 把 iPhone 变回 iPod<\/title>/);
  assert.match(html, /把 iPhone/);
  assert.match(html, /变回 iPod。/);
  assert.match(html, /点按式转盘/);
  assert.match(html, /Apple Music/);
  assert.match(html, /App Store/);
  assert.match(html, /即将上线/);
  assert.match(html, /\/product\/musicpod-home\.webp/);
  assert.match(html, /https?:\/\/[^\"]+\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Codex is working|react-loading-skeleton|\/_vinext\/image/i);
});

test("ships the real product media and social card", async () => {
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

  const [page, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /MusicPod 真实应用界面/);
  assert.match(page, /12[\s\S]*种机身与转盘配色/);
  assert.match(page, /9[\s\S]*套星云背景主题/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

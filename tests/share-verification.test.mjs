import assert from "node:assert/strict";
import test from "node:test";

import { extractShareUrl, verifyShareText } from "../lib/share-verification.mjs";

function pageResponse({ url = "", status = 200, body = "" }) {
  return {
    ok: status >= 200 && status < 300,
    status,
    url,
    text: async () => body,
    json: async () => JSON.parse(body),
  };
}

const xhsShareBlob =
  "iPhone18要来喽：欢迎体验MusicPod 是简单、好看、好... https://xhslink.cn/o/9BPwJKtSEh 复制一下这行字，然后打开【小红书】看笔记。";

const xhsCanonicalUrl =
  "https://www.xiaohongshu.com/discovery/item/6aa17cd50000000029018dab?xsec_token=CBenXesp68z6";

const xhsNoteHtml =
  'window.__INITIAL_STATE__={"note":{"noteId":"6aa17cd50000000029018dab",' +
  '"desc":"#musicpod[话题]# 是简单、好看、好用、现代化的极简音乐播放器"},"comments":[]}';

const xOembedBody = JSON.stringify({
  author_name: "LeaveStyle",
  html: '<blockquote><p lang="en">MusicPod turns your Apple Music library into a click-wheel experience.</p></blockquote>',
});

test("extracts the URL from pasted share text", () => {
  assert.equal(extractShareUrl(xhsShareBlob), "https://xhslink.cn/o/9BPwJKtSEh");
  assert.equal(extractShareUrl("no link here"), null);
  assert.equal(extractShareUrl(undefined), null);
});

test("rejects text without a link and unsupported platforms", async () => {
  assert.equal((await verifyShareText("分享快乐")).error, "invalid_link");
  assert.equal(
    (await verifyShareText("看看这个 https://v.douyin.com/4WOJy71KHtQ/ 复制此链接")).error,
    "unsupported_platform",
  );
});

test("verifies a Xiaohongshu note and returns a stable proof hash", async () => {
  const fetches = [];
  const fetchImpl = async (url) => {
    fetches.push(url);
    return pageResponse({ url: xhsCanonicalUrl, body: xhsNoteHtml });
  };

  const result = await verifyShareText(xhsShareBlob, { fetchImpl });
  assert.deepEqual(
    { platform: result.platform, contentId: result.contentId },
    { platform: "xhs", contentId: "6aa17cd50000000029018dab" },
  );
  assert.match(result.proofHash, /^[a-f0-9]{64}$/);
  assert.equal(fetches[0], "https://xhslink.cn/o/9BPwJKtSEh");

  const again = await verifyShareText("https://xhslink.com/other " + xhsCanonicalUrl, { fetchImpl });
  assert.equal(again.proofHash, result.proofHash);
});

test("rejects Xiaohongshu notes that do not mention MusicPod", async () => {
  const body = xhsNoteHtml.replace("#musicpod[话题]#", "#别的应用[话题]#");
  const result = await verifyShareText(xhsShareBlob, {
    fetchImpl: async () => pageResponse({ url: xhsCanonicalUrl, body }),
  });
  assert.equal(result.error, "content_mismatch");
});

test("reports missing Xiaohongshu notes", async () => {
  const result = await verifyShareText(xhsShareBlob, {
    fetchImpl: async () => pageResponse({ url: "https://www.xiaohongshu.com/", body: "{}" }),
  });
  assert.equal(result.error, "content_not_found");
});

test("verifies an X post through oEmbed", async () => {
  const fetchImpl = async (url) => {
    assert.match(url, /^https:\/\/publish\.twitter\.com\/oembed\?/);
    assert.match(url, /x\.com%2FLeaveStyle1%2Fstatus%2F2087582604245782841/);
    return pageResponse({ url, body: xOembedBody });
  };

  const result = await verifyShareText("https://x.com/LeaveStyle1/status/2087582604245782841?s=20", {
    fetchImpl,
  });
  assert.deepEqual(
    { platform: result.platform, contentId: result.contentId },
    { platform: "x", contentId: "2087582604245782841" },
  );
  assert.match(result.proofHash, /^[a-f0-9]{64}$/);
});

test("resolves t.co links to a status before checking oEmbed", async () => {
  const fetchImpl = async (url) => {
    if (url === "https://t.co/abc123") {
      return pageResponse({ url: "https://x.com/LeaveStyle1/status/2087582604245782841" });
    }
    return pageResponse({ url, body: xOembedBody });
  };

  const result = await verifyShareText("check https://t.co/abc123 !", { fetchImpl });
  assert.equal(result.contentId, "2087582604245782841");
});

test("rejects deleted X posts and profile links without a status", async () => {
  const deleted = await verifyShareText("https://x.com/LeaveStyle1/status/2087582604245782841", {
    fetchImpl: async () => pageResponse({ status: 404 }),
  });
  assert.equal(deleted.error, "content_not_found");

  const profile = await verifyShareText("https://x.com/LeaveStyle1", {
    fetchImpl: async () => pageResponse({ body: xOembedBody }),
  });
  assert.equal(profile.error, "invalid_link");
});

test("treats fetch failures as temporarily unverifiable", async () => {
  const result = await verifyShareText(xhsShareBlob, {
    fetchImpl: async () => {
      throw new Error("network down");
    },
  });
  assert.equal(result.error, "verification_unavailable");
});

# MusicPod Web

MusicPod 的官方产品落地页。网站基于 Next.js 16、React 19 与 Vinext 构建，面向 Cloudflare/Sites 部署。

## 本地开发

需要 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 校验与构建

```bash
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

产品截图和应用视觉素材位于 `public/product/`，页面实现位于 `app/`。

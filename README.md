# MusicPod Web

MusicPod 的全球官方产品网站，由独立开发者品牌 [LeaveStyle](https://leavestyle.com/) 打造。网站基于 Next.js 16、React 19 与 Vinext 构建，支持英语、简繁中文、日语、韩语、西班牙语、法语、德语和巴西葡萄牙语。

## 本地开发

需要 Node.js 22。

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`，网站会根据浏览器语言进入对应版本；也可以直接访问 `/en`、`/zh-cn` 等语言路径。

## 校验与构建

```bash
npm run lint
npm run build
node --test tests/rendered-html.test.mjs
```

产品截图和应用视觉素材位于 `public/product/`，本地化文案位于 `lib/dictionaries.ts`。

`npm run build` 生成 Sites/Vinext 的 `dist` 构建；Vercel 会根据
`vercel.json` 执行 `npm run build:vercel`，生成原生 Next.js 的 `.next` 构建。

## Supabase 兑换码

Vercel 生产环境使用 Supabase 发放兑换码，Sites 环境保留 D1 兼容路径。

1. 在 Supabase SQL Editor 执行 `supabase/migrations/0001_musicpod_reward_codes.sql`。
2. 将 `.env.example` 复制为 `.env.local`，配置 `SUPABASE_URL`、`SUPABASE_SECRET_KEY` 和 32 字节 Base64URL 格式的 `REWARD_CODE_KEY`。
3. 导入 App Store 兑换码：

```bash
node --env-file=.env.local scripts/import-reward-codes-to-supabase.mjs --input /absolute/path/to/codes.csv
```

同样的三个变量必须配置在 Vercel Production 环境中。Supabase 表不允许浏览器匿名访问；领取通过服务端数据库函数原子完成。

"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * 微信内置 WebView 会静默拦截 App Store 链接跳转（点击无任何反应），
 * 属于微信的白名单限制，网页层无法绕过；唯一可靠的做法是引导用户通过
 * 右上角『···』菜单在系统浏览器中打开本页。
 *
 * 本组件在布局挂载一次即可拦截全站 App Store 链接：
 * - document 级 capture 阶段点击委托，无需改动任何现有 <a>（服务端组件页面同样生效）
 * - 浮层用 Portal 挂到 document.body：站内祖先若带 transform（入场动画
 *   fill 残留）会使 position:fixed 改为相对该祖先布局，浮层被压缩成窄条
 * - 定位用 top/left/right/bottom 长写法（inset 简写在老 WebView 内核不受支持）
 * - 全屏关闭层用 <button>（a11y：非交互元素不得挂 click）；卡片/箭头
 *   pointer-events:none，点击穿透到关闭层，实现「点任意位置关闭」
 * - 文案按 URL 路径与 <html lang> 推断语言
 */

interface Copy {
  title: string;
  step1: string;
  step2: string;
  dismiss: string;
}

const COPY: Record<string, Copy> = {
  zh: {
    title: "微信内无法直接打开 App Store",
    step1: "点击右上角『···』菜单",
    step2: "选择『在浏览器中打开』即可下载",
    dismiss: "点击任意位置关闭",
  },
  "zh-Hant": {
    title: "微信內無法直接開啟 App Store",
    step1: "點擊右上角『···』選單",
    step2: "選擇『在瀏覽器中開啟』即可下載",
    dismiss: "點擊任意位置關閉",
  },
  en: {
    title: "The App Store can't open inside WeChat",
    step1: "Tap the '···' menu in the top-right corner",
    step2: "Choose 'Open in Browser' to download",
    dismiss: "Tap anywhere to close",
  },
  ja: {
    title: "WeChat 内では App Store を開けません",
    step1: "右上の「···」メニューをタップ",
    step2: "「ブラウザで開く」を選んでダウンロード",
    dismiss: "タップすると閉じます",
  },
  ko: {
    title: "WeChat에서는 App Store를 열 수 없어요",
    step1: "오른쪽 위 '···' 메뉴를 탭하세요",
    step2: "'브라우저로 열기'를 선택해 다운로드하세요",
    dismiss: "아무 곳이나 탭하면 닫혀요",
  },
  es: {
    title: "No se puede abrir App Store dentro de WeChat",
    step1: "Toca el menú '···' en la esquina superior derecha",
    step2: "Elige 'Abrir en navegador' para descargar",
    dismiss: "Toca en cualquier lugar para cerrar",
  },
  fr: {
    title: "Impossible d'ouvrir l'App Store dans WeChat",
    step1: "Touchez le menu « ··· » en haut à droite",
    step2: "Choisissez « Ouvrir dans le navigateur » pour télécharger",
    dismiss: "Touchez n’importe où pour fermer",
  },
  de: {
    title: "Der App Store lässt sich in WeChat nicht öffnen",
    step1: "Tippe oben rechts auf das Menü '···'",
    step2: "Wähle 'Im Browser öffnen', um herunterzuladen",
    dismiss: "Tippe irgendwo zum Schließen",
  },
  pt: {
    title: "Não é possível abrir a App Store dentro do WeChat",
    step1: "Toque no menu '···' no canto superior direito",
    step2: "Escolha 'Abrir no navegador' para baixar",
    dismiss: "Toque em qualquer lugar para fechar",
  },
};

/** 是否处于微信内置 WebView（MicroMessenger UA） */
export function isWeChatUA(): boolean {
  return /MicroMessenger|WeChat/i.test(navigator.userAgent);
}

function isAppStoreHref(href: string | null): boolean {
  if (!href) return false;
  return (
    /^https?:\/\/(apps|itunes)\.apple\.com\//i.test(href) ||
    /^itms-(apps?|services):/i.test(href)
  );
}

function pickCopy(): Copy {
  if (/^\/en(\/|$)/.test(window.location.pathname)) return COPY.en;
  const lang = document.documentElement.lang.toLowerCase();
  if (lang.startsWith("zh")) {
    return /tw|hk|hant/.test(lang) ? COPY["zh-Hant"] : COPY.zh;
  }
  const two = lang.slice(0, 2);
  return COPY[two] ?? COPY.en;
}

const CSS = `
.wxg-mask{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.86);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);animation:wxg-in .25s ease both;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif;line-height:1.6;-webkit-font-smoothing:antialiased}
@keyframes wxg-in{from{opacity:0}to{opacity:1}}
.wxg-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;margin:0;padding:0;border:0;background:transparent;cursor:pointer}
.wxg-card{position:relative;z-index:1;pointer-events:none;max-width:340px;width:100%;padding:30px 28px;text-align:center;border-radius:16px;border:1px solid rgba(133,194,255,.28);background:rgba(13,20,38,.78);color:#eaf2ff;animation:wxg-rise .35s ease both}
@keyframes wxg-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.wxg-title{margin:0 0 20px;font-size:17px;font-weight:600;letter-spacing:.02em}
.wxg-step{display:flex;align-items:center;gap:12px;margin:12px 0;text-align:left;font-size:15px}
.wxg-step em{flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;border:1px solid rgba(133,194,255,.35);background:rgba(133,194,255,.1);color:#85c2ff;font-style:normal;font-size:13px}
.wxg-dismiss{margin:22px 0 0;font-size:12px;color:rgba(234,242,255,.42)}
.wxg-arrow{position:absolute;z-index:1;pointer-events:none;top:72px;top:calc(env(safe-area-inset-top,0px) + 72px);right:18px;width:76px;height:76px;color:#fff;filter:drop-shadow(0 0 12px rgba(133,194,255,.55));animation:wxg-nudge 1.6s ease-in-out infinite}
@keyframes wxg-nudge{0%,100%{transform:translate(0,0)}50%{transform:translate(8px,-8px)}}
@media (prefers-reduced-motion:reduce){.wxg-mask,.wxg-card,.wxg-arrow{animation:none}}
`;

/** 全屏引导浮层（Portal 挂到 body，需在客户端事件后渲染） */
export function WeChatGuideOverlay({ onClose }: { onClose: () => void }) {
  const t = pickCopy();
  return createPortal(
    <div
      className="wxg-mask"
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <button
        type="button"
        className="wxg-backdrop"
        aria-label={t.dismiss}
        onClick={onClose}
      />
      <svg
        className="wxg-arrow"
        viewBox="0 0 96 96"
        width="76"
        height="76"
        aria-hidden="true"
      >
        <path
          d="M28 68 L68 28"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M40 28 H68 V56"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="wxg-card">
        <p className="wxg-title">{t.title}</p>
        <p className="wxg-step">
          <em>1</em>
          {t.step1}
        </p>
        <p className="wxg-step">
          <em>2</em>
          {t.step2}
        </p>
        <p className="wxg-dismiss">{t.dismiss}</p>
      </div>
    </div>,
    document.body
  );
}

/** 布局挂载一次：微信内拦截全站 App Store 链接点击并弹出引导 */
export function WeChatAppStoreGuard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isWeChatUA()) return;
    const onCaptureClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (anchor && isAppStoreHref(anchor.getAttribute("href"))) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onCaptureClick, true);
    return () => document.removeEventListener("click", onCaptureClick, true);
  }, []);

  if (!open) return null;
  return <WeChatGuideOverlay onClose={() => setOpen(false)} />;
}

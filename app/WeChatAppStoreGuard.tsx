'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 微信内置 WebView 会静默拦截 App Store 链接跳转（点击无任何反应），
 * 属于微信的白名单限制，网页层无法绕过；唯一可靠的做法是引导用户通过
 * 右上角『···』菜单在系统浏览器中打开本页。
 *
 * 本组件在布局挂载一次即可拦截全站 App Store 链接：
 * - document 级 capture 阶段点击委托，无需改动任何现有 <a>
 * - 浮层用原生 <dialog> + showModal()：top-layer 渲染不受祖先 transform 影响
 *   （无需 Portal），Esc 关闭、焦点管理与 inert 页面由浏览器提供
 * - 卡片/箭头 pointer-events:none，任何位置的点击都落在 dialog 自身，
 *   据此实现「点任意位置关闭」
 * - 定位用 top/right 长写法（inset 简写在老 WebView 内核不受支持）
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
    title: '微信内无法直接打开 App Store',
    step1: '点击右上角『···』菜单',
    step2: '选择『在浏览器中打开』即可下载',
    dismiss: '点击任意位置关闭',
  },
  'zh-Hant': {
    title: '微信內無法直接開啟 App Store',
    step1: '點擊右上角『···』選單',
    step2: '選擇『瀏覽器中開啟』即可下載',
    dismiss: '點擊任意位置關閉',
  },
  en: {
    title: "The App Store can't open inside WeChat",
    step1: "Tap the '···' menu in the top-right corner",
    step2: "Choose 'Open in Browser' to download",
    dismiss: 'Tap anywhere to close',
  },
  ja: {
    title: 'WeChat 内では App Store を開けません',
    step1: '右上の「···」メニューをタップ',
    step2: '「ブラウザで開く」を選んでダウンロード',
    dismiss: 'タップすると閉じます',
  },
  ko: {
    title: 'WeChat에서는 App Store를 열 수 없어요',
    step1: "오른쪽 위 '···' 메뉴를 탭하세요",
    step2: "'브라우저로 열기'를 선택해 다운로드하세요",
    dismiss: '아무 곳이나 탭하면 닫혀요',
  },
  es: {
    title: 'No se puede abrir App Store dentro de WeChat',
    step1: "Toca el menú '···' en la esquina superior derecha",
    step2: "Elige 'Abrir en navegador' para descargar",
    dismiss: 'Toca en cualquier lugar para cerrar',
  },
  fr: {
    title: "Impossible d'ouvrir l'App Store dans WeChat",
    step1: 'Touchez le menu « ··· » en haut à droite',
    step2: 'Choisissez « Ouvrir dans le navigateur » pour télécharger',
    dismiss: 'Touchez n’importe où pour fermer',
  },
  de: {
    title: 'Der App Store lässt sich in WeChat nicht öffnen',
    step1: "Tippe oben rechts auf das Menü '···'",
    step2: "Wähle 'Im Browser öffnen', um herunterzuladen",
    dismiss: 'Tippe irgendwo zum Schließen',
  },
  pt: {
    title: 'Não é possível abrir a App Store dentro do WeChat',
    step1: "Toque no menu '···' no canto superior direito",
    step2: "Escolha 'Abrir no navegador' para baixar",
    dismiss: 'Toque em qualquer lugar para fechar',
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
  if (lang.startsWith('zh')) {
    return /tw|hk|hant/.test(lang) ? COPY['zh-Hant'] : COPY.zh;
  }
  const two = lang.slice(0, 2);
  return COPY[two] ?? COPY.en;
}

/** 全屏引导浮层（原生 <dialog>，top-layer 渲染，挂载后以 modal 打开） */
export function WeChatGuideOverlay({ onClose }: { onClose: () => void }) {
  const t = pickCopy();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  // 「点任意位置关闭」：卡片与箭头 pointer-events:none，点击都落在 dialog 自身
  // （含 ::backdrop 区域）。用原生 pointer 监听而非 onClick，Esc/返回手势是键盘路径
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    let pressedInside = false;
    const isInside = (event: PointerEvent) => event.target !== dialog;
    const handlePointerDown = (event: PointerEvent) => {
      pressedInside = isInside(event);
    };
    const handlePointerUp = (event: PointerEvent) => {
      if (!pressedInside && !isInside(event)) dialog.close();
    };
    dialog.addEventListener('pointerdown', handlePointerDown);
    dialog.addEventListener('pointerup', handlePointerUp);
    return () => {
      dialog.removeEventListener('pointerdown', handlePointerDown);
      dialog.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label={t.title}
      className="wxg-dialog"
    >
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
    </dialog>
  );
}

/** 根布局挂载一次：微信内拦截全站 App Store 链接点击并弹出引导 */
export function WeChatAppStoreGuard() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isWeChatUA()) return;
    const onCaptureClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a');
      if (anchor && isAppStoreHref(anchor.getAttribute('href'))) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('click', onCaptureClick, true);
    return () => document.removeEventListener('click', onCaptureClick, true);
  }, []);

  if (!open) return null;
  return <WeChatGuideOverlay onClose={() => setOpen(false)} />;
}

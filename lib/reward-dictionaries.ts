import type { Locale } from "./locales";

type RewardTitleLine = {
  before: string;
  accent: string;
  after: string;
  tone: "share" | "lifetime";
};

export type RewardMessages = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  navLabel: string;
  title: readonly [RewardTitleLine, RewardTitleLine];
  store: string;
  pasteTitle: string;
  pasteHint: string;
  placeholder: string;
  verify: string;
  verifying: string;
  success: string;
  successBody: string;
  codeLabel: string;
  copy: string;
  copied: string;
  redeem: string;
  retry: string;
  invalidLink: string;
  unsupportedPlatform: string;
  contentNotFound: string;
  contentMismatch: string;
  alreadyClaimed: string;
  rateLimited: string;
  verificationUnavailable: string;
  codesUnavailable: string;
  serviceUnavailable: string;
};

const en: RewardMessages = {
  metaTitle: "Share for lifetime access — MusicPod",
  metaDescription: "Share your MusicPod experience on RedNote or X and claim lifetime access.",
  back: "MusicPod home",
  navLabel: "Lifetime reward",
  title: [
    { before: "Share MusicPod on ", accent: "RedNote or X", after: ".", tone: "share" },
    { before: "Get ", accent: "lifetime", after: " access.", tone: "lifetime" },
  ],
  store: "Get MusicPod on the App Store",
  pasteTitle: "Paste your share post link",
  pasteHint:
    "Post about your MusicPod experience on RedNote or X with the #MusicPod hashtag, then paste the share text or link here.",
  placeholder: "e.g. https://xhslink.com/… or https://x.com/…/status/…",
  verify: "Verify and claim",
  verifying: "Verifying…",
  success: "Lifetime access claimed",
  successBody: "Open the link below to automatically redeem lifetime access.",
  codeLabel: "App Store redemption link",
  copy: "Copy link",
  copied: "Link copied",
  redeem: "Redeem now",
  retry: "Claim with another post",
  invalidLink: "No share link was found. Paste the full share text or link from RedNote or X.",
  unsupportedPlatform:
    "Only RedNote and X posts are supported for this campaign. Please share on one of them.",
  contentNotFound:
    "The post could not be opened. Make sure it is public and was not deleted, then try again.",
  contentMismatch:
    "The post is missing the #MusicPod hashtag. Add it to your post and try again.",
  alreadyClaimed: "This post has already been used to claim a code.",
  rateLimited: "Too many attempts. Please try again in a few minutes.",
  verificationUnavailable:
    "We could not reach the platform to verify your post. Please try again in a moment.",
  codesUnavailable: "The next batch of codes is being prepared. Please try again later.",
  serviceUnavailable: "The reward service is temporarily unavailable. Please try again.",
};

const zhCN: RewardMessages = {
  metaTitle: "分享送终身会员 — MusicPod",
  metaDescription: "在小红书或 X 分享 MusicPod 使用体验，粘贴分享链接领取终身会员兑换码。",
  back: "MusicPod 首页",
  navLabel: "分享送终身会员",
  title: [
    { before: "在", accent: "小红书或 X", after: "分享体验", tone: "share" },
    { before: "领取", accent: "终身", after: "会员", tone: "lifetime" },
  ],
  store: "前往 App Store 下载 MusicPod",
  pasteTitle: "粘贴分享文案或链接",
  pasteHint:
    "在小红书或 X 发布 MusicPod 使用体验，正文带上 #MusicPod 标签，然后复制分享文案或链接粘贴到这里。",
  placeholder: "例如：https://xhslink.com/… 或 https://x.com/…/status/…",
  verify: "验证并领取",
  verifying: "正在验证…",
  success: "领取成功",
  successBody: "打开下方链接，即可自动领取终身会员",
  codeLabel: "App Store 兑换链接",
  copy: "复制链接",
  copied: "链接已复制",
  redeem: "立即兑换",
  retry: "换一条分享再领",
  invalidLink: "没有识别到分享链接，请粘贴小红书或 X 的完整分享文案或链接。",
  unsupportedPlatform: "本活动仅支持小红书和 X 的分享，请在这两个平台发布后再来领取。",
  contentNotFound: "打不开这篇分享，请确认内容为公开状态且未被删除后重试。",
  contentMismatch: "分享内容里没有 #MusicPod 标签，请发布时带上标签后再来验证。",
  alreadyClaimed: "这条分享已经领取过兑换码了。",
  rateLimited: "尝试次数过多，请几分钟后再试。",
  verificationUnavailable: "暂时无法连接平台完成验证，请稍后重试。",
  codesUnavailable: "新一批兑换码正在补充，请稍后再试。",
  serviceUnavailable: "兑换服务暂时不可用，请稍后再试。",
};

const zhTW: RewardMessages = {
  ...zhCN,
  metaTitle: "分享送終身會員 — MusicPod",
  metaDescription: "在小紅書或 X 分享 MusicPod 使用體驗，貼上分享連結領取終身會員兌換碼。",
  back: "MusicPod 首頁",
  navLabel: "分享送終身會員",
  title: [
    { before: "在", accent: "小紅書或 X", after: "分享體驗", tone: "share" },
    { before: "領取", accent: "終身", after: "會員", tone: "lifetime" },
  ],
  store: "前往 App Store 下載 MusicPod",
  pasteTitle: "貼上分享文案或連結",
  pasteHint:
    "在小紅書或 X 發佈 MusicPod 使用體驗，正文加上 #MusicPod 標籤，然後複製分享文案或連結貼到這裡。",
  placeholder: "例如：https://xhslink.com/… 或 https://x.com/…/status/…",
  verify: "驗證並領取",
  verifying: "正在驗證…",
  success: "領取成功",
  successBody: "開啟下方連結，即可自動領取終身會員",
  codeLabel: "App Store 兌換連結",
  copy: "複製連結",
  copied: "連結已複製",
  redeem: "立即兌換",
  retry: "換一則分享再領",
  invalidLink: "沒有辨識到分享連結，請貼上小紅書或 X 的完整分享文案或連結。",
  unsupportedPlatform: "本活動僅支援小紅書和 X 的分享，請在這兩個平台發佈後再來領取。",
  contentNotFound: "無法開啟這則分享，請確認內容為公開狀態且未被刪除後重試。",
  contentMismatch: "分享內容沒有 #MusicPod 標籤，請發佈時加上標籤後再來驗證。",
  alreadyClaimed: "這則分享已經領取過兌換碼了。",
  rateLimited: "嘗試次數過多，請幾分鐘後再試。",
  verificationUnavailable: "暫時無法連上平台完成驗證，請稍後重試。",
  codesUnavailable: "新一批兌換碼正在補充，請稍後再試。",
  serviceUnavailable: "兌換服務暫時無法使用，請稍後再試。",
};

const translations: Partial<Record<Locale, Partial<RewardMessages>>> = {
  ja: {
    back: "MusicPod ホーム",
    navLabel: "シェアして永久アクセス",
    title: [
      { before: "", accent: "RedNote か X", after: " でシェアしよう。", tone: "share" },
      { before: "", accent: "永久", after: "アクセスを受け取る。", tone: "lifetime" },
    ],
    store: "App Store で MusicPod を入手",
    pasteTitle: "シェア投稿のリンクを貼り付け",
    pasteHint:
      "RedNote または X で MusicPod の使用感を投稿（本文に #MusicPod ハッシュタグを付ける）し、シェア文言かリンクをここに貼り付けてください。",
    placeholder: "例：https://xhslink.com/… または https://x.com/…/status/…",
    verify: "確認して受け取る",
    verifying: "確認中…",
    contentNotFound: "投稿を開けませんでした。公開設定で削除されていないか確認してください。",
    contentMismatch: "投稿に #MusicPod ハッシュタグがありません。追加して再度お試しください。",
    alreadyClaimed: "この投稿はすでにコードと引き換え済みです。",
    rateLimited: "試行回数が多すぎます。数分後に再度お試しください。",
    verificationUnavailable: "プラットフォームに接続できず確認できませんでした。しばらくしてから再試行してください。",
    success: "永久アクセスコードを取得しました",
    redeem: "永久アクセスを引き換える",
    retry: "別の投稿で試す",
  },
  ko: {
    back: "MusicPod 홈",
    navLabel: "공유하고 평생 이용",
    title: [
      { before: "", accent: "RedNote나 X", after: "에 공유하세요.", tone: "share" },
      { before: "", accent: "평생", after: " 이용권을 받으세요.", tone: "lifetime" },
    ],
    store: "App Store에서 MusicPod 받기",
    pasteTitle: "공유 게시물 링크 붙여넣기",
    pasteHint:
      "RedNote 또는 X에 MusicPod 사용 후기를 올리고(본문에 #MusicPod 해시태그 포함) 공유 문구나 링크를 여기에 붙여넣으세요.",
    placeholder: "예: https://xhslink.com/… 또는 https://x.com/…/status/…",
    verify: "확인하고 받기",
    verifying: "확인 중…",
    contentNotFound: "게시물을 열 수 없습니다. 공개 상태이고 삭제되지 않았는지 확인하세요.",
    contentMismatch: "게시물에 #MusicPod 해시태그가 없습니다. 추가하고 다시 시도하세요.",
    alreadyClaimed: "이 게시물은 이미 코드로 교환되었습니다.",
    rateLimited: "시도 횟수가 너무 많습니다. 몇 분 후 다시 시도하세요.",
    verificationUnavailable: "플랫폼에 연결하여 확인하지 못했습니다. 잠시 후 다시 시도하세요.",
    success: "평생 이용 코드가 준비되었습니다",
    redeem: "평생 이용권 교환",
    retry: "다른 게시물로 시도",
  },
  es: {
    back: "Inicio de MusicPod",
    navLabel: "Comparte y gana acceso de por vida",
    title: [
      { before: "Comparte MusicPod en ", accent: "RedNote o X", after: ".", tone: "share" },
      { before: "Obtén acceso ", accent: "de por vida", after: ".", tone: "lifetime" },
    ],
    store: "Consigue MusicPod en el App Store",
    pasteTitle: "Pega el enlace de tu publicación",
    pasteHint:
      "Publica tu experiencia con MusicPod en RedNote o X (incluye el hashtag #MusicPod) y pega aquí el texto o enlace compartido.",
    placeholder: "p. ej. https://xhslink.com/… o https://x.com/…/status/…",
    verify: "Comprobar y canjear",
    verifying: "Comprobando…",
    contentNotFound: "No se pudo abrir la publicación. Comprueba que sea pública y no esté eliminada.",
    contentMismatch: "Falta el hashtag #MusicPod en la publicación. Añádelo e inténtalo de nuevo.",
    alreadyClaimed: "Esta publicación ya se canjeó por un código.",
    rateLimited: "Demasiados intentos. Prueba de nuevo en unos minutos.",
    verificationUnavailable: "No se pudo conectar con la plataforma para verificar tu publicación. Inténtalo de nuevo en un momento.",
    success: "Tu código de por vida está listo",
    redeem: "Canjear acceso de por vida",
    retry: "Probar con otra publicación",
  },
  fr: {
    back: "Accueil MusicPod",
    navLabel: "Partagez et gagnez un accès à vie",
    title: [
      { before: "Partagez MusicPod sur ", accent: "RedNote ou X", after: ".", tone: "share" },
      { before: "Obtenez un accès ", accent: "à vie", after: ".", tone: "lifetime" },
    ],
    store: "Téléchargez MusicPod sur l’App Store",
    pasteTitle: "Collez le lien de votre publication",
    pasteHint:
      "Publiez votre expérience de MusicPod sur RedNote ou X (ajoutez le hashtag #MusicPod), puis collez ici le texte ou le lien de partage.",
    placeholder: "ex. https://xhslink.com/… ou https://x.com/…/status/…",
    verify: "Vérifier et obtenir",
    verifying: "Vérification…",
    contentNotFound: "La publication n’a pas pu être ouverte. Vérifiez qu’elle est publique et non supprimée.",
    contentMismatch: "Le hashtag #MusicPod manque dans la publication. Ajoutez-le puis réessayez.",
    alreadyClaimed: "Cette publication a déjà été échangée contre un code.",
    rateLimited: "Trop de tentatives. Réessayez dans quelques minutes.",
    verificationUnavailable: "Impossible de contacter la plateforme pour vérifier votre publication. Réessayez dans un instant.",
    success: "Votre code à vie est prêt",
    redeem: "Activer l’accès à vie",
    retry: "Essayer une autre publication",
  },
  de: {
    back: "MusicPod Startseite",
    navLabel: "Teilen und dauerhaft nutzen",
    title: [
      { before: "Teile MusicPod auf ", accent: "RedNote oder X", after: ".", tone: "share" },
      { before: "Erhalte ", accent: "dauerhaften", after: " Zugang.", tone: "lifetime" },
    ],
    store: "MusicPod im App Store holen",
    pasteTitle: "Füge den Link zu deinem Beitrag ein",
    pasteHint:
      "Veröffentliche deine MusicPod-Erfahrung auf RedNote oder X (füge den Hashtag #MusicPod hinzu) und füge hier den geteilten Text oder Link ein.",
    placeholder: "z. B. https://xhslink.com/… oder https://x.com/…/status/…",
    verify: "Prüfen und einlösen",
    verifying: "Wird geprüft…",
    contentNotFound: "Der Beitrag ließ sich nicht öffnen. Stelle sicher, dass er öffentlich und nicht gelöscht ist.",
    contentMismatch: "Im Beitrag fehlt der Hashtag #MusicPod. Ergänze ihn und versuche es erneut.",
    alreadyClaimed: "Für diesen Beitrag wurde bereits ein Code eingelöst.",
    rateLimited: "Zu viele Versuche. Bitte in einigen Minuten erneut versuchen.",
    verificationUnavailable: "Die Plattform konnte zur Prüfung nicht erreicht werden. Bitte gleich erneut versuchen.",
    success: "Dein dauerhafter Zugangscode ist bereit",
    redeem: "Dauerhaften Zugang einlösen",
    retry: "Anderen Beitrag versuchen",
  },
  "pt-br": {
    back: "Início do MusicPod",
    navLabel: "Compartilhe e ganhe acesso vitalício",
    title: [
      { before: "Compartilhe o MusicPod no ", accent: "RedNote ou X", after: ".", tone: "share" },
      { before: "Receba acesso ", accent: "vitalício", after: ".", tone: "lifetime" },
    ],
    store: "Baixe o MusicPod na App Store",
    pasteTitle: "Cole o link da sua publicação",
    pasteHint:
      "Publique sua experiência com o MusicPod no RedNote ou X (inclua a hashtag #MusicPod) e cole aqui o texto ou link compartilhado.",
    placeholder: "ex.: https://xhslink.com/… ou https://x.com/…/status/…",
    verify: "Verificar e resgatar",
    verifying: "Verificando…",
    contentNotFound: "Não foi possível abrir a publicação. Confirme que ela é pública e não foi excluída.",
    contentMismatch: "Falta a hashtag #MusicPod na publicação. Adicione-a e tente novamente.",
    alreadyClaimed: "Essa publicação já foi trocada por um código.",
    rateLimited: "Muitas tentativas. Tente novamente em alguns minutos.",
    verificationUnavailable: "Não foi possível conectar à plataforma para verificar sua publicação. Tente novamente em instantes.",
    success: "Seu código vitalício está pronto",
    redeem: "Resgatar acesso vitalício",
    retry: "Tentar outra publicação",
  },
};

export function getRewardDictionary(locale: Locale): RewardMessages {
  if (locale === "zh-cn") return zhCN;
  if (locale === "zh-tw") return zhTW;
  return { ...en, ...translations[locale] };
}

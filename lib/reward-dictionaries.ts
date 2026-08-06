import type { Locale } from "./locales";

type RewardTitleLine = {
  before: string;
  accent: string;
  after: string;
  tone: "rating" | "lifetime";
};

export type RewardMessages = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  navLabel: string;
  title: readonly [RewardTitleLine, RewardTitleLine];
  review: string;
  uploadTitle: string;
  localOnly: string;
  choose: string;
  replace: string;
  analyze: string;
  analyzing: string;
  success: string;
  successBody: string;
  codeLabel: string;
  copy: string;
  copied: string;
  redeem: string;
  retry: string;
  invalidFile: string;
  tooLarge: string;
  nameMissing: string;
  starsMissing: string;
  codesUnavailable: string;
  serviceUnavailable: string;
};

const en: RewardMessages = {
  metaTitle: "5-star review reward — MusicPod",
  metaDescription: "Review MusicPod on the App Store and claim lifetime access.",
  back: "MusicPod home",
  navLabel: "Lifetime reward",
  title: [
    { before: "Upload a ", accent: "5-star", after: " review screenshot.", tone: "rating" },
    { before: "Get ", accent: "lifetime", after: " access.", tone: "lifetime" },
  ],
  review: "Review on the App Store",
  uploadTitle: "Upload a 5-star review screenshot",
  localOnly: "Checked on this device. The image is never uploaded.",
  choose: "Click or drop screenshot",
  replace: "Choose another",
  analyze: "Verify and claim",
  analyzing: "Verifying…",
  success: "Lifetime access claimed",
  successBody: "Open the redemption link on your Apple device.",
  codeLabel: "App Store redemption link",
  copy: "Copy link",
  copied: "Link copied",
  redeem: "Redeem now",
  retry: "Upload another screenshot",
  invalidFile: "Please choose an image.",
  tooLarge: "Please choose an image smaller than 15 MB.",
  nameMissing: "MusicPod wasn’t found in this screenshot. Please upload the complete review screen.",
  starsMissing: "Five selected stars weren’t found. Please choose five stars and take another screenshot.",
  codesUnavailable: "The next batch of codes is being prepared. Please try again later.",
  serviceUnavailable: "The reward service is temporarily unavailable. Please try again.",
};

const zhCN: RewardMessages = {
  metaTitle: "好评送终身会员 — MusicPod",
  metaDescription: "在 App Store 为 MusicPod 五星好评，上传截图领取终身会员兑换码。",
  back: "MusicPod 首页",
  navLabel: "好评送终身会员",
  title: [
    { before: "上传", accent: "五星好评", after: "截图。", tone: "rating" },
    { before: "领取", accent: "终身", after: "会员。", tone: "lifetime" },
  ],
  review: "前往 App Store 评价",
  uploadTitle: "上传五星好评截图",
  localOnly: "图片仅在本机识别，不会上传。",
  choose: "点击选择，或拖入截图",
  replace: "重新选择",
  analyze: "验证并领取",
  analyzing: "正在验证…",
  success: "领取成功",
  successBody: "请在 Apple 设备上打开兑换链接。",
  codeLabel: "App Store 兑换链接",
  copy: "复制链接",
  copied: "链接已复制",
  redeem: "立即兑换",
  retry: "重新上传",
  invalidFile: "请选择图片文件。",
  tooLarge: "请选择小于 15 MB 的图片。",
  nameMissing: "截图中没有识别到 MusicPod，请上传完整的评价页面。",
  starsMissing: "没有识别到已点亮的五颗星，请选择五星后重新截图。",
  codesUnavailable: "新一批兑换码正在补充，请稍后再试。",
  serviceUnavailable: "兑换服务暂时不可用，请稍后再试。",
};

const zhTW: RewardMessages = {
  ...zhCN,
  metaTitle: "好評送終身會員 — MusicPod",
  metaDescription: "在 App Store 為 MusicPod 五星好評，上傳截圖領取終身會員兌換碼。",
  back: "MusicPod 首頁",
  navLabel: "好評送終身會員",
  title: [
    { before: "上傳", accent: "五星好評", after: "截圖。", tone: "rating" },
    { before: "領取", accent: "終身", after: "會員。", tone: "lifetime" },
  ],
  review: "前往 App Store 評價",
  uploadTitle: "上傳五星好評截圖",
  localOnly: "圖片僅在本機辨識，不會上傳。",
  choose: "點擊選擇，或拖入截圖",
  replace: "重新選擇",
  analyze: "驗證並領取",
  analyzing: "正在驗證…",
  success: "領取成功",
  successBody: "請在 Apple 裝置上開啟兌換連結。",
  codeLabel: "App Store 兌換連結",
  copy: "複製連結",
  copied: "連結已複製",
  redeem: "立即兌換",
  retry: "重新上傳",
  invalidFile: "請選擇圖片檔案。",
  tooLarge: "請選擇小於 15 MB 的圖片。",
  nameMissing: "截圖中沒有辨識到 MusicPod，請上傳完整的評價頁面。",
  starsMissing: "沒有辨識到已點亮的五顆星，請選擇五星後重新截圖。",
  codesUnavailable: "新一批兌換碼正在補充，請稍後再試。",
  serviceUnavailable: "兌換服務暫時無法使用，請稍後再試。",
};

const translations: Partial<Record<Locale, Partial<RewardMessages>>> = {
  ja: {
    back: "MusicPod ホーム",
    navLabel: "レビューで永久アクセス",
    title: [
      { before: "", accent: "星5つ", after: "のレビュー画面をアップロード。", tone: "rating" },
      { before: "", accent: "永久", after: "アクセスを受け取る。", tone: "lifetime" },
    ],
    review: "App Store でレビュー",
    uploadTitle: "レビュー画面をアップロード",
    localOnly: "画像はこのデバイス内だけで確認され、アップロードされません。",
    choose: "クリックまたはドラッグして選択",
    replace: "別の画像を選ぶ",
    analyze: "画像を確認",
    analyzing: "確認中…",
    success: "永久アクセスコードを取得しました",
    redeem: "永久アクセスを引き換える",
    retry: "別の画像を試す",
  },
  ko: {
    back: "MusicPod 홈",
    navLabel: "리뷰하고 평생 이용",
    title: [
      { before: "", accent: "별 다섯 개", after: " 리뷰 화면을 업로드하세요.", tone: "rating" },
      { before: "", accent: "평생", after: " 이용권을 받으세요.", tone: "lifetime" },
    ],
    review: "App Store에서 리뷰하기",
    uploadTitle: "리뷰 스크린샷 업로드",
    localOnly: "이미지는 이 기기에서만 확인되며 업로드되지 않습니다.",
    choose: "클릭하거나 스크린샷 끌어 놓기",
    replace: "다른 이미지 선택",
    analyze: "스크린샷 확인",
    analyzing: "확인 중…",
    success: "평생 이용 코드가 준비되었습니다",
    redeem: "평생 이용권 교환",
    retry: "다른 스크린샷 사용",
  },
  es: {
    back: "Inicio de MusicPod",
    navLabel: "Reseña por acceso de por vida",
    title: [
      { before: "Sube una captura de tu reseña de ", accent: "cinco estrellas", after: ".", tone: "rating" },
      { before: "Obtén acceso ", accent: "de por vida", after: ".", tone: "lifetime" },
    ],
    review: "Valorar en App Store",
    uploadTitle: "Sube la captura de tu reseña",
    localOnly: "La imagen se comprueba en este dispositivo y nunca se sube.",
    choose: "Haz clic o arrastra la captura",
    replace: "Elegir otra",
    analyze: "Comprobar captura",
    analyzing: "Comprobando…",
    success: "Tu código de por vida está listo",
    redeem: "Canjear acceso de por vida",
    retry: "Probar otra captura",
  },
  fr: {
    back: "Accueil MusicPod",
    navLabel: "Avis contre accès à vie",
    title: [
      { before: "Importez une capture de votre avis ", accent: "cinq étoiles", after: ".", tone: "rating" },
      { before: "Obtenez un accès ", accent: "à vie", after: ".", tone: "lifetime" },
    ],
    review: "Noter sur l’App Store",
    uploadTitle: "Importez la capture de votre avis",
    localOnly: "L’image est vérifiée sur cet appareil et n’est jamais envoyée.",
    choose: "Cliquez ou déposez la capture",
    replace: "En choisir une autre",
    analyze: "Vérifier la capture",
    analyzing: "Vérification…",
    success: "Votre code à vie est prêt",
    redeem: "Activer l’accès à vie",
    retry: "Essayer une autre capture",
  },
  de: {
    back: "MusicPod Startseite",
    navLabel: "Bewerten und dauerhaft nutzen",
    title: [
      { before: "Lade einen Screenshot deiner ", accent: "Fünf-Sterne", after: "-Bewertung hoch.", tone: "rating" },
      { before: "Erhalte ", accent: "dauerhaften", after: " Zugang.", tone: "lifetime" },
    ],
    review: "Im App Store bewerten",
    uploadTitle: "Bewertungs-Screenshot hochladen",
    localOnly: "Das Bild wird nur auf diesem Gerät geprüft und nicht hochgeladen.",
    choose: "Klicken oder Screenshot ablegen",
    replace: "Anderen wählen",
    analyze: "Screenshot prüfen",
    analyzing: "Wird geprüft…",
    success: "Dein dauerhafter Zugangscode ist bereit",
    redeem: "Dauerhaften Zugang einlösen",
    retry: "Anderen Screenshot versuchen",
  },
  "pt-br": {
    back: "Início do MusicPod",
    navLabel: "Avalie e ganhe acesso vitalício",
    title: [
      { before: "Envie uma captura da avaliação de ", accent: "cinco estrelas", after: ".", tone: "rating" },
      { before: "Receba acesso ", accent: "vitalício", after: ".", tone: "lifetime" },
    ],
    review: "Avaliar na App Store",
    uploadTitle: "Envie a captura da avaliação",
    localOnly: "A imagem é verificada neste aparelho e nunca é enviada.",
    choose: "Clique ou arraste a captura",
    replace: "Escolher outra",
    analyze: "Verificar captura",
    analyzing: "Verificando…",
    success: "Seu código vitalício está pronto",
    redeem: "Resgatar acesso vitalício",
    retry: "Tentar outra captura",
  },
};

export function getRewardDictionary(locale: Locale): RewardMessages {
  if (locale === "zh-cn") return zhCN;
  if (locale === "zh-tw") return zhTW;
  return { ...en, ...translations[locale] };
}

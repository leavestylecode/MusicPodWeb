import type { Locale } from "./locales";

export type RewardMessages = {
  metaTitle: string;
  metaDescription: string;
  back: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  body: string;
  review: string;
  uploadTitle: string;
  uploadHint: string;
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
  eyebrow: "MusicPod review reward",
  title: "Upload a 5-star review. Get lifetime access.",
  body: "Your screenshot must show MusicPod and five selected stars.",
  review: "Review on the App Store",
  uploadTitle: "Upload a 5-star review screenshot",
  uploadHint: "The screenshot must show MusicPod and five selected stars.",
  localOnly: "Checked on this device. The image is never uploaded.",
  choose: "Upload screenshot",
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
  eyebrow: "MusicPod 好评回馈",
  title: "上传五星好评截图，领取终身会员",
  body: "截图需包含 MusicPod 名称和已点亮的五颗星。",
  review: "前往 App Store 评价",
  uploadTitle: "上传五星好评截图",
  uploadHint: "截图需包含 MusicPod 名称和已点亮的五颗星。",
  localOnly: "图片仅在本机识别，不会上传。",
  choose: "上传好评截图",
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
  eyebrow: "MusicPod 好評回饋",
  title: "上傳五星好評截圖，領取終身會員",
  body: "截圖需包含 MusicPod 名稱和已點亮的五顆星。",
  review: "前往 App Store 評價",
  uploadTitle: "上傳五星好評截圖",
  uploadHint: "截圖需包含 MusicPod 名稱和已點亮的五顆星。",
  localOnly: "圖片僅在本機辨識，不會上傳。",
  choose: "上傳好評截圖",
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
    eyebrow: "MusicPod からのお礼",
    title: "星5つで、永久アクセス。",
    body: "App Store で MusicPod を星5つで評価し、スクリーンショットをアップロードしてください。",
    review: "App Store でレビュー",
    uploadTitle: "レビュー画面をアップロード",
    uploadHint: "MusicPod の名前と選択された5つの星が見える画面を選んでください。",
    localOnly: "画像はこのデバイス内だけで確認され、アップロードされません。",
    choose: "画像を選ぶ",
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
    eyebrow: "MusicPod 감사 혜택",
    title: "별 다섯 개, 평생 이용.",
    body: "App Store에서 MusicPod에 별 다섯 개 리뷰를 남기고 스크린샷을 올려 주세요.",
    review: "App Store에서 리뷰하기",
    uploadTitle: "리뷰 스크린샷 업로드",
    localOnly: "이미지는 이 기기에서만 확인되며 업로드되지 않습니다.",
    choose: "스크린샷 선택",
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
    eyebrow: "Un agradecimiento de MusicPod",
    title: "Cinco estrellas. Acceso de por vida.",
    body: "Deja una reseña de cinco estrellas en App Store y sube una captura para recibir tu código.",
    review: "Valorar en App Store",
    uploadTitle: "Sube la captura de tu reseña",
    localOnly: "La imagen se comprueba en este dispositivo y nunca se sube.",
    choose: "Elegir captura",
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
    eyebrow: "Un merci de MusicPod",
    title: "Cinq étoiles. Accès à vie.",
    body: "Laissez un avis cinq étoiles sur l’App Store, puis importez une capture pour recevoir votre code.",
    review: "Noter sur l’App Store",
    uploadTitle: "Importez la capture de votre avis",
    localOnly: "L’image est vérifiée sur cet appareil et n’est jamais envoyée.",
    choose: "Choisir une capture",
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
    eyebrow: "Ein Dankeschön von MusicPod",
    title: "Fünf Sterne. Dauerhafter Zugang.",
    body: "Bewerte MusicPod im App Store mit fünf Sternen und lade einen Screenshot hoch.",
    review: "Im App Store bewerten",
    uploadTitle: "Bewertungs-Screenshot hochladen",
    localOnly: "Das Bild wird nur auf diesem Gerät geprüft und nicht hochgeladen.",
    choose: "Screenshot wählen",
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
    eyebrow: "Um agradecimento do MusicPod",
    title: "Cinco estrelas. Acesso vitalício.",
    body: "Avalie o MusicPod com cinco estrelas na App Store e envie uma captura para receber seu código.",
    review: "Avaliar na App Store",
    uploadTitle: "Envie a captura da avaliação",
    localOnly: "A imagem é verificada neste aparelho e nunca é enviada.",
    choose: "Escolher captura",
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

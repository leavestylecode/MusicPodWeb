import type { Locale } from "./locales";

type ProductCopy = {
  title: [string, string];
  intro: string;
  cover: [string, string];
  listen: [string, string];
  style: [string, string];
  libraryTitle: string;
  localMusic: string;
  localBody: string;
  appleBody: string;
  photoTitle: string;
  heroAlt: string;
  vinylAlt: string;
  photoAlt: string;
  requirement: string;
};

// Headlines follow the approved App Store campaign. These images are campaign
// studies, so neither alt text nor captions describe them as live app captures.
const productCopy: Record<Locale, ProductCopy> = {
  en: {
    title: ["Your music", "In your hands"],
    intro: "An iPod-style player for iPhone. Apple Music and local music, together.",
    cover: ["Your albums", "In full flow"],
    listen: ["A new spin", "On your music"],
    style: ["Your style", "Your way"],
    libraryTitle: "All your music. Right at home.",
    localMusic: "Local music",
    localBody: "Import your audio. Listen without an Apple Music subscription.",
    appleBody: "Play your music library and Apple Music.",
    photoTitle: "Your photo. Your background.",
    heroAlt: "MusicPod campaign: hands using a white iPhone player with a black click wheel",
    vinylAlt: "MusicPod product visualization with a vinyl record and coral click wheel",
    photoAlt: "MusicPod photo background customization preview",
    requirement: "iOS 17 or later · Free to download",
  },
  "zh-cn": {
    title: ["让音乐", "回到手中"],
    intro: "iPhone 上的 iPod 风格播放器，支持 Apple Music 与本地音乐。",
    cover: ["翻阅专辑", "像翻唱片"],
    listen: ["换个视角", "沉浸聆听"],
    style: ["你的风格", "由你定义"],
    libraryTitle: "你的音乐，都有位置",
    localMusic: "本地音乐",
    localBody: "导入音频，无需 Apple Music 订阅。",
    appleBody: "播放你的音乐资料库与 Apple Music。",
    photoTitle: "用照片做背景",
    heroAlt: "MusicPod 品牌主视觉：双手操作白色机身与黑色转盘的 iPhone 音乐播放器",
    vinylAlt: "MusicPod 黑胶播放视觉示意，搭配珊瑚色转盘",
    photoAlt: "MusicPod 照片背景个性化预览",
    requirement: "iOS 17 及以上 · 免费下载",
  },
  "zh-tw": {
    title: ["讓音樂", "回到手中"],
    intro: "iPhone 上的 iPod 風格播放器，支援 Apple Music 與本機音樂。",
    cover: ["翻閱專輯", "像翻唱片"],
    listen: ["換個視角", "沉浸聆聽"],
    style: ["你的風格", "由你定義"],
    libraryTitle: "你的音樂，都有位置",
    localMusic: "本機音樂",
    localBody: "匯入音訊，無需 Apple Music 訂閱。",
    appleBody: "播放你的音樂資料庫與 Apple Music。",
    photoTitle: "用照片做背景",
    heroAlt: "MusicPod 品牌主視覺：雙手操作白色機身與黑色轉盤的 iPhone 音樂播放器",
    vinylAlt: "MusicPod 黑膠播放視覺示意，搭配珊瑚色轉盤",
    photoAlt: "MusicPod 照片背景個人化預覽",
    requirement: "iOS 17 及以上 · 免費下載",
  },
  ja: {
    title: ["音楽を", "その手に"],
    intro: "iPhoneで使えるiPodスタイルのプレーヤー。Apple Musicもローカル音楽も。",
    cover: ["アルバムを", "めくるように"],
    listen: ["レコード気分で", "音楽に浸る"],
    style: ["あなたらしく", "自由に彩る"],
    libraryTitle: "あなたの音楽を、ひとつの場所に。",
    localMusic: "ローカル音楽",
    localBody: "音声ファイルを読み込んで再生。Apple Musicの契約は不要です。",
    appleBody: "音楽ライブラリも、Apple Musicも。",
    photoTitle: "好きな写真を背景に。",
    heroAlt: "白い本体と黒いホイールを手で操作するMusicPodの製品イメージ",
    vinylAlt: "レコードとコーラル色のホイールを使ったMusicPodの製品イメージ",
    photoAlt: "MusicPodの写真背景カスタマイズのプレビュー",
    requirement: "iOS 17以降 · 無料ダウンロード",
  },
  ko: {
    title: ["음악을 다시", "내 손안에"],
    intro: "iPhone을 위한 iPod 스타일 플레이어. Apple Music과 로컬 음악을 함께.",
    cover: ["앨범을", "넘기는 즐거움"],
    listen: ["새로운 시선으로", "음악에 몰입"],
    style: ["나만의 스타일", "내 마음대로"],
    libraryTitle: "내 음악이 모두 모이는 곳.",
    localMusic: "로컬 음악",
    localBody: "오디오를 가져와 재생하세요. Apple Music 구독은 필요하지 않습니다.",
    appleBody: "내 음악 보관함과 Apple Music을 재생하세요.",
    photoTitle: "내 사진을 배경으로.",
    heroAlt: "흰색 본체와 검은색 클릭 휠을 손으로 조작하는 MusicPod 제품 이미지",
    vinylAlt: "레코드와 코랄색 클릭 휠을 보여 주는 MusicPod 제품 이미지",
    photoAlt: "MusicPod 사진 배경 맞춤 설정 미리보기",
    requirement: "iOS 17 이상 · 무료 다운로드",
  },
  es: {
    title: ["Tu música", "En tus manos"],
    intro: "Un reproductor estilo iPod para iPhone, con Apple Music y música local.",
    cover: ["Tus álbumes", "Para explorar"],
    listen: ["Otra mirada", "A tu música"],
    style: ["Tu estilo", "Tus colores"],
    libraryTitle: "Toda tu música tiene su lugar.",
    localMusic: "Música local",
    localBody: "Importa tu audio. Escucha sin suscripción a Apple Music.",
    appleBody: "Reproduce tu biblioteca y Apple Music.",
    photoTitle: "Tu foto. Tu fondo.",
    heroAlt: "Imagen de MusicPod con manos usando un reproductor blanco con rueda negra en iPhone",
    vinylAlt: "Visualización de MusicPod con un disco de vinilo y una rueda coral",
    photoAlt: "Vista previa del fondo fotográfico de MusicPod",
    requirement: "iOS 17 o posterior · Descarga gratuita",
  },
  fr: {
    title: ["Votre musique", "À portée de main"],
    intro: "Un lecteur façon iPod pour iPhone, avec Apple Music et votre musique locale.",
    cover: ["Vos albums", "À feuilleter"],
    listen: ["Un autre regard", "Sur la musique"],
    style: ["Votre style", "Vos couleurs"],
    libraryTitle: "Toute votre musique a sa place.",
    localMusic: "Musique locale",
    localBody: "Importez vos fichiers audio, sans abonnement à Apple Music.",
    appleBody: "Écoutez votre bibliothèque et Apple Music.",
    photoTitle: "Votre photo en fond.",
    heroAlt: "Visuel MusicPod montrant des mains utilisant un lecteur blanc à molette noire sur iPhone",
    vinylAlt: "Visualisation MusicPod avec disque vinyle et molette corail",
    photoAlt: "Aperçu du fond photo personnalisé de MusicPod",
    requirement: "iOS 17 ou ultérieur · Téléchargement gratuit",
  },
  de: {
    title: ["Deine Musik", "In deiner Hand"],
    intro: "Ein Player im iPod-Stil fürs iPhone. Für Apple Music und lokale Musik.",
    cover: ["Deine Alben", "In Bewegung"],
    listen: ["Musik erleben", "Aus neuer Sicht"],
    style: ["Dein Stil", "Deine Farben"],
    libraryTitle: "Deine ganze Musik hat ein Zuhause.",
    localMusic: "Lokale Musik",
    localBody: "Importiere eigene Audiodateien. Ohne Apple Music Abo.",
    appleBody: "Spiele deine Mediathek und Apple Music ab.",
    photoTitle: "Dein Foto als Hintergrund.",
    heroAlt: "MusicPod Produktmotiv mit Händen an einem weißen iPhone Player mit schwarzem Click Wheel",
    vinylAlt: "MusicPod Visualisierung mit Schallplatte und korallfarbenem Click Wheel",
    photoAlt: "Vorschau des eigenen Fotohintergrunds in MusicPod",
    requirement: "Ab iOS 17 · Kostenloser Download",
  },
  "pt-br": {
    title: ["Sua música", "Nas suas mãos"],
    intro: "Um player estilo iPod para iPhone, com Apple Music e música local.",
    cover: ["Seus álbuns", "Para explorar"],
    listen: ["Um novo olhar", "Para sua música"],
    style: ["Seu estilo", "Suas cores"],
    libraryTitle: "Toda a sua música tem um lugar.",
    localMusic: "Música local",
    localBody: "Importe seu áudio. Ouça sem assinatura do Apple Music.",
    appleBody: "Reproduza sua biblioteca e o Apple Music.",
    photoTitle: "Sua foto. Seu fundo.",
    heroAlt: "Imagem do MusicPod com mãos usando um player branco com click wheel preta no iPhone",
    vinylAlt: "Visualização do MusicPod com disco de vinil e click wheel coral",
    photoAlt: "Prévia do fundo de foto personalizado no MusicPod",
    requirement: "iOS 17 ou posterior · Download gratuito",
  },
};

export function getProductCopy(locale: Locale) {
  return productCopy[locale];
}

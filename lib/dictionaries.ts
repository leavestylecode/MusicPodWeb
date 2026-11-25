import type { Locale } from "./locales";

export type Messages = {
  meta: { title: string; description: string; social: string };
  skip: string;
  nav: { home: string; label: string; language: string };
  theme: { label: string; system: string; light: string; dark: string };
  hero: { primaryKicker: string; primary: string };
  wheel: { kicker: string; title: string; body: string };
  highlights: {
    coverFlow: { kicker: string; body: string };
    nowPlaying: { kicker: string; body: string };
  };
  personalize: { title: string; body: string; palette: string };
  faq: {
    kicker: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  availability: { title: string; badgeKicker: string; badge: string };
  footer: { rights: string; privacy: string; developer: string };
};

const en: Messages = {
  meta: {
    title: "MusicPod — Retro iPod Music Player for iPhone",
    description: "An iPod-style music player for iPhone with a click wheel, Cover Flow, Apple Music, Spotify, and imported audio. Free to download with optional in-app purchases.",
    social: "A classic click wheel for Apple Music, local files, and Spotify.",
  },
  skip: "Skip to content",
  nav: { home: "MusicPod home", label: "Primary navigation", language: "Language" },
  theme: { label: "Appearance", system: "System", light: "Light", dark: "Dark" },
  hero: { primaryKicker: "Download on the", primary: "App Store" },
  wheel: { kicker: "Click wheel", title: "The click wheel and player", body: "Turn to browse. Press to choose." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "Turn through albums. Flip one over to see the track list." },
    nowPlaying: { kicker: "Now playing", body: "Full-screen artwork with an animated waveform." },
  },
  personalize: {
    title: "Player appearance",
    body: "Choose colors for the case and wheel, change the icons, or use a photo as the background.",
    palette: "Choose a color",
  },
  faq: {
    kicker: "FAQ",
    items: [
      { question: "Is MusicPod free?", answer: "Free to download, with optional in-app purchases." },
      { question: "Does MusicPod need an account?", answer: "No MusicPod account is needed. Connecting to Spotify requires a Spotify account." },
      { question: "Which local audio formats are supported?", answer: "Supports MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC, and CAF files, plus synced lyrics from LRC files. Protected downloads and encrypted formats (NCM, QMC, KGM) are not supported." },
      { question: "Which iPhones are supported?", answer: "MusicPod runs on iPhone with iOS 17 or later, with no ads or third-party tracking." },
    ],
  },
  availability: { title: "Download MusicPod.", badgeKicker: "Download on the", badge: "App Store" },
  footer: { rights: "All rights reserved.", privacy: "Privacy Policy", developer: "An independent product by" },
};

const zhCN: Messages = {
  meta: {
    title: "MusicPod — iPhone 上的复古 iPod 音乐播放器",
    description: "iPhone 上的 iPod 风格音乐播放器，支持经典转盘、Cover Flow、Apple Music、Spotify 和本地音频。可免费下载，提供可选内购。",
    social: "用经典转盘听 Apple Music、Spotify 和本地音乐。",
  },
  skip: "跳到主要内容",
  nav: { home: "MusicPod 首页", label: "主导航", language: "语言" },
  theme: { label: "外观", system: "跟随系统", light: "浅色", dark: "深色" },
  hero: { primaryKicker: "下载自", primary: "App Store" },
  wheel: { kicker: "点按式转盘", title: "转盘与播放", body: "转动浏览，点按选择。" },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "转动浏览专辑，翻面查看曲目" },
    nowPlaying: { kicker: "正在播放", body: "全屏封面与动态波形。" },
  },
  personalize: {
    title: "播放器外观",
    body: "自选机身和转盘配色，更换图标，也能用照片作背景。",
    palette: "选择配色",
  },
  faq: {
    kicker: "常见问题",
    items: [
      { question: "MusicPod 是免费的吗？", answer: "可免费下载，部分功能需内购。" },
      { question: "需要注册账号吗？", answer: "无需注册 MusicPod 账号。连接 Spotify 时需使用 Spotify 账号。" },
      { question: "支持哪些本地音频格式？", answer: "支持 MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC 与 CAF 文件，以及 LRC 同步歌词。不支持受保护的下载内容和 NCM、QMC、KGM 等加密格式。" },
      { question: "支持哪些 iPhone 和系统版本？", answer: "支持运行 iOS 17 及以上版本的 iPhone，无广告，无第三方追踪。" },
    ],
  },
  availability: { title: "下载 MusicPod", badgeKicker: "下载自", badge: "App Store" },
  footer: { rights: "保留所有权利。", privacy: "隐私政策", developer: "独立开发者作品 ·" },
};

const zhTW: Messages = {
  meta: {
    title: "MusicPod — iPhone 上的復古 iPod 音樂播放器",
    description: "iPhone 上的 iPod 風格音樂播放器，支援經典轉盤、Cover Flow、Apple Music、Spotify 和本機音訊。可免費下載，提供選購項目。",
    social: "用經典轉盤聽 Apple Music、Spotify 和本機音樂。",
  },
  skip: "跳到主要內容",
  nav: { home: "MusicPod 首頁", label: "主要導覽", language: "語言" },
  theme: { label: "外觀", system: "跟隨系統", light: "淺色", dark: "深色" },
  hero: { primaryKicker: "下載自", primary: "App Store" },
  wheel: { kicker: "點按式轉盤", title: "轉盤與播放", body: "轉動瀏覽，點按選擇。" },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "轉動瀏覽專輯，翻面查看曲目" },
    nowPlaying: { kicker: "播放中", body: "全螢幕封面與動態波形。" },
  },
  personalize: {
    title: "播放器外觀",
    body: "自選機身和轉盤配色、更換圖示，也能用照片當背景。",
    palette: "選擇配色",
  },
  faq: {
    kicker: "常見問題",
    items: [
      { question: "MusicPod 是免費的嗎？", answer: "可免費下載，部分功能需 App 內購買。" },
      { question: "需要註冊帳號嗎？", answer: "無需註冊 MusicPod 帳號。連接 Spotify 時需使用 Spotify 帳號。" },
      { question: "支援哪些本機音訊格式？", answer: "支援 MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC 與 CAF 檔案，以及 LRC 同步歌詞。不支援受保護的下載內容與 NCM、QMC、KGM 等加密格式。" },
      { question: "支援哪些 iPhone 與系統版本？", answer: "支援執行 iOS 17 及以上版本的 iPhone，無廣告，無第三方追蹤。" },
    ],
  },
  availability: { title: "下載 MusicPod", badgeKicker: "下載自", badge: "App Store" },
  footer: { rights: "保留所有權利。", privacy: "隱私權政策", developer: "獨立開發者作品 ·" },
};

const ja: Messages = {
  meta: {
    title: "MusicPod — iPhoneで使えるレトロなiPod風音楽プレーヤー",
    description: "クリックホイールとCover FlowをiPhoneで。Apple Music、ローカル音楽、Spotifyに対応するiPodスタイルのプレーヤー。無料ダウンロード、アプリ内課金あり。",
    social: "懐かしいクリックホイールでApple Music、Spotify、ローカル音楽を楽しめます。",
  },
  skip: "メインコンテンツへ移動",
  nav: { home: "MusicPod ホーム", label: "メインナビゲーション", language: "言語" },
  theme: { label: "外観", system: "システム", light: "ライト", dark: "ダーク" },
  hero: { primaryKicker: "App Storeからダウンロード", primary: "App Store" },
  wheel: { kicker: "クリックホイール", title: "ホイールと再生画面", body: "回して探す。押して選ぶ。" },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "回してアルバムを選び、裏返して曲目を表示。" },
    nowPlaying: { kicker: "再生中", body: "画面いっぱいのジャケットと動く波形。" },
  },
  personalize: {
    title: "プレーヤーの外観",
    body: "本体やホイールの色、アイコンを変更できます。背景には自分の写真も使えます。",
    palette: "カラーを選ぶ",
  },
  faq: {
    kicker: "よくある質問",
    items: [
      { question: "MusicPodは無料ですか？", answer: "無料でダウンロードできます。一部機能はアプリ内購入が必要です。" },
      { question: "アカウント登録は必要ですか？", answer: "MusicPodのアカウント登録は不要です。Spotifyの連携にはSpotifyアカウントが必要です。" },
      { question: "対応しているローカル音声形式は？", answer: "MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC、CAF と LRC 同期歌詞に対応しています。保護されたダウンロードや NCM・QMC・KGM などの暗号化形式には対応していません。" },
      { question: "対応するiPhoneとiOSバージョンは？", answer: "iOS 17 以降を搭載した iPhone に対応しています。広告や第三者トラッキングはありません。" },
    ],
  },
  availability: { title: "MusicPodをダウンロード。", badgeKicker: "App Storeからダウンロード", badge: "App Store" },
  footer: { rights: "All rights reserved.", privacy: "プライバシーポリシー", developer: "インディー開発 ·" },
};

const ko: Messages = {
  meta: {
    title: "MusicPod — iPhone용 레트로 iPod 스타일 음악 플레이어",
    description: "iPhone용 iPod 스타일 음악 플레이어. 클릭 휠과 Cover Flow로 Apple Music, 로컬 음악, Spotify를 즐기세요. 무료 다운로드, 선택적 앱 내 구입 제공.",
    social: "클래식 클릭 휠로 Apple Music, Spotify, 로컬 음악을 즐기세요.",
  },
  skip: "본문으로 건너뛰기",
  nav: { home: "MusicPod 홈", label: "주요 탐색", language: "언어" },
  theme: { label: "화면 모드", system: "시스템", light: "라이트", dark: "다크" },
  hero: { primaryKicker: "App Store에서 다운로드", primary: "App Store" },
  wheel: { kicker: "클릭 휠", title: "클릭 휠과 재생 화면", body: "돌려서 탐색하고 눌러서 선택하세요." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "돌려서 앨범을 찾고 뒤집어 트랙을 확인하세요." },
    nowPlaying: { kicker: "지금 재생 중", body: "전체 화면 앨범 커버와 움직이는 파형." },
  },
  personalize: {
    title: "플레이어 디자인",
    body: "본체와 휠 색상, 아이콘을 바꾸거나 내 사진을 배경으로 쓸 수 있습니다.",
    palette: "색상 선택",
  },
  faq: {
    kicker: "자주 묻는 질문",
    items: [
      { question: "MusicPod는 무료인가요?", answer: "무료로 다운로드할 수 있으며 일부 기능은 앱 내 구입이 필요합니다." },
      { question: "계정 등록이 필요한가요?", answer: "MusicPod 계정은 필요하지 않습니다. Spotify를 연결하려면 Spotify 계정이 필요합니다." },
      { question: "어떤 로컬 오디오 형식을 지원하나요?", answer: "MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC, CAF 파일과 LRC 동기화 가사를 지원합니다. 보호된 다운로드 및 NCM, QMC, KGM 같은 암호화 형식은 지원하지 않습니다." },
      { question: "어떤 iPhone과 iOS 버전을 지원하나요?", answer: "iOS 17 이상이 설치된 iPhone에서 사용할 수 있으며 광고나 타사 추적이 없습니다." },
    ],
  },
  availability: { title: "MusicPod 다운로드.", badgeKicker: "App Store에서 다운로드", badge: "App Store" },
  footer: { rights: "All rights reserved.", privacy: "개인정보 처리방침", developer: "인디 개발 ·" },
};

const es: Messages = {
  meta: {
    title: "MusicPod — Reproductor de música estilo iPod para iPhone",
    description: "Reproductor estilo iPod para iPhone con rueda de clic, Cover Flow, Apple Music, Spotify y audio local. Descarga gratuita con compras opcionales.",
    social: "La rueda de clic clásica para Apple Music, tus archivos y Spotify.",
  },
  skip: "Saltar al contenido",
  nav: { home: "Inicio de MusicPod", label: "Navegación principal", language: "Idioma" },
  theme: { label: "Apariencia", system: "Sistema", light: "Claro", dark: "Oscuro" },
  hero: { primaryKicker: "Descárgalo en", primary: "App Store" },
  wheel: { kicker: "Rueda de clic", title: "La rueda y el reproductor", body: "Gira para explorar. Pulsa para elegir." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "Gira entre álbumes y voltea uno para ver sus canciones." },
    nowPlaying: { kicker: "En reproducción", body: "Portada a pantalla completa con una onda animada." },
  },
  personalize: {
    title: "Aspecto del reproductor",
    body: "Elige los colores de la carcasa y la rueda, cambia los iconos o usa una foto como fondo.",
    palette: "Elige un color",
  },
  faq: {
    kicker: "Preguntas frecuentes",
    items: [
      { question: "¿MusicPod es gratis?", answer: "Descarga gratuita con compras opcionales dentro de la app." },
      { question: "¿Necesito crear una cuenta?", answer: "No necesitas una cuenta de MusicPod. Para conectar Spotify, necesitas una cuenta de Spotify." },
      { question: "¿Qué formatos de audio local admite?", answer: "Admite archivos MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC y CAF, además de letras sincronizadas LRC. No admite descargas protegidas ni formatos cifrados (NCM, QMC, KGM)." },
      { question: "¿Con qué modelos de iPhone es compatible?", answer: "Funciona en iPhone con iOS 17 o posterior, sin anuncios ni seguimiento de terceros." },
    ],
  },
  availability: { title: "Descarga MusicPod.", badgeKicker: "Descárgalo en", badge: "App Store" },
  footer: { rights: "Todos los derechos reservados.", privacy: "Política de privacidad", developer: "Un producto independiente de" },
};

const fr: Messages = {
  meta: {
    title: "MusicPod — Lecteur de musique rétro façon iPod pour iPhone",
    description: "Lecteur façon iPod pour iPhone avec molette, Cover Flow, Apple Music, Spotify et fichiers locaux. Téléchargement gratuit avec achats intégrés facultatifs.",
    social: "La molette classique pour Apple Music, vos fichiers locaux et Spotify.",
  },
  skip: "Aller au contenu",
  nav: { home: "Accueil MusicPod", label: "Navigation principale", language: "Langue" },
  theme: { label: "Apparence", system: "Système", light: "Clair", dark: "Sombre" },
  hero: { primaryKicker: "Télécharger dans", primary: "App Store" },
  wheel: { kicker: "Molette cliquable", title: "La molette et la lecture", body: "Tournez pour explorer. Cliquez pour choisir." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "Parcourez les albums, puis retournez-en un pour afficher les titres." },
    nowPlaying: { kicker: "À l’écoute", body: "Pochette en plein écran et forme d’onde animée." },
  },
  personalize: {
    title: "Apparence du lecteur",
    body: "Choisissez la couleur du boîtier et de la molette, changez les icônes ou utilisez une photo comme fond.",
    palette: "Choisir une couleur",
  },
  faq: {
    kicker: "Questions fréquentes",
    items: [
      { question: "MusicPod est-il gratuit ?", answer: "Téléchargement gratuit avec achats intégrés facultatifs." },
      { question: "Dois-je créer un compte ?", answer: "Aucun compte MusicPod n’est nécessaire. Pour connecter Spotify, il vous faut un compte Spotify." },
      { question: "Quels formats audio locaux sont pris en charge ?", answer: "Compatible avec les fichiers MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC et CAF, ainsi que les paroles synchronisées LRC. Les téléchargements protégés et formats chiffrés (NCM, QMC, KGM) ne sont pas pris en charge." },
      { question: "Quels iPhone sont pris en charge ?", answer: "MusicPod fonctionne sur iPhone sous iOS 17 ou version ultérieure, sans publicité ni suivi tiers." },
    ],
  },
  availability: { title: "Téléchargez MusicPod.", badgeKicker: "Télécharger dans", badge: "App Store" },
  footer: { rights: "Tous droits réservés.", privacy: "Politique de confidentialité", developer: "Un produit indépendant par" },
};

const de: Messages = {
  meta: {
    title: "MusicPod — Retro-Musikplayer im iPod-Stil fürs iPhone",
    description: "Musikplayer im iPod-Stil fürs iPhone mit Click Wheel, Cover Flow, Apple Music, Spotify und lokalen Dateien. Kostenloser Download mit optionalen In-App-Käufen.",
    social: "Das klassische Click Wheel für Apple Music, lokale Dateien und Spotify.",
  },
  skip: "Zum Inhalt springen",
  nav: { home: "MusicPod Startseite", label: "Hauptnavigation", language: "Sprache" },
  theme: { label: "Darstellung", system: "System", light: "Hell", dark: "Dunkel" },
  hero: { primaryKicker: "Laden im", primary: "App Store" },
  wheel: { kicker: "Click Wheel", title: "Click Wheel und Wiedergabe", body: "Drehen zum Stöbern. Drücken zum Auswählen." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "Durch Alben drehen und umklappen, um die Titelliste zu sehen." },
    nowPlaying: { kicker: "Aktuelle Wiedergabe", body: "Albencover im Vollbild mit animierter Wellenform." },
  },
  personalize: {
    title: "Player-Design",
    body: "Wähle Farben für Gehäuse und Click Wheel, ändere die Symbole oder nutze ein Foto als Hintergrund.",
    palette: "Farbe wählen",
  },
  faq: {
    kicker: "Häufige Fragen",
    items: [
      { question: "Ist MusicPod kostenlos?", answer: "Kostenloser Download mit optionalen In-App-Käufen." },
      { question: "Brauche ich ein Konto?", answer: "Du brauchst kein MusicPod-Konto. Um Spotify zu verbinden, brauchst du ein Spotify-Konto." },
      { question: "Welche lokalen Audioformate werden unterstützt?", answer: "Unterstützt MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC und CAF sowie synchronisierte LRC-Liedtexte. Geschützte Downloads und verschlüsselte Formate (NCM, QMC, KGM) werden nicht unterstützt." },
      { question: "Welche iPhones werden unterstützt?", answer: "MusicPod läuft auf dem iPhone ab iOS 17 – ohne Werbung und ohne Tracking von Drittanbietern." },
    ],
  },
  availability: { title: "MusicPod laden.", badgeKicker: "Laden im", badge: "App Store" },
  footer: { rights: "Alle Rechte vorbehalten.", privacy: "Datenschutzerklärung", developer: "Ein unabhängiges Produkt von" },
};

const ptBR: Messages = {
  meta: {
    title: "MusicPod — Player de música retrô estilo iPod para iPhone",
    description: "Player estilo iPod para iPhone com click wheel, Cover Flow, Apple Music, Spotify e arquivos locais. Download gratuito com compras opcionais.",
    social: "A click wheel clássica para Apple Music, arquivos locais e Spotify.",
  },
  skip: "Pular para o conteúdo",
  nav: { home: "Início do MusicPod", label: "Navegação principal", language: "Idioma" },
  theme: { label: "Aparência", system: "Sistema", light: "Claro", dark: "Escuro" },
  hero: { primaryKicker: "Baixe na", primary: "App Store" },
  wheel: { kicker: "Click wheel", title: "Roda e reprodução", body: "Gire para explorar. Clique para escolher." },
  highlights: {
    coverFlow: { kicker: "Cover Flow", body: "Gire pelos álbuns e vire um deles para ver as faixas." },
    nowPlaying: { kicker: "Reproduzindo", body: "Capa em tela cheia com forma de onda animada." },
  },
  personalize: {
    title: "Visual do player",
    body: "Escolha as cores do corpo e da roda, troque os ícones ou use uma foto como fundo.",
    palette: "Escolha uma cor",
  },
  faq: {
    kicker: "Perguntas frequentes",
    items: [
      { question: "O MusicPod é gratuito?", answer: "Download gratuito com compras opcionais no app." },
      { question: "Preciso criar uma conta?", answer: "Não é preciso ter uma conta no MusicPod. Para conectar o Spotify, você precisa de uma conta do Spotify." },
      { question: "Quais formatos de áudio local são compatíveis?", answer: "Compatível com arquivos MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC e CAF, além de letras sincronizadas em LRC. Downloads protegidos e formatos criptografados (NCM, QMC, KGM) não são compatíveis." },
      { question: "Quais modelos de iPhone são compatíveis?", answer: "O MusicPod funciona no iPhone com iOS 17 ou posterior, sem anúncios nem rastreamento de terceiros." },
    ],
  },
  availability: { title: "Baixe o MusicPod.", badgeKicker: "Baixe na", badge: "App Store" },
  footer: { rights: "Todos os direitos reservados.", privacy: "Política de Privacidade", developer: "Um produto independente de" },
};

export const dictionaries: Record<Locale, Messages> = {
  en,
  "zh-cn": zhCN,
  "zh-tw": zhTW,
  ja,
  ko,
  es,
  fr,
  de,
  "pt-br": ptBR,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

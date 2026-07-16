import type { Locale } from "./locales";

export type Messages = {
  meta: { title: string; description: string; social: string };
  skip: string;
  nav: {
    home: string;
    label: string;
    experience: string;
    highlights: string;
    personalize: string;
    language: string;
    soon: string;
  };
  hero: {
    kicker: string;
    title: [string, string];
    body: string;
    primaryKicker: string;
    primary: string;
    secondary: string;
    badges: [string, string, string];
    productLabel: string;
    screenshotAlt: string;
    actual: string;
    native: string;
  };
  mantra: { label: string; eyebrow: string; words: [string, string, string] };
  wheel: {
    kicker: string;
    title: string;
    body: string;
    try: string;
    help: string;
    group: string;
    menu: string;
    previous: string;
    next: string;
    play: string;
    select: string;
    selected: string;
    playing: string;
    items: [string, string, string, string, string];
  };
  highlights: {
    kicker: string;
    title: string;
    library: { kicker: string; title: string; body: string; items: [string, string, string, string] };
    coverFlow: { kicker: string; title: string; body: string };
    nowPlaying: { kicker: string; title: string; body: string; track: string; artist: string };
  };
  personalize: {
    kicker: string;
    title: string;
    body: string;
    palette: string;
    combinations: string;
    presets: string[];
    stats: [{ value: string; label: string }, { value: string; label: string }, { value: string; label: string }];
  };
  native: {
    kicker: string;
    title: string;
    body: string;
    technologies: [string, string, string, string];
  };
  availability: {
    kicker: string;
    title: string;
    body: string;
    badgeKicker: string;
    badge: string;
    requirement: string;
  };
  footer: { rights: string };
};

const en: Messages = {
  meta: {
    title: "MusicPod — Your music. Your iPod.",
    description: "A tactile music player for iPhone, built around the click wheel and your Apple Music library.",
    social: "Turn, click, and listen. An iPod reimagined for the Apple Music era.",
  },
  skip: "Skip to content",
  nav: { home: "MusicPod home", label: "Primary navigation", experience: "Experience", highlights: "Highlights", personalize: "Personalize", language: "Language", soon: "Coming soon" },
  hero: {
    kicker: "Designed for Apple Music",
    title: ["Your music.", "Your iPod."],
    body: "A tactile music player for iPhone, built around the click wheel and your Apple Music library.",
    primaryKicker: "Coming soon on the",
    primary: "App Store",
    secondary: "Explore MusicPod",
    badges: ["Made for iPhone", "Apple Music", "iOS 17+"],
    productLabel: "MusicPod actual app interface",
    screenshotAlt: "MusicPod home screen with Favorite Songs, a mini player, and a red click wheel",
    actual: "Actual interface",
    native: "Native SwiftUI",
  },
  mantra: { label: "MusicPod in three gestures", eyebrow: "A familiar gesture, made new.", words: ["Click.", "Turn.", "Listen."] },
  wheel: {
    kicker: "Click wheel",
    title: "The click wheel is back.",
    body: "Turn to browse. Press to choose. Every step responds with native haptics.",
    try: "Try the wheel",
    help: "Slide around the wheel or use the arrow keys",
    group: "Interactive MusicPod click wheel",
    menu: "Return to the first item",
    previous: "Previous item",
    next: "Next item",
    play: "Play selected item",
    select: "Select {item}",
    selected: "Selected: {item}",
    playing: "Playing: {item}",
    items: ["Favorite Songs", "Playlists", "Albums", "Shuffle", "Theme"],
  },
  highlights: {
    kicker: "The essentials",
    title: "Everything music needs. Nothing it doesn’t.",
    library: {
      kicker: "Apple Music library",
      title: "Your library, one turn away.",
      body: "Favorites, playlists, albums, and shuffle—right where your thumb expects them.",
      items: ["Favorites", "Playlists", "Albums", "Shuffle"],
    },
    coverFlow: { kicker: "Cover Flow", title: "Artwork takes center stage.", body: "Turn through albums. Flip one over to see the track list." },
    nowPlaying: { kicker: "Now playing", title: "Give every song the full screen.", body: "Artwork, time, and controls—without the noise.", track: "Midnight Memory", artist: "MusicPod Sessions" },
  },
  personalize: {
    kicker: "Make it yours",
    title: "One player. Entirely yours.",
    body: "Choose the body, wheel, display, backdrop, direction, and glow.",
    palette: "Available color palette",
    combinations: "Classic color combinations",
    presets: ["MusicPod Original", "Classic Silver", "Classic Black", "Classic White", "Red Edition", "nano Orange", "nano Yellow", "mini Green", "nano Teal", "nano Blue", "nano Purple", "nano Pink"],
    stats: [{ value: "12", label: "body and wheel colors" }, { value: "9", label: "backdrop themes" }, { value: "2", label: "icon languages" }],
  },
  native: {
    kicker: "Native by design",
    title: "Nostalgic in form. Native at heart.",
    body: "Built with Apple frameworks for smooth playback, precise haptics, and accessible navigation.",
    technologies: ["SwiftUI", "MusicKit", "Haptics", "VoiceOver"],
  },
  availability: {
    kicker: "Worldwide release",
    title: "Coming to App Store.",
    body: "MusicPod is in final preparation for its worldwide release.",
    badgeKicker: "Coming soon on the",
    badge: "App Store",
    requirement: "Compatible with iOS 17 or later · Apple Music subscription required.",
  },
  footer: { rights: "All rights reserved." },
};

const zhCN: Messages = {
  meta: { title: "MusicPod — 你的音乐，你的 iPod", description: "一款为 iPhone 打造的触感音乐播放器，以点按式转盘连接你的 Apple Music 资料库。", social: "转动、点按，然后聆听。一台为 Apple Music 时代重新想象的 iPod。" },
  skip: "跳到主要内容",
  nav: { home: "MusicPod 首页", label: "主导航", experience: "体验", highlights: "亮点", personalize: "个性化", language: "语言", soon: "即将上线" },
  hero: {
    kicker: "专为 Apple Music 设计",
    title: ["你的音乐。", "你的 iPod。"],
    body: "一款为 iPhone 打造的触感音乐播放器，以点按式转盘连接你的 Apple Music 资料库。",
    primaryKicker: "即将登陆",
    primary: "App Store",
    secondary: "探索 MusicPod",
    badges: ["为 iPhone 打造", "Apple Music", "iOS 17+"],
    productLabel: "MusicPod 真实应用界面",
    screenshotAlt: "MusicPod 首页，包含喜爱歌曲、迷你播放器和红色点按式转盘",
    actual: "真实界面",
    native: "原生 SwiftUI",
  },
  mantra: { label: "MusicPod 的三个动作", eyebrow: "熟悉的动作，新的体验。", words: ["点按。", "转动。", "聆听。"] },
  wheel: {
    kicker: "点按式转盘", title: "转盘，回来了。", body: "转动浏览，按下选择。每一步都有原生触感回应。", try: "试试转盘", help: "沿转盘滑动，或使用方向键", group: "MusicPod 点按式转盘演示", menu: "返回第一个项目", previous: "上一个项目", next: "下一个项目", play: "播放所选项目", select: "选择 {item}", selected: "已选择：{item}", playing: "正在播放：{item}", items: ["喜爱歌曲", "播放列表", "专辑", "随机播放", "主题"],
  },
  highlights: {
    kicker: "核心体验", title: "音乐需要的一切，仅此而已。",
    library: { kicker: "Apple Music 资料库", title: "你的资料库，一转即达。", body: "喜爱歌曲、播放列表、专辑与随机播放，都在拇指熟悉的位置。", items: ["喜爱歌曲", "播放列表", "专辑", "随机播放"] },
    coverFlow: { kicker: "Cover Flow", title: "让封面回到舞台中央。", body: "转动浏览专辑，翻面查看曲目。" },
    nowPlaying: { kicker: "正在播放", title: "让每首歌独占一整面屏幕。", body: "封面、进度与控制，没有多余干扰。", track: "午夜记忆", artist: "MusicPod Sessions" },
  },
  personalize: { kicker: "属于你的", title: "一台播放器，完全属于你。", body: "自定义机身、转盘、屏幕、背景、方向与光晕。", palette: "12 种真实机身与转盘配色", combinations: "经典配色组合", presets: ["MusicPod 原色", "经典银白", "经典黑", "经典白", "红色特别版", "nano 橙", "nano 黄", "mini 绿", "nano 青", "nano 蓝", "nano 紫", "nano 粉"], stats: [{ value: "12", label: "种机身与转盘配色" }, { value: "9", label: "套背景主题" }, { value: "2", label: "套首页图标语言" }] },
  native: { kicker: "原生设计", title: "怀旧的外形，原生的内核。", body: "基于 Apple 框架打造，带来流畅播放、精准触感与无障碍导航。", technologies: ["SwiftUI", "MusicKit", "系统触感", "VoiceOver"] },
  availability: { kicker: "全球发布", title: "即将登陆 App Store。", body: "MusicPod 正在为全球发布做最后准备。", badgeKicker: "即将登陆", badge: "App Store", requirement: "兼容 iOS 17 及更高版本 · 需要 Apple Music 订阅" },
  footer: { rights: "保留所有权利。" },
};

const zhTW: Messages = {
  meta: { title: "MusicPod — 你的音樂，你的 iPod", description: "一款為 iPhone 打造的觸感音樂播放器，以點按式轉盤連接你的 Apple Music 資料庫。", social: "轉動、點按，然後聆聽。一台為 Apple Music 時代重新想像的 iPod。" },
  skip: "跳到主要內容",
  nav: { home: "MusicPod 首頁", label: "主要導覽", experience: "體驗", highlights: "亮點", personalize: "個人化", language: "語言", soon: "即將推出" },
  hero: { kicker: "專為 Apple Music 設計", title: ["你的音樂。", "你的 iPod。"], body: "一款為 iPhone 打造的觸感音樂播放器，以點按式轉盤連接你的 Apple Music 資料庫。", primaryKicker: "即將登上", primary: "App Store", secondary: "探索 MusicPod", badges: ["為 iPhone 打造", "Apple Music", "iOS 17+"], productLabel: "MusicPod 實際 App 介面", screenshotAlt: "MusicPod 首頁，包含喜愛歌曲、迷你播放器與紅色點按式轉盤", actual: "實際介面", native: "原生 SwiftUI" },
  mantra: { label: "MusicPod 的三個動作", eyebrow: "熟悉的動作，全新的體驗。", words: ["點按。", "轉動。", "聆聽。"] },
  wheel: { kicker: "點按式轉盤", title: "轉盤，回來了。", body: "轉動瀏覽，按下選擇。每一步都有原生觸感回饋。", try: "試試轉盤", help: "沿轉盤滑動，或使用方向鍵", group: "MusicPod 點按式轉盤示範", menu: "返回第一個項目", previous: "上一個項目", next: "下一個項目", play: "播放所選項目", select: "選擇 {item}", selected: "已選擇：{item}", playing: "正在播放：{item}", items: ["喜愛歌曲", "播放列表", "專輯", "隨機播放", "主題"] },
  highlights: { kicker: "核心體驗", title: "音樂需要的一切，僅此而已。", library: { kicker: "Apple Music 資料庫", title: "你的資料庫，一轉即達。", body: "喜愛歌曲、播放列表、專輯與隨機播放，都在拇指熟悉的位置。", items: ["喜愛歌曲", "播放列表", "專輯", "隨機播放"] }, coverFlow: { kicker: "Cover Flow", title: "讓封面回到舞台中央。", body: "轉動瀏覽專輯，翻面查看曲目。" }, nowPlaying: { kicker: "播放中", title: "讓每首歌獨佔整個螢幕。", body: "封面、進度與控制，沒有多餘干擾。", track: "午夜記憶", artist: "MusicPod Sessions" } },
  personalize: { kicker: "屬於你的", title: "一台播放器，完全屬於你。", body: "自訂機身、轉盤、螢幕、背景、方向與光暈。", palette: "12 種真實機身與轉盤配色", combinations: "經典配色組合", presets: ["MusicPod 原色", "經典銀白", "經典黑", "經典白", "紅色特別版", "nano 橙", "nano 黃", "mini 綠", "nano 青", "nano 藍", "nano 紫", "nano 粉"], stats: [{ value: "12", label: "種機身與轉盤配色" }, { value: "9", label: "套背景主題" }, { value: "2", label: "套首頁圖示語言" }] },
  native: { kicker: "原生設計", title: "懷舊的外形，原生的核心。", body: "以 Apple 框架打造，帶來流暢播放、精準觸感與輔助使用導覽。", technologies: ["SwiftUI", "MusicKit", "系統觸感", "VoiceOver"] },
  availability: { kicker: "全球推出", title: "即將登上 App Store。", body: "MusicPod 正為全球推出進行最後準備。", badgeKicker: "即將登上", badge: "App Store", requirement: "相容於 iOS 17 或以上版本 · 需要 Apple Music 訂閱" },
  footer: { rights: "保留所有權利。" },
};

const ja: Messages = {
  meta: { title: "MusicPod — あなたの音楽を、あなたのiPodで。", description: "クリックホイールとApple Musicライブラリを中心に設計した、iPhoneのための触感的なミュージックプレーヤー。", social: "回して、押して、聴く。Apple Musicの時代に再構想したiPod。" },
  skip: "メインコンテンツへ移動",
  nav: { home: "MusicPod ホーム", label: "メインナビゲーション", experience: "体験", highlights: "特長", personalize: "カスタマイズ", language: "言語", soon: "近日公開" },
  hero: { kicker: "Apple Musicのためにデザイン", title: ["あなたの音楽。", "あなたのiPod。"], body: "クリックホイールとApple Musicライブラリを中心に設計した、iPhoneのための触感的なミュージックプレーヤー。", primaryKicker: "まもなく登場", primary: "App Store", secondary: "MusicPodを体験", badges: ["iPhoneのために", "Apple Music", "iOS 17+"], productLabel: "MusicPodの実際のアプリ画面", screenshotAlt: "お気に入りの曲、ミニプレーヤー、赤いクリックホイールを表示したMusicPodのホーム画面", actual: "実際の画面", native: "SwiftUIネイティブ" },
  mantra: { label: "MusicPodを表す3つの動作", eyebrow: "懐かしい操作を、新しい体験へ。", words: ["押す。", "回す。", "聴く。"] },
  wheel: { kicker: "クリックホイール", title: "クリックホイールが、帰ってきた。", body: "回して探す。押して選ぶ。すべての操作にネイティブな触覚が応えます。", try: "ホイールを試す", help: "ホイールに沿ってスライドするか、矢印キーを使ってください", group: "MusicPodクリックホイールのデモ", menu: "最初の項目に戻る", previous: "前の項目", next: "次の項目", play: "選択した項目を再生", select: "{item}を選択", selected: "選択済み：{item}", playing: "再生中：{item}", items: ["お気に入り", "プレイリスト", "アルバム", "シャッフル", "テーマ"] },
  highlights: { kicker: "必要なものだけ", title: "音楽に必要なすべてを、シンプルに。", library: { kicker: "Apple Musicライブラリ", title: "ライブラリへ、ひと回し。", body: "お気に入り、プレイリスト、アルバム、シャッフルを、親指のすぐそばに。", items: ["お気に入り", "プレイリスト", "アルバム", "シャッフル"] }, coverFlow: { kicker: "Cover Flow", title: "アートワークを、もう一度主役に。", body: "回してアルバムを選び、裏返して曲目を表示。" }, nowPlaying: { kicker: "再生中", title: "一曲のために、画面いっぱいを。", body: "アートワーク、時間、操作だけ。余計なものはありません。", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "自分らしく", title: "自分だけの一台に。", body: "本体、ホイール、画面、背景、向き、光まで選べます。", palette: "本体とホイールの12色", combinations: "クラシックな配色", presets: ["MusicPod オリジナル", "クラシックシルバー", "クラシックブラック", "クラシックホワイト", "レッドエディション", "nano オレンジ", "nano イエロー", "mini グリーン", "nano ティール", "nano ブルー", "nano パープル", "nano ピンク"], stats: [{ value: "12", label: "本体とホイールのカラー" }, { value: "9", label: "背景テーマ" }, { value: "2", label: "ホームアイコンの言語" }] },
  native: { kicker: "ネイティブ設計", title: "懐かしいかたち。中身は、どこまでもネイティブ。", body: "Appleのフレームワークで、滑らかな再生、正確な触覚、アクセシブルな操作を実現。", technologies: ["SwiftUI", "MusicKit", "触覚フィードバック", "VoiceOver"] },
  availability: { kicker: "世界同時リリース", title: "App Storeに近日登場。", body: "MusicPodは世界リリースに向けて最終準備中です。", badgeKicker: "まもなく登場", badge: "App Store", requirement: "iOS 17以降に対応 · Apple Musicのサブスクリプションが必要" },
  footer: { rights: "All rights reserved." },
};

const ko: Messages = {
  meta: { title: "MusicPod — 내 음악. 나만의 iPod.", description: "클릭 휠과 Apple Music 보관함을 중심으로 설계한 iPhone용 촉각 음악 플레이어입니다.", social: "돌리고, 누르고, 듣다. Apple Music 시대를 위해 새롭게 만든 iPod." },
  skip: "본문으로 건너뛰기",
  nav: { home: "MusicPod 홈", label: "주요 탐색", experience: "경험", highlights: "주요 기능", personalize: "맞춤 설정", language: "언어", soon: "출시 예정" },
  hero: { kicker: "Apple Music을 위해 설계", title: ["내 음악.", "나만의 iPod."], body: "클릭 휠과 Apple Music 보관함을 중심으로 설계한 iPhone용 촉각 음악 플레이어입니다.", primaryKicker: "곧 출시됩니다", primary: "App Store", secondary: "MusicPod 살펴보기", badges: ["iPhone을 위해 제작", "Apple Music", "iOS 17+"], productLabel: "MusicPod 실제 앱 화면", screenshotAlt: "좋아하는 노래, 미니 플레이어, 빨간색 클릭 휠이 있는 MusicPod 홈 화면", actual: "실제 화면", native: "네이티브 SwiftUI" },
  mantra: { label: "MusicPod의 세 가지 동작", eyebrow: "익숙한 동작을 새롭게.", words: ["누르고.", "돌리고.", "듣다."] },
  wheel: { kicker: "클릭 휠", title: "클릭 휠이 돌아왔습니다.", body: "돌려서 탐색하고 눌러서 선택하세요. 모든 단계에 네이티브 햅틱이 응답합니다.", try: "휠 사용해 보기", help: "휠을 따라 밀거나 화살표 키를 사용하세요", group: "MusicPod 클릭 휠 데모", menu: "첫 항목으로 돌아가기", previous: "이전 항목", next: "다음 항목", play: "선택한 항목 재생", select: "{item} 선택", selected: "선택됨: {item}", playing: "재생 중: {item}", items: ["좋아하는 노래", "플레이리스트", "앨범", "임의 재생", "테마"] },
  highlights: { kicker: "핵심 기능", title: "음악에 필요한 모든 것. 그 이상은 없습니다.", library: { kicker: "Apple Music 보관함", title: "한 번 돌리면 보관함으로.", body: "좋아하는 노래, 플레이리스트, 앨범, 임의 재생을 엄지손가락 가까이에.", items: ["좋아하는 노래", "플레이리스트", "앨범", "임의 재생"] }, coverFlow: { kicker: "Cover Flow", title: "앨범 아트가 다시 주인공이 됩니다.", body: "돌려서 앨범을 찾고 뒤집어 트랙을 확인하세요." }, nowPlaying: { kicker: "지금 재생 중", title: "한 곡을 화면 가득.", body: "앨범 아트, 시간, 컨트롤만 남겼습니다.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "나만의 방식으로", title: "하나의 플레이어. 온전히 나만의 것.", body: "본체, 휠, 화면, 배경, 방향과 빛을 선택하세요.", palette: "본체 및 휠 실제 색상 12개", combinations: "클래식 색상 조합", presets: ["MusicPod 오리지널", "클래식 실버", "클래식 블랙", "클래식 화이트", "레드 에디션", "nano 오렌지", "nano 옐로", "mini 그린", "nano 틸", "nano 블루", "nano 퍼플", "nano 핑크"], stats: [{ value: "12", label: "본체 및 휠 색상" }, { value: "9", label: "배경 테마" }, { value: "2", label: "홈 아이콘 언어" }] },
  native: { kicker: "네이티브 설계", title: "형태는 향수를, 중심은 네이티브를.", body: "Apple 프레임워크로 부드러운 재생, 정교한 햅틱, 손쉬운 사용 탐색을 구현했습니다.", technologies: ["SwiftUI", "MusicKit", "햅틱", "VoiceOver"] },
  availability: { kicker: "글로벌 출시", title: "App Store 출시 예정.", body: "MusicPod는 전 세계 출시를 위한 마지막 준비 중입니다.", badgeKicker: "곧 출시됩니다", badge: "App Store", requirement: "iOS 17 이상 지원 · Apple Music 구독 필요" },
  footer: { rights: "All rights reserved." },
};

const es: Messages = {
  meta: { title: "MusicPod — Tu música. Tu iPod.", description: "Un reproductor de música táctil para iPhone, creado alrededor de la rueda de clic y tu biblioteca de Apple Music.", social: "Gira, pulsa y escucha. Un iPod reinventado para la era de Apple Music." },
  skip: "Saltar al contenido",
  nav: { home: "Inicio de MusicPod", label: "Navegación principal", experience: "Experiencia", highlights: "Funciones", personalize: "Personaliza", language: "Idioma", soon: "Próximamente" },
  hero: { kicker: "Diseñado para Apple Music", title: ["Tu música.", "Tu iPod."], body: "Un reproductor de música táctil para iPhone, creado alrededor de la rueda de clic y tu biblioteca de Apple Music.", primaryKicker: "Próximamente en", primary: "App Store", secondary: "Descubre MusicPod", badges: ["Creado para iPhone", "Apple Music", "iOS 17+"], productLabel: "Interfaz real de la app MusicPod", screenshotAlt: "Pantalla de inicio de MusicPod con canciones favoritas, minirreproductor y rueda de clic roja", actual: "Interfaz real", native: "SwiftUI nativo" },
  mantra: { label: "MusicPod en tres gestos", eyebrow: "Un gesto familiar, hecho de nuevo.", words: ["Pulsa.", "Gira.", "Escucha."] },
  wheel: { kicker: "Rueda de clic", title: "La rueda de clic ha vuelto.", body: "Gira para explorar. Pulsa para elegir. Cada paso responde con vibración nativa.", try: "Prueba la rueda", help: "Desliza alrededor de la rueda o usa las teclas de flecha", group: "Demostración de la rueda de clic de MusicPod", menu: "Volver al primer elemento", previous: "Elemento anterior", next: "Elemento siguiente", play: "Reproducir el elemento seleccionado", select: "Seleccionar {item}", selected: "Seleccionado: {item}", playing: "Reproduciendo: {item}", items: ["Favoritas", "Playlists", "Álbumes", "Aleatorio", "Tema"] },
  highlights: { kicker: "Lo esencial", title: "Todo lo que la música necesita. Nada más.", library: { kicker: "Biblioteca de Apple Music", title: "Tu biblioteca, a un giro.", body: "Favoritas, playlists, álbumes y aleatorio justo donde los espera tu pulgar.", items: ["Favoritas", "Playlists", "Álbumes", "Aleatorio"] }, coverFlow: { kicker: "Cover Flow", title: "Las portadas vuelven al centro.", body: "Gira entre álbumes y voltea uno para ver sus canciones." }, nowPlaying: { kicker: "En reproducción", title: "Toda la pantalla para cada canción.", body: "Portada, tiempo y controles. Sin ruido.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Hazlo tuyo", title: "Un reproductor. Completamente tuyo.", body: "Elige cuerpo, rueda, pantalla, fondo, orientación y brillo.", palette: "12 colores reales de cuerpo y rueda", combinations: "Combinaciones de color clásicas", presets: ["MusicPod Original", "Classic plata", "Classic negro", "Classic blanco", "Edición roja", "nano naranja", "nano amarillo", "mini verde", "nano turquesa", "nano azul", "nano morado", "nano rosa"], stats: [{ value: "12", label: "colores de cuerpo y rueda" }, { value: "9", label: "temas de fondo" }, { value: "2", label: "idiomas de iconos" }] },
  native: { kicker: "Nativo por diseño", title: "Nostálgico por fuera. Nativo por dentro.", body: "Creado con tecnologías de Apple para una reproducción fluida, vibración precisa y navegación accesible.", technologies: ["SwiftUI", "MusicKit", "Vibración", "VoiceOver"] },
  availability: { kicker: "Lanzamiento mundial", title: "Próximamente en App Store.", body: "MusicPod está ultimando los detalles para su lanzamiento mundial.", badgeKicker: "Próximamente en", badge: "App Store", requirement: "Compatible con iOS 17 o posterior · Requiere Apple Music" },
  footer: { rights: "Todos los derechos reservados." },
};

const fr: Messages = {
  meta: { title: "MusicPod — Votre musique. Votre iPod.", description: "Un lecteur de musique tactile pour iPhone, conçu autour de la molette cliquable et de votre bibliothèque Apple Music.", social: "Tournez, cliquez, écoutez. Un iPod repensé pour l’ère Apple Music." },
  skip: "Aller au contenu",
  nav: { home: "Accueil MusicPod", label: "Navigation principale", experience: "Expérience", highlights: "Fonctions", personalize: "Personnaliser", language: "Langue", soon: "Bientôt disponible" },
  hero: { kicker: "Conçu pour Apple Music", title: ["Votre musique.", "Votre iPod."], body: "Un lecteur de musique tactile pour iPhone, conçu autour de la molette cliquable et de votre bibliothèque Apple Music.", primaryKicker: "Bientôt sur", primary: "App Store", secondary: "Découvrir MusicPod", badges: ["Conçu pour iPhone", "Apple Music", "iOS 17+"], productLabel: "Interface réelle de l’app MusicPod", screenshotAlt: "Écran d’accueil MusicPod avec morceaux favoris, mini-lecteur et molette rouge", actual: "Interface réelle", native: "SwiftUI natif" },
  mantra: { label: "MusicPod en trois gestes", eyebrow: "Un geste familier, réinventé.", words: ["Cliquez.", "Tournez.", "Écoutez."] },
  wheel: { kicker: "Molette cliquable", title: "La molette cliquable est de retour.", body: "Tournez pour parcourir. Cliquez pour choisir. Chaque étape répond par un retour haptique natif.", try: "Essayez la molette", help: "Glissez autour de la molette ou utilisez les touches fléchées", group: "Démonstration de la molette MusicPod", menu: "Revenir au premier élément", previous: "Élément précédent", next: "Élément suivant", play: "Lire l’élément sélectionné", select: "Sélectionner {item}", selected: "Sélection : {item}", playing: "Lecture : {item}", items: ["Morceaux favoris", "Playlists", "Albums", "Aléatoire", "Thème"] },
  highlights: { kicker: "L’essentiel", title: "Tout ce dont la musique a besoin. Rien de plus.", library: { kicker: "Bibliothèque Apple Music", title: "Votre bibliothèque, à un tour de molette.", body: "Favoris, playlists, albums et lecture aléatoire, au bout du pouce.", items: ["Favoris", "Playlists", "Albums", "Aléatoire"] }, coverFlow: { kicker: "Cover Flow", title: "Les pochettes retrouvent le premier rôle.", body: "Parcourez les albums, puis retournez-en un pour afficher les titres." }, nowPlaying: { kicker: "À l’écoute", title: "Tout l’écran pour chaque morceau.", body: "Pochette, durée et commandes. Rien de superflu.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "À votre image", title: "Un lecteur. Entièrement le vôtre.", body: "Choisissez le boîtier, la molette, l’écran, le fond, l’orientation et la lumière.", palette: "12 couleurs réelles de boîtier et molette", combinations: "Combinaisons de couleurs classiques", presets: ["MusicPod Original", "Classic argent", "Classic noir", "Classic blanc", "Édition rouge", "nano orange", "nano jaune", "mini vert", "nano turquoise", "nano bleu", "nano violet", "nano rose"], stats: [{ value: "12", label: "couleurs de boîtier et molette" }, { value: "9", label: "thèmes d’arrière-plan" }, { value: "2", label: "langues d’icônes" }] },
  native: { kicker: "Natif par conception", title: "Nostalgique dans la forme. Natif dans l’âme.", body: "Conçu avec les technologies Apple pour une lecture fluide, un retour haptique précis et une navigation accessible.", technologies: ["SwiftUI", "MusicKit", "Haptique", "VoiceOver"] },
  availability: { kicker: "Lancement mondial", title: "Bientôt sur l’App Store.", body: "MusicPod finalise les préparatifs de son lancement mondial.", badgeKicker: "Bientôt sur", badge: "App Store", requirement: "Compatible avec iOS 17 ou version ultérieure · Abonnement Apple Music requis" },
  footer: { rights: "Tous droits réservés." },
};

const de: Messages = {
  meta: { title: "MusicPod — Deine Musik. Dein iPod.", description: "Ein taktiler Musikplayer für das iPhone – rund um das Click Wheel und deine Apple Music-Mediathek entwickelt.", social: "Drehen, klicken, hören. Ein iPod, neu gedacht für die Apple Music-Ära." },
  skip: "Zum Inhalt springen",
  nav: { home: "MusicPod Startseite", label: "Hauptnavigation", experience: "Erlebnis", highlights: "Funktionen", personalize: "Personalisieren", language: "Sprache", soon: "Demnächst" },
  hero: { kicker: "Für Apple Music entwickelt", title: ["Deine Musik.", "Dein iPod."], body: "Ein taktiler Musikplayer für das iPhone – rund um das Click Wheel und deine Apple Music-Mediathek entwickelt.", primaryKicker: "Demnächst im", primary: "App Store", secondary: "MusicPod entdecken", badges: ["Für iPhone gemacht", "Apple Music", "iOS 17+"], productLabel: "Echte Benutzeroberfläche der MusicPod App", screenshotAlt: "MusicPod-Startbildschirm mit Lieblingstiteln, Miniplayer und rotem Click Wheel", actual: "Echte Oberfläche", native: "Natives SwiftUI" },
  mantra: { label: "MusicPod in drei Gesten", eyebrow: "Eine vertraute Geste, neu gedacht.", words: ["Klicken.", "Drehen.", "Hören."] },
  wheel: { kicker: "Click Wheel", title: "Das Click Wheel ist zurück.", body: "Drehen zum Suchen. Drücken zum Auswählen. Jeder Schritt antwortet mit nativem haptischem Feedback.", try: "Click Wheel ausprobieren", help: "Auf dem Rad wischen oder die Pfeiltasten verwenden", group: "Interaktives MusicPod Click Wheel", menu: "Zum ersten Eintrag zurückkehren", previous: "Vorheriger Eintrag", next: "Nächster Eintrag", play: "Ausgewählten Eintrag abspielen", select: "{item} auswählen", selected: "Ausgewählt: {item}", playing: "Wiedergabe: {item}", items: ["Lieblingstitel", "Playlists", "Alben", "Zufällig", "Design"] },
  highlights: { kicker: "Das Wesentliche", title: "Alles, was Musik braucht. Sonst nichts.", library: { kicker: "Apple Music-Mediathek", title: "Deine Mediathek. Eine Drehung entfernt.", body: "Lieblingstitel, Playlists, Alben und Zufallswiedergabe direkt unter deinem Daumen.", items: ["Lieblingstitel", "Playlists", "Alben", "Zufällig"] }, coverFlow: { kicker: "Cover Flow", title: "Cover stehen wieder im Mittelpunkt.", body: "Durch Alben drehen und umklappen, um die Titelliste zu sehen." }, nowPlaying: { kicker: "Aktuelle Wiedergabe", title: "Der ganze Bildschirm für jeden Song.", body: "Cover, Zeit und Steuerung. Ohne Ablenkung.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Mach ihn zu deinem", title: "Ein Player. Ganz deiner.", body: "Wähle Gehäuse, Rad, Display, Hintergrund, Ausrichtung und Leuchten.", palette: "12 echte Gehäuse- und Radfarben", combinations: "Klassische Farbkombinationen", presets: ["MusicPod Original", "Classic Silber", "Classic Schwarz", "Classic Weiß", "Red Edition", "nano Orange", "nano Gelb", "mini Grün", "nano Türkis", "nano Blau", "nano Violett", "nano Pink"], stats: [{ value: "12", label: "Gehäuse- und Radfarben" }, { value: "9", label: "Hintergrundthemen" }, { value: "2", label: "Symbolsprachen" }] },
  native: { kicker: "Von Grund auf nativ", title: "Nostalgisch in der Form. Nativ im Kern.", body: "Mit Apple-Technologien für flüssige Wiedergabe, präzise Haptik und barrierefreie Navigation.", technologies: ["SwiftUI", "MusicKit", "Haptik", "VoiceOver"] },
  availability: { kicker: "Weltweiter Start", title: "Demnächst im App Store.", body: "MusicPod befindet sich in der letzten Vorbereitung für den weltweiten Start.", badgeKicker: "Demnächst im", badge: "App Store", requirement: "Kompatibel mit iOS 17 oder neuer · Apple Music-Abo erforderlich" },
  footer: { rights: "Alle Rechte vorbehalten." },
};

const ptBR: Messages = {
  meta: { title: "MusicPod — Sua música. Seu iPod.", description: "Um player de música tátil para iPhone, criado em torno da click wheel e da sua biblioteca do Apple Music.", social: "Gire, clique e ouça. Um iPod reinventado para a era do Apple Music." },
  skip: "Pular para o conteúdo",
  nav: { home: "Início do MusicPod", label: "Navegação principal", experience: "Experiência", highlights: "Recursos", personalize: "Personalize", language: "Idioma", soon: "Em breve" },
  hero: { kicker: "Criado para Apple Music", title: ["Sua música.", "Seu iPod."], body: "Um player de música tátil para iPhone, criado em torno da click wheel e da sua biblioteca do Apple Music.", primaryKicker: "Em breve na", primary: "App Store", secondary: "Conheça o MusicPod", badges: ["Feito para iPhone", "Apple Music", "iOS 17+"], productLabel: "Interface real do app MusicPod", screenshotAlt: "Tela inicial do MusicPod com músicas favoritas, miniplayer e click wheel vermelha", actual: "Interface real", native: "SwiftUI nativo" },
  mantra: { label: "MusicPod em três gestos", eyebrow: "Um gesto familiar, feito de novo.", words: ["Clique.", "Gire.", "Ouça."] },
  wheel: { kicker: "Click wheel", title: "A click wheel está de volta.", body: "Gire para navegar. Clique para escolher. Cada passo responde com retorno tátil nativo.", try: "Experimente a roda", help: "Deslize ao redor da roda ou use as teclas de seta", group: "Demonstração da click wheel do MusicPod", menu: "Voltar ao primeiro item", previous: "Item anterior", next: "Próximo item", play: "Reproduzir item selecionado", select: "Selecionar {item}", selected: "Selecionado: {item}", playing: "Reproduzindo: {item}", items: ["Favoritas", "Playlists", "Álbuns", "Aleatório", "Tema"] },
  highlights: { kicker: "O essencial", title: "Tudo que a música precisa. Nada além.", library: { kicker: "Biblioteca do Apple Music", title: "Sua biblioteca, a um giro.", body: "Favoritas, playlists, álbuns e aleatório ao alcance do polegar.", items: ["Favoritas", "Playlists", "Álbuns", "Aleatório"] }, coverFlow: { kicker: "Cover Flow", title: "As capas voltam ao centro do palco.", body: "Gire pelos álbuns e vire um deles para ver as faixas." }, nowPlaying: { kicker: "Reproduzindo", title: "A tela inteira para cada música.", body: "Capa, tempo e controles. Sem distrações.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Deixe do seu jeito", title: "Um player. Totalmente seu.", body: "Escolha corpo, roda, tela, fundo, direção e brilho.", palette: "12 cores reais de corpo e roda", combinations: "Combinações de cores clássicas", presets: ["MusicPod Original", "Classic prateado", "Classic preto", "Classic branco", "Edição vermelha", "nano laranja", "nano amarelo", "mini verde", "nano turquesa", "nano azul", "nano roxo", "nano rosa"], stats: [{ value: "12", label: "cores de corpo e roda" }, { value: "9", label: "temas de fundo" }, { value: "2", label: "idiomas de ícones" }] },
  native: { kicker: "Nativo por design", title: "Nostálgico na forma. Nativo por dentro.", body: "Criado com tecnologias Apple para reprodução fluida, resposta tátil precisa e navegação acessível.", technologies: ["SwiftUI", "MusicKit", "Resposta tátil", "VoiceOver"] },
  availability: { kicker: "Lançamento mundial", title: "Em breve na App Store.", body: "O MusicPod está nos preparativos finais para o lançamento mundial.", badgeKicker: "Em breve na", badge: "App Store", requirement: "Compatível com iOS 17 ou posterior · Requer Apple Music" },
  footer: { rights: "Todos os direitos reservados." },
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

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
  theme: { label: string; system: string; light: string; dark: string };
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
  faq: {
    kicker: string;
    title: string;
    items: ReadonlyArray<{ question: string; answer: string }>;
  };
  availability: {
    kicker: string;
    title: string;
    body: string;
    badgeKicker: string;
    badge: string;
    requirement: string;
  };
  footer: { rights: string; privacy: string; ipodMusic: string; developer: string };
};

const en: Messages = {
  meta: {
    title: "MusicPod — iPod Music, Reborn on iPhone",
    description: "The classic iPod music experience on your iPhone. Turn the click wheel, browse your Apple Music library, and just listen.",
    social: "Turn, click, and listen. The classic iPod music experience, reborn on iPhone.",
  },
  skip: "Skip to content",
  nav: { home: "MusicPod home", label: "Primary navigation", experience: "Experience", highlights: "Highlights", personalize: "Personalize", language: "Language", soon: "Coming soon" },
  theme: { label: "Appearance", system: "System", light: "Light", dark: "Dark" },
  hero: {
    kicker: "The iPod music experience, on iPhone",
    title: ["iPod music,", "reborn on iPhone."],
    body: "The classic iPod, rebuilt as a native iPhone app — click wheel, Cover Flow, and your entire Apple Music library under your thumb.",
    primaryKicker: "Download on the",
    primary: "App Store",
    secondary: "Explore MusicPod",
    badges: ["Made for iPhone", "Apple Music", "iOS 17+"],
    productLabel: "MusicPod actual app interface",
    screenshotAlt: "MusicPod home screen with Favorite Songs, a mini player, and a red click wheel",
    actual: "Actual interface",
    native: "Native SwiftUI",
  },
  mantra: { label: "MusicPod in three gestures", eyebrow: "The way iPod music felt — now on iPhone.", words: ["Click.", "Turn.", "Listen."] },
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
  faq: {
    kicker: "FAQ",
    title: "Questions, answered.",
    items: [
      { question: "What is MusicPod?", answer: "MusicPod is an iPod-style music player for iPhone. It recreates the classic iPod experience — click wheel, Cover Flow, full-screen now playing — and streams your Apple Music library through MusicKit. MusicPod is an independent app and is not affiliated with Apple." },
      { question: "Is there an iPod app for iPhone?", answer: "Yes — MusicPod is an iPod app for iPhone. It brings back the click wheel, Cover Flow, and classic menus, and plays your Apple Music library. Download it free on the App Store." },
      { question: "Is MusicPod free?", answer: "Yes. MusicPod is free to download from the App Store." },
      { question: "Do I need an Apple Music subscription?", answer: "Yes. MusicPod plays your library through MusicKit, so an active Apple Music subscription is required to stream your songs." },
      { question: "Which iPhones are supported?", answer: "MusicPod runs on any iPhone with iOS 17 or later." },
      { question: "Can I play my own audio files?", answer: "Yes. Alongside your Apple Music library, MusicPod also plays audio files you import into the app." },
      { question: "Does MusicPod need an account?", answer: "No. There is no MusicPod account, and playback data stays on your device. See the Privacy Policy for details." },
      { question: "Can I customize how it looks?", answer: "Yes. Choose from 12 body and wheel colors, 9 backdrop themes, and two home screen icon styles." },
    ],
  },
  availability: {
    kicker: "Available now",
    title: "Download MusicPod.",
    body: "The iPod music experience for iPhone — now on the App Store.",
    badgeKicker: "Download on the",
    badge: "App Store",
    requirement: "Compatible with iOS 17 or later · Apple Music subscription required.",
  },
  footer: { rights: "All rights reserved.", privacy: "Privacy Policy", ipodMusic: "iPod music on iPhone", developer: "An independent product by" },
};

const zhCN: Messages = {
  meta: { title: "MusicPod — 在 iPhone 上还原 iPod 音乐体验", description: "在 iPhone 上还原经典 iPod 音乐体验：转动点按式转盘，浏览你的 Apple Music 资料库，纯粹地听歌。", social: "转动、点按、聆听。iPod 音乐体验，重回 iPhone。" },
  skip: "跳到主要内容",
  nav: { home: "MusicPod 首页", label: "主导航", experience: "体验", highlights: "亮点", personalize: "个性化", language: "语言", soon: "即将上线" },
  theme: { label: "外观", system: "跟随系统", light: "浅色", dark: "深色" },
  hero: {
    kicker: "iPod 音乐体验 · 为 iPhone 打造",
    title: ["iPod 音乐", "重回 iPhone"],
    body: "经典 iPod，以原生 iPhone 应用重生。点按式转盘、Cover Flow、整个 Apple Music 资料库，尽在拇指之下",
    primaryKicker: "下载自",
    primary: "App Store",
    secondary: "探索 MusicPod",
    badges: ["为 iPhone 打造", "Apple Music", "iOS 17+"],
    productLabel: "MusicPod 真实应用界面",
    screenshotAlt: "MusicPod 首页，包含喜爱歌曲、迷你播放器和红色点按式转盘",
    actual: "真实界面",
    native: "原生 SwiftUI",
  },
  mantra: { label: "MusicPod 的三个动作", eyebrow: "熟悉的 iPod 手感 回到 iPhone", words: ["点按", "转动", "聆听"] },
  wheel: {
    kicker: "点按式转盘", title: "转盘回来了", body: "转动浏览，按下选择，每一步都有原生触感反馈", try: "试试转盘", help: "沿转盘滑动，或使用方向键", group: "MusicPod 点按式转盘演示", menu: "返回第一个项目", previous: "上一个项目", next: "下一个项目", play: "播放所选项目", select: "选择 {item}", selected: "已选择：{item}", playing: "正在播放：{item}", items: ["喜爱歌曲", "播放列表", "专辑", "随机播放", "主题"],
  },
  highlights: {
    kicker: "核心体验", title: "音乐所需 仅此而已",
    library: { kicker: "Apple Music 资料库", title: "资料库 一转即达", body: "喜爱歌曲、播放列表与专辑，都在拇指熟悉的位置", items: ["喜爱歌曲", "播放列表", "专辑", "随机播放"] },
    coverFlow: { kicker: "Cover Flow", title: "让封面成为主角", body: "转动浏览专辑，翻面查看曲目" },
    nowPlaying: { kicker: "正在播放", title: "让每首歌独占全屏", body: "只保留封面、进度与控制", track: "午夜记忆", artist: "MusicPod Sessions" },
  },
  personalize: { kicker: "属于你的", title: "一台播放器 完全属于你", body: "自定义机身、转盘、屏幕、背景与光晕", palette: "12 种真实机身与转盘配色", combinations: "经典配色组合", presets: ["MusicPod 原色", "经典银白", "经典黑", "经典白", "红色特别版", "nano 橙", "nano 黄", "mini 绿", "nano 青", "nano 蓝", "nano 紫", "nano 粉"], stats: [{ value: "12", label: "种机身与转盘配色" }, { value: "9", label: "套背景主题" }, { value: "2", label: "套首页图标语言" }] },
  native: { kicker: "原生设计", title: "怀旧外形 原生内核", body: "基于 Apple 框架，带来流畅播放、精准触感与无障碍导航", technologies: ["SwiftUI", "MusicKit", "系统触感", "VoiceOver"] },
  faq: { kicker: "常见问题", title: "你想知道的", items: [
    { question: "MusicPod 是什么？", answer: "MusicPod 是一款 iPod 风格的 iPhone 音乐播放器，还原经典 iPod 的体验——点按式转盘、Cover Flow、全屏正在播放——并通过 MusicKit 播放你的 Apple Music 资料库。MusicPod 是独立开发的应用，与 Apple Inc. 无关联。" },
    { question: "iPhone 上有 iPod 应用吗？", answer: "有。MusicPod 就是一款 iPhone 上的 iPod 应用，还原点按式转盘、Cover Flow 与经典菜单，并播放你的 Apple Music 资料库。可在 App Store 免费下载。" },
    { question: "MusicPod 是免费的吗？", answer: "是。MusicPod 在 App Store 免费下载。" },
    { question: "需要订阅 Apple Music 吗？", answer: "需要。MusicPod 通过 MusicKit 播放你的资料库，流媒体播放歌曲需要有效的 Apple Music 订阅。" },
    { question: "支持哪些 iPhone？", answer: "任何运行 iOS 17 或更高系统的 iPhone。" },
    { question: "可以播放自己导入的音频文件吗？", answer: "可以。除了 Apple Music 资料库，MusicPod 也支持播放导入到 App 内的音频文件。" },
    { question: "需要注册账号吗？", answer: "不需要。MusicPod 没有账号体系，播放数据保留在你的设备上，详见隐私政策。" },
    { question: "可以自定义外观吗？", answer: "可以。提供 12 种机身与转盘配色、9 套背景主题以及 2 套首页图标语言。" },
  ] },
  availability: { kicker: "现已推出", title: "下载 MusicPod", body: "iPod 音乐体验，现已登陆 App Store", badgeKicker: "下载自", badge: "App Store", requirement: "兼容 iOS 17 及更高版本 · 需要 Apple Music 订阅" },
  footer: { rights: "保留所有权利。", privacy: "隐私政策", ipodMusic: "iPhone 上的 iPod 音乐", developer: "独立开发者作品 ·" },
};

const zhTW: Messages = {
  meta: { title: "MusicPod — 在 iPhone 上重現 iPod 音樂體驗", description: "在 iPhone 上重現經典 iPod 音樂體驗：轉動點按式轉盤，瀏覽你的 Apple Music 資料庫，純粹地聽歌。", social: "轉動、點按、聆聽。iPod 音樂體驗，重回 iPhone。" },
  skip: "跳到主要內容",
  nav: { home: "MusicPod 首頁", label: "主要導覽", experience: "體驗", highlights: "亮點", personalize: "個人化", language: "語言", soon: "即將推出" },
  theme: { label: "外觀", system: "跟隨系統", light: "淺色", dark: "深色" },
  hero: { kicker: "iPod 音樂體驗 · 為 iPhone 打造", title: ["iPod 音樂", "重回 iPhone"], body: "經典 iPod，以原生 iPhone App 重生。點按式轉盤、Cover Flow、整個 Apple Music 資料庫，盡在拇指之下", primaryKicker: "下載自", primary: "App Store", secondary: "探索 MusicPod", badges: ["為 iPhone 打造", "Apple Music", "iOS 17+"], productLabel: "MusicPod 實際 App 介面", screenshotAlt: "MusicPod 首頁，包含喜愛歌曲、迷你播放器與紅色點按式轉盤", actual: "實際介面", native: "原生 SwiftUI" },
  mantra: { label: "MusicPod 的三個動作", eyebrow: "熟悉的 iPod 手感 回到 iPhone", words: ["點按", "轉動", "聆聽"] },
  wheel: { kicker: "點按式轉盤", title: "轉盤回來了", body: "轉動瀏覽，按下選擇，每一步都有原生觸感回饋", try: "試試轉盤", help: "沿轉盤滑動，或使用方向鍵", group: "MusicPod 點按式轉盤示範", menu: "返回第一個項目", previous: "上一個項目", next: "下一個項目", play: "播放所選項目", select: "選擇 {item}", selected: "已選擇：{item}", playing: "正在播放：{item}", items: ["喜愛歌曲", "播放列表", "專輯", "隨機播放", "主題"] },
  highlights: { kicker: "核心體驗", title: "音樂所需 僅此而已", library: { kicker: "Apple Music 資料庫", title: "資料庫 一轉即達", body: "喜愛歌曲、播放列表與專輯，都在拇指熟悉的位置", items: ["喜愛歌曲", "播放列表", "專輯", "隨機播放"] }, coverFlow: { kicker: "Cover Flow", title: "讓封面成為主角", body: "轉動瀏覽專輯，翻面查看曲目" }, nowPlaying: { kicker: "播放中", title: "讓每首歌獨佔全螢幕", body: "只保留封面、進度與控制", track: "午夜記憶", artist: "MusicPod Sessions" } },
  personalize: { kicker: "屬於你的", title: "一台播放器 完全屬於你", body: "自訂機身、轉盤、螢幕、背景與光暈", palette: "12 種真實機身與轉盤配色", combinations: "經典配色組合", presets: ["MusicPod 原色", "經典銀白", "經典黑", "經典白", "紅色特別版", "nano 橙", "nano 黃", "mini 綠", "nano 青", "nano 藍", "nano 紫", "nano 粉"], stats: [{ value: "12", label: "種機身與轉盤配色" }, { value: "9", label: "套背景主題" }, { value: "2", label: "套首頁圖示語言" }] },
  native: { kicker: "原生設計", title: "懷舊外形 原生核心", body: "以 Apple 框架帶來流暢播放、精準觸感與輔助使用導覽", technologies: ["SwiftUI", "MusicKit", "系統觸感", "VoiceOver"] },
  faq: { kicker: "常見問題", title: "你想知道的", items: [
    { question: "MusicPod 是什麼？", answer: "MusicPod 是一款 iPod 風格的 iPhone 音樂播放器，重現經典 iPod 的體驗——點按式轉盤、Cover Flow、全螢幕播放畫面——並透過 MusicKit 播放你的 Apple Music 資料庫。MusicPod 是獨立開發的應用程式，與 Apple Inc. 無關聯。" },
    { question: "iPhone 上有 iPod App 嗎？", answer: "有。MusicPod 就是一款 iPhone 上的 iPod App，重現點按式轉盤、Cover Flow 與經典選單，並播放你的 Apple Music 資料庫。可在 App Store 免費下載。" },
    { question: "MusicPod 是免費的嗎？", answer: "是。MusicPod 可在 App Store 免費下載。" },
    { question: "需要訂閱 Apple Music 嗎？", answer: "需要。MusicPod 透過 MusicKit 播放你的資料庫，串流播放歌曲需要有效的 Apple Music 訂閱。" },
    { question: "支援哪些 iPhone？", answer: "任何安裝 iOS 17 或以上版本的 iPhone。" },
    { question: "可以播放自己匯入的音訊檔嗎？", answer: "可以。除了 Apple Music 資料庫，MusicPod 也支援播放匯入到 App 內的音訊檔案。" },
    { question: "需要註冊帳號嗎？", answer: "不需要。MusicPod 沒有帳號系統，播放資料保留在你的裝置上，詳見隱私權政策。" },
    { question: "可以自訂外觀嗎？", answer: "可以。提供 12 種機身與轉盤配色、9 套背景主題以及 2 套首頁圖示語言。" },
  ] },
  availability: { kicker: "現已推出", title: "下載 MusicPod", body: "iPod 音樂體驗，現已登上 App Store", badgeKicker: "下載自", badge: "App Store", requirement: "相容於 iOS 17 或以上版本 · 需要 Apple Music 訂閱" },
  footer: { rights: "保留所有權利。", privacy: "隱私權政策", ipodMusic: "iPhone 上的 iPod 音樂", developer: "獨立開發者作品 ·" },
};

const ja: Messages = {
  meta: { title: "MusicPod — iPodの音楽を、iPhoneで。", description: "iPhoneのために蘇らせた、あのiPodの音楽体験。クリックホイールを回して、Apple Musicライブラリを思うままに。", social: "回して、押して、聴く。iPodの音楽体験が、iPhoneに帰ってきた。" },
  skip: "メインコンテンツへ移動",
  nav: { home: "MusicPod ホーム", label: "メインナビゲーション", experience: "体験", highlights: "特長", personalize: "カスタマイズ", language: "言語", soon: "近日公開" },
  theme: { label: "外観", system: "システム", light: "ライト", dark: "ダーク" },
  hero: { kicker: "iPodの音楽体験を、iPhoneに。", title: ["iPodの音楽、", "iPhoneに蘇る。"], body: "あのiPodを、ネイティブなiPhoneアプリとして再現。クリックホイール、Cover Flow、Apple Musicライブラリのすべてを親指ひとつで。", primaryKicker: "App Storeからダウンロード", primary: "App Store", secondary: "MusicPodを体験", badges: ["iPhoneのために", "Apple Music", "iOS 17+"], productLabel: "MusicPodの実際のアプリ画面", screenshotAlt: "お気に入りの曲、ミニプレーヤー、赤いクリックホイールを表示したMusicPodのホーム画面", actual: "実際の画面", native: "SwiftUIネイティブ" },
  mantra: { label: "MusicPodを表す3つの動作", eyebrow: "あのiPodの手感触を、iPhoneに。", words: ["押す。", "回す。", "聴く。"] },
  wheel: { kicker: "クリックホイール", title: "クリックホイールが、帰ってきた。", body: "回して探す。押して選ぶ。すべての操作にネイティブな触覚が応えます。", try: "ホイールを試す", help: "ホイールに沿ってスライドするか、矢印キーを使ってください", group: "MusicPodクリックホイールのデモ", menu: "最初の項目に戻る", previous: "前の項目", next: "次の項目", play: "選択した項目を再生", select: "{item}を選択", selected: "選択済み：{item}", playing: "再生中：{item}", items: ["お気に入り", "プレイリスト", "アルバム", "シャッフル", "テーマ"] },
  highlights: { kicker: "必要なものだけ", title: "音楽に必要なすべてを、シンプルに。", library: { kicker: "Apple Musicライブラリ", title: "ライブラリへ、ひと回し。", body: "お気に入り、プレイリスト、アルバム、シャッフルを、親指のすぐそばに。", items: ["お気に入り", "プレイリスト", "アルバム", "シャッフル"] }, coverFlow: { kicker: "Cover Flow", title: "アートワークを、もう一度主役に。", body: "回してアルバムを選び、裏返して曲目を表示。" }, nowPlaying: { kicker: "再生中", title: "一曲のために、画面いっぱいを。", body: "アートワーク、時間、操作だけ。余計なものはありません。", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "自分らしく", title: "自分だけの一台に。", body: "本体、ホイール、画面、背景、向き、光まで選べます。", palette: "本体とホイールの12色", combinations: "クラシックな配色", presets: ["MusicPod オリジナル", "クラシックシルバー", "クラシックブラック", "クラシックホワイト", "レッドエディション", "nano オレンジ", "nano イエロー", "mini グリーン", "nano ティール", "nano ブルー", "nano パープル", "nano ピンク"], stats: [{ value: "12", label: "本体とホイールのカラー" }, { value: "9", label: "背景テーマ" }, { value: "2", label: "ホームアイコンの言語" }] },
  native: { kicker: "ネイティブ設計", title: "懐かしいかたち。中身は、どこまでもネイティブ。", body: "Appleのフレームワークで、滑らかな再生、正確な触覚、アクセシブルな操作を実現。", technologies: ["SwiftUI", "MusicKit", "触覚フィードバック", "VoiceOver"] },
  faq: { kicker: "よくある質問", title: "知りたいことに、お答えします。", items: [
    { question: "MusicPodとは何ですか？", answer: "MusicPodは、iPodスタイルのiPhone用ミュージックプレーヤーです。クリックホイール、Cover Flow、全画面の再生画面といった、あのiPodの体験を再現し、MusicKitを通してApple Musicライブラリを再生します。MusicPodは独立したアプリで、Appleとは提携関係にありません。" },
    { question: "iPhone用のiPodアプリはありますか？", answer: "あります。MusicPodはiPhone用のiPodアプリです。クリックホイール、Cover Flow、クラシックなメニューを再現し、Apple Musicライブラリを再生します。App Storeから無料でダウンロードできます。" },
    { question: "MusicPodは無料ですか？", answer: "はい。MusicPodはApp Storeから無料でダウンロードできます。" },
    { question: "Apple Musicのサブスクリプションは必要ですか？", answer: "はい。MusicPodはMusicKitを使ってライブラリを再生するため、曲のストリーミングには有効なApple Musicのサブスクリプションが必要です。" },
    { question: "どのiPhoneに対応していますか？", answer: "iOS 17以降が動作するすべてのiPhoneに対応しています。" },
    { question: "自分で取り込んだオーディオファイルは再生できますか？", answer: "はい。Apple Musicライブラリに加えて、アプリに取り込んだオーディオファイルも再生できます。" },
    { question: "アカウント登録は必要ですか？", answer: "いいえ。MusicPodにはアカウントがなく、再生データは端末内に残ります。詳しくはプライバシーポリシーをご覧ください。" },
    { question: "見た目をカスタマイズできますか？", answer: "はい。本体とホイールのカラー12色、背景テーマ9種類、ホームアイコンの言語2種類から選べます。" },
  ] },
  availability: { kicker: "配信中", title: "MusicPodをダウンロード。", body: "iPodの音楽体験を、App Storeでどうぞ。", badgeKicker: "App Storeからダウンロード", badge: "App Store", requirement: "iOS 17以降に対応 · Apple Musicのサブスクリプションが必要" },
  footer: { rights: "All rights reserved.", privacy: "プライバシーポリシー", ipodMusic: "iPhoneのiPodの音楽", developer: "インディー開発 ·" },
};

const ko: Messages = {
  meta: { title: "MusicPod — iPod 음악을 다시, iPhone에서.", description: "iPhone에서 만나는 그리운 iPod 음악 경험. 클릭 휠을 돌리고 Apple Music 보관함을 둘러보며 음악에만 집중하세요.", social: "돌리고, 누르고, 듣다. iPod 음악 경험이 iPhone으로 돌아왔습니다." },
  skip: "본문으로 건너뛰기",
  nav: { home: "MusicPod 홈", label: "주요 탐색", experience: "경험", highlights: "주요 기능", personalize: "맞춤 설정", language: "언어", soon: "출시 예정" },
  theme: { label: "화면 모드", system: "시스템", light: "라이트", dark: "다크" },
  hero: { kicker: "iPod 음악 경험, iPhone으로", title: ["iPod 음악,", "iPhone에서 다시."], body: "클래식 iPod을 네이티브 iPhone 앱으로 되살렸습니다. 클릭 휠, Cover Flow, Apple Music 보관함 전부를 엄지손가락 하나로.", primaryKicker: "App Store에서 다운로드", primary: "App Store", secondary: "MusicPod 살펴보기", badges: ["iPhone을 위해 제작", "Apple Music", "iOS 17+"], productLabel: "MusicPod 실제 앱 화면", screenshotAlt: "좋아하는 노래, 미니 플레이어, 빨간색 클릭 휠이 있는 MusicPod 홈 화면", actual: "실제 화면", native: "네이티브 SwiftUI" },
  mantra: { label: "MusicPod의 세 가지 동작", eyebrow: "익숙한 iPod의 감각, 다시 iPhone에서.", words: ["누르고.", "돌리고.", "듣다."] },
  wheel: { kicker: "클릭 휠", title: "클릭 휠이 돌아왔습니다.", body: "돌려서 탐색하고 눌러서 선택하세요. 모든 단계에 네이티브 햅틱이 응답합니다.", try: "휠 사용해 보기", help: "휠을 따라 밀거나 화살표 키를 사용하세요", group: "MusicPod 클릭 휠 데모", menu: "첫 항목으로 돌아가기", previous: "이전 항목", next: "다음 항목", play: "선택한 항목 재생", select: "{item} 선택", selected: "선택됨: {item}", playing: "재생 중: {item}", items: ["좋아하는 노래", "플레이리스트", "앨범", "임의 재생", "테마"] },
  highlights: { kicker: "핵심 기능", title: "음악에 필요한 모든 것. 그 이상은 없습니다.", library: { kicker: "Apple Music 보관함", title: "한 번 돌리면 보관함으로.", body: "좋아하는 노래, 플레이리스트, 앨범, 임의 재생을 엄지손가락 가까이에.", items: ["좋아하는 노래", "플레이리스트", "앨범", "임의 재생"] }, coverFlow: { kicker: "Cover Flow", title: "앨범 아트가 다시 주인공이 됩니다.", body: "돌려서 앨범을 찾고 뒤집어 트랙을 확인하세요." }, nowPlaying: { kicker: "지금 재생 중", title: "한 곡을 화면 가득.", body: "앨범 아트, 시간, 컨트롤만 남겼습니다.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "나만의 방식으로", title: "하나의 플레이어. 온전히 나만의 것.", body: "본체, 휠, 화면, 배경, 방향과 빛을 선택하세요.", palette: "본체 및 휠 실제 색상 12개", combinations: "클래식 색상 조합", presets: ["MusicPod 오리지널", "클래식 실버", "클래식 블랙", "클래식 화이트", "레드 에디션", "nano 오렌지", "nano 옐로", "mini 그린", "nano 틸", "nano 블루", "nano 퍼플", "nano 핑크"], stats: [{ value: "12", label: "본체 및 휠 색상" }, { value: "9", label: "배경 테마" }, { value: "2", label: "홈 아이콘 언어" }] },
  native: { kicker: "네이티브 설계", title: "형태는 향수를, 중심은 네이티브를.", body: "Apple 프레임워크로 부드러운 재생, 정교한 햅틱, 손쉬운 사용 탐색을 구현했습니다.", technologies: ["SwiftUI", "MusicKit", "햅틱", "VoiceOver"] },
  faq: { kicker: "자주 묻는 질문", title: "궁금한 점을 답아 드립니다.", items: [
    { question: "MusicPod란 무엇인가요?", answer: "MusicPod는 iPod 스타일의 iPhone 음악 플레이어입니다. 클릭 휠, Cover Flow, 전체 화면 재생 화면 등 클래식 iPod의 경험을 재현하고, MusicKit으로 Apple Music 보관함을 재생합니다. MusicPod는 독립적인 앱이며 Apple과 제휴 관계가 없습니다." },
    { question: "iPhone용 iPod 앱이 있나요?", answer: "있습니다. MusicPod는 iPhone용 iPod 앱입니다. 클릭 휠, Cover Flow, 클래식 메뉴를 되살리고 Apple Music 보관함을 재생합니다. App Store에서 무료로 다운로드할 수 있습니다." },
    { question: "MusicPod는 무료인가요?", answer: "네. MusicPod는 App Store에서 무료로 다운로드할 수 있습니다." },
    { question: "Apple Music 구독이 필요한가요?", answer: "네. MusicPod는 MusicKit으로 보관함을 재생하므로 음악을 스트리밍하려면 유효한 Apple Music 구독이 필요합니다." },
    { question: "어떤 iPhone에서 사용할 수 있나요?", answer: "iOS 17 이상이 설치된 모든 iPhone에서 사용할 수 있습니다." },
    { question: "직접 가져온 오디오 파일도 재생할 수 있나요?", answer: "네. Apple Music 보관함 외에도 앱으로 가져온 오디오 파일을 재생할 수 있습니다." },
    { question: "계정 등록이 필요한가요?", answer: "아니요. MusicPod에는 계정이 없으며 재생 데이터는 기기에만 저장됩니다. 자세한 내용은 개인정보 처리방침을 참고하세요." },
    { question: "디자인을 바꿀 수 있나요?", answer: "네. 본체와 휠 색상 12가지, 배경 테마 9가지, 홈 아이콘 언어 2가지 중에서 선택할 수 있습니다." },
  ] },
  availability: { kicker: "지금 이용 가능", title: "MusicPod 다운로드.", body: "iPod 음악 경험을 App Store에서 만나보세요.", badgeKicker: "App Store에서 다운로드", badge: "App Store", requirement: "iOS 17 이상 지원 · Apple Music 구독 필요" },
  footer: { rights: "All rights reserved.", privacy: "개인정보 처리방침", ipodMusic: "iPhone의 iPod 음악", developer: "인디 개발 ·" },
};

const es: Messages = {
  meta: { title: "MusicPod — Música de iPod, renacida en iPhone", description: "La experiencia musical del iPod clásico en tu iPhone. Gira la rueda de clic, explora tu biblioteca de Apple Music y solo escucha.", social: "Gira, pulsa y escucha. La música del iPod clásico, renacida en iPhone." },
  skip: "Saltar al contenido",
  nav: { home: "Inicio de MusicPod", label: "Navegación principal", experience: "Experiencia", highlights: "Funciones", personalize: "Personaliza", language: "Idioma", soon: "Próximamente" },
  theme: { label: "Apariencia", system: "Sistema", light: "Claro", dark: "Oscuro" },
  hero: { kicker: "La experiencia musical del iPod, en iPhone", title: ["Música de iPod,", "renacida en iPhone."], body: "El iPod clásico, reconstruido como app nativa de iPhone. Rueda de clic, Cover Flow y toda tu biblioteca de Apple Music bajo el pulgar.", primaryKicker: "Descárgalo en", primary: "App Store", secondary: "Descubre MusicPod", badges: ["Creado para iPhone", "Apple Music", "iOS 17+"], productLabel: "Interfaz real de la app MusicPod", screenshotAlt: "Pantalla de inicio de MusicPod con canciones favoritas, minirreproductor y rueda de clic roja", actual: "Interfaz real", native: "SwiftUI nativo" },
  mantra: { label: "MusicPod en tres gestos", eyebrow: "Aquella sensación del iPod, ahora en tu iPhone.", words: ["Pulsa.", "Gira.", "Escucha."] },
  wheel: { kicker: "Rueda de clic", title: "La rueda de clic ha vuelto.", body: "Gira para explorar. Pulsa para elegir. Cada paso responde con vibración nativa.", try: "Prueba la rueda", help: "Desliza alrededor de la rueda o usa las teclas de flecha", group: "Demostración de la rueda de clic de MusicPod", menu: "Volver al primer elemento", previous: "Elemento anterior", next: "Elemento siguiente", play: "Reproducir el elemento seleccionado", select: "Seleccionar {item}", selected: "Seleccionado: {item}", playing: "Reproduciendo: {item}", items: ["Favoritas", "Playlists", "Álbumes", "Aleatorio", "Tema"] },
  highlights: { kicker: "Lo esencial", title: "Todo lo que la música necesita. Nada más.", library: { kicker: "Biblioteca de Apple Music", title: "Tu biblioteca, a un giro.", body: "Favoritas, playlists, álbumes y aleatorio justo donde los espera tu pulgar.", items: ["Favoritas", "Playlists", "Álbumes", "Aleatorio"] }, coverFlow: { kicker: "Cover Flow", title: "Las portadas vuelven al centro.", body: "Gira entre álbumes y voltea uno para ver sus canciones." }, nowPlaying: { kicker: "En reproducción", title: "Toda la pantalla para cada canción.", body: "Portada, tiempo y controles. Sin ruido.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Hazlo tuyo", title: "Un reproductor. Completamente tuyo.", body: "Elige cuerpo, rueda, pantalla, fondo, orientación y brillo.", palette: "12 colores reales de cuerpo y rueda", combinations: "Combinaciones de color clásicas", presets: ["MusicPod Original", "Classic plata", "Classic negro", "Classic blanco", "Edición roja", "nano naranja", "nano amarillo", "mini verde", "nano turquesa", "nano azul", "nano morado", "nano rosa"], stats: [{ value: "12", label: "colores de cuerpo y rueda" }, { value: "9", label: "temas de fondo" }, { value: "2", label: "idiomas de iconos" }] },
  native: { kicker: "Nativo por diseño", title: "Nostálgico por fuera. Nativo por dentro.", body: "Creado con tecnologías de Apple para una reproducción fluida, vibración precisa y navegación accesible.", technologies: ["SwiftUI", "MusicKit", "Vibración", "VoiceOver"] },
  faq: { kicker: "Preguntas frecuentes", title: "Respuestas a tus dudas.", items: [
    { question: "¿Qué es MusicPod?", answer: "MusicPod es un reproductor de música estilo iPod para iPhone. Recrea la experiencia del iPod clásico —rueda de clic, Cover Flow, reproducción a pantalla completa— y reproduce tu biblioteca de Apple Music mediante MusicKit. MusicPod es una app independiente, sin afiliación con Apple." },
    { question: "¿Hay una app de iPod para iPhone?", answer: "Sí. MusicPod es una app de iPod para iPhone: recupera la rueda de clic, Cover Flow y los menús clásicos, y reproduce tu biblioteca de Apple Music. Descárgala gratis en App Store." },
    { question: "¿MusicPod es gratis?", answer: "Sí. MusicPod se descarga gratis en App Store." },
    { question: "¿Necesito una suscripción a Apple Music?", answer: "Sí. MusicPod reproduce tu biblioteca con MusicKit, por lo que necesitas una suscripción activa a Apple Music para escuchar tus canciones en streaming." },
    { question: "¿Qué iPhones son compatibles?", answer: "Cualquier iPhone con iOS 17 o posterior." },
    { question: "¿Puedo reproducir mis propios archivos de audio?", answer: "Sí. Además de tu biblioteca de Apple Music, MusicPod también reproduce los archivos de audio que importes a la app." },
    { question: "¿Necesito crear una cuenta?", answer: "No. MusicPod no requiere cuenta y los datos de reproducción se quedan en tu dispositivo. Consulta la Política de privacidad para más detalles." },
    { question: "¿Puedo personalizar el aspecto?", answer: "Sí. Elige entre 12 colores de cuerpo y rueda, 9 temas de fondo y dos estilos de iconos de inicio." },
  ] },
  availability: { kicker: "Ya disponible", title: "Descarga MusicPod.", body: "La experiencia musical del iPod, ya en App Store.", badgeKicker: "Descárgalo en", badge: "App Store", requirement: "Compatible con iOS 17 o posterior · Requiere Apple Music" },
  footer: { rights: "Todos los derechos reservados.", privacy: "Política de privacidad", ipodMusic: "Música de iPod en iPhone", developer: "Un producto independiente de" },
};

const fr: Messages = {
  meta: { title: "MusicPod — La musique de l’iPod renaît sur iPhone", description: "L’expérience musicale de l’iPod classique sur votre iPhone. Tournez la molette, parcourez votre bibliothèque Apple Music, et écoutez, simplement.", social: "Tournez, cliquez, écoutez. La musique de l’iPod renaît sur iPhone." },
  skip: "Aller au contenu",
  nav: { home: "Accueil MusicPod", label: "Navigation principale", experience: "Expérience", highlights: "Fonctions", personalize: "Personnaliser", language: "Langue", soon: "Bientôt disponible" },
  theme: { label: "Apparence", system: "Système", light: "Clair", dark: "Sombre" },
  hero: { kicker: "L’expérience musicale de l’iPod, sur iPhone", title: ["La musique de l’iPod,", "renaît sur iPhone."], body: "L’iPod classique, reconstruit en app iPhone native. Molette cliquable, Cover Flow et toute votre bibliothèque Apple Music sous le pouce.", primaryKicker: "Télécharger dans", primary: "App Store", secondary: "Découvrir MusicPod", badges: ["Conçu pour iPhone", "Apple Music", "iOS 17+"], productLabel: "Interface réelle de l’app MusicPod", screenshotAlt: "Écran d’accueil MusicPod avec morceaux favoris, mini-lecteur et molette rouge", actual: "Interface réelle", native: "SwiftUI natif" },
  mantra: { label: "MusicPod en trois gestes", eyebrow: "La sensation de l’iPod, de retour sur iPhone.", words: ["Cliquez.", "Tournez.", "Écoutez."] },
  wheel: { kicker: "Molette cliquable", title: "La molette cliquable est de retour.", body: "Tournez pour parcourir. Cliquez pour choisir. Chaque étape répond par un retour haptique natif.", try: "Essayez la molette", help: "Glissez autour de la molette ou utilisez les touches fléchées", group: "Démonstration de la molette MusicPod", menu: "Revenir au premier élément", previous: "Élément précédent", next: "Élément suivant", play: "Lire l’élément sélectionné", select: "Sélectionner {item}", selected: "Sélection : {item}", playing: "Lecture : {item}", items: ["Morceaux favoris", "Playlists", "Albums", "Aléatoire", "Thème"] },
  highlights: { kicker: "L’essentiel", title: "Tout ce dont la musique a besoin. Rien de plus.", library: { kicker: "Bibliothèque Apple Music", title: "Votre bibliothèque, à un tour de molette.", body: "Favoris, playlists, albums et lecture aléatoire, au bout du pouce.", items: ["Favoris", "Playlists", "Albums", "Aléatoire"] }, coverFlow: { kicker: "Cover Flow", title: "Les pochettes retrouvent le premier rôle.", body: "Parcourez les albums, puis retournez-en un pour afficher les titres." }, nowPlaying: { kicker: "À l’écoute", title: "Tout l’écran pour chaque morceau.", body: "Pochette, durée et commandes. Rien de superflu.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "À votre image", title: "Un lecteur. Entièrement le vôtre.", body: "Choisissez le boîtier, la molette, l’écran, le fond, l’orientation et la lumière.", palette: "12 couleurs réelles de boîtier et molette", combinations: "Combinaisons de couleurs classiques", presets: ["MusicPod Original", "Classic argent", "Classic noir", "Classic blanc", "Édition rouge", "nano orange", "nano jaune", "mini vert", "nano turquoise", "nano bleu", "nano violet", "nano rose"], stats: [{ value: "12", label: "couleurs de boîtier et molette" }, { value: "9", label: "thèmes d’arrière-plan" }, { value: "2", label: "langues d’icônes" }] },
  native: { kicker: "Natif par conception", title: "Nostalgique dans la forme. Natif dans l’âme.", body: "Conçu avec les technologies Apple pour une lecture fluide, un retour haptique précis et une navigation accessible.", technologies: ["SwiftUI", "MusicKit", "Haptique", "VoiceOver"] },
  faq: { kicker: "Questions fréquentes", title: "Vos questions, nos réponses.", items: [
    { question: "Qu’est-ce que MusicPod ?", answer: "MusicPod est un lecteur de musique de style iPod pour iPhone. Il recrée l’expérience de l’iPod classique —molette cliquable, Cover Flow, lecture plein écran— et lit votre bibliothèque Apple Music via MusicKit. MusicPod est une app indépendante, sans lien avec Apple." },
    { question: "Existe-t-il une app iPod pour iPhone ?", answer: "Oui. MusicPod est une app iPod pour iPhone : elle fait revenir la molette cliquable, Cover Flow et les menus classiques, et lit votre bibliothèque Apple Music. Téléchargez-la gratuitement sur l’App Store." },
    { question: "MusicPod est-il gratuit ?", answer: "Oui. MusicPod se télécharge gratuitement sur l’App Store." },
    { question: "Ai-je besoin d’un abonnement Apple Music ?", answer: "Oui. MusicPod lit votre bibliothèque via MusicKit : un abonnement Apple Music actif est donc requis pour écouter vos morceaux en streaming." },
    { question: "Quels iPhone sont compatibles ?", answer: "Tous les iPhone sous iOS 17 ou version ultérieure." },
    { question: "Puis-je lire mes propres fichiers audio ?", answer: "Oui. En plus de votre bibliothèque Apple Music, MusicPod lit aussi les fichiers audio que vous importez dans l’app." },
    { question: "Dois-je créer un compte ?", answer: "Non. MusicPod ne nécessite aucun compte et vos données de lecture restent sur votre appareil. Consultez la politique de confidentialité pour en savoir plus." },
    { question: "Puis-je personnaliser l’apparence ?", answer: "Oui. Choisissez parmi 12 couleurs de boîtier et molette, 9 thèmes d’arrière-plan et deux styles d’icônes d’accueil." },
  ] },
  availability: { kicker: "Disponible", title: "Téléchargez MusicPod.", body: "L’expérience musicale de l’iPod, désormais sur l’App Store.", badgeKicker: "Télécharger dans", badge: "App Store", requirement: "Compatible avec iOS 17 ou version ultérieure · Abonnement Apple Music requis" },
  footer: { rights: "Tous droits réservés.", privacy: "Politique de confidentialité", ipodMusic: "Musique d’iPod sur iPhone", developer: "Un produit indépendant par" },
};

const de: Messages = {
  meta: { title: "MusicPod — iPod-Musik, zurück auf dem iPhone", description: "Das Musikerlebnis des klassischen iPod auf deinem iPhone. Drehe das Click Wheel, stöbere durch deine Apple Music-Mediathek und hör einfach Musik.", social: "Drehen, klicken, hören. iPod-Musik, neu geboren auf dem iPhone." },
  skip: "Zum Inhalt springen",
  nav: { home: "MusicPod Startseite", label: "Hauptnavigation", experience: "Erlebnis", highlights: "Funktionen", personalize: "Personalisieren", language: "Sprache", soon: "Demnächst" },
  theme: { label: "Darstellung", system: "System", light: "Hell", dark: "Dunkel" },
  hero: { kicker: "Das iPod-Musikerlebnis, auf dem iPhone", title: ["iPod-Musik,", "zurück auf dem iPhone."], body: "Der klassische iPod, neu gebaut als native iPhone-App. Click Wheel, Cover Flow und deine gesamte Apple Music-Mediathek unter dem Daumen.", primaryKicker: "Laden im", primary: "App Store", secondary: "MusicPod entdecken", badges: ["Für iPhone gemacht", "Apple Music", "iOS 17+"], productLabel: "Echte Benutzeroberfläche der MusicPod App", screenshotAlt: "MusicPod-Startbildschirm mit Lieblingstiteln, Miniplayer und rotem Click Wheel", actual: "Echte Oberfläche", native: "Natives SwiftUI" },
  mantra: { label: "MusicPod in drei Gesten", eyebrow: "Das iPod-Gefühl, zurück auf dem iPhone.", words: ["Klicken.", "Drehen.", "Hören."] },
  wheel: { kicker: "Click Wheel", title: "Das Click Wheel ist zurück.", body: "Drehen zum Suchen. Drücken zum Auswählen. Jeder Schritt antwortet mit nativem haptischem Feedback.", try: "Click Wheel ausprobieren", help: "Auf dem Rad wischen oder die Pfeiltasten verwenden", group: "Interaktives MusicPod Click Wheel", menu: "Zum ersten Eintrag zurückkehren", previous: "Vorheriger Eintrag", next: "Nächster Eintrag", play: "Ausgewählten Eintrag abspielen", select: "{item} auswählen", selected: "Ausgewählt: {item}", playing: "Wiedergabe: {item}", items: ["Lieblingstitel", "Playlists", "Alben", "Zufällig", "Design"] },
  highlights: { kicker: "Das Wesentliche", title: "Alles, was Musik braucht. Sonst nichts.", library: { kicker: "Apple Music-Mediathek", title: "Deine Mediathek. Eine Drehung entfernt.", body: "Lieblingstitel, Playlists, Alben und Zufallswiedergabe direkt unter deinem Daumen.", items: ["Lieblingstitel", "Playlists", "Alben", "Zufällig"] }, coverFlow: { kicker: "Cover Flow", title: "Cover stehen wieder im Mittelpunkt.", body: "Durch Alben drehen und umklappen, um die Titelliste zu sehen." }, nowPlaying: { kicker: "Aktuelle Wiedergabe", title: "Der ganze Bildschirm für jeden Song.", body: "Cover, Zeit und Steuerung. Ohne Ablenkung.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Mach ihn zu deinem", title: "Ein Player. Ganz deiner.", body: "Wähle Gehäuse, Rad, Display, Hintergrund, Ausrichtung und Leuchten.", palette: "12 echte Gehäuse- und Radfarben", combinations: "Klassische Farbkombinationen", presets: ["MusicPod Original", "Classic Silber", "Classic Schwarz", "Classic Weiß", "Red Edition", "nano Orange", "nano Gelb", "mini Grün", "nano Türkis", "nano Blau", "nano Violett", "nano Pink"], stats: [{ value: "12", label: "Gehäuse- und Radfarben" }, { value: "9", label: "Hintergrundthemen" }, { value: "2", label: "Symbolsprachen" }] },
  native: { kicker: "Von Grund auf nativ", title: "Nostalgisch in der Form. Nativ im Kern.", body: "Mit Apple-Technologien für flüssige Wiedergabe, präzise Haptik und barrierefreie Navigation.", technologies: ["SwiftUI", "MusicKit", "Haptik", "VoiceOver"] },
  faq: { kicker: "Häufige Fragen", title: "Antworten auf deine Fragen.", items: [
    { question: "Was ist MusicPod?", answer: "MusicPod ist ein Musikplayer im iPod-Stil für das iPhone. Er lässt das Erlebnis des klassischen iPod wiederaufleben – Click Wheel, Cover Flow, Wiedergabe im Vollbild – und spielt über MusicKit deine Apple Music-Mediathek ab. MusicPod ist eine unabhängige App ohne Verbindung zu Apple." },
    { question: "Gibt es eine iPod-App für das iPhone?", answer: "Ja. MusicPod ist eine iPod-App für das iPhone: Sie bringt Click Wheel, Cover Flow und die klassischen Menüs zurück und spielt deine Apple Music-Mediathek ab. Kostenlos im App Store." },
    { question: "Ist MusicPod kostenlos?", answer: "Ja. MusicPod kannst du kostenlos im App Store laden." },
    { question: "Brauche ich ein Apple Music-Abo?", answer: "Ja. MusicPod gibt deine Mediathek über MusicKit wieder – für das Streamen deiner Musik ist ein aktives Apple Music-Abo erforderlich." },
    { question: "Welche iPhones werden unterstützt?", answer: "Alle iPhones mit iOS 17 oder neuer." },
    { question: "Kann ich eigene Audiodateien abspielen?", answer: "Ja. Neben deiner Apple Music-Mediathek spielt MusicPod auch Audiodateien ab, die du in die App importierst." },
    { question: "Brauche ich ein Konto?", answer: "Nein. MusicPod kommt ohne Konto aus, und deine Wiedergabedaten bleiben auf dem Gerät. Details findest du in der Datenschutzerklärung." },
    { question: "Kann ich das Aussehen anpassen?", answer: "Ja. Wähle aus 12 Gehäuse- und Radfarben, 9 Hintergrundthemen und zwei Symbolstilen für den Startbildschirm." },
  ] },
  availability: { kicker: "Jetzt erhältlich", title: "MusicPod laden.", body: "Das iPod-Musikerlebnis, jetzt im App Store.", badgeKicker: "Laden im", badge: "App Store", requirement: "Kompatibel mit iOS 17 oder neuer · Apple Music-Abo erforderlich" },
  footer: { rights: "Alle Rechte vorbehalten.", privacy: "Datenschutzerklärung", ipodMusic: "iPod-Musik auf dem iPhone", developer: "Ein unabhängiges Produkt von" },
};

const ptBR: Messages = {
  meta: { title: "MusicPod — Música de iPod, renascida no iPhone", description: "A experiência musical do iPod clássico no seu iPhone. Gire a click wheel, explore sua biblioteca do Apple Music e simplesmente ouça.", social: "Gire, clique e ouça. A música do iPod clássico, renascida no iPhone." },
  skip: "Pular para o conteúdo",
  nav: { home: "Início do MusicPod", label: "Navegação principal", experience: "Experiência", highlights: "Recursos", personalize: "Personalize", language: "Idioma", soon: "Em breve" },
  theme: { label: "Aparência", system: "Sistema", light: "Claro", dark: "Escuro" },
  hero: { kicker: "A experiência musical do iPod, no iPhone", title: ["Música de iPod,", "renascida no iPhone."], body: "O iPod clássico, reconstruído como app nativo de iPhone. Click wheel, Cover Flow e toda a sua biblioteca do Apple Music sob o polegar.", primaryKicker: "Baixe na", primary: "App Store", secondary: "Conheça o MusicPod", badges: ["Feito para iPhone", "Apple Music", "iOS 17+"], productLabel: "Interface real do app MusicPod", screenshotAlt: "Tela inicial do MusicPod com músicas favoritas, miniplayer e click wheel vermelha", actual: "Interface real", native: "SwiftUI nativo" },
  mantra: { label: "MusicPod em três gestos", eyebrow: "Aquele sentimento do iPod, de volta ao iPhone.", words: ["Clique.", "Gire.", "Ouça."] },
  wheel: { kicker: "Click wheel", title: "A click wheel está de volta.", body: "Gire para navegar. Clique para escolher. Cada passo responde com retorno tátil nativo.", try: "Experimente a roda", help: "Deslize ao redor da roda ou use as teclas de seta", group: "Demonstração da click wheel do MusicPod", menu: "Voltar ao primeiro item", previous: "Item anterior", next: "Próximo item", play: "Reproduzir item selecionado", select: "Selecionar {item}", selected: "Selecionado: {item}", playing: "Reproduzindo: {item}", items: ["Favoritas", "Playlists", "Álbuns", "Aleatório", "Tema"] },
  highlights: { kicker: "O essencial", title: "Tudo que a música precisa. Nada além.", library: { kicker: "Biblioteca do Apple Music", title: "Sua biblioteca, a um giro.", body: "Favoritas, playlists, álbuns e aleatório ao alcance do polegar.", items: ["Favoritas", "Playlists", "Álbuns", "Aleatório"] }, coverFlow: { kicker: "Cover Flow", title: "As capas voltam ao centro do palco.", body: "Gire pelos álbuns e vire um deles para ver as faixas." }, nowPlaying: { kicker: "Reproduzindo", title: "A tela inteira para cada música.", body: "Capa, tempo e controles. Sem distrações.", track: "Midnight Memory", artist: "MusicPod Sessions" } },
  personalize: { kicker: "Deixe do seu jeito", title: "Um player. Totalmente seu.", body: "Escolha corpo, roda, tela, fundo, direção e brilho.", palette: "12 cores reais de corpo e roda", combinations: "Combinações de cores clássicas", presets: ["MusicPod Original", "Classic prateado", "Classic preto", "Classic branco", "Edição vermelha", "nano laranja", "nano amarelo", "mini verde", "nano turquesa", "nano azul", "nano roxo", "nano rosa"], stats: [{ value: "12", label: "cores de corpo e roda" }, { value: "9", label: "temas de fundo" }, { value: "2", label: "idiomas de ícones" }] },
  native: { kicker: "Nativo por design", title: "Nostálgico na forma. Nativo por dentro.", body: "Criado com tecnologias Apple para reprodução fluida, resposta tátil precisa e navegação acessível.", technologies: ["SwiftUI", "MusicKit", "Resposta tátil", "VoiceOver"] },
  faq: { kicker: "Perguntas frequentes", title: "Suas dúvidas, respondidas.", items: [
    { question: "O que é o MusicPod?", answer: "O MusicPod é um player de música estilo iPod para iPhone. Ele recria a experiência do iPod clássico —click wheel, Cover Flow, reprodução em tela cheia— e toca sua biblioteca do Apple Music pelo MusicKit. O MusicPod é um app independente, sem afiliação com a Apple." },
    { question: "Existe um app de iPod para iPhone?", answer: "Sim. O MusicPod é um app de iPod para iPhone: traz de volta a click wheel, o Cover Flow e os menus clássicos, e toca sua biblioteca do Apple Music. Baixe grátis na App Store." },
    { question: "O MusicPod é gratuito?", answer: "Sim. O MusicPod pode ser baixado gratuitamente na App Store." },
    { question: "Preciso de assinatura do Apple Music?", answer: "Sim. O MusicPod reproduz sua biblioteca com o MusicKit, então é preciso uma assinatura ativa do Apple Music para ouvir suas músicas em streaming." },
    { question: "Quais iPhones são compatíveis?", answer: "Qualquer iPhone com iOS 17 ou posterior." },
    { question: "Posso tocar meus próprios arquivos de áudio?", answer: "Sim. Além da sua biblioteca do Apple Music, o MusicPod também reproduz arquivos de áudio importados para o app." },
    { question: "Preciso criar uma conta?", answer: "Não. O MusicPod não exige conta e os dados de reprodução ficam no seu dispositivo. Veja a Política de Privacidade para mais detalhes." },
    { question: "Posso personalizar a aparência?", answer: "Sim. Escolha entre 12 cores de corpo e roda, 9 temas de fundo e dois estilos de ícones da tela inicial." },
  ] },
  availability: { kicker: "Já disponível", title: "Baixe o MusicPod.", body: "A experiência musical do iPod, já na App Store.", badgeKicker: "Baixe na", badge: "App Store", requirement: "Compatível com iOS 17 ou posterior · Requer Apple Music" },
  footer: { rights: "Todos os direitos reservados.", privacy: "Política de Privacidade", ipodMusic: "Música de iPod no iPhone", developer: "Um produto independente de" },
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

import type { Locale } from "./locales";

export type IpodMusicMessages = {
  meta: { title: string; description: string; social: string };
  pageLabel: string;
  back: string;
  toc: string;
  hero: { eyebrow: string; title: string; intro: string };
  pillars: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }];
  sections: ReadonlyArray<{ id: string; title: string; paragraphs: string[]; items?: string[] }>;
  faq: { kicker: string; title: string; items: ReadonlyArray<{ question: string; answer: string }> };
  cta: { kicker: string; title: string; body: string; badgeKicker: string; badge: string; requirement: string };
};

/**
 * Section ids are locale-independent so the table of contents anchors and the
 * JSON-LD stay stable across translations.
 */
export const IPOD_MUSIC_SECTION_IDS = ["made-special", "where-it-went", "meet-musicpod", "experience", "get-started"] as const;

const en: IpodMusicMessages = {
  meta: {
    title: "iPod Music on iPhone: How to Get It Back — MusicPod",
    description: "Bring iPod music back to your iPhone. MusicPod recreates the classic iPod — click wheel, Cover Flow, full-screen now playing — and plays your Apple Music library. Free on the App Store.",
    social: "The iPod is gone. The feeling isn't. Get iPod music back on iPhone with MusicPod.",
  },
  pageLabel: "iPod music",
  back: "Back to MusicPod",
  toc: "On this page",
  hero: {
    eyebrow: "The guide",
    title: "iPod music, back on iPhone",
    intro: "The classic iPod made listening physical — turn, click, flip through Cover Flow. This guide brings that exact experience back to the iPhone you already own.",
  },
  pillars: [
    { title: "Turn", body: "A click wheel that scrolls, clicks, and answers with haptics — just like the original." },
    { title: "Flip", body: "Cover Flow returns: glide through albums, flip one over for the track list." },
    { title: "Listen", body: "Your Apple Music library, served in the simple menus the iPod made famous." },
  ],
  sections: [
    {
      id: "made-special",
      title: "What made iPod music special",
      paragraphs: [
        "The iPod was not the first digital music player, but it was the first that felt right. You did not tap through flat menus — you turned a wheel, felt it click, and flipped through albums in Cover Flow.",
        "Every detail served the music: a screen with one job, controls you could use without looking, and a library that unfolded under your thumb. What people miss is not the hardware. It is the ritual.",
      ],
    },
    {
      id: "where-it-went",
      title: "Where iPod music went",
      paragraphs: [
        "Apple discontinued the iPod classic in 2014 and retired the last iPod in 2022. The Music app on iPhone is more capable in every measurable way: tens of millions of songs, instant streaming, powerful library tools.",
        "But capability is not the same as joy. Somewhere between autoplay and algorithmic radio, the simple pleasure of turning a wheel and clicking into an album quietly disappeared.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "Meet MusicPod: an iPod music player for iPhone",
      paragraphs: [
        "MusicPod is a free iPhone app that brings iPod music back. It recreates the classic interface — click wheel, Cover Flow, simple menus — and streams your Apple Music library through Apple’s MusicKit.",
        "MusicPod is built by an independent developer and is not affiliated with Apple. There is no account and no tracking; playback data stays on your device.",
      ],
      items: [
        "Click wheel with native haptics",
        "Cover Flow for flipping through albums",
        "Full-screen now playing",
        "12 classic body and wheel colors",
        "Plays audio files imported into the app",
      ],
    },
    {
      id: "experience",
      title: "The experience, recreated",
      paragraphs: [
        "The click wheel behaves like the original: slide to scroll, press to select, with haptic feedback at every step. Cover Flow returns with its album-flipping gesture, and now playing gives every song the entire screen.",
        "You can even dress it like the iPod you remember — classic silver, black, or white, the red special edition, or the nano rainbow.",
      ],
    },
    {
      id: "get-started",
      title: "How to start listening",
      paragraphs: [
        "Download MusicPod free from the App Store and sign in with Apple Music. Your favorites, playlists, and albums appear in the familiar menus, one turn of the wheel away.",
      ],
      items: [
        "Any iPhone with iOS 17 or later",
        "An Apple Music subscription for streaming",
        "Imported audio files play without a subscription",
      ],
    },
  ],
  faq: {
    kicker: "FAQ",
    title: "iPod music on iPhone, answered.",
    items: [
      { question: "Can you get iPod music on an iPhone?", answer: "Yes. MusicPod is an iPod-style music player for iPhone that recreates the classic iPod experience — click wheel, Cover Flow, full-screen now playing — while streaming from your Apple Music library." },
      { question: "Is there an iPod app for iPhone?", answer: "Yes — MusicPod. It is a free app that looks, sounds, and clicks like a classic iPod and plays your Apple Music library through MusicKit." },
      { question: "Does MusicPod need Apple Music?", answer: "Streaming your library requires an active Apple Music subscription. Audio files you import into the app play without one." },
      { question: "Is MusicPod made by Apple?", answer: "No. MusicPod is an independent app by LeaveStyle and is not affiliated with Apple Inc. iPod, iPhone, and Apple Music are trademarks of Apple Inc." },
      { question: "Is MusicPod free?", answer: "Yes. MusicPod is free to download on the App Store." },
    ],
  },
  cta: {
    kicker: "Get MusicPod",
    title: "iPod music, back on your iPhone.",
    body: "Free on the App Store — your library is waiting.",
    badgeKicker: "Download on the",
    badge: "App Store",
    requirement: "Compatible with iOS 17 or later · Apple Music subscription required for streaming",
  },
};

const zhCN: IpodMusicMessages = {
  meta: {
    title: "在 iPhone 上听 iPod 音乐：找回经典体验 — MusicPod",
    description: "在 iPhone 上找回 iPod 音乐体验。MusicPod 还原经典 iPod——点按式转盘、Cover Flow、全屏正在播放——并播放你的 Apple Music 资料库，App Store 免费下载。",
    social: "iPod 已成历史，那种感觉还在。用 MusicPod 在 iPhone 上找回 iPod 音乐。",
  },
  pageLabel: "iPod 音乐",
  back: "返回 MusicPod",
  toc: "本页目录",
  hero: {
    eyebrow: "专题指南",
    title: "iPod 音乐，重回 iPhone",
    intro: "经典 iPod 让听歌成为一种触感仪式——转动、点按、翻阅封面。这篇指南带你把那种体验，原样带回你的 iPhone。",
  },
  pillars: [
    { title: "转动", body: "点按式转盘会滑动、会点按、每一步都有触感反馈——和原版一样。" },
    { title: "翻阅", body: "Cover Flow 回来了：滑动浏览专辑，翻面查看曲目。" },
    { title: "聆听", body: "你的 Apple Music 资料库，装在 iPod 成名的简洁菜单里。" },
  ],
  sections: [
    {
      id: "made-special",
      title: "iPod 音乐为何特别",
      paragraphs: [
        "iPod 不是最早的数字音乐播放器，却是第一台“感觉对”的。你不用在扁平菜单里戳来戳去——你转动转盘，感受它的点按，在 Cover Flow 里翻阅专辑。",
        "每个细节都为音乐服务：一块只做一件事的屏幕、不用看也能操作的按键、在拇指下展开的资料库。人们怀念的不是那台机器，而是那套仪式。",
      ],
    },
    {
      id: "where-it-went",
      title: "iPod 音乐去哪儿了",
      paragraphs: [
        "Apple 在 2014 年停产了 iPod classic，2022 年送别了最后一台 iPod。iPhone 上的音乐 App 在所有可量化的维度上都更强：数千万首歌曲、即时串流、强大的资料库工具。",
        "但强大不等于快乐。在自动播放与算法电台之间，转动转盘、点进一张专辑的简单快乐，悄悄消失了。",
      ],
    },
    {
      id: "meet-musicpod",
      title: "认识 MusicPod：iPhone 上的 iPod 音乐播放器",
      paragraphs: [
        "MusicPod 是一款免费的 iPhone 应用，把 iPod 音乐带了回来。它还原经典界面——点按式转盘、Cover Flow、简洁菜单——并通过 Apple 的 MusicKit 串流你的 Apple Music 资料库。",
        "MusicPod 由独立开发者打造，与 Apple 无关联。没有账号、没有追踪，播放数据只留在你的设备上。",
      ],
      items: [
        "带原生触感反馈的点按式转盘",
        "翻阅专辑的 Cover Flow",
        "全屏正在播放",
        "12 种经典机身与转盘配色",
        "也支持播放导入的音频文件",
      ],
    },
    {
      id: "experience",
      title: "还原的体验",
      paragraphs: [
        "转盘的手感和原版一致：滑动浏览，按下选择，每一步都有触感反馈。Cover Flow 带着翻专辑的手势回归，正在播放把整块屏幕留给每一首歌。",
        "你甚至可以把它打扮成你记忆中的那台——经典银、黑、白，红色特别版，或 nano 的彩虹配色。",
      ],
    },
    {
      id: "get-started",
      title: "如何开始聆听",
      paragraphs: [
        "在 App Store 免费下载 MusicPod，登录 Apple Music，你的喜爱歌曲、播放列表和专辑就会出现在熟悉的菜单里，一转即达。",
      ],
      items: [
        "任何运行 iOS 17 或更高系统的 iPhone",
        "串流播放需要有效的 Apple Music 订阅",
        "导入的音频文件无需订阅即可播放",
      ],
    },
  ],
  faq: {
    kicker: "常见问题",
    title: "关于 iPhone 上的 iPod 音乐",
    items: [
      { question: "iPhone 上能听 iPod 音乐吗？", answer: "可以。MusicPod 是一款 iPod 风格的 iPhone 音乐播放器，还原经典 iPod 体验——点按式转盘、Cover Flow、全屏正在播放——同时串流你的 Apple Music 资料库。" },
      { question: "iPhone 上有 iPod 应用吗？", answer: "有，就是 MusicPod。它是一款免费应用，外观、声音和点按手感都像一台经典 iPod，并通过 MusicKit 播放你的 Apple Music 资料库。" },
      { question: "MusicPod 需要 Apple Music 吗？", answer: "串流播放资料库需要有效的 Apple Music 订阅；导入到应用内的音频文件无需订阅即可播放。" },
      { question: "MusicPod 是 Apple 出品的吗？", answer: "不是。MusicPod 是 LeaveStyle 独立开发的应用，与 Apple Inc. 无关联。iPod、iPhone 和 Apple Music 是 Apple Inc. 的商标。" },
      { question: "MusicPod 是免费的吗？", answer: "是。MusicPod 在 App Store 免费下载。" },
    ],
  },
  cta: {
    kicker: "下载 MusicPod",
    title: "iPod 音乐，重回你的 iPhone。",
    body: "App Store 免费下载——你的资料库在等你。",
    badgeKicker: "下载自",
    badge: "App Store",
    requirement: "兼容 iOS 17 及更高版本 · 串流播放需要 Apple Music 订阅",
  },
};

const zhTW: IpodMusicMessages = {
  meta: {
    title: "在 iPhone 上聽 iPod 音樂：找回經典體驗 — MusicPod",
    description: "在 iPhone 上找回 iPod 音樂體驗。MusicPod 重現經典 iPod——點按式轉盤、Cover Flow、全螢幕播放畫面——並播放你的 Apple Music 資料庫，App Store 免費下載。",
    social: "iPod 已成歷史，那種感覺還在。用 MusicPod 在 iPhone 上找回 iPod 音樂。",
  },
  pageLabel: "iPod 音樂",
  back: "返回 MusicPod",
  toc: "本頁目錄",
  hero: {
    eyebrow: "專題指南",
    title: "iPod 音樂，重回 iPhone",
    intro: "經典 iPod 讓聽歌成為一種觸感儀式——轉動、點按、翻閱封面。這篇指南帶你把那種體驗，原樣帶回你的 iPhone。",
  },
  pillars: [
    { title: "轉動", body: "點按式轉盤會滑動、會點按、每一步都有觸感回饋——和原版一樣。" },
    { title: "翻閱", body: "Cover Flow 回來了：滑動瀏覽專輯，翻面查看曲目。" },
    { title: "聆聽", body: "你的 Apple Music 資料庫，裝在 iPod 成名的簡潔選單裡。" },
  ],
  sections: [
    {
      id: "made-special",
      title: "iPod 音樂為何特別",
      paragraphs: [
        "iPod 不是最早的數位音樂播放器，卻是第一台「感覺對」的。你不用在扁平選單裡戳來戳去——你轉動轉盤，感受它的點按，在 Cover Flow 裡翻閱專輯。",
        "每個細節都為音樂服務：一塊只做一件事的螢幕、不用看也能操作的按鍵、在拇指下展開的資料庫。人們懷念的不是那台機器，而是那套儀式。",
      ],
    },
    {
      id: "where-it-went",
      title: "iPod 音樂去哪兒了",
      paragraphs: [
        "Apple 在 2014 年停產 iPod classic，2022 年送別了最後一台 iPod。iPhone 上的音樂 App 在所有可量化的維度上都更強：數千萬首歌曲、即時串流、強大的資料庫工具。",
        "但強大不等於快樂。在自動播放與演算法電台之間，轉動轉盤、點進一張專輯的簡單快樂，悄悄消失了。",
      ],
    },
    {
      id: "meet-musicpod",
      title: "認識 MusicPod：iPhone 上的 iPod 音樂播放器",
      paragraphs: [
        "MusicPod 是一款免費的 iPhone App，把 iPod 音樂帶了回來。它重現經典介面——點按式轉盤、Cover Flow、簡潔選單——並透過 Apple 的 MusicKit 串流你的 Apple Music 資料庫。",
        "MusicPod 由獨立開發者打造，與 Apple 無關聯。沒有帳號、沒有追蹤，播放資料只留在你的裝置上。",
      ],
      items: [
        "帶原生觸感回饋的點按式轉盤",
        "翻閱專輯的 Cover Flow",
        "全螢幕播放畫面",
        "12 種經典機身與轉盤配色",
        "也支援播放匯入的音訊檔案",
      ],
    },
    {
      id: "experience",
      title: "重現的體驗",
      paragraphs: [
        "轉盤的手感和原版一致：滑動瀏覽，按下選擇，每一步都有觸感回饋。Cover Flow 帶著翻專輯的手勢回歸，播放畫面把整塊螢幕留給每一首歌。",
        "你甚至可以把它打扮成你記憶中的那台——經典銀、黑、白，紅色特別版，或 nano 的彩虹配色。",
      ],
    },
    {
      id: "get-started",
      title: "如何開始聆聽",
      paragraphs: [
        "在 App Store 免費下載 MusicPod，登入 Apple Music，你的喜愛歌曲、播放列表和專輯就會出現在熟悉的選單裡，一轉即達。",
      ],
      items: [
        "任何安裝 iOS 17 或以上版本的 iPhone",
        "串流播放需要有效的 Apple Music 訂閱",
        "匯入的音訊檔案無需訂閱即可播放",
      ],
    },
  ],
  faq: {
    kicker: "常見問題",
    title: "關於 iPhone 上的 iPod 音樂",
    items: [
      { question: "iPhone 上能聽 iPod 音樂嗎？", answer: "可以。MusicPod 是一款 iPod 風格的 iPhone 音樂播放器，重現經典 iPod 體驗——點按式轉盤、Cover Flow、全螢幕播放畫面——同時串流你的 Apple Music 資料庫。" },
      { question: "iPhone 上有 iPod App 嗎？", answer: "有，就是 MusicPod。它是一款免費 App，外觀、聲音和點按手感都像一台經典 iPod，並透過 MusicKit 播放你的 Apple Music 資料庫。" },
      { question: "MusicPod 需要 Apple Music 嗎？", answer: "串流播放資料庫需要有效的 Apple Music 訂閱；匯入到 App 內的音訊檔案無需訂閱即可播放。" },
      { question: "MusicPod 是 Apple 出品的嗎？", answer: "不是。MusicPod 是 LeaveStyle 獨立開發的 App，與 Apple Inc. 無關聯。iPod、iPhone 和 Apple Music 是 Apple Inc. 的商標。" },
      { question: "MusicPod 是免費的嗎？", answer: "是。MusicPod 在 App Store 免費下載。" },
    ],
  },
  cta: {
    kicker: "下載 MusicPod",
    title: "iPod 音樂，重回你的 iPhone。",
    body: "App Store 免費下載——你的資料庫在等你。",
    badgeKicker: "下載自",
    badge: "App Store",
    requirement: "相容於 iOS 17 或以上版本 · 串流播放需要 Apple Music 訂閱",
  },
};

const ja: IpodMusicMessages = {
  meta: {
    title: "iPhoneでiPodの音楽を聴く：取り戻す方法 — MusicPod",
    description: "iPhoneにiPodの音楽体験を取り戻す。MusicPodはクリックホイール、Cover Flow、全画面再生であのiPodを再現し、Apple Musicライブラリを再生します。App Storeで無料。",
    social: "iPodは終わっても、あの感覚は残っている。MusicPodで、iPhoneにiPodの音楽を。",
  },
  pageLabel: "iPodの音楽",
  back: "MusicPodに戻る",
  toc: "このページの内容",
  hero: {
    eyebrow: "ガイド",
    title: "iPodの音楽、iPhoneに帰ってくる",
    intro: "クラシックなiPodは、聴くことを身体の儀式にしました。回して、押して、カバーをめくる。このガイドで、その体験をそのままiPhoneに取り戻せます。",
  },
  pillars: [
    { title: "回す", body: "クリックホイールは滑らかに回り、押して選べる。一歩ごとに触覚が応えます。" },
    { title: "めくる", body: "Cover Flowが帰ってきた。アルバムをめくり、裏返せば曲目一覧。" },
    { title: "聴く", body: "Apple Musicライブラリが、あのiPodのシンプルなメニューに。" },
  ],
  sections: [
    {
      id: "made-special",
      title: "iPodの音楽が特別だった理由",
      paragraphs: [
        "iPodは最初のデジタルミュージックプレーヤーではありませんが、初めて「気持ちいい」と思わせた一台でした。平坦なメニューをタップするのではなく、ホイールを回し、その手応えを感じ、Cover Flowでアルバムをめくりました。",
        "すべてのディテールが音楽に奉仕していました。一つの仕事だけをする画面、見なくても操作できるボタン、親指の下に広がるライブラリ。人が恋しがるのはハードウェアではなく、あの儀式です。",
      ],
    },
    {
      id: "where-it-went",
      title: "iPodの音楽はどこへ行ったのか",
      paragraphs: [
        "Appleは2014年にiPod classicの生産を終え、2022年に最後のiPodを送り出しました。iPhoneのミュージックAppは、あらゆる面で強力です。数千万曲、即時ストリーミング、高度なライブラリ機能。",
        "しかし、強力であることと、楽しいことは別です。オートプレイとアルゴリズムのラジオの間で、ホイールを回してアルバムに入っていく、あのシンプルな喜びは静かに消えていました。",
      ],
    },
    {
      id: "meet-musicpod",
      title: "MusicPod：iPhoneのためのiPodミュージックプレーヤー",
      paragraphs: [
        "MusicPodは、iPodの音楽を取り戻す無料のiPhoneアプリです。クリックホイール、Cover Flow、シンプルなメニューという古典的なインターフェースを再現し、AppleのMusicKit経由でApple Musicライブラリを再生します。",
        "MusicPodは独立開発者によるアプリで、Appleとは提携関係にありません。アカウントもトラッキングもなく、再生データは端末内に残ります。",
      ],
      items: [
        "ネイティブな触覚に応えるクリックホイール",
        "アルバムをめくるCover Flow",
        "全画面の再生画面",
        "12色のクラシックな本体とホイール",
        "取り込んだオーディオファイルも再生",
      ],
    },
    {
      id: "experience",
      title: "再現された体験",
      paragraphs: [
        "ホイールの操作感は本物と同じ。回してスクロール、押して選択、一歩ごとに触覚フィードバック。Cover Flowはアルバムをめくるジェスチャーとともに帰り、再生画面は一曲に画面いっぱいを捧げます。",
        "思い出の一台に着せることもできます。クラシックなシルバー、ブラック、ホワイト、レッドスペシャルエディション、nanoのレインボーまで。",
      ],
    },
    {
      id: "get-started",
      title: "聴きはじめるには",
      paragraphs: [
        "App StoreからMusicPodを無料でダウンロードし、Apple Musicにサインインするだけ。お気に入り、プレイリスト、アルバムが、使い慣れたメニューに現れます。",
      ],
      items: [
        "iOS 17以降が動作するすべてのiPhone",
        "ストリーミングには有効なApple Musicのサブスクリプション",
        "取り込んだオーディオファイルはサブスクなしで再生可能",
      ],
    },
  ],
  faq: {
    kicker: "よくある質問",
    title: "iPhoneのiPodの音楽について",
    items: [
      { question: "iPhoneでiPodの音楽は聴けますか？", answer: "聴けます。MusicPodはiPodスタイルのiPhone用ミュージックプレーヤーで、クリックホイール、Cover Flow、全画面再生という古典的なiPodの体験を再現しながら、Apple Musicライブラリをストリーミングします。" },
      { question: "iPhone用のiPodアプリはありますか？", answer: "あります。MusicPodです。クラシックなiPodのような見た目、サウンド、クリックの手応えで、MusicKitを通してApple Musicライブラリを再生する無料アプリです。" },
      { question: "MusicPodにApple Musicは必要ですか？", answer: "ライブラリのストリーミングには有効なApple Musicのサブスクリプションが必要です。アプリに取り込んだオーディオファイルは、サブスクなしで再生できます。" },
      { question: "MusicPodはAppleの製品ですか？", answer: "いいえ。MusicPodはLeaveStyleによる独立開発のアプリで、Appleとは提携関係にありません。iPod、iPhone、Apple MusicはApple Inc.の商標です。" },
      { question: "MusicPodは無料ですか？", answer: "はい。MusicPodはApp Storeから無料でダウンロードできます。" },
    ],
  },
  cta: {
    kicker: "MusicPodを入手",
    title: "iPodの音楽を、あなたのiPhoneに。",
    body: "App Storeで無料。あなたのライブラリが待っています。",
    badgeKicker: "App Storeからダウンロード",
    badge: "App Store",
    requirement: "iOS 17以降に対応 · ストリーミングにはApple Musicのサブスクリプションが必要",
  },
};

const ko: IpodMusicMessages = {
  meta: {
    title: "iPhone에서 iPod 음악 듣기: 되찾는 방법 — MusicPod",
    description: "iPhone에 iPod 음악 경험을 되살리세요. MusicPod는 클릭 휠, Cover Flow, 전체 화면 재생으로 그리운 iPod를 재현하고 Apple Music 보관함을 재생합니다. App Store 무료.",
    social: "iPod는 끝났어도 그 감각은 남아 있습니다. MusicPod로 iPhone에 iPod 음악을.",
  },
  pageLabel: "iPod 음악",
  back: "MusicPod로 돌아가기",
  toc: "이 페이지의 내용",
  hero: {
    eyebrow: "가이드",
    title: "iPod 음악, iPhone으로 돌아오다",
    intro: "클래식 iPod는 음악을 손끝의 의식으로 만들었습니다. 돌리고, 누르고, 표지를 넘기는. 이 가이드로 그 경험을 그대로 iPhone에 되찾을 수 있습니다.",
  },
  pillars: [
    { title: "돌리기", body: "클릭 휠은 미끄러지게 돌고, 눌러서 선택합니다. 한 걸음마다 햅틱이 응답합니다." },
    { title: "넘기기", body: "Cover Flow가 돌아왔습니다. 앨범을 넘기고 뒤집으면 트랙 목록이." },
    { title: "듣기", body: "Apple Music 보관함이 iPod가 유명하게 만든 간결한 메뉴 안에." },
  ],
  sections: [
    {
      id: "made-special",
      title: "iPod 음악이 특별했던 이유",
      paragraphs: [
        "iPod는 최초의 디지털 음악 플레이어는 아니었지만, 처음으로 '감각이 좋은' 플레이어였습니다. 납작한 메뉴를 두드리는 대신, 휠을 돌리고 그 반응을 느끼며 Cover Flow에서 앨범을 넘겼습니다.",
        "모든 디테일이 음악을 위해 존재했습니다. 한 가지 일만 하는 화면, 보지 않고도 조작되는 컨트롤, 엄지손가락 아래 펼쳐지는 보관함. 그리운 것은 기기가 아니라 그 의식입니다.",
      ],
    },
    {
      id: "where-it-went",
      title: "iPod 음악은 어디로 갔나",
      paragraphs: [
        "Apple은 2014년 iPod classic 생산을 중단했고, 2022년 마지막 iPod을 보냈습니다. iPhone의 Music 앱은 모든 면에서 더 강력합니다. 수천만 곡, 즉시 스트리밍, 강력한 보관함 도구.",
        "하지만 강력함은 즐거움이 아닙니다. 자동 재생과 알고리즘 라디오 사이 어딘가에서, 휠을 돌려 앨범으로 들어가는 단순한 기쁨은 조용히 사라졌습니다.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "MusicPod: iPhone을 위한 iPod 음악 플레이어",
      paragraphs: [
        "MusicPod는 iPod 음악을 되살리는 무료 iPhone 앱입니다. 클릭 휠, Cover Flow, 간결한 메뉴라는 클래식 인터페이스를 재현하고, Apple의 MusicKit으로 Apple Music 보관함을 스트리밍합니다.",
        "MusicPod는 독립 개발자가 만든 앱이며 Apple과 제휴 관계가 없습니다. 계정도 추적도 없고, 재생 데이터는 기기에만 남습니다.",
      ],
      items: [
        "네이티브 햅틱이 응답하는 클릭 휠",
        "앨범을 넘기는 Cover Flow",
        "전체 화면 재생 화면",
        "12가지 클래식 본체 및 휠 색상",
        "가져온 오디오 파일도 재생",
      ],
    },
    {
      id: "experience",
      title: "재현된 경험",
      paragraphs: [
        "휠의 조작감은 원본 그대로입니다. 돌려서 스크롤, 눌러서 선택, 한 걸음마다 햅틱 피드백. Cover Flow는 앨범 넘기기 제스처와 함께 돌아왔고, 재생 화면은 한 곡에 화면 전체를 바칩니다.",
        "기억 속 그 iPod로 꾸밀 수도 있습니다. 클래식 실버, 블랙, 화이트, 레드 스페셜 에디션, nano의 무지개까지.",
      ],
    },
    {
      id: "get-started",
      title: "어떻게 시작하나요",
      paragraphs: [
        "App Store에서 MusicPod를 무료로 받고 Apple Music에 로그인하면, 좋아하는 노래와 플레이리스트, 앨범이 익숙한 메뉴에 나타납니다.",
      ],
      items: [
        "iOS 17 이상이 설치된 모든 iPhone",
        "스트리밍에는 유효한 Apple Music 구독",
        "가져온 오디오 파일은 구독 없이 재생 가능",
      ],
    },
  ],
  faq: {
    kicker: "자주 묻는 질문",
    title: "iPhone의 iPod 음악에 대하여",
    items: [
      { question: "iPhone에서 iPod 음악을 들을 수 있나요?", answer: "네. MusicPod는 iPod 스타일의 iPhone 음악 플레이어로, 클릭 휠, Cover Flow, 전체 화면 재생이라는 클래식 iPod 경험을 재현하면서 Apple Music 보관함을 스트리밍합니다." },
      { question: "iPhone용 iPod 앱이 있나요?", answer: "있습니다. MusicPod입니다. 클래식 iPod 같은 모습과 클릭 감각으로, MusicKit을 통해 Apple Music 보관함을 재생하는 무료 앱입니다." },
      { question: "MusicPod에 Apple Music이 필요한가요?", answer: "보관함 스트리밍에는 유효한 Apple Music 구독이 필요합니다. 앱으로 가져온 오디오 파일은 구독 없이 재생할 수 있습니다." },
      { question: "MusicPod는 Apple 제품인가요?", answer: "아니요. MusicPod는 LeaveStyle이 독립적으로 개발한 앱이며 Apple과 제휴 관계가 없습니다. iPod, iPhone, Apple Music은 Apple Inc.의 상표입니다." },
      { question: "MusicPod는 무료인가요?", answer: "네. MusicPod는 App Store에서 무료로 다운로드할 수 있습니다." },
    ],
  },
  cta: {
    kicker: "MusicPod 받기",
    title: "iPod 음악을 당신의 iPhone으로.",
    body: "App Store에서 무료. 보관함이 기다리고 있습니다.",
    badgeKicker: "App Store에서 다운로드",
    badge: "App Store",
    requirement: "iOS 17 이상 지원 · 스트리밍에는 Apple Music 구독 필요",
  },
};

const es: IpodMusicMessages = {
  meta: {
    title: "Música de iPod en iPhone: cómo recuperarla — MusicPod",
    description: "Recupera la música de iPod en tu iPhone. MusicPod recrea el iPod clásico —rueda de clic, Cover Flow, reproducción a pantalla completa— y reproduce tu biblioteca de Apple Music. Gratis en App Store.",
    social: "El iPod se fue, la sensación no. Recupera la música de iPod en iPhone con MusicPod.",
  },
  pageLabel: "Música de iPod",
  back: "Volver a MusicPod",
  toc: "En esta página",
  hero: {
    eyebrow: "La guía",
    title: "Música de iPod, de vuelta en iPhone",
    intro: "El iPod clásico convirtió escuchar música en un ritual físico: girar, pulsar, hojear portadas. Esta guía te trae esa experiencia exacta de vuelta al iPhone que ya tienes.",
  },
  pillars: [
    { title: "Gira", body: "Una rueda de clic que se desliza, se pulsa y responde con vibración, como la original." },
    { title: "Hojea", body: "Cover Flow vuelve: desliza entre álbumes y voltea uno para ver sus canciones." },
    { title: "Escucha", body: "Tu biblioteca de Apple Music, en los menús sencillos que hicieron famoso al iPod." },
  ],
  sections: [
    {
      id: "made-special",
      title: "Qué hacía especial a la música de iPod",
      paragraphs: [
        "El iPod no fue el primer reproductor digital, pero sí el primero que se sentía bien. No tocabas menús planos: girabas una rueda, notabas su clic y hojeabas portadas en Cover Flow.",
        "Cada detalle servía a la música: una pantalla con una sola tarea, controles usables sin mirar, una biblioteca que se desplegaba bajo tu pulgar. Lo que se extraña no es el aparato: es el ritual.",
      ],
    },
    {
      id: "where-it-went",
      title: "A dónde fue la música de iPod",
      paragraphs: [
        "Apple dejó de fabricar el iPod classic en 2014 y retiró el último iPod en 2022. La app Música del iPhone es superior en todo lo medible: decenas de millones de canciones, streaming instantáneo, herramientas potentes.",
        "Pero la potencia no es lo mismo que el placer. Entre la reproducción automática y las radios algorítmicas, la alegría simple de girar una rueda y entrar a un álbum desapareció en silencio.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "Conoce MusicPod: un reproductor de música de iPod para iPhone",
      paragraphs: [
        "MusicPod es una app gratuita para iPhone que trae de vuelta la música de iPod. Recrea la interfaz clásica —rueda de clic, Cover Flow, menús sencillos— y reproduce tu biblioteca de Apple Music mediante MusicKit de Apple.",
        "MusicPod es una app independiente, sin afiliación con Apple. No hay cuenta ni rastreo; los datos de reproducción se quedan en tu dispositivo.",
      ],
      items: [
        "Rueda de clic con vibración nativa",
        "Cover Flow para hojear álbumes",
        "Reproducción a pantalla completa",
        "12 colores clásicos de cuerpo y rueda",
        "También reproduce archivos de audio importados",
      ],
    },
    {
      id: "experience",
      title: "La experiencia, recreada",
      paragraphs: [
        "La rueda de clic se comporta como la original: desliza para navegar, pulsa para elegir, con respuesta táctil en cada paso. Cover Flow regresa con su gesto de voltear álbumes, y la reproducción da a cada canción la pantalla entera.",
        "Incluso puedes vestirlo como el iPod que recuerdas: plata, negro o blanco clásicos, la edición roja, o el arcoíris del nano.",
      ],
    },
    {
      id: "get-started",
      title: "Cómo empezar a escuchar",
      paragraphs: [
        "Descarga MusicPod gratis en App Store e inicia sesión con Apple Music. Tus favoritos, playlists y álbumes aparecen en los menús de siempre, a un giro de distancia.",
      ],
      items: [
        "Cualquier iPhone con iOS 17 o posterior",
        "Una suscripción a Apple Music para streaming",
        "Los archivos importados suenan sin suscripción",
      ],
    },
  ],
  faq: {
    kicker: "Preguntas frecuentes",
    title: "Música de iPod en iPhone, resuelta.",
    items: [
      { question: "¿Se puede tener música de iPod en un iPhone?", answer: "Sí. MusicPod es un reproductor de música estilo iPod para iPhone que recrea la experiencia del iPod clásico —rueda de clic, Cover Flow, reproducción a pantalla completa— mientras reproduce tu biblioteca de Apple Music." },
      { question: "¿Hay una app de iPod para iPhone?", answer: "Sí: MusicPod. Es una app gratuita que se ve, suena y cliquea como un iPod clásico y reproduce tu biblioteca de Apple Music a través de MusicKit." },
      { question: "¿MusicPod necesita Apple Music?", answer: "Para reproducir tu biblioteca en streaming necesitas una suscripción activa a Apple Music. Los archivos de audio que importes a la app suenan sin suscripción." },
      { question: "¿MusicPod está hecho por Apple?", answer: "No. MusicPod es una app independiente de LeaveStyle, sin afiliación con Apple. iPod, iPhone y Apple Music son marcas de Apple Inc." },
      { question: "¿MusicPod es gratis?", answer: "Sí. MusicPod se descarga gratis en App Store." },
    ],
  },
  cta: {
    kicker: "Consigue MusicPod",
    title: "Música de iPod, de vuelta en tu iPhone.",
    body: "Gratis en App Store. Tu biblioteca te espera.",
    badgeKicker: "Descárgalo en",
    badge: "App Store",
    requirement: "Compatible con iOS 17 o posterior · Se requiere Apple Music para streaming",
  },
};

const fr: IpodMusicMessages = {
  meta: {
    title: "Musique d’iPod sur iPhone : comment la retrouver — MusicPod",
    description: "Retrouvez la musique de l’iPod sur votre iPhone. MusicPod recrée l’iPod classique —molette cliquable, Cover Flow, lecture plein écran— et lit votre bibliothèque Apple Music. Gratuit sur l’App Store.",
    social: "L’iPod est parti, la sensation reste. Retrouvez la musique de l’iPod sur iPhone avec MusicPod.",
  },
  pageLabel: "Musique d’iPod",
  back: "Retour à MusicPod",
  toc: "Sur cette page",
  hero: {
    eyebrow: "Le guide",
    title: "La musique de l’iPod, de retour sur iPhone",
    intro: "L’iPod classique a transformé l’écoute en rituel physique : tourner, cliquer, feuilleter les pochettes. Ce guide vous ramène cette expérience exacte sur l’iPhone que vous avez déjà.",
  },
  pillars: [
    { title: "Tournez", body: "Une molette qui glisse, se clique et répond par haptique, comme l’originale." },
    { title: "Feuilletez", body: "Cover Flow est de retour : parcourez les albums, retournez-en un pour voir les titres." },
    { title: "Écoutez", body: "Votre bibliothèque Apple Music, dans les menus simples qui ont rendu l’iPod célèbre." },
  ],
  sections: [
    {
      id: "made-special",
      title: "Ce qui rendait la musique de l’iPod si particulière",
      paragraphs: [
        "L’iPod n’a pas été le premier baladeur numérique, mais le premier qui semblait juste. On ne tapait pas dans des menus plats : on tournait une molette, on sentait le clic, on feuilletait les pochettes en Cover Flow.",
        "Chaque détail servait la musique : un écran à une seule mission, des commandes utilisables sans regarder, une bibliothèque qui se déployait sous le pouce. Ce qui manque, ce n’est pas l’objet — c’est le rituel.",
      ],
    },
    {
      id: "where-it-went",
      title: "Où est passée la musique de l’iPod",
      paragraphs: [
        "Apple a arrêté l’iPod classic en 2014 et retiré le dernier iPod en 2022. L’app Musique de l’iPhone est supérieure sur tous les plans mesurables : des dizaines de millions de titres, streaming instantané, outils puissants.",
        "Mais la puissance n’est pas le plaisir. Entre la lecture auto et les radios algorithmiques, la joie simple de tourner la molette et d’entrer dans un album a discrètement disparu.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "MusicPod : un lecteur de musique d’iPod pour iPhone",
      paragraphs: [
        "MusicPod est une app iPhone gratuite qui ramène la musique de l’iPod. Elle recrée l’interface classique —molette cliquable, Cover Flow, menus simples— et lit votre bibliothèque Apple Music via le MusicKit d’Apple.",
        "MusicPod est une app indépendante, sans lien avec Apple. Pas de compte, pas de suivi ; les données de lecture restent sur votre appareil.",
      ],
      items: [
        "Molette cliquable avec retour haptique natif",
        "Cover Flow pour feuilleter les albums",
        "Lecture plein écran",
        "12 couleurs classiques de boîtier et molette",
        "Lit aussi les fichiers audio importés",
      ],
    },
    {
      id: "experience",
      title: "L’expérience, recréée",
      paragraphs: [
        "La molette se comporte comme l’originale : glissez pour parcourir, cliquez pour choisir, avec un retour haptique à chaque étape. Cover Flow revient avec son geste d’album à retourner, et la lecture offre à chaque morceau l’écran entier.",
        "Vous pouvez même l’habiller comme l’iPod de vos souvenirs : argent, noir ou blanc classiques, l’édition rouge, ou l’arc-en-ciel du nano.",
      ],
    },
    {
      id: "get-started",
      title: "Comment commencer à écouter",
      paragraphs: [
        "Téléchargez MusicPod gratuitement sur l’App Store et connectez-vous avec Apple Music. Favoris, playlists et albums apparaissent dans les menus habituels, à un tour de molette.",
      ],
      items: [
        "Tout iPhone sous iOS 17 ou ultérieure",
        "Un abonnement Apple Music pour le streaming",
        "Les fichiers importés se lisent sans abonnement",
      ],
    },
  ],
  faq: {
    kicker: "Questions fréquentes",
    title: "La musique d’iPod sur iPhone, en réponses.",
    items: [
      { question: "Peut-on avoir la musique de l’iPod sur un iPhone ?", answer: "Oui. MusicPod est un lecteur de musique de style iPod pour iPhone qui recrée l’expérience de l’iPod classique —molette cliquable, Cover Flow, lecture plein écran— tout en diffusant votre bibliothèque Apple Music." },
      { question: "Existe-t-il une app iPod pour iPhone ?", answer: "Oui : MusicPod. Une app gratuite qui a le look, le son et le clic d’un iPod classique, et qui lit votre bibliothèque Apple Music via MusicKit." },
      { question: "MusicPod nécessite-t-il Apple Music ?", answer: "Pour diffuser votre bibliothèque, un abonnement Apple Music actif est requis. Les fichiers audio importés dans l’app se lisent sans abonnement." },
      { question: "MusicPod est-il créé par Apple ?", answer: "Non. MusicPod est une app indépendante de LeaveStyle, sans lien avec Apple. iPod, iPhone et Apple Music sont des marques d’Apple Inc." },
      { question: "MusicPod est-il gratuit ?", answer: "Oui. MusicPod se télécharge gratuitement sur l’App Store." },
    ],
  },
  cta: {
    kicker: "Obtenir MusicPod",
    title: "La musique de l’iPod, de retour sur votre iPhone.",
    body: "Gratuit sur l’App Store. Votre bibliothèque vous attend.",
    badgeKicker: "Télécharger dans",
    badge: "App Store",
    requirement: "Compatible iOS 17 ou ultérieure · Abonnement Apple Music requis pour le streaming",
  },
};

const de: IpodMusicMessages = {
  meta: {
    title: "iPod-Musik auf dem iPhone: So holst du sie zurück — MusicPod",
    description: "Hol dir die iPod-Musik auf dein iPhone. MusicPod lässt den klassischen iPod wiederaufleben – Click Wheel, Cover Flow, Vollbild-Wiedergabe – und spielt deine Apple Music-Mediathek. Kostenlos im App Store.",
    social: "Der iPod ist weg, das Gefühl nicht. iPod-Musik zurück auf dem iPhone – mit MusicPod.",
  },
  pageLabel: "iPod-Musik",
  back: "Zurück zu MusicPod",
  toc: "Auf dieser Seite",
  hero: {
    eyebrow: "Der Guide",
    title: "iPod-Musik, zurück auf dem iPhone",
    intro: "Der klassische iPod machte Musik zu einem körperlichen Ritual: drehen, klicken, Cover durchblättern. Dieser Guide holt genau dieses Erlebnis auf das iPhone zurück, das du schon hast.",
  },
  pillars: [
    { title: "Dreh", body: "Ein Click Wheel, das gleitet, klickt und mit Haptik antwortet – wie das Original." },
    { title: "Blätter", body: "Cover Flow ist zurück: durch Alben drehen, eines umklappen für die Titelliste." },
    { title: "Hör", body: "Deine Apple Music-Mediathek in den schlichten Menüs, die den iPod berühmt machten." },
  ],
  sections: [
    {
      id: "made-special",
      title: "Was iPod-Musik besonders machte",
      paragraphs: [
        "Der iPod war nicht der erste digitale Musikplayer, aber der erste, der sich richtig anfühlte. Man tippte nicht durch flache Menüs – man drehte ein Rad, spürte den Klick und blätterte in Cover Flow durch die Alben.",
        "Jedes Detail diente der Musik: ein Bildschirm mit einer einzigen Aufgabe, Bedienelemente, die ohne Hinschauen funktionierten, eine Mediathek, die sich unter dem Daumen entfaltete. Was fehlt, ist nicht das Gerät – es ist das Ritual.",
      ],
    },
    {
      id: "where-it-went",
      title: "Wohin die iPod-Musik verschwand",
      paragraphs: [
        "Apple stellte den iPod classic 2014 ein und verabschiedete 2022 den letzten iPod. Die Music-App des iPhone ist in allem messbar stärker: zig Millionen Songs, sofortiges Streaming, mächtige Mediathek-Funktionen.",
        "Aber Stärke ist nicht Freude. Zwischen Autoplay und algorithmischem Radio verschwand leise die einfache Freude, ein Rad zu drehen und in ein Album zu klicken.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "MusicPod: ein iPod-Musikplayer für das iPhone",
      paragraphs: [
        "MusicPod ist eine kostenlose iPhone-App, die iPod-Musik zurückbringt. Sie lässt die klassische Oberfläche wiederaufleben – Click Wheel, Cover Flow, schlichte Menüs – und streamt deine Apple Music-Mediathek über Apples MusicKit.",
        "MusicPod stammt von einem unabhängigen Entwickler und steht in keiner Verbindung zu Apple. Kein Konto, kein Tracking; Wiedergabedaten bleiben auf dem Gerät.",
      ],
      items: [
        "Click Wheel mit nativer Haptik",
        "Cover Flow zum Durchblättern der Alben",
        "Wiedergabe im Vollbild",
        "12 klassische Gehäuse- und Radfarben",
        "Spielt auch importierte Audiodateien",
      ],
    },
    {
      id: "experience",
      title: "Das Erlebnis, neu erschaffen",
      paragraphs: [
        "Das Click Wheel verhält sich wie das Original: wischen zum Blättern, drücken zum Auswählen, mit haptischem Feedback bei jedem Schritt. Cover Flow kehrt mit seiner Alben-Umklapp-Geste zurück, und die Wiedergabe widmet jedem Song den ganzen Bildschirm.",
        "Du kannst es sogar kleiden wie den iPod deiner Erinnerung: klassisches Silber, Schwarz oder Weiß, die Red Edition oder den nano-Regenbogen.",
      ],
    },
    {
      id: "get-started",
      title: "So startest du",
      paragraphs: [
        "Lade MusicPod kostenlos aus dem App Store und melde dich mit Apple Music an. Lieblingstitel, Playlists und Alben erscheinen in den gewohnten Menüs – eine Drehung entfernt.",
      ],
      items: [
        "Jedes iPhone mit iOS 17 oder neuer",
        "Ein Apple Music-Abo fürs Streaming",
        "Importierte Audiodateien laufen ohne Abo",
      ],
    },
  ],
  faq: {
    kicker: "Häufige Fragen",
    title: "iPod-Musik auf dem iPhone, beantwortet.",
    items: [
      { question: "Kann man iPod-Musik auf einem iPhone haben?", answer: "Ja. MusicPod ist ein Musikplayer im iPod-Stil für das iPhone, der das Erlebnis des klassischen iPod neu erschafft – Click Wheel, Cover Flow, Vollbild-Wiedergabe – und dabei deine Apple Music-Mediathek streamt." },
      { question: "Gibt es eine iPod-App für das iPhone?", answer: "Ja: MusicPod. Eine kostenlose App, die aussieht, klingt und klickt wie ein klassischer iPod und deine Apple Music-Mediathek über MusicKit abspielt." },
      { question: "Braucht MusicPod Apple Music?", answer: "Zum Streamen deiner Mediathek ist ein aktives Apple Music-Abo nötig. In die App importierte Audiodateien laufen ohne Abo." },
      { question: "Wird MusicPod von Apple gemacht?", answer: "Nein. MusicPod ist eine unabhängige App von LeaveStyle ohne Verbindung zu Apple. iPod, iPhone und Apple Music sind Marken der Apple Inc." },
      { question: "Ist MusicPod kostenlos?", answer: "Ja. MusicPod lässt sich kostenlos im App Store laden." },
    ],
  },
  cta: {
    kicker: "MusicPod holen",
    title: "iPod-Musik, zurück auf deinem iPhone.",
    body: "Kostenlos im App Store. Deine Mediathek wartet.",
    badgeKicker: "Laden im",
    badge: "App Store",
    requirement: "Kompatibel mit iOS 17 oder neuer · Apple Music-Abo fürs Streaming erforderlich",
  },
};

const ptBR: IpodMusicMessages = {
  meta: {
    title: "Música de iPod no iPhone: como trazê-la de volta — MusicPod",
    description: "Traga a música do iPod de volta ao seu iPhone. O MusicPod recria o iPod clássico —click wheel, Cover Flow, reprodução em tela cheia— e toca sua biblioteca do Apple Music. Grátis na App Store.",
    social: "O iPod foi embora, a sensação não. Música de iPod de volta no iPhone com MusicPod.",
  },
  pageLabel: "Música de iPod",
  back: "Voltar ao MusicPod",
  toc: "Nesta página",
  hero: {
    eyebrow: "O guia",
    title: "Música de iPod, de volta ao iPhone",
    intro: "O iPod clássico transformou ouvir música em um ritual físico: girar, clicar, folhear capas. Este guia traz essa experiência exata de volta ao iPhone que você já tem.",
  },
  pillars: [
    { title: "Gire", body: "Uma click wheel que desliza, clica e responde com vibração, como a original." },
    { title: "Folheie", body: "O Cover Flow voltou: deslize entre álbuns e vire um para ver as faixas." },
    { title: "Ouça", body: "Sua biblioteca do Apple Music, nos menus simples que ficaram famosos no iPod." },
  ],
  sections: [
    {
      id: "made-special",
      title: "O que tornava a música de iPod especial",
      paragraphs: [
        "O iPod não foi o primeiro player digital, mas foi o primeiro que parecia certo. Você não cutucava menus planos: girava uma roda, sentia o clique e folheava capas no Cover Flow.",
        "Cada detalhe servia à música: uma tela com uma única função, controles usáveis sem olhar, uma biblioteca que se abria sob o polegar. O que falta não é o aparelho — é o ritual.",
      ],
    },
    {
      id: "where-it-went",
      title: "Para onde foi a música de iPod",
      paragraphs: [
        "A Apple encerrou o iPod classic em 2014 e aposentou o último iPod em 2022. O app Música do iPhone é superior em tudo que se mede: dezenas de milhões de músicas, streaming instantâneo, ferramentas poderosas.",
        "Mas potência não é prazer. Entre o autoplay e as rádios algorítmicas, a alegria simples de girar a roda e entrar num álbum desapareceu em silêncio.",
      ],
    },
    {
      id: "meet-musicpod",
      title: "Conheça o MusicPod: um player de música de iPod para iPhone",
      paragraphs: [
        "O MusicPod é um app gratuito para iPhone que traz a música de iPod de volta. Ele recria a interface clássica —click wheel, Cover Flow, menus simples— e toca sua biblioteca do Apple Music pelo MusicKit da Apple.",
        "O MusicPod é um app independente, sem afiliação com a Apple. Sem conta e sem rastreamento; os dados de reprodução ficam no seu dispositivo.",
      ],
      items: [
        "Click wheel com retorno tátil nativo",
        "Cover Flow para folhear álbuns",
        "Reprodução em tela cheia",
        "12 cores clássicas de corpo e roda",
        "Também reproduz arquivos de áudio importados",
      ],
    },
    {
      id: "experience",
      title: "A experiência, recriada",
      paragraphs: [
        "A click wheel se comporta como a original: deslize para navegar, clique para escolher, com resposta tátil a cada passo. O Cover Flow volta com o gesto de virar álbuns, e a reprodução dá a cada música a tela inteira.",
        "Você pode até vesti-lo como o iPod de que lembra: prata, preto ou branco clássicos, a edição vermelha, ou o arco-íris do nano.",
      ],
    },
    {
      id: "get-started",
      title: "Como começar a ouvir",
      paragraphs: [
        "Baixe o MusicPod grátis na App Store e entre com o Apple Music. Favoritas, playlists e álbuns aparecem nos menus de sempre, a um giro de distância.",
      ],
      items: [
        "Qualquer iPhone com iOS 17 ou posterior",
        "Assinatura do Apple Music para streaming",
        "Arquivos importados tocam sem assinatura",
      ],
    },
  ],
  faq: {
    kicker: "Perguntas frequentes",
    title: "Música de iPod no iPhone, respondida.",
    items: [
      { question: "Dá para ter música de iPod em um iPhone?", answer: "Sim. O MusicPod é um player de música estilo iPod para iPhone que recria a experiência do iPod clássico —click wheel, Cover Flow, reprodução em tela cheia— enquanto toca sua biblioteca do Apple Music." },
      { question: "Existe um app de iPod para iPhone?", answer: "Sim: o MusicPod. Um app gratuito com a cara, o som e o clique de um iPod clássico, que toca sua biblioteca do Apple Music pelo MusicKit." },
      { question: "O MusicPod precisa de Apple Music?", answer: "Para transmitir sua biblioteca é necessária uma assinatura ativa do Apple Music. Arquivos de áudio importados para o app tocam sem assinatura." },
      { question: "O MusicPod é feito pela Apple?", answer: "Não. O MusicPod é um app independente da LeaveStyle, sem afiliação com a Apple. iPod, iPhone e Apple Music são marcas da Apple Inc." },
      { question: "O MusicPod é gratuito?", answer: "Sim. O MusicPod pode ser baixado gratuitamente na App Store." },
    ],
  },
  cta: {
    kicker: "Baixe o MusicPod",
    title: "Música de iPod, de volta ao seu iPhone.",
    body: "Grátis na App Store. Sua biblioteca está esperando.",
    badgeKicker: "Baixe na",
    badge: "App Store",
    requirement: "Compatível com iOS 17 ou posterior · Apple Music necessário para streaming",
  },
};

export const ipodMusicDictionaries: Record<Locale, IpodMusicMessages> = {
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

export function getIpodMusicDictionary(locale: Locale) {
  return ipodMusicDictionaries[locale];
}

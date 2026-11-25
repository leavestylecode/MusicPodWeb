import type { Locale } from "./locales";
import type { PrivacyPolicyLink } from "./privacy-config";

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  note?: string;
  links?: { label: string; target: PrivacyPolicyLink }[];
};

export type PrivacyMessages = {
  meta: { title: string; description: string };
  pageLabel: string;
  back: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
    version: string;
  };
  principles: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
  contents: string;
  sections: PrivacySection[];
  contact: { operator: string; product: string; email: string };
  translationNote: string;
};

const en: PrivacyMessages = {
  meta: {
    title: "Privacy Policy — MusicPod",
    description: "How MusicPod handles Apple Music access, optional Spotify connections, local audio files, on-device settings, and information from the MusicPod website.",
  },
  pageLabel: "Privacy",
  back: "Back to MusicPod",
  hero: {
    eyebrow: "Privacy by design",
    title: "Your music stays yours.",
    intro: "MusicPod is built to play your music, not profile you. The app has no MusicPod account, advertising, or third-party tracking SDKs. Imported audio stays on your iPhone, and Apple Music or Spotify is accessed only after you grant permission and is never stored on our servers.",
    updated: "Last updated: November 25, 2026",
    version: "Version 1.1",
  },
  principles: [
    { title: "No MusicPod account", body: "Use the app without creating a profile or giving us your name." },
    { title: "No ads or tracking", body: "We do not sell personal information or share it for targeted advertising." },
    { title: "Library stays with you", body: "Imported files stay on-device; Apple Music and Spotify libraries are never copied to a developer server." },
  ],
  contents: "On this page",
  sections: [
    {
      id: "scope",
      title: "1. Scope and who we are",
      paragraphs: [
        "This policy explains how MusicPod’s developer and operator handles information when you use the MusicPod app for iPhone or visit the official website at musicpod.app. In this policy, “MusicPod,” “we,” and “us” refer to the operator identified in the contact section.",
        "This policy does not govern Apple Music, Spotify, the App Store, or other services operated independently by Apple, Spotify, or another third party. Their own privacy terms apply to their processing.",
      ],
    },
    {
      id: "app-data",
      title: "2. Information handled by the app",
      paragraphs: [
        "Depending on which music sources you choose to use, MusicPod handles only the minimum information required to display and play your audio on your iPhone.",
      ],
      items: [
        "Apple Music (via MusicKit, after you approve system permission): library and catalog metadata (songs, albums, artists, playlists, artwork), playback state, and subscription capability.",
        "Spotify (optional, only if you connect your Spotify account): saved songs, albums, playlists, and playback control handled directly with Spotify via the Spotify app and API.",
        "Local music: audio files, folders, metadata, and LRC lyric files you import from the Files app are stored locally inside MusicPod on your iPhone for offline playback and are never uploaded to our servers.",
        "App preferences, such as body and wheel colors, themes, photo backgrounds, interface choices and accessibility settings. These are stored locally on your device.",
      ],
      note: "MusicPod does not receive your Apple Account or Spotify password, keep a server-side copy of your music libraries or local files, or send your listening history to a MusicPod-operated server.",
    },
    {
      id: "website-data",
      title: "3. Information handled by the website",
      paragraphs: [
        "The website does not use advertising pixels or third-party analytics. Like most websites, its hosting infrastructure processes limited technical information to deliver pages and keep the service secure.",
      ],
      items: [
        "Request and security data, which may include your IP address, approximate location derived from IP, browser and device type, requested page, date and time, and error or abuse signals. The website is currently hosted by Vercel.",
        "A musicpod_locale preference cookie, set only when you choose a language and retained for up to 12 months.",
        "A musicpod-theme value in your browser’s local storage when you choose light or dark appearance. It remains until you choose System or clear site data.",
      ],
      note: "Static website assets, including localized App Store download badges, are hosted directly on musicpod.app rather than loaded from third-party ad or tracking domains.",
    },
    {
      id: "use",
      title: "4. How and why information is used",
      paragraphs: [
        "We use the limited information described above only to provide the app and website, remember choices you make, protect and troubleshoot the service, and respond when you contact us.",
        "Where a legal basis is required, processing is based on providing the service you request, our legitimate interests in operating and securing it, compliance with law, or your consent. You can revoke Apple Music or Spotify access at any time.",
      ],
    },
    {
      id: "sharing",
      title: "5. Service providers and disclosure",
      paragraphs: [
        "MusicPod does not sell or rent personal information and does not share it for cross-context behavioral or targeted advertising.",
      ],
      items: [
        "Apple processes Apple Music requests, playback and account-related information under Apple’s own terms. Apple operates independently from MusicPod.",
        "Spotify processes Spotify account authorization, library requests, and playback under Spotify’s own privacy terms if you choose to connect Spotify.",
        "Vercel processes website traffic and technical logs to host, deliver and secure musicpod.app on our behalf.",
        "We may disclose information if reasonably necessary to comply with law, respond to valid legal process, or protect users, the public, our rights or the security of the service.",
      ],
      note: "Service providers acting for us must process information only for the services they provide and protect it consistently with this policy and applicable law.",
      links: [
        { label: "Apple Music & Privacy", target: "appleMusicPrivacy" },
        { label: "Apple Privacy Policy", target: "applePrivacy" },
        { label: "Spotify Privacy Policy", target: "spotifyPrivacy" },
        { label: "Vercel Privacy Notice", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Retention and security",
      paragraphs: [
        "MusicPod does not retain a developer-controlled copy of your Apple Music library, Spotify library, or imported local audio. Local files and app preferences remain on your device until you delete them, reset the app’s data, or remove the app. Website preferences remain for the periods described above.",
        "Website request and security records are retained by the hosting provider only for its operational, security and legal needs, then deleted or de-identified under its retention practices. Messages you send us are kept only as long as needed to answer, keep an appropriate record, and meet legal obligations.",
        "We use reasonable technical and organizational safeguards appropriate to the limited information we handle. No transmission or storage method can be guaranteed completely secure.",
      ],
    },
    {
      id: "choices",
      title: "7. Your choices and privacy rights",
      paragraphs: [
        "You remain in control of the information MusicPod can access.",
      ],
      items: [
        "Apple Music access: change MusicPod’s permission in iPhone Settings under Privacy & Security and Media & Apple Music. Revoking access disables features that depend on your library.",
        "Spotify access: disconnect Spotify in MusicPod or revoke MusicPod’s access in your Spotify account settings at any time.",
        "On-device data: delete imported tracks in Local Music or remove the app to delete its locally stored files and settings, subject to any device backup you control.",
        "Website preferences: clear cookies and site data in your browser, or choose System appearance to remove the stored theme selection.",
        "Legal rights: depending on where you live, you may request access, correction, deletion, restriction, portability, or object to processing, and may withdraw consent or appeal a response. Contact us to make a request.",
      ],
      note: "Because MusicPod has no user accounts and does not keep copies of your music libraries, we may have no MusicPod-held data that can identify you. For information controlled by Apple or Spotify, use their privacy tools directly.",
      links: [
        { label: "Manage data with Apple", target: "applePrivacy" },
        { label: "Spotify Privacy Policy", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. Children and international processing",
      paragraphs: [
        "MusicPod does not knowingly collect personal information from children. If you are a parent or guardian and believe a child sent personal information directly to us, please contact us so we can review and delete it where appropriate.",
        "Website infrastructure may process technical information in countries other than your own. When required, we rely on contractual and other safeguards provided by our service providers for international transfers.",
      ],
    },
    {
      id: "changes",
      title: "9. Changes to this policy",
      paragraphs: [
        "We may update this policy when MusicPod’s features, service providers, or legal obligations change. We will publish the revised policy here and change the “Last updated” date. If a change materially affects how information is handled, we will provide additional notice or request consent where required.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact us",
      paragraphs: [
        "For privacy questions or requests, email the address below. Tell us what you need and the country or region relevant to your request so we can respond appropriately.",
        "Please do not send your Apple Account or Spotify password, authentication codes, or a copy of your music library. We will never ask for them.",
      ],
    },
  ],
  contact: { operator: "Operator", product: "Product", email: "Privacy email" },
  translationNote: "This policy is available in multiple languages. If translations differ, the English version controls to the extent permitted by applicable law.",
};

const zhCN: PrivacyMessages = {
  meta: { title: "隐私政策 — MusicPod", description: "了解 MusicPod 如何处理 Apple Music 权限、可选的 Spotify 连接、本地音频文件、设备端设置与官网信息。" },
  pageLabel: "隐私政策",
  back: "返回 MusicPod",
  hero: {
    eyebrow: "隐私融入设计",
    title: "你的音乐 始终属于你",
    intro: "MusicPod 不设账户、广告或第三方追踪。导入的本地音频仅保存在你的 iPhone 上；Apple Music 与 Spotify 仅在你授权后访问，不会上传资料库或收听记录到我们的服务器。",
    updated: "最后更新：2026 年 11 月 25 日",
    version: "版本 1.1",
  },
  principles: [
    { title: "无需账户", body: "无需注册或提供姓名" },
    { title: "无广告追踪", body: "不出售信息，不用于定向广告" },
    { title: "音乐留在本地", body: "MusicPod 不保存任何资料库服务器副本" },
  ],
  contents: "本页内容",
  sections: [
    {
      id: "scope",
      title: "1. 适用范围与运营者",
      paragraphs: [
        "本政策适用于 iPhone 版 MusicPod App 与官方网站 musicpod.app，由下方列出的运营者负责。",
        "Apple Music、Spotify、App Store 等第三方服务适用其各自的隐私条款。",
      ],
    },
    {
      id: "app-data",
      title: "2. App 处理的信息",
      paragraphs: ["根据你启用的音乐来源，MusicPod 仅在设备端处理展示与播放所需的最少信息。"],
      items: [
        "Apple Music（经系统授权后通过 MusicKit 访问）：歌曲、专辑、艺人、播放列表、封面、播放状态及订阅状态。",
        "Spotify（可选，仅在你连接 Spotify 账号时）：直接通过 Spotify App 与接口读取你收藏的曲目、专辑、歌单并控制播放。",
        "本地音乐：从「文件」导入的音频、文件夹及 LRC 歌词仅保存在 iPhone 的 App 本地存储中，支持离线播放，绝不上传至我们的服务器。",
        "配色、主题、背景照片和辅助功能等设置，仅保存在设备本地。",
      ],
      note: "MusicPod 不会获取你的 Apple 或 Spotify 密码，也不会保存资料库副本或上传收听记录。",
    },
    {
      id: "website-data",
      title: "3. 官网处理的信息",
      paragraphs: ["官网不使用广告像素或第三方分析工具。托管服务仅处理交付网页和保障安全所需的技术信息。"],
      items: [
        "IP 地址、浏览器、设备、访问页面和安全信号等请求日志，由 Vercel 处理。",
        "musicpod_locale Cookie：记录语言选择，最长保留 12 个月。",
        "musicpod-theme 本地值：记录外观选择，可通过“跟随系统”或清除网站数据移除。",
      ],
      note: "官网静态资源（包括多语言 App Store 下载徽章）均直接托管在 musicpod.app，不向第三方广告或追踪域名发起请求。",
    },
    {
      id: "use",
      title: "4. 信息的使用方式与目的",
      paragraphs: [
        "这些信息仅用于提供服务、保存你的选择、保障安全、排查问题和回复咨询。必要时，我们依据履行服务、合法利益、法律义务或你的同意进行处理。Apple Music 或 Spotify 权限可随时撤回。",
      ],
    },
    {
      id: "sharing",
      title: "5. 服务提供商与信息披露",
      paragraphs: ["MusicPod 不出售、出租个人信息，也不将其用于定向广告。"],
      items: [
        "Apple 按自身条款处理 Apple Music 请求与播放信息。",
        "若你选择连接 Spotify，Spotify 将按自身隐私政策处理账号授权、曲库请求与播放信息。",
        "Vercel 处理网站流量与技术日志，用于托管和安全防护。",
        "法律要求或保护用户、公众及服务安全时，我们可能依法披露必要信息。",
      ],
      note: "服务提供商只能为其提供的服务处理信息，并须采取相应保护措施。",
      links: [
        { label: "Apple Music 与隐私", target: "appleMusicPrivacy" },
        { label: "Apple 隐私政策", target: "applePrivacy" },
        { label: "Spotify 隐私政策", target: "spotifyPrivacy" },
        { label: "Vercel 隐私声明", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 信息保留与安全",
      paragraphs: [
        "MusicPod 不保存 Apple Music、Spotify 资料库或本地音频的服务器副本。导入的本地文件和 App 设置留在设备上；网站偏好、托管日志和联系邮件仅按功能、安全或法律需要保留。",
        "我们会采取与所处理信息相称的安全措施，但任何传输或存储方式都无法保证绝对安全。",
      ],
    },
    {
      id: "choices",
      title: "7. 你的选择与隐私权利",
      paragraphs: ["你始终可以控制 MusicPod 能够访问的信息。"],
      items: [
        "Apple Music 权限：在 iPhone 设置中查看或撤回。",
        "Spotify 连接：可随时在 MusicPod 中断开连接，或在 Spotify 账号设置中撤回授权。",
        "设备数据：可在本地音乐中删除导入曲目，或删除 App 移除所有本地文件与设置（设备备份除外）。",
        "网站偏好：清除 Cookie 与网站数据，或选择“跟随系统”。",
        "法定权利：你可按所在地区的法律请求访问、更正、删除、限制或携带信息，也可反对处理或撤回同意。",
      ],
      note: "MusicPod 不设账户，也不保存资料库，因此我们可能没有可识别你的数据。Apple 或 Spotify 控制的信息请通过对应平台管理。",
      links: [
        { label: "通过 Apple 管理数据", target: "applePrivacy" },
        { label: "Spotify 隐私政策", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. 未成年人及跨境处理",
      paragraphs: [
        "MusicPod 不会故意收集未成年人的个人信息。如儿童曾直接向我们发送信息，请由父母或监护人联系我们处理。",
        "官网技术信息可能在其他国家或地区处理；必要时由服务提供商提供跨境传输保障。",
      ],
    },
    {
      id: "changes",
      title: "9. 政策更新",
      paragraphs: ["功能、服务提供商或法律要求变化时，我们会更新本页和日期。重大变更将按法律要求另行通知或征求同意。"],
    },
    {
      id: "contact",
      title: "10. 联系我们",
      paragraphs: [
        "如有隐私问题或希望行使权利，请发送邮件并说明需求及所在国家或地区。",
        "请勿发送 Apple 或 Spotify 账户密码、验证码或资料库副本；我们不会索取这些信息。",
      ],
    },
  ],
  contact: { operator: "运营者", product: "产品", email: "隐私联系邮箱" },
  translationNote: "本政策提供多种语言版本。如各译本存在差异，在适用法律允许的范围内以英文版本为准。",
};

const zhTW: PrivacyMessages = {
  meta: { title: "隱私權政策 — MusicPod", description: "瞭解 MusicPod 如何處理 Apple Music 權限、選用的 Spotify 連線、本機音訊檔案、裝置端設定與官網資訊。" },
  pageLabel: "隱私權",
  back: "返回 MusicPod",
  hero: {
    eyebrow: "隱私融入設計",
    title: "你的音樂 始終屬於你",
    intro: "MusicPod 不設帳號、廣告或第三方追蹤。匯入的本機音訊僅儲存在你的 iPhone 上；Apple Music 與 Spotify 僅在經你授權後存取，不會將資料庫或收聽紀錄上傳到我們的伺服器。",
    updated: "最後更新：2026 年 11 月 25 日",
    version: "版本 1.1",
  },
  principles: [
    { title: "無需帳號", body: "無需註冊或提供姓名" },
    { title: "無廣告追蹤", body: "不出售資訊，不用於定向廣告" },
    { title: "音樂留在本機", body: "MusicPod 不保存任何資料庫伺服器副本" },
  ],
  contents: "本頁內容",
  sections: [
    {
      id: "scope",
      title: "1. 適用範圍與營運者",
      paragraphs: [
        "本政策適用於 iPhone 版 MusicPod App 與官方網站 musicpod.app，由下方列出的營運者負責。",
        "Apple Music、Spotify、App Store 等第三方服務適用其各自的隱私條款。",
      ],
    },
    {
      id: "app-data",
      title: "2. App 處理的資訊",
      paragraphs: ["依據你選擇使用的音樂來源，MusicPod 僅在裝置端處理顯示和播放所需的最少資訊。"],
      items: [
        "Apple Music（取得系統授權後透過 MusicKit 存取）：歌曲、專輯、藝人、播放列表、封面、播放狀態與訂閱狀態。",
        "Spotify（選用，僅在你連結 Spotify 帳號時）：直接透過 Spotify App 與介面讀取收藏內容並控制播放。",
        "本機音樂：從「檔案」匯入的音訊、資料夾與 LRC 歌詞僅儲存在 iPhone 的 App 本機儲存空間中，支援離線播放，絕不上傳至我們的伺服器。",
        "配色、主題、背景照片和輔助使用等設定，僅儲存在裝置上。",
      ],
      note: "MusicPod 不會取得 Apple 或 Spotify 帳號密碼，也不會保存資料庫副本或上傳收聽紀錄。",
    },
    {
      id: "website-data",
      title: "3. 官網處理的資訊",
      paragraphs: ["官網不使用廣告像素或第三方分析工具。代管服務僅處理提供網頁和維護安全所需的技術資訊。"],
      items: [
        "IP 位址、瀏覽器、裝置、瀏覽頁面和安全訊號等要求記錄，由 Vercel 處理。",
        "musicpod_locale Cookie：記錄語言選擇，最長保留 12 個月。",
        "musicpod-theme 本機值：記錄外觀選擇，可透過「跟隨系統」或清除網站資料移除。",
      ],
      note: "官網靜態資源（包含多語言 App Store 下載徽章）均直接代管於 musicpod.app，不會向第三方廣告或追蹤網域發出要求。",
    },
    {
      id: "use",
      title: "4. 資訊的使用方式與目的",
      paragraphs: [
        "這些資訊僅用於提供服務、保存你的選擇、維護安全、排解問題和回覆詢問。必要時，我們依據履行服務、合法利益、法律義務或你的同意進行處理。Apple Music 或 Spotify 權限可隨時撤回。",
      ],
    },
    {
      id: "sharing",
      title: "5. 服務供應商與資訊揭露",
      paragraphs: ["MusicPod 不出售、出租個人資訊，也不將其用於定向廣告。"],
      items: [
        "Apple 依自身條款處理 Apple Music 要求與播放資訊。",
        "若你選擇連結 Spotify，Spotify 將依自身隱私權政策處理帳號授權、資料庫要求與播放資訊。",
        "Vercel 處理網站流量與技術記錄，用於代管和安全防護。",
        "法律要求或保護使用者、公眾及服務安全時，我們可能依法揭露必要資訊。",
      ],
      note: "服務供應商只能為其提供的服務處理資訊，並須採取相應保護措施。",
      links: [
        { label: "Apple Music 與隱私權", target: "appleMusicPrivacy" },
        { label: "Apple 隱私權政策", target: "applePrivacy" },
        { label: "Spotify 隱私權政策", target: "spotifyPrivacy" },
        { label: "Vercel 隱私權聲明", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 資訊保留與安全",
      paragraphs: [
        "MusicPod 不保存 Apple Music、Spotify 資料庫或本機音訊的伺服器副本。匯入的本機檔案與 App 設定留在裝置上；網站偏好、代管記錄和聯絡郵件僅按功能、安全或法律需要保留。",
        "我們會採取與所處理資訊相稱的安全措施，但任何傳輸或儲存方式都無法保證絕對安全。",
      ],
    },
    {
      id: "choices",
      title: "7. 你的選擇與隱私權利",
      paragraphs: ["你始終可以控制 MusicPod 能夠存取的資訊。"],
      items: [
        "Apple Music 權限：在 iPhone 設定中查看或撤回。",
        "Spotify 連線：可隨時在 MusicPod 中斷連線，或在 Spotify 帳號設定中撤回授權。",
        "裝置資料：可在本機音樂中刪除匯入曲目，或移除 App 以刪除本機檔案與設定（裝置備份除外）。",
        "網站偏好：清除 Cookie 與網站資料，或選擇「跟隨系統」。",
        "法定權利：你可按所在位置的法律要求存取、更正、刪除、限制或攜帶資訊，也可反對處理或撤回同意。",
      ],
      note: "MusicPod 不設帳號，也不保存資料庫，因此我們可能沒有可識別你的資料。Apple 或 Spotify 控制的資訊請透過各自平台管理。",
      links: [
        { label: "透過 Apple 管理資料", target: "applePrivacy" },
        { label: "Spotify 隱私權政策", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. 兒童與國際處理",
      paragraphs: [
        "MusicPod 不會故意收集兒童的個人資訊。如兒童曾直接向我們傳送資訊，請由家長或監護人聯絡我們處理。",
        "官網技術資訊可能在其他國家或地區處理；必要時由服務供應商提供跨境傳輸保障。",
      ],
    },
    {
      id: "changes",
      title: "9. 政策更新",
      paragraphs: ["功能、服務供應商或法律要求改變時，我們會更新本頁和日期。重大變更將按法律要求另行通知或徵求同意。"],
    },
    {
      id: "contact",
      title: "10. 聯絡我們",
      paragraphs: [
        "如有隱私問題或希望行使權利，請寄送電子郵件並說明需求及所在國家或地區。",
        "請勿傳送 Apple 或 Spotify 帳號密碼、驗證碼或資料庫副本；我們不會索取這些資訊。",
      ],
    },
  ],
  contact: { operator: "營運者", product: "產品", email: "隱私聯絡信箱" },
  translationNote: "本政策提供多種語言版本。如各譯本有差異，在適用法律允許的範圍內以英文版本為準。",
};

const ja: PrivacyMessages = {
  meta: { title: "プライバシーポリシー — MusicPod", description: "MusicPod における Apple Music、任意の Spotify 連携、ローカル音声ファイル、端末設定および公式サイトの情報の取扱いについて説明します。" },
  pageLabel: "プライバシー",
  back: "MusicPod に戻る",
  hero: {
    eyebrow: "プライバシーを設計の中心に",
    title: "あなたの音楽は、あなたのもの。",
    intro: "MusicPod は音楽を再生するためのアプリであり、利用者をプロファイリングするためのものではありません。MusicPod アカウント、広告、第三者のトラッキング SDK はありません。読み込んだローカル音楽は iPhone 内に留まり、Apple Music や Spotify も許可後にのみアクセスし、当方のサーバーには保存しません。",
    updated: "最終更新日：2026年11月25日",
    version: "バージョン 1.1",
  },
  principles: [
    { title: "MusicPod アカウント不要", body: "プロフィールの作成や氏名の提供なしで利用できます。" },
    { title: "広告・追跡なし", body: "個人情報を販売したり、ターゲティング広告のために共有したりしません。" },
    { title: "音楽はあなたの手元に", body: "ローカル曲は端末内に保存され、ライブラリを当方サーバーへ複製しません。" },
  ],
  contents: "このページの内容",
  sections: [
    {
      id: "scope",
      title: "1. 適用範囲と運営者",
      paragraphs: [
        "本ポリシーは、iPhone 版 MusicPod アプリまたは公式サイト musicpod.app の利用時に、MusicPod の開発者および運営者が情報をどのように取り扱うかを説明するものです。「MusicPod」「当方」は、連絡先欄に記載の運営者を指します。",
        "Apple Music、Spotify、App Store、その他 Apple・Spotify または第三者が独立して運営するサービスには本ポリシーは適用されず、それぞれのプライバシー条件が適用されます。",
      ],
    },
    {
      id: "app-data",
      title: "2. アプリが取り扱う情報",
      paragraphs: ["利用者が選択した音楽ソースに応じて、MusicPod は表示と再生に必要な最小限の情報のみを端末上で取り扱います。"],
      items: [
        "Apple Music（システム許可後に MusicKit 経由で取得）：曲、アルバム、アーティスト、プレイリスト、アートワーク、再生状態、サブスクリプション状態。",
        "Spotify（任意・Spotify アカウント連携時のみ）：保存済みの曲、アルバム、プレイリストの取得と再生操作を Spotify アプリおよび API と直接通信して処理します。",
        "ローカル音楽：「ファイル」アプリから読み込んだ音声ファイル、フォルダ、LRC 歌詞はオフライン再生のため iPhone 内のアプリ領域にのみ保存され、当方サーバーへ送信されません。",
        "本体やホイールの色、テーマ、背景写真、アクセシビリティなどの設定。これらは端末内に保存されます。",
      ],
      note: "MusicPod が Apple Account や Spotify のパスワードを受け取ること、ライブラリやローカルファイルをサーバーに複製すること、再生履歴を当方サーバーへ送信することはありません。",
    },
    {
      id: "website-data",
      title: "3. ウェブサイトが取り扱う情報",
      paragraphs: ["公式サイトは広告ピクセルや第三者分析ツールを使用しません。一般的なサイトと同様、ページ配信と安全確保のため、ホスティング基盤が限定的な技術情報を処理します。"],
      items: [
        "IP アドレス、IP から推定されるおおよその地域、ブラウザと端末の種類、リクエストしたページ、日時、エラーや不正利用のシグナルなどのリクエスト・セキュリティ情報。現在のホスティング事業者は Vercel です。",
        "musicpod_locale 設定 Cookie。言語を選択した場合のみ設定され、最長12か月保持されます。",
        "ライトまたはダーク表示を選んだ場合にブラウザのローカルストレージへ保存される musicpod-theme。システム設定を選ぶかサイトデータを消去するまで保持されます。",
      ],
      note: "多言語の App Store ダウンロードバッジを含む静的アセットはすべて musicpod.app から直接配信され、広告やトラッキング用の外部ドメインへは通信しません。",
    },
    {
      id: "use",
      title: "4. 利用目的と法的根拠",
      paragraphs: [
        "上記の限定的な情報は、アプリとサイトの提供、選択内容の保存、サービスの保護と問題解決、お問い合わせへの対応のためにのみ使用します。",
        "法的根拠が必要な地域では、依頼されたサービスの提供、運営と安全確保に関する正当な利益、法令遵守、または同意に基づき処理します。Apple Music や Spotify のアクセス許可はいつでも撤回できます。",
      ],
    },
    {
      id: "sharing",
      title: "5. サービス提供者と開示",
      paragraphs: ["MusicPod は個人情報を販売・貸与せず、行動ターゲティング広告のために共有しません。"],
      items: [
        "Apple は Apple Music のリクエスト、再生、アカウント関連情報を独自の条件に従って処理し、MusicPod とは独立して運営します。",
        "Spotify 連携を利用する場合、Spotify は独自のプライバシーポリシーに従って認証、ライブラリ取得、再生情報を処理します。",
        "Vercel は当方に代わり、musicpod.app のホスティング、配信、保護のためにサイト通信と技術ログを処理します。",
        "法令遵守、有効な法的手続への対応、利用者や公衆、当方の権利、サービスの安全を守るため合理的に必要な場合、情報を開示することがあります。",
      ],
      note: "当方のために情報を処理する事業者には、提供するサービスのためにのみ処理し、本ポリシーと適用法に沿って保護することを求めます。",
      links: [
        { label: "Apple Music とプライバシー", target: "appleMusicPrivacy" },
        { label: "Apple プライバシーポリシー", target: "applePrivacy" },
        { label: "Spotify プライバシーポリシー", target: "spotifyPrivacy" },
        { label: "Vercel プライバシー通知", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 保持とセキュリティ",
      paragraphs: [
        "MusicPod は Apple Music・Spotify ライブラリやローカル音声の開発者管理下コピーを保持しません。ローカルファイルとアプリ設定は、削除、アプリデータのリセット、またはアプリ削除まで端末に残ります。サイト設定の保持期間は上記のとおりです。",
        "サイトのリクエスト・セキュリティ記録は、ホスティング事業者が運用、安全、法的な必要性のために保持し、その保持方針に従って削除または匿名化します。お問い合わせは、回答、適切な記録、法的義務に必要な期間のみ保持します。",
        "取り扱う情報の範囲に応じた合理的な技術的・組織的保護策を講じますが、完全な安全を保証できる送信・保存方法はありません。",
      ],
    },
    {
      id: "choices",
      title: "7. 選択肢とプライバシー権",
      paragraphs: ["MusicPod がアクセスできる情報は、利用者が管理できます。"],
      items: [
        "Apple Music へのアクセス：iPhone の「設定」の「プライバシーとセキュリティ」および「メディアと Apple Music」で MusicPod の許可を変更できます。",
        "Spotify へのアクセス：MusicPod 内で連携を解除するか、Spotify アカウント設定からいつでもアクセス許可を取り消せます。",
        "端末内データ：ローカル音楽から曲を削除するか、アプリを削除するとローカルファイルと設定を削除できます（利用者が管理する端末バックアップを除く）。",
        "サイト設定：ブラウザで Cookie とサイトデータを消去するか、「システム」を選んで保存済みテーマを削除できます。",
        "法的権利：居住地に応じて、アクセス、訂正、削除、制限、データポータビリティ、異議申立て、同意の撤回、回答への不服申立てを求められる場合があります。下記へご連絡ください。",
      ],
      note: "MusicPod には利用者アカウントがなく、音楽ライブラリも保持しないため、当方が利用者を特定できるデータを保有していない場合があります。Apple や Spotify が管理する情報は各社のツールをご利用ください。",
      links: [
        { label: "Apple でデータを管理", target: "applePrivacy" },
        { label: "Spotify プライバシーポリシー", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. 子どもと国際的な処理",
      paragraphs: [
        "MusicPod は子どもの個人情報を認識しながら収集することはありません。子どもが当方へ直接個人情報を送ったと思われる場合、保護者の方はご連絡ください。確認のうえ適切に削除します。",
        "サイト基盤は、利用者の国・地域以外で技術情報を処理する場合があります。必要な場合、サービス提供者による契約上その他の保護措置に依拠します。",
      ],
    },
    {
      id: "changes",
      title: "9. 本ポリシーの変更",
      paragraphs: ["MusicPod の機能、サービス提供者、法的義務の変更に伴い、本ポリシーを更新する場合があります。改定版を本ページに掲載し、最終更新日を変更します。情報の取扱いに重大な影響がある場合、必要に応じて追加通知または同意取得を行います。"],
    },
    {
      id: "contact",
      title: "10. お問い合わせ",
      paragraphs: [
        "プライバシーに関する質問や請求は下記メールアドレスへお寄せください。適切に対応するため、内容と関係する国または地域をお知らせください。",
        "Apple Account や Spotify のパスワード、認証コード、音楽ライブラリのコピーは送らないでください。当方が求めることはありません。",
      ],
    },
  ],
  contact: { operator: "運営者", product: "製品", email: "プライバシー窓口" },
  translationNote: "本ポリシーは複数の言語で提供しています。翻訳間に相違がある場合、適用法で認められる範囲で英語版が優先します。",
};

const ko: PrivacyMessages = {
  meta: { title: "개인정보 처리방침 — MusicPod", description: "MusicPod가 Apple Music 권한, 선택적 Spotify 연동, 로컬 오디오 파일, 기기 내 설정 및 공식 웹사이트 정보를 처리하는 방법을 안내합니다." },
  pageLabel: "개인정보",
  back: "MusicPod로 돌아가기",
  hero: {
    eyebrow: "설계부터 개인정보 보호",
    title: "내 음악은 언제나 나의 것.",
    intro: "MusicPod는 음악을 재생하기 위한 앱이지 사용자를 프로파일링하기 위한 앱이 아닙니다. MusicPod 계정, 광고 또는 타사 추적 SDK가 없습니다. 가져온 로컬 오디오는 iPhone에 머무르며 Apple Music과 Spotify는 허용 후에만 접근하고 당사 서버에 저장하지 않습니다.",
    updated: "최종 업데이트: 2026년 11월 25일",
    version: "버전 1.1",
  },
  principles: [
    { title: "MusicPod 계정 없음", body: "프로필을 만들거나 이름을 제공하지 않고 사용할 수 있습니다." },
    { title: "광고 및 추적 없음", body: "개인정보를 판매하거나 맞춤형 광고를 위해 공유하지 않습니다." },
    { title: "음악은 내 기기에", body: "로컬 파일은 기기에 저장되며 보관함을 개발자 서버로 복사하지 않습니다." },
  ],
  contents: "목차",
  sections: [
    {
      id: "scope",
      title: "1. 적용 범위 및 운영자",
      paragraphs: [
        "이 방침은 iPhone용 MusicPod 앱 또는 공식 웹사이트 musicpod.app을 이용할 때 MusicPod의 개발자와 운영자가 정보를 처리하는 방법을 설명합니다. 이 문서의 ‘MusicPod’ 및 ‘당사’는 연락처에 표시된 운영자를 뜻합니다.",
        "이 방침은 Apple, Spotify 또는 다른 제3자가 독립적으로 운영하는 Apple Music, Spotify, App Store 및 기타 서비스에는 적용되지 않으며 해당 서비스의 개인정보 조건이 적용됩니다.",
      ],
    },
    {
      id: "app-data",
      title: "2. 앱이 처리하는 정보",
      paragraphs: ["선택한 음악 소스에 따라 MusicPod는 iPhone에서 오디오를 표시하고 재생하는 데 필요한 최소한의 정보만 처리합니다."],
      items: [
        "Apple Music(시스템 권한 승인 후 MusicKit 이용): 노래, 앨범, 아티스트, 플레이리스트, 아트워크, 재생 상태 및 구독 기능 상태.",
        "Spotify(선택 사항, Spotify 계정 연결 시에만): Spotify 앱 및 API와 직접 통신하여 저장한 곡, 앨범, 플레이리스트를 불러오고 재생을 제어합니다.",
        "로컬 음악: 파일 앱에서 가져온 오디오 파일, 폴더 및 LRC 가사는 오프라인 재생을 위해 iPhone의 앱 내부 저장소에만 저장되며 당사 서버로 업로드되지 않습니다.",
        "본체와 휠 색상, 테마, 배경 사진 및 손쉬운 사용 설정 등의 앱 환경설정. 이 정보는 기기에 로컬로 저장됩니다.",
      ],
      note: "MusicPod는 Apple Account나 Spotify 암호를 받거나 보관함·로컬 파일의 서버 사본을 유지하지 않으며, 청취 기록을 MusicPod 운영 서버로 전송하지 않습니다.",
    },
    {
      id: "website-data",
      title: "3. 웹사이트가 처리하는 정보",
      paragraphs: ["공식 웹사이트는 광고 픽셀이나 타사 분석 도구를 사용하지 않습니다. 일반적인 웹사이트와 마찬가지로 페이지 제공과 보안을 위해 호스팅 인프라가 제한된 기술 정보를 처리합니다."],
      items: [
        "IP 주소, IP에서 추정한 대략적인 위치, 브라우저 및 기기 유형, 요청 페이지, 날짜와 시간, 오류 또는 악용 신호 등의 요청 및 보안 데이터. 현재 Vercel에서 호스팅합니다.",
        "언어를 직접 선택할 때만 설정되고 최대 12개월 유지되는 musicpod_locale 환경설정 쿠키.",
        "라이트 또는 다크 모드를 선택할 때 브라우저 로컬 저장소에 저장되는 musicpod-theme 값. 시스템을 선택하거나 사이트 데이터를 지울 때까지 유지됩니다.",
      ],
      note: "다국어 App Store 배지 이미지를 포함한 정적 자산은 모두 musicpod.app에서 직접 제공되며 제3자 광고·추적 도메인에 요청하지 않습니다.",
    },
    {
      id: "use",
      title: "4. 정보 이용 목적과 근거",
      paragraphs: [
        "위의 제한된 정보는 앱과 웹사이트 제공, 선택 사항 기억, 서비스 보호 및 문제 해결, 문의 답변에만 사용합니다.",
        "법적 근거가 필요한 지역에서는 요청한 서비스 제공, 운영과 보안에 관한 정당한 이익, 법률 준수 또는 동의를 근거로 처리합니다. Apple Music 및 Spotify 접근 권한은 언제든 철회할 수 있습니다.",
      ],
    },
    {
      id: "sharing",
      title: "5. 서비스 제공업체 및 공개",
      paragraphs: ["MusicPod는 개인정보를 판매하거나 대여하지 않으며 교차 맥락 행동 광고 또는 맞춤형 광고를 위해 공유하지 않습니다."],
      items: [
        "Apple은 자체 약관에 따라 Apple Music 요청, 재생 및 계정 관련 정보를 처리하며 MusicPod와 독립적으로 운영됩니다.",
        "Spotify 연동을 선택한 경우 Spotify는 자체 개인정보 처리방침에 따라 인증, 보관함 요청 및 재생 정보를 처리합니다.",
        "Vercel은 당사를 대신해 musicpod.app 호스팅, 제공 및 보호를 위해 웹사이트 트래픽과 기술 로그를 처리합니다.",
        "법률 준수, 유효한 법적 절차 대응, 사용자·공공·당사의 권리 또는 서비스 보안 보호를 위해 합리적으로 필요한 경우 정보를 공개할 수 있습니다.",
      ],
      note: "당사를 대신해 정보를 처리하는 제공업체는 제공하는 서비스에만 정보를 사용하고 이 방침과 관련 법률에 따라 보호해야 합니다.",
      links: [
        { label: "Apple Music 및 개인정보 보호", target: "appleMusicPrivacy" },
        { label: "Apple 개인정보 처리방침", target: "applePrivacy" },
        { label: "Spotify 개인정보 처리방침", target: "spotifyPrivacy" },
        { label: "Vercel 개인정보 보호 고지", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 보유 및 보안",
      paragraphs: [
        "MusicPod는 개발자가 관리하는 Apple Music·Spotify 보관함이나 로컬 오디오 사본을 보유하지 않습니다. 로컬 파일과 앱 환경설정은 삭제하거나 앱을 제거할 때까지 기기에 남습니다. 웹사이트 환경설정은 위 기간 동안 유지됩니다.",
        "웹사이트 요청 및 보안 기록은 호스팅 제공업체가 운영, 보안 및 법적 필요에 따라 보유한 후 정책에 따라 삭제하거나 비식별화합니다. 문의 메시지는 답변, 적절한 기록 유지 및 법적 의무 이행에 필요한 기간만 보관합니다.",
        "처리하는 제한된 정보에 적합한 합리적인 기술적·관리적 보호조치를 사용하지만 어떤 전송이나 저장 방식도 완전한 보안을 보장할 수 없습니다.",
      ],
    },
    {
      id: "choices",
      title: "7. 선택권 및 개인정보 권리",
      paragraphs: ["MusicPod가 접근할 수 있는 정보는 사용자가 제어합니다."],
      items: [
        "Apple Music 접근: iPhone 설정의 개인정보 보호 및 보안과 미디어 및 Apple Music에서 MusicPod 권한을 변경할 수 있습니다.",
        "Spotify 접근: MusicPod에서 연결을 해제하거나 Spotify 계정 설정에서 언제든 권한을 철회할 수 있습니다.",
        "기기 내 데이터: 로컬 음악에서 곡을 삭제하거나 앱을 제거해 로컬 파일과 설정을 삭제할 수 있습니다(기기 백업 제외).",
        "웹사이트 환경설정: 브라우저에서 쿠키와 사이트 데이터를 지우거나 시스템 모드를 선택해 저장된 테마를 제거할 수 있습니다.",
        "법적 권리: 거주지에 따라 열람, 정정, 삭제, 처리 제한, 이동, 반대, 동의 철회 또는 답변에 대한 이의를 요청할 수 있습니다. 아래 연락처로 요청하세요.",
      ],
      note: "MusicPod에는 사용자 계정이 없고 음악 보관함을 보유하지 않으므로 당사가 사용자를 식별할 수 있는 데이터가 없을 수 있습니다. Apple이나 Spotify가 관리하는 정보는 각 플랫폼의 개인정보 도구를 이용하세요.",
      links: [
        { label: "Apple에서 데이터 관리", target: "applePrivacy" },
        { label: "Spotify 개인정보 처리방침", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. 아동 및 국제 처리",
      paragraphs: [
        "MusicPod는 아동의 개인정보를 고의로 수집하지 않습니다. 아동이 당사에 직접 개인정보를 보냈다고 생각하는 보호자는 연락해 주시면 확인 후 적절히 삭제하겠습니다.",
        "웹사이트 인프라는 사용자의 국가 밖에서 기술 정보를 처리할 수 있습니다. 필요한 경우 서비스 제공업체의 계약상 및 기타 보호조치에 의존합니다.",
      ],
    },
    {
      id: "changes",
      title: "9. 방침 변경",
      paragraphs: ["MusicPod 기능, 서비스 제공업체 또는 법적 의무가 바뀌면 이 방침을 업데이트할 수 있습니다. 개정본을 이 페이지에 게시하고 최종 업데이트 날짜를 변경합니다. 정보 처리에 중대한 영향이 있는 경우 법에서 요구하는 추가 통지 또는 동의를 제공합니다."],
    },
    {
      id: "contact",
      title: "10. 문의",
      paragraphs: [
        "개인정보 관련 질문이나 요청은 아래 이메일로 보내주세요. 적절한 답변을 위해 필요한 사항과 관련 국가 또는 지역을 알려주세요.",
        "Apple Account나 Spotify 암호, 인증 코드 또는 음악 보관함 사본을 보내지 마세요. 당사는 이를 요구하지 않습니다.",
      ],
    },
  ],
  contact: { operator: "운영자", product: "제품", email: "개인정보 이메일" },
  translationNote: "이 방침은 여러 언어로 제공됩니다. 번역 간 차이가 있으면 관련 법률이 허용하는 범위에서 영어 버전이 우선합니다.",
};

const es: PrivacyMessages = {
  meta: { title: "Política de privacidad — MusicPod", description: "Cómo trata MusicPod el acceso a Apple Music, la conexión opcional con Spotify, los archivos de audio locales, los ajustes del dispositivo y el sitio oficial." },
  pageLabel: "Privacidad",
  back: "Volver a MusicPod",
  hero: {
    eyebrow: "Privacidad desde el diseño",
    title: "Tu música sigue siendo tuya.",
    intro: "MusicPod está hecho para reproducir tu música, no para crear un perfil sobre ti. La app no tiene cuentas de MusicPod, publicidad ni SDK de seguimiento de terceros. El audio importado permanece en tu iPhone y solo accede a Apple Music o Spotify con tu permiso, sin almacenarlos en nuestros servidores.",
    updated: "Última actualización: 25 de noviembre de 2026",
    version: "Versión 1.1",
  },
  principles: [
    { title: "Sin cuenta de MusicPod", body: "Usa la app sin crear un perfil ni facilitarnos tu nombre." },
    { title: "Sin anuncios ni seguimiento", body: "No vendemos información personal ni la compartimos para publicidad dirigida." },
    { title: "Tu biblioteca sigue contigo", body: "El audio local queda en tu iPhone y no copiamos bibliotecas a servidores propios." },
  ],
  contents: "En esta página",
  sections: [
    {
      id: "scope",
      title: "1. Alcance y responsable",
      paragraphs: [
        "Esta política explica cómo el desarrollador y operador de MusicPod trata la información cuando usas la app MusicPod para iPhone o visitas el sitio oficial musicpod.app. «MusicPod» y «nosotros» se refieren al operador indicado en la sección de contacto.",
        "Esta política no regula Apple Music, Spotify, App Store ni otros servicios operados de forma independiente por Apple, Spotify u otros terceros, que aplican sus propias condiciones de privacidad.",
      ],
    },
    {
      id: "app-data",
      title: "2. Información tratada por la app",
      paragraphs: ["Según las fuentes de música que elijas utilizar, MusicPod solo trata la información mínima necesaria para mostrar y reproducir tu audio en el iPhone."],
      items: [
        "Apple Music (mediante MusicKit tras tu permiso): metadatos de biblioteca y catálogo, estado de reproducción y capacidad de suscripción.",
        "Spotify (opcional, solo si conectas tu cuenta de Spotify): canciones, álbumes y playlists guardados, así como el control de reproducción directamente con Spotify.",
        "Música local: los archivos de audio, carpetas y letras LRC importados desde la app Archivos se guardan localmente en MusicPod en tu iPhone para escucha sin conexión y nunca se suben a nuestros servidores.",
        "Preferencias de la app, como colores del cuerpo y la rueda, temas, fotos de fondo y accesibilidad. Se guardan localmente en tu dispositivo.",
      ],
      note: "MusicPod no recibe tu contraseña de Apple ni de Spotify, no conserva copias de tus bibliotecas o archivos en servidores ni envía tu historial de escucha a un servidor operado por MusicPod.",
    },
    {
      id: "website-data",
      title: "3. Información tratada por el sitio web",
      paragraphs: ["El sitio no usa píxeles publicitarios ni analítica de terceros. Como la mayoría de sitios, su infraestructura de alojamiento trata información técnica limitada para entregar las páginas y mantener la seguridad."],
      items: [
        "Datos de solicitud y seguridad, que pueden incluir dirección IP, ubicación aproximada derivada de ella, navegador y dispositivo, página solicitada, fecha y hora, y señales de errores o abuso. Actualmente el sitio está alojado en Vercel.",
        "Una cookie de preferencia musicpod_locale, que solo se establece al elegir un idioma y se conserva hasta 12 meses.",
        "Un valor musicpod-theme en el almacenamiento local del navegador al elegir apariencia clara u oscura. Permanece hasta que eliges Sistema o borras los datos del sitio.",
      ],
      note: "Los recursos estáticos del sitio, incluidas las insignias oficiales de App Store, se alojan directamente en musicpod.app sin cargar recursos desde dominios publicitarios o de seguimiento.",
    },
    {
      id: "use",
      title: "4. Cómo y por qué usamos la información",
      paragraphs: [
        "Usamos la información limitada descrita arriba únicamente para prestar la app y el sitio, recordar tus elecciones, proteger y solucionar problemas del servicio y responder cuando nos contactas.",
        "Cuando se exige una base jurídica, el tratamiento se basa en prestar el servicio solicitado, nuestros intereses legítimos de operación y seguridad, el cumplimiento legal o tu consentimiento. Puedes retirar el acceso a Apple Music o Spotify en cualquier momento.",
      ],
    },
    {
      id: "sharing",
      title: "5. Proveedores y divulgación",
      paragraphs: ["MusicPod no vende ni alquila información personal y no la comparte para publicidad comportamental entre contextos o publicidad dirigida."],
      items: [
        "Apple trata las solicitudes de Apple Music, la reproducción y la información de cuenta conforme a sus propias condiciones y opera de forma independiente de MusicPod.",
        "Si conectas Spotify, Spotify trata la autorización de cuenta, las solicitudes de biblioteca y la reproducción conforme a su propia política de privacidad.",
        "Vercel trata el tráfico y los registros técnicos en nuestro nombre para alojar, entregar y proteger musicpod.app.",
        "Podemos divulgar información cuando sea razonablemente necesario para cumplir la ley, responder a procesos legales válidos o proteger a usuarios, al público, nuestros derechos o la seguridad del servicio.",
      ],
      note: "Los proveedores que actúan por nuestra cuenta deben tratar la información solo para los servicios prestados y protegerla de acuerdo con esta política y la ley aplicable.",
      links: [
        { label: "Apple Music y la privacidad", target: "appleMusicPrivacy" },
        { label: "Política de privacidad de Apple", target: "applePrivacy" },
        { label: "Política de privacidad de Spotify", target: "spotifyPrivacy" },
        { label: "Aviso de privacidad de Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Conservación y seguridad",
      paragraphs: [
        "MusicPod no conserva copias bajo control del desarrollador de tus bibliotecas de Apple Music o Spotify ni de tu música local. Los archivos importados y preferencias permanecen en tu dispositivo hasta que los borras o eliminas la app.",
        "El proveedor de alojamiento conserva los registros de solicitudes y seguridad solo por necesidades operativas, de seguridad y legales, y después los elimina o desidentifica conforme a sus prácticas. Tus mensajes se conservan solo para responder, mantener un registro adecuado y cumplir obligaciones legales.",
        "Aplicamos salvaguardas técnicas y organizativas razonables para la información limitada que tratamos, pero ningún método de transmisión o almacenamiento puede garantizar una seguridad absoluta.",
      ],
    },
    {
      id: "choices",
      title: "7. Tus opciones y derechos",
      paragraphs: ["Tú controlas la información a la que puede acceder MusicPod."],
      items: [
        "Acceso a Apple Music: cambia el permiso de MusicPod en Ajustes del iPhone, dentro de Privacidad y seguridad y Contenido y Apple Music.",
        "Acceso a Spotify: desconecta Spotify en MusicPod o revoca el acceso desde los ajustes de tu cuenta de Spotify en cualquier momento.",
        "Datos del dispositivo: borra pistas en Música local o elimina la app para borrar sus archivos y ajustes locales, salvo copias de seguridad bajo tu control.",
        "Preferencias web: borra cookies y datos del sitio en el navegador o elige apariencia Sistema para eliminar el tema guardado.",
        "Derechos legales: según tu ubicación, puedes solicitar acceso, rectificación, eliminación, limitación, portabilidad u oposición, retirar el consentimiento o recurrir una respuesta. Contáctanos para solicitarlo.",
      ],
      note: "Como MusicPod no tiene cuentas y no conserva copias de tus bibliotecas, es posible que no tengamos datos que permitan identificarte. Para información controlada por Apple o Spotify, usa sus herramientas de privacidad.",
      links: [
        { label: "Gestionar datos con Apple", target: "applePrivacy" },
        { label: "Política de privacidad de Spotify", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. Menores y tratamiento internacional",
      paragraphs: [
        "MusicPod no recopila deliberadamente información personal de menores. Si eres su padre, madre o tutor y crees que un menor nos envió información directamente, contáctanos para que podamos revisarla y eliminarla cuando corresponda.",
        "La infraestructura del sitio puede tratar información técnica fuera de tu país. Cuando sea necesario, nos basamos en salvaguardas contractuales y de otro tipo ofrecidas por nuestros proveedores para las transferencias internacionales.",
      ],
    },
    {
      id: "changes",
      title: "9. Cambios en esta política",
      paragraphs: ["Podemos actualizar esta política cuando cambien las funciones, los proveedores o las obligaciones legales de MusicPod. Publicaremos aquí la versión revisada y cambiaremos la fecha de actualización. Si un cambio afecta materialmente al tratamiento, daremos un aviso adicional o pediremos consentimiento cuando sea necesario."],
    },
    {
      id: "contact",
      title: "10. Contacto",
      paragraphs: [
        "Para preguntas o solicitudes de privacidad, escribe a la dirección siguiente. Indica qué necesitas y el país o región aplicable para que podamos responder adecuadamente.",
        "No envíes la contraseña de tu cuenta de Apple o Spotify, códigos de autenticación ni una copia de tu biblioteca. Nunca te los pediremos.",
      ],
    },
  ],
  contact: { operator: "Operador", product: "Producto", email: "Correo de privacidad" },
  translationNote: "Esta política está disponible en varios idiomas. Si hay diferencias, prevalece la versión inglesa en la medida permitida por la ley aplicable.",
};

const fr: PrivacyMessages = {
  meta: { title: "Politique de confidentialité — MusicPod", description: "Comment MusicPod traite l’accès à Apple Music, la connexion facultative à Spotify, les fichiers audio locaux, les réglages sur l’appareil et le site officiel." },
  pageLabel: "Confidentialité",
  back: "Retour à MusicPod",
  hero: {
    eyebrow: "Confidentialité dès la conception",
    title: "Votre musique reste la vôtre.",
    intro: "MusicPod est conçu pour lire votre musique, pas pour établir votre profil. L’app ne comporte ni compte MusicPod, ni publicité, ni SDK de suivi tiers. Les fichiers importés restent sur votre iPhone et l’app n’accède à Apple Music ou Spotify qu’avec votre accord, sans jamais les stocker sur nos serveurs.",
    updated: "Dernière mise à jour : 25 novembre 2026",
    version: "Version 1.1",
  },
  principles: [
    { title: "Aucun compte MusicPod", body: "Utilisez l’app sans créer de profil ni nous donner votre nom." },
    { title: "Sans publicité ni suivi", body: "Nous ne vendons pas les données personnelles et ne les partageons pas pour la publicité ciblée." },
    { title: "Votre musique reste chez vous", body: "Les fichiers locaux restent sur l’appareil ; aucune bibliothèque n’est copiée sur un serveur." },
  ],
  contents: "Sur cette page",
  sections: [
    {
      id: "scope",
      title: "1. Champ d’application et responsable",
      paragraphs: [
        "Cette politique explique comment le développeur et l’exploitant de MusicPod traitent les informations lorsque vous utilisez l’app MusicPod pour iPhone ou consultez le site officiel musicpod.app. « MusicPod », « nous » et « notre » désignent l’exploitant indiqué dans la section de contact.",
        "Elle ne régit pas Apple Music, Spotify, l’App Store ni les autres services exploités indépendamment par Apple, Spotify ou un tiers, qui appliquent leurs propres règles de confidentialité.",
      ],
    },
    {
      id: "app-data",
      title: "2. Informations traitées par l’app",
      paragraphs: ["Selon les sources musicales que vous utilisez, MusicPod traite uniquement le minimum d’informations nécessaire pour afficher et lire votre audio sur votre iPhone."],
      items: [
        "Apple Music (via MusicKit après votre accord) : métadonnées de bibliothèque et de catalogue, état de lecture et capacité d’abonnement.",
        "Spotify (facultatif, uniquement si vous connectez votre compte Spotify) : titres, albums et playlists enregistrés et contrôle de lecture directement via l’app et l’API Spotify.",
        "Musique locale : les fichiers audio, dossiers et paroles LRC importés depuis l’app Fichiers sont stockés localement dans MusicPod sur votre iPhone pour l’écoute hors ligne et ne sont jamais envoyés sur nos serveurs.",
        "Préférences de l’app : couleurs du boîtier et de la molette, thèmes, photos d’arrière-plan et réglages d’accessibilité, stockés localement sur votre appareil.",
      ],
      note: "MusicPod ne reçoit pas vos mots de passe Apple ou Spotify, ne conserve aucune copie de vos bibliothèques ou fichiers locaux sur un serveur et n’envoie pas votre historique d’écoute à un serveur exploité par MusicPod.",
    },
    {
      id: "website-data",
      title: "3. Informations traitées par le site",
      paragraphs: ["Le site n’utilise ni pixels publicitaires ni outils d’analyse tiers. Comme la plupart des sites, son infrastructure d’hébergement traite des informations techniques limitées pour fournir les pages et assurer la sécurité."],
      items: [
        "Données de requête et de sécurité pouvant inclure l’adresse IP, une localisation approximative déduite de l’IP, le navigateur et l’appareil, la page demandée, la date et l’heure, et des signaux d’erreur ou d’abus. Le site est actuellement hébergé par Vercel.",
        "Un cookie de préférence musicpod_locale, défini uniquement lorsque vous choisissez une langue et conservé jusqu’à 12 mois.",
        "Une valeur musicpod-theme dans le stockage local du navigateur lorsque vous choisissez l’apparence claire ou sombre. Elle subsiste jusqu’au choix Système ou à l’effacement des données du site.",
      ],
      note: "Les ressources statiques du site, y compris les badges App Store localisés, sont hébergées directement sur musicpod.app sans requête vers des domaines publicitaires ou de suivi.",
    },
    {
      id: "use",
      title: "4. Utilisation et fondements",
      paragraphs: [
        "Nous utilisons les informations limitées ci-dessus uniquement pour fournir l’app et le site, mémoriser vos choix, protéger et dépanner le service et répondre à vos messages.",
        "Lorsqu’un fondement juridique est requis, le traitement repose sur la fourniture du service demandé, nos intérêts légitimes d’exploitation et de sécurité, le respect de la loi ou votre consentement. Vous pouvez retirer l’accès à Apple Music ou Spotify à tout moment.",
      ],
    },
    {
      id: "sharing",
      title: "5. Prestataires et divulgation",
      paragraphs: ["MusicPod ne vend ni ne loue les données personnelles et ne les partage pas pour la publicité comportementale intercontextuelle ou ciblée."],
      items: [
        "Apple traite les requêtes Apple Music, la lecture et les informations de compte selon ses propres conditions et opère indépendamment de MusicPod.",
        "Si vous connectez Spotify, Spotify traite l’autorisation de compte, les requêtes de bibliothèque et la lecture selon sa propre politique de confidentialité.",
        "Vercel traite pour notre compte le trafic et les journaux techniques afin d’héberger, fournir et sécuriser musicpod.app.",
        "Nous pouvons divulguer des informations si cela est raisonnablement nécessaire pour respecter la loi, répondre à une procédure valide ou protéger les utilisateurs, le public, nos droits ou la sécurité du service.",
      ],
      note: "Les prestataires agissant pour notre compte doivent traiter les informations uniquement pour leurs services et les protéger conformément à cette politique et à la loi applicable.",
      links: [
        { label: "Apple Music et confidentialité", target: "appleMusicPrivacy" },
        { label: "Politique de confidentialité d’Apple", target: "applePrivacy" },
        { label: "Politique de confidentialité de Spotify", target: "spotifyPrivacy" },
        { label: "Avis de confidentialité de Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Conservation et sécurité",
      paragraphs: [
        "MusicPod ne conserve aucune copie contrôlée par le développeur de vos bibliothèques Apple Music ou Spotify ni de votre audio local. Les fichiers importés et préférences restent sur votre appareil jusqu’à leur suppression ou la désinstallation de l’app.",
        "Le prestataire d’hébergement ne conserve les journaux de requêtes et de sécurité que pour ses besoins opérationnels, de sécurité et juridiques, puis les supprime ou les désidentifie selon ses pratiques. Vos messages sont gardés le temps nécessaire pour répondre, conserver une trace appropriée et respecter nos obligations.",
        "Nous appliquons des mesures techniques et organisationnelles raisonnables adaptées aux informations limitées traitées. Aucune méthode de transmission ou de stockage ne peut être garantie totalement sûre.",
      ],
    },
    {
      id: "choices",
      title: "7. Vos choix et vos droits",
      paragraphs: ["Vous gardez le contrôle des informations auxquelles MusicPod peut accéder."],
      items: [
        "Accès à Apple Music : modifiez l’autorisation de MusicPod dans Réglages de l’iPhone, sous Confidentialité et sécurité puis Médias et Apple Music.",
        "Accès à Spotify : déconnectez Spotify dans MusicPod ou révoquez l’accès dans les paramètres de votre compte Spotify à tout moment.",
        "Données sur l’appareil : supprimez des morceaux dans Musique locale ou désinstallez l’app pour effacer ses fichiers et réglages locaux (hors sauvegardes sous votre contrôle).",
        "Préférences du site : effacez les cookies et les données de site dans le navigateur, ou choisissez l’apparence Système pour supprimer le thème enregistré.",
        "Droits légaux : selon votre lieu de résidence, vous pouvez demander l’accès, la rectification, l’effacement, la limitation, la portabilité ou vous opposer au traitement, retirer votre consentement ou contester une réponse. Contactez-nous pour exercer ces droits.",
      ],
      note: "MusicPod n’ayant pas de comptes utilisateurs et ne conservant pas vos bibliothèques musicales, nous pouvons ne détenir aucune donnée permettant de vous identifier. Pour les informations contrôlées par Apple ou Spotify, utilisez leurs outils de confidentialité.",
      links: [
        { label: "Gérer vos données avec Apple", target: "applePrivacy" },
        { label: "Politique de confidentialité de Spotify", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. Enfants et traitement international",
      paragraphs: [
        "MusicPod ne collecte pas sciemment de données personnelles d’enfants. Si vous êtes parent ou tuteur et pensez qu’un enfant nous a envoyé directement des informations, contactez-nous afin que nous puissions les examiner et les supprimer le cas échéant.",
        "L’infrastructure du site peut traiter des informations techniques dans d’autres pays. Lorsque cela est requis, nous nous appuyons sur les garanties contractuelles et autres fournies par nos prestataires pour les transferts internationaux.",
      ],
    },
    {
      id: "changes",
      title: "9. Modifications de cette politique",
      paragraphs: ["Nous pouvons mettre à jour cette politique si les fonctions, prestataires ou obligations légales de MusicPod changent. La version révisée sera publiée ici avec une nouvelle date. Si une modification affecte sensiblement le traitement, nous fournirons un avis supplémentaire ou demanderons votre consentement lorsque la loi l’exige."],
    },
    {
      id: "contact",
      title: "10. Nous contacter",
      paragraphs: [
        "Pour toute question ou demande liée à la confidentialité, écrivez à l’adresse ci-dessous. Indiquez votre besoin et le pays ou la région concernée afin que nous puissions répondre correctement.",
        "N’envoyez jamais votre mot de passe Apple ou Spotify, de code d’authentification ou de copie de votre bibliothèque. Nous ne vous les demanderons jamais.",
      ],
    },
  ],
  contact: { operator: "Exploitant", product: "Produit", email: "E-mail confidentialité" },
  translationNote: "Cette politique est disponible en plusieurs langues. En cas de divergence, la version anglaise prévaut dans la mesure permise par la loi applicable.",
};

const de: PrivacyMessages = {
  meta: { title: "Datenschutzerklärung — MusicPod", description: "Wie MusicPod Apple Music-Zugriff, optionale Spotify-Verbindungen, lokale Audiodateien, Geräteeinstellungen und Informationen der Website verarbeitet." },
  pageLabel: "Datenschutz",
  back: "Zurück zu MusicPod",
  hero: {
    eyebrow: "Datenschutz von Anfang an",
    title: "Deine Musik bleibt deine.",
    intro: "MusicPod wurde entwickelt, um deine Musik abzuspielen – nicht, um Profile zu erstellen. Die App hat kein MusicPod-Konto, keine Werbung und keine Tracking-SDKs. Importierte Audiodateien bleiben auf deinem iPhone; auf Apple Music oder Spotify wird nur mit deiner Erlaubnis zugegriffen und nichts auf unseren Servern gespeichert.",
    updated: "Zuletzt aktualisiert: 25. November 2026",
    version: "Version 1.1",
  },
  principles: [
    { title: "Kein MusicPod-Konto", body: "Nutze die App ohne Profil und ohne uns deinen Namen mitzuteilen." },
    { title: "Keine Werbung, kein Tracking", body: "Wir verkaufen keine personenbezogenen Daten und teilen sie nicht für gezielte Werbung." },
    { title: "Musik bleibt bei dir", body: "Lokale Dateien bleiben auf dem Gerät; Mediatheken werden nie auf Entwicklerserver kopiert." },
  ],
  contents: "Auf dieser Seite",
  sections: [
    {
      id: "scope",
      title: "1. Geltungsbereich und Betreiber",
      paragraphs: [
        "Diese Erklärung beschreibt, wie der Entwickler und Betreiber von MusicPod Informationen verarbeitet, wenn du die MusicPod App für iPhone oder die offizielle Website musicpod.app nutzt. „MusicPod“, „wir“ und „uns“ bezeichnen den im Kontaktabschnitt genannten Betreiber.",
        "Sie gilt nicht für Apple Music, Spotify, den App Store oder andere unabhängig von Apple, Spotify oder Dritten betriebene Dienste. Für deren Verarbeitung gelten die jeweiligen Datenschutzbestimmungen.",
      ],
    },
    {
      id: "app-data",
      title: "2. Von der App verarbeitete Informationen",
      paragraphs: ["Je nachdem, welche Musikquellen du nutzt, verarbeitet MusicPod auf deinem iPhone nur die minimal nötigen Informationen zur Anzeige und Wiedergabe."],
      items: [
        "Apple Music (über MusicKit nach deiner Erlaubnis): Mediathek- und Katalogmetadaten, Wiedergabestatus sowie Abonnementfunktion.",
        "Spotify (optional, nur bei Verbindung deines Spotify-Kontos): gespeicherte Titel, Alben, Playlists und Wiedergabesteuerung direkt über die Spotify-App und API.",
        "Lokale Musik: aus der Dateien-App importierte Audiodateien, Ordner und LRC-Liedtexte werden lokal in MusicPod auf deinem iPhone gespeichert und niemals auf unsere Server hochgeladen.",
        "App-Einstellungen wie Gehäuse- und Radfarben, Designs, Hintergrundfotos und Bedienungshilfen. Diese werden lokal auf deinem Gerät gespeichert.",
      ],
      note: "MusicPod erhält weder Passwörter deines Apple- oder Spotify-Kontos noch speichert es Serverkopien deiner Mediatheken oder lokalen Dateien und sendet keinen Hörverlauf an eigene Server.",
    },
    {
      id: "website-data",
      title: "3. Von der Website verarbeitete Informationen",
      paragraphs: ["Die Website verwendet keine Werbepixel oder Analysedienste Dritter. Wie bei den meisten Websites verarbeitet die Hosting-Infrastruktur begrenzte technische Informationen, um Seiten auszuliefern und den Dienst zu schützen."],
      items: [
        "Anfrage- und Sicherheitsdaten, darunter möglicherweise IP-Adresse, daraus abgeleiteter ungefährer Standort, Browser- und Gerätetyp, aufgerufene Seite, Datum und Uhrzeit sowie Fehler- oder Missbrauchssignale. Die Website wird derzeit bei Vercel gehostet.",
        "Ein musicpod_locale-Präferenz-Cookie, das nur bei einer Sprachauswahl gesetzt und bis zu 12 Monate gespeichert wird.",
        "Ein musicpod-theme-Wert im lokalen Browserspeicher, wenn du helle oder dunkle Darstellung wählst. Er bleibt bis zur Auswahl von System oder dem Löschen der Website-Daten erhalten.",
      ],
      note: "Statische Website-Dateien einschließlich der lokalisierten App Store-Badges werden direkt auf musicpod.app gehostet – ohne Anfragen an Werbe- oder Tracking-Domains.",
    },
    {
      id: "use",
      title: "4. Verwendung und Rechtsgrundlagen",
      paragraphs: [
        "Wir verwenden die oben beschriebenen begrenzten Informationen nur, um App und Website bereitzustellen, deine Auswahl zu speichern, den Dienst zu schützen und Fehler zu beheben sowie auf Nachrichten zu antworten.",
        "Soweit eine Rechtsgrundlage erforderlich ist, stützt sich die Verarbeitung auf die angeforderte Leistung, unsere berechtigten Interessen an Betrieb und Sicherheit, gesetzliche Pflichten oder deine Einwilligung. Zugriffe auf Apple Music oder Spotify lassen sich jederzeit widerrufen.",
      ],
    },
    {
      id: "sharing",
      title: "5. Dienstleister und Offenlegung",
      paragraphs: ["MusicPod verkauft oder vermietet keine personenbezogenen Daten und teilt sie nicht für kontextübergreifende verhaltensbezogene oder gezielte Werbung."],
      items: [
        "Apple verarbeitet Apple Music-Anfragen, Wiedergabe- und Accountinformationen nach eigenen Bedingungen und unabhängig von MusicPod.",
        "Wenn du Spotify verbindest, verarbeitet Spotify Kontofreigaben, Mediathek-Anfragen und Wiedergabe nach den eigenen Datenschutzrichtlinien von Spotify.",
        "Vercel verarbeitet in unserem Auftrag Website-Verkehr und technische Protokolle, um musicpod.app zu hosten, auszuliefern und zu schützen.",
        "Wir können Informationen offenlegen, wenn dies vernünftigerweise erforderlich ist, um Gesetze oder gültige Verfahren einzuhalten oder Nutzer, Öffentlichkeit, unsere Rechte oder die Dienstsicherheit zu schützen.",
      ],
      note: "Dienstleister in unserem Auftrag dürfen Informationen nur für ihre Leistungen verarbeiten und müssen sie gemäß dieser Erklärung und geltendem Recht schützen.",
      links: [
        { label: "Apple Music & Datenschutz", target: "appleMusicPrivacy" },
        { label: "Apple Datenschutzrichtlinie", target: "applePrivacy" },
        { label: "Spotify Datenschutzrichtlinie", target: "spotifyPrivacy" },
        { label: "Vercel Datenschutzhinweis", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Aufbewahrung und Sicherheit",
      paragraphs: [
        "MusicPod bewahrt keine Serverkopien deiner Apple Music- oder Spotify-Mediathek oder deiner lokalen Audiodateien auf. Lokale Dateien und Einstellungen bleiben bis zum Löschen oder Entfernen der App auf deinem Gerät.",
        "Anfrage- und Sicherheitsprotokolle werden vom Hostinganbieter nur für betriebliche, Sicherheits- und Rechtszwecke aufbewahrt und danach gemäß dessen Praxis gelöscht oder anonymisiert. Nachrichten werden nur so lange gespeichert, wie es für Antwort, angemessene Dokumentation und rechtliche Pflichten nötig ist.",
        "Wir setzen angemessene technische und organisatorische Schutzmaßnahmen für die begrenzten Informationen ein. Kein Übertragungs- oder Speicherverfahren kann vollständig sicher garantiert werden.",
      ],
    },
    {
      id: "choices",
      title: "7. Deine Wahlmöglichkeiten und Rechte",
      paragraphs: ["Du kontrollierst, auf welche Informationen MusicPod zugreifen kann."],
      items: [
        "Apple Music-Zugriff: Ändere die MusicPod-Berechtigung in den iPhone-Einstellungen unter Datenschutz & Sicherheit und Medien & Apple Music.",
        "Spotify-Zugriff: Trenne Spotify in MusicPod oder widerrufe die Berechtigung jederzeit in deinen Spotify-Kontoeinstellungen.",
        "Lokale Daten: Lösche Titel unter Lokale Musik oder entferne die App, um lokale Dateien und Einstellungen zu löschen (vorbehaltlich eigener Gerätesicherungen).",
        "Website-Präferenzen: Lösche Cookies und Website-Daten im Browser oder wähle System, um die gespeicherte Designauswahl zu entfernen.",
        "Gesetzliche Rechte: Je nach Wohnort kannst du Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit oder Widerspruch verlangen, Einwilligung widerrufen oder eine Antwort anfechten. Kontaktiere uns dazu.",
      ],
      note: "Da MusicPod keine Nutzerkonten führt und keine Musikmediatheken speichert, haben wir möglicherweise keine Daten, die dich identifizieren. Für von Apple oder Spotify kontrollierte Daten nutze deren Datenschutzwerkzeuge.",
      links: [
        { label: "Daten bei Apple verwalten", target: "applePrivacy" },
        { label: "Spotify Datenschutzrichtlinie", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. Kinder und internationale Verarbeitung",
      paragraphs: [
        "MusicPod sammelt nicht wissentlich personenbezogene Daten von Kindern. Wenn du als Elternteil oder Vormund glaubst, ein Kind habe uns direkt Informationen gesendet, kontaktiere uns zur Prüfung und gegebenenfalls Löschung.",
        "Die Website-Infrastruktur kann technische Informationen außerhalb deines Landes verarbeiten. Soweit erforderlich, stützen wir internationale Übermittlungen auf vertragliche und andere Garantien unserer Dienstleister.",
      ],
    },
    {
      id: "changes",
      title: "9. Änderungen dieser Erklärung",
      paragraphs: ["Wir können diese Erklärung aktualisieren, wenn sich Funktionen, Dienstleister oder rechtliche Pflichten von MusicPod ändern. Die neue Fassung wird hier mit aktualisiertem Datum veröffentlicht. Bei wesentlichen Auswirkungen geben wir zusätzliche Hinweise oder holen eine Einwilligung ein, soweit erforderlich."],
    },
    {
      id: "contact",
      title: "10. Kontakt",
      paragraphs: [
        "Sende Fragen oder Datenschutzanfragen an die folgende Adresse. Nenne dein Anliegen und das betroffene Land oder die Region, damit wir angemessen antworten können.",
        "Sende uns niemals das Passwort deines Apple- oder Spotify-Kontos, Authentifizierungscodes oder eine Kopie deiner Mediathek. Wir werden nie danach fragen.",
      ],
    },
  ],
  contact: { operator: "Betreiber", product: "Produkt", email: "Datenschutz-E-Mail" },
  translationNote: "Diese Erklärung ist in mehreren Sprachen verfügbar. Bei Abweichungen gilt die englische Fassung, soweit das anwendbare Recht dies zulässt.",
};

const ptBR: PrivacyMessages = {
  meta: { title: "Política de Privacidade — MusicPod", description: "Como o MusicPod trata o acesso ao Apple Music, a conexão opcional com o Spotify, arquivos de áudio locais, preferências no dispositivo e o site oficial." },
  pageLabel: "Privacidade",
  back: "Voltar ao MusicPod",
  hero: {
    eyebrow: "Privacidade desde o design",
    title: "Sua música continua sendo sua.",
    intro: "O MusicPod foi feito para tocar sua música, não para criar um perfil sobre você. O app não tem conta MusicPod, publicidade nem SDKs de rastreamento de terceiros. Arquivos importados ficam no seu iPhone, e o Apple Music ou o Spotify só são acessados com sua permissão, nunca armazenados em nossos servidores.",
    updated: "Última atualização: 25 de novembro de 2026",
    version: "Versão 1.1",
  },
  principles: [
    { title: "Sem conta MusicPod", body: "Use o app sem criar um perfil ou informar seu nome." },
    { title: "Sem anúncios ou rastreamento", body: "Não vendemos informações pessoais nem as compartilhamos para publicidade direcionada." },
    { title: "Sua música fica com você", body: "Arquivos locais permanecem no iPhone e bibliotecas nunca são copiadas para servidores próprios." },
  ],
  contents: "Nesta página",
  sections: [
    {
      id: "scope",
      title: "1. Escopo e responsável",
      paragraphs: [
        "Esta política explica como o desenvolvedor e operador do MusicPod tratam informações quando você usa o app MusicPod para iPhone ou visita o site oficial musicpod.app. “MusicPod” e “nós” se referem ao operador indicado na seção de contato.",
        "Ela não rege o Apple Music, o Spotify, a App Store ou outros serviços operados de forma independente pela Apple, pelo Spotify ou por terceiros; esses serviços seguem seus próprios termos de privacidade.",
      ],
    },
    {
      id: "app-data",
      title: "2. Informações tratadas pelo app",
      paragraphs: ["Conforme as fontes de música que você escolher usar, o MusicPod trata apenas o mínimo de informações necessárias para exibir e reproduzir seu áudio no iPhone."],
      items: [
        "Apple Music (via MusicKit após sua permissão): metadados da biblioteca e catálogo, estado da reprodução e capacidade da assinatura.",
        "Spotify (opcional, apenas se você conectar sua conta do Spotify): músicas, álbuns, playlists salvos e controle de reprodução diretamente via app e API do Spotify.",
        "Música local: arquivos de áudio, pastas e letras em LRC importados do app Arquivos ficam armazenados localmente no MusicPod no seu iPhone para ouvir offline e nunca são enviados aos nossos servidores.",
        "Preferências do app, como cores do corpo e da roda, temas, fotos de fundo e acessibilidade. Elas são armazenadas localmente no dispositivo.",
      ],
      note: "O MusicPod não recebe a senha da sua Conta Apple nem do Spotify, não mantém cópia em servidor das suas bibliotecas ou arquivos locais e não envia seu histórico de reprodução para servidores operados pelo MusicPod.",
    },
    {
      id: "website-data",
      title: "3. Informações tratadas pelo site",
      paragraphs: ["O site não usa pixels de publicidade nem análise de terceiros. Como a maioria dos sites, sua infraestrutura de hospedagem trata informações técnicas limitadas para entregar páginas e manter o serviço seguro."],
      items: [
        "Dados de solicitação e segurança, que podem incluir endereço IP, localização aproximada derivada do IP, navegador e dispositivo, página solicitada, data e hora e sinais de erro ou abuso. O site é hospedado atualmente pela Vercel.",
        "Um cookie de preferência musicpod_locale, definido apenas quando você escolhe um idioma e mantido por até 12 meses.",
        "Um valor musicpod-theme no armazenamento local do navegador quando você escolhe aparência clara ou escura. Ele permanece até você selecionar Sistema ou limpar os dados do site.",
      ],
      note: "Os recursos estáticos do site, incluindo os selos localizados da App Store, são hospedados diretamente em musicpod.app sem solicitações a domínios de anúncios ou rastreamento.",
    },
    {
      id: "use",
      title: "4. Como e por que usamos informações",
      paragraphs: [
        "Usamos as informações limitadas acima somente para oferecer o app e o site, lembrar suas escolhas, proteger e solucionar problemas do serviço e responder quando você entra em contato.",
        "Quando uma base legal é necessária, o tratamento se apoia na prestação do serviço solicitado, em nossos interesses legítimos de operação e segurança, no cumprimento da lei ou no seu consentimento. Você pode revogar o acesso ao Apple Music ou ao Spotify a qualquer momento.",
      ],
    },
    {
      id: "sharing",
      title: "5. Prestadores e divulgação",
      paragraphs: ["O MusicPod não vende nem aluga informações pessoais e não as compartilha para publicidade comportamental entre contextos ou publicidade direcionada."],
      items: [
        "A Apple trata solicitações do Apple Music, reprodução e informações de conta segundo seus próprios termos e opera independentemente do MusicPod.",
        "Se você conectar o Spotify, o Spotify trata a autorização da conta, solicitações da biblioteca e reprodução conforme sua própria política de privacidade.",
        "A Vercel trata o tráfego do site e registros técnicos em nosso nome para hospedar, entregar e proteger musicpod.app.",
        "Podemos divulgar informações quando razoavelmente necessário para cumprir a lei, responder a processo legal válido ou proteger usuários, o público, nossos direitos ou a segurança do serviço.",
      ],
      note: "Prestadores que atuam em nosso nome devem tratar informações apenas para os serviços oferecidos e protegê-las de acordo com esta política e a lei aplicável.",
      links: [
        { label: "Apple Music e Privacidade", target: "appleMusicPrivacy" },
        { label: "Política de Privacidade da Apple", target: "applePrivacy" },
        { label: "Política de Privacidade do Spotify", target: "spotifyPrivacy" },
        { label: "Aviso de Privacidade da Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Retenção e segurança",
      paragraphs: [
        "O MusicPod não retém cópia sob controle do desenvolvedor das suas bibliotecas do Apple Music ou Spotify nem do seu áudio local. Arquivos importados e preferências ficam no dispositivo até serem apagados ou o app ser removido.",
        "Registros de solicitação e segurança são mantidos pelo provedor de hospedagem apenas por necessidades operacionais, de segurança e legais, e depois apagados ou desidentificados conforme suas práticas. Suas mensagens são mantidas apenas para responder, preservar um registro adequado e cumprir obrigações legais.",
        "Aplicamos medidas técnicas e organizacionais razoáveis para as informações limitadas que tratamos, mas nenhum método de transmissão ou armazenamento pode ser garantido como totalmente seguro.",
      ],
    },
    {
      id: "choices",
      title: "7. Suas escolhas e direitos",
      paragraphs: ["Você controla as informações que o MusicPod pode acessar."],
      items: [
        "Acesso ao Apple Music: altere a permissão do MusicPod nos Ajustes do iPhone, em Privacidade e Segurança e Mídia e Apple Music.",
        "Acesso ao Spotify: desconecte o Spotify no MusicPod ou revogue o acesso nas configurações da sua conta do Spotify a qualquer momento.",
        "Dados no dispositivo: apague faixas em Música local ou remova o app para apagar arquivos e ajustes locais, ressalvadas cópias em backups sob seu controle.",
        "Preferências do site: limpe cookies e dados do site no navegador ou escolha a aparência Sistema para remover o tema salvo.",
        "Direitos legais: dependendo de onde você mora, pode solicitar acesso, correção, exclusão, restrição, portabilidade ou oposição, retirar o consentimento ou recorrer de uma resposta. Entre em contato para fazer uma solicitação.",
      ],
      note: "Como o MusicPod não tem contas de usuário e não mantém cópias das suas bibliotecas, talvez não tenhamos dados que identifiquem você. Para informações controladas pela Apple ou pelo Spotify, use suas ferramentas de privacidade.",
      links: [
        { label: "Gerenciar dados com a Apple", target: "applePrivacy" },
        { label: "Política de Privacidade do Spotify", target: "spotifyPrivacy" },
      ],
    },
    {
      id: "children-transfers",
      title: "8. Crianças e tratamento internacional",
      paragraphs: [
        "O MusicPod não coleta intencionalmente informações pessoais de crianças. Se você é pai, mãe ou responsável e acredita que uma criança nos enviou informações diretamente, entre em contato para podermos analisar e excluir quando apropriado.",
        "A infraestrutura do site pode tratar informações técnicas fora do seu país. Quando necessário, contamos com garantias contratuais e outras oferecidas por nossos prestadores para transferências internacionais.",
      ],
    },
    {
      id: "changes",
      title: "9. Alterações nesta política",
      paragraphs: ["Podemos atualizar esta política quando os recursos, prestadores ou obrigações legais do MusicPod mudarem. Publicaremos a versão revisada aqui e alteraremos a data de atualização. Se uma mudança afetar de forma relevante o tratamento, forneceremos aviso adicional ou pediremos consentimento quando exigido."],
    },
    {
      id: "contact",
      title: "10. Contato",
      paragraphs: [
        "Para dúvidas ou solicitações de privacidade, escreva para o endereço abaixo. Informe o que precisa e o país ou região relacionado para respondermos adequadamente.",
        "Não envie a senha da sua Conta Apple ou do Spotify, códigos de autenticação ou uma cópia da biblioteca. Nunca solicitaremos essas informações.",
      ],
    },
  ],
  contact: { operator: "Operador", product: "Produto", email: "E-mail de privacidade" },
  translationNote: "Esta política está disponível em vários idiomas. Se houver diferenças, a versão em inglês prevalece na medida permitida pela lei aplicável.",
};

const privacyDictionaries: Record<Locale, PrivacyMessages> = {
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

export function getPrivacyDictionary(locale: Locale) {
  return privacyDictionaries[locale];
}

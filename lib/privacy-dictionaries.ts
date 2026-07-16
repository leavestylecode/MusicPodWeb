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
    description: "How MusicPod handles Apple Music access, on-device settings, and information from the MusicPod website.",
  },
  pageLabel: "Privacy",
  back: "Back to MusicPod",
  hero: {
    eyebrow: "Privacy by design",
    title: "Your music stays yours.",
    intro: "MusicPod is built to play your music, not profile you. The app has no MusicPod account, advertising, or third-party tracking SDKs. Your Apple Music library is accessed only after you grant permission and is not stored on our servers.",
    updated: "Last updated: July 16, 2026",
    version: "Version 1.0",
  },
  principles: [
    { title: "No MusicPod account", body: "Use the app without creating a profile or giving us your name." },
    { title: "No ads or tracking", body: "We do not sell personal information or share it for targeted advertising." },
    { title: "Library stays with Apple", body: "MusicKit handles your library; MusicPod does not copy it to a developer server." },
  ],
  contents: "On this page",
  sections: [
    {
      id: "scope",
      title: "1. Scope and who we are",
      paragraphs: [
        "This policy explains how MusicPod’s developer and operator handles information when you use the MusicPod app for iPhone or visit the official website at musicpod.app. In this policy, “MusicPod,” “we,” and “us” refer to the operator identified in the contact section.",
        "This policy does not govern Apple Music, the App Store, or other services operated independently by Apple or another third party. Their own privacy terms apply to their processing.",
      ],
    },
    {
      id: "app-data",
      title: "2. Information handled by the app",
      paragraphs: [
        "After you approve Apple’s system permission, MusicPod uses MusicKit to request only the information needed to show and play your Apple Music content.",
      ],
      items: [
        "Library and catalog metadata, such as song, album, artist and playlist names, identifiers, relationships and artwork.",
        "Playback information needed to operate the player, such as the selected item, queue, playback state and progress.",
        "Apple Music authorization and subscription capability, so the app can determine whether library and playback features are available.",
        "App preferences, such as body and wheel colors, themes, interface choices and accessibility settings. These are stored locally on your device.",
      ],
      note: "MusicKit communicates with Apple. MusicPod does not receive your Apple Account password, keep a server-side copy of your library, or send your listening history to a MusicPod-operated server.",
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
      note: "Official App Store badge artwork is loaded from an Apple domain. Your browser therefore makes a network request to Apple when that artwork appears.",
    },
    {
      id: "use",
      title: "4. How and why information is used",
      paragraphs: [
        "We use the limited information described above only to provide the app and website, remember choices you make, protect and troubleshoot the service, and respond when you contact us.",
        "Where a legal basis is required, processing is based on providing the service you request, our legitimate interests in operating and securing it, compliance with law, or your consent. MusicPod asks for Apple Music access through Apple’s permission prompt, and you can withdraw that permission at any time.",
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
        "Vercel processes website traffic and technical logs to host, deliver and secure musicpod.app on our behalf.",
        "We may disclose information if reasonably necessary to comply with law, respond to valid legal process, or protect users, the public, our rights or the security of the service.",
      ],
      note: "Service providers acting for us must process information only for the services they provide and protect it consistently with this policy and applicable law.",
      links: [
        { label: "Apple Music & Privacy", target: "appleMusicPrivacy" },
        { label: "Apple Privacy Policy", target: "applePrivacy" },
        { label: "Vercel Privacy Notice", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Retention and security",
      paragraphs: [
        "MusicPod does not retain a developer-controlled copy of your Apple Music library. App preferences remain on your device until you change them, reset the app’s data, or remove the app. Website preferences remain for the periods described above.",
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
        "On-device data: remove the app to delete its locally stored settings, subject to any device backup you control.",
        "Website preferences: clear cookies and site data in your browser, or choose System appearance to remove the stored theme selection.",
        "Legal rights: depending on where you live, you may request access, correction, deletion, restriction, portability, or object to processing, and may withdraw consent or appeal a response. Contact us to make a request.",
      ],
      note: "Because MusicPod has no user accounts and does not keep your Apple Music library, we may have no MusicPod-held data that can identify you. For information controlled by Apple, use Apple’s privacy tools or contact Apple directly.",
      links: [{ label: "Manage data with Apple", target: "applePrivacy" }],
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
        "Please do not send your Apple Account password, authentication codes, or a copy of your music library. We will never ask for them.",
      ],
    },
  ],
  contact: { operator: "Operator", product: "Product", email: "Privacy email" },
  translationNote: "This policy is available in multiple languages. If translations differ, the English version controls to the extent permitted by applicable law.",
};

const zhCN: PrivacyMessages = {
  meta: { title: "隐私政策 — MusicPod", description: "了解 MusicPod 如何处理 Apple Music 访问权限、设备本地设置与 MusicPod 官网信息。" },
  pageLabel: "隐私政策",
  back: "返回 MusicPod",
  hero: {
    eyebrow: "隐私融入设计",
    title: "你的音乐，始终属于你。",
    intro: "MusicPod 为播放你的音乐而生，而不是为你建立画像。App 不设 MusicPod 账户、不含广告，也未集成第三方追踪 SDK。只有在你授权后，App 才会访问 Apple Music 资料库，且不会将资料库存储到我们的服务器。",
    updated: "最后更新：2026 年 7 月 16 日",
    version: "版本 1.0",
  },
  principles: [
    { title: "无需 MusicPod 账户", body: "无需注册个人资料，也无需向我们提供姓名即可使用。" },
    { title: "无广告、无追踪", body: "我们不出售个人信息，也不为定向广告而共享个人信息。" },
    { title: "资料库留在 Apple", body: "资料库由 MusicKit 处理，MusicPod 不会将其复制到开发者服务器。" },
  ],
  contents: "本页内容",
  sections: [
    {
      id: "scope",
      title: "1. 适用范围与运营者",
      paragraphs: [
        "本政策说明你使用 iPhone 版 MusicPod App 或访问官方网站 musicpod.app 时，MusicPod 的开发者与运营者如何处理信息。本政策中的“MusicPod”“我们”均指联系信息部分所列的运营者。",
        "本政策不适用于由 Apple 或其他第三方独立运营的 Apple Music、App Store 或其他服务；其处理活动适用各自的隐私条款。",
      ],
    },
    {
      id: "app-data",
      title: "2. App 处理的信息",
      paragraphs: ["在你同意 Apple 的系统权限请求后，MusicPod 仅通过 MusicKit 请求展示和播放 Apple Music 内容所需的信息。"],
      items: [
        "资料库与目录元数据，例如歌曲、专辑、艺人和播放列表的名称、标识符、关联关系及封面。",
        "播放器运行所需的播放信息，例如所选内容、播放队列、播放状态与进度。",
        "Apple Music 授权状态与订阅能力，用于判断资料库和播放功能是否可用。",
        "App 偏好设置，例如机身与转盘颜色、主题、界面选择和辅助功能设置。这些信息保存在你的设备本地。",
      ],
      note: "MusicKit 会与 Apple 通信。MusicPod 不会获取你的 Apple 账户密码，不会在服务器端保存资料库副本，也不会将你的收听历史发送到 MusicPod 运营的服务器。",
    },
    {
      id: "website-data",
      title: "3. 官网处理的信息",
      paragraphs: ["官网不使用广告像素或第三方分析工具。与大多数网站一样，托管基础设施会处理少量技术信息，以交付网页并保障服务安全。"],
      items: [
        "请求与安全数据，可能包括 IP 地址、由 IP 推断的大致位置、浏览器和设备类型、访问页面、日期时间，以及错误或滥用信号。官网目前由 Vercel 托管。",
        "musicpod_locale 偏好 Cookie：仅在你主动选择语言时设置，最长保留 12 个月。",
        "musicpod-theme 本地存储值：仅在你选择浅色或深色外观时写入浏览器；选择“跟随系统”或清除网站数据后移除。",
      ],
      note: "官网的官方 App Store 徽章素材从 Apple 域名加载，因此显示该素材时，你的浏览器会向 Apple 发起网络请求。",
    },
    {
      id: "use",
      title: "4. 信息的使用方式与目的",
      paragraphs: [
        "我们仅将上述有限信息用于提供 App 和官网、记住你的选择、保护及排查服务问题，以及在你联系我们时作出回复。",
        "在法律要求具备处理依据的地区，我们基于履行你请求的服务、运营和保障服务安全的合法利益、遵守法律义务或取得你的同意来处理信息。MusicPod 通过 Apple 的权限弹窗请求 Apple Music 访问权限，你可随时撤回。",
      ],
    },
    {
      id: "sharing",
      title: "5. 服务提供商与信息披露",
      paragraphs: ["MusicPod 不出售或出租个人信息，也不会为跨场景行为广告或定向广告而共享个人信息。"],
      items: [
        "Apple 根据其自身条款处理 Apple Music 请求、播放及账户相关信息；Apple 独立于 MusicPod 运营。",
        "Vercel 代表我们处理网站流量与技术日志，用于托管、交付和保护 musicpod.app。",
        "如为遵守法律、响应有效法律程序，或保护用户、公众、我们的权利或服务安全而有合理必要，我们可能披露信息。",
      ],
      note: "代表我们处理信息的服务提供商只能将信息用于其提供的服务，并须依照本政策及适用法律提供相应保护。",
      links: [
        { label: "Apple Music 与隐私", target: "appleMusicPrivacy" },
        { label: "Apple 隐私政策", target: "applePrivacy" },
        { label: "Vercel 隐私声明", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 信息保留与安全",
      paragraphs: [
        "MusicPod 不会保留由开发者控制的 Apple Music 资料库副本。App 偏好设置保留在你的设备上，直至你更改设置、重置 App 数据或删除 App；网站偏好按上述期限保留。",
        "网站请求和安全记录仅由托管服务商基于运营、安全及法律需要保留，之后依其保留规则删除或去标识化。你发送给我们的邮件仅在回复、保留适当记录及履行法律义务所需期间保存。",
        "我们会根据所处理信息的有限范围采取合理的技术和组织措施，但任何传输或存储方式均无法保证绝对安全。",
      ],
    },
    {
      id: "choices",
      title: "7. 你的选择与隐私权利",
      paragraphs: ["你始终可以控制 MusicPod 能够访问的信息。"],
      items: [
        "Apple Music 权限：在 iPhone“设置”的“隐私与安全性”及“媒体与 Apple Music”中更改 MusicPod 权限。撤回后，依赖资料库的功能将无法使用。",
        "设备本地数据：删除 App 即可移除其本地设置，但你自行控制的设备备份可能仍保留副本。",
        "网站偏好：在浏览器中清除 Cookie 与网站数据，或选择“跟随系统”以移除已保存的主题选择。",
        "法定权利：视你所在地区而定，你可以请求访问、更正、删除、限制或携带个人信息，反对相关处理、撤回同意，或对处理结果提出申诉。请通过下方邮箱提交请求。",
      ],
      note: "由于 MusicPod 不设用户账户，也不保存你的 Apple Music 资料库，我们可能没有能够识别你的 MusicPod 持有数据。对于由 Apple 控制的信息，请使用 Apple 的隐私工具或直接联系 Apple。",
      links: [{ label: "通过 Apple 管理数据", target: "applePrivacy" }],
    },
    {
      id: "children-transfers",
      title: "8. 未成年人及跨境处理",
      paragraphs: [
        "MusicPod 不会故意收集未成年人的个人信息。如果你是父母或监护人，并认为儿童曾直接向我们发送个人信息，请联系我们，以便我们核实并在适当情况下删除。",
        "官网基础设施可能在你所在国家或地区以外处理技术信息。在法律要求的情况下，我们依赖服务提供商提供的合同及其他保障措施进行跨境传输。",
      ],
    },
    {
      id: "changes",
      title: "9. 政策更新",
      paragraphs: ["当 MusicPod 的功能、服务提供商或法律义务发生变化时，我们可能更新本政策。修订版将在本页面公布，并更新“最后更新”日期。如变更会对信息处理方式产生重大影响，我们会在法律要求时另行通知或征求同意。"],
    },
    {
      id: "contact",
      title: "10. 联系我们",
      paragraphs: [
        "如有隐私问题或希望行使权利，请通过下方邮箱联系。请说明你的具体需求，以及与请求有关的国家或地区，以便我们妥善回复。",
        "请勿发送 Apple 账户密码、验证码或音乐资料库副本；我们绝不会索取这些信息。",
      ],
    },
  ],
  contact: { operator: "运营者", product: "产品", email: "隐私联系邮箱" },
  translationNote: "本政策提供多种语言版本。如各译本存在差异，在适用法律允许的范围内以英文版本为准。",
};

const zhTW: PrivacyMessages = {
  meta: { title: "隱私權政策 — MusicPod", description: "瞭解 MusicPod 如何處理 Apple Music 存取權、裝置端設定與 MusicPod 官網資訊。" },
  pageLabel: "隱私權",
  back: "返回 MusicPod",
  hero: {
    eyebrow: "隱私融入設計",
    title: "你的音樂，始終屬於你。",
    intro: "MusicPod 為播放你的音樂而生，而不是為你建立個人剖析。App 不設 MusicPod 帳號、不含廣告，也未整合第三方追蹤 SDK。只有在你授權後，App 才會存取 Apple Music 資料庫，且不會將資料庫儲存到我們的伺服器。",
    updated: "最後更新：2026 年 7 月 16 日",
    version: "版本 1.0",
  },
  principles: [
    { title: "無需 MusicPod 帳號", body: "無需建立個人檔案或向我們提供姓名即可使用。" },
    { title: "無廣告、無追蹤", body: "我們不出售個人資訊，也不為定向廣告而分享個人資訊。" },
    { title: "資料庫留在 Apple", body: "資料庫由 MusicKit 處理，MusicPod 不會將其複製到開發者伺服器。" },
  ],
  contents: "本頁內容",
  sections: [
    {
      id: "scope",
      title: "1. 適用範圍與營運者",
      paragraphs: [
        "本政策說明你使用 iPhone 版 MusicPod App 或造訪官方網站 musicpod.app 時，MusicPod 的開發者與營運者如何處理資訊。本政策中的「MusicPod」「我們」均指聯絡資訊部分所列的營運者。",
        "本政策不適用於由 Apple 或其他第三方獨立營運的 Apple Music、App Store 或其他服務；其處理活動適用各自的隱私條款。",
      ],
    },
    {
      id: "app-data",
      title: "2. App 處理的資訊",
      paragraphs: ["在你同意 Apple 的系統權限要求後，MusicPod 僅透過 MusicKit 要求顯示和播放 Apple Music 內容所需的資訊。"],
      items: [
        "資料庫與目錄中繼資料，例如歌曲、專輯、藝人和播放列表的名稱、識別碼、關聯與封面。",
        "播放器運作所需的播放資訊，例如所選內容、播放佇列、播放狀態與進度。",
        "Apple Music 授權狀態與訂閱能力，用於判斷資料庫和播放功能是否可用。",
        "App 偏好設定，例如機身與轉盤顏色、主題、介面選擇和輔助使用設定。這些資訊儲存在你的裝置上。",
      ],
      note: "MusicKit 會與 Apple 通訊。MusicPod 不會取得你的 Apple 帳號密碼、不會在伺服器端保存資料庫副本，也不會將收聽紀錄傳送到 MusicPod 營運的伺服器。",
    },
    {
      id: "website-data",
      title: "3. 官網處理的資訊",
      paragraphs: ["官網不使用廣告像素或第三方分析工具。與大多數網站一樣，代管基礎設施會處理少量技術資訊，以提供頁面並維護服務安全。"],
      items: [
        "要求與安全資料，可能包括 IP 位址、由 IP 推知的大致位置、瀏覽器與裝置類型、要求的頁面、日期時間，以及錯誤或濫用訊號。官網目前由 Vercel 代管。",
        "musicpod_locale 偏好 Cookie：僅在你主動選擇語言時設定，最長保留 12 個月。",
        "musicpod-theme 本機儲存值：僅在你選擇淺色或深色外觀時寫入瀏覽器；選擇「跟隨系統」或清除網站資料後移除。",
      ],
      note: "官網的官方 App Store 徽章素材由 Apple 網域載入，因此顯示該素材時，你的瀏覽器會向 Apple 發出網路要求。",
    },
    {
      id: "use",
      title: "4. 資訊的使用方式與目的",
      paragraphs: [
        "我們只將上述有限資訊用於提供 App 和官網、記住你的選擇、保護及排解服務問題，以及在你聯絡我們時作出回覆。",
        "在法律要求具備處理依據的地區，我們基於提供你要求的服務、營運及保護服務安全的合法利益、遵守法律義務或取得你的同意來處理資訊。MusicPod 透過 Apple 的權限提示要求 Apple Music 存取權，你可隨時撤回。",
      ],
    },
    {
      id: "sharing",
      title: "5. 服務供應商與資訊揭露",
      paragraphs: ["MusicPod 不出售或出租個人資訊，也不會為跨情境行為廣告或定向廣告而分享個人資訊。"],
      items: [
        "Apple 依其自身條款處理 Apple Music 要求、播放與帳號相關資訊；Apple 獨立於 MusicPod 營運。",
        "Vercel 代表我們處理網站流量與技術記錄，用於代管、提供和保護 musicpod.app。",
        "如為遵守法律、回應有效法律程序，或保護使用者、公眾、我們的權利或服務安全而有合理必要，我們可能揭露資訊。",
      ],
      note: "代表我們處理資訊的服務供應商只能將資訊用於其提供的服務，並須依照本政策及適用法律提供相應保護。",
      links: [
        { label: "Apple Music 與隱私權", target: "appleMusicPrivacy" },
        { label: "Apple 隱私權政策", target: "applePrivacy" },
        { label: "Vercel 隱私權聲明", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 資訊保留與安全",
      paragraphs: [
        "MusicPod 不會保留由開發者控制的 Apple Music 資料庫副本。App 偏好設定會留在你的裝置上，直到你變更設定、重設 App 資料或移除 App；網站偏好依上述期間保留。",
        "網站要求與安全記錄僅由代管服務商基於營運、安全及法律需要保留，之後依其保留規則刪除或去識別化。你傳送給我們的訊息只在回覆、保留適當紀錄及履行法律義務所需期間保存。",
        "我們會依據所處理資訊的有限範圍採取合理的技術和組織措施，但任何傳輸或儲存方式都無法保證絕對安全。",
      ],
    },
    {
      id: "choices",
      title: "7. 你的選擇與隱私權利",
      paragraphs: ["你始終可以控制 MusicPod 能夠存取的資訊。"],
      items: [
        "Apple Music 權限：在 iPhone「設定」的「隱私權與安全性」及「媒體與 Apple Music」中變更 MusicPod 權限。撤回後，依賴資料庫的功能將無法使用。",
        "裝置端資料：移除 App 即可刪除本機設定，但你自行控制的裝置備份可能仍保留副本。",
        "網站偏好：在瀏覽器中清除 Cookie 與網站資料，或選擇「跟隨系統」以移除已儲存的主題選擇。",
        "法定權利：視你所在位置而定，你可以要求存取、更正、刪除、限制或攜帶個人資訊、反對處理、撤回同意，或對回覆提出申訴。請聯絡我們提出要求。",
      ],
      note: "由於 MusicPod 不設使用者帳號，也不保存你的 Apple Music 資料庫，我們可能沒有能識別你的 MusicPod 持有資料。對於由 Apple 控制的資訊，請使用 Apple 的隱私工具或直接聯絡 Apple。",
      links: [{ label: "透過 Apple 管理資料", target: "applePrivacy" }],
    },
    {
      id: "children-transfers",
      title: "8. 兒童與國際處理",
      paragraphs: [
        "MusicPod 不會明知而收集兒童的個人資訊。如果你是家長或監護人，並認為兒童曾直接向我們傳送個人資訊，請聯絡我們，以便查核並在適當情況下刪除。",
        "官網基礎設施可能在你所在國家或地區以外處理技術資訊。在法律要求時，我們依賴服務供應商提供的契約及其他保障措施進行國際傳輸。",
      ],
    },
    {
      id: "changes",
      title: "9. 政策更新",
      paragraphs: ["當 MusicPod 的功能、服務供應商或法律義務改變時，我們可能更新本政策。修訂版會在本頁公布並更新「最後更新」日期。如變更會重大影響資訊處理方式，我們會在法律要求時另行通知或徵求同意。"],
    },
    {
      id: "contact",
      title: "10. 聯絡我們",
      paragraphs: [
        "如有隱私問題或希望行使權利，請使用下方電子郵件聯絡。請說明你的需求，以及與要求相關的國家或地區，以便我們妥善回覆。",
        "請勿傳送 Apple 帳號密碼、驗證碼或音樂資料庫副本；我們絕不會索取這些資訊。",
      ],
    },
  ],
  contact: { operator: "營運者", product: "產品", email: "隱私聯絡信箱" },
  translationNote: "本政策提供多種語言版本。如各譯本有差異，在適用法律允許的範圍內以英文版本為準。",
};

const ja: PrivacyMessages = {
  meta: { title: "プライバシーポリシー — MusicPod", description: "MusicPod における Apple Music へのアクセス、端末上の設定、公式サイトの情報の取扱いについて説明します。" },
  pageLabel: "プライバシー",
  back: "MusicPod に戻る",
  hero: {
    eyebrow: "プライバシーを設計の中心に",
    title: "あなたの音楽は、あなたのもの。",
    intro: "MusicPod は音楽を再生するためのアプリであり、利用者をプロファイリングするためのものではありません。MusicPod アカウント、広告、第三者のトラッキング SDK はありません。Apple Music ライブラリには許可を得た後にのみアクセスし、当方のサーバーには保存しません。",
    updated: "最終更新日：2026年7月16日",
    version: "バージョン 1.0",
  },
  principles: [
    { title: "MusicPod アカウント不要", body: "プロフィールの作成や氏名の提供なしで利用できます。" },
    { title: "広告・追跡なし", body: "個人情報を販売したり、ターゲティング広告のために共有したりしません。" },
    { title: "ライブラリは Apple に", body: "MusicKit が処理し、開発者のサーバーにはコピーしません。" },
  ],
  contents: "このページの内容",
  sections: [
    {
      id: "scope",
      title: "1. 適用範囲と運営者",
      paragraphs: [
        "本ポリシーは、iPhone 版 MusicPod アプリまたは公式サイト musicpod.app の利用時に、MusicPod の開発者および運営者が情報をどのように取り扱うかを説明するものです。「MusicPod」「当方」は、連絡先欄に記載の運営者を指します。",
        "Apple Music、App Store、その他 Apple または第三者が独立して運営するサービスには本ポリシーは適用されず、それぞれのプライバシー条件が適用されます。",
      ],
    },
    {
      id: "app-data",
      title: "2. アプリが取り扱う情報",
      paragraphs: ["Apple のシステム許可に同意した後、MusicPod は Apple Music コンテンツの表示と再生に必要な情報のみを MusicKit から取得します。"],
      items: [
        "曲、アルバム、アーティスト、プレイリストの名称、識別子、関連情報、アートワークなどのライブラリおよびカタログのメタデータ。",
        "選択した項目、キュー、再生状態、進行状況など、プレーヤーの動作に必要な再生情報。",
        "ライブラリおよび再生機能が利用可能か判断するための Apple Music の認証状態とサブスクリプション機能。",
        "本体やホイールの色、テーマ、インターフェイス、アクセシビリティなどの設定。これらは端末内に保存されます。",
      ],
      note: "MusicKit は Apple と通信します。MusicPod が Apple Account のパスワードを受け取ること、ライブラリをサーバーに複製すること、再生履歴を MusicPod のサーバーへ送信することはありません。",
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
      note: "App Store の公式バッジ画像は Apple のドメインから読み込まれるため、表示時にブラウザから Apple へネットワークリクエストが送信されます。",
    },
    {
      id: "use",
      title: "4. 利用目的と法的根拠",
      paragraphs: [
        "上記の限定的な情報は、アプリとサイトの提供、選択内容の保存、サービスの保護と問題解決、お問い合わせへの対応のためにのみ使用します。",
        "法的根拠が必要な地域では、依頼されたサービスの提供、運営と安全確保に関する正当な利益、法令遵守、または同意に基づき処理します。Apple Music へのアクセスは Apple の許可画面から求め、いつでも撤回できます。",
      ],
    },
    {
      id: "sharing",
      title: "5. サービス提供者と開示",
      paragraphs: ["MusicPod は個人情報を販売・貸与せず、行動ターゲティング広告のために共有しません。"],
      items: [
        "Apple は Apple Music のリクエスト、再生、アカウント関連情報を独自の条件に従って処理し、MusicPod とは独立して運営します。",
        "Vercel は当方に代わり、musicpod.app のホスティング、配信、保護のためにサイト通信と技術ログを処理します。",
        "法令遵守、有効な法的手続への対応、利用者や公衆、当方の権利、サービスの安全を守るため合理的に必要な場合、情報を開示することがあります。",
      ],
      note: "当方のために情報を処理する事業者には、提供するサービスのためにのみ処理し、本ポリシーと適用法に沿って保護することを求めます。",
      links: [
        { label: "Apple Music とプライバシー", target: "appleMusicPrivacy" },
        { label: "Apple プライバシーポリシー", target: "applePrivacy" },
        { label: "Vercel プライバシー通知", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 保持とセキュリティ",
      paragraphs: [
        "MusicPod は Apple Music ライブラリの開発者管理下のコピーを保持しません。アプリ設定は、変更、アプリデータのリセット、またはアプリ削除まで端末に残ります。サイト設定の保持期間は上記のとおりです。",
        "サイトのリクエスト・セキュリティ記録は、ホスティング事業者が運用、安全、法的な必要性のために保持し、その保持方針に従って削除または匿名化します。お問い合わせは、回答、適切な記録、法的義務に必要な期間のみ保持します。",
        "取り扱う情報の範囲に応じた合理的な技術的・組織的保護策を講じますが、完全な安全を保証できる送信・保存方法はありません。",
      ],
    },
    {
      id: "choices",
      title: "7. 選択肢とプライバシー権",
      paragraphs: ["MusicPod がアクセスできる情報は、利用者が管理できます。"],
      items: [
        "Apple Music へのアクセス：iPhone の「設定」の「プライバシーとセキュリティ」および「メディアと Apple Music」で MusicPod の許可を変更できます。撤回するとライブラリ依存機能は利用できません。",
        "端末内データ：アプリを削除するとローカル設定を削除できます。ただし、利用者が管理する端末バックアップにコピーが残る場合があります。",
        "サイト設定：ブラウザで Cookie とサイトデータを消去するか、「システム」を選んで保存済みテーマを削除できます。",
        "法的権利：居住地に応じて、アクセス、訂正、削除、制限、データポータビリティ、異議申立て、同意の撤回、回答への不服申立てを求められる場合があります。下記へご連絡ください。",
      ],
      note: "MusicPod には利用者アカウントがなく、Apple Music ライブラリも保持しないため、当方が利用者を特定できるデータを保有していない場合があります。Apple が管理する情報は Apple のツールまたは窓口をご利用ください。",
      links: [{ label: "Apple でデータを管理", target: "applePrivacy" }],
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
        "Apple Account のパスワード、認証コード、音楽ライブラリのコピーは送らないでください。当方が求めることはありません。",
      ],
    },
  ],
  contact: { operator: "運営者", product: "製品", email: "プライバシー窓口" },
  translationNote: "本ポリシーは複数の言語で提供しています。翻訳間に相違がある場合、適用法で認められる範囲で英語版が優先します。",
};

const ko: PrivacyMessages = {
  meta: { title: "개인정보 처리방침 — MusicPod", description: "MusicPod가 Apple Music 접근, 기기 내 설정 및 공식 웹사이트 정보를 처리하는 방법을 안내합니다." },
  pageLabel: "개인정보",
  back: "MusicPod로 돌아가기",
  hero: {
    eyebrow: "설계부터 개인정보 보호",
    title: "내 음악은 언제나 나의 것.",
    intro: "MusicPod는 음악을 재생하기 위한 앱이지 사용자를 프로파일링하기 위한 앱이 아닙니다. MusicPod 계정, 광고 또는 타사 추적 SDK가 없습니다. Apple Music 보관함은 사용자가 허용한 후에만 접근하며 당사 서버에 저장하지 않습니다.",
    updated: "최종 업데이트: 2026년 7월 16일",
    version: "버전 1.0",
  },
  principles: [
    { title: "MusicPod 계정 없음", body: "프로필을 만들거나 이름을 제공하지 않고 사용할 수 있습니다." },
    { title: "광고 및 추적 없음", body: "개인정보를 판매하거나 맞춤형 광고를 위해 공유하지 않습니다." },
    { title: "보관함은 Apple에", body: "MusicKit이 처리하며 개발자 서버로 복사하지 않습니다." },
  ],
  contents: "목차",
  sections: [
    {
      id: "scope",
      title: "1. 적용 범위 및 운영자",
      paragraphs: [
        "이 방침은 iPhone용 MusicPod 앱 또는 공식 웹사이트 musicpod.app을 이용할 때 MusicPod의 개발자와 운영자가 정보를 처리하는 방법을 설명합니다. 이 문서의 ‘MusicPod’ 및 ‘당사’는 연락처에 표시된 운영자를 뜻합니다.",
        "이 방침은 Apple 또는 다른 제3자가 독립적으로 운영하는 Apple Music, App Store 및 기타 서비스에는 적용되지 않으며 해당 서비스의 개인정보 조건이 적용됩니다.",
      ],
    },
    {
      id: "app-data",
      title: "2. 앱이 처리하는 정보",
      paragraphs: ["Apple의 시스템 권한을 승인한 후 MusicPod는 Apple Music 콘텐츠를 표시하고 재생하는 데 필요한 정보만 MusicKit을 통해 요청합니다."],
      items: [
        "노래, 앨범, 아티스트 및 플레이리스트 이름, 식별자, 관계 및 아트워크 등 보관함과 카탈로그 메타데이터.",
        "선택 항목, 대기열, 재생 상태 및 진행 상황 등 플레이어 작동에 필요한 재생 정보.",
        "보관함과 재생 기능 사용 가능 여부를 확인하기 위한 Apple Music 권한 및 구독 기능 상태.",
        "본체와 휠 색상, 테마, 인터페이스 선택 및 손쉬운 사용 설정 등의 앱 환경설정. 이 정보는 기기에 로컬로 저장됩니다.",
      ],
      note: "MusicKit은 Apple과 통신합니다. MusicPod는 Apple Account 암호를 받거나 보관함의 서버 사본을 유지하지 않으며, 청취 기록을 MusicPod 운영 서버로 전송하지 않습니다.",
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
      note: "공식 App Store 배지 이미지는 Apple 도메인에서 불러오므로 이미지가 표시될 때 브라우저가 Apple에 네트워크 요청을 보냅니다.",
    },
    {
      id: "use",
      title: "4. 정보 이용 목적과 근거",
      paragraphs: [
        "위의 제한된 정보는 앱과 웹사이트 제공, 선택 사항 기억, 서비스 보호 및 문제 해결, 문의 답변에만 사용합니다.",
        "법적 근거가 필요한 지역에서는 요청한 서비스 제공, 운영과 보안에 관한 정당한 이익, 법률 준수 또는 동의를 근거로 처리합니다. Apple Music 접근은 Apple 권한 창을 통해 요청하며 언제든 철회할 수 있습니다.",
      ],
    },
    {
      id: "sharing",
      title: "5. 서비스 제공업체 및 공개",
      paragraphs: ["MusicPod는 개인정보를 판매하거나 대여하지 않으며 교차 맥락 행동 광고 또는 맞춤형 광고를 위해 공유하지 않습니다."],
      items: [
        "Apple은 자체 약관에 따라 Apple Music 요청, 재생 및 계정 관련 정보를 처리하며 MusicPod와 독립적으로 운영됩니다.",
        "Vercel은 당사를 대신해 musicpod.app 호스팅, 제공 및 보호를 위해 웹사이트 트래픽과 기술 로그를 처리합니다.",
        "법률 준수, 유효한 법적 절차 대응, 사용자·공공·당사의 권리 또는 서비스 보안 보호를 위해 합리적으로 필요한 경우 정보를 공개할 수 있습니다.",
      ],
      note: "당사를 대신해 정보를 처리하는 제공업체는 제공하는 서비스에만 정보를 사용하고 이 방침과 관련 법률에 따라 보호해야 합니다.",
      links: [
        { label: "Apple Music 및 개인정보 보호", target: "appleMusicPrivacy" },
        { label: "Apple 개인정보 처리방침", target: "applePrivacy" },
        { label: "Vercel 개인정보 보호 고지", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. 보유 및 보안",
      paragraphs: [
        "MusicPod는 개발자가 관리하는 Apple Music 보관함 사본을 보유하지 않습니다. 앱 환경설정은 변경하거나 앱 데이터를 재설정하거나 앱을 제거할 때까지 기기에 남습니다. 웹사이트 환경설정은 위 기간 동안 유지됩니다.",
        "웹사이트 요청 및 보안 기록은 호스팅 제공업체가 운영, 보안 및 법적 필요에 따라 보유한 후 정책에 따라 삭제하거나 비식별화합니다. 문의 메시지는 답변, 적절한 기록 유지 및 법적 의무 이행에 필요한 기간만 보관합니다.",
        "처리하는 제한된 정보에 적합한 합리적인 기술적·관리적 보호조치를 사용하지만 어떤 전송이나 저장 방식도 완전한 보안을 보장할 수 없습니다.",
      ],
    },
    {
      id: "choices",
      title: "7. 선택권 및 개인정보 권리",
      paragraphs: ["MusicPod가 접근할 수 있는 정보는 사용자가 제어합니다."],
      items: [
        "Apple Music 접근: iPhone 설정의 개인정보 보호 및 보안과 미디어 및 Apple Music에서 MusicPod 권한을 변경할 수 있습니다. 철회하면 보관함 기반 기능이 비활성화됩니다.",
        "기기 내 데이터: 앱을 제거해 로컬 설정을 삭제할 수 있습니다. 사용자가 관리하는 기기 백업에는 사본이 남을 수 있습니다.",
        "웹사이트 환경설정: 브라우저에서 쿠키와 사이트 데이터를 지우거나 시스템 모드를 선택해 저장된 테마를 제거할 수 있습니다.",
        "법적 권리: 거주지에 따라 열람, 정정, 삭제, 처리 제한, 이동, 반대, 동의 철회 또는 답변에 대한 이의를 요청할 수 있습니다. 아래 연락처로 요청하세요.",
      ],
      note: "MusicPod에는 사용자 계정이 없고 Apple Music 보관함을 보유하지 않으므로 당사가 사용자를 식별할 수 있는 데이터가 없을 수 있습니다. Apple이 관리하는 정보는 Apple의 개인정보 도구 또는 Apple에 직접 문의하세요.",
      links: [{ label: "Apple에서 데이터 관리", target: "applePrivacy" }],
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
        "Apple Account 암호, 인증 코드 또는 음악 보관함 사본을 보내지 마세요. 당사는 이를 요구하지 않습니다.",
      ],
    },
  ],
  contact: { operator: "운영자", product: "제품", email: "개인정보 이메일" },
  translationNote: "이 방침은 여러 언어로 제공됩니다. 번역 간 차이가 있으면 관련 법률이 허용하는 범위에서 영어 버전이 우선합니다.",
};

const es: PrivacyMessages = {
  meta: { title: "Política de privacidad — MusicPod", description: "Cómo trata MusicPod el acceso a Apple Music, los ajustes del dispositivo y la información del sitio web oficial." },
  pageLabel: "Privacidad",
  back: "Volver a MusicPod",
  hero: {
    eyebrow: "Privacidad desde el diseño",
    title: "Tu música sigue siendo tuya.",
    intro: "MusicPod está hecho para reproducir tu música, no para crear un perfil sobre ti. La app no tiene cuentas de MusicPod, publicidad ni SDK de seguimiento de terceros. Solo accede a tu biblioteca de Apple Music con tu permiso y no la almacena en nuestros servidores.",
    updated: "Última actualización: 16 de julio de 2026",
    version: "Versión 1.0",
  },
  principles: [
    { title: "Sin cuenta de MusicPod", body: "Usa la app sin crear un perfil ni facilitarnos tu nombre." },
    { title: "Sin anuncios ni seguimiento", body: "No vendemos información personal ni la compartimos para publicidad dirigida." },
    { title: "Tu biblioteca sigue en Apple", body: "MusicKit la gestiona; MusicPod no la copia a un servidor del desarrollador." },
  ],
  contents: "En esta página",
  sections: [
    {
      id: "scope",
      title: "1. Alcance y responsable",
      paragraphs: [
        "Esta política explica cómo el desarrollador y operador de MusicPod trata la información cuando usas la app MusicPod para iPhone o visitas el sitio oficial musicpod.app. «MusicPod» y «nosotros» se refieren al operador indicado en la sección de contacto.",
        "Esta política no regula Apple Music, App Store ni otros servicios operados de forma independiente por Apple u otros terceros, que aplican sus propias condiciones de privacidad.",
      ],
    },
    {
      id: "app-data",
      title: "2. Información tratada por la app",
      paragraphs: ["Después de que aceptes el permiso del sistema de Apple, MusicPod usa MusicKit para solicitar únicamente la información necesaria para mostrar y reproducir tu contenido de Apple Music."],
      items: [
        "Metadatos de biblioteca y catálogo, como nombres, identificadores, relaciones y portadas de canciones, álbumes, artistas y playlists.",
        "Información de reproducción necesaria para el funcionamiento del reproductor, como el elemento elegido, la cola, el estado y el progreso.",
        "Estado de autorización y capacidad de suscripción de Apple Music para determinar si las funciones de biblioteca y reproducción están disponibles.",
        "Preferencias de la app, como colores del cuerpo y la rueda, temas, opciones de interfaz y accesibilidad. Se guardan localmente en tu dispositivo.",
      ],
      note: "MusicKit se comunica con Apple. MusicPod no recibe la contraseña de tu cuenta de Apple, no conserva una copia de tu biblioteca en servidores ni envía tu historial de escucha a un servidor operado por MusicPod.",
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
      note: "La insignia oficial de App Store se carga desde un dominio de Apple. Por ello, tu navegador realiza una solicitud de red a Apple cuando se muestra.",
    },
    {
      id: "use",
      title: "4. Cómo y por qué usamos la información",
      paragraphs: [
        "Usamos la información limitada descrita arriba únicamente para prestar la app y el sitio, recordar tus elecciones, proteger y solucionar problemas del servicio y responder cuando nos contactas.",
        "Cuando se exige una base jurídica, el tratamiento se basa en prestar el servicio solicitado, nuestros intereses legítimos de operación y seguridad, el cumplimiento legal o tu consentimiento. MusicPod solicita acceso a Apple Music mediante el aviso de permisos de Apple y puedes retirarlo en cualquier momento.",
      ],
    },
    {
      id: "sharing",
      title: "5. Proveedores y divulgación",
      paragraphs: ["MusicPod no vende ni alquila información personal y no la comparte para publicidad comportamental entre contextos o publicidad dirigida."],
      items: [
        "Apple trata las solicitudes de Apple Music, la reproducción y la información de cuenta conforme a sus propias condiciones y opera de forma independiente de MusicPod.",
        "Vercel trata el tráfico y los registros técnicos en nuestro nombre para alojar, entregar y proteger musicpod.app.",
        "Podemos divulgar información cuando sea razonablemente necesario para cumplir la ley, responder a procesos legales válidos o proteger a usuarios, al público, nuestros derechos o la seguridad del servicio.",
      ],
      note: "Los proveedores que actúan por nuestra cuenta deben tratar la información solo para los servicios prestados y protegerla de acuerdo con esta política y la ley aplicable.",
      links: [
        { label: "Apple Music y la privacidad", target: "appleMusicPrivacy" },
        { label: "Política de privacidad de Apple", target: "applePrivacy" },
        { label: "Aviso de privacidad de Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Conservación y seguridad",
      paragraphs: [
        "MusicPod no conserva una copia de tu biblioteca de Apple Music bajo control del desarrollador. Las preferencias permanecen en el dispositivo hasta que las cambias, restableces los datos de la app o eliminas la app. Las preferencias web se conservan durante los plazos descritos.",
        "El proveedor de alojamiento conserva los registros de solicitudes y seguridad solo por necesidades operativas, de seguridad y legales, y después los elimina o desidentifica conforme a sus prácticas. Tus mensajes se conservan solo para responder, mantener un registro adecuado y cumplir obligaciones legales.",
        "Aplicamos salvaguardas técnicas y organizativas razonables para la información limitada que tratamos, pero ningún método de transmisión o almacenamiento puede garantizar una seguridad absoluta.",
      ],
    },
    {
      id: "choices",
      title: "7. Tus opciones y derechos",
      paragraphs: ["Tú controlas la información a la que puede acceder MusicPod."],
      items: [
        "Acceso a Apple Music: cambia el permiso de MusicPod en Ajustes del iPhone, dentro de Privacidad y seguridad y Contenido y Apple Music. Al retirarlo se desactivan las funciones que dependen de tu biblioteca.",
        "Datos del dispositivo: elimina la app para borrar sus ajustes locales, salvo las copias que puedan permanecer en una copia de seguridad bajo tu control.",
        "Preferencias web: borra cookies y datos del sitio en el navegador o elige apariencia Sistema para eliminar el tema guardado.",
        "Derechos legales: según tu ubicación, puedes solicitar acceso, rectificación, eliminación, limitación, portabilidad u oposición, retirar el consentimiento o recurrir una respuesta. Contáctanos para solicitarlo.",
      ],
      note: "Como MusicPod no tiene cuentas y no conserva tu biblioteca de Apple Music, es posible que no tengamos datos que permitan identificarte. Para información controlada por Apple, usa sus herramientas de privacidad o contacta directamente con Apple.",
      links: [{ label: "Gestionar datos con Apple", target: "applePrivacy" }],
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
        "No envíes la contraseña de tu cuenta de Apple, códigos de autenticación ni una copia de tu biblioteca. Nunca te los pediremos.",
      ],
    },
  ],
  contact: { operator: "Operador", product: "Producto", email: "Correo de privacidad" },
  translationNote: "Esta política está disponible en varios idiomas. Si hay diferencias, prevalece la versión inglesa en la medida permitida por la ley aplicable.",
};

const fr: PrivacyMessages = {
  meta: { title: "Politique de confidentialité — MusicPod", description: "Comment MusicPod traite l’accès à Apple Music, les réglages sur l’appareil et les informations du site officiel." },
  pageLabel: "Confidentialité",
  back: "Retour à MusicPod",
  hero: {
    eyebrow: "Confidentialité dès la conception",
    title: "Votre musique reste la vôtre.",
    intro: "MusicPod est conçu pour lire votre musique, pas pour établir votre profil. L’app ne comporte ni compte MusicPod, ni publicité, ni SDK de suivi tiers. Elle n’accède à votre bibliothèque Apple Music qu’avec votre autorisation et ne la stocke pas sur nos serveurs.",
    updated: "Dernière mise à jour : 16 juillet 2026",
    version: "Version 1.0",
  },
  principles: [
    { title: "Aucun compte MusicPod", body: "Utilisez l’app sans créer de profil ni nous donner votre nom." },
    { title: "Sans publicité ni suivi", body: "Nous ne vendons pas les données personnelles et ne les partageons pas pour la publicité ciblée." },
    { title: "Votre bibliothèque reste chez Apple", body: "MusicKit la traite ; MusicPod ne la copie pas sur un serveur du développeur." },
  ],
  contents: "Sur cette page",
  sections: [
    {
      id: "scope",
      title: "1. Champ d’application et responsable",
      paragraphs: [
        "Cette politique explique comment le développeur et l’exploitant de MusicPod traitent les informations lorsque vous utilisez l’app MusicPod pour iPhone ou consultez le site officiel musicpod.app. « MusicPod », « nous » et « notre » désignent l’exploitant indiqué dans la section de contact.",
        "Elle ne régit pas Apple Music, l’App Store ni les autres services exploités indépendamment par Apple ou un tiers, qui appliquent leurs propres règles de confidentialité.",
      ],
    },
    {
      id: "app-data",
      title: "2. Informations traitées par l’app",
      paragraphs: ["Après votre accord dans la fenêtre d’autorisation d’Apple, MusicPod utilise MusicKit pour demander uniquement les informations nécessaires à l’affichage et à la lecture de votre contenu Apple Music."],
      items: [
        "Métadonnées de la bibliothèque et du catalogue : noms, identifiants, relations et pochettes des morceaux, albums, artistes et playlists.",
        "Informations nécessaires au lecteur : élément choisi, file d’attente, état et progression de lecture.",
        "État d’autorisation et capacité d’abonnement Apple Music pour déterminer la disponibilité des fonctions de bibliothèque et de lecture.",
        "Préférences de l’app : couleurs du boîtier et de la molette, thèmes, choix d’interface et réglages d’accessibilité. Elles sont stockées localement sur votre appareil.",
      ],
      note: "MusicKit communique avec Apple. MusicPod ne reçoit pas le mot de passe de votre compte Apple, ne conserve pas de copie de votre bibliothèque sur un serveur et n’envoie pas votre historique d’écoute à un serveur exploité par MusicPod.",
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
      note: "L’illustration officielle du badge App Store est chargée depuis un domaine Apple. Votre navigateur envoie donc une requête réseau à Apple lors de son affichage.",
    },
    {
      id: "use",
      title: "4. Utilisation et fondements",
      paragraphs: [
        "Nous utilisons les informations limitées ci-dessus uniquement pour fournir l’app et le site, mémoriser vos choix, protéger et dépanner le service et répondre à vos messages.",
        "Lorsqu’un fondement juridique est requis, le traitement repose sur la fourniture du service demandé, nos intérêts légitimes d’exploitation et de sécurité, le respect de la loi ou votre consentement. MusicPod demande l’accès à Apple Music dans la fenêtre d’autorisation d’Apple ; vous pouvez le retirer à tout moment.",
      ],
    },
    {
      id: "sharing",
      title: "5. Prestataires et divulgation",
      paragraphs: ["MusicPod ne vend ni ne loue les données personnelles et ne les partage pas pour la publicité comportementale intercontextuelle ou ciblée."],
      items: [
        "Apple traite les requêtes Apple Music, la lecture et les informations de compte selon ses propres conditions et opère indépendamment de MusicPod.",
        "Vercel traite pour notre compte le trafic et les journaux techniques afin d’héberger, fournir et sécuriser musicpod.app.",
        "Nous pouvons divulguer des informations si cela est raisonnablement nécessaire pour respecter la loi, répondre à une procédure valide ou protéger les utilisateurs, le public, nos droits ou la sécurité du service.",
      ],
      note: "Les prestataires agissant pour notre compte doivent traiter les informations uniquement pour leurs services et les protéger conformément à cette politique et à la loi applicable.",
      links: [
        { label: "Apple Music et confidentialité", target: "appleMusicPrivacy" },
        { label: "Politique de confidentialité d’Apple", target: "applePrivacy" },
        { label: "Avis de confidentialité de Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Conservation et sécurité",
      paragraphs: [
        "MusicPod ne conserve aucune copie de votre bibliothèque Apple Music sous le contrôle du développeur. Les préférences restent sur votre appareil jusqu’à leur modification, la réinitialisation des données ou la suppression de l’app. Les préférences du site suivent les durées indiquées plus haut.",
        "Le prestataire d’hébergement ne conserve les journaux de requêtes et de sécurité que pour ses besoins opérationnels, de sécurité et juridiques, puis les supprime ou les désidentifie selon ses pratiques. Vos messages sont gardés le temps nécessaire pour répondre, conserver une trace appropriée et respecter nos obligations.",
        "Nous appliquons des mesures techniques et organisationnelles raisonnables adaptées aux informations limitées traitées. Aucune méthode de transmission ou de stockage ne peut être garantie totalement sûre.",
      ],
    },
    {
      id: "choices",
      title: "7. Vos choix et vos droits",
      paragraphs: ["Vous gardez le contrôle des informations auxquelles MusicPod peut accéder."],
      items: [
        "Accès à Apple Music : modifiez l’autorisation de MusicPod dans Réglages de l’iPhone, sous Confidentialité et sécurité puis Médias et Apple Music. Le retrait désactive les fonctions dépendant de la bibliothèque.",
        "Données sur l’appareil : supprimez l’app pour effacer ses réglages locaux, sous réserve des copies pouvant subsister dans une sauvegarde que vous contrôlez.",
        "Préférences du site : effacez les cookies et les données de site dans le navigateur, ou choisissez l’apparence Système pour supprimer le thème enregistré.",
        "Droits légaux : selon votre lieu de résidence, vous pouvez demander l’accès, la rectification, l’effacement, la limitation, la portabilité ou vous opposer au traitement, retirer votre consentement ou contester une réponse. Contactez-nous pour exercer ces droits.",
      ],
      note: "MusicPod n’ayant pas de comptes utilisateurs et ne conservant pas votre bibliothèque Apple Music, nous pouvons ne détenir aucune donnée permettant de vous identifier. Pour les informations contrôlées par Apple, utilisez ses outils de confidentialité ou contactez Apple.",
      links: [{ label: "Gérer vos données avec Apple", target: "applePrivacy" }],
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
        "N’envoyez jamais le mot de passe de votre compte Apple, de code d’authentification ou de copie de votre bibliothèque. Nous ne vous les demanderons jamais.",
      ],
    },
  ],
  contact: { operator: "Exploitant", product: "Produit", email: "E-mail confidentialité" },
  translationNote: "Cette politique est disponible en plusieurs langues. En cas de divergence, la version anglaise prévaut dans la mesure permise par la loi applicable.",
};

const de: PrivacyMessages = {
  meta: { title: "Datenschutzerklärung — MusicPod", description: "Wie MusicPod den Zugriff auf Apple Music, lokale Einstellungen und Informationen der offiziellen Website verarbeitet." },
  pageLabel: "Datenschutz",
  back: "Zurück zu MusicPod",
  hero: {
    eyebrow: "Datenschutz von Anfang an",
    title: "Deine Musik bleibt deine.",
    intro: "MusicPod wurde entwickelt, um deine Musik abzuspielen – nicht, um Profile zu erstellen. Die App hat kein MusicPod-Konto, keine Werbung und keine Tracking-SDKs von Drittanbietern. Auf deine Apple Music-Mediathek wird nur mit deiner Erlaubnis zugegriffen; sie wird nicht auf unseren Servern gespeichert.",
    updated: "Zuletzt aktualisiert: 16. Juli 2026",
    version: "Version 1.0",
  },
  principles: [
    { title: "Kein MusicPod-Konto", body: "Nutze die App ohne Profil und ohne uns deinen Namen mitzuteilen." },
    { title: "Keine Werbung, kein Tracking", body: "Wir verkaufen keine personenbezogenen Daten und teilen sie nicht für gezielte Werbung." },
    { title: "Mediathek bleibt bei Apple", body: "MusicKit verarbeitet sie; MusicPod kopiert sie nicht auf einen Entwicklerserver." },
  ],
  contents: "Auf dieser Seite",
  sections: [
    {
      id: "scope",
      title: "1. Geltungsbereich und Betreiber",
      paragraphs: [
        "Diese Erklärung beschreibt, wie der Entwickler und Betreiber von MusicPod Informationen verarbeitet, wenn du die MusicPod App für iPhone oder die offizielle Website musicpod.app nutzt. „MusicPod“, „wir“ und „uns“ bezeichnen den im Kontaktabschnitt genannten Betreiber.",
        "Sie gilt nicht für Apple Music, den App Store oder andere unabhängig von Apple oder Dritten betriebene Dienste. Für deren Verarbeitung gelten die jeweiligen Datenschutzbestimmungen.",
      ],
    },
    {
      id: "app-data",
      title: "2. Von der App verarbeitete Informationen",
      paragraphs: ["Nachdem du Apples Systemberechtigung erteilt hast, fordert MusicPod über MusicKit nur die Informationen an, die zur Anzeige und Wiedergabe deiner Apple Music-Inhalte erforderlich sind."],
      items: [
        "Mediathek- und Katalogmetadaten wie Namen, Kennungen, Beziehungen und Cover von Titeln, Alben, Künstlern und Playlists.",
        "Für den Player erforderliche Wiedergabeinformationen wie ausgewählter Inhalt, Warteschlange, Wiedergabestatus und Fortschritt.",
        "Autorisierungsstatus und Abonnementfunktion von Apple Music, um die Verfügbarkeit von Mediathek- und Wiedergabefunktionen zu bestimmen.",
        "App-Einstellungen wie Gehäuse- und Radfarben, Designs, Oberflächen- und Bedienungshilfen. Diese werden lokal auf deinem Gerät gespeichert.",
      ],
      note: "MusicKit kommuniziert mit Apple. MusicPod erhält weder das Passwort deines Apple Accounts noch speichert es eine Serverkopie deiner Mediathek oder sendet deinen Hörverlauf an einen von MusicPod betriebenen Server.",
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
      note: "Die offizielle App Store-Grafik wird von einer Apple-Domain geladen. Dein Browser sendet beim Anzeigen daher eine Netzwerkanfrage an Apple.",
    },
    {
      id: "use",
      title: "4. Verwendung und Rechtsgrundlagen",
      paragraphs: [
        "Wir verwenden die oben beschriebenen begrenzten Informationen nur, um App und Website bereitzustellen, deine Auswahl zu speichern, den Dienst zu schützen und Fehler zu beheben sowie auf Nachrichten zu antworten.",
        "Soweit eine Rechtsgrundlage erforderlich ist, stützt sich die Verarbeitung auf die angeforderte Leistung, unsere berechtigten Interessen an Betrieb und Sicherheit, gesetzliche Pflichten oder deine Einwilligung. Der Apple Music-Zugriff wird über Apples Berechtigungsdialog angefragt und kann jederzeit widerrufen werden.",
      ],
    },
    {
      id: "sharing",
      title: "5. Dienstleister und Offenlegung",
      paragraphs: ["MusicPod verkauft oder vermietet keine personenbezogenen Daten und teilt sie nicht für kontextübergreifende verhaltensbezogene oder gezielte Werbung."],
      items: [
        "Apple verarbeitet Apple Music-Anfragen, Wiedergabe- und Accountinformationen nach eigenen Bedingungen und unabhängig von MusicPod.",
        "Vercel verarbeitet in unserem Auftrag Website-Verkehr und technische Protokolle, um musicpod.app zu hosten, auszuliefern und zu schützen.",
        "Wir können Informationen offenlegen, wenn dies vernünftigerweise erforderlich ist, um Gesetze oder gültige Verfahren einzuhalten oder Nutzer, Öffentlichkeit, unsere Rechte oder die Dienstsicherheit zu schützen.",
      ],
      note: "Dienstleister in unserem Auftrag dürfen Informationen nur für ihre Leistungen verarbeiten und müssen sie gemäß dieser Erklärung und geltendem Recht schützen.",
      links: [
        { label: "Apple Music & Datenschutz", target: "appleMusicPrivacy" },
        { label: "Apple Datenschutzrichtlinie", target: "applePrivacy" },
        { label: "Vercel Datenschutzhinweis", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Aufbewahrung und Sicherheit",
      paragraphs: [
        "MusicPod bewahrt keine entwicklerkontrollierte Kopie deiner Apple Music-Mediathek auf. App-Einstellungen bleiben bis zur Änderung, zum Zurücksetzen der App-Daten oder Entfernen der App auf deinem Gerät. Website-Präferenzen gelten für die oben genannten Zeiträume.",
        "Anfrage- und Sicherheitsprotokolle werden vom Hostinganbieter nur für betriebliche, Sicherheits- und Rechtszwecke aufbewahrt und danach gemäß dessen Praxis gelöscht oder anonymisiert. Nachrichten werden nur so lange gespeichert, wie es für Antwort, angemessene Dokumentation und rechtliche Pflichten nötig ist.",
        "Wir setzen angemessene technische und organisatorische Schutzmaßnahmen für die begrenzten Informationen ein. Kein Übertragungs- oder Speicherverfahren kann vollständig sicher garantiert werden.",
      ],
    },
    {
      id: "choices",
      title: "7. Deine Wahlmöglichkeiten und Rechte",
      paragraphs: ["Du kontrollierst, auf welche Informationen MusicPod zugreifen kann."],
      items: [
        "Apple Music-Zugriff: Ändere die MusicPod-Berechtigung in den iPhone-Einstellungen unter Datenschutz & Sicherheit und Medien & Apple Music. Ein Widerruf deaktiviert mediatheksabhängige Funktionen.",
        "Lokale Daten: Entferne die App, um lokale Einstellungen zu löschen; von dir kontrollierte Gerätesicherungen können Kopien enthalten.",
        "Website-Präferenzen: Lösche Cookies und Website-Daten im Browser oder wähle System, um die gespeicherte Designauswahl zu entfernen.",
        "Gesetzliche Rechte: Je nach Wohnort kannst du Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit oder Widerspruch verlangen, Einwilligung widerrufen oder eine Antwort anfechten. Kontaktiere uns dazu.",
      ],
      note: "Da MusicPod keine Nutzerkonten führt und deine Apple Music-Mediathek nicht speichert, haben wir möglicherweise keine Daten, die dich identifizieren. Für von Apple kontrollierte Informationen nutze Apples Datenschutzwerkzeuge oder kontaktiere Apple.",
      links: [{ label: "Daten bei Apple verwalten", target: "applePrivacy" }],
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
        "Sende uns niemals das Passwort deines Apple Accounts, Authentifizierungscodes oder eine Kopie deiner Mediathek. Wir werden nie danach fragen.",
      ],
    },
  ],
  contact: { operator: "Betreiber", product: "Produkt", email: "Datenschutz-E-Mail" },
  translationNote: "Diese Erklärung ist in mehreren Sprachen verfügbar. Bei Abweichungen gilt die englische Fassung, soweit das anwendbare Recht dies zulässt.",
};

const ptBR: PrivacyMessages = {
  meta: { title: "Política de Privacidade — MusicPod", description: "Como o MusicPod trata o acesso ao Apple Music, as preferências no dispositivo e as informações do site oficial." },
  pageLabel: "Privacidade",
  back: "Voltar ao MusicPod",
  hero: {
    eyebrow: "Privacidade desde o design",
    title: "Sua música continua sendo sua.",
    intro: "O MusicPod foi feito para tocar sua música, não para criar um perfil sobre você. O app não tem conta MusicPod, publicidade nem SDKs de rastreamento de terceiros. Sua biblioteca do Apple Music só é acessada com sua permissão e não é armazenada em nossos servidores.",
    updated: "Última atualização: 16 de julho de 2026",
    version: "Versão 1.0",
  },
  principles: [
    { title: "Sem conta MusicPod", body: "Use o app sem criar um perfil ou informar seu nome." },
    { title: "Sem anúncios ou rastreamento", body: "Não vendemos informações pessoais nem as compartilhamos para publicidade direcionada." },
    { title: "Biblioteca permanece na Apple", body: "O MusicKit faz o tratamento; o MusicPod não a copia para um servidor do desenvolvedor." },
  ],
  contents: "Nesta página",
  sections: [
    {
      id: "scope",
      title: "1. Escopo e responsável",
      paragraphs: [
        "Esta política explica como o desenvolvedor e operador do MusicPod tratam informações quando você usa o app MusicPod para iPhone ou visita o site oficial musicpod.app. “MusicPod” e “nós” se referem ao operador indicado na seção de contato.",
        "Ela não rege o Apple Music, a App Store ou outros serviços operados de forma independente pela Apple ou por terceiros; esses serviços seguem seus próprios termos de privacidade.",
      ],
    },
    {
      id: "app-data",
      title: "2. Informações tratadas pelo app",
      paragraphs: ["Depois que você aceita a permissão do sistema da Apple, o MusicPod usa o MusicKit para solicitar apenas as informações necessárias para exibir e reproduzir seu conteúdo do Apple Music."],
      items: [
        "Metadados da biblioteca e do catálogo, como nomes, identificadores, relações e capas de músicas, álbuns, artistas e playlists.",
        "Informações necessárias para operar o player, como item selecionado, fila, estado e progresso da reprodução.",
        "Status de autorização e capacidade da assinatura do Apple Music para verificar se os recursos de biblioteca e reprodução estão disponíveis.",
        "Preferências do app, como cores do corpo e da roda, temas, opções da interface e acessibilidade. Elas são armazenadas localmente no dispositivo.",
      ],
      note: "O MusicKit se comunica com a Apple. O MusicPod não recebe a senha da sua Conta Apple, não mantém uma cópia da biblioteca em servidor e não envia seu histórico de reprodução a um servidor operado pelo MusicPod.",
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
      note: "A arte oficial do selo da App Store é carregada de um domínio da Apple. Assim, seu navegador faz uma solicitação de rede à Apple quando ela é exibida.",
    },
    {
      id: "use",
      title: "4. Como e por que usamos informações",
      paragraphs: [
        "Usamos as informações limitadas acima somente para oferecer o app e o site, lembrar suas escolhas, proteger e solucionar problemas do serviço e responder quando você entra em contato.",
        "Quando uma base legal é necessária, o tratamento se apoia na prestação do serviço solicitado, em nossos interesses legítimos de operação e segurança, no cumprimento da lei ou no seu consentimento. O MusicPod solicita acesso ao Apple Music pelo aviso de permissão da Apple, e você pode retirá-lo a qualquer momento.",
      ],
    },
    {
      id: "sharing",
      title: "5. Prestadores e divulgação",
      paragraphs: ["O MusicPod não vende nem aluga informações pessoais e não as compartilha para publicidade comportamental entre contextos ou publicidade direcionada."],
      items: [
        "A Apple trata solicitações do Apple Music, reprodução e informações de conta segundo seus próprios termos e opera independentemente do MusicPod.",
        "A Vercel trata o tráfego do site e registros técnicos em nosso nome para hospedar, entregar e proteger musicpod.app.",
        "Podemos divulgar informações quando razoavelmente necessário para cumprir a lei, responder a processo legal válido ou proteger usuários, o público, nossos direitos ou a segurança do serviço.",
      ],
      note: "Prestadores que atuam em nosso nome devem tratar informações apenas para os serviços oferecidos e protegê-las de acordo com esta política e a lei aplicável.",
      links: [
        { label: "Apple Music e Privacidade", target: "appleMusicPrivacy" },
        { label: "Política de Privacidade da Apple", target: "applePrivacy" },
        { label: "Aviso de Privacidade da Vercel", target: "vercelPrivacy" },
      ],
    },
    {
      id: "retention",
      title: "6. Retenção e segurança",
      paragraphs: [
        "O MusicPod não retém uma cópia da sua biblioteca do Apple Music sob controle do desenvolvedor. As preferências ficam no dispositivo até serem alteradas, os dados do app serem redefinidos ou o app ser removido. As preferências do site seguem os períodos acima.",
        "Registros de solicitação e segurança são mantidos pelo provedor de hospedagem apenas por necessidades operacionais, de segurança e legais, e depois apagados ou desidentificados conforme suas práticas. Suas mensagens são mantidas apenas para responder, preservar um registro adequado e cumprir obrigações legais.",
        "Aplicamos medidas técnicas e organizacionais razoáveis para as informações limitadas que tratamos, mas nenhum método de transmissão ou armazenamento pode ser garantido como totalmente seguro.",
      ],
    },
    {
      id: "choices",
      title: "7. Suas escolhas e direitos",
      paragraphs: ["Você controla as informações que o MusicPod pode acessar."],
      items: [
        "Acesso ao Apple Music: altere a permissão do MusicPod nos Ajustes do iPhone, em Privacidade e Segurança e Mídia e Apple Music. A retirada desativa recursos que dependem da biblioteca.",
        "Dados no dispositivo: remova o app para apagar os ajustes locais, ressalvadas cópias que possam permanecer em um backup sob seu controle.",
        "Preferências do site: limpe cookies e dados do site no navegador ou escolha a aparência Sistema para remover o tema salvo.",
        "Direitos legais: dependendo de onde você mora, pode solicitar acesso, correção, exclusão, restrição, portabilidade ou oposição, retirar o consentimento ou recorrer de uma resposta. Entre em contato para fazer uma solicitação.",
      ],
      note: "Como o MusicPod não tem contas de usuário e não mantém sua biblioteca do Apple Music, talvez não tenhamos dados que identifiquem você. Para informações controladas pela Apple, use suas ferramentas de privacidade ou contate a Apple diretamente.",
      links: [{ label: "Gerenciar dados com a Apple", target: "applePrivacy" }],
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
        "Não envie a senha da sua Conta Apple, códigos de autenticação ou uma cópia da biblioteca. Nunca solicitaremos essas informações.",
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

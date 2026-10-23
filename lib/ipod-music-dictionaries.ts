import type { Locale } from "./locales";

export const IPOD_MUSIC_SECTION_IDS = ["get-started", "import-local-music", "apple-music", "click-wheel", "cover-flow"] as const;

type GuideSection = {
  id: (typeof IPOD_MUSIC_SECTION_IDS)[number];
  title: string;
  paragraphs: string[];
  steps?: string[];
  items?: string[];
};

export type IpodMusicMessages = {
  meta: { title: string; description: string; social: string };
  pageLabel: string;
  screenshot: { alt: string };
  sections: ReadonlyArray<GuideSection>;
};

// Steps are checked against LocalMusicManagementView, HomeView, and
// LibrarySortPreferences in the iOS app. Keep the same anchors in every locale.
export const ipodMusicDictionaries: Record<Locale, IpodMusicMessages> = {
  en: {
    meta: {
      title: "MusicPod Guide — Import Music, Apple Music & Click Wheel",
      description: "Learn to import audio into MusicPod, use Apple Music, and browse with the click wheel and Cover Flow. Local music plays without an Apple Music subscription.",
      social: "Import music, connect your library, and get to know the click wheel.",
    },
    pageLabel: "MusicPod guide",
    screenshot: { alt: "MusicPod home screen with Favorite Songs, a mini player, and a red click wheel" },
    sections: [
      { id: "get-started", title: "Set up MusicPod on iPhone", paragraphs: ["Download MusicPod from the App Store on an iPhone running iOS 17 or later. No MusicPod account is needed. The app is free to download, with optional in-app purchases."] },
      { id: "import-local-music", title: "How to import local music", paragraphs: ["Keep the audio files you want to import in the Files app."], steps: ["Open Local Music in MusicPod and tap the + button to open Import Music.", "Tap Choose Files to select audio files, or Choose a Folder to import a folder.", "Wait for the import to finish, then browse and play the songs from Local Music."], items: ["Supported files: MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC, and CAF.", "Protected downloads and encrypted formats such as NCM, QMC, and KGM cannot be imported."] },
      { id: "apple-music", title: "When do you need Apple Music?", paragraphs: ["Imported audio and playable music synced to your device do not require an Apple Music subscription. Imported files can play offline after they have been copied into MusicPod.", "Playing Apple Music subscription content requires an active subscription. Allow Music and Media access when prompted to browse your music library."] },
      { id: "click-wheel", title: "How to use the click wheel", paragraphs: [], steps: ["Slide your finger around the wheel to move through menus and lists.", "Press the center to open the selected item. Press MENU to go back.", "Use the play/pause and previous/next buttons to control playback."] },
      { id: "cover-flow", title: "How to browse albums with Cover Flow", paragraphs: [], steps: ["Open Albums, then hold the center OK button to open the display options and choose Cover Flow.", "Swipe through the covers or turn the wheel to choose an album.", "Open the selected album to see its tracks, then choose a song to play."] },
    ],
  },
  "zh-cn": {
    meta: {
      title: "MusicPod 使用指南：导入音乐、Apple Music 与转盘操作",
      description: "了解如何在 iPhone 上向 MusicPod 导入本地音频、播放 Apple Music，以及使用点按式转盘和 Cover Flow。本地音乐无需 Apple Music 订阅。",
      social: "导入音乐、连接资料库，开始使用经典转盘。",
    },
    pageLabel: "使用指南",
    screenshot: { alt: "MusicPod 首页，包含喜爱歌曲、迷你播放器与红色点按式转盘" },
    sections: [
      { id: "get-started", title: "在 iPhone 上开始使用", paragraphs: ["在运行 iOS 17 或更新系统的 iPhone 上，从 App Store 下载 MusicPod。无需注册 MusicPod 账号。可免费下载，部分功能需内购。"] },
      { id: "import-local-music", title: "如何导入本地音乐", paragraphs: ["先将要导入的音频保存在 iPhone 的「文件」App 中。"], steps: ["在 MusicPod 中打开「本地音乐」，点击 + 按钮进入「导入音乐」。", "点击「选择文件」选取音频，或使用「选择文件夹」导入整个文件夹。", "等待导入完成，回到「本地音乐」浏览并播放歌曲。"], items: ["支持 MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC 与 CAF 文件。", "不支持受保护的下载内容，以及 NCM、QMC、KGM 等加密格式。"] },
      { id: "apple-music", title: "什么时候需要 Apple Music 订阅", paragraphs: ["导入的音频，以及同步到设备且可播放的音乐，无需 Apple Music 订阅。音频复制到 MusicPod 后，可离线播放。", "播放 Apple Music 订阅内容需要有效订阅。浏览音乐资料库时，请按提示允许「媒体与 Apple Music」访问权限。"] },
      { id: "click-wheel", title: "如何使用点按式转盘", paragraphs: [], steps: ["沿转盘滑动手指，在菜单和列表中移动。", "按下中央按钮打开所选项目，按 MENU 返回上一级。", "使用播放／暂停、上一首和下一首按钮控制播放。"] },
      { id: "cover-flow", title: "如何用 Cover Flow 浏览专辑", paragraphs: [], steps: ["打开「专辑」，长按中央 OK 按钮，在显示选项中选择 Cover Flow。", "滑动专辑封面，或转动转盘选择专辑。", "打开所选专辑查看曲目，再选择歌曲播放。"] },
    ],
  },
  "zh-tw": {
    meta: {
      title: "MusicPod 使用指南：匯入音樂、Apple Music 與轉盤操作",
      description: "了解如何在 iPhone 上向 MusicPod 匯入本機音訊、播放 Apple Music，以及使用點按式轉盤和 Cover Flow。本機音樂無需 Apple Music 訂閱。",
      social: "匯入音樂、連接資料庫，開始使用經典轉盤。",
    },
    pageLabel: "使用指南",
    screenshot: { alt: "MusicPod 首頁，包含喜愛歌曲、迷你播放器與紅色點按式轉盤" },
    sections: [
      { id: "get-started", title: "在 iPhone 上開始使用", paragraphs: ["在執行 iOS 17 或更新系統的 iPhone 上，從 App Store 下載 MusicPod。無需註冊 MusicPod 帳號。可免費下載，部分功能需內購。"] },
      { id: "import-local-music", title: "如何匯入本機音樂", paragraphs: ["先將要匯入的音訊儲存在 iPhone 的「檔案」App 中。"], steps: ["在 MusicPod 中打開「本機音樂」，點選 + 按鈕進入「匯入音樂」。", "點選「選擇檔案」選取音訊，或使用「選擇資料夾」匯入整個資料夾。", "等待匯入完成，回到「本機音樂」瀏覽並播放歌曲。"], items: ["支援 MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC 與 CAF 檔案。", "不支援受保護的下載內容，以及 NCM、QMC、KGM 等加密格式。"] },
      { id: "apple-music", title: "什麼時候需要 Apple Music 訂閱", paragraphs: ["匯入的音訊，以及同步到裝置且可播放的音樂，無需 Apple Music 訂閱。音訊複製到 MusicPod 後，可離線播放。", "播放 Apple Music 訂閱內容需要有效訂閱。瀏覽音樂資料庫時，請依提示允許「媒體與 Apple Music」存取權限。"] },
      { id: "click-wheel", title: "如何使用點按式轉盤", paragraphs: [], steps: ["沿轉盤滑動手指，在選單和列表中移動。", "按下中央按鈕打開所選項目，按 MENU 返回上一層。", "使用播放／暫停、上一首和下一首按鈕控制播放。"] },
      { id: "cover-flow", title: "如何用 Cover Flow 瀏覽專輯", paragraphs: [], steps: ["打開「專輯」，長按中央 OK 按鈕，在顯示選項中選擇 Cover Flow。", "滑動專輯封面，或轉動轉盤選擇專輯。", "打開所選專輯查看曲目，再選擇歌曲播放。"] },
    ],
  },
  ja: {
    meta: {
      title: "MusicPodの使い方：音楽の読み込み・Apple Music・ホイール",
      description: "iPhoneのMusicPodに音声ファイルを読み込む方法、Apple Musicの再生、クリックホイールとCover Flowの使い方。ローカル音楽にApple Musicの契約は不要です。",
      social: "音楽を読み込んで、クリックホイールで聴き始めましょう。",
    },
    pageLabel: "使い方ガイド",
    screenshot: { alt: "お気に入り、ミニプレーヤー、赤いクリックホイールがあるMusicPodのホーム画面" },
    sections: [
      { id: "get-started", title: "iPhoneで使い始める", paragraphs: ["iOS 17以降のiPhoneで、App StoreからMusicPodをダウンロードしてください。MusicPodのアカウント登録は不要です。無料でダウンロードでき、一部機能はアプリ内課金です。"] },
      { id: "import-local-music", title: "ローカル音楽を読み込む", paragraphs: ["読み込む音声ファイルを、iPhoneの「ファイル」アプリに保存します。"], steps: ["MusicPodの「ローカル音楽」を開き、+ボタンで「音楽を読み込む」を開きます。", "「ファイルを選択」で音声を選ぶか、「フォルダを選択」でフォルダを読み込みます。", "読み込みが終わったら、「ローカル音楽」で曲を選んで再生します。"], items: ["対応形式：MP3、M4A、AAC、WAV、AIFF、AIF、AIFC、FLAC、CAF。", "保護されたダウンロードや、NCM・QMC・KGMなどの暗号化形式には対応していません。"] },
      { id: "apple-music", title: "Apple Musicの契約が必要な場合", paragraphs: ["読み込んだ音声や、端末に同期済みで再生可能な音楽にApple Musicの契約は不要です。MusicPodにコピーした音声はオフラインで再生できます。", "Apple Musicのサブスクリプションコンテンツの再生には有効な契約が必要です。ライブラリを使う際は、表示される案内に従いメディアとApple Musicへのアクセスを許可してください。"] },
      { id: "click-wheel", title: "クリックホイールの使い方", paragraphs: [], steps: ["ホイールに沿って指を滑らせ、メニューやリストを移動します。", "中央ボタンで項目を開き、MENUで前の画面に戻ります。", "再生／一時停止と前後の曲ボタンで再生を操作します。"] },
      { id: "cover-flow", title: "Cover Flowでアルバムを見る", paragraphs: [], steps: ["「アルバム」を開き、中央のOKボタンを長押しして、表示設定からCover Flowを選びます。", "カバーをスワイプするか、ホイールを回してアルバムを選びます。", "選んだアルバムを開いて曲一覧を表示し、曲を選んで再生します。"] },
    ],
  },
  ko: {
    meta: {
      title: "MusicPod 사용 가이드: 음악 가져오기, Apple Music, 클릭 휠",
      description: "iPhone의 MusicPod로 오디오를 가져오고 Apple Music, 클릭 휠, Cover Flow를 사용하는 방법. 로컬 음악에는 Apple Music 구독이 필요하지 않습니다.",
      social: "음악을 가져오고 클릭 휠로 감상을 시작하세요.",
    },
    pageLabel: "사용 가이드",
    screenshot: { alt: "즐겨찾는 노래, 미니 플레이어, 빨간 클릭 휠이 있는 MusicPod 홈 화면" },
    sections: [
      { id: "get-started", title: "iPhone에서 시작하기", paragraphs: ["iOS 17 이상인 iPhone에서 App Store를 통해 MusicPod를 다운로드하세요. MusicPod 계정은 필요하지 않습니다. 무료로 다운로드할 수 있으며 일부 기능은 앱 내 구입이 필요합니다."] },
      { id: "import-local-music", title: "로컬 음악 가져오기", paragraphs: ["가져올 오디오를 iPhone의 파일 앱에 저장하세요."], steps: ["MusicPod에서 로컬 음악을 열고 + 버튼을 눌러 음악 가져오기를 엽니다.", "파일 선택으로 오디오를 고르거나 폴더 선택으로 폴더를 가져옵니다.", "가져오기가 끝나면 로컬 음악에서 노래를 찾아 재생합니다."], items: ["지원 형식: MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC, CAF.", "보호된 다운로드 및 NCM, QMC, KGM 같은 암호화 형식은 지원하지 않습니다."] },
      { id: "apple-music", title: "Apple Music 구독이 필요한 경우", paragraphs: ["가져온 오디오와 기기에 동기화된 재생 가능한 음악에는 Apple Music 구독이 필요하지 않습니다. MusicPod로 복사된 파일은 오프라인에서 재생할 수 있습니다.", "Apple Music 구독 콘텐츠를 재생하려면 유효한 구독이 필요합니다. 보관함을 사용할 때 안내에 따라 미디어 및 Apple Music 접근을 허용하세요."] },
      { id: "click-wheel", title: "클릭 휠 사용하기", paragraphs: [], steps: ["휠을 따라 손가락을 움직여 메뉴와 목록을 탐색합니다.", "가운데 버튼으로 선택한 항목을 열고 MENU로 돌아갑니다.", "재생/일시 정지와 이전/다음 버튼으로 재생을 제어합니다."] },
      { id: "cover-flow", title: "Cover Flow로 앨범 보기", paragraphs: [], steps: ["앨범을 열고 가운데 OK 버튼을 길게 눌러 표시 옵션에서 Cover Flow를 선택합니다.", "커버를 스와이프하거나 휠을 돌려 앨범을 고릅니다.", "선택한 앨범을 열어 트랙을 확인하고 곡을 선택해 재생합니다."] },
    ],
  },
  es: {
    meta: {
      title: "Guía de MusicPod: importar música, Apple Music y rueda de clic",
      description: "Aprende a importar audio en MusicPod para iPhone y a usar Apple Music, la rueda de clic y Cover Flow. La música local no requiere suscripción a Apple Music.",
      social: "Importa música y empieza a escuchar con la rueda de clic.",
    },
    pageLabel: "Guía de MusicPod",
    screenshot: { alt: "Pantalla de inicio de MusicPod con favoritas, minirreproductor y rueda de clic roja" },
    sections: [
      { id: "get-started", title: "Configurar MusicPod en iPhone", paragraphs: ["Descarga MusicPod de la App Store en un iPhone con iOS 17 o posterior. No necesitas una cuenta de MusicPod. La descarga es gratuita, con compras opcionales dentro de la app."] },
      { id: "import-local-music", title: "Cómo importar música local", paragraphs: ["Guarda el audio que quieras importar en la app Archivos del iPhone."], steps: ["Abre Música local en MusicPod y toca + para abrir Importar música.", "Elige archivos de audio o selecciona una carpeta para importarla.", "Espera a que termine la importación y reproduce las canciones desde Música local."], items: ["Formatos compatibles: MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC y CAF.", "No se admiten descargas protegidas ni formatos cifrados como NCM, QMC o KGM."] },
      { id: "apple-music", title: "Cuándo necesitas Apple Music", paragraphs: ["El audio importado y la música reproducible sincronizada con tu dispositivo no requieren suscripción a Apple Music. Los archivos copiados a MusicPod se pueden reproducir sin conexión.", "El contenido de suscripción de Apple Music requiere una suscripción activa. Permite el acceso a contenido multimedia y Apple Music cuando se solicite para explorar tu biblioteca."] },
      { id: "click-wheel", title: "Cómo usar la rueda de clic", paragraphs: [], steps: ["Desliza el dedo alrededor de la rueda para recorrer menús y listas.", "Pulsa el centro para abrir un elemento y MENU para volver.", "Controla la reproducción con los botones de pausa, pista anterior y siguiente."] },
      { id: "cover-flow", title: "Explorar álbumes con Cover Flow", paragraphs: [], steps: ["Abre Álbumes y mantén pulsado el botón central OK para elegir Cover Flow en las opciones de visualización.", "Desliza las portadas o gira la rueda para elegir un álbum.", "Abre el álbum seleccionado para ver sus pistas y elige una canción."] },
    ],
  },
  fr: {
    meta: {
      title: "Guide MusicPod : importer de la musique, Apple Music et molette",
      description: "Importez de l’audio dans MusicPod sur iPhone et découvrez Apple Music, la molette et Cover Flow. Aucun abonnement Apple Music n’est nécessaire pour la musique locale.",
      social: "Importez votre musique et commencez à écouter avec la molette.",
    },
    pageLabel: "Guide MusicPod",
    screenshot: { alt: "Écran d’accueil de MusicPod avec favoris, mini-lecteur et molette rouge" },
    sections: [
      { id: "get-started", title: "Configurer MusicPod sur iPhone", paragraphs: ["Téléchargez MusicPod sur l’App Store avec un iPhone sous iOS 17 ou version ultérieure. Aucun compte MusicPod n’est nécessaire. Le téléchargement est gratuit, avec des achats intégrés facultatifs."] },
      { id: "import-local-music", title: "Importer de la musique locale", paragraphs: ["Enregistrez les fichiers audio dans l’app Fichiers de l’iPhone."], steps: ["Ouvrez Musique locale dans MusicPod et touchez + pour ouvrir Importer de la musique.", "Touchez Choisir des fichiers pour sélectionner l’audio, ou Choisir un dossier pour importer un dossier.", "Attendez la fin de l’importation, puis écoutez les morceaux depuis Musique locale."], items: ["Formats compatibles : MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC et CAF.", "Les téléchargements protégés et les formats chiffrés comme NCM, QMC et KGM ne sont pas compatibles."] },
      { id: "apple-music", title: "Quand faut-il un abonnement Apple Music ?", paragraphs: ["Les fichiers importés et la musique lisible synchronisée sur votre appareil ne nécessitent pas d’abonnement Apple Music. Les fichiers copiés dans MusicPod sont disponibles hors connexion.", "Le contenu de l’abonnement Apple Music nécessite un abonnement actif. Autorisez l’accès aux médias et à Apple Music lorsque l’app le demande pour parcourir votre bibliothèque."] },
      { id: "click-wheel", title: "Utiliser la molette", paragraphs: [], steps: ["Glissez le doigt autour de la molette pour parcourir les menus et les listes.", "Appuyez au centre pour ouvrir un élément, puis sur MENU pour revenir.", "Utilisez lecture/pause et les boutons précédent/suivant pour contrôler la lecture."] },
      { id: "cover-flow", title: "Parcourir les albums avec Cover Flow", paragraphs: [], steps: ["Ouvrez Albums et maintenez le bouton central OK pour choisir Cover Flow dans les options d’affichage.", "Balayez les pochettes ou tournez la molette pour choisir un album.", "Ouvrez l’album sélectionné pour afficher les pistes, puis choisissez un morceau."] },
    ],
  },
  de: {
    meta: {
      title: "MusicPod-Anleitung: Musik importieren, Apple Music und Click Wheel",
      description: "Importiere Audio in MusicPod fürs iPhone und nutze Apple Music, Click Wheel und Cover Flow. Lokale Musik benötigt kein Apple Music Abo.",
      social: "Musik importieren und mit dem Click Wheel loshören.",
    },
    pageLabel: "MusicPod-Anleitung",
    screenshot: { alt: "MusicPod-Startbildschirm mit Favoriten, Miniplayer und rotem Click Wheel" },
    sections: [
      { id: "get-started", title: "MusicPod auf dem iPhone einrichten", paragraphs: ["Lade MusicPod aus dem App Store auf ein iPhone mit iOS 17 oder neuer. Ein MusicPod-Konto ist nicht nötig. Der Download ist kostenlos, mit optionalen In-App-Käufen."] },
      { id: "import-local-music", title: "Lokale Musik importieren", paragraphs: ["Speichere die Audiodateien in der Dateien-App auf deinem iPhone."], steps: ["Öffne Lokale Musik in MusicPod und tippe auf +, um Musik importieren zu öffnen.", "Tippe auf Dateien auswählen oder importiere mit Ordner auswählen einen Ordner.", "Warte auf den Abschluss des Imports und spiele die Titel unter Lokale Musik ab."], items: ["Unterstützte Formate: MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC und CAF.", "Geschützte Downloads und verschlüsselte Formate wie NCM, QMC und KGM werden nicht unterstützt."] },
      { id: "apple-music", title: "Wann brauchst du Apple Music?", paragraphs: ["Importierte Audiodateien und abspielbare Musik, die mit deinem Gerät synchronisiert wurde, benötigen kein Apple Music Abo. In MusicPod kopierte Dateien lassen sich offline abspielen.", "Für Apple Music Abo-Inhalte brauchst du ein aktives Abo. Erlaube auf Anfrage den Zugriff auf Medien und Apple Music, um deine Mediathek zu durchsuchen."] },
      { id: "click-wheel", title: "Das Click Wheel bedienen", paragraphs: [], steps: ["Bewege den Finger um das Rad, um Menüs und Listen zu durchsuchen.", "Drücke die Mitte zum Öffnen und MENU, um zurückzugehen.", "Steuere die Wiedergabe mit Play/Pause und den Tasten für den vorherigen und nächsten Titel."] },
      { id: "cover-flow", title: "Alben mit Cover Flow durchsuchen", paragraphs: [], steps: ["Öffne Alben und halte die mittlere OK-Taste gedrückt. Wähle Cover Flow in den Anzeigeoptionen.", "Wische durch die Cover oder drehe das Rad, um ein Album auszuwählen.", "Öffne das ausgewählte Album, um die Titel zu sehen, und wähle einen zum Abspielen."] },
    ],
  },
  "pt-br": {
    meta: {
      title: "Guia do MusicPod: importar músicas, Apple Music e click wheel",
      description: "Aprenda a importar áudio no MusicPod para iPhone e a usar Apple Music, click wheel e Cover Flow. Música local não precisa de assinatura do Apple Music.",
      social: "Importe suas músicas e comece a ouvir com a click wheel.",
    },
    pageLabel: "Guia do MusicPod",
    screenshot: { alt: "Tela inicial do MusicPod com favoritas, miniplayer e click wheel vermelha" },
    sections: [
      { id: "get-started", title: "Configurar o MusicPod no iPhone", paragraphs: ["Baixe o MusicPod na App Store em um iPhone com iOS 17 ou posterior. Você não precisa de conta no MusicPod. O download é gratuito, com compras opcionais no app."] },
      { id: "import-local-music", title: "Como importar músicas locais", paragraphs: ["Salve o áudio que deseja importar no app Arquivos do iPhone."], steps: ["Abra Música local no MusicPod e toque em + para abrir Importar músicas.", "Toque em Escolher arquivos para selecionar o áudio ou em Escolher uma pasta para importar uma pasta.", "Espere a importação terminar e reproduza as faixas em Música local."], items: ["Formatos compatíveis: MP3, M4A, AAC, WAV, AIFF, AIF, AIFC, FLAC e CAF.", "Downloads protegidos e formatos criptografados como NCM, QMC e KGM não são compatíveis."] },
      { id: "apple-music", title: "Quando é preciso assinar o Apple Music?", paragraphs: ["Áudio importado e músicas reproduzíveis sincronizadas com o dispositivo não precisam de assinatura do Apple Music. Arquivos copiados para o MusicPod podem ser ouvidos offline.", "Conteúdo da assinatura do Apple Music exige uma assinatura ativa. Permita o acesso a mídia e Apple Music quando solicitado para navegar pela biblioteca."] },
      { id: "click-wheel", title: "Como usar a click wheel", paragraphs: [], steps: ["Deslize o dedo ao redor da roda para navegar pelos menus e listas.", "Pressione o centro para abrir um item e MENU para voltar.", "Use reproduzir/pausar e os botões de faixa anterior/seguinte para controlar a reprodução."] },
      { id: "cover-flow", title: "Navegar pelos álbuns com Cover Flow", paragraphs: [], steps: ["Abra Álbuns e segure o botão central OK para escolher Cover Flow nas opções de exibição.", "Deslize pelas capas ou gire a roda para escolher um álbum.", "Abra o álbum selecionado para ver as faixas e escolha uma música para tocar."] },
    ],
  },
};

export function getIpodMusicDictionary(locale: Locale) {
  return ipodMusicDictionaries[locale];
}

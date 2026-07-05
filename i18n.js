(function () {
  'use strict';

  const langNames = {
    'zh-Hans': '简体中文',
    'zh-Hant': '繁體中文',
    'ja': '日本語',
    'ko': '한국어',
    'en': 'English',
    'de': 'Deutsch',
    'es': 'Español',
    'fr': 'Français',
    'it': 'Italiano',
    'pt': 'Português',
    'th': 'ไทย',
    'my': 'မြန်မာ',
    'vi': 'Tiếng Việt',
    'km': 'ភាសាខ្មែរ',
    'lo': 'ພາສາລາວ',
    'id': 'Bahasa Indonesia',
    'ms': 'Bahasa Melayu'
  };

  const translations = {
    'zh-Hans': {
      nav_sutras: '佛典',
      nav_wisdom: '智慧',
      nav_practice: '修行',
      nav_about: '关于',
      cta_experience: '进入体验',
      hero_eyebrow: '数字佛典 · 智慧之门',
      hero_title_1: '一念花开',
      hero_title_2: '万法归心',
      hero_lead: '穿越语言、时代与宗派的边界，在浩瀚佛典中寻找清明、慈悲与内在秩序。',
      hero_btn_explore: '开始探索',
      hero_btn_learn: '了解 xHalo Buddhist',
      scroll_hint: '向下滚动 探索更多',
      scroll_text: 'SCROLL',
      intro_kicker: '一处入口 · 多重经藏',
      intro_title: '让浩瀚佛典更易检索、更易阅读，也更容易彼此连接。',
      intro_lead: '以结构化经文、跨语种版本、全文检索和语义探索为基础，构建面向现代阅读场景的佛典入口。',
      feat_num_1: '01',
      feat_title_1: '多语佛典',
      feat_desc_1: '在统一的作品与章节结构中组织不同语言、译本和传承来源。',
      feat_num_2: '02',
      feat_title_2: '智慧检索',
      feat_desc_2: '结合关键词、章节定位与语义探索，减少在海量文本中的检索成本。',
      feat_num_3: '03',
      feat_title_3: '清净阅读',
      feat_desc_3: '以克制、专注和可访问的界面呈现经文，保持阅读过程的连续性。',
      quote_content: '应无所住，而生其心。',
      quote_source: '《金刚般若波罗蜜经》',
      quote_btn: '返回星空',
      footer_text: '数字佛典 · 智慧之门',
      skip_link: '跳到主要内容',
      menu_aria_open: '打开菜单',
      menu_aria_close: '关闭菜单',
      brand_aria: 'xHalo Buddhist 首页',
      scroll_hint_aria: '向下滚动查看佛典能力',
      menu_mobile_aria: '移动端导航',
      menu_desktop_aria: '主导航',
      meta_description: 'xHalo Buddhist — 多语言佛典、全文检索与语义探索。独立河流、佛像与旋转光环分层呈现。',
      meta_og_description: '穿越语言、时代与宗派的边界，在浩瀚佛典中寻找清明、慈悲与内在秩序。',
      meta_og_title: 'xHalo Buddhist · 一念花开',
      page_title: 'xHalo Buddhist · 一念花开'
    },
    'zh-Hant': {
      nav_sutras: '佛典',
      nav_wisdom: '智慧',
      nav_practice: '修行',
      nav_about: '關於',
      cta_experience: '進入體驗',
      hero_eyebrow: '數位佛典 · 智慧之門',
      hero_title_1: '一念花開',
      hero_title_2: '萬法歸心',
      hero_lead: '穿越語言、時代與宗派的邊界，在浩瀚佛典中尋找清明、慈悲與內在秩序。',
      hero_btn_explore: '開始探索',
      hero_btn_learn: '瞭解 xHalo Buddhist',
      scroll_hint: '向下滾動 探索更多',
      scroll_text: 'SCROLL',
      intro_kicker: '一處入口 · 多重經藏',
      intro_title: '讓浩瀚佛典更易檢索、更易閱讀，也更容易彼此連接。',
      intro_lead: '以結構化經文、跨語種版本、全文檢索和語義探索為基礎，構建面向現代閱讀場景的佛典入口。',
      feat_num_1: '01',
      feat_title_1: '多語佛典',
      feat_desc_1: '在統一的作品與章節結構中組織不同語言、譯本和傳承來源。',
      feat_num_2: '02',
      feat_title_2: '智慧檢索',
      feat_desc_2: '結合關鍵詞、章節定位與語義探索，減少在海量文本中的檢索成本。',
      feat_num_3: '03',
      feat_title_3: '清淨閱讀',
      feat_desc_3: '以克制、專注和可訪問的界面呈現經文，保持閱讀過程的連續性。',
      quote_content: '應無所住，而生其心。',
      quote_source: '《金剛般若波羅蜜經》',
      quote_btn: '返回星空',
      footer_text: '數位佛典 · 智慧之門',
      skip_link: '跳到主要內容',
      menu_aria_open: '打開菜單',
      menu_aria_close: '關閉菜單',
      brand_aria: 'xHalo Buddhist 首頁',
      scroll_hint_aria: '向下滾動查看佛典能力',
      menu_mobile_aria: '移動端導航',
      menu_desktop_aria: '主導航',
      meta_description: 'xHalo Buddhist — 多語言佛典、全文檢索與語義探索。獨立河流、佛像與旋轉光環分層呈現。',
      meta_og_description: '穿越語言、時代與宗派的邊界，在浩瀚佛典中尋找清明、慈悲與內在秩序。',
      meta_og_title: 'xHalo Buddhist · 一念花開',
      page_title: 'xHalo Buddhist · 一念花開'
    },
    'ja': {
      nav_sutras: '仏典',
      nav_wisdom: '智慧',
      nav_practice: '修行',
      nav_about: '紹介',
      cta_experience: '体験する',
      hero_eyebrow: 'デジタル仏典 · 智慧の門',
      hero_title_1: '一念花開',
      hero_title_2: '万法帰心',
      hero_lead: '言語、時代、宗派の境界を越え、広大な仏典の中で清明、慈悲、そして内なる秩序を追い求める。',
      hero_btn_explore: '探索を始める',
      hero_btn_learn: 'xHalo Buddhist について',
      scroll_hint: 'スクロールしてさらに探索',
      scroll_text: 'SCROLL',
      intro_kicker: '一つの入り口 · 多重の経蔵',
      intro_title: '広大な仏典をより検索しやすく、読みやすく、そして繋ぎやすく。',
      intro_lead: '構造化された経文、多言語のバージョン、全文検索と意味的探索を基盤に、現代의 読書シーンに向けた仏典への入り口を構築します。',
      feat_num_1: '01',
      feat_title_1: '多言語の仏典',
      feat_desc_1: '統一された作品と章の構造の中に、異なる言語、訳本、伝承の源泉を整理します。',
      feat_num_2: '02',
      feat_title_2: 'スマート検索',
      feat_desc_2: 'キーワード、章の位置特定、意味探索を組み合わせ、膨大なテキストの中での検索コストを削減します。',
      feat_num_3: '03',
      feat_title_3: '清浄な読経',
      feat_desc_3: '控えめで集中できる、アクセシブルなインターフェースで経文を提示し、読書の連続性を保ちます。',
      quote_content: '応無所住、而生其心。',
      quote_source: '『金剛般若波羅蜜経』',
      quote_btn: '星空に戻る',
      footer_text: 'デジタル仏典 · 智慧の門',
      skip_link: 'メインコンテンツにスキップ',
      menu_aria_open: 'メニューを開く',
      menu_aria_close: 'メニューを閉じる',
      brand_aria: 'xHalo Buddhist ホーム',
      scroll_hint_aria: '下スクロールして仏典の機能を探索',
      menu_mobile_aria: 'モバイルナビゲーション',
      menu_desktop_aria: 'メインナビゲーション',
      meta_description: 'xHalo Buddhist — 多言語仏典、全文検索、および意味探索。独立した川、仏像、回転する後光を階層的に表現。',
      meta_og_description: '言語、時代、宗派의 境界を越え、広大な仏典の中で清明、慈悲、そして内なる秩序を追い求める。',
      meta_og_title: 'xHalo Buddhist · 一念花開',
      page_title: 'xHalo Buddhist · 一念花開'
    },
    'ko': {
      nav_sutras: '불전',
      nav_wisdom: '지혜',
      nav_practice: '수행',
      nav_about: '소개',
      cta_experience: '체험하기',
      hero_eyebrow: '디지털 불전 · 지혜의 문',
      hero_title_1: '일념화개',
      hero_title_2: '만법귀심',
      hero_lead: '언어, 시대, 종파의 경계를 넘어 광대한 불전 속에서 청명함과 자비, 그리고 내면의 질서를 찾아서.',
      hero_btn_explore: '탐색 시작',
      hero_btn_learn: 'xHalo Buddhist 소개',
      scroll_hint: '아래로 스크롤하여 더 알아보기',
      scroll_text: 'SCROLL',
      intro_kicker: '하나의 입구 · 다중 경장',
      intro_title: '광대한 불전을 더욱 쉽게 검색하고 읽고 서로 연결되도록.',
      intro_lead: '구조화된 경전, 다국어 버전, 전체 텍스트 검색 및 의미론적 탐색을 기반으로 현대적인 독서 환경에 맞춘 불전 입구를 구축합니다.',
      feat_num_1: '01',
      feat_title_1: '다국어 불전',
      feat_desc_1: '통합된 작품 및 장 구조 내에서 다양한 언어, 번역본, 전승의 출처를 정리합니다.',
      feat_num_2: '02',
      feat_title_2: '지능형 검색',
      feat_desc_2: '키워드, 장 위치 지정 및 의미 탐색을 결합하여 방대한 텍스트에서의 검색 비용을 절감합니다.',
      feat_num_3: '03',
      feat_title_3: '청정한 독경',
      feat_desc_3: '절제되고 집중적이며 접근 가능한 인터페이스로 경전을 제시하여 독서의 연속성을 유지합니다.',
      quote_content: '응무소주 이생기심.',
      quote_source: '《금강반야바라밀경》',
      quote_btn: '별빛 하늘로 돌아가기',
      footer_text: '디지털 불전 · 지혜의 문',
      skip_link: '본문 바로가기',
      menu_aria_open: '메뉴 열기',
      menu_aria_close: '메뉴 닫기',
      brand_aria: 'xHalo Buddhist 홈',
      scroll_hint_aria: '아래로 스크롤하여 불전 기능을 탐색',
      menu_mobile_aria: '모바일 탐색',
      menu_desktop_aria: '메인 탐색',
      meta_description: 'xHalo Buddhist — 다국어 불전, 전체 텍스트 검색 및 의미 탐색. 독립적인 강, 불상, 회전하는 광배의 레이어 레이아웃.',
      meta_og_description: '언어, 시대, 종파의 경계를 넘어 광대한 불전 속에서 청명함과 자비, 그리고 내면의 질서를 찾아서.',
      meta_og_title: 'xHalo Buddhist · 일념화개',
      page_title: 'xHalo Buddhist · 일념화개'
    },
    'en': {
      nav_sutras: 'Sutras',
      nav_wisdom: 'Wisdom',
      nav_practice: 'Practice',
      nav_about: 'About',
      cta_experience: 'Enter Experience',
      hero_eyebrow: 'Digital Sutras · Gateway to Wisdom',
      hero_title_1: 'A Single Thought Blooms',
      hero_title_2: 'All Dharmas Return to Mind',
      hero_lead: 'Transcending the boundaries of language, era, and sect, seeking clarity, compassion, and inner order within the vast Buddhist scriptures.',
      hero_btn_explore: 'Start Exploring',
      hero_btn_learn: 'About xHalo Buddhist',
      scroll_hint: 'Scroll Down to Explore More',
      scroll_text: 'SCROLL',
      intro_kicker: 'One Gateway · Multiple Canons',
      intro_title: 'Making the vast Buddhist scriptures easier to search, read, and connect.',
      intro_lead: 'Building a gateway to scriptures for modern reading, based on structured texts, cross-lingual versions, full-text search, and semantic exploration.',
      feat_num_1: '01',
      feat_title_1: 'Multilingual Canons',
      feat_desc_1: 'Organizing different languages, translations, and lineages within a unified work and chapter structure.',
      feat_num_2: '02',
      feat_title_2: 'Intelligent Search',
      feat_desc_2: 'Combining keywords, chapter positioning, and semantic exploration to reduce search costs in massive texts.',
      feat_num_3: '03',
      feat_title_3: 'Mindful Reading',
      feat_desc_3: 'Presenting scriptures in a restrained, focused, and accessible interface to maintain the continuity of reading.',
      quote_content: 'One should produce a mind that does not dwell on anything.',
      quote_source: 'The Diamond Sutra',
      quote_btn: 'Return to Starry Sky',
      footer_text: 'Digital Sutras · Gateway to Wisdom',
      skip_link: 'Skip to main content',
      menu_aria_open: 'Open menu',
      menu_aria_close: 'Close menu',
      brand_aria: 'xHalo Buddhist Home',
      scroll_hint_aria: 'Scroll down to explore canonical features',
      menu_mobile_aria: 'Mobile Navigation',
      menu_desktop_aria: 'Main Navigation',
      meta_description: 'xHalo Buddhist — Multilingual scriptures, full-text search and semantic exploration. Presented with layered river, Buddha image, and rotating halo.',
      meta_og_description: 'Transcending the boundaries of language, era, and sect, seeking clarity, compassion, and inner order within the vast Buddhist scriptures.',
      meta_og_title: 'xHalo Buddhist · A Single Thought Blooms',
      page_title: 'xHalo Buddhist · A Single Thought Blooms'
    },
    'de': {
      nav_sutras: 'Sutren',
      nav_wisdom: 'Weisheit',
      nav_practice: 'Praxis',
      nav_about: 'Über uns',
      cta_experience: 'Erleben',
      hero_eyebrow: 'Digitale Sutren · Tor zur Weisheit',
      hero_title_1: 'Ein Gedanke blüht auf',
      hero_title_2: 'Alle Dharmas kehren zum Geist zurück',
      hero_lead: 'Überwindung der Grenzen von Sprache, Ära und Sekte, um Klarheit, Mitgefühl und innere Ordnung in den unendlichen buddhistischen Schriften zu finden.',
      hero_btn_explore: 'Erkundung starten',
      hero_btn_learn: 'Über xHalo Buddhist',
      scroll_hint: 'Nach unten scrollen, um mehr zu entdecken',
      scroll_text: 'SCROLLEN',
      intro_kicker: 'Ein Zugang · Mehrere Kanons',
      intro_title: 'Die unendlichen buddhistischen Schriften leichter durchsuchbar, lesbar und verbindbar machen.',
      intro_lead: 'Aufbau eines Tors zu den Schriften für modernes Lesen, basierend auf strukturierten Texten, mehrsprachigen Versionen, Volltextsuche und semantischer Erkundung.',
      feat_num_1: '01',
      feat_title_1: 'Mehrsprachige Kanons',
      feat_desc_1: 'Organisation verschiedener Sprachen, Übersetzungen und Traditionen in einer einheitlichen Werk- und Kapitelstruktur.',
      feat_num_2: '02',
      feat_title_2: 'Intelligente Suche',
      feat_desc_2: 'Kombination von Schlüsselwörtern, Kapitelpositionierung und semantischer Erkundung zur Reduzierung der Suchkosten in riesigen Texten.',
      feat_num_3: '03',
      feat_title_3: 'Achtsames Lesen',
      feat_desc_3: 'Präsentation der Schriften in einer zurückhaltenden, fokussierten und barrierefreien Benutzeroberfläche, um die Kontinuität des Lesens zu wahren.',
      quote_content: 'Man sollte einen Geist entwickeln, der an nichts anhaftet.',
      quote_source: 'Das Diamant-Sutra',
      quote_btn: 'Zurück zum Sternenhimmel',
      footer_text: 'Digitale Sutren · Tor zur Weisheit',
      skip_link: 'Zum Hauptinhalt springen',
      menu_aria_open: 'Menü öffnen',
      menu_aria_close: 'Menü schließen',
      brand_aria: 'xHalo Buddhist Startseite',
      scroll_hint_aria: 'Nach unten scrollen, um Sutra-Funktionen zu erkunden',
      menu_mobile_aria: 'Mobile Navigation',
      menu_desktop_aria: 'Hauptnavigation',
      meta_description: 'xHalo Buddhist — Mehrsprachige buddhistische Schriften, Volltextsuche und semantische Erkundung. Präsentiert mit geschichtetem Fluss, Buddha-Bild und rotierender Aura.',
      meta_og_description: 'Überwindung der Grenzen von Sprache, Ära und Sekte, um Klarheit, Mitgefühl und innere Ordnung in den unendlichen buddhistischen Schriften zu finden.',
      meta_og_title: 'xHalo Buddhist · Ein Gedanke blüht auf',
      page_title: 'xHalo Buddhist · Ein Gedanke blüht auf'
    },
    'es': {
      nav_sutras: 'Sutras',
      nav_wisdom: 'Sabiduría',
      nav_practice: 'Práctica',
      nav_about: 'Acerca de',
      cta_experience: 'Comenzar',
      hero_eyebrow: 'Sutras Digitales · Portal a la Sabiduría',
      hero_title_1: 'Un Pensamiento Florece',
      hero_title_2: 'Todo Retorna a la Mente',
      hero_lead: 'Trascendiendo las fronteras del idioma, la época y la secta, buscando claridad, compasión y orden interno en las vastas escrituras budistas.',
      hero_btn_explore: 'Empezar a Explorar',
      hero_btn_learn: 'Sobre xHalo Buddhist',
      scroll_hint: 'Desplazar hacia abajo para explorar más',
      scroll_text: 'DESPLAZAR',
      intro_kicker: 'Un Portal · Múltiples Cánones',
      intro_title: 'Haciendo las vastas escrituras budistas más fáciles de buscar, leer y conectar entre sí.',
      intro_lead: 'Construyendo un portal a las escrituras para la lectura moderna, basado en textos estructurados, versiones bilingües, búsqueda de texto completo y exploración semántica.',
      feat_num_1: '01',
      feat_title_1: 'Cánones Multilingües',
      feat_desc_1: 'Organización de diferentes idiomas, traducciones y linajes en una estructura unificada de obra y capítulo.',
      feat_num_2: '02',
      feat_title_2: 'Búsqueda Inteligente',
      feat_desc_2: 'Combinación de palabras clave, posicionamiento de capítulos y exploración semántica para reducir los costos de búsqueda en textos masivos.',
      feat_num_3: '03',
      feat_title_3: 'Lectura Consciente',
      feat_desc_3: 'Presentación de escrituras en una interfaz sobria, enfocada y accesible para mantener la continuidad de la lectura.',
      quote_content: 'Uno debe desarrollar una mente que no se aferre a nada.',
      quote_source: 'El Sutra del Diamante',
      quote_btn: 'Volver al Cielo Estrellado',
      footer_text: 'Sutras Digitales · Portal a la Sabiduría',
      skip_link: 'Saltar al contenido principal',
      menu_aria_open: 'Abrir menú',
      menu_aria_close: 'Cerrar menú',
      brand_aria: 'Inicio xHalo Buddhist',
      scroll_hint_aria: 'Deslizar hacia abajo para explorar funciones',
      menu_mobile_aria: 'Navegación Móvil',
      menu_desktop_aria: 'Navegación Principal',
      meta_description: 'xHalo Buddhist — Escrituras budistas multilingües, búsqueda de texto completo y exploración semántica. Presentado con río, imagen de Buda y halo giratorio en capas.',
      meta_og_description: 'Trascendiendo las fronteras del idioma, la época y la secta, buscando claridad, compasión y orden interno en las vastas escrituras budistas.',
      meta_og_title: 'xHalo Buddhist · Un Pensamiento Florece',
      page_title: 'xHalo Buddhist · Un Pensamiento Florece'
    },
    'fr': {
      nav_sutras: 'Sutras',
      nav_wisdom: 'Sagesse',
      nav_practice: 'Pratique',
      nav_about: 'À propos',
      cta_experience: 'Découvrir',
      hero_eyebrow: 'Sutras Numériques · Porte de la Sagesse',
      hero_title_1: 'Une Pensée Fleurit',
      hero_title_2: "Tout Retourne à l'Esprit",
      hero_lead: 'Transcendant les frontières de la langue, de l’époque et de la secte, pour trouver la clarté, la compassion et l’ordre intérieur au sein des vastes écritures bouddhiques.',
      hero_btn_explore: "Commencer l'Exploration",
      hero_btn_learn: 'À propos de xHalo Buddhist',
      scroll_hint: 'Faites défiler pour en savoir plus',
      scroll_text: 'DÉFILER',
      intro_kicker: 'Un Portail · Canons Multiples',
      intro_title: 'Rendre les vastes écritures bouddhiques plus faciles à rechercher, à lire et à connecter.',
      intro_lead: 'Création d’un portail d’écritures pour la lecture moderne, basé sur des textes structurés, des versions multilingues, la recherche en plein texte et l’exploration sémantique.',
      feat_num_1: '01',
      feat_title_1: 'Canons Multilingues',
      feat_desc_1: 'Organisation des différentes langues, traductions et lignées dans une structure unifiée d’œuvres et de chapitres.',
      feat_num_2: '02',
      feat_title_2: 'Recherche Intelligente',
      feat_desc_2: 'Combinaison de mots-clés, de positionnement de chapitres et d’exploration sémantique pour réduire le coût de la recherche dans des textes volumineux.',
      feat_num_3: '03',
      feat_title_3: 'Lecture Attentive',
      feat_desc_3: 'Présentation des écritures dans une interface sobre, concentrée et accessible pour préserver la continuité de la lecture.',
      quote_content: "L'esprit doit s'éveiller sans s'attacher à rien.",
      quote_source: 'Le Sutra du Diamant',
      quote_btn: 'Retour au ciel étoilé',
      footer_text: 'Sutras Numériques · Porte de la Sagesse',
      skip_link: 'Passer au contenu principal',
      menu_aria_open: 'Ouvrir le menu',
      menu_aria_close: 'Fermer le menu',
      brand_aria: 'Accueil xHalo Buddhist',
      scroll_hint_aria: 'Faites défiler vers le bas pour découvrir les fonctionnalités',
      menu_mobile_aria: 'Navigation Mobile',
      menu_desktop_aria: 'Navigation Principale',
      meta_description: 'xHalo Buddhist — Écritures bouddhiques multilingues, recherche en plein texte et exploration sémantique. Présenté avec rivière, image de Bouddha et halo rotatif superposés.',
      meta_og_description: 'Transcendant les frontières de la langue, de l’époque et de la secte, pour trouver la clarté, la compassion et l’ordre intérieur au sein des vastes écritures bouddhiques.',
      meta_og_title: 'xHalo Buddhist · Une Pensée Fleurit',
      page_title: 'xHalo Buddhist · Une Pensée Fleurit'
    },
    'it': {
      nav_sutras: 'Sutra',
      nav_wisdom: 'Saggezza',
      nav_practice: 'Pratica',
      nav_about: 'Info',
      cta_experience: 'Inizia',
      hero_eyebrow: 'Sutra Digitali · Portale della Saggezza',
      hero_title_1: 'Un Pensiero Sboccia',
      hero_title_2: 'Tutto Ritorna alla Mente',
      hero_lead: 'Oltrepassando i confini della lingua, dell’epoca e della setta, alla ricerca di chiarezza, compassione e ordine interiore nelle vaste scrittures buddiste.',
      hero_btn_explore: 'Inizia a Esplorare',
      hero_btn_learn: 'Informazioni su xHalo Buddhist',
      scroll_hint: 'Scorri verso il basso per esplorare',
      scroll_text: 'SCORRI',
      intro_kicker: 'Un Portale · Molteplici Canoni',
      intro_title: 'Rendere le vaste scrittures buddiste più facili da cercare, leggere e connettere tra loro.',
      intro_lead: 'Costruzione di un portale per le scritture per la lettura moderna, basato su testi strutturati, versioni multilingue, ricerca full-text ed esplorazione semantica.',
      feat_num_1: '01',
      feat_title_1: 'Canoni Multilingue',
      feat_desc_1: 'Organizzazione di diverse lingue, traduzioni e lignaggi all’interno di una struttura unificata di opere e capitoli.',
      feat_num_2: '02',
      feat_title_2: 'Ricerca Intelligente',
      feat_desc_2: 'Combinazione di parole chiave, posizionamento dei capitoli ed esplorazione semantica per ridurre i costi di ricerca in testi enormi.',
      feat_num_3: '03',
      feat_title_3: 'Lettura Consapevole',
      feat_desc_3: 'Presentazione delle scritture in un’interfaccia sobria, concentrata e accessibile per mantenere la continuità della lettura.',
      quote_content: 'Si dovrebbe sviluppare una mente che non si aggrappi a nulla.',
      quote_source: 'Il Sutra del Diamante',
      quote_btn: 'Torna al cielo stellato',
      footer_text: 'Sutra Digitali · Portale della Saggezza',
      skip_link: 'Passa al contenuto principal',
      menu_aria_open: 'Apri menu',
      menu_aria_close: 'Chiudi menu',
      brand_aria: 'Home xHalo Buddhist',
      scroll_hint_aria: 'Scorri verso il basso per esplorare le funzioni dei sutra',
      menu_mobile_aria: 'Navigazione Mobile',
      menu_desktop_aria: 'Navigazione Principale',
      meta_description: 'xHalo Buddhist — Scritture buddiste multilingue, ricerca full-text ed esplorazione semantica. Presentato con fiume, immagine di Buddha e aureola rotante a strati.',
      meta_og_description: 'Oltrepassando i confini della lingua, dell’epoca e della setta, alla ricerca di chiarezza, compassione e ordine interiore nelle vaste scrittures buddiste.',
      meta_og_title: 'xHalo Buddhist · Un Pensiero Sboccia',
      page_title: 'xHalo Buddhist · Un Pensiero Sboccia'
    },
    'pt': {
      nav_sutras: 'Sutras',
      nav_wisdom: 'Sabedoria',
      nav_practice: 'Prática',
      nav_about: 'Sobre',
      cta_experience: 'Começar',
      hero_eyebrow: 'Sutras Digitais · Portal da Sabedoria',
      hero_title_1: 'Um Pensamento Floresce',
      hero_title_2: 'Tudo Retorna à Mente',
      hero_lead: 'Transcendendo as fronteiras do idioma, da época e da seita, buscando clareza, compaixão e ordem interna nas vastas escrituras budistas.',
      hero_btn_explore: 'Começar a Explorar',
      hero_btn_learn: 'Sobre o xHalo Buddhist',
      scroll_hint: 'Desça para explorar mais',
      scroll_text: 'DESCER',
      intro_kicker: 'Um Portal · Múltiplos Cânones',
      intro_title: 'Tornando as vastas escrituras budistas mais fáceis de pesquisar, ler e conectar entre si.',
      intro_lead: 'Construindo um portal de escrituras para a leitura moderna, baseado em textos estruturados, versões multilíngues, busca de texto completo e exploração semântica.',
      feat_num_1: '01',
      feat_title_1: 'Cânones Multilíngues',
      feat_desc_1: 'Organização de diferentes idiomas, traduções e linhagens em uma estrutura unificada de obras e capítulos.',
      feat_num_2: '02',
      feat_title_2: 'Busca Inteligente',
      feat_desc_2: 'Combinação de palavras-chave, posicionamento de capítulos e exploração semântica para reduzir os custos de pesquisa em textos massivos.',
      feat_num_3: '03',
      feat_title_3: 'Leitura Consciente',
      feat_desc_3: 'Apresentação das escrituras em uma interface sóbria, focada e acessível para manter a continuidade da leitura.',
      quote_content: 'Deve-se desenvolver uma mente que não se apega a nada.',
      quote_source: 'O Sutra do Diamante',
      quote_btn: 'Voltar ao Céu Estrelado',
      footer_text: 'Sutras Digitais · Portal da Sabedoria',
      skip_link: 'Ir para o conteúdo principal',
      menu_aria_open: 'Abrir menu',
      menu_aria_close: 'Fechar menu',
      brand_aria: 'Início do xHalo Buddhist',
      scroll_hint_aria: 'Role para baixo para ver recursos',
      menu_mobile_aria: 'Navegação Móvel',
      menu_desktop_aria: 'Navegação Principal',
      meta_description: 'xHalo Buddhist — Escrituras budistas multilíngues, busca de texto completo e exploração semântica. Apresentado com rio, imagem do Buda e halo giratório em camadas.',
      meta_og_description: 'Transcendendo as fronteiras do idioma, da época e da seita, buscando clareza, compaixão e ordem interna nas vastas escrituras budistas.',
      meta_og_title: 'xHalo Buddhist · Um Pensamento Floresce',
      page_title: 'xHalo Buddhist · Um Pensamento Floresce'
    },
    'th': {
      nav_sutras: 'พระไตรปิฎก',
      nav_wisdom: 'ปัญญา',
      nav_practice: 'การปฏิบัติ',
      nav_about: 'เกี่ยวกับ',
      cta_experience: 'เข้าสู่ประสบการณ์',
      hero_eyebrow: 'พระคัมภีร์ดิจิทัล · ประตูสู่ปัญญา',
      hero_title_1: 'เพียงหนึ่งจิตผลิบาน',
      hero_title_2: 'สรรพธรรมคืนสู่ใจ',
      hero_lead: 'ก้าวข้ามขอบเขตของภาษา ยุคสมัย และนิกาย ค้นหาความสงบ ความเมตตา และระเบียบภายในในพระคัมภีร์พุทธศาสนาอันกว้างขวาง',
      hero_btn_explore: 'เริ่มการค้นหา',
      hero_btn_learn: 'รู้จักกับ xHalo Buddhist',
      scroll_hint: 'เลื่อนลงเพื่อสำรวจเพิ่มเติม',
      scroll_text: 'SCROLL',
      intro_kicker: 'หนึ่งทางเข้า · คัมภีร์ที่หลากหลาย',
      intro_title: 'ทำให้การค้นหา การอ่าน และการเชื่อมโยงพระคัมภีร์พุทธศาสนาอันกว้างขวางง่ายดายยิ่งขึ้น',
      intro_lead: 'สร้างทางเข้าพระไตรปิฎกสำหรับการอ่านยุคใหม่ โดยใช้โครงสร้างข้อความ คัมภีร์หลายภาษา ระบบการค้นหาข้อความเต็มรูปแบบ และการสำรวจทางอรรถศาสตร์',
      feat_num_1: '01',
      feat_title_1: 'พระคัมภีร์หลายภาษา',
      feat_desc_1: 'จัดระบบภาษา แปลคัมภีร์ และแหล่งที่มาของนิกายต่างๆ ภายใต้โครงสร้างบทและผลงานที่เป็นหนึ่งเดียว',
      feat_num_2: '02',
      feat_title_2: 'การค้นหาอัจฉริยะ',
      feat_desc_2: 'การรวมคำสำคัญ ตำแหน่งบท และการสำรวจทางอรรถศาสตร์เพื่อลดต้นทุนการค้นหาในคัมภีร์ที่มีปริมาณมาก',
      feat_num_3: '03',
      feat_title_3: 'การอ่านที่สงบเงียบ',
      feat_desc_3: 'นำเสนอพระคัมภีร์ด้วยอินเทอร์เฟซที่เรียบง่าย มีสมาธิ และเข้าถึงง่าย เพื่อรักษาความต่อเนื่องของการอ่าน',
      quote_content: 'พึงไม่ยึดมั่นในสิ่งใด เพื่อให้จิตผลิบาน',
      quote_source: 'วัชรปรัชญาปารมิตาสูตร',
      quote_btn: 'กลับสู่ท้องฟ้าจำลอง',
      footer_text: 'พระคัมภีร์ดิจิทัล · ประตูสู่ปัญญา',
      skip_link: 'ข้ามไปยังเนื้อหาหลัก',
      menu_aria_open: 'เปิดเมนู',
      menu_aria_close: 'ปิดเมนู',
      brand_aria: 'หน้าแรก xHalo Buddhist',
      scroll_hint_aria: 'เลื่อนลงด้านล่างเพื่อตรวจสอบคุณสมบัติของพระไตรปิฎก',
      menu_mobile_aria: 'เมนูนำทางมือถือ',
      menu_desktop_aria: 'เมนูนำทางหลัก',
      meta_description: 'xHalo Buddhist — พระไตรปิฎกหลายภาษา ค้นหาข้อความเต็มรูปแบบ และสำรวจทางอรรถศาสตร์ แสดงด้วยการแบ่งชั้นของแม่น้ำ พระพุทธรูป และรัศมีหมุน',
      meta_og_description: 'ก้าวข้ามขอบเขตของภาษา ยุคสมัย และนิกาย ค้นหาความสงบ ความเมตตา และระเบียบภายในในพระคัมภีร์พุทธศาสนาอันกว้างขวาง',
      meta_og_title: 'xHalo Buddhist · เพียงหนึ่งจิตผลิบาน',
      page_title: 'xHalo Buddhist · เพียงหนึ่งจิตผลิบาน'
    },
    'my': {
      nav_sutras: 'ပိဋကတ်တော်',
      nav_wisdom: 'ပညာ',
      nav_practice: 'ကျင့်ကြံမှု',
      nav_about: 'အကြောင်း',
      cta_experience: 'အတွေ့အကြုံယူရန်',
      hero_eyebrow: 'ဒီဂျစ်တယ်ပိဋကတ်တော် · ပညာ၏တံခါး',
      hero_title_1: 'စိတ်တစ်ချက်ဖြင့် ပွင့်လန်းခြင်း',
      hero_title_2: 'တရားအားလုံး စိတ်သို့ပြန်ရောက်ခြင်း',
      hero_lead: 'ဘာသာစကား၊ ခေတ်နှင့် ဂိုဏ်းခွဲများ၏ အကန့်အသတ်များကို ကျော်ဖြတ်ကာ ကျယ်ပြောလှသော ပိဋကတ်တော်များထဲတွင် ကြည်လင်မှု၊ ကရုဏာနှင့် အတွင်းပိုင်းငြိမ်းချမ်းမှုကို ရှာဖွေပါ။',
      hero_btn_explore: 'စတင်ရှာဖွေရန်',
      hero_btn_learn: 'xHalo Buddhist အကြောင်းလေ့လာရန်',
      scroll_hint: 'နောက်ထပ်လေ့လာရန် အောက်သို့ဆွဲချပါ',
      scroll_text: 'SCROLL',
      intro_kicker: 'တံခါးပေါက်တစ်ခု · ပိဋကတ်တော်များစွာ',
      intro_title: 'ကျယ်ပြောလှသော ပိဋကတ်တော်များကို ပိုမိုလွယ်ကူစွာ ရှာဖွေဖတ်ရှုနိုင်ပြီး အပြန်အလှန်ဆက်သွယ်နိုင်စေရန်။',
      intro_lead: 'တည်ဆောက်ပုံကျသော ကျမ်းစာများ၊ ဘာသာစကားမျိုးစုံဗားရှင်းများ၊ စာသားအပြည့်အစုံရှာဖွေမှုနှင့် အနက်ဖွင့်ရှာဖွေမှုတို့ကို အခြေခံ၍ ခေတ်သစ်စာဖတ်သူများအတွက် ပိဋကတ်တော်တံခါးပေါက်ကို တည်ဆောက်ခြင်း။',
      feat_num_1: '၀၁',
      feat_title_1: 'ဘာသာစကားစုံပိဋကတ်တော်များ',
      feat_desc_1: 'မတူညီသော ဘာသာစကားများ၊ ဘာသာပြန်များနှင့် အစဉ်အလာအရင်းအမြစ်များကို စုစည်းထားသော ကျမ်းစာနှင့် အခန်းကဏ္ဍပုံစံတစ်ခုတည်းတွင် စနစ်တကျစုစည်းထားခြင်း။',
      feat_num_2: '၀၂',
      feat_title_2: 'စမတ်ကျသောရှာဖွေမှု',
      feat_desc_2: 'ကျယ်ပြောလှသော စာသားများထဲတွင် ရှာဖွေမှုကုန်ကျစရိတ်ကို ลျှော့ချရန် သော့ချက်စာလုံးများ၊ အခန်းကဏ္ဍနေရာသတ်မှတ်မှုများနှင့် အနက်ဖွင့်ရှာဖွေမှုတို့ကို ပေါင်းစပ်ထားခြင်း။',
      feat_num_3: '၀၃',
      feat_title_3: 'အေးချမ်းစွာဖတ်ရှုခြင်း',
      feat_desc_3: 'စာဖတ်ခြင်း၏ စဉ်ဆက်မပြတ်မှုကို ထိန်းသိမ်းရန် ရိုးရှင်း၍ အာရုံစိုက်မှုရှိပြီး ဝင်ရောက်ရလွယ်ကူသော မျက်နှาပြင်ဖြင့် ကျမ်းစာများကို တင်ပြထားခြင်း။',
      quote_content: 'ဘယ်အရာအပေါ်မှာမှ တွယ်တာခြင်းမရှိဘဲ စိတ်ကို ပွင့်လန်းစေရမည်။',
      quote_source: '《ဝဇီရသုတ်တော်》',
      quote_btn: 'ကြယ်စင်ကောင်းကင်သို့ ပြန်သွားရန်',
      footer_text: 'ဒီဂျစ်တယ်ပိဋကတ်တော် · ပညာ၏တံခါး',
      skip_link: 'အဓိကအကြောင်းအရာသို့ သွားရန်',
      menu_aria_open: 'မီနူးဖွင့်ရန်',
      menu_aria_close: 'မီနူးပိတ်ရန်',
      brand_aria: 'xHalo Buddhist ပင်မစာမျက်နှา',
      scroll_hint_aria: 'ပိဋကတ်စွမ်းရည်များကိုလေ့လာရန် အောက်သို့ဆွဲချပါ',
      menu_mobile_aria: 'မိုဘိုင်းလမ်းညွှန်မှု',
      menu_desktop_aria: 'ပင်မလမ်းညွှန်မှု',
      meta_description: 'xHalo Buddhist — ဘာသာစကားမျိုးစုံ ပိဋကတ်တော်၊ စာသားအပြည့်အစုံရှာဖွေမှုနှင့် အဓိပ္ပာယ်ရှာဖွေမှု။ မြစ်၊ ဗုဒ္ဓရုပ်ပွားတော်နှင့် လည်ပတ်နေသော ရောင်ခြည်တော်တို့ကို အလွှာလိုက်တင်ပြထားခြင်း။',
      meta_og_description: 'ဘာသာစကား၊ ခေတ်နှင့် ဂိုဏ်းခွဲများ၏ အကန့်အသတ်များကို ကျော်ဖြတ်ကာ ကျယ်ပြောလှသော ပိဋကတ်တော်များထဲတွင် ကြည်လင်မှု၊ ကရုဏာและ အတွင်းပိုင်းငြိမ်းချမ်းမှုကို ရှာဖွေပါ။',
      meta_og_title: 'xHalo Buddhist · စိတ်တစ်ချက်ဖြင့် ပွင့်လန်းခြင်း',
      page_title: 'xHalo Buddhist · စိတ်တစ်ချက်ဖြင့် ပွင့်လန်းခြင်း'
    },
    'vi': {
      nav_sutras: 'Kinh điển',
      nav_wisdom: 'Trí tuệ',
      nav_practice: 'Tu tập',
      nav_about: 'Giới thiệu',
      cta_experience: 'Trải nghiệm',
      hero_eyebrow: 'Kinh điển số · Cửa ngõ trí tuệ',
      hero_title_1: 'Nhất Niệm Hoa Khai',
      hero_title_2: 'Vạn Pháp Quy Tâm',
      hero_lead: 'Vượt qua ranh giới ngôn ngữ, thời đại và tông phái, tìm kiếm sự sáng suốt, từ bi và trật tự nội tại trong kho tàng kinh điển Phật giáo bao la.',
      hero_btn_explore: 'Bắt đầu khám phá',
      hero_btn_learn: 'Tìm hiểu xHalo Buddhist',
      scroll_hint: 'Cuộn xuống để khám phá thêm',
      scroll_text: 'CUỘN XUỐNG',
      intro_kicker: 'Một lối vào · Đa dạng kinh tạng',
      intro_title: 'Giúp kho tàng kinh điển Phật giáo dễ tra cứu, dễ đọc và dễ kết nối với nhau hơn.',
      intro_lead: 'Xây dựng lối vào kinh điển cho trải nghiệm đọc hiện đại, dựa trên văn bản cấu trúc, phiên bản đa ngôn ngữ, tìm kiếm toàn văn và khám phá ngữ nghĩa.',
      feat_num_1: '01',
      feat_title_1: 'Kinh điển đa ngôn ngữ',
      feat_desc_1: 'Tổ chức các ngôn ngữ, bản dịch và nguồn gốc truyền thừa khác nhau trong một cấu trúc tác phẩm và chương thống nhất.',
      feat_num_2: '02',
      feat_title_2: 'Tìm kiếm thông minh',
      feat_desc_2: 'Kết hợp từ khóa, định vị chương và khám phá ngữ nghĩa để giảm chi phí tìm kiếm trong các văn bản khổng lồ.',
      feat_num_3: '03',
      feat_title_3: 'Đọc trong thanh tịnh',
      feat_desc_3: 'Trình bày kinh văn bằng giao diện tinh tế, tập trung và dễ tiếp cận để duy trì sự liên tục của quá trình đọc.',
      quote_content: 'Ưng vô sở trụ nhi sanh kỳ tâm.',
      quote_source: 'Kinh Kim Cang Bát Nhã Ba La Mật',
      quote_btn: 'Trở lại bầu trời sao',
      footer_text: 'Kinh điển số · Cửa ngõ trí tuệ',
      skip_link: 'Chuyển đến nội dung chính',
      menu_aria_open: 'Mở thực đơn',
      menu_aria_close: 'Đóng thực đơn',
      brand_aria: 'Trang chủ xHalo Buddhist',
      scroll_hint_aria: 'Cuộn xuống dưới để khám phá tính năng kinh điển',
      menu_mobile_aria: 'Thực đơn di động',
      menu_desktop_aria: 'Thực đơn chính',
      meta_description: 'xHalo Buddhist — Kinh điển đa ngôn ngữ, tìm kiếm toàn văn và khám phá ngữ nghĩa. Trình bày dạng phân lớp với dòng sông, tượng Phật và hào quang xoay.',
      meta_og_description: 'Vượt qua ranh giới ngôn ngữ, thời đại và tông phái, tìm kiếm sự sáng suốt, từ bi và trật tự nội tại trong kho tàng kinh điển Phật giáo bao la.',
      meta_og_title: 'xHalo Buddhist · Nhất Niệm Hoa Khai',
      page_title: 'xHalo Buddhist · Nhất Niệm Hoa Khai'
    },
    'km': {
      nav_sutras: 'ព្រះត្រៃបិដក',
      nav_wisdom: 'បញ្ញា',
      nav_practice: 'ការអនុវត្ត',
      nav_about: 'អំពី',
      cta_experience: 'ចូលទៅកាន់បទពិសោធន៍',
      hero_eyebrow: 'គម្ពីរឌីជីថល · ច្រកទ្វារទៅកាន់បញ្ញា',
      hero_title_1: 'គំនិតមួយរីកស្គុះស្គាយ',
      hero_title_2: 'ធម៌ទាំងឡាយវិលទៅរកចិត្ត',
      hero_lead: 'ឆ្លងកាត់ព្រំដែននៃភាសា យុគសម័យ និងនិកាយ ស្វែងរកភាពကြည်លះ សេចក្តីមេត្តាករុណា និងសណ្តាប់ធ្នាប់ខាងក្នុងនៅក្នុងគម្ពីរព្រះពុទ្ធសាសនាដ៏ធំធេង។',
      hero_btn_explore: 'ចាប់ផ្តើមស្វែងរក',
      hero_btn_learn: 'ស្វែងយល់អំពី xHalo Buddhist',
      scroll_hint: 'អូសចុះក្រោមដើម្បីស្វែងរកបន្ថែមទៀត',
      scroll_text: 'SCROLL',
      intro_kicker: 'ច្រកចូលតែមួយ · ព្រះត្រៃបិដកច្រើនភាសា',
      intro_title: 'ធ្វើឱ្យគម្ពីរព្រះពុទ្ធសាសនាដ៏ធំធេងកាន់តែងាយស្រួលស្វែងរក អាន និងភ្ជាប់ទំនាក់ទំនងគ្នាទៅវិញទៅមក។',
      intro_lead: 'បង្កើតច្រកចូលព្រះត្រៃបិដកសម្រាប់បរិបទអានសម័យថ្មី ផ្អែកលើរចនាសម្ព័ន្ធអត្ថបទ កំណែគម្ពីរច្រើនភាសា ការស្វែងរកអត្ថបទពេញលេញ និងការស្វែងយល់អត្ថន័យ។',
      feat_num_1: '០១',
      feat_title_1: 'ព្រះត្រៃបិដកច្រើនភាសា',
      feat_desc_1: 'រៀបចំភាសា ការបកប្រែ និងប្រភពនិកាយផ្សេងៗគ្នាក្នុងរចនាសម្ព័ន្ធស្នាដៃ និងជំពូកតែមួយ។',
      feat_num_2: '០២',
      feat_title_2: 'ការស្វែងរកវៃឆ្លាត',
      feat_desc_2: 'រួមបញ្ចូលពាក្យគន្លឹះ ទីតាំងជំពូក និងការស្វែងយល់អត្ថន័យ ដើម្បីកាត់បន្ថយការចំណាយក្នុងការស្វែងរកក្នុងអត្ថបទដ៏ច្រើនសន្ធឹកសន្ធាប់។',
      feat_num_3: '០៣',
      feat_title_3: 'ការអានដោយស្ងប់ចិត្ត',
      feat_desc_3: 'បង្ហាញគម្ពីរដោយប្រើចំណុចប្រទាក់សាមញ្ញ ផ្ដោតអារម្មណ៍ និងងាយស្រួលចូលប្រើ ដើម្បីរក្សាភាពបន្តនៃការអាន。',
      quote_content: 'គប្បីមិនតោងទាមនឹងអ្វីទាំងអស់ ដើម្បីឱ្យចិត្តរីកស្គុះស្គាយ។',
      quote_source: 'គម្ពីរវជ្រច្ឆេទិកាប្រាជ្ញាបារមីតាសូត្រ',
      quote_btn: 'ត្រឡប់ទៅផ្ទៃមេឃផ្កាយវិញ',
      footer_text: 'គម្ពីរឌីជីថល · ច្រកទ្វារទៅកាន់បញ្ញា',
      skip_link: 'រំលងទៅមាតិកាចម្បង',
      menu_aria_open: 'បើកម៉ឺនុយ',
      menu_aria_close: 'បិទម៉ឺនុយ',
      brand_aria: 'ទំព័រដើម xHalo Buddhist',
      scroll_hint_aria: 'រមូរចុះក្រោមដើម្បីរុករកសមត្ថភាពព្រះត្រៃបិដក',
      menu_mobile_aria: 'បញ្ជីរុករកចល័ត',
      menu_desktop_aria: 'បញ្ជីរុករកចម្បង',
      meta_description: 'xHalo Buddhist — ព្រះត្រៃបិដកច្រើនភាសា ការស្វែងរកអត្ថបទពេញលេញ និងការស្វែងយល់អត្ថន័យ បង្ហាញជាស្រទាប់នៃទន្លេ រូបព្រះពុទ្ធ និងរស្មីវិលជុំវិញ។',
      meta_og_description: 'ឆ្លងកាត់ព្រំដែននៃភាសា យុគសម័យ និងនិកាយ ស្វែងរកភាពကြည်លះ សេចក្តីមេត្តាករុណា និងសណ្តាប់ធ្នាប់ខាងក្នុងនៅក្នុងគម្ពីរព្រះពុទ្ធសាសនាដ៏ធំធេង។',
      meta_og_title: 'xHalo Buddhist · គំនិតមួយរីកស្គុះស្គាយ',
      page_title: 'xHalo Buddhist · គំនិតមួយរីកស្គុះស្គាយ'
    },
    'lo': {
      nav_sutras: 'ພະໄຕປິໂດກ',
      nav_wisdom: 'ປັນຍາ',
      nav_practice: 'ການປະຕິບັດ',
      nav_about: 'ກ່ຽວກັບ',
      cta_experience: 'ເຂົ້າສູ່ປະສົບການ',
      hero_eyebrow: 'ພະຄຳພີດິຈິຕອນ · ປະຕູສູ່ປັນຍາ',
      hero_title_1: 'ພຽງຫນຶ່ງຈິດເບີກບານ',
      hero_title_2: 'ສັບພະທຳຄືນສູ່ໃຈ',
      hero_lead: 'ກ້າວຂ້າມຂອບເຂດຂອງພາສາ ຍຸກສະໄຫມ ແລະນິກາຍ ຄົ້ນຫາຄວາມສະຫງົບ ຄວາມເມດຕາ ແລະລະບຽບພາຍໃນໃນພະຄຳພີພຸດທະສາສະໜາອັນກວ້າງໃຫຍ່',
      hero_btn_explore: 'ເລີ່ມການຄົ້ນຫາ',
      hero_btn_learn: 'ຮູ້ຈັກກັບ xHalo Buddhist',
      scroll_hint: 'ເລື່ອນລົງເພື່ອສຳຫຼວດເພີ່ມເຕີມ',
      scroll_text: 'SCROLL',
      intro_kicker: 'ຫນຶ່ງທາງເຂົ້າ · ຄຳພີທີ່ຫຼາກຫຼາຍ',
      intro_title: 'ເຮັດໃຫ້ການຄົ້ນຫາ ການອ່ານ ແລະການເຊື່ອມໂຍງພະຄຳພີພຸດທະສາສະໜາອັນກວ້າງໃຫຍ່ງ່າຍດາຍຍິ່ງຂຶ້ນ',
      intro_lead: 'ສ້າງທາງເຂົ້າພະໄຕປິໂດກສຳລັບການອ່ານຍຸກໃຫມ່ ໂດຍໃຊ້ໂຄງສ້າງຂໍ້ຄວາມ ຄຳພີຫຼາຍພາສາ ລະບົບຄົ້ນຫາຂໍ້ຄວາມເຕັມຮູບແບບ ແລະການສຳຫຼວດທາງອັດຖະສາດ',
      feat_num_1: '01',
      feat_title_1: 'ພະຄຳພີຫຼາຍພາສາ',
      feat_desc_1: 'ຈັດລະບົບພາສາ ການແປ ແລະແຫຼ່ງທີ່ມາຂອງນິກາຍຕ່າງໆ ພາຍໃຕ້ໂຄງສ້າງບົດ ແລະຜົນງານທີ່ເປັນເອກະພາບ',
      feat_num_2: '02',
      feat_title_2: 'ການຄົ້ນຫາອັດສະລິຍະ',
      feat_desc_2: 'ການລວມຄຳສຳຄັນ ຕຳແຫນ່ງບົດ ແລະການສຳຫຼວດທາງອັດຖะສາດເພື່ອຫຼຸດຜ່ອນຕົ້ນທຶນການຄົ້ນຫາໃນຄຳພີທີ່ມີປະລິມານຫຼາຍ',
      feat_num_3: '03',
      feat_title_3: 'Down-to-earth Reading',
      feat_title_3: 'ການອ່ານທີ່ສະຫງົບງຽບ',
      feat_desc_3: 'ນຳສະເຫນີພະຄຳພີດ້ວຍອິນເຕີເຟດທີ່ຮຽບງ່າຍ ມີສະມາທິ ແລະເຂົ້າເຖິງງ່າຍ ເພື່ອຮັກສາຄວາມຕໍ່ເນື່ອງຂອງການອ່ານ',
      quote_content: 'ພຶງບໍ່ຍຶດຫມັ້ນໃນສິ່ງໃດ ເພື່ອໃຫ້ຈິດເບີກບານ',
      quote_source: 'ວັດຊະຣະປຣັດຍາປາຣະມິຕາສູດ',
      quote_btn: 'ກັບຄືນສູ່ທ້ອງຟ້າດາວ',
      footer_text: 'ພະຄຳພີດິຈિຕອນ · ປະຕູສູ່ປັນຍາ',
      skip_link: 'ຂ້າມໄປຫາເນື້ອຫາຫຼັກ',
      menu_aria_open: 'ເປີດເມນູ',
      menu_aria_close: 'ປິດເມນູ',
      brand_aria: 'ຫນ້າທຳອິດ xHalo Buddhist',
      scroll_hint_aria: 'ເລື່ອນລົງລຸ່ມເພື່ອສຳຫຼວດຄວາມສາມາດຂອງພະໄຕປິໂດກ',
      menu_mobile_aria: 'ເມນູການນຳທາງມືຖື',
      menu_desktop_aria: 'ເມນູການນຳທາງຫຼັກ',
      meta_description: 'xHalo Buddhist — ພະໄຕປິໂດກຫຼາຍພາສາ ຄົ້ນຫາຂໍ້ຄວາມເຕັມຮູບແບບ ແລະສຳຫຼວດທາງອັດຖະສາດ ສະແດງດ້ວຍການແບ່ງຊັ້ນຂອງແມ່ນ້ຳ ພະພຸດທະຮູບ ແລະລັດສະຫມີຫມູນ',
      meta_og_description: 'ກ້າວຂ້າມຂອບເຂດຂອງພາສາ ຍຸກສະໄຫມ ແລະນິກາຍ ຄົ້ນຫາຄວາມສະຫງົບ ຄວາມເມດຕາ ແລະລະບຽບພາຍໃນໃນພະຄຳພີພຸດທະສາສະໜາອັນກວ້າງໃຫຍ່',
      meta_og_title: 'xHalo Buddhist · ພຽງຫນຶ່ງຈິດເບີກບาน',
      page_title: 'xHalo Buddhist · ພຽງຫນຶ່ງຈິດເບີກບານ'
    },
    'id': {
      nav_sutras: 'Sutra',
      nav_wisdom: 'Kebijaksanaan',
      nav_practice: 'Praktik',
      nav_about: 'Tentang',
      cta_experience: 'Mulai Pengalaman',
      hero_eyebrow: 'Sutra Digital · Gerbang Kebijaksanaan',
      hero_title_1: 'Satu Pikiran Mekar',
      hero_title_2: 'Semua Dharma Kembali ke Pikiran',
      hero_lead: 'Melampaui batas bahasa, era, dan sekte, mencari kejelasan, welas asih, dan ketertiban batin dalam kitab suci Buddha yang luas.',
      hero_btn_explore: 'Mulai Menjelajah',
      hero_btn_learn: 'Tentang xHalo Buddhist',
      scroll_hint: 'Gulir ke bawah untuk menjelajahi lebih lanjut',
      scroll_text: 'GULIR',
      intro_kicker: 'Satu Gerbang · Berbagai Kanon',
      intro_title: 'Membuat kitab suci Buddha yang luas lebih mudah dicari, dibaca, dan dihubungkan satu sama lain.',
      intro_lead: 'Membangun gerbang kitab suci untuk kenyamanan membaca modern, berdasarkan teks terstruktur, versi multibahasa, pencarian teks lengkap, dan eksplorasi semantik.',
      feat_num_1: '01',
      feat_title_1: 'Kanon Multibahasa',
      feat_desc_1: 'Mengatur berbagai bahasa, terjemahan, dan silsilah tradisi dalam satu struktur karya dan bab yang terpadu.',
      feat_num_2: '02',
      feat_title_2: 'Pencarian Cerdas',
      feat_desc_2: 'Menggabungkan kata kunci, pemosisian bab, dan eksplorasi semantik untuk mengurangi biaya pencarian dalam teks yang sangat besar.',
      feat_num_3: '03',
      feat_title_3: 'Membaca dengan Hening',
      feat_desc_3: 'Menyajikan teks kitab suci dengan antarmuka yang bersahaja, fokus, dan mudah diakses untuk menjaga kesinambungan membaca.',
      quote_content: 'Hendaklah pikiran tidak melekat pada apa pun, agar pikiran itu mekar.',
      quote_source: 'Sutra Intan',
      quote_btn: 'Kembali ke Langit Berbintang',
      footer_text: 'Sutra Digital · Gerbang Kebijaksanaan',
      skip_link: 'Lompati ke konten utama',
      menu_aria_open: 'Buka menu',
      menu_aria_close: 'Tutup menu',
      brand_aria: 'Beranda xHalo Buddhist',
      scroll_hint_aria: 'Gulir ke bawah untuk menjelajahi fitur-fitur sutra',
      menu_mobile_aria: 'Navigasi Seluler',
      menu_desktop_aria: 'Navigasi Utama',
      meta_description: 'xHalo Buddhist — Kitab suci Buddha multibahasa, pencarian teks lengkap dan eksplorasi semantik. Disajikan dengan lapisan sungai, citra Buddha, dan halo yang berputar.',
      meta_og_description: 'Melampaui batas bahasa, era, dan sekte, mencari kejelasan, welas asih, dan ketertiban batin dalam kitab suci Buddha yang luas.',
      meta_og_title: 'xHalo Buddhist · Satu Pikiran Mekar',
      page_title: 'xHalo Buddhist · Satu Pikiran Mekar'
    },
    'ms': {
      nav_sutras: 'Sutra',
      nav_wisdom: 'Kebijaksanaan',
      nav_practice: 'Amalan',
      nav_about: 'Perihal',
      cta_experience: 'Mulakan Pengalaman',
      hero_eyebrow: 'Sutra Digital · Gerbang Kebijaksanaan',
      hero_title_1: 'Satu Fikiran Mekar',
      hero_title_2: 'Semua Dharma Kembali ke Minda',
      hero_lead: 'Melampaui sempadan bahasa, era, dan mazhab, mencari kejelasan, belas kasihan, dan ketertiban batin dalam kitab suci Buddha yang luas.',
      hero_btn_explore: 'Mula Meneroka',
      hero_btn_learn: 'Perihal xHalo Buddhist',
      scroll_hint: 'Skrol ke bawah untuk meneroka lebih lanjut',
      scroll_text: 'SKROL',
      intro_kicker: 'Satu Gerbang · Pelbagai Kanon',
      intro_title: 'Menjadikan kitab suci Buddha yang luas lebih mudah dicari, dibaca, dan dihubungkan satu sama lain.',
      intro_lead: 'Membina gerbang kitab suci untuk pembacaan moden, berdasarkan teks berstruktur, versi pelbagai bahasa, carian teks lengkap, dan penerokaan semantik.',
      feat_num_1: '01',
      feat_title_1: 'Kanon Pelbagai Bahasa',
      feat_desc_1: 'Mengatur bahasa, terjemahan, dan salasilah tradisi yang berbeza dalam struktur karya dan bab yang bersatu.',
      feat_num_2: '02',
      feat_title_2: 'Carian Pintar',
      feat_desc_2: 'Menggabungkan kata kunci, kedudukan bab, dan penerokaan semantik to mengurangkan kos carian dalam teks yang sangat besar.',
      feat_num_3: '03',
      feat_title_3: 'Pembacaan Minda',
      feat_desc_3: 'Menyajikan teks kitab suci dengan antara muka yang sederhana, fokus, dan mudah diakses untuk mengekalkan kesinambungan pembacaan.',
      quote_content: 'Hendaklah minda tidak menetap pada apa-apa pun, agar minda itu mekar.',
      quote_source: 'Sutra Intan',
      quote_btn: 'Kembali ke Langit Berbintang',
      footer_text: 'Sutra Digital · Gerbang Kebijaksanaan',
      skip_link: 'Langkau ke kandungan utama',
      menu_aria_open: 'Buka menu',
      menu_aria_close: 'Tutup menu',
      brand_aria: 'Laman Utama xHalo Buddhist',
      scroll_hint_aria: 'Skrol ke bawah untuk meneroka ciri-ciri sutra',
      menu_mobile_aria: 'Navigasi Mudah Alih',
      menu_desktop_aria: 'Navigasi Utama',
      meta_description: 'xHalo Buddhist — Kitab suci Buddha pelbagai bahasa, carian teks lengkap dan penerokaan semantik. Dipersembahkan dengan sungai, imej Buddha, dan halo berputar berlapis.',
      meta_og_description: 'Melampaui sempadan bahasa, era, dan mazhab, mencari kejelasan, belas kasihan, dan ketertiban batin dalam kitab suci Buddha yang luas.',
      meta_og_title: 'xHalo Buddhist · Satu Fikiran Mekar',
      page_title: 'xHalo Buddhist · Satu Fikiran Mekar'
    }
  };

  let currentLang = 'zh-Hans';

  function getTranslation(key) {
    const langDict = translations[currentLang] || translations['zh-Hans'];
    return langDict[key] || translations['zh-Hans'][key] || '';
  }
  window.getTranslation = getTranslation;

  function translatePage() {
    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getTranslation(key);
      if (val) {
        // Keep potential child nodes (e.g. SVG inside primary buttons)
        const svgChild = el.querySelector('svg');
        if (svgChild) {
          // If there is an SVG inside, wrap text in span or just replace text node
          let textNode = Array.from(el.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
          if (textNode) {
            textNode.nodeValue = val;
          } else {
            // If no text node, add it
            el.appendChild(document.createTextNode(val));
          }
        } else {
          el.textContent = val;
        }
      }
    });

    // 2. ARIA elements and labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = getTranslation(key);
      if (val) {
        el.setAttribute('aria-label', val);
      }
    });

    // 3. Document Head SEO Elements
    document.documentElement.lang = currentLang;

    // Document Title
    const titleVal = getTranslation('page_title');
    const titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.textContent = titleVal;
    document.title = titleVal;

    // Meta tags
    const descVal = getTranslation('meta_description');
    const descMeta = document.getElementById('meta-desc') || document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', descVal);

    const ogTitleVal = getTranslation('meta_og_title');
    const ogTitleMeta = document.getElementById('meta-og-title') || document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', ogTitleVal);

    const ogDescVal = getTranslation('meta_og_description');
    const ogDescMeta = document.getElementById('meta-og-desc') || document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) ogDescMeta.setAttribute('content', ogDescVal);

    // Update current lang label in the selector button
    const currentNameEl = document.querySelector('.current-lang-name');
    if (currentNameEl) {
      currentNameEl.textContent = langNames[currentLang];
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update active class in dropdown options
    document.querySelectorAll('#langDropdown li').forEach(li => {
      if (li.getAttribute('data-value') === lang) {
        li.classList.add('active');
        li.setAttribute('aria-selected', 'true');
      } else {
        li.classList.remove('active');
        li.removeAttribute('aria-selected');
      }
    });

    // Translate page DOM
    translatePage();

    // Sync browser URL parameter silently (without reloading page)
    const url = new URL(window.location.href);
    if (url.searchParams.get('lang') !== lang) {
      url.searchParams.set('lang', lang);
      window.history.pushState({ lang: lang }, '', url.pathname + url.search + url.hash);
    }
  }

  // Detect and initialize language
  function initLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    let targetLang = '';
    
    // Priority 1: URL parameter (manual query)
    if (urlLang && translations[urlLang]) {
      targetLang = urlLang;
    }
    
    // Priority 2: Stored manual choice
    if (!targetLang) {
      const storedLang = localStorage.getItem('lang');
      if (storedLang && translations[storedLang]) {
        targetLang = storedLang;
      }
    }
    
    // Priority 3: Browser preferences (navigator.languages then navigator.language)
    if (!targetLang) {
      const preferredLangs = [];
      if (navigator.languages && navigator.languages.length > 0) {
        preferredLangs.push(...navigator.languages);
      }
      if (navigator.language) {
        preferredLangs.push(navigator.language);
      }
      if (navigator.userLanguage) {
        preferredLangs.push(navigator.userLanguage);
      }

      for (const pref of preferredLangs) {
        const cleanPref = pref.toLowerCase().replace('_', '-');
        
        // Exact match (e.g. "zh-hans" matches "zh-hans")
        const exactMatch = Object.keys(translations).find(l => l.toLowerCase() === cleanPref);
        if (exactMatch) {
          targetLang = exactMatch;
          break;
        }

        // Subtag match (e.g. "en-us" -> check if we have "en")
        const subtag = cleanPref.split('-')[0];
        // Special case for Chinese: zh-cn, zh-sg -> zh-Hans; zh-tw, zh-hk, zh-mo -> zh-Hant
        if (subtag === 'zh') {
          if (cleanPref.includes('hk') || cleanPref.includes('tw') || cleanPref.includes('mo') || cleanPref.includes('hant')) {
            targetLang = 'zh-Hant';
            break;
          } else {
            targetLang = 'zh-Hans';
            break;
          }
        }
        
        const subMatch = Object.keys(translations).find(l => l.toLowerCase() === subtag);
        if (subMatch) {
          targetLang = subMatch;
          break;
        }
      }
    }
    
    // Fallback: Default to zh-Hans
    if (!targetLang) {
      targetLang = 'zh-Hans';
    }

    setLanguage(targetLang);
  }

  // Handle dropdown interactions
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();

    const selector = document.getElementById('langSelector');
    const btn = selector ? selector.querySelector('.lang-btn') : null;
    const dropdown = document.getElementById('langDropdown');

    if (!selector || !btn || !dropdown) return;

    function toggleDropdown() {
      const isOpen = selector.classList.contains('open');
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    }

    function openDropdown() {
      selector.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      const activeOption = dropdown.querySelector('li.active');
      if (activeOption) {
        activeOption.focus();
      }
    }

    function closeDropdown() {
      selector.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    dropdown.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = item.getAttribute('data-value');
        setLanguage(val);
        closeDropdown();
      });

      // Key events on options
      item.addEventListener('keydown', (e) => {
        const listItems = Array.from(dropdown.querySelectorAll('li'));
        const index = listItems.indexOf(item);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const nextItem = listItems[index + 1] || listItems[0];
          nextItem.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prevItem = listItems[index - 1] || listItems[listItems.length - 1];
          prevItem.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const val = item.getAttribute('data-value');
          setLanguage(val);
          closeDropdown();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeDropdown();
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (selector.classList.contains('open') && !selector.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && selector.classList.contains('open')) {
        closeDropdown();
      }
    });
  });

  // Support history back/forward navigation
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.lang) {
      setLanguage(event.state.lang);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang && translations[urlLang]) {
        setLanguage(urlLang);
      }
    }
  });

})();

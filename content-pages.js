(() => {
  'use strict';

  const LANGUAGES = {
    'zh-Hans': '简体中文', 'zh-Hant': '繁體中文', ja: '日本語', ko: '한국어', en: 'English',
    de: 'Deutsch', es: 'Español', fr: 'Français', it: 'Italiano', pt: 'Português', th: 'ไทย',
    my: 'မြန်မာ', vi: 'Tiếng Việt', km: 'ភាសាខ្មែរ', lo: 'ພາສາລາວ', id: 'Bahasa Indonesia', ms: 'Bahasa Melayu'
  };
  const NAV = {
    'zh-Hans':['佛典','十三经','经典目录','数据说明'], 'zh-Hant':['佛典','十三經','經典目錄','資料說明'],
    ja:['仏典','十三経','経典目録','データ説明'], ko:['불전','십삼경','경전 목록','데이터 안내'],
    en:['Sutras','Thirteen Sutras','Library','Data Guide'], de:['Sutren','Dreizehn Sutren','Katalog','Datenhinweise'],
    es:['Sutras','Trece sutras','Catálogo','Guía de datos'], fr:['Soutras','Treize soutras','Catalogue','Guide des données'],
    it:['Sutra','Tredici sutra','Catalogo','Guida ai dati'], pt:['Sutras','Treze sutras','Catálogo','Guia de dados'],
    th:['พระไตรปิฎก','พระสูตร 13 เล่ม','สารบัญคัมภีร์','คู่มือข้อมูล'], my:['ပိဋကတ်တော်','ဗုဒ္ဓကျမ်း ၁၃ စောင်','ကျမ်းစာရင်း','ဒေတာလမ်းညွှန်'],
    vi:['Kinh điển','Mười ba kinh','Thư mục kinh điển','Hướng dẫn dữ liệu'], km:['ព្រះត្រៃបិដក','១៣ ព្រះសូត្រ','បញ្ជីគម្ពីរ','ការណែនាំទិន្នន័យ'],
    lo:['ພະໄຕປິໂດກ','ພຣະສູດ 13 ເຫຼັ້ມ','ສາລະບານຄຳພີ','ຄູ່ມືຂໍ້ມູນ'], id:['Sutra','Tiga Belas Sutra','Katalog','Informasi Data'],
    ms:['Sutra','Tiga Belas Sutra','Katalog','Panduan Data']
  };
  const EN = {
    skip:'Skip to main content', language:'Language', home:'Home', navigation:'Navigation', blog:'Blog',
    thirteenIntro:'Browse verified primary CBETA editions while keeping alternate translations and recensions visible.',
    libraryIntro:'Browse available canonical editions by page; each item opens directly in the focused scripture reader.',
    dataIntro:'Understand the sources, current product boundaries, and production build status.', scopeTitle:'Collection scope',
    loading:'Loading the latest data…', read:'Read', alternates:'Other translations and editions', sourceId:'Source ID', translator:'Translator',
    source:'Source', languageLabel:'Language', relation:'Relation', completeness:'Completeness', recommended:'Recommended', versionTitle:'Title',
    filter:'Filter this page', totalSummary:'{total} total editions · showing {from}–{to}', pageSummary:'Page {page} of {pages} · {remaining} pages remaining',
    previous:'Previous', next:'Next', canonicalTitle:'Canonical text source', canonicalBody:'The reader loads canonical assets only from buddb.xhalo.co; the interface does not generate or rewrite scripture.',
    boundaryTitle:'Reader boundary', boundaryBody:'foread.xhalo.co focuses on scripture reading, editions, and reading settings. Catalog and explanatory pages live here.',
    searchTitle:'Search is not enabled', searchBody:'This reading phase does not include search, RAG, or generative Q&A, preserving a verifiable source trail.',
    buildVersion:'Data version', buildTime:'Build time', schema:'Schema', works:'Works', status:'Release status', loadError:'The latest data could not be loaded. Please try again shortly.'
  };
  const LOCAL = {
    'zh-Hans': {skip:'跳到主要内容',language:'语言',home:'主页',navigation:'导航',blog:'博客',thirteenIntro:'从可靠的典籍家族中选择经核验的 CBETA 主版本，并保留其他译本与异本信息。',libraryIntro:'分页浏览可用典籍版本；每项直接进入专注的正文阅读器。',dataIntro:'了解典籍来源、当前能力边界与生产数据的构建状态。',scopeTitle:'收录范围',loading:'正在读取最新数据…',read:'阅读正文',alternates:'其他译本与异本',sourceId:'来源编号',translator:'译者',source:'来源',languageLabel:'语言',relation:'关系',completeness:'完整度',recommended:'推荐',versionTitle:'版本名称',filter:'筛选当前页',totalSummary:'共 {total} 个版本 · 当前显示 {from}–{to}',pageSummary:'第 {page} / {pages} 页 · 剩余 {remaining} 页',previous:'上一页',next:'下一页',canonicalTitle:'权威正文来源',canonicalBody:'正文只从 buddb.xhalo.co 的 canonical 资产读取，不由界面生成或改写。',boundaryTitle:'阅读器边界',boundaryBody:'foread.xhalo.co 专注正文阅读、版本切换和阅读设置；目录与说明集中在此站。',searchTitle:'当前不提供检索',searchBody:'此阅读阶段不接入搜索、RAG 或生成式问答，以保持来源可核验。',buildVersion:'数据版本',buildTime:'构建时间',schema:'模式版本',works:'作品总数',status:'发布状态',loadError:'暂时无法读取最新数据，请稍后重试。'},
    'zh-Hant': {skip:'跳到主要內容',language:'語言',home:'主頁',navigation:'導航',blog:'博客',thirteenIntro:'從可靠的典籍家族中選擇經核驗的 CBETA 主版本，並保留其他譯本與異本資訊。',libraryIntro:'分頁瀏覽可用典籍版本；每項直接進入專注的正文閱讀器。',dataIntro:'了解典籍來源、目前能力邊界與生產資料的構建狀態。',scopeTitle:'收錄範圍',loading:'正在讀取最新資料…',read:'閱讀正文',alternates:'其他譯本與異本',sourceId:'來源編號',translator:'譯者',source:'來源',languageLabel:'語言',relation:'關係',completeness:'完整度',recommended:'推薦',versionTitle:'版本名稱',filter:'篩選目前頁',totalSummary:'共 {total} 個版本 · 目前顯示 {from}–{to}',pageSummary:'第 {page} / {pages} 頁 · 剩餘 {remaining} 頁',previous:'上一頁',next:'下一頁',canonicalTitle:'權威正文來源',canonicalBody:'正文只從 buddb.xhalo.co 的 canonical 資產讀取，不由介面生成或改寫。',boundaryTitle:'閱讀器邊界',boundaryBody:'foread.xhalo.co 專注正文閱讀、版本切換和閱讀設定；目錄與說明集中在此站。',searchTitle:'目前不提供檢索',searchBody:'此閱讀階段不接入搜尋、RAG 或生成式問答，以保持來源可核驗。',buildVersion:'資料版本',buildTime:'構建時間',schema:'模式版本',works:'作品總數',status:'發布狀態',loadError:'暫時無法讀取最新資料，請稍後重試。'},
    ja:{language:'言語',home:'ホーム',navigation:'ナビ',blog:'ブログ',read:'本文を読む',alternates:'その他の訳本・異本',filter:'このページを絞り込む',previous:'前へ',next:'次へ'},
    ko:{language:'언어',home:'홈',navigation:'탐색',blog:'블로그',read:'본문 읽기',alternates:'다른 번역본과 이본',filter:'현재 페이지 필터',previous:'이전',next:'다음'},
    de:{language:'Sprache',home:'Startseite',navigation:'Navigation',blog:'Blog'}, es:{language:'Idioma',home:'Inicio',navigation:'Navegación',blog:'Blog'},
    fr:{language:'Langue',home:'Accueil',navigation:'Navigation',blog:'Blog'}, it:{language:'Lingua',home:'Home',navigation:'Navigazione',blog:'Blog'},
    pt:{language:'Idioma',home:'Início',navigation:'Navegação',blog:'Blog'}, th:{language:'ภาษา',home:'หน้าหลัก',navigation:'นำทาง',blog:'บล็อก'},
    my:{language:'ဘာသာစကား',home:'ပင်မ',navigation:'လမ်းညွှန်',blog:'ဘလော့ဂ်'}, vi:{language:'Ngôn ngữ',home:'Trang chủ',navigation:'Điều hướng',blog:'Blog'},
    km:{language:'ភាសា',home:'ទំព័រដើម',navigation:'ការរុករក',blog:'ប្លុក'}, lo:{language:'ພາສາ',home:'ໜ້າຫຼັກ',navigation:'ນຳທາງ',blog:'ບລັອກ'},
    id:{language:'Bahasa',home:'Beranda',navigation:'Navigasi',blog:'Blog'}, ms:{language:'Bahasa',home:'Laman utama',navigation:'Navigasi',blog:'Blog'}
  };

  const params = new URLSearchParams(location.search);
  const requested = params.get('lang');
  const stored = localStorage.getItem('lang');
  const browser = navigator.language;
  const locale = LANGUAGES[requested] ? requested : LANGUAGES[stored] ? stored : browser.startsWith('zh-TW') || browser.startsWith('zh-HK') ? 'zh-Hant' : LANGUAGES[browser] ? browser : 'zh-Hans';
  const copy = {...EN, ...(LOCAL[locale] || {})};
  const nav = NAV[locale] || NAV.en;
  const page = document.body.dataset.page;
  const titles = {thirteen:nav[1],library:nav[2],data:nav[3]};

  function format(value, values) { return Object.entries(values).reduce((text, [key, val]) => text.replace(`{${key}}`, String(val)), value); }
  function el(tag, className, text) { const node=document.createElement(tag); if(className)node.className=className;if(text!==undefined)node.textContent=text;return node; }
  function safeId(value, length=128) { return typeof value==='string' && value.length<=length && /^[A-Za-z0-9._-]+$/.test(value); }
  function readerHref(sourceId, language, query='') { return `https://foread.xhalo.co/${encodeURIComponent(locale)}/read/cbeta/${encodeURIComponent(sourceId)}/${encodeURIComponent(language)}/cbeta${query}`; }
  function pageHref(path, extra={}) { const url=new URL(path,location.origin);url.searchParams.set('lang',locale);Object.entries(extra).forEach(([key,value])=>url.searchParams.set(key,String(value)));return `${url.pathname}${url.search}`; }

  document.documentElement.lang=locale;
  document.title=`${titles[page] || 'xHalo Buddhist'} · xHalo Buddhist`;
  document.querySelectorAll('[data-copy]').forEach(node=>{ const key=node.dataset.copy; if(copy[key])node.textContent=copy[key]; });
  ['navSutras','navThirteen','navLibrary','navData'].forEach((key,index)=>{document.querySelectorAll(`[data-copy="${key}"]`).forEach(node=>node.textContent=nav[index]);});
  const intro=document.querySelector(`[data-copy="${page}Intro"]`);if(intro)intro.textContent=copy[`${page}Intro`];
  const pageTitle=document.querySelector(`[data-copy="${page}Title"]`);if(pageTitle)pageTitle.textContent=titles[page];
  document.querySelectorAll('[data-lang-link]').forEach(link=>{link.href=pageHref(new URL(link.href).pathname);});
  document.querySelectorAll('[data-home-link]').forEach(link=>{link.href=pageHref('/');});
  const select=document.querySelector('[data-language-select]');
  if(select){Object.entries(LANGUAGES).forEach(([value,label])=>{const option=el('option','',label);option.value=value;option.selected=value===locale;select.append(option);});select.addEventListener('change',()=>{localStorage.setItem('lang',select.value);const next=new URL(location.href);next.searchParams.set('lang',select.value);location.assign(next);});}

  function error(container) { container.replaceChildren(el('p','error-card',copy.loadError)); }

  async function loadThirteen() {
    const list=document.querySelector('[data-thirteen-list]');
    try {
      const response=await fetch('https://buddb.xhalo.co/curated-collections/buddhist-thirteen-sutras.json',{credentials:'omit'});
      if(!response.ok)throw new Error('collection');
      const data=await response.json();if(!data || !Array.isArray(data.items))throw new Error('schema');
      const items=[...data.items].sort((a,b)=>Number(a.ordinal)-Number(b.ordinal));list.replaceChildren();
      items.forEach(item=>{
        const memberships=Array.isArray(item.memberships)?item.memberships:[];
        const primary=memberships.find(entry=>entry && entry.source==='cbeta' && entry.recommended===true && entry.completeness==='complete' && entry.relation_type==='primary_edition') || memberships.find(entry=>entry && entry.source==='cbeta' && entry.recommended===true && entry.completeness==='complete');
        const sourceId=primary && typeof primary.work_id==='string' && primary.work_id.startsWith('cbeta:')?primary.work_id.slice(6):'';
        const language=primary && safeId(primary.language,64)?primary.language:'lzh-Hant';
        const li=el('li');const row=el('div','collection-row');row.append(el('span','ordinal',String(item.ordinal).padStart(2,'0')));
        const title=el('div','sutra-title');title.append(el('h2','',locale==='zh-Hant'?item.preferred_title_zh_hant:item.preferred_title_zh_hans));title.append(el('p','',item.preferred_title_zh_hant || ''));if(item.title_sanskrit)title.append(el('small','',item.title_sanskrit));row.append(title);
        const meta=el('dl','meta');[[copy.sourceId,safeId(sourceId)?sourceId:'—'],[copy.translator,primary?.translator || '—'],[copy.relation,primary?.relation_type || '—'],[copy.completeness,primary?.completeness || '—']].forEach(([term,value])=>{const wrap=el('div');wrap.append(el('dt','',term),el('dd','',value));meta.append(wrap);});row.append(meta);
        if(safeId(sourceId)){const link=el('a','read-link',copy.read);link.href=readerHref(sourceId,language);row.append(link);}li.append(row);
        const others=memberships.filter(entry=>entry!==primary);
        if(others.length){const details=el('details');details.append(el('summary','',`${copy.alternates} · ${others.length}`));const wrap=el('div','alternate-wrap');const table=el('table');const head=el('thead');const hr=el('tr');[copy.versionTitle,copy.translator,copy.source,copy.languageLabel,copy.relation,copy.completeness,copy.recommended].forEach(value=>hr.append(el('th','',value)));head.append(hr);const body=el('tbody');others.forEach(entry=>{const tr=el('tr');[entry.title,entry.translator || '—',entry.source,entry.language,entry.relation_type,entry.completeness,entry.recommended?copy.recommended:'—'].forEach(value=>tr.append(el('td','',value || '—')));body.append(tr);});table.append(head,body);wrap.append(table);details.append(wrap);li.append(details);}list.append(li);
      });
      const scope=document.querySelector('[data-scope]');scope.textContent=data.scope_note || data.description || '';
      document.querySelector('[data-contract]').textContent=`schema ${data.schema_version} · collection ${data.version} · data ${data.data_version}`;
    } catch { error(list); }
  }

  async function loadLibrary() {
    const list=document.querySelector('[data-library-list]');const summary=document.querySelector('[data-catalog-summary]');
    const requestedPage=Math.max(1,Number.parseInt(params.get('page') || '1',10) || 1);const limit=50;
    try {
      const response=await fetch(`https://foread.xhalo.co/api/catalog?source=cbeta&offset=${(requestedPage-1)*limit}&limit=${limit}`,{credentials:'omit',mode:'cors'});if(!response.ok)throw new Error('catalog');
      const data=await response.json();if(!data || !Number.isSafeInteger(data.total) || !Array.isArray(data.items))throw new Error('schema');
      const totalPages=Math.max(1,Math.ceil(data.total/limit));const current=Math.min(requestedPage,totalPages);if(current!==requestedPage){location.replace(pageHref('/library/',{page:current}));return;}
      const render=(items)=>{list.replaceChildren();items.forEach((item,index)=>{if(!item || !safeId(item.sourceId))return;const language=Array.isArray(item.languages)&&item.languages.find(value=>safeId(value,64)) || 'lzh-Hant';const li=el('li');li.append(el('span','ordinal',String((current-1)*limit+index+1).padStart(4,'0')));const title=el('div');title.append(el('h2','',String(item.title || item.sourceId).slice(0,240)),el('small','',`${item.sourceId} · ${language}`));li.append(title);const link=el('a','read-link',copy.read);link.href=readerHref(item.sourceId,language,`?from=library&page=${current}`);li.append(link);list.append(li);});if(!list.children.length)list.append(el('li','error-card',copy.loadError));};
      render(data.items);summary.textContent=format(copy.totalSummary,{total:data.total,from:data.total?(current-1)*limit+1:0,to:Math.min(current*limit,data.total)});
      const pagination=document.querySelector('[data-pagination]');if(current>1){const prev=el('a','',copy.previous);prev.href=pageHref('/library/',{page:current-1});pagination.append(prev);}else pagination.append(el('span'));
      pagination.append(el('span','',format(copy.pageSummary,{page:current,pages:totalPages,remaining:totalPages-current})));
      if(current<totalPages){const next=el('a','',copy.next);next.href=pageHref('/library/',{page:current+1});pagination.append(next);}else pagination.append(el('span'));
      const filter=document.querySelector('[data-library-filter]');filter.addEventListener('input',()=>{const query=filter.value.trim().toLocaleLowerCase(locale);render(data.items.filter(item=>String(item.title).toLocaleLowerCase(locale).includes(query)||item.sourceId.toLowerCase().includes(query)));});
    } catch { error(list);summary.textContent=copy.loadError; }
  }

  async function loadData() {
    const container=document.querySelector('[data-data-status]');
    try {const response=await fetch('https://buddb.xhalo.co/latest.json',{credentials:'omit'});if(!response.ok)throw new Error('latest');const data=await response.json();const dl=el('dl');[[copy.buildVersion,data.version],[copy.buildTime,data.build_time],[copy.schema,data.schema_version],[copy.works,data.counts?.works],[copy.status,data.release_status]].forEach(([term,value],index)=>{const wrap=el('div');wrap.append(el('dt','',term),el('dd',index===4&&value==='complete'?'healthy':'',String(value ?? '—')));dl.append(wrap);});container.replaceChildren(...dl.children);}catch{error(container);}
  }

  if(page==='thirteen')void loadThirteen();
  if(page==='library')void loadLibrary();
  if(page==='data')void loadData();
})();

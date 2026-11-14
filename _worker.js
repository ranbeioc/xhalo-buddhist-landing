import homeTranslations from './i18n.js';
import contentTranslations from './content-pages.js';

const defaultLanguage = 'zh-Hans';
const pageSections = new Map([
  ['/thirteen/', ['thirteen', 1]],
  ['/library/', ['library', 2]],
  ['/data/', ['data', 3]],
]);
const socialLocales = new Map(Object.entries({
  'zh-Hans': 'zh_CN', 'zh-Hant': 'zh_TW', ja: 'ja_JP', ko: 'ko_KR', en: 'en_US',
  de: 'de_DE', es: 'es_ES', fr: 'fr_FR', it: 'it_IT', pt: 'pt_PT', th: 'th_TH',
  my: 'my_MM', vi: 'vi_VN', km: 'km_KH', lo: 'lo_LA', id: 'id_ID', ms: 'ms_MY',
}));
const imagePath = '/assets/og-buddhist-v1.jpg';

function getShareCopy(path, language) {
  const section = pageSections.get(path);
  if (section) {
    const [page, navIndex] = section;
    return {
      title: `${contentTranslations.nav[language][navIndex]} · xHalo Buddhist`,
      description: (contentTranslations.local[language] || contentTranslations.en)[`${page}MetaDesc`],
    };
  }
  const copy = homeTranslations[language];
  return { title: copy.meta_og_title, description: copy.meta_og_description };
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (request.method !== 'GET' || !response.ok || !response.headers.get('content-type')?.startsWith('text/html')) {
      return response;
    }

    const url = new URL(request.url);
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    if (path !== '/' && !pageSections.has(path)) return response;

    const requestedLanguage = url.searchParams.get('lang');
    const hasLanguage = socialLocales.has(requestedLanguage);
    const language = hasLanguage ? requestedLanguage : defaultLanguage;
    const origin = url.hostname.endsWith('.xhalo-buddhist-landing.pages.dev')
      ? url.origin
      : 'https://fo.xhalo.co';
    const pageUrl = new URL(path, origin);
    if (hasLanguage) pageUrl.searchParams.set('lang', language);

    const { title, description } = getShareCopy(path, language);
    const image = new URL(imagePath, origin).href;
    const tags = new Map([
      ['og:title', title],
      ['og:description', description],
      ['og:locale', socialLocales.get(language)],
      ['og:url', pageUrl.href],
      ['og:image', image],
      ['twitter:title', title],
      ['twitter:description', description],
      ['twitter:image', image],
    ]);

    const headers = new Headers(response.headers);
    headers.set('Cache-Control', 'public, no-cache, no-transform');
    headers.delete('Content-Length');
    headers.delete('ETag');
    headers.delete('Last-Modified');

    return new HTMLRewriter().on('head meta', {
      element(element) {
        const key = element.getAttribute('property') || element.getAttribute('name');
        if (tags.has(key)) element.setAttribute('content', tags.get(key));
      },
    }).transform(new Response(response.body, { status: response.status, headers }));
  },
};

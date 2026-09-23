export const SITE_URL = 'https://yourdomain.com';

// Central registry of pages per market. Keys map to localized paths.
export const PAGES = {
  home: { us: '/us', global: '/', es: '/es' },
  talent: { us: '/us/peruvian-talent', global: '/peruvian-talent', es: '/es/talento-peruano' },
  nearshore: { us: '/us/nearshore-staffing-miami', global: '/nearshore-staffing', es: '/es/staffing-internacional' },
  outsourcing: { us: null, global: '/outsourcing-peru', es: '/es/outsourcing-peru' },
  remote: { us: '/us/remote-staffing-miami', global: '/remote-staffing', es: '/es/contratacion-remota' },
  augmentation: { us: '/us/staff-augmentation-miami', global: '/staff-augmentation', es: null },
  bilingual: { us: '/us/bilingual-talent-miami', global: null, es: null },
  how: { us: '/us/how-it-works', global: '/how-it-works', es: '/es/como-funciona' },
  why: { us: '/us/why-peru', global: '/why-peru', es: '/es/por-que-peru' },
  industries: { us: '/us/industries', global: '/industries', es: '/es/industrias' },
  contact: { us: '/us/contact', global: '/contact', es: '/es/contacto' },
};

export const MARKET_LABELS = { us: 'US', global: 'GLOBAL', es: 'ES' };

export function getMarket(pathname) {
  const p = pathname || '/';
  if (p === '/us' || p.startsWith('/us/')) return 'us';
  if (p === '/es' || p.startsWith('/es/')) return 'es';
  return 'global';
}

export function pathFor(market, key) {
  const page = PAGES[key];
  return (page && page[market]) || PAGES.home[market];
}

// Map a path in the current market to the equivalent path in the target market.
export function switchMarket(pathname, target) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  const current = getMarket(clean);
  if (current === target) return clean;

  const ind = clean.match(/\/(industries|industrias)\/([^/]+)/);
  if (ind) return `${PAGES.industries[target]}/${ind[2]}`;

  for (const page of Object.values(PAGES)) {
    if (page[current] === clean) return page[target] || PAGES.home[target];
  }
  return PAGES.home[target];
}

const joinUrl = (path, slug) => {
  if (!path) return null;
  let full = slug ? `${path}/${slug}` : path;
  if (full !== '/') full = `${full}/`;
  return `${SITE_URL}${full === '/' ? '/' : full}`;
};

// Absolute canonical URL for a page in a market (optionally an industry slug).
export const urlFor = (market, key, slug) => {
  const page = PAGES[key];
  const path = (page && page[market]) || PAGES.home[market];
  return joinUrl(path, slug) || `${SITE_URL}/`;
};

// hreflang alternates for a page (optionally an industry slug).
export function alternatesFor(key, slug) {
  const page = PAGES[key] || {};
  const alts = [];
  if (page.us) alts.push({ lang: 'en-US', href: joinUrl(page.us, slug) });
  if (page.global) alts.push({ lang: 'en', href: joinUrl(page.global, slug) });
  if (page.es) alts.push({ lang: 'es', href: joinUrl(page.es, slug) });
  const fallback = page.global || page.us;
  if (fallback) alts.push({ lang: 'x-default', href: joinUrl(fallback, slug) });
  return alts;
}
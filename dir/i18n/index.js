import { useLocation } from 'react-router-dom';
import { getMarket, pathFor } from './routes';
import { shared, us, globalMarket } from './content/en';
import { es } from './content/es';

function deepMerge(base, override) {
  if (override === undefined) return base;
  if (Array.isArray(base) || Array.isArray(override) || typeof base !== 'object' || base === null || typeof override !== 'object' || override === null) {
    return override;
  }
  const out = { ...base };
  for (const k of Object.keys(override)) {
    out[k] = deepMerge(base[k], override[k]);
  }
  return out;
}

const CONTENT = {
  us: deepMerge(shared, us),
  global: deepMerge(shared, globalMarket),
  es,
};

export function getContent(market) {
  return CONTENT[market] || CONTENT.global;
}

// Hook: derive the current market, localized content, and path helper from the URL.
export function useMarket() {
  const { pathname } = useLocation();
  const market = getMarket(pathname);
  const c = getContent(market);
  const p = (key) => pathFor(market, key);
  return { market, c, p };
}
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getMarket, switchMarket, MARKET_LABELS } from '@/i18n/routes';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher({ className }) {
  const { pathname } = useLocation();
  const current = getMarket(pathname);

  return (
    <div className={cn('flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium', className)}>
      {Object.entries(MARKET_LABELS).map(([id, label], i) => (
        <span key={id} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-30">/</span>}
          <Link
            to={switchMarket(pathname, id)}
            aria-label={`Switch to ${label} version`}
            className={cn(
              'transition-colors',
              current === id ? 'text-crimson' : 'opacity-60 hover:opacity-100 hover:text-crimson'
            )}
          >
            {label}
          </Link>
        </span>
      ))}
    </div>
  );
}
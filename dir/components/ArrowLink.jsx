import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function ArrowLink({ to, children, variant = 'light', className, onClick }) {
  const color = variant === 'light' ? 'text-bone/80 hover:text-crimson' : 'text-ink/80 hover:text-crimson';
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn('group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-medium transition-colors', color, className)}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
    </Link>
  );
}
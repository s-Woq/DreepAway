import { Link } from 'react-router-dom';
import { useMarket } from '@/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Footer() {
  const { c, p } = useMarket();
  const f = c.footer;

  return (
    <footer className="bg-ink text-bone border-t border-bone/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link to={p('home')} className="flex items-center gap-2 tracking-[0.25em] text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-crimson rounded-full" /> VETTA
            </Link>
            <p className="font-display font-bold tracking-[-0.03em] text-3xl md:text-4xl leading-[1.05] max-w-md">
              {f.tagline[0]}<br />{f.tagline[1]}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-5">{f.navTitle}</p>
            <ul className="grid grid-cols-2 gap-y-3">
              {f.nav.map(l => (
                <li key={l.key}>
                  <Link to={p(l.key)} className="text-bone/70 hover:text-crimson text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-5">{f.locationsLabel}</p>
            <p className="text-bone/70 text-sm leading-relaxed">
              {f.locations.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
            </p>
            <p className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mt-6 mb-3">{f.connectLabel}</p>
            <div className="flex gap-5 text-sm text-bone/70">
              <a href="mailto:hello@vetta.co" className="hover:text-crimson transition-colors">Email</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-crimson transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between gap-6 text-xs text-bone/40">
          <p>© {new Date().getFullYear()} Vetta. {f.rights}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy/" className="hover:text-bone transition-colors">{f.privacy}</Link>
            <Link to="/terms/" className="hover:text-bone transition-colors">{f.terms}</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
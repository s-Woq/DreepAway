import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMarket } from '@/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import LogoIcon from '@/../img/logo2.png';

export default function Navbar() {
  const { pathname } = useLocation();
  const { c, p } = useMarket();
  const isHome = pathname === p('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = c.nav.links;
  const homeLink = { label: c.nav.cta, to: p('contact') };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          solid ? 'bg-ink/90 backdrop-blur-md border-b border-bone/5' : 'bg-transparent'
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
          <Link to={p('home')} className="flex items-center gap-2 text-bone tracking-[0.25em] text-sm font-semibold">
            <span className="w-2 h-2 bg-crimson rounded-full" />
        <div className="group flex items-center gap-3">
        <img
          src={LogoIcon}
          alt="DreepAwayLogo"
          className="w-auto h-14"
        />

        <p className="text-2xl font-medium tracking-[-0.03em]">
          Dreep
          <span className="ml-[1px] italic font-light text-[#8B0000] inline-block
            transition-all duration-700 ease-out
            group-hover:translate-x-1 group-hover:opacity-70 text-3xl">
            Away
          </span>
        </p>
      </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <Link key={l.key} to={p(l.key)} className="text-bone/70 hover:text-bone text-[13px] tracking-[0.15em] uppercase font-medium transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <LanguageSwitcher className="hidden sm:flex" />
            <Link to={p('contact')} className="hidden sm:inline-flex items-center gap-2 bg-bone text-ink px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-crimson hover:text-bone transition-colors">
              {c.nav.cta}
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="md:hidden text-bone p-1"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink text-bone flex flex-col"
          >
            <div className="h-16 md:h-20 flex items-center justify-between px-6">
              <span className="tracking-[0.25em] text-sm font-semibold flex items-center gap-2"><span className="w-2 h-2 bg-crimson rounded-full" /> VETTA</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-1"><X size={24} /></button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {[...links, { key: 'contact', label: c.footer?.nav?.find(n => n.key === 'contact')?.label || 'Contact' }].map((l, i) => (
                <motion.div key={l.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                  <Link to={p(l.key)} className="block font-display font-bold tracking-[-0.03em] text-5xl py-2 border-b border-bone/10">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="p-8 space-y-6">
              <LanguageSwitcher />
              <Link to={p('contact')} className="inline-flex items-center justify-center w-full bg-crimson text-bone px-6 py-4 text-sm tracking-[0.2em] uppercase font-semibold">
                {homeLink.label} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
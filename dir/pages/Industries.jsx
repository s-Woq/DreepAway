import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import FinalCTA from '@/components/sections/FinalCTA';
import { useMarket } from '@/i18n';
import { urlFor, alternatesFor } from '@/i18n/routes';

export default function Industries() {
  const { c, market, p } = useMarket();
  const m = c.meta.industries;
  const list = c.industries.list;

  return (
    <>
      <Seo
        title={m.title}
        description={m.description}
        canonical={urlFor(market, 'industries')}
        lang={c.lang}
        alternates={alternatesFor('industries')}
      />
      <PageHero eyebrow={m.eyebrow} title={m.h1} intro={m.intro} />

      <section className="bg-bone text-ink py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          {list.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.04}>
              <Link to={`${p('industries')}/${ind.slug}/`} className="group block py-8 md:py-10 border-t border-ink/10 last:border-b">
                <div className="grid grid-cols-12 items-baseline gap-4">
                  <span className="col-span-2 md:col-span-1 text-ink/30 font-mono text-xs tracking-widest">0{i + 1}</span>
                  <h2 className="col-span-10 md:col-span-6 font-display font-bold tracking-[-0.03em] text-4xl md:text-6xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-crimson">{ind.t}</h2>
                  <p className="col-span-12 md:col-span-4 md:col-start-9 text-ink/60 font-light self-center">{ind.d}</p>
                  <span className="hidden md:block md:col-span-1 text-right text-ink/30 transition-all duration-300 group-hover:text-crimson group-hover:translate-x-2">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
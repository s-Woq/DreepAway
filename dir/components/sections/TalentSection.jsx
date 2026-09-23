import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ArrowLink from '@/components/ArrowLink';
import { useMarket } from '@/i18n';

const IMG = {
  software: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
  sales: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  support: 'https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&w=1200&q=80',
  finance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  lima: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1200&q=80',
};

const IMGS = [IMG.software, IMG.sales, IMG.support, IMG.finance, IMG.lima, IMG.software, IMG.support, IMG.finance];

export default function TalentSection() {
  const { c, p } = useMarket();
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { eyebrow, h2, roles, explore, imgAlt } = c.talent;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-4xl">
          {h2}
        </Reveal>

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            {roles.map((r, i) => (
              <Reveal key={r.n} delay={i * 0.03}>
                <div
                  onMouseEnter={() => setActive(i)}
                  className="group grid grid-cols-12 items-baseline gap-4 py-6 md:py-8 border-t border-ink/10 last:border-b cursor-default"
                >
                  <span className="col-span-2 md:col-span-1 text-ink/30 font-mono text-xs tracking-widest">{r.n}</span>
                  <h3 className="col-span-10 md:col-span-6 font-display font-bold tracking-[-0.03em] text-3xl md:text-5xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-crimson">
                    {r.t}
                  </h3>
                  <p className="col-span-12 md:col-span-4 md:col-start-9 text-sm font-light text-ink/60 self-center">{r.d}</p>
                  <span className="hidden md:block md:col-span-1 text-right text-ink/30 transition-all duration-300 group-hover:text-crimson group-hover:translate-x-2">→</span>
                  <div className="col-span-12 md:col-span-12 overflow-hidden">
                    <div className="h-px w-0 bg-crimson transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="mt-12">
              <ArrowLink to={p('talent')} variant="dark">{explore}</ArrowLink>
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-28 overflow-hidden aspect-[3/4] bg-ink">
              {roles.map((r, i) => (
                <motion.img
                  key={r.n}
                  src={IMGS[i]}
                  alt={imgAlt(r.t)}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? (reduce ? 1 : 1.05) : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-bone">
                <span className="text-crimson font-mono text-xs tracking-widest">{roles[active].n}</span>
                <p className="font-display font-medium tracking-[-0.02em] text-2xl mt-1">{roles[active].t}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

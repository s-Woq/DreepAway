import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useMarket } from '@/i18n';

const PHRASES_FALLBACK = [];

function Phrase({ phrase, index, total, scrollYProgress, reduce }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, end], [reduce ? 0 : 60, reduce ? 0 : -60]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.96]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full"
    >
      <span className="text-crimson text-sm tracking-[0.3em] mb-4">{phrase.k}</span>
      <h3 className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[12vw] md:text-[8vw]">{phrase.t}</h3>
      <p className="mt-6 max-w-xl text-ink/60 text-lg font-light leading-relaxed">{phrase.d}</p>
    </motion.div>
  );
}

export default function WhyPeru() {
  const { c } = useMarket();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const phrases = c.whyPeru.phrases || PHRASES_FALLBACK;

  return (
    <section ref={ref} className="relative bg-bone text-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-40">
        <p className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{c.whyPeru.eyebrow}</p>
        <h2 className="font-display font-bold tracking-[-0.05em] leading-[0.9] text-[16vw] md:text-[12vw]">
          {c.whyPeru.title1}<br />{c.whyPeru.title2}
        </h2>
      </div>

      <div className="h-[300vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">
            {phrases.map((p, i) => (
              <Phrase
                key={p.k}
                phrase={p}
                index={i}
                total={phrases.length}
                scrollYProgress={scrollYProgress}
                reduce={reduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
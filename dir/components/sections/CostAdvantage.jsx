import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import ArrowLink from '@/components/ArrowLink';
import { useMarket } from '@/i18n';
import {
  PERU_SOFTWARE_DEVELOPER_SALARY,
  SOFTWARE_DEVELOPER_SALARY_DIFFERENCE,
  US_SOFTWARE_DEVELOPER_SALARY,
} from '@/lib/cost-benchmarks';

function useCounter(from, to, active, duration = 1600) {
  const [val, setVal] = useState(from);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!active) return;
    if (reduce) { setVal(to); return; }
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, from, to, duration, reduce]);
  return val;
}

const fmt = (n) => '$' + n.toLocaleString('en-US');

export default function CostAdvantage() {
  const { c, p } = useMarket();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });
  const val = useCounter(0, US_SOFTWARE_DEVELOPER_SALARY, inView);
  const { eyebrow, h2, usLabel, intlLabel, diffLabel, note, cta } = c.cost;

  return (
    <section ref={ref} className="bg-ink text-bone py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-4xl">
          {h2[0]}<br />{h2[1]}
        </Reveal>

        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-4">{usLabel}</p>
            <p className="font-display font-light tracking-[-0.03em] text-[14vw] md:text-[7vw] leading-none text-bone">
              {fmt(val)}
            </p>
            <p className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mt-10 mb-4">{intlLabel}</p>
            <p className="font-display font-bold tracking-[-0.03em] text-[14vw] md:text-[7vw] leading-none text-bone">
              {fmt(PERU_SOFTWARE_DEVELOPER_SALARY)}<span className="text-crimson">*</span>
            </p>
          </div>

          <div className="md:border-l md:border-bone/10 md:pl-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display font-bold tracking-[-0.04em] text-[22vw] md:text-[14vw] leading-none text-crimson">{SOFTWARE_DEVELOPER_SALARY_DIFFERENCE}%</p>
              <p className="mt-4 text-sm tracking-[0.2em] uppercase text-bone/60">{diffLabel}</p>
            </motion.div>
            <p className="mt-10 text-xs text-bone/40 leading-relaxed max-w-md">
              {note}{' '}<a href="https://www.howdy.com/blog/2025-latin-america-software-developer-salaries" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-bone">2025 payroll data source</a>.
            </p>
            <div className="mt-10">
              <ArrowLink to={p('contact')} variant="light">{cta}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

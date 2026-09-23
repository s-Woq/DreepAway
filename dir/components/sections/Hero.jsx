import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMarket } from '@/i18n';

export default function Hero() {
  const { c, p } = useMarket();
  const reduce = useReducedMotion();
  const { micro, lines, sub, cta1, cta2, cta2To } = c.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink text-bone">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(120% 80% at 50% 110%, rgba(139,0,0,0.45), rgba(10,10,10,0) 55%)' }}
        animate={reduce ? {} : { opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="block text-[11px] tracking-[0.4em] text-bone/50 mb-10 md:mb-14"
        >
          {micro}
        </motion.span>

        <h1 className="font-display font-bold tracking-[-0.05em] leading-[0.9] text-[16vw] md:text-[11vw] lg:text-[9.5vw]">
          {lines.map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: reduce ? 0 : 55 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {l}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-10 md:mt-14 max-w-xl text-bone/65 text-base md:text-lg font-light leading-relaxed"
        >
          {sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5"
        >
          <Link to={p('contact')} className="group inline-flex items-center justify-center gap-3 bg-bone text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-crimson hover:text-bone transition-colors">
            {cta1} <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          <Link to={p(cta2To || 'contact')} className="group inline-flex items-center justify-center gap-3 border border-bone/25 text-bone px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:border-crimson hover:text-crimson transition-colors">
            {cta2} <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/40 text-[10px] tracking-[0.4em]"
      >
        SCROLL
      </motion.div>
    </section>
  );
}
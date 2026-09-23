import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMarket } from '@/i18n';

export default function FinalCTA() {
  const { c, p } = useMarket();
  const reduce = useReducedMotion();
  const { parts, big, sub, cta1, cta2 } = c.finalCta;
  const ease = [0.22, 1, 0.36, 1];

  return (
    <section className="relative bg-ink text-bone py-32 md:py-48 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'radial-gradient(100% 70% at 50% 100%, rgba(139,0,0,0.5), rgba(10,10,10,0) 60%)' }}
        animate={reduce ? {} : { opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        {parts.map((part, i) => (
          <motion.h2
            key={part}
            initial={{ opacity: 0, y: reduce ? 0 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: i * 0.12, ease }}
            className="font-display font-bold tracking-[-0.04em] leading-[0.9] text-[12vw] md:text-[8vw]"
          >
            {part}
          </motion.h2>
        ))}

        <motion.h2
          initial={{ opacity: 0, y: reduce ? 0 : 50, color: '#F5F5F0' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="font-display font-bold tracking-[-0.05em] leading-[0.85] text-[16vw] md:text-[12vw] text-crimson"
        >
          {big}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-12 max-w-xl mx-auto text-bone/65 text-lg font-light leading-relaxed"
        >
          {sub}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5"
        >
          
          <Link to={p('contact')} className="group inline-flex items-center justify-center gap-3 bg-bone text-ink px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-crimson hover:text-bone transition-colors">
            {cta1} <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          
          <Link to={p('contact')} className="group inline-flex items-center justify-center gap-3 border border-bone/25 text-bone px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:border-crimson hover:text-crimson transition-colors">
            {cta2} <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
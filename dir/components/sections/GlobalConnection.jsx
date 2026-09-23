import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMarket } from '@/i18n';

// PERU → USA → GLOBAL: typography and thin crimson lines communicating
// that talent can operate across borders. Scroll-driven.
export default function GlobalConnection() {
  const { c } = useMarket();
  const reduce = useReducedMotion();
  const words = c.connection.words || ['PERU', 'USA', 'GLOBAL'];

  return (
    <section className="relative bg-ink text-bone py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        {words.map((w, i) => (
          <Fragment key={w}>
            <motion.h2
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold tracking-[-0.05em] leading-none text-[16vw] md:text-[10vw] text-center"
            >
              {w}
            </motion.h2>
            {i < words.length - 1 && (
              <motion.div
                aria-hidden
                initial={{ scaleY: reduce ? 1 : 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                style={{ transformOrigin: 'top' }}
                className="w-px h-12 md:h-20 bg-crimson my-6 md:my-8"
              />
            )}
          </Fragment>
        ))}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-16 text-bone/50 text-[11px] tracking-[0.4em] uppercase text-center"
        >
          ONE TEAM.
        </motion.p>
      </div>
    </section>
  );
}
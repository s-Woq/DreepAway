import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function MiamiPeruTransition() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const oneOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1]);
  const oneY = useTransform(scrollYProgress, [0.55, 0.72], [40, 0]);

  return (
    <section ref={ref} className="relative bg-ink text-bone py-32 md:py-48 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-bold tracking-[-0.05em] text-[20vw] md:text-[13vw] leading-none"
          >
            MIAMI
          </motion.h2>

          <div className="relative h-px w-full md:flex-1 my-6 md:my-0 bg-bone/10">
            <motion.div style={{ scaleX: reduce ? 1 : lineScale, transformOrigin: 'left' }} className="h-full w-full bg-crimson" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: reduce ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold tracking-[-0.05em] text-[20vw] md:text-[13vw] leading-none text-right"
          >
            PERU
          </motion.h2>
        </div>

        <motion.h2
          style={reduce ? {} : { opacity: oneOpacity, y: oneY }}
          className="mt-20 md:mt-28 text-center font-display font-light tracking-[-0.04em] text-[16vw] md:text-[9vw] leading-none text-bone/90"
        >
          ONE TEAM.
        </motion.h2>
      </div>
    </section>
  );
}
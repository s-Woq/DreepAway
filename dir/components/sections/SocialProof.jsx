import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';

export default function SocialProof() {
  const { c } = useMarket();
  const { eyebrow, quote, by, context, note } = c.social;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-12 text-center">{eyebrow}</Reveal>
        <Reveal as="blockquote" className="font-display font-light tracking-[-0.03em] leading-[1.1] text-[7vw] md:text-[4.5vw] max-w-5xl mx-auto text-center text-balance">
          {quote}
        </Reveal>
        <Reveal className="mt-12 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-ink/60">{by}</p>
          <p className="text-xs tracking-[0.2em] uppercase text-ink/35 mt-1">{context}</p>
        </Reveal>
        <Reveal as="p" className="mt-16 text-center text-xs text-ink/35 max-w-xl mx-auto">
          {note}
        </Reveal>
        
      </div>
    </section>
  );
}
import Reveal from '@/components/Reveal';
import ArrowLink from '@/components/ArrowLink';
import { useMarket } from '@/i18n';

// US-only section (Miami, Florida — the primary market).
export default function MiamiSection() {
  const { c, p } = useMarket();
  const { eyebrow, h2lines, p1, p2, cta } = c.miami;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{eyebrow}</Reveal>
            <Reveal as="h2" className="font-display font-bold tracking-[-0.05em] leading-[0.9] text-[14vw] md:text-[9vw]">
              {h2lines[0]}<br />{h2lines[1]}
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal as="p" className="text-ink/65 text-lg font-light leading-relaxed">
              {p1}
            </Reveal>
            <Reveal as="p" className="mt-6 text-ink/50 font-light leading-relaxed">
              {p2}
            </Reveal>
            <div className="mt-10">
              <ArrowLink to={p('nearshore')} variant="dark">{cta}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
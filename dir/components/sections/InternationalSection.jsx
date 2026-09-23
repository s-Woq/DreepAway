import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';

export default function InternationalSection() {
  const { c } = useMarket();
  const { eyebrow, h2lines, nodes } = c.international;

  return (
    <section className="bg-ink text-bone py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.05em] leading-[0.9] text-[14vw] md:text-[9vw] mb-20 md:mb-28">
          {h2lines[0]}<br />{h2lines[1]}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10">
          {nodes.map((n, i) => (
            <Reveal key={n} delay={i * 0.08} className="bg-ink p-8 md:p-12 min-h-[200px] md:min-h-[280px] flex flex-col justify-between">
              <span className="text-crimson font-mono text-xs tracking-widest">0{i + 1}</span>
              <span className="font-display font-bold tracking-[-0.03em] text-4xl md:text-6xl">{n}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
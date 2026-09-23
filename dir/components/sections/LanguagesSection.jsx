import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';

export default function LanguagesSection() {
  const { c } = useMarket();
  const { eyebrow, h2, items, note } = c.languages;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-4xl">
          {h2}
        </Reveal>

        <div className="mt-20 md:mt-28">
          {items.map((l, i) => (
            <Reveal key={l.t} delay={i * 0.06}>
              <div className="group grid grid-cols-12 items-baseline gap-4 py-8 md:py-10 border-t border-ink/10 last:border-b">
                <span className="col-span-2 md:col-span-1 text-crimson font-mono text-xs tracking-widest">0{i + 1}</span>
                <h3 className="col-span-10 md:col-span-4 font-display font-bold tracking-[-0.03em] text-3xl md:text-5xl transition-transform duration-300 group-hover:translate-x-2">
                  {l.t}
                </h3>
                <p className="col-span-12 md:col-span-6 md:col-start-7 text-base md:text-lg font-light text-ink/60 leading-relaxed">{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-10 text-xs text-ink/40 leading-relaxed max-w-xl">
          {note}
        </Reveal>
      </div>
    </section>
  );
}
import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';

export default function QualitySection() {
  const { c } = useMarket();
  const { eyebrow, h2, stages, note } = c.quality;

  return (
    <section className="bg-ink text-bone py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-4xl">
          {h2[0]}<br />{h2[1]}
        </Reveal>

        <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            {stages.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 py-6 border-b border-bone/10">
                  <span className="text-crimson font-mono text-xs tracking-widest w-8">0{i + 1}</span>
                  <h3 className="font-display font-medium tracking-[-0.02em] text-2xl md:text-3xl flex-1 transition-transform duration-300 group-hover:translate-x-2">{s.t}</h3>
                  <p className="hidden md:block text-bone/50 text-sm font-light max-w-xs text-right">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-5 md:pl-12 md:border-l md:border-bone/10">
            <Reveal as="p" className="text-bone/60 text-lg font-light leading-relaxed">
              {note}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
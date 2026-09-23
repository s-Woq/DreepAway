import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';

export default function ProblemSection() {
  const { c } = useMarket();
  const { eyebrow, h2, leftTitle, left, rightTitle, right } = c.problem;

  return (
    <section className="bg-bone text-ink py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{eyebrow}</Reveal>
        <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-5xl">
          {h2}
        </Reveal>

        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-px bg-ink/10">
          <div className="bg-bone p-8 md:p-12">
            <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{leftTitle}</Reveal>
            <ul className="space-y-5">
              {left.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 0.05} className="flex items-baseline gap-4 text-lg md:text-xl font-light border-b border-ink/10 pb-4">
                  <span className="text-ink/30 text-xs tabular-nums">0{i + 1}</span>
                  <span>{t}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="bg-ink text-bone p-8 md:p-12">
            <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-bone/40 mb-8">{rightTitle}</Reveal>
            <ul className="space-y-5">
              {right.map((t, i) => (
                <Reveal as="li" key={t} delay={i * 0.05} className="flex items-baseline gap-4 text-lg md:text-xl font-light border-b border-bone/10 pb-4">
                  <span className="text-crimson text-xs tabular-nums">0{i + 1}</span>
                  <span>{t}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
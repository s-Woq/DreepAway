import Reveal from '@/components/Reveal';
import ArrowLink from '@/components/ArrowLink';
import { useMarket } from '@/i18n';

export default function HowItWorks({ withCta = true, dark = false }) {
  const { c, p } = useMarket();
  const { eyebrow, h2, steps, cta } = c.how;

  return (
    <section className={dark ? 'bg-ink text-bone py-28 md:py-40' : 'bg-bone text-ink py-28 md:py-40'}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div>
            <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-8">{eyebrow}</Reveal>
            <Reveal as="h2" className="font-display font-bold tracking-[-0.04em] leading-[0.95] text-[10vw] md:text-[6vw] max-w-3xl">
              {h2}
            </Reveal>
          </div>
        </div>

        <div>
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <div className="group grid grid-cols-12 items-baseline gap-4 md:gap-8 py-8 md:py-10 border-t border-current/10 last:border-b">
                <span className="col-span-2 md:col-span-1 text-crimson font-mono text-sm tracking-widest">{s.n}</span>
                <h3 className="col-span-10 md:col-span-4 font-display font-bold tracking-[-0.03em] text-3xl md:text-5xl transition-transform duration-300 group-hover:translate-x-2">{s.t}</h3>
                <p className="col-span-12 md:col-span-6 md:col-start-7 text-base md:text-lg font-light opacity-70 leading-relaxed">{s.d}</p>
                <span className="hidden md:block md:col-span-1 text-right opacity-30 transition-all duration-300 group-hover:opacity-100 group-hover:text-crimson">→</span>
              </div>
            </Reveal>
          ))}
        </div>

        {withCta && (
          <div className="mt-16">
            <ArrowLink to={p('how')} variant={dark ? 'light' : 'dark'}>{cta}</ArrowLink>
          </div>
        )}
      </div>
    </section>
  );
}
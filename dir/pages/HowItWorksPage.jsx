import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/sections/HowItWorks';
import QualitySection from '@/components/sections/QualitySection';
import SavingsCalculator from '@/components/sections/SavingsCalculator';
import FinalCTA from '@/components/sections/FinalCTA';
import Reveal from '@/components/Reveal';
import { useMarket } from '@/i18n';
import { urlFor, alternatesFor } from '@/i18n/routes';

export default function HowItWorksPage() {
  const { c, market } = useMarket();
  const m = c.meta.how;

  return (
    <>
      <Seo
        title={m.title}
        description={m.description}
        canonical={urlFor(market, 'how')}
        lang={c.lang}
        alternates={alternatesFor('how')}
        faq={m.faq}
      />
      <PageHero eyebrow={m.eyebrow} title={m.h1} intro={m.intro} />
      <HowItWorks withCta={false} />
      <QualitySection />
      <SavingsCalculator />

      <section className="bg-bone text-ink py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-8">{c.faqLabel}</Reveal>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {m.faq.map((f, i) => (
              <Reveal key={i} delay={i * 0.05} className="py-8 grid md:grid-cols-12 gap-6">
                <h3 className="md:col-span-5 font-display font-medium tracking-[-0.02em] text-xl md:text-2xl">{f.q}</h3>
                <p className="md:col-span-7 text-ink/65 font-light leading-relaxed text-lg">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
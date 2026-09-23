import Reveal from '@/components/Reveal';

export default function PageHero({ eyebrow, title, intro, dark = true }) {
  return (
    <section className={dark ? 'bg-ink text-bone' : 'bg-bone text-ink'} >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-44 pb-20 md:pb-28">
        <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-8">{eyebrow}</Reveal>
        <Reveal as="h1" className="font-display font-bold tracking-[-0.04em] leading-[0.92] text-[12vw] md:text-[7vw] max-w-5xl">
          {title}
        </Reveal>
        {intro && (
          <Reveal as="p" delay={0.1} className="mt-10 max-w-xl text-lg font-light leading-relaxed opacity-70">
            {intro}
          </Reveal>
        )}
      </div>
    </section>
  );
}
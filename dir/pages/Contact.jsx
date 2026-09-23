import { useState } from 'react';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { motion } from 'framer-motion';
import { useMarket } from '@/i18n';
import { urlFor, alternatesFor } from '@/i18n/routes';

export default function Contact() {
  const { c, market } = useMarket();
  const [sent, setSent] = useState(false);
  const t = c.contact;

  return (
    <>
      <Seo
        title={c.meta.contact.title}
        description={c.meta.contact.description}
        canonical={urlFor(market, 'contact')}
        lang={c.lang}
        alternates={alternatesFor('contact')}
      />
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <section className="bg-bone text-ink py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-6">{t.direct}</Reveal>
            <a href="mailto:hello@vetta.co" className="block font-display font-medium tracking-[-0.02em] text-3xl md:text-4xl hover:text-crimson transition-colors">hello@vetta.co</a>
            <Reveal as="p" className="mt-10 text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">{t.locationsLabel}</Reveal>
            <p className="text-ink/65 font-light leading-relaxed">
              {t.locations.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
            </p>
            <Reveal as="p" className="mt-10 text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">{t.responseLabel}</Reveal>
            <p className="text-ink/65 font-light">{t.response}</p>
          </div>

          <div className="md:col-span-7 md:pl-12 md:border-l md:border-ink/10">
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full flex flex-col justify-center">
                <p className="text-crimson text-[11px] tracking-[0.3em] uppercase mb-4">{t.sentLabel}</p>
                <h3 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-5xl leading-tight">{t.sentTitle}</h3>
                <p className="mt-6 text-ink/60 font-light text-lg max-w-md">{t.sentText}</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label={t.fields.name} name="name" />
                  <Field label={t.fields.email} name="email" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label={t.fields.company} name="company" />
                  <Field label={t.fields.roles} name="roles" />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">{t.fields.building}</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-ink/20 py-3 text-lg font-light focus:outline-none focus:border-crimson resize-none" />
                </div>
                <button type="submit" className="group inline-flex items-center justify-center gap-3 bg-ink text-bone px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-crimson transition-colors">
                  {t.submit} <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = 'text' }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">{label}</label>
      <input type={type} name={name} className="w-full bg-transparent border-b border-ink/20 py-3 text-lg font-light focus:outline-none focus:border-crimson" />
    </div>
  );
}
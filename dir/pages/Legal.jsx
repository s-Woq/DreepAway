import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

const CONTENT = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy.',
    lastUpdated: 'Last updated: September 2026',
    sections: [
      { h: 'What we collect', p: 'When you contact us through this website, we collect the information you provide directly — such as your name, work email, company, and the details of your request. We use it only to respond to your inquiry and to discuss potential staffing engagements.' },
      { h: 'How we use it', p: 'We do not sell or rent your personal information. We use the information you provide to respond to your request, and — where a working relationship is established — to operate that relationship. Basic, non-identifying analytics may be collected to understand how the site is used.' },
      { h: 'Your data', p: 'You can request access to, correction of, or deletion of the personal information you have shared with us by writing to the email address listed on our contact page.' },
      { h: 'Note', p: 'This summary is provided for general information and will be replaced with the final policy reviewed by counsel before launch.' },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Service.',
    lastUpdated: 'Last updated: September 2026',
    sections: [
      { h: 'Use of this website', p: 'This website provides information about our staffing services and lets you request a conversation with our team. Content, estimates, and figures presented — including savings calculations — are illustrative and do not constitute an offer, a quote, or a guarantee of results.' },
      { h: 'No guarantees of savings', p: 'Actual staffing costs and savings vary by role, seniority, compensation, benefits, employment structure, and other operating expenses. Any engagement is governed by its own written agreement, which prevails over anything on this website.' },
      { h: 'Note', p: 'These terms are provided for general information and will be replaced with the final terms reviewed by counsel before launch.' },
    ],
  },
};

export default function Legal({ mode }) {
  const data = CONTENT[mode] || CONTENT.privacy;

  return (
    <>
      <Seo
        title={`${data.title} — Vetta`}
        description="Legal information for the Vetta website."
        canonical={mode === 'terms' ? '/terms/' : '/privacy/'}
      />
      <PageHero eyebrow={data.eyebrow} title={data.title} />
      <section className="bg-bone text-ink py-20 md:py-28">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal as="p" className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-12">{data.lastUpdated}</Reveal>
          {data.sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.04} className="py-10 border-t border-ink/10">
              <h2 className="font-display font-bold tracking-[-0.03em] text-2xl md:text-3xl mb-4">{s.h}</h2>
              <p className="text-ink/65 font-light text-lg leading-relaxed">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
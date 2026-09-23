import { Link, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';

export default function IndustryDetail() {
  const { slug = 'your-industry' } = useParams();
  const title = slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return <>
    <Seo title={`${title} Talent`} description={`Explore skilled Peruvian talent for the ${title} industry.`} />
    <PageHero eyebrow="Industries" title={`${title} talent`} intro={`Build your ${title.toLowerCase()} team with experienced professionals in Peru.`} />
    <section className="bg-bone text-ink py-16"><div className="max-w-5xl mx-auto px-6">
      <p className="text-lg leading-relaxed text-ink/70">We help businesses find and onboard qualified professionals who can contribute from day one.</p>
      <Link className="inline-block mt-6 underline" to="/industries">Explore all industries</Link>
    </div></section>
    <FinalCTA />
  </>;
}

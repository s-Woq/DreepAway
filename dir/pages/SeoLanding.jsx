import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/sections/HowItWorks';
import SavingsCalculator from '@/components/sections/SavingsCalculator';
import FinalCTA from '@/components/sections/FinalCTA';

const labels = {
  'nearshore-staffing': ['Nearshore Staffing', 'Build a stronger team with skilled Peruvian professionals.'],
  'peruvian-talent': ['Peruvian Talent', 'Meet experienced professionals ready to work with your team.'],
  'outsourcing-peru': ['Outsourcing in Peru', 'Grow your business with reliable talent in Peru.'],
  'remote-staffing': ['Remote Staffing', 'Add trusted remote professionals to your team.'],
  'staff-augmentation': ['Staff Augmentation', 'Scale your team with carefully matched professionals.'],
  'nearshore-staffing-miami': ['Nearshore Staffing in Miami', 'Connect your Miami business with skilled Peruvian talent.'],
  'peruvian-talent': ['Peruvian Talent', 'Meet experienced professionals ready to work with your team.'],
  'remote-staffing-miami': ['Remote Staffing in Miami', 'Add trusted remote professionals to your Miami team.'],
  'staff-augmentation-miami': ['Staff Augmentation in Miami', 'Scale your Miami team with skilled professionals.'],
  'bilingual-talent-miami': ['Bilingual Talent in Miami', 'Build a stronger team with bilingual professionals.'],
  'talento-peruano': ['Talento peruano', 'Conoce profesionales peruanos preparados para crecer junto a tu equipo.'],
  'staffing-internacional': ['Staffing internacional', 'Amplía tu equipo con profesionales confiables en Perú.'],
  'contratacion-remota': ['Contratación remota', 'Integra profesionales remotos con experiencia a tu equipo.'],
};

export default function SeoLanding({ slug }) {
  const [title, intro] = labels[slug] || ['Peruvian talent for your team', 'Find the people and expertise your business needs.'];
  return <>
    <Seo title={title} description={intro} canonical={`/${slug}`} />
    <PageHero eyebrow="Build your team" title={title} intro={intro} />
    <HowItWorks withCta={false} dark />
    <SavingsCalculator />
    <FinalCTA />
  </>;
}

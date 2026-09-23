import Seo from '@/components/Seo';
import Hero from '@/components/sections/Hero';
import MiamiPeruTransition from '@/components/sections/MiamiPeruTransition';
import GlobalConnection from '@/components/sections/GlobalConnection';
import ProblemSection from '@/components/sections/ProblemSection';
import CostAdvantage from '@/components/sections/CostAdvantage';
import WhyPeru from '@/components/sections/WhyPeru';
import TalentSection from '@/components/sections/TalentSection';
import HowItWorks from '@/components/sections/HowItWorks';
import QualitySection from '@/components/sections/QualitySection';
import LanguagesSection from '@/components/sections/LanguagesSection';
import MiamiSection from '@/components/sections/MiamiSection';
import InternationalSection from '@/components/sections/InternationalSection';
import SavingsCalculator from '@/components/sections/SavingsCalculator';
import SocialProof from '@/components/sections/SocialProof';
import FinalCTA from '@/components/sections/FinalCTA';
import { useMarket } from '@/i18n';
import { urlFor, alternatesFor } from '@/i18n/routes';

export default function Home() {
  const { c, market } = useMarket();
  const m = c.meta.home;

  return (
    <>
      <Seo
        title={m.title}
        description={m.description}
        canonical={urlFor(market, 'home')}
        lang={c.lang}
        alternates={alternatesFor('home')}
      />
      <Hero />
      {c.connection.mode === 'miami' ? <MiamiPeruTransition /> : <GlobalConnection />}
      <ProblemSection />
      <CostAdvantage />
      <TalentSection />
      <WhyPeru />
      <HowItWorks />
      <QualitySection />
      <LanguagesSection />
      {market === 'us' ? <MiamiSection /> : <InternationalSection />}
      <SavingsCalculator />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import ProblemSection from '../components/homepage/ProblemSection';
import SolutionSection from '../components/homepage/SolutionSection';
import HowItWorksSection from '../components/homepage/HowItWorksSection';
import IndustryTabs from '../components/homepage/IndustryTabs';
import ObjectionHandling from '../components/homepage/ObjectionHandling';
import FinalCTA from '../components/homepage/FinalCTA';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <IndustryTabs />
      <ObjectionHandling />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
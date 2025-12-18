import React from 'react';
import Hero from '../../../components/home/Hero';
import LatestTuitionsSection from '../../../components/home/LatestTuitionsSection';
import LatestTutorsSection from '../../../components/home/LatestTutorsSection';
import HowItWorksSection from '../../../components/home/HowItWorksSection';
import WhyChooseUsSection from '../../../components/home/WhyChooseUsSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestTuitionsSection></LatestTuitionsSection>
      <LatestTutorsSection></LatestTutorsSection>
      <HowItWorksSection></HowItWorksSection>
      <WhyChooseUsSection></WhyChooseUsSection>
    </div>
  );
};

export default Home;

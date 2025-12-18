import React from 'react';
import Hero from '../../../components/home/Hero';
import LatestTuitionsSection from '../../../components/home/LatestTuitionsSection';
import LatestTutorsSection from '../../../components/home/LatestTutorsSection';
import HowItWorksSection from '../../../components/home/HowItWorksSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestTuitionsSection></LatestTuitionsSection>
      <LatestTutorsSection></LatestTutorsSection>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
};

export default Home;

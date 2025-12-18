import React from 'react';
import Hero from '../../../components/home/Hero';
import LatestTuitionsSection from '../../../components/home/LatestTuitionsSection';
import LatestTutorsSection from '../../../components/home/LatestTutorsSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestTuitionsSection></LatestTuitionsSection>
      <LatestTutorsSection></LatestTutorsSection>
    </div>
  );
};

export default Home;

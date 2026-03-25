import React from 'react';
import HeroSection from '../sections/HeroSection';
import Introduction from '../sections/Introduction';
import ServicesSection from '../sections/ServicesSection';
import FeaturedProperty from '../sections/FeaturedProperty';
import TestimonialsSection from '../sections/TestimonialsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Introduction />
      <ServicesSection />
      <FeaturedProperty />
      <TestimonialsSection />
    </>
  );
};

export default Home;

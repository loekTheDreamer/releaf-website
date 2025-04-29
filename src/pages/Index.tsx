
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import QuoteSection from '@/components/sections/QuoteSection';
import ProductSection from '@/components/sections/ProductSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MarketSection from '@/components/sections/MarketSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ProductSection />
      <FeaturesSection />
      <MarketSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;

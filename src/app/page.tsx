'use client';

import Navbar from '@/components/Navbar';

import GetInTouchSection from '@/components/sections/GetInTouchSection/GetInTouchSection';
import OurSolutionSection from '@/components/sections/OurSolutionSection';
import WhyTelcosSection from '@/components/sections/WhyTelcosSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection/HowItWorksSection';
import OurTeamSection from '@/components/sections/OurTeamSection/OurTeamSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection/HeroSection';
import TelcosAndUsersSection from '@/components/sections/TelcosAndUsersSection/TelcosAndUsersSection';
import TractionAndFeedbackSection from '@/components/sections/TractionAndFeedbackSection';
import CaroselSection from '@/components/sections/CaroselSection';
import FabCard from '@/components/FabCard';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <HeroSection />
      <WhyTelcosSection />
      <OurSolutionSection />
      <TelcosAndUsersSection />
      <HowItWorksSection />
      <OurTeamSection />
      <NewsletterSection />
      <TractionAndFeedbackSection />
      <CaroselSection />
      <GetInTouchSection />
      <FooterSection />
      <FabCard />
    </div>
  );
}

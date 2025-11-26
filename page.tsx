'use client';

import { useState, useEffect } from 'react';
import { Background } from '@/components/Background';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProcessSection } from '@/components/ProcessSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Background />

      <div className="relative z-10">
        <Navigation />
        <HeroSection mounted={mounted} />
        <ServicesSection />
        <TechStackSection />
        <ProcessSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

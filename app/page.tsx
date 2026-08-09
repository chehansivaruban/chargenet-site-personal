'use client';

import * as React from 'react';
import CapsuleHeader from '../components/CapsuleHeader';
import HeroSection from '../components/HeroSection';
import GridMissionSection from '../components/GridMissionSection';
import EvSolutionsSection from '../components/EvSolutionsSection';
import CinematicTransition from '../components/CinematicTransition';
import SriLankaCoverageSection from '../components/SriLankaCoverageSection';
import AppShowcaseSection from '../components/AppShowcaseSection';
import PartnerShowcase from '../components/PartnerShowcase';
import OriginTransition from '../components/OriginTransition';
import OriginShowcase from '../components/OriginShowcase';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Global Capsule Navigation Header */}
      <CapsuleHeader />

      {/* 2. Full Device Height Hero Layer */}
      <main className="relative w-full">
        <HeroSection />

        {/* 3. Grid Mission Statement (Full Device Height Cinematic Reveal) */}
        <GridMissionSection />

        {/* 4. Charging Solutions for EVs Section */}
        <EvSolutionsSection />

        {/* Cinematic Scene Transition (Light -> Dark) */}
        <CinematicTransition />

        {/* 5. Sri Lanka EV Charger Island-wide Coverage Map Section */}
        <SriLankaCoverageSection />

        {/* 6. ChargeNET Mobile Application Showcase Section */}
        <AppShowcaseSection />

        {/* 5. Creative Partner Showcase Network Grid & Marquee */}
        <PartnerShowcase />

        {/* Cinematic transition between Trust Network and Sri Lankan Origin */}
        <OriginTransition />

        {/* 6. Origin Showcase highlighting Sri Lankan Engineering and Design */}
        <OriginShowcase />

        {/* 7. Creative, highly modern Matchmaking Contact CTA */}
        <ContactCTA />
      </main>

      {/* 6. Corporate Minimalist Operations Footer */}
      <Footer />
    </div>
  );
}

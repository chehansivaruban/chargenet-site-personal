'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import HomeChargerHero from '../../components/HomeChargerHero';
import HomeChargerOverview from '../../components/HomeChargerOverview';
import HomeChargerBenefits from '../../components/HomeChargerBenefits';
import HomeChargerEnergyManagement from '../../components/HomeChargerEnergyManagement';
import HomeChargerProducts from '../../components/HomeChargerProducts';
import HomeChargerContactCTA from '../../components/HomeChargerContactCTA';

export default function HomeChargerPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 overflow-x-hidden antialiased font-sans flex flex-col">
      <CapsuleHeader />

      {/* Main body with light theme and stunning rounded/lifted elements */}
      <main className="flex-grow bg-black">
        {/* Hero component handles the image and overlay with custom bottom rounded/lifted frames */}
        <HomeChargerHero />
        
        {/* White container pulled up with negative margin, rounded top corners, and overlay shadow to reveal elegantly */}
        <div className="relative z-30 bg-white rounded-t-[32px] md:rounded-t-[54px] shadow-[0_-30px_60px_rgba(0,0,0,0.12)] -mt-10 md:-mt-14 overflow-hidden">
          <HomeChargerOverview />
          <HomeChargerBenefits />
          <HomeChargerEnergyManagement />
          <HomeChargerProducts />
          <HomeChargerContactCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import CommercialChargerHero from '../../components/CommercialChargerHero';
import CommercialChargerOverview from '../../components/CommercialChargerOverview';
import CommercialChargerBenefits from '../../components/CommercialChargerBenefits';
import CommercialChargerEnergyManagement from '../../components/CommercialChargerEnergyManagement';
import CommercialIndustrySolutions from '../../components/CommercialIndustrySolutions';
import CommercialProducts from '../../components/CommercialProducts';
import CommercialChargerContactCTA from '../../components/CommercialChargerContactCTA';

export default function CommercialChargerPage() {
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

      {/* Main body running from ambient dark background in the Hero */}
      <main className="flex-grow bg-black">
        {/* Dynamic enterprise landing hero */}
        <CommercialChargerHero />
        
        {/* White core body pulling up with negative margins to overlap the rounded container */}
        <div className="relative z-30 bg-white rounded-t-[32px] md:rounded-t-[54px] shadow-[0_-30px_60px_rgba(0,0,0,0.15)] -mt-10 md:-mt-14 overflow-hidden">
          {/* Main customized wording statement block */}
          <CommercialChargerOverview />
          
          {/* Integrated multi-card why implement overview */}
          <CommercialChargerBenefits />
          
          {/* High-contrast smart grid energy monitoring center */}
          <CommercialChargerEnergyManagement />
          
          {/* Interactive industry grid use cases */}
          <CommercialIndustrySolutions />
          
          {/* Product pricing hardware grids */}
          <CommercialProducts />

          {/* Enterprise booking and consulting form */}
          <CommercialChargerContactCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}

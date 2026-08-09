'use client';

import * as React from 'react';
import SriLankaCoverageSection from './SriLankaCoverageSection';
import AppShowcaseSection from './AppShowcaseSection';

export { SriLankaCoverageSection, AppShowcaseSection };

export default function DetailsShowcase() {
  return (
    <>
      <SriLankaCoverageSection />
      <AppShowcaseSection />
    </>
  );
}

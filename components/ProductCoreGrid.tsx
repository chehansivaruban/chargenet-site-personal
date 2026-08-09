'use client';

import * as React from 'react';
import GridMissionSection from './GridMissionSection';
import EvSolutionsSection from './EvSolutionsSection';

export { GridMissionSection, EvSolutionsSection };

export default function ProductCoreGrid() {
  return (
    <>
      <GridMissionSection />
      <EvSolutionsSection />
    </>
  );
}

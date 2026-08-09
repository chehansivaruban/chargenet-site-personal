'use client';

import * as React from 'react';
import IndustrySolutionView from '../../../components/IndustrySolutionView';
import { INDUSTRY_SECTOR_CONFIGS } from '../../../lib/industry-configs';

export default function MunicipalitiesIndustryPage() {
  const config = INDUSTRY_SECTOR_CONFIGS.municipalities;
  return <IndustrySolutionView config={config} />;
}

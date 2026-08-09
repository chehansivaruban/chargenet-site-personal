'use client';

import * as React from 'react';
import IndustrySolutionView from '../../../components/IndustrySolutionView';
import { INDUSTRY_SECTOR_CONFIGS } from '../../../lib/industry-configs';

export default function FuelStationsIndustryPage() {
  const config = INDUSTRY_SECTOR_CONFIGS['fuel-stations'];
  return <IndustrySolutionView config={config} />;
}

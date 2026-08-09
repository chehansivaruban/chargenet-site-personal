'use client';

import * as React from 'react';
import IndustrySolutionView from '../../../components/IndustrySolutionView';
import { INDUSTRY_SECTOR_CONFIGS } from '../../../lib/industry-configs';

export default function ParkingHubsIndustryPage() {
  const config = INDUSTRY_SECTOR_CONFIGS['parking-hubs'];
  return <IndustrySolutionView config={config} />;
}

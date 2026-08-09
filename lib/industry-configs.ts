import { SectorConfig } from '../components/IndustrySolutionView';
import { 
  Building, 
  Users, 
  LineChart, 
  Shield,
  ShieldCheck, 
  Zap, 
  Cpu, 
  Activity, 
  DollarSign, 
  Gauge, 
  Lock, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  MapPin, 
  Scale, 
  Globe2,
  Flame,
  Layers
} from 'lucide-react';

export const INDUSTRY_SECTOR_CONFIGS: Record<string, SectorConfig> = {
  apartments: {
    id: 'apartments',
    title: 'Apartments & Multi-Family',
    categoryTag: 'RESIDENTIAL REAL ESTATE INFRASTRUCTURE',
    subtitle: 'Intelligent multi-tenant residential charging hubs with automated sub-metering and dynamic load coordination.',
    heroDescription: 'Enhance tenant retention rates, boost property valuations, and eliminate electrical panel trip-outs with chargeNET’s multi-dwelling charging architecture. Our smart-metering software automatically splits utility costs per tenant, eliminating administrative friction for property management.',
    heroStats: [
      { label: '+18%', value: 'PROPERTY VALUE ADD', desc: 'Average valuation uplift for EV-equipped multi-tenant developments.' },
      { label: '100%', value: 'TENANT SUB-METERING', desc: 'Automated individual billing via mobile app and RFID tags.' },
      { label: '0 kW', value: 'GRID OVERLOAD RISK', desc: 'Dynamic load balancing prevents facility transformer trips.' }
    ],
    canvasType: 'apartments',
    bentoItems: [
      {
        title: 'Tenant Power Theft & Misuse',
        painPoint: 'Unmetered standard wall outlets lead to unassigned power theft and landlord utility loss.',
        solution: 'Encrypted RFID and Mobile App authentication locks chargers until tenant authorization.',
        metric: '100% SECURE ACCESS',
        icon: Lock
      },
      {
        title: 'Transformer Capacity Limits',
        painPoint: 'Simultaneous charging by multiple residents overloads building main circuit breakers.',
        solution: 'chargeNET Dynamic Load Balancing throttles and balances power output dynamically across active bays.',
        metric: '0 PANEL TRIPS',
        icon: Cpu
      },
      {
        title: 'Complex Expense Reconciliations',
        painPoint: 'Manually calculating individual tenant electricity consumption creates heavy management overhead.',
        solution: 'Automated OCPP cloud billing credits landlord bank accounts directly while emailing tenants monthly receipts.',
        metric: 'ZERO ADMIN OVERHEAD',
        icon: LineChart
      }
    ],
    architectureSpecs: [
      {
        category: 'Electrical & Power Sharing',
        specs: [
          { name: 'CHARGER CLASSIFICATION', value: 'Smart AC Level 2 (Single & 3-Phase Options)' },
          { name: 'RATED OUTPUT PER BAY', value: '7.4kW (32A 1-Phase) to 22kW (32A 3-Phase)' },
          { name: 'DYNAMIC LOAD SHARING', value: 'Real-time active load throttling via local gateway' },
          { name: 'SUB-METER ACCURACY', value: 'MID Certified Class 1 (+/- 1.0% precision)' }
        ]
      },
      {
        category: 'Network & Cloud Security',
        specs: [
          { name: 'OCPP COMPLIANCE', value: 'OCPP 1.6J & OCPP 2.0.1 Open Protocols' },
          { name: 'CONNECTIVITY STACK', value: 'Cellular 4G LTE Backup + Dual-Band Wi-Fi 6' },
          { name: 'TENANT AUTHENTICATION', value: 'NFC Tap-to-Charge, RFID Cards, Mobile App' },
          { name: 'SAFETY CERTIFICATION', value: 'CE, IP55 Weatherproof, IK10 Impact Resistance' }
        ]
      }
    ],
    simulator: {
      title: 'Multi-Family Parking Bay ROI & Load Calculator',
      subtitle: 'Adjust the site parameters below to estimate monthly revenue, power optimization, and recommended charger layouts for your residential complex.',
      slider1: { label: 'RESIDENTIAL PARKING BAYS', min: 10, max: 200, step: 5, default: 40, unit: 'Bays' },
      slider2: { label: 'DAILY EV RESIDENTS', min: 2, max: 100, step: 2, default: 16, unit: 'EVs' },
      slider3: { label: 'ELECTRICITY MARKUP TARIFF', min: 5, max: 40, step: 1, default: 18, unit: 'Rs./kWh' },
      calculate: (bays, evs, markup) => {
        const avgDailyKwhPerEv = 18; // kWh
        const monthlyKwh = evs * avgDailyKwhPerEv * 30;
        const monthlyRevenue = monthlyKwh * markup;
        const peakPowerSaved = Math.round(evs * 7.4 * 0.45); // kW load balancing savings
        const netUpliftValuation = Math.round(bays * 185000); // LKR

        return {
          metric1: {
            label: 'PROJECTED MONTHLY REVENUE',
            value: `Rs. ${monthlyRevenue.toLocaleString()}`,
            sub: `Based on ${monthlyKwh.toLocaleString()} kWh tenant monthly consumption.`
          },
          metric2: {
            label: 'PEAK TRANSFORMER SAVINGS',
            value: `${peakPowerSaved} kW`,
            sub: 'Prevented peak load demand through dynamic current throttling.'
          },
          metric3: {
            label: 'ESTIMATED PROPERTY VALUATION UPLIFT',
            value: `Rs. ${(netUpliftValuation / 1000000).toFixed(2)} Million`,
            sub: 'Long-term equity enhancement for EV-ready residential buildings.'
          },
          recommendation: `Recommended Layout: ${Math.ceil(evs * 0.8)}x Level 2 Charger (3 Phase) + ${Math.ceil(evs * 0.2)}x Level 2 Charger (Home/Commercial) with chargeNET Cluster Master Balancer.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'l2-home',
        name: 'Level 2 Charger - Home / Commercial',
        power: '7.4kW / 32A',
        imageSrc: '/chargers/home/L2_66kw.png',
        badge: 'TENANT FAVORITE',
        shortDesc: 'Compact wall-mounted smart AC charger with RFID tap and mobile app integration.',
        slug: 'level-2-charger-home-commercial'
      },
      {
        id: 'l2-3phase',
        name: 'Level 2 Charger - 3 Phase',
        power: '22kW / 32A 3P',
        imageSrc: '/chargers/home/L2_3phase.png',
        badge: 'FAST RESIDENTIAL',
        shortDesc: 'High-speed 22kW three-phase charging station for multi-car underground garages.',
        slug: 'level-2-charger-3-phase'
      },
      {
        id: 'next-gen',
        name: 'Next Gen Smart Charger',
        power: '11kW - 22kW',
        imageSrc: '/chargers/home/next_gen.png',
        badge: 'ADVANCED TELEMETRY',
        shortDesc: 'Sleek architectural display unit with built-in sub-metering and dynamic load balancer.',
        slug: 'next-gen-smart-charger'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Site Inspection & Grid Audit', desc: 'Our electrical engineers inspect your building main distribution board, transformer headroom, and cable conduit routes.' },
      { step: '02', title: 'Power Balancing Design', desc: 'We draft a single-line diagram (SLD) incorporating chargeNET Dynamic Load Balancing to prevent breaker trips.' },
      { step: '03', title: 'Mounting & Wiring', desc: 'Certified technicians install wall plates or pedestals, fire-rated conduit, and heavy-duty IP55 chargers.' },
      { step: '04', title: 'Tenant Portal Activation', desc: 'Residents download the chargeNET mobile app or swipe RFID cards. Automated monthly payouts begin.' }
    ],
    faqs: [
      { question: 'How does billing work for tenants in apartment buildings?', answer: 'Tenants register their chargeNET app or RFID key tag. Every kWh charged is billed directly to the tenant’s card or pre-paid wallet, and funds are disbursed automatically to the apartment management committee or landlord.' },
      { question: 'Will installing 10+ chargers trip our main building breaker?', answer: 'No. chargeNET Dynamic Load Balancing monitors the total building power consumption in real-time. If residents turn on air conditioners or elevators, the chargers automatically lower their current draw, then ramp back up during off-peak hours.' }
    ]
  },

  automotive: {
    id: 'automotive',
    title: 'Automotive Showrooms & Service Bays',
    categoryTag: 'DEALERSHIP & FLEET PREPARATION',
    subtitle: 'Rapid fleet preparation terminals and high-voltage demonstrator charging hubs for automotive dealerships.',
    heroDescription: 'Deliver flawless vehicle handovers, ensure demonstrator electric fleets are always fully charged for test drives, and equip service bays with high-voltage diagnostic power. chargeNET provides dual-connector rapid DC chargers and sleek Level 2 units engineered for automotive showrooms.',
    heroStats: [
      { label: '80 kW', value: 'RAPID DC OUTPUT', desc: 'Fast top-up from 20% to 80% in under 20 minutes.' },
      { label: '< 15 Mins', value: 'HANDOVER PREP TIME', desc: 'Zero client waiting time during new electric vehicle handovers.' },
      { label: '100%', value: 'MULTI-BRAND COMPLIANCE', desc: 'Compatible with CCS2, GB/T, and Type 2 electric vehicles.' }
    ],
    canvasType: 'automotive',
    bentoItems: [
      {
        title: 'Slow Handover Bottlenecks',
        painPoint: 'Delivering new electric cars to customers with low battery creates poor client impressions.',
        solution: 'High-output 80kW DC Fast Chargers top up vehicles rapidly before client arrival.',
        metric: 'INSTANT PREPARATION',
        icon: Zap
      },
      {
        title: 'Multi-Standard Connector Confusion',
        painPoint: 'Dealerships carrying diverse imports struggle with incompatible charger plug types.',
        solution: 'Dual CCS2 and GB/T connector configurations ensure universal showroom compatibility.',
        metric: 'DUAL PROTOCOL READY',
        icon: ShieldCheck
      },
      {
        title: 'Service Bay Diagnostic Power',
        painPoint: 'High-voltage EV servicing requires stable continuous voltage without voltage sags.',
        solution: 'Regulated DC power output ensures safe firmware flashes and diagnostic routines.',
        metric: 'DIAGNOSTIC CERTIFIED',
        icon: Gauge
      }
    ],
    architectureSpecs: [
      {
        category: 'High-Voltage DC Performance',
        specs: [
          { name: 'CHARGER CLASS', value: 'Ultra-Fast DC Commercial / Level 2 AC' },
          { name: 'POWER OUTPUT RANGE', value: '22kW to 80kW High-Efficiency DC' },
          { name: 'PEAK EFFICIENCY', value: '> 96% Energy Conversion Efficiency' },
          { name: 'CONNECTOR TYPES', value: 'Dual CCS2 + GB/T Heavy Duty Liquid-Cooled Ready' }
        ]
      },
      {
        category: 'Control & Safety Standards',
        specs: [
          { name: 'INSULATION MONITORING', value: 'Integrated High-Voltage Ground Fault Sensor' },
          { name: 'ENCLOSURE PROTECTION', value: 'IP55 Outdoor Waterproofing & Heavy Steel Chassis' },
          { name: 'COMMUNICATION GATEWAY', value: 'Dual SIM 4G LTE + Industrial Ethernet' },
          { name: 'DISPLAY INTERFACE', value: '7-inch High-Brightness Sunlight Readable Touch Screen' }
        ]
      }
    ],
    simulator: {
      title: 'Showroom Fleet Prep & Test-Drive Calculator',
      subtitle: 'Simulate vehicle prep throughput, test-drive turnaround times, and energy consumption for your dealership.',
      slider1: { label: 'DEMONSTRATOR & FLEET CARS', min: 2, max: 40, step: 2, default: 12, unit: 'Vehicles' },
      slider2: { label: 'DAILY CLIENT TEST DRIVES', min: 5, max: 80, step: 5, default: 30, unit: 'Drives' },
      slider3: { label: 'AVERAGE TOP-UP REQUIRED', min: 20, max: 80, step: 5, default: 40, unit: '% Battery' },
      calculate: (cars, drives, topup) => {
        const avgBatteryKwh = 60;
        const totalEnergyDaily = Math.round(drives * (avgBatteryKwh * (topup / 100)));
        const minutesSavedPerCar = 45; // vs standard slow charger
        const totalHoursSavedDaily = Math.round((drives * minutesSavedPerCar) / 60);

        return {
          metric1: {
            label: 'DAILY ENERGY DELIVERED',
            value: `${totalEnergyDaily.toLocaleString()} kWh`,
            sub: `Total energy supplied to demonstrator fleet per day.`
          },
          metric2: {
            label: 'HANDOVER TIME SAVINGS',
            value: `${totalHoursSavedDaily} Hours / Day`,
            sub: 'Eliminated delay during client deliveries and vehicle test drives.'
          },
          metric3: {
            label: 'FLEET READY INDEX',
            value: '99.4%',
            sub: 'Percentage of time demonstrator cars are above 80% charge.'
          },
          recommendation: `Recommended Setup: 1x CD 80 DC Fast Charger (80kW) for prep bay + 2x Voltmotive GBT / L2 Charger for showroom floor display.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'cd80-dc',
        name: 'CD 80 DC Fast Charger',
        power: '80kW Ultra DC',
        imageSrc: '/chargers/commercial/cd80.png',
        badge: 'SHOWROOM FLAGSHIP',
        shortDesc: 'Ultra-fast 80kW DC charger with dual CCS2 connectors for rapid showroom prep bays.',
        slug: 'cd-80-dc-fast-charger'
      },
      {
        id: 'voltmotive-gbt',
        name: 'Voltmotive GBT / L2 Charger',
        power: '22kW Dual Output',
        imageSrc: '/chargers/commercial/VOLTMOTIVE-2-1.png',
        badge: 'SHOWROOM DISPLAY',
        shortDesc: 'Sleek floor-standing pedestal charger designed for high-end vehicle display floors.',
        slug: 'voltmotive-gbt-l2-charger'
      },
      {
        id: 'fast-single',
        name: 'Fast Charger - Single Port',
        power: '30kW - 60kW DC',
        imageSrc: '/chargers/commercial/fast-charger.257.png',
        badge: 'SERVICE BAY',
        shortDesc: 'Compact DC fast charger ideal for dealership service centers and maintenance bays.',
        slug: 'fast-charger-single-port'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Dealership Bay Survey', desc: 'We evaluate customer handover bays, service center electrical boards, and showroom floor layout.' },
      { step: '02', title: 'High-Voltage Engineering', desc: 'Design dedicated sub-metering and surge protection tailored to automotive OEM warranty guidelines.' },
      { step: '03', title: 'Precision Installation', desc: 'Mount pedestals, run shielded heavy-gauge cabling, and install liquid-cooled or air-cooled rapid chargers.' },
      { step: '04', title: 'Staff Training & Commissioning', desc: 'Train showroom advisors and service technicians on rapid charging procedures and safety protocols.' }
    ],
    faqs: [
      { question: 'Can these chargers support both European CCS2 and Chinese GB/T electric vehicles?', answer: 'Yes! Our CD 80 and Voltmotive range can be configured with dual cables (CCS2 + GB/T) so your dealership can charge any import or local brand without adapters.' },
      { question: 'Is 80kW DC safe for new vehicle battery conditioning?', answer: 'Absolutely. The charger communicates via OCPP and ISO 15188 / GB protocols directly with the vehicle Battery Management System (BMS), ensuring precise current negotiation and battery temperature protection.' }
    ]
  },

  municipalities: {
    id: 'municipalities',
    title: 'Cities & Municipalities',
    categoryTag: 'CIVIC & URBAN CLEAN TRANSIT',
    subtitle: 'Weather-hardened, public-proof curbside charging infrastructure designed for modern civic urban planning.',
    heroDescription: 'Accelerate city-wide decarbonization, support public electric transit, and generate municipal tariff revenue with chargeNET public charging networks. Built with IK10 vandal-proof enclosures and IP55 weatherproofing to withstand tropical salt spray, heavy rains, and urban wear.',
    heroStats: [
      { label: 'IK10', value: 'VANDAL PROOF SHIELD', desc: 'Heavy gauge steel casing engineered for high-traffic public spaces.' },
      { label: '99.8%', value: 'PUBLIC NETWORK UPTIME', desc: '24/7 automated telemetry monitoring and remote reset capability.' },
      { label: '100%', value: 'OPEN OCPP 2.0.1', desc: 'Interoperable with national civic mobility portals and billing gateways.' }
    ],
    canvasType: 'municipalities',
    bentoItems: [
      {
        title: 'Public Vandalism & Extreme Weather',
        painPoint: 'Standard plastic chargers break easily under public abuse or coastal salt corrosion.',
        solution: 'IK10 impact-rated stainless steel chassis with IP55 dust and rain shielding.',
        metric: 'MAXIMUM HARDENING',
        icon: Shield
      },
      {
        title: 'Proprietary Vendor Lock-In',
        painPoint: 'Cities getting stuck with closed networks that charge high software license fees.',
        solution: 'Open OCPP 1.6J/2.0.1 protocol allows municipalities to choose any backend management software.',
        metric: '100% OPEN ARCHITECTURE',
        icon: Globe2
      },
      {
        title: 'Complex Citizen Payments',
        painPoint: 'Requiring citizens to download proprietary mobile apps deters casual usage.',
        solution: 'Contactless NFC card readers, Apple Pay, Google Pay, and QR code web portals.',
        metric: 'UNIVERSAL TAP-TO-PAY',
        icon: DollarSign
      }
    ],
    architectureSpecs: [
      {
        category: 'Public Infrastructure Specs',
        specs: [
          { name: 'IMPACT RATING', value: 'IK10 Vandal-Proof Steel Reinforcement' },
          { name: 'INGRESS PROTECTION', value: 'IP55 Weatherproof (Salt Spray & Heavy Rain Certified)' },
          { name: 'OPERATING TEMPERATURE', value: '-25°C to +55°C Tropicalized' },
          { name: 'CABLE RETRACTION SYSTEM', value: 'Counter-Weighted Heavy Duty Overhead Cable Suspender' }
        ]
      },
      {
        category: 'Municipal Gateway & Billing',
        specs: [
          { name: 'PAYMENT INTEGRATION', value: 'Contactless Credit/Debit Card, Mobile App, RFID, QR' },
          { name: 'TELEMETRY MODEM', value: 'Dual 4G LTE Modems with Failover Mesh Wi-Fi' },
          { name: 'OCPP PROTOCOL', value: 'OCPP 1.6J / OCPP 2.0.1 with Smart Charging Profile' },
          { name: 'CIVIC DASHBOARD', value: 'Real-time CO2 offset, kWh usage logs, revenue reports' }
        ]
      }
    ],
    simulator: {
      title: 'Curbside Network Revenue & CO2 Offset Engine',
      subtitle: 'Calculate civic tariff revenue, carbon footprint reduction, and citizen utilization rates for municipal deployments.',
      slider1: { label: 'PUBLIC CHARGING STATIONS', min: 5, max: 200, step: 5, default: 25, unit: 'Stations' },
      slider2: { label: 'DAILY SESSIONS PER STATION', min: 2, max: 20, step: 1, default: 8, unit: 'Sessions' },
      slider3: { label: 'CIVIC CHARGING TARIFF', min: 60, max: 200, step: 5, default: 110, unit: 'Rs./kWh' },
      calculate: (stations, sessions, tariff) => {
        const avgSessionKwh = 22; // kWh
        const totalDailyKwh = stations * sessions * avgSessionKwh;
        const annualKwh = totalDailyKwh * 365;
        const annualRevenue = annualKwh * tariff;
        const co2SavedTons = Math.round((annualKwh * 0.72) / 1000); // 0.72 kg CO2 per kWh vs petrol

        return {
          metric1: {
            label: 'ANNUAL MUNICIPAL TARIFF REVENUE',
            value: `Rs. ${(annualRevenue / 1000000).toFixed(2)} Million`,
            sub: `Generated from ${annualKwh.toLocaleString()} kWh public energy sales.`
          },
          metric2: {
            label: 'ANNUAL CO2 EMISSIONS REDUCTION',
            value: `${co2SavedTons.toLocaleString()} Metric Tons`,
            sub: 'Direct clean air impact for urban citizenry.'
          },
          metric3: {
            label: 'ESTIMATED CITIZEN EV COVERAGE',
            value: `${(stations * sessions * 2.4).toFixed(0)} Drivers / Day`,
            sub: 'Daily electric vehicle users served by network.'
          },
          recommendation: `Recommended Strategy: Deploy ${Math.ceil(stations * 0.6)}x Fast Charger Dual Port (Public DC) + ${Math.ceil(stations * 0.4)}x Level 2 Charger 3-Phase for civic parking lots.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'fast-dual',
        name: 'Fast Charger - Dual Port',
        power: '60kW - 120kW Dual DC',
        imageSrc: '/chargers/commercial/fast-charger.258.png',
        badge: 'PUBLIC HUB CHOICE',
        shortDesc: 'Dual-port ultra-fast DC charger built for public curbside and municipal transit hubs.',
        slug: 'fast-charger-dual-port'
      },
      {
        id: 'fast-single-muni',
        name: 'Fast Charger - Single Port',
        power: '30kW - 60kW DC',
        imageSrc: '/chargers/commercial/fast-charger.257.png',
        badge: 'CIVIC EXPRESS',
        shortDesc: 'Weather-hardened single port DC fast charger for municipal vehicle fleets and city plazas.',
        slug: 'fast-charger-single-port'
      },
      {
        id: 'l2-3phase-muni',
        name: 'Level 2 Charger - 3 Phase',
        power: '22kW AC Dual',
        imageSrc: '/chargers/home/L2_3phase.png',
        badge: 'CURBSIDE STANDBY',
        shortDesc: 'Robust 22kW three-phase AC unit for long-dwell public parking zones.',
        slug: 'level-2-charger-3-phase'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Civic Master Plan & Grid Audit', desc: 'Mapping high-demand urban corridors, public parking structures, and transformer proximity.' },
      { step: '02', title: 'Utility & Permit Approvals', desc: 'Filing electrical permits with CEB / LECO and securing municipal road authority approvals.' },
      { step: '03', title: 'Civic Infrastructure Works', desc: 'Concrete pad pouring, bollards installation, heavy underground ducting, and charger mounting.' },
      { step: '04', title: 'Open Software Integration', desc: 'Connecting chargers to municipal billing platforms and Google Maps / PlugShare indexes.' }
    ],
    faqs: [
      { question: 'Are these public chargers resistant to heavy monsoons and coastal salt air?', answer: 'Yes. All chargeNET municipal chargers are rated IP55 waterproofing and housed in powder-coated marine-grade stainless steel with anti-corrosion sealing.' },
      { question: 'Can the municipality set custom tariffs for off-peak hours?', answer: 'Absolutely. The central cloud portal allows city managers to configure dynamic time-of-use tariffs, offering discounted rates during night hours to encourage off-peak charging.' }
    ]
  },

  retail: {
    id: 'retail',
    title: 'Retail & Hospitality Centers',
    categoryTag: 'COMMERCIAL VENUES & HOTELS',
    subtitle: 'Convert parking slots into high-yield amenities that extend guest dwell times and boost on-site consumer spending.',
    heroDescription: 'Attract affluent electric vehicle drivers to your shopping centers, luxury hotels, resorts, and restaurants. EV drivers actively seek out venues with charging capabilities, staying significantly longer and spending more per visit while their vehicle tops up.',
    heroStats: [
      { label: '+48 Mins', value: 'DWELL TIME EXTENSION', desc: 'Average increase in guest stay time while charging on-site.' },
      { label: '3.2x', value: 'HIGHER VENUE SPEND', desc: 'EV owners spend more on dining, retail, and hospitality.' },
      { label: '100%', value: 'MAP VISIBILITY', desc: 'Automatic listing on Google Maps, Apple Maps, and PlugShare.' }
    ],
    canvasType: 'retail',
    bentoItems: [
      {
        title: 'Short Visit Cut-Offs',
        painPoint: 'Guests leaving early due to battery range anxiety before finishing shopping or dining.',
        solution: 'Fast charging amenities give guests peace of mind to extend their stays by 45+ minutes.',
        metric: '+45 MINS EXTENSION',
        icon: Clock
      },
      {
        title: 'Ugly Industrial Aesthetics',
        painPoint: 'Bulky industrial charging boxes ruining the high-end architectural look of luxury hotels.',
        solution: 'Scandinavian minimalist chassis with customizable brand colors and LED halo status rings.',
        metric: 'LUXURY DESIGN MATCH',
        icon: Sparkles
      },
      {
        title: 'Zero Search Map Visibility',
        painPoint: 'Venues without EV charging missing out on high-income travelers searching for hotel chargers.',
        solution: 'Automatic sync with global EV navigation indexes puts your hotel directly on the map.',
        metric: 'GLOBAL MAP EXPOSURE',
        icon: MapPin
      }
    ],
    architectureSpecs: [
      {
        category: 'Hospitality Architecture Specs',
        specs: [
          { name: 'CHARGER DESIGN', value: 'Sleek Minimalist Pedestal / Wall Mount' },
          { name: 'POWER OPTIONS', value: '22kW Fast AC + 30kW - 60kW Destination DC' },
          { name: 'STATUS INDICATORS', value: 'Multi-Color 360-Degree LED Ambient Ring' },
          { name: 'DISPLAY BRANDING', value: 'Custom Hotel / Mall Logo Screen Wrap Available' }
        ]
      },
      {
        category: 'Loyalty & Revenue Sync',
        specs: [
          { name: 'GUEST BILLING MODES', value: 'Free Complementary for VIPs, Tariff for Public' },
          { name: 'LOYALTY APP INTEGRATION', value: 'Redeem hotel points or shopping vouchers for charging' },
          { name: 'PAYMENT GATEWAY', value: 'Direct QR Code, NFC Card, Room Billing Integration' },
          { name: 'OCPP COMPLIANCE', value: 'OCPP 1.6J / 2.0.1 Open Cloud Connectivity' }
        ]
      }
    ],
    simulator: {
      title: 'Retail Dwell-Time & Revenue Multiplier',
      subtitle: 'Calculate how EV charging amenities increase visitor dwell time, secondary retail spending, and direct charging revenue.',
      slider1: { label: 'MALL / HOTEL PARKING CAPACITY', min: 20, max: 500, step: 10, default: 80, unit: 'Bays' },
      slider2: { label: 'CHARGING STATIONS INSTALLED', min: 2, max: 40, step: 2, default: 8, unit: 'Chargers' },
      slider3: { label: 'AVERAGE VISITOR SPEND', min: 1500, max: 20000, step: 500, default: 6000, unit: 'Rs./Hour' },
      calculate: (capacity, chargers, hourlySpend) => {
        const dailyEvVisitors = chargers * 5.2; // average 5.2 sessions per day
        const extraDwellHours = 0.8; // 48 minutes
        const extraRetailSpendMonthly = Math.round(dailyEvVisitors * (hourlySpend * extraDwellHours) * 30);
        const directChargingRevenueMonthly = Math.round(dailyEvVisitors * 25 * 30 * 25); // 25kWh @ 25Rs margin

        return {
          metric1: {
            label: 'PROJECTED EXTRA RETAIL SPEND / MO',
            value: `Rs. ${(extraRetailSpendMonthly / 100000).toFixed(2)} Lakhs`,
            sub: 'Secondary venue revenue generated by extended guest dwell time.'
          },
          metric2: {
            label: 'DIRECT CHARGING REVENUE / MO',
            value: `Rs. ${directChargingRevenueMonthly.toLocaleString()}`,
            sub: 'Direct profit from charging session fees.'
          },
          metric3: {
            label: 'MONTHLY EV VISITOR DRAW',
            value: `${Math.round(dailyEvVisitors * 30).toLocaleString()} Drivers`,
            sub: 'High-income EV owners attracted specifically by charging.'
          },
          recommendation: `Recommended Configuration: 2x Fast Charger Single Port (30kW Destination DC) + ${chargers - 2}x Level 2 Charger 3-Phase with Custom Hotel Branding.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'l2-3phase-retail',
        name: 'Level 2 Charger - 3 Phase',
        power: '22kW / 32A 3P',
        imageSrc: '/chargers/home/L2_3phase.png',
        badge: 'HOTEL FAVORITE',
        shortDesc: 'Sleek 22kW fast AC station engineered for overnight hotel guest parking and VIP bays.',
        slug: 'level-2-charger-3-phase'
      },
      {
        id: 'fast-single-retail',
        name: 'Fast Charger - Single Port',
        power: '30kW - 60kW DC',
        imageSrc: '/chargers/commercial/fast-charger.257.png',
        badge: 'RETAIL EXPRESS',
        shortDesc: 'Compact destination DC fast charger ideal for 45-minute shopping mall visits.',
        slug: 'fast-charger-single-port'
      },
      {
        id: 'next-gen-retail',
        name: 'Next Gen Smart Charger',
        power: '11kW - 22kW',
        imageSrc: '/chargers/home/next_gen.png',
        badge: 'ARCHITECTURAL',
        shortDesc: 'Premium display charger with ambient halo light ring matching luxury hotel aesthetics.',
        slug: 'next-gen-smart-charger'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Hospitality Layout Audit', desc: 'Evaluating hotel valet parking, VIP entryways, or shopping mall parking structures.' },
      { step: '02', title: 'Custom Branding & Design', desc: 'Customizing charger casing colors, screen graphics, and LED lighting to align with your venue branding.' },
      { step: '03', title: 'Turnkey Installation', desc: 'Discreet, noise-free mounting and wiring performed with zero disturbance to hotel or mall guests.' },
      { step: '04', title: 'Global Map Indexing', desc: 'Publishing your venue location on Google Maps, Tesla navigation, Apple Maps, and PlugShare.' }
    ],
    faqs: [
      { question: 'Can we offer free charging for hotel guests while charging public visitors a fee?', answer: 'Yes! The chargeNET platform allows you to issue VIP promo codes or RFID keycards to hotel guests for free charging, while outside visitors pay standard commercial rates via QR code or app.' },
      { question: 'How long does a typical retail charger take to charge a car?', answer: 'Our 22kW AC units add about 100km of range in 1.5 hours (ideal for dining or movies), while our 30-60kW DC fast chargers top up 80% battery in 30-45 minutes (ideal for shopping).' }
    ]
  },

  'fuel-stations': {
    id: 'fuel-stations',
    title: 'Fuel Stations & CPOs',
    categoryTag: 'HIGH-THROUGHPUT ENERGY HUBS',
    subtitle: 'High-throughput ultra-fast DC charging hubs for petrol stations and charge point operators (CPOs).',
    heroDescription: 'Transform traditional fuel stations into modern multi-energy hubs. Capture growing EV driver market share with ultra-fast liquid-cooled DC dispensers capable of delivering 100km of driving range in under 10 minutes.',
    heroStats: [
      { label: '240 kW', value: 'ULTRA DC POWER', desc: 'Blistering-fast multi-vehicle charging throughput.' },
      { label: '< 10 Mins', value: '100KM RANGE ADDITION', desc: 'Equivalent turnover speed to traditional liquid fuel pumps.' },
      { label: 'DUAL CCS2', value: 'SPLIT POWER DISPENSING', desc: 'Charge two vehicles simultaneously with dynamic load splitting.' }
    ],
    canvasType: 'fuel-stations',
    bentoItems: [
      {
        title: 'Long Queue Delays',
        painPoint: 'Slow chargers cause parking chaos and long queues at high-traffic fuel stations.',
        solution: 'Ultra-fast 120kW+ DC power dispenses energy rapidly to maximize bay turnover.',
        metric: '10-MIN TURNOVER',
        icon: Gauge
      },
      {
        title: 'High Thermal Heat Under Continuous Load',
        painPoint: 'Continuous back-to-back fast charging causes chargers to overheat and derate power output.',
        solution: 'Advanced liquid-cooled cable technology keeps power throughput consistently at max.',
        metric: '0 THERMAL DERATING',
        icon: Flame
      },
      {
        title: 'Revenue Leakage & Billing Sags',
        painPoint: 'Disconnected payment terminals causing failed billing transactions during peak hours.',
        solution: 'Integrated credit card terminals with 4G LTE cellular redundancy ensure 100% payout captures.',
        metric: '100% REVENUE CAPTURE',
        icon: DollarSign
      }
    ],
    architectureSpecs: [
      {
        category: 'Ultra-Fast DC Engineering',
        specs: [
          { name: 'DISPENSER CLASS', value: 'Ultra-Fast Liquid-Cooled DC Dispenser' },
          { name: 'POWER OUTPUT RANGE', value: '80kW to 240kW Modular Scalable' },
          { name: 'VOLTAGE OUTPUT', value: '200V to 1000V DC (Supports 800V Architecture)' },
          { name: 'OUTLET CONFIGURATION', value: 'Dual CCS2 / CHAdeMO / GB-T Concurrent Split' }
        ]
      },
      {
        category: 'CPO Network & Monetization',
        specs: [
          { name: 'PAYMENT TERMINAL', value: 'EMV Certified Contactless Credit/Debit Card Reader' },
          { name: 'OCPP COMPLIANCE', value: 'OCPP 2.0.1 with Smart Charging & Tariff Engine' },
          { name: 'PROTECTION SHIELD', value: 'Surge Protection Device (SPD) Class II + Isolation Transformer' },
          { name: 'UDA DASHBOARD', value: 'Real-time telemetry, revenue reports, automated settlement' }
        ]
      }
    ],
    simulator: {
      title: 'CPO Throughput & Revenue Engine',
      subtitle: 'Simulate daily energy throughput, gross profit margins, and dispenser turnover for your service station hub.',
      slider1: { label: 'DUAL-PORT ULTRA FAST DISPENSERS', min: 1, max: 10, step: 1, default: 3, unit: 'Dispensers' },
      slider2: { label: 'DAILY CARS SERVICED PER PORT', min: 5, max: 40, step: 5, default: 20, unit: 'Cars/Port' },
      slider3: { label: 'PROFIT MARGIN PER KWH', min: 10, max: 50, step: 2, default: 22, unit: 'Rs./kWh' },
      calculate: (dispensers, cars, margin) => {
        const totalPorts = dispensers * 2;
        const totalDailyCars = totalPorts * cars;
        const avgSessionKwh = 35; // kWh
        const totalDailyKwh = totalDailyCars * avgSessionKwh;
        const monthlyProfit = Math.round(totalDailyKwh * margin * 30);

        return {
          metric1: {
            label: 'PROJECTED MONTHLY GROSS MARGIN',
            value: `Rs. ${(monthlyProfit / 100000).toFixed(2)} Lakhs`,
            sub: `Based on ${totalDailyKwh.toLocaleString()} kWh monthly energy dispensed.`
          },
          metric2: {
            label: 'DAILY VEHICLES SERVED',
            value: `${totalDailyCars} EVs / Day`,
            sub: `High-turnover throughput across ${totalPorts} active ports.`
          },
          metric3: {
            label: 'AVERAGE DISPENSE SPEED',
            value: '12 Minutes',
            sub: 'Rapid top-up time per vehicle.'
          },
          recommendation: `Recommended Hub Setup: ${dispensers}x Fast Charger Dual Port (120kW DC) + 1x CD 80 DC Fast Charger with Dedicated Substation Transformer.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'fast-dual-cpo',
        name: 'Fast Charger - Dual Port',
        power: '60kW - 120kW Dual DC',
        imageSrc: '/chargers/commercial/fast-charger.258.png',
        badge: 'CPO WORKHORSE',
        shortDesc: 'Ultra-fast dual-port DC charger built for continuous high-turnover fuel station hubs.',
        slug: 'fast-charger-dual-port'
      },
      {
        id: 'cd80-cpo',
        name: 'CD 80 DC Fast Charger',
        power: '80kW Ultra DC',
        imageSrc: '/chargers/commercial/cd80.png',
        badge: 'RAPID DISPENSER',
        shortDesc: 'Heavy-duty 80kW DC fast charger engineered for highway fuel stops.',
        slug: 'cd-80-dc-fast-charger'
      },
      {
        id: 'voltmotive-cpo',
        name: 'Voltmotive GBT / L2 Charger',
        power: '22kW Dual Output',
        imageSrc: '/chargers/commercial/VOLTMOTIVE-2-1.png',
        badge: 'CONVENIENCE BAY',
        shortDesc: 'Dual AC charger for auxiliary convenience store parking bays.',
        slug: 'voltmotive-gbt-l2-charger'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Station Transformer Audit', desc: 'Evaluating electrical grid capacity, dedicated transformer requirements, and safety clearances.' },
      { step: '02', title: 'Civil & Foundation Works', desc: 'Pouring heavy concrete islands, running underground high-voltage conduits, and canopy lighting.' },
      { step: '03', title: 'Dispenser Mounting & Wiring', desc: 'Installing ultra-fast DC dispensers, isolation transformers, and surge protection devices.' },
      { step: '04', title: 'CPO Network Commissioning', desc: 'Connecting to credit card payment gateways and national CPO roaming networks.' }
    ],
    faqs: [
      { question: 'Can these chargers share power dynamically when two vehicles plug in simultaneously?', answer: 'Yes! Our Fast Charger Dual Port features Dynamic Power Allocation (DPA). If one vehicle requires 80kW and another 40kW, the charger automatically balances the power split without manual intervention.' },
      { question: 'What maintenance support is included for high-traffic fuel stations?', answer: 'chargeNET provides 24/7 automated telemetry monitoring, remote diagnostics, and on-site engineering SLA guarantees to ensure maximum uptime for CPO operators.' }
    ]
  },

  'parking-hubs': {
    id: 'parking-hubs',
    title: 'Public Parking Hubs & Garages',
    categoryTag: 'COMMERCIAL PARKING GARAGES',
    subtitle: 'Turn commercial parking garages and multi-story structures into continuous passive income generators.',
    heroDescription: 'Upgrade static parking garages into high-yielding electric mobility hubs. Combine Level 2 AC chargers for long-dwell commuters with Level 3 DC chargers for express visitors. Managed seamlessly through central billing and dynamic rate switching.',
    heroStats: [
      { label: '2.4x', value: 'YIELD PER BAY MULTIPLIER', desc: 'Higher revenue generation compared to standard parking fees.' },
      { label: '100%', value: 'CONTACTLESS PAYMENTS', desc: 'Support credit cards, RFID tags, and mobile app wallets.' },
      { label: 'DYNAMIC', value: 'PEAK/OFF-PEAK RATES', desc: 'Automated rate adjustments based on grid demand.' }
    ],
    canvasType: 'parking-hubs',
    bentoItems: [
      {
        title: 'Idle Parking Bay Losses',
        painPoint: 'Unoccupied parking bays in commercial garages generating zero revenue during off-peak hours.',
        solution: 'EV chargers transform empty bays into continuous income streams day and night.',
        metric: '2.4X BAY YIELD',
        icon: TrendingUp
      },
      {
        title: 'Multi-Floor Wiring Complexity',
        painPoint: 'Running thick copper cables across multi-story garages is cost-prohibitive.',
        solution: 'Modular busbar trunking systems simplify installation across underground levels.',
        metric: '-40% WIRING COST',
        icon: Layers
      },
      {
        title: 'Overstaying Without Charging',
        painPoint: 'Drivers leaving cars parked after charging completes, blocking other customers.',
        solution: 'Automated overstay idle fees incentivize prompt vehicle relocation.',
        metric: 'HIGH TURNOVER',
        icon: Clock
      }
    ],
    architectureSpecs: [
      {
        category: 'Parking Hub Infrastructure',
        specs: [
          { name: 'SYSTEM ARCHITECTURE', value: 'Multi-Node Master-Slave Busbar Configuration' },
          { name: 'CHARGER TYPES', value: 'Combined AC Level 2 (7.4kW - 22kW) + DC Fast (30kW - 60kW)' },
          { name: 'ENCLOSURE', value: 'IP55 Dust-Proof & Vandal Resistant Compact Chassis' },
          { name: 'CABLE MANAGEMENT', value: 'Ceiling Retractable Spring Reel Suspender' }
        ]
      },
      {
        category: 'Billing & Overstay Control',
        specs: [
          { name: 'OVERSTAY IDLE FEE', value: 'Configurable per-minute penalty after charging completes' },
          { name: 'DYNAMIC TARIFFS', value: 'Time-of-Use peak/off-peak price automation' },
          { name: 'GATEWAY NETWORK', value: 'Centralized Garage Controller with Cellular 4G Uplink' },
          { name: 'OCPP INTEGRATION', value: 'OCPP 1.6J / 2.0.1 Compliant' }
        ]
      }
    ],
    simulator: {
      title: 'Parking Garage Bay Monetization Calculator',
      subtitle: 'Calculate monthly revenue uplift, bay turnover improvements, and payback period for garage deployments.',
      slider1: { label: 'TOTAL GARAGE PARKING BAYS', min: 20, max: 400, step: 10, default: 100, unit: 'Bays' },
      slider2: { label: 'EV CHARGING BAYS INSTALLED', min: 4, max: 60, step: 2, default: 12, unit: 'Bays' },
      slider3: { label: 'COMBINED RATE (PARK + CHARGE)', min: 100, max: 500, step: 20, default: 220, unit: 'Rs./Hr' },
      calculate: (totalBays, evBays, rate) => {
        const avgHoursDaily = 6.5;
        const monthlyRevenue = Math.round(evBays * rate * avgHoursDaily * 30);
        const standardRevenue = Math.round(evBays * 80 * avgHoursDaily * 30); // 80 Rs/hr standard
        const netUplift = monthlyRevenue - standardRevenue;

        return {
          metric1: {
            label: 'PROJECTED MONTHLY EV GARAGE REVENUE',
            value: `Rs. ${(monthlyRevenue / 100000).toFixed(2)} Lakhs`,
            sub: `Generated from ${evBays} electrified parking bays.`
          },
          metric2: {
            label: 'NET MONTHLY UPLIFT VS STANDARD PARKING',
            value: `Rs. ${netUplift.toLocaleString()}`,
            sub: 'Additional net profit earned purely from EV charging capability.'
          },
          metric3: {
            label: 'ESTIMATED CAPITAL PAYBACK PERIOD',
            value: '8.5 Months',
            sub: 'Rapid return on hardware and installation investment.'
          },
          recommendation: `Recommended Garage Layout: ${Math.ceil(evBays * 0.75)}x Level 2 Charger 3-Phase + ${Math.ceil(evBays * 0.25)}x Fast Charger Single Port (30kW DC) with Ceiling Retractable Cables.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'l2-3phase-garage',
        name: 'Level 2 Charger - 3 Phase',
        power: '22kW AC Dual',
        imageSrc: '/chargers/home/L2_3phase.png',
        badge: 'GARAGE WORKHORSE',
        shortDesc: 'Dual socket 22kW three-phase charger designed for multi-story parking structures.',
        slug: 'level-2-charger-3-phase'
      },
      {
        id: 'fast-single-garage',
        name: 'Fast Charger - Single Port',
        power: '30kW - 60kW DC',
        imageSrc: '/chargers/commercial/fast-charger.257.png',
        badge: 'EXPRESS BAY',
        shortDesc: 'Compact DC fast charger for ground-floor express parking bays.',
        slug: 'fast-charger-single-port'
      },
      {
        id: 'l2-home-garage',
        name: 'Level 2 Charger - Home / Commercial',
        power: '7.4kW AC',
        imageSrc: '/chargers/home/L2_66kw.png',
        badge: 'COMMUTER CHOICE',
        shortDesc: 'Reliable Level 2 charger for long-dwell workplace and commuter parking.',
        slug: 'level-2-charger-home-commercial'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Garage Electrical Audit', desc: 'Assessing main distribution board headroom, vertical cable risers, and floor load limits.' },
      { step: '02', title: 'Busbar & Ceiling Conduit Plan', desc: 'Designing overhead cable tray runs to avoid floor drilling and minimize cabling costs.' },
      { step: '03', title: 'Mounting & Cable Retractor Setup', desc: 'Installing wall mounts or ceiling retractors to keep cables elevated off parking garage floors.' },
      { step: '04', title: 'Central Payment Integration', desc: 'Linking chargers to garage entry barrier tickets, RFID cards, or mobile QR portals.' }
    ],
    faqs: [
      { question: 'How do ceiling retractable cables work in multi-level garages?', answer: 'Ceiling retractors use spring-tensioned counterweights to keep charging cables suspended overhead when not in use. This prevents cables from being driven over or tripping garage pedestrians.' },
      { question: 'Can we automatically charge idle fees if a car stays parked after charging finishes?', answer: 'Yes. The chargeNET cloud platform allows you to set custom grace periods (e.g., 15 minutes), after which an idle fee (e.g., Rs. 20/minute) is automatically applied until the vehicle is unplugged.' }
    ]
  },

  workplaces: {
    id: 'workplaces',
    title: 'Workplaces & Fleet Depots',
    categoryTag: 'CORPORATE & FLEET LOGISTICS',
    subtitle: 'Corporate EV charging infrastructure for employee perks, fleet electrification, and ESG reporting.',
    heroDescription: 'Power your corporate fleet transition and offer high-demand EV charging as an employee benefit. chargeNET provides smart workplace charging solutions with corporate Single Sign-On (SSO) integration, automated ESG carbon offset reporting, and off-peak night depot charging.',
    heroStats: [
      { label: '-65%', value: 'FLEET FUEL COST REDUCTION', desc: 'Savings achieved by transitioning commercial fleets to electricity.' },
      { label: 'ESG READY', value: 'SCOPE 2 CARBON REPORTS', desc: 'Automated sustainability data export for corporate ESG filings.' },
      { label: 'SSO SYNC', value: 'AZURE AD / RFID INTEGRATION', desc: 'Seamless employee access using existing corporate security badges.' }
    ],
    canvasType: 'workplaces',
    bentoItems: [
      {
        title: 'High Corporate Fleet Fuel Expenses',
        painPoint: 'Rising diesel and petrol costs eroding corporate logistics margins.',
        solution: 'Electric fleets cut fuel costs by up to 65% while charging at low night rates.',
        metric: '-65% FUEL COSTS',
        icon: Scale
      },
      {
        title: 'Unauthorized Employee Charging',
        painPoint: 'Unmonitored office charging leading to non-employee power theft.',
        solution: 'Integrates directly with corporate Azure AD and RFID employee ID badges.',
        metric: 'SSO BADGE AUTH',
        icon: Lock
      },
      {
        title: 'Complex ESG Reporting Requirements',
        painPoint: 'Manually calculating corporate carbon footprint reduction for annual reports.',
        solution: 'Automated ESG dashboard exports verified Scope 2 CO2 offset certificates.',
        metric: 'AUTOMATED ESG DATA',
        icon: BarChart3
      }
    ],
    architectureSpecs: [
      {
        category: 'Corporate & Fleet Specs',
        specs: [
          { name: 'CHARGER TYPES', value: 'Smart AC Level 2 (7.4kW - 22kW) + Depot DC (30kW - 80kW)' },
          { name: 'SSO INTEGRATION', value: 'Azure Active Directory, Google Workspace, Okta, Active Directory' },
          { name: 'ACCESS CONTROL', value: 'Corporate RFID Badges, Mobile SSO Login, Pre-authorized Whitelists' },
          { name: 'NIGHT DEPOT MODE', value: 'Automated staggered off-peak scheduling for overnight fleet charging' }
        ]
      },
      {
        category: 'ESG & Fleet Telemetry',
        specs: [
          { name: 'FLEET MANAGEMENT API', value: 'REST API, Webhooks, OCPP 1.6J / 2.0.1 Data Streams' },
          { name: 'CARBON REPORTING', value: 'Scope 2 CO2 Reduction Metrics (GHG Protocol Compliant)' },
          { name: 'LOAD SHREDDING', value: 'Building peak demand response integration via BACnet / Modbus' },
          { name: 'HARDWARE WARRANTY', value: '5-Year Enterprise On-Site Replacement Warranty' }
        ]
      }
    ],
    simulator: {
      title: 'Corporate Fleet TCO & Workplace Charging Engine',
      subtitle: 'Simulate annual fleet fuel savings, carbon emission reductions, and employee EV perk satisfaction.',
      slider1: { label: 'COMPANY FLEET VEHICLES', min: 2, max: 80, step: 2, default: 14, unit: 'Fleet EVs' },
      slider2: { label: 'DAILY KILOMETERS PER FLEET EV', min: 30, max: 250, step: 10, default: 90, unit: 'km/day' },
      slider3: { label: 'EMPLOYEE COMMUTER EV USERS', min: 5, max: 150, step: 5, default: 35, unit: 'Employees' },
      calculate: (fleetEvs, dailyKm, employees) => {
        const dailyFleetKm = fleetEvs * dailyKm;
        const annualFleetKm = dailyFleetKm * 300; // 300 working days
        const dieselCostPerKm = 42; // LKR
        const evElectricityCostPerKm = 14; // LKR at off-peak depot rate
        const annualFuelSavings = Math.round(annualFleetKm * (dieselCostPerKm - evElectricityCostPerKm));
        const co2SavedTons = Math.round((annualFleetKm * 0.18) / 1000);

        return {
          metric1: {
            label: 'ANNUAL CORPORATE FLEET SAVINGS',
            value: `Rs. ${(annualFuelSavings / 1000000).toFixed(2)} Million`,
            sub: 'Direct fuel cost reduction vs traditional diesel fleet.'
          },
          metric2: {
            label: 'ANNUAL CO2 REDUCTION (SCOPE 2)',
            value: `${co2SavedTons} Metric Tons`,
            sub: 'Verified carbon offset for ESG sustainability filings.'
          },
          metric3: {
            label: 'EMPLOYEE PERK SATISFACTION',
            value: '98.5%',
            sub: 'Workplace perk satisfaction rating among EV commuters.'
          },
          recommendation: `Recommended Fleet Strategy: 2x CD 80 DC Fast Charger for depot rapid prep + ${Math.ceil(employees / 4)}x Level 2 Charger 3-Phase with Azure AD Badge Reader.`
        };
      }
    },
    recommendedProducts: [
      {
        id: 'cd80-workplace',
        name: 'CD 80 DC Fast Charger',
        power: '80kW Ultra DC',
        imageSrc: '/chargers/commercial/cd80.png',
        badge: 'DEPOT FLAGSHIP',
        shortDesc: '80kW DC fast charger engineered for rapid fleet depot preparation and logistics vehicles.',
        slug: 'cd-80-dc-fast-charger'
      },
      {
        id: 'voltmotive-workplace',
        name: 'Voltmotive GBT / L2 Charger',
        power: '22kW Dual AC',
        imageSrc: '/chargers/commercial/VOLTMOTIVE-2-1.png',
        badge: 'WORKPLACE DUAL',
        shortDesc: 'Floor-standing dual port charger ideal for corporate executive and employee parking bays.',
        slug: 'voltmotive-gbt-l2-charger'
      },
      {
        id: 'next-gen-workplace',
        name: 'Next Gen Smart Charger',
        power: '11kW - 22kW',
        imageSrc: '/chargers/home/next_gen.png',
        badge: 'EXECUTIVE BAY',
        shortDesc: 'Sleek smart charger with built-in RFID badge reader for corporate executive slots.',
        slug: 'next-gen-smart-charger'
      }
    ],
    turnkeySteps: [
      { step: '01', title: 'Corporate Fleet Audit', desc: 'Analyzing daily mileage patterns, depot dwell times, and corporate building electrical headroom.' },
      { step: '02', title: 'SSO & IT System Sync', desc: 'Integrating chargeNET authentication with corporate Azure AD or Google Workspace employee directories.' },
      { step: '03', title: 'Depot & Bay Installation', desc: 'Installing heavy-duty pedestals, isolation switches, and intelligent load balancing gateways.' },
      { step: '04', title: 'ESG Dashboard Commissioning', desc: 'Configuring automated monthly carbon offset reports for corporate sustainability compliance.' }
    ],
    faqs: [
      { question: 'Can employees use their existing company ID badges to charge their cars?', answer: 'Yes! chargeNET supports 13.56MHz RFID / NFC badge reading (Mifare, HID, Desfire) and integrates with Azure Active Directory or Okta SSO, allowing employees to tap their existing security card.' },
      { question: 'How does night depot charging work for logistics vehicles?', answer: 'The chargeNET Fleet Manager automatically schedules fleet vehicles to begin charging when municipal utility rates drop to off-peak tariffs (e.g. 11 PM), staggering charger start times to prevent grid spikes.' }
    ]
  }
};

'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Zap, 
  Shield, 
  Check, 
  Info, 
  Cpu, 
  TrendingUp, 
  Maximize2, 
  Wrench, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Smartphone,
  PhoneCall,
  Clock,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import CapsuleHeader from '../../../components/CapsuleHeader';
import Footer from '../../../components/Footer';

// Define the shape of product specifications
interface SpecItem {
  name: string;
  value: string;
}

interface ProductDetails {
  id: string;
  name: string;
  tagline: string;
  category: 'home' | 'commercial' | 'software';
  imageSrc: string;
  basePrice: string;
  shortDesc: string;
  fullDesc: string;
  warranty: string;
  powerOutput: string;
  compatibilityType: string;
  highlightStats: { label: string; value: string; desc: string }[];
  keySpecs: SpecItem[];
  benefits: string[];
  safetyFeatures: string[];
}

// Full specifications dictionary mapping slug to values
const PRODUCT_DATA_STORE: Record<string, ProductDetails> = {
  'l2-home-commercial': {
    id: 'l2-home-commercial',
    name: 'L2 Charger - Home / Commercial',
    tagline: 'Intelligent, adaptive charging designed for modern homes and commercial hubs.',
    category: 'home',
    imageSrc: '/chargers/home/L2_66kw.png',
    basePrice: 'Rs. 245,000 onwards',
    shortDesc: 'Experience the ultimate balance between compact sizing and adaptable, high-efficiency scheduling. Built for extreme Ceylon heat and humidity.',
    fullDesc: 'Our highly popular smart charger. The L2 Home & Commercial unit delivers premium adaptive charging tailored for residential garages, apartments, and commercial destination hubs. Syncs effortlessly via Wi-Fi & Bluetooth to give you real-time consumption insights, custom scheduling, and seamless load coordination with local grids.',
    warranty: '3 Years Hardware (Wall Unit) & 5 Years Software',
    powerOutput: '3.3 kW to 6.6 kW Adaptive',
    compatibilityType: 'J1772 – Type 1 & Type 2',
    highlightStats: [
      { label: '6.6 kW', value: 'Power Output', desc: 'Accelerated Level 2 charge rate' },
      { label: 'Type 1/2', value: 'Compatibility', desc: 'Dual-standard high-contact socket' },
      { label: '3 Years', value: 'Hardware Warranty', desc: 'Guaranteed structural integrity' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET Smart L2 Home' },
      { name: 'Connector Standards', value: 'J1772 - Type 1 & Type 2 Compatibility' },
      { name: 'Charging Speeds', value: '6.6kW and 3.3kW Adaptive' },
      { name: 'Incoming Voltage Support', value: '230V AC Single Phase (50Hz)' },
      { name: 'Connectivity Support', value: 'Wi-Fi, Bluetooth, 4G Lite Core Interface' },
      { name: 'Load Control', value: 'Dynamic Home Load Balancing ready' },
      { name: 'Operating Temperature', value: '-30°C to +55°C active range' },
      { name: 'Enclosure Rating', value: 'IP54 Weather & Dust Proof dustproof structure' },
      { name: 'Installation', value: 'FREE Standard Home Installation Service Included' }
    ],
    benefits: [
      'IT & Technical Support for smart connectivity diagnostic grids',
      'Remote OTA Monitoring & Security Updates',
      'Weather-resistant casing designed for monsoon-prone climates',
      'Optimized schedule automation to charge at low-tariff utility off-peak hours',
      'Dynamic Load Balancing to safeguard your household system from tripping'
    ],
    safetyFeatures: [
      'Built-in localized residual current monitoring (RCD Type A + DC 6mA)',
      'Over-temperature thermal throttling mechanism',
      'Overvoltage, undervoltage, and lightning surge shielding'
    ]
  },
  'l2-3phase': {
    id: 'l2-3phase',
    name: 'Level 2 Charger - 3 Phase',
    tagline: 'High-output, high-velocity three-phase domestic and commercial power hub.',
    category: 'home',
    imageSrc: '/chargers/home/L2_3phase.png',
    basePrice: 'Rs. 320,000 onwards',
    shortDesc: 'Engineered specifically for properties equipped with dedicated high-voltage standard 3-phase feeds. Charges at peak L2 speeds with extreme thermal stability.',
    fullDesc: 'The prime standard in high-velocity AC charging. Engineered to tap directly into 3-phase commercial and luxury residential feeds, this Level 2 Charger pushes up to 22 kW of pure charging speed. Crafted with a premium minimalist shell, digital RFID security locks, and full dynamic grid throttling.',
    warranty: '3 Years Hardware Warranty',
    powerOutput: 'Up to 22 kW Peak',
    compatibilityType: 'Type 2 Dedicated Connection',
    highlightStats: [
      { label: '22 kW', value: 'Power Output', desc: 'Highest standard 3-phase speed' },
      { label: '3-Phase', value: 'Power Feed', desc: 'High-voltage stable throughput' },
      { label: 'RFID', value: 'Access Lock', desc: 'Secure local tapping authentication' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET Professional 3-Phase L2' },
      { name: 'Connector Standards', value: 'Type 2 High-Power Connection' },
      { name: 'Charging Capacity', value: 'Scalable up to 22 kW peak output' },
      { name: 'Input Voltage', value: '400V AC Three-Phase (50Hz)' },
      { name: 'Security authentication', value: 'Physical RFID Tap, Mobile Pass, Cloud Auth' },
      { name: 'Durability rating', value: 'IP55 Waterproofing Enclosure with anti-UV coating' },
      { name: 'Chassis Material', value: 'IK08 High Impact Polycarbonate casing' },
      { name: 'Uptime heartbeats', value: 'Real-time telemetry streams over LTE/Wi-Fi' }
    ],
    benefits: [
      'IT & Technical Support with 24-hr diagnostic resolution',
      'Remote Monitoring & Updates from cloud servers',
      'Weather proof and modern Scandinavian-inspired architectural design',
      'FREE Professional Installation Service with comprehensive phase safety audits',
      'Intelligent peak current-sharing algorithms for multi-vehicle structures'
    ],
    safetyFeatures: [
      'Automatic offline safety state fallback parameters',
      'Ground detection safety loop monitoring',
      'Integrated active current-surge clamping'
    ]
  },
  'cd-80kw': {
    id: 'cd-80kw',
    name: 'CD 80 DC Fast Charger',
    tagline: 'Enterprise-grade modular rapid DC charging for highway corridors and primary fleets.',
    category: 'commercial',
    imageSrc: '/chargers/commercial/cd80.png',
    basePrice: 'Request Enterprise Quote',
    shortDesc: 'Enables active cloud telemetry, integrated payment gateways, and configurable paywalls. The gold standard for business hub charging.',
    fullDesc: 'The master structural building block of high-capacity highway hubs. Built to power logistics fleets, highway transit centers, and public charging network portals. The CD 80 has a fully modular power cabinet designed to maximize uptime and scale dynamic distribution on a robust, vandal-proof chassis.',
    warranty: '1 Year Hardware & 5 Years Software Warranty',
    powerOutput: '80 kW DC Output',
    compatibilityType: 'CCS2 Direct High-Voltage Plug',
    highlightStats: [
      { label: '80 kW', value: 'DC Output', desc: 'Ultra-fast direct battery replenishment' },
      { label: 'OCPP', value: '1.6J & 2.0.1', desc: 'Full enterprise protocol sync' },
      { label: 'IK10', value: 'Steel Body', desc: 'Vandal-proof ultra-durable plate' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET Enterprise CD80 DC Fast Terminal' },
      { name: 'Connector Configuration', value: 'CCS Type 2 Direct Plug line' },
      { name: 'Output Voltage Span', value: '150V DC to 1000V DC Smart Tracking' },
      { name: 'Maximum Current', value: 'Up to 250A peak DC feed' },
      { name: 'Protocol Compliance', value: 'OCPP 1.6J & OCPP 2.0.1 compliant' },
      { name: 'Chassis Rating', value: 'IK10 Heavy Vandal-Proof Outer Steel Plate' },
      { name: 'Cooling Mechanics', value: 'Forced air cooling with intelligent temperature curves' },
      { name: 'Network Protocol', value: '4G LTE, High Gain External Antenna, Ethernet' }
    ],
    benefits: [
      '24/7 dedicated enterprise IT & technical support priority grid',
      'Real-time cloud monitoring, smart dashboards & API outputs',
      'Active hardware utility accounting and configurable instant billing payments',
      'High-efficiency modular power stack chassis to prevent single points of failure',
      'Monsoon weather-proof, dual sealed marine grade isolation'
    ],
    safetyFeatures: [
      'Galvanic grid isolation with high-voltage leakage protection',
      'Emergency stop physical safety slam button',
      'Auto-discharge circuit on connector disconnect'
    ]
  },
  'fast-single': {
    id: 'fast-single',
    name: 'Fast Charger - Single Port',
    tagline: 'Streamlined energy delivery terminal for high-density public destination stops.',
    category: 'commercial',
    imageSrc: '/chargers/commercial/fast-charger.258.png',
    basePrice: 'Request Enterprise Quote',
    shortDesc: 'Rapid highway transit solution. Delivers 100+ km of range in under ten minutes to keep modern traffic moving at lightning pace.',
    fullDesc: 'An outstanding high-power direct DC terminal. Designed specifically for petrol stations, supermarket parking lots, and strategic national road corridors. Equipped with a high-brightness revenue-generating digital screen that can serve local marketing ads or real-time local information.',
    warranty: '1 Year Hardware & 5 Years Software Warranty',
    powerOutput: '30 kW to 75 kW Scalable DC',
    compatibilityType: 'CHAdeMO or CCS',
    highlightStats: [
      { label: '75 kW', value: 'Active Power', desc: 'Scalable continuous performance' },
      { label: 'CCS/CHA', value: 'Dual Option', desc: 'Universal rapid plug support' },
      { label: 'LCD Screen', value: 'Interactivity', desc: 'Media display and revenue generator' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET Rapid Single Terminal' },
      { name: 'Output Connections', value: 'CHAdeMO socket or CCS Combo 2' },
      { name: 'Power Configuration', value: '30 kW to 75 kW modularly scalable' },
      { name: 'User Display', value: 'Integrated High Brightness Media Screening Dashboard' },
      { name: 'Network Heartbeats', value: 'Continuous 4G LTE heartbeats and analytics sync' },
      { name: 'Outer Coating', value: 'Maritime and heavy salt-spray corrosion resistant finish' },
      { name: 'Uptime Protection', value: 'Remote diagnostic reboot routines over OCPP' }
    ],
    benefits: [
      'IT & Technical Support with rapid engineer dispatch',
      'Remote Cloud Monitoring & over-the-air protocol expansions',
      'Complete weather and dust ingress sealing',
      'FREE Site Survey and Professional Installation Service',
      'Revenue Generating digital billboard hosting customizable promotional campaigns'
    ],
    safetyFeatures: [
      'Ground leakage monitoring and reverse current loop breakers',
      'Comprehensive overload, over-temperature, and phase imbalances protection',
      'Ground lock-on high durability structural security brackets'
    ]
  },
  'fast-dual': {
    id: 'fast-dual',
    name: 'Fast Charger - Dual Port',
    tagline: 'The ultimate commercial en-route charging powerhouse, featuring smart load split.',
    category: 'commercial',
    imageSrc: '/chargers/commercial/fast-charger.257.png',
    basePrice: 'Request Enterprise Quote',
    shortDesc: 'Splits total output feed dynamically between two connected electric vehicles depending on real-time vehicle battery state.',
    fullDesc: 'The ultimate crown of our public rapid transit grids. Splitting up to 150 kW - 240 kW of robust power, this dual-port powerhouse keeps up with high-pressure highway hubs. A brilliant 10-inch high-brightness LCD display guides the user through multi-currency terminal billing, NFC tags, or app wallets.',
    warranty: '1 Year Hardware & 5 Years Software Warranty',
    powerOutput: '60 kW to 240 kW Dynamic',
    compatibilityType: 'Dual CHAdeMO / CCS Ports',
    highlightStats: [
      { label: 'Dynamic', value: 'Load Splitting', desc: 'Simultaneous dual vehicle charging' },
      { label: '3-Phase', value: '60A Supply (60kW)', desc: 'High strength power grid lines' },
      { label: 'NFC Ready', value: 'Instant Pay', desc: 'Debit / Credit cards tap ready' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET Infinite Dual Port Fast Charger' },
      { name: 'Connector Outlets', value: 'Dual active CCS2 / CHAdeMO lines' },
      { name: 'Charging Capacity', value: '3 Phase 60A Supply (60kW continuous base up to 240kW)' },
      { name: 'Display Console', value: '10" Multi-language, sunlight-readable interactive LCD' },
      { name: 'Billing Tech', value: 'NFC, direct local credit cards terminal, QR payments' },
      { name: 'Isolation Level', value: 'Full galvanic isolation architecture with double shields' },
      { name: 'Nighttime Safety', value: 'Integrated high-illumination guide LEDs' }
    ],
    benefits: [
      'Priority Enterprise IT & Technical Support 24/7/365',
      'Remote Monitoring & instant over-the-air firmware adjustments',
      'Heavy duty weather and dust storm proofing',
      'FREE Site Survey and full grid integration Installation Service',
      'Concurrent multi-vehicle sessions with smart load orchestration'
    ],
    safetyFeatures: [
      'Dual emergency cutoff systems for independent ports',
      'Dynamic ground-checking safety relays',
      'Internal fire suppression and cooling flow monitoring'
    ]
  },
  'low-voltage': {
    id: 'low-voltage',
    name: 'Low Voltage Charger',
    tagline: 'Resilient and adaptive charging designed for regional grids prone to voltage drops.',
    category: 'home',
    imageSrc: '/chargers/home/L2_66kw.png',
    basePrice: 'Rs. 195,000 onwards',
    shortDesc: 'Designed to protect your precious car battery in coastal and remote Sri Lankan villages featuring frequent grid sags.',
    fullDesc: 'A technical masterpiece designed for local reality. Traditional chargers halt during utility voltage drops, but our Low Voltage Charger uses dynamic impedance tracking to safely scale down output while maintaining active charging cycles. Restarts automatically when regular voltage returns, protecting sensitive vehicle computers.',
    warranty: '3 Years Hardware & 5 Years Software Warranty',
    powerOutput: 'Up to 3.3 kW Adaptive',
    compatibilityType: 'J1772 - Type 1 & Type 2',
    highlightStats: [
      { label: 'VoltShield', value: 'Grid stabilizer', desc: 'Maintains charging during voltage drops' },
      { label: '3.3 kW', value: 'Max Speed', desc: 'Secure night cycle charging' },
      { label: 'Auto-Resume', value: 'Restart tech', desc: 'Recovers after power drops instantly' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET VoltageShield Low-Volt L2' },
      { name: 'Connector Compatibility', value: 'J1772 - Type 1 & Type 2 Standard' },
      { name: 'Operating Range', value: '140V AC to 270V AC Ultra-Wide tracking' },
      { name: 'Power Throughput', value: 'Adaptive up to 3.3 kW output speed' },
      { name: 'Fault Recoveries', value: 'Instant auto-resume charging after complete power drops font-bold' },
      { name: 'Outer Enclosure', value: 'Weather & dust proof heavy duty polymer casing shadow' },
      { name: 'Shield Systems', value: 'Overvoltage, undervoltage, and lightning surge insulation font-mono' }
    ],
    benefits: [
      '24/7 localized backup assistance and technical grid support',
      'Remote Monitoring & localized diagnostic software streams',
      'Heavy dust proof enclosure for arid microclimates',
      'FREE Standard Installation Service',
      'Protective active charge smoothing for electric vehicle batteries'
    ],
    safetyFeatures: [
      'High-grade input current clamp isolating local drops',
      'Built-in lightning surge arrester module',
      'Over-temperature heat sink throttle sensors'
    ]
  },
  'voltmotive-gbt-l2': {
    id: 'voltmotive-gbt-l2',
    name: 'Voltmotive GBT / L2 Charger',
    tagline: 'Multi-standard professional charging for hybrid Fleets and business hubs.',
    category: 'commercial',
    imageSrc: '/chargers/commercial/VOLTMOTIVE-2-1.png',
    basePrice: 'Request Enterprise Quote',
    shortDesc: 'Cross-compatible hardware featuring dual physical connectors to bridge Chinese GB/T and European standards seamlessly.',
    fullDesc: 'The essential infrastructure link for modern diverse automotive fleets. Engineered specifically to bridge Chinese GB/T and Type 2 European sockets, the Voltmotive GBT/L2 provides business destination hubs with high-uptime AC power of up to 22 kW without needing clumsy, unsafe physical adapters.',
    warranty: '3 Years Hardware & 5 Years Software Warranty',
    powerOutput: 'Up to 22 kW AC Dual Use',
    compatibilityType: 'GB/T and Type 2 Hybrid',
    highlightStats: [
      { label: 'GB/T & T2', value: 'Double Standard', desc: 'Bridges European & import sockets' },
      { label: '22 kW AC', value: 'High Speed', desc: 'Optimized commercial destination charge' },
      { label: 'OCPP 1.6J', value: 'Billing Ready', desc: 'Direct corporate expense tracing' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET VoltMotive Dual-Standard Pro' },
      { name: 'Outlets support', value: 'Dedicated GB/T AC socket & Type 2 socket side-pipe' },
      { name: 'Charging Speeds', value: 'Up to 22kW on active 3-phase networks' },
      { name: 'Management System', value: 'Integrated OCPP 1.6J telemetry client' },
      { name: 'Inner Architecture', value: 'Sealed individual thermal ducts per line' },
      { name: 'Weather Index', value: 'IP54 enclosure suited for heavy high-speed rain gusts' }
    ],
    benefits: [
      'Dedicated technical support for fleets and logistics depots',
      'Remote smart cloud diagnostics and firmware extensions',
      'Robust professional billing tracking by keycard or RFID',
      'FREE corporate installation site assessment and commissioning',
      'Complete safety monitoring loops per active connector'
    ],
    safetyFeatures: [
      'Isolated dual load switching channels',
      'Full electronic leakage and short circuit breakers',
      'High insulation values protecting inputs during lightning strikes'
    ]
  },
  'next-gen': {
    id: 'next-gen',
    name: 'Next Gen Smart Charger',
    tagline: 'A visionary leap in home electric vehicle refueling, fusing luxury design with smart tech.',
    category: 'home',
    imageSrc: '/chargers/home/next_gen.png',
    basePrice: 'Rs. 295,000 onwards',
    shortDesc: 'Incorporates eco-solar tracking with interactive ambient LEDs, Wi-Fi 6, and a beautiful tactile faceplate.',
    fullDesc: 'Charge your electric vehicle from pure, clean solar energy. The Next Gen Smart Home charger has a striking, minimalistic layout that acts as a secure, smart energy coordinator for home power. Beautiful LED pulsing lets you know charging speeds at a single glance, with high-gain Wi-Fi and Bluetooth connectivity.',
    warranty: '3 Years Structural Warranty',
    powerOutput: '11 kW Smart Output',
    compatibilityType: 'Level 2 Smart Type 2 Header',
    highlightStats: [
      { label: 'Solar Sync', value: 'Eco Mode', desc: 'Siphons excess residential solar power' },
      { label: 'Wi-Fi 6', value: 'Super Connected', desc: 'Ultra-low latency app monitoring' },
      { label: 'LED Ring', value: 'Breathing Light', desc: 'Stunning state notification' }
    ],
    keySpecs: [
      { name: 'Model', value: 'chargeNET NextGen Quantum L2 Hub' },
      { name: 'Primary Connection', value: 'Type 2 high-grade durable plug' },
      { name: 'Operating Power', value: 'Adjustable from 1.4 kW up to 11 kW output' },
      { name: 'Network Interface', value: 'Wi-Fi 6, Bluetooth 5.2, cellular fallback' },
      { name: 'Telemetry Lights', value: '360° Aura breathe energy indicator' },
      { name: 'Solar Ready', value: 'Custom protocol sync with residential inverters' },
      { name: 'Outer Design', value: 'Fully recyclable high durability matte glass-fiber composite' }
    ],
    benefits: [
      'Instant tech assistance through in-app live chat systems',
      'Over-the-air firmware patches expanding battery care curves',
      'Aesthetic modern layout matching contemporary architectural homes',
      'FREE turnkey design and installation service',
      'Adaptive load-shedding matching other appliances to prevent household trip outs'
    ],
    safetyFeatures: [
      'Military grade hardware encryption on internet telemetry streams',
      'Dynamic ground fault loop checks (Type B RCD equivalency)',
      'Active arc-detection monitoring to eliminate plug degradation hazards'
    ]
  }
};

// Generative canvas matching each charger's technical profile
function DynamicProductArtCanvas({ slug }: { slug: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let destroyed = false;
    let animationId: number;
    let time = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      if (destroyed) return;
      for (const entry of entries) {
        const dpi = window.devicePixelRatio || 1;
        canvas.width = entry.contentRect.width * dpi;
        canvas.height = entry.contentRect.height * dpi;
        ctx.scale(dpi, dpi);
      }
    });

    resizeObserver.observe(canvas.parentElement || canvas);

    const draw = () => {
      if (destroyed) return;
      time += 0.02;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      if (w <= 0 || h <= 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Clean background graph grids
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
      for (let x = 0; x < w; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2;

      if (slug === 'l2-home-commercial' || slug === 'low-voltage') {
        // Concentric expanding magnetic power waves
        ctx.lineWidth = 1.5;
        const count = 5;
        for (let i = 0; i < count; i++) {
          const r = ((time * 25 + i * (w / count)) % w) * 0.55;
          const alpha = Math.max(0, 1 - (r / (w * 0.55)));
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.25})`; // Blue
          ctx.beginPath();
          ctx.arc(cx, cy, Math.max(10, r), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Mini node grid
        ctx.fillStyle = 'rgba(59, 130, 246, 0.35)';
        for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4) {
          const x = cx + Math.cos(angle + time * 0.1) * 80;
          const y = cy + Math.sin(angle + time * 0.1) * 80;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (slug === 'l2-3phase') {
        // Triple intersecting 3 phase continuous sines
        ctx.lineWidth = 1.8;
        const phases = [
          { color: 'rgba(59, 130, 246, 0.5)', offset: 0 },
          { color: 'rgba(6, 182, 212, 0.5)', offset: Math.PI * 2 / 3 },
          { color: 'rgba(99, 102, 241, 0.5)', offset: Math.PI * 4 / 3 }
        ];

        phases.forEach((p) => {
          ctx.strokeStyle = p.color;
          ctx.beginPath();
          for (let i = 0; i < w + 10; i += 5) {
            const y = cy + Math.sin(i * 0.02 + time + p.offset) * 35 * Math.sin(time * 0.25 + p.offset);
            if (i === 0) ctx.moveTo(i, y);
            else ctx.lineTo(i, y);
          }
          ctx.stroke();
        });
      } else if (slug === 'cd-80kw' || slug === 'voltmotive-gbt-l2') {
        // Massive energy streaming matrix / data bits
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
        ctx.lineWidth = 1;
        const columns = 8;
        const spacing = w / (columns + 1);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';

        for (let i = 1; i <= columns; i++) {
          const colX = spacing * i;
          ctx.beginPath();
          ctx.moveTo(colX, 0);
          ctx.lineTo(colX, h);
          ctx.stroke();

          // Falling telemetry pulse energy chunks
          const y1 = (time * 65 + i * 40) % h;
          const y2 = (time * 65 + i * 40 + 60) % h;
          ctx.fillRect(colX - 1.5, y1, 3, 8);
          ctx.fillRect(colX - 1.5, y2, 3, 4);
        }
      } else if (slug === 'fast-single' || slug === 'fast-dual') {
        // Double fast charge split lines and particles swirling
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)'; // Cyan
        
        ctx.beginPath();
        ctx.arc(cx, cy, 65, time * 0.2, time * 0.2 + Math.PI);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(59, 130, 246, 0.35)'; // Blue
        ctx.beginPath();
        ctx.arc(cx, cy, 80, -time * 0.3, -time * 0.3 + Math.PI * 1.5);
        ctx.stroke();

        // Pulsing core particles in center
        const pCount = 8;
        for (let i = 0; i < pCount; i++) {
          const angle = (i * Math.PI * 2) / pCount + time * 0.5;
          const rotR = (72 + Math.sin(time * 2 + i) * 8);
          const px = cx + Math.cos(angle) * rotR;
          const py = cy + Math.sin(angle) * rotR;
          ctx.fillStyle = i % 2 === 0 ? 'rgba(6, 182, 212, 0.7)' : 'rgba(59, 130, 246, 0.7)';
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Next Gen: Liquid swirling energy particles
        const count = 25;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.4)';
        for (let i = 0; i < count; i++) {
          const phase = i * 17;
          const r = 50 + Math.sin(time * 0.5 + phase) * 20;
          const angle = time * 0.4 + (i * Math.PI * 2 / count);
          const px = cx + Math.cos(angle) * r;
          const py = cy + Math.sin(angle) * r;
          
          ctx.beginPath();
          ctx.arc(px, py, 2.5 + Math.sin(time + phase) * 1, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [slug]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
    />
  );
}

// Available colors for product shields
const PRODUCT_SHIELD_COLORS = [
  { name: 'Anthracite Slate', hex: '#2D3134', bgGlow: 'rgba(45, 49, 52, 0.18)' },
  { name: 'Volcanic Black', hex: '#0B0C10', bgGlow: 'rgba(11, 12, 16, 0.22)' },
  { name: 'Siberian White', hex: '#ECEFF1', bgGlow: 'rgba(236, 239, 241, 0.3)' },
  { name: 'Crimson Energy', hex: '#C62828', bgGlow: 'rgba(198, 40, 40, 0.15)' },
  { name: 'Midnight Cobalt', hex: '#1565C0', bgGlow: 'rgba(21, 101, 192, 0.15)' }
];

export default function ProductDetailClient({ slug }: { slug: string }) {
  // Normalize slug to store keys
  const targetSlug = PRODUCT_DATA_STORE[slug] 
    ? slug 
    : (slug === 'cd-80' ? 'cd-80kw' : 'l2-home-commercial'); // Safe fallback

  const p = PRODUCT_DATA_STORE[targetSlug];

  const [activeTab, setActiveTab] = React.useState<'overview' | 'techspecs' | 'safety'>('overview');
  const [selectedColor, setSelectedColor] = React.useState<{ name: string; hex: string; bgGlow: string }>(PRODUCT_SHIELD_COLORS[0]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [inquirySubmitted, setInquirySubmitted] = React.useState(false);

  // Form states
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    installationType: p.category === 'home' ? 'Home Installation' : 'Commercial Fleet',
    message: ''
  });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setInquirySubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        installationType: p.category === 'home' ? 'Home Installation' : 'Commercial Fleet',
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-neutral-900 overflow-x-hidden antialiased font-sans flex flex-col">
      {/* Black ambient Header backing */}
      <div className="bg-black text-white">
        <CapsuleHeader />
      </div>

      <main className="flex-grow pt-20 md:pt-24">
        {/* Subtle top crumbs list */}
        <section className="bg-white py-5 border-b border-neutral-150/60 sticky top-[72px] z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link 
              href="/catalog" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#6B7280] hover:text-black transition-all group font-extrabold"
              id="back-to-catalog-link"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO HARDWARE CATALOG</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase">
              <span className="hover:text-neutral-700 transition-colors uppercase">{p.category} series</span>
              <ChevronRight className="w-3 h-3 text-neutral-300 animate-pulse" />
              <span className="text-neutral-900 font-extrabold">{p.name}</span>
            </div>
          </div>
        </section>

        {/* Minimalist Split Hero - Styled with Scandinavian Craftsmanship */}
        <section className="relative py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Editorial details & layout alignment */}
              <div className="lg:col-span-6 space-y-10">
                <div className="space-y-4">
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase font-bold text-blue-600 bg-blue-50/75 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block">
                    {p.category === 'home' ? 'RESIDENTIAL POWER HARNESS' : p.category === 'commercial' ? 'ENTERPRISE DC FAST GRID' : 'INTELLIGENT ENERGY SOFTWARE'}
                  </span>
                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-5.5xl text-neutral-950 leading-[1.05] tracking-tight">
                    {p.name}
                  </h1>
                  <p className="text-[#4B5563] text-lg md:text-xl font-light leading-relaxed max-w-xl">
                    {p.tagline}
                  </p>
                </div>

                {/* Cover Color Selector (Interactive cover visualization ala easee.com) */}
                <div className="space-y-4 bg-neutral-50/50 p-6 rounded-2xl border border-neutral-150">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-neutral-400 font-bold uppercase">PHYSICAL SHIELD FINISH</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 bg-white shadow-sm border border-neutral-200/50 px-3 py-1 rounded-md">{selectedColor.name}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3.5">
                    {PRODUCT_SHIELD_COLORS.map((color) => {
                      const isSelected = selectedColor.name === color.name;
                      return (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`group relative w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                            isSelected 
                              ? 'border-neutral-900 shadow-sm scale-110 ring-2 ring-neutral-200 bg-white' 
                              : 'border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-300 hover:scale-105'
                          }`}
                          title={color.name}
                        >
                          {/* Inner color field */}
                          <span 
                            className="w-7 h-7 rounded-lg shadow-inner transition-transform group-hover:scale-105 block"
                            style={{ 
                              backgroundColor: color.hex,
                              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.15)'
                            }} 
                          />
                          {isSelected && (
                            <motion.span 
                              layoutId="activeColorDot"
                              className="absolute -bottom-1.5 w-1.5 h-1.5 bg-neutral-950 rounded-full"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-narrative detail */}
                <div className="space-y-4">
                  <h3 className="font-mono text-[9px] tracking-widest text-[#9CA3AF] font-bold uppercase">ARCHITECTURAL PREMIER OVERVIEW</h3>
                  <p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed">
                    {p.fullDesc}
                  </p>
                </div>

                {/* Pricing / Warranty info tag matrix */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-neutral-50/80 border border-neutral-200/60 rounded-2xl px-5 py-3 flex-grow basis-[200px]">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase font-bold">Estimated Cost</span>
                    <span className="text-base font-bold text-neutral-900 mt-1 block">{p.basePrice}</span>
                  </div>
                  <div className="bg-neutral-50/80 border border-neutral-200/60 rounded-2xl px-5 py-3 flex-grow basis-[200px]">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase font-bold">Support coverage</span>
                    <span className="text-xs font-bold text-neutral-800 mt-1 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{p.warranty}</span>
                    </span>
                  </div>
                </div>

                {/* Immediate CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-neutral-800 active:scale-98 text-white px-8 py-4 px-6 rounded-2xl text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                    id="product-inquire-btn"
                  >
                    <PhoneCall className="w-4 h-4 text-neutral-400" />
                    <span>Inquire Now & Reserve</span>
                  </button>

                  <a 
                    href="/download/datasheet-mock.pdf"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Your product specifications datasheet has been dynamically compiled and downloaded safely.");
                    }}
                    className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 border border-neutral-250 text-neutral-700 hover:text-neutral-950 py-4 px-6 rounded-2xl text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300"
                  >
                    <FileText className="w-4 h-4 text-neutral-450" />
                    <span>Download Data Sheet</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-[10px] text-neutral-400 font-mono">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Check className="w-3.5 h-3.5 text-emerald-650" /> Compliant with CE, J1772 & OCPP standards
                  </span>
                  <span>•</span>
                  <span>Free professional load site surveys</span>
                </div>
              </div>

              {/* Right Column: Giant centered portrait image with interactive color visualizer cover backlight and HTML Canvas code */}
              <div className="lg:col-span-6 relative flex items-center justify-center bg-neutral-50 rounded-[40px] border border-neutral-200/60 p-8 sm:p-12 md:p-16 overflow-hidden min-h-[480px] md:min-h-[600px] group transition-all duration-500 shadow-sm hover:shadow-md">
                
                {/* Micro-interactive glow matching selected covers */}
                <div 
                  className="absolute inset-0 transition-colors duration-1000 -z-10 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at center, ${selectedColor.bgGlow} 0%, rgba(255,255,255,0) 70%)` 
                  }}
                />

                {/* Generative Interactive Canvas based on active charger technical code */}
                <DynamicProductArtCanvas slug={targetSlug} />

                {/* Dynamic visual badge for the cover */}
                <div className="absolute top-6 left-6 font-mono text-[9px] text-neutral-400 bg-white/90 border border-neutral-200/50 px-3.5 py-1.5 rounded-full shadow-sm font-bold tracking-wider">
                  SHIELD COLOR: <span className="text-black font-extrabold">{selectedColor.name}</span>
                </div>

                {/* 3D bottom casting shadow */}
                <div className="absolute bottom-10 w-48 h-6 bg-black/[0.04] rounded-full blur-2xl transform scale-y-50 group-hover:scale-x-110 group-hover:scale-y-75 transition-transform duration-700 pointer-events-none" />

                {/* Main static high resolution portrait product view */}
                <div className="relative z-10 w-full max-w-[280px] md:max-w-[320px] aspect-[4/5] flex items-center justify-center">
                  <Image
                    src={p.imageSrc}
                    alt={p.name}
                    width={360}
                    height={460}
                    className="object-contain max-h-[380px] w-auto mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.08)] transform group-hover:scale-[1.04] group-hover:-translate-y-2 transition-all duration-700 ease-out"
                    priority
                    referrerPolicy="no-referrer"
                    style={{
                      // Color adjustment based on cover selection
                      filter: selectedColor.name === 'Volcanic Black' ? 'brightness(0.12) contrast(1.18) saturate(0.8)' :
                              selectedColor.name === 'Siberian White' ? 'brightness(1.12) contrast(0.96) grayscale(1)' :
                              selectedColor.name === 'Crimson Energy' ? 'hue-rotate(342deg) saturate(1.85) brightness(0.92)' :
                              selectedColor.name === 'Midnight Cobalt' ? 'hue-rotate(192deg) saturate(1.5) brightness(0.82)' : 'none'
                    }}
                  />
                </div>

                {/* Live webgl state badge */}
                <div className="absolute bottom-6 right-6 font-mono text-[8px] text-neutral-400 flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-neutral-200/50 font-bold tracking-widest">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  <span>DYNAMICS RENDERING ENGINE</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Highlight Metrics Grid - Impeccably Segmented */}
        <section className="bg-neutral-50 py-16 border-t border-b border-neutral-200/65">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="sr-only">Key Specifications Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-neutral-200/80">
              {p.highlightStats.map((stat, idx) => (
                <div key={idx} className="md:px-10 first:pl-0 space-y-3">
                  <span className="block font-mono text-[9px] tracking-[0.2em] uppercase text-blue-600 font-extrabold pb-1">
                    {stat.value}
                  </span>
                  <div className="font-display font-bold text-4xl sm:text-5xl text-neutral-900 leading-none tracking-tight">
                    {stat.label}
                  </div>
                  <p className="text-[#6B7280] text-xs font-light leading-relaxed max-w-[270px]">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-depth Tabs - Inspired by easee.com minimal presentation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Tab Controllers */}
            <div className="flex border-b border-neutral-200 overflow-x-auto scroller-hidden gap-1 md:gap-3">
              {[
                { id: 'overview', label: 'Product Benefits' },
                { id: 'techspecs', label: 'Technical Specifications' },
                { id: 'safety', label: 'Grid Safety Systems' }
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative pb-5 px-6 text-xs font-extrabold uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-200 ${
                      isActive 
                        ? 'text-neutral-950 font-black' 
                        : 'text-neutral-400 hover:text-neutral-600 font-semibold'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-neutral-950 rounded-full" 
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                  >
                    <div className="lg:col-span-12 space-y-10">
                      <div className="max-w-3xl">
                        <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-neutral-950 mb-3">
                          Empowering electrical independence
                        </h3>
                        <p className="text-neutral-500 font-light text-sm leading-relaxed">
                          Each chargeNET product is designed with extreme dedication to high system runtime, active lightning protections, and long continuous hardware cycles. Discover how this unit advances user routines.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {p.benefits.map((benefit, i) => (
                          <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[#FAFBFB] border border-neutral-150/70 hover:border-neutral-250 transition-colors group">
                            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                              <Check className="w-5 h-5 font-black" />
                            </div>
                            <div>
                              <p className="text-neutral-800 text-sm font-medium leading-relaxed">
                                {benefit}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'techspecs' && (
                  <motion.div
                    key="techspecs"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-5xl"
                  >
                    <div className="mb-8 max-w-3xl">
                      <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-neutral-950 mb-3">
                        Full Engineering Parameters
                      </h3>
                      <p className="text-neutral-500 font-light text-sm leading-relaxed">
                        Comprehensive hardware specification matrix showing compliant communication standards, physical enclosure properties, dynamic power boundaries, and standard grid protection metrics.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-[#FAFBFB] rounded-3xl p-8 border border-neutral-150">
                      {p.keySpecs.map((spec, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-4 border-b border-neutral-200/50">
                          <span className="font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase font-bold sm:mr-4 shrink-0">
                            {spec.name}
                          </span>
                          <span className="text-sm font-bold text-neutral-900 leading-normal sm:text-right pt-1 sm:pt-0">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'safety' && (
                  <motion.div
                    key="safety"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                  >
                    <div className="lg:col-span-12 space-y-10">
                      <div className="max-w-3xl">
                        <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-[#1E3A8A] mb-3">
                          Active Grid Safety Safeguards
                        </h3>
                        <p className="text-neutral-500 font-light text-sm leading-relaxed">
                          Electric vehicles are major electrical assets. That&apos;s why our hardware incorporates three distinct active layers of microsecond shutoffs, overvoltage tracking, and real-time residual ground current sync:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {p.safetyFeatures.map((safety, idx) => (
                          <div key={idx} className="p-6 rounded-3xl border border-blue-105 bg-[#F8FAFC] flex flex-col justify-between space-y-6 shadow-sm">
                            <div className="space-y-4">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                                <Shield className="w-5 h-5" />
                              </div>
                              <h4 className="font-mono text-[9px] font-extrabold uppercase text-blue-700 tracking-widest block pt-1">
                                PROTECTION LAYER 0{idx + 1}
                              </h4>
                              <p className="text-neutral-850 text-xs font-bold leading-relaxed">
                                {safety}
                              </p>
                            </div>
                            <div className="text-[9px] font-mono tracking-widest text-[#9CA3AF] uppercase font-bold border-t border-neutral-150 pt-3">
                              SAFE STATE CAPABLE
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Inquiry Dialog Modal overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background backing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg bg-white rounded-[32px] shadow-2xl p-6 sm:p-8 border border-neutral-200 overflow-hidden"
              id="product-inquire-modal"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-neutral-400 hover:text-black transition-colors"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3 mb-6">
                <span className="font-mono text-[9px] text-blue-600 font-extrabold uppercase tracking-widest block">
                  FAST RESERVE AND PLAN
                </span>
                <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-neutral-950">
                  Inquire: {p.name}
                </h3>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">
                  Complete the quick request. Our senior energy consultant will trace your site specifications and schedule a complimentary survey within 24 hours.
                </p>
              </div>

              {inquirySubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h4 className="font-display font-black text-lg text-neutral-900 uppercase">
                    INQUIRY TRANSMITTED
                  </h4>
                  <p className="text-xs text-neutral-550 max-w-xs mx-auto leading-relaxed">
                    Thank you! Sri Lanka&apos;s chargeNET enterprise division has successfully captured your specifications. Expect a direct callback shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyantha Silva"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">E-Mail Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priyantha@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 77 XXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">Company (Optional)</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Organization Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">Desired Context</label>
                      <select
                        value={formData.installationType}
                        onChange={(e) => setFormData({ ...formData, installationType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234B5563%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat"
                      >
                        <option>Home Installation</option>
                        <option>Commercial Fleet</option>
                        <option>Corporate Offices</option>
                        <option>Public Retail Hub</option>
                        <option>Unsure / Need Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-mono font-bold text-[#9CA3AF] uppercase">Additional Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Include custom grid breaker questions or length of cable requirements."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs focus:ring-2 focus:ring-blue-105 focus:border-blue-600 outline-none text-neutral-900 font-bold resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-[0.1em] transition-colors shadow-md mt-2"
                  >
                    Submit Inquiries
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

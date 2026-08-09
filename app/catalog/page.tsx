'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import { ArrowUpRight, Zap, Target, Sliders, Shield, Smartphone, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function CatalogPage() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const [selectedCategory, setSelectedCategory] = React.useState<'all' | 'home' | 'commercial' | 'software'>('all');

  const products = [
    {
      id: 'l2-home-commercial',
      category: 'home',
      name: 'L2 Charger - Home / Commercial',
      subtitle: 'Smart Home & Commercial Dual Use',
      price: 'Rs. 245,000 onwards',
      href: '/products/l2-home-commercial',
      specs: [
        { label: 'Charging Power', value: '7.4 kW to 22 kW' },
        { label: 'Connector Type', value: 'Type 1 or Type 2' },
        { label: 'Connectivity', value: 'Wi-Fi / Bluetooth' },
        { label: 'Adaptable For', value: 'Homes & Multi-tenant Garages' },
      ],
      desc: 'Our highly popular smart charger. L2 Charger offers the best balance between compact sizing and adaptable, high-efficiency scheduling through the mobile application sync system.',
      features: ['Adjustable current from 6A to 32A', 'Scheduled off-peak charging', 'Eco-Smart solar integration ready'],
    },
    {
      id: 'l2-3phase',
      category: 'home',
      name: 'Level 2 Charger - 3 Phase',
      subtitle: 'High Output Three-Phase Domestic Power',
      price: 'Rs. 320,000 onwards',
      href: '/products/l2-3phase',
      specs: [
        { label: 'Charging Power', value: 'Up to 22 kW Peak' },
        { label: 'Phase support', value: 'Three-Phase Dedicated Line' },
        { label: 'Enclosure Protection', value: 'IP55 Waterproofing Enclosure' },
        { label: 'Interface', value: 'Physical RFID or Cloud activation' },
      ],
      desc: 'Engineered specifically for properties equipped with dedicated high-voltage standard 3-phase feeds. Charges high-capacity batteries at peak residential speeds with extreme thermal stability.',
      features: ['Active temperature protection', 'Built-in residual current sensors', 'Seamless overload protection scaling'],
    },
    {
      id: 'low-voltage',
      category: 'home',
      name: 'Low Voltage Charger',
      subtitle: 'Adaptive Power Drops Resilient Series',
      price: 'Rs. 195,000 onwards',
      href: '/products/low-voltage',
      specs: [
        { label: 'Charging Power', value: 'Up to 3.3 kW Adaptive' },
        { label: 'Connector Support', value: 'Type 1 & Type 2' },
        { label: 'Impedance Tracker', value: 'Auto-adjust power sags' },
        { label: 'Recovery Tech', value: 'Auto-resume after outages' },
      ],
      desc: 'Engineered specifically for regional utility grids prone to voltage drops. Maintains safe, optimized low-speed charging during voltage dips, and resumes automatically.',
      features: ['VoltShield grid sags stabilizer', 'High-speed lightning surge arrester', 'Battery heat-sink thermal protector'],
    },
    {
      id: 'cd-80kw',
      category: 'commercial',
      name: 'CD 80 Kw charger',
      subtitle: 'Rapid Commercial DC Hub',
      price: 'Request Enterprise Quote',
      href: '/products/cd-80kw',
      specs: [
        { label: 'Charging Power', value: '80 kW DC Output' },
        { label: 'Port standard', value: 'CCS2 Direct Plug' },
        { label: 'Compliance Protocol', value: 'OCPP 1.6J & OCPP 2.0.1' },
        { label: 'Cabinet Rating', value: 'IK10 Vandal-Proof Outer Plate' },
      ],
      desc: 'Robust commercial fast charger. Enables active cloud monitoring, fleet telemetry dashboards, and configurable paywalls for public charging networks.',
      features: ['Real-time remote software updates', 'Active billing accounting protocols', 'High efficiency modular chassis'],
    },
    {
      id: 'fast-single',
      category: 'commercial',
      name: 'Fast Charger - Single Port',
      subtitle: 'Streamlined High-Capacity Public Terminal',
      price: 'Request Enterprise Quote',
      href: '/products/fast-single',
      specs: [
        { label: 'Charging Power', value: '120 kW to 150 kW DC' },
        { label: 'Output Port', value: 'Single High-Output CCS2' },
        { label: 'Uptime Protocol', value: 'Continuous 4G LTE heartbeats' },
        { label: 'Outdoor Durability', value: 'Maritime salt-spray resistant' },
      ],
      desc: 'Rapid public charger built for extreme highway transit stations. Delivers 100 kilometers of range in single-digit minutes to keep modern traffic moving.',
      features: ['Rugged heavy material fabrication', 'Weather-proof screen interface', 'Ground lock-on protection brackets'],
    },
    {
      id: 'fast-dual',
      category: 'commercial',
      name: 'Fast Charger - Dual Port',
      subtitle: 'Premium Smart Load-Splitting Hub',
      price: 'Request Enterprise Quote',
      href: '/products/fast-dual',
      specs: [
        { label: 'Charging Power', value: '150 kW to 240 kW DC' },
        { label: 'Outputs Ports', value: 'Dual Active CCS2 lines' },
        { label: 'Display Dashboard', value: '10" Multi-language high brightness LCD' },
        { label: 'Grid Shielding', value: 'Full galvanic isolation architecture' },
      ],
      desc: 'Our premium en-route public charging station. Intelligently splits the total output feed dynamic between two connected vehicles depending on vehicle telemetry.',
      features: ['Concurrent multi-vehicle sessions', 'NFC & direct credit card terminal ready', 'Integrated overnight LED guide lighting'],
    },
    {
      id: 'mobile-app',
      category: 'software',
      name: 'Mobile app',
      subtitle: 'Instant Charge Telemetry in Hand',
      price: 'Complimentary Download',
      href: '/#app',
      specs: [
        { label: 'Platforms supported', value: 'iOS & Android' },
        { label: 'Ecosystem protocol', value: 'chargeNET Core Synchronization' },
        { label: 'Session Controls', value: 'Start, stop, schedule, adjust amps' },
        { label: 'Wallet options', value: 'RFID, credit-card, localized wallets' },
      ],
      desc: 'A powerful mobile app for all EV drivers in Sri Lanka. Oversee your home charger output rates, find public en-route ports, pay tariffs instantly, and retrieve physical billing statements.',
      features: ['In-app live watt throughput indicator', 'Anti-theft locks with notification pings', 'Off-peak charging automation'],
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased font-sans">
      <CapsuleHeader />

      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Introduction Area */}
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs text-blue-600 font-bold tracking-widest uppercase block mb-3">
              PRODUCT CATALOGUE
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 mb-6 uppercase">
              Our Smart Infrastructure.
            </h1>
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
              Explore the complete chargeNET ecosystem. Our dynamic portfolio covers smart residential charging, high-capacity commercial platforms, and intelligent software to ensure smooth, zero-emission charging wherever you go.
            </p>
          </div>

          {/* Filtering control pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-neutral-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'all'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('home')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'home'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Home Chargers
            </button>
            <button
              onClick={() => setSelectedCategory('commercial')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'commercial'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Commercial Chargers
            </button>
            <button
              onClick={() => setSelectedCategory('software')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === 'software'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300'
              }`}
            >
              Software Solutions
            </button>
          </div>

          {/* Product Cards Layout */}
          <div className="space-y-12">
            {filteredProducts.map((p, index) => (
              <motion.div 
                id={p.id}
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-white border border-neutral-200 rounded-xl p-8 md:p-12 shadow-sm transition-all duration-300 hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
              >
                {/* Decorative index badge */}
                <span className="absolute top-6 right-8 font-mono text-[10px] text-neutral-300 font-bold block">
                  [ SPEC_ID_0{index + 1} ]
                </span>

                {/* Left block: Title, price summary & overview */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 bg-blue-50/70 px-2.5 py-0.5 rounded-[2px] inline-block mb-3">
                      {p.category === 'home' ? 'Home Charging Line' : p.category === 'commercial' ? 'Commercial Hardware' : 'Software Solutions'}
                    </span>
                    <h2 className="font-display font-black text-2xl md:text-3xl text-neutral-950 leading-tight uppercase">
                      {p.name}
                    </h2>
                    <p className="font-sans font-bold text-xs text-neutral-400 tracking-wide mt-1">
                      {p.subtitle}
                    </p>
                  </div>

                  <p className="text-neutral-600 text-xs md:text-sm font-light leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="space-y-2">
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold">
                      Performance Features
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {p.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                          <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link 
                      href={p.href}
                      className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-[#357BCE] text-white text-xs font-bold px-6 py-3.5 rounded-full shadow-sm transition-all duration-250 active:scale-95"
                    >
                      <span>Explore this Product</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    
                    <span className="text-xs text-neutral-400 font-bold tracking-wide font-mono bg-neutral-50 border border-neutral-150 px-4 py-3 rounded-full">
                      Value: <span className="text-neutral-900 font-black font-sans">{p.price}</span>
                    </span>
                  </div>
                </div>

                {/* Right block: Specifications overview */}
                <div className="lg:col-span-5 bg-neutral-50/70 border border-neutral-200/50 p-6 rounded-lg space-y-4">
                  <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-2 border-b border-neutral-100">
                    DIAGNOSTIC ARCHITECTURE
                  </span>
                  
                  <div className="space-y-4">
                    {p.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-center text-xs pb-3 border-b border-neutral-100/60 last:border-none last:pb-0">
                        <span className="text-neutral-500 font-light">{spec.label}</span>
                        <span className="font-semibold text-neutral-900 text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-emerald-600" /> Ceylon Standards Verified
                    </span>
                    <span>Continuous warranty sync</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

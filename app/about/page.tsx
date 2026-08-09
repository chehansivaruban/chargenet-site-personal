'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import { ShieldCheck, Leaf, Milestone, Landmark } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { value: '180+', label: 'Public locations across Sri Lanka' },
    { value: '15,000+', label: 'Registered active EV drivers' },
    { value: '3.6M kWh', label: 'Clean energy delivered safely' },
    { value: '99.8%', label: 'Active central node uptime' },
  ];

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased font-sans">
      <CapsuleHeader />

      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Title and Mission statement */}
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs text-blue-600 font-bold tracking-widest uppercase block mb-3">
              THE CHARGENET MISSION
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 mb-6">
              {"Empowering Ceylon's electric future."}
            </h1>
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
              {"We are Sri Lanka's first and largest homegrown electric vehicle charging network. Since our inception, our focus has been clear: build sovereign, highly resilient, and modern charging architecture designed to withstand our specific climate, grid constraints, and community needs."}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-neutral-200 rounded-xl p-8 mb-20 shadow-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-display font-black text-2xl md:text-4xl text-[#357BCE]">
                  {stat.value}
                </div>
                <div className="text-[11px] text-neutral-500 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Core Values Section */}
          <div className="space-y-4 mb-20">
            <h3 className="font-display font-black text-lg text-neutral-950 uppercase mb-8 pb-2 border-b border-neutral-200">
              Our Core Guiding Philosophies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Sovereign engineering */}
              <div className="space-y-3">
                <div className="text-blue-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-sm uppercase text-neutral-950">
                  Sovereign Engineering
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  {"Our hardware enclosures and central software protocols are formulated and fabricated locally by our Sri Lankan technical team, promoting organic technological growth and reducing dependence on foreign materials."}
                </p>
              </div>

              {/* Climate integration */}
              <div className="space-y-3">
                <div className="text-emerald-600">
                  <Leaf className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-sm uppercase text-neutral-950">
                  Ecological Commitment
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  {"By syncing grid usage to solar panels and matching overnight low-peak energy rates, we actively assist Sri Lanka in replacing fossil fuels with reliable clean electricity grids."}
                </p>
              </div>

              {/* Accessible mobility */}
              <div className="space-y-3">
                <div className="text-purple-600">
                  <Milestone className="w-8 h-8" />
                </div>
                <h4 className="font-display font-black text-sm uppercase text-neutral-950">
                  Accessible Operations
                </h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">
                  {"Whether in commercial centers, suburban garages, or remote highways, chargeNET stations are designed to provide clean UI experiences, flexible billing protocols, and robust physical protections."}
                </p>
              </div>

            </div>
          </div>

          {/* Elegant quote component */}
          <div className="border bg-white rounded-xl p-8 md:p-12 border-neutral-250 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <Landmark className="w-8 h-8 text-neutral-500" />
              <p className="font-display font-black text-lg md:text-2xl text-neutral-950 tracking-tight leading-snug">
                {"\"We don't import standard hardware and call it our own. We design down to the individual load controllers so that every charger fits comfortably within the power infrastructure of Sri Lanka.\""}
              </p>
              <div className="text-xs text-neutral-400 font-bold block">
                ChargeNET Ceylon Infrastructure Engineering Council
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

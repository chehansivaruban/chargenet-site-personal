'use client';

import * as React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function CommercialIndustrySolutions() {
  const sectors = [
    {
      seq: "01",
      name: "Apartments & Multi-Family",
      description: "Enhance tenant acquisition rates, decrease resident attrition, and boost long-term real estate valuations by installing personalized residential parking charging systems.",
      href: "/business/apartments"
    },
    {
      seq: "02",
      name: "Automotive Showrooms",
      description: "Build robust fleet preparation chargers to fuel electric car inventory and provide complete turn-key EV accessory packs to new premium car buyers.",
      href: "/business/automotive"
    },
    {
      seq: "03",
      name: "Cities & Municipalities",
      description: "Support local environmental guidelines and generate a steady stream of public tariff revenue by providing high-speed curbside charging options.",
      href: "/business/municipalities"
    },
    {
      seq: "04",
      name: "Retail & Hospitality Centers",
      description: "Attract affluent visitors who prefer charging hotels, restaurants, or shopping centers while significantly extending their dwell times on-site.",
      href: "/business/retail"
    },
    {
      seq: "05",
      name: "Fuel Stations & CPOs",
      description: "Upgrade older, legacy high-traffic fueling points into fully electrified, multi-fuel modern hubs prepared to fuel both ICEs and EVs alike.",
      href: "/business/fuel-stations"
    },
    {
      seq: "06",
      name: "Public Parking Hubs",
      description: "Monetize empty space with combined Level 2 AC and Level 3 DC chargers utilizing fully integrated cash-free RFID and credit card systems.",
      href: "/business/parking-hubs"
    },
    {
      seq: "07",
      name: "Workplaces & Fleet Depots",
      description: "Provide reliable depot charging backbones to transition logistics machinery, coupled with key employee-benefit workplace chargers.",
      href: "/business/workplaces"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white text-neutral-900 border-b border-neutral-150 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neutral-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block mb-3">
            SECTOR-SPECIFIC ARCHITECTURE
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-neutral-950 leading-[0.95]">
            Engineered For Every Industry.
          </h2>
          <p className="font-sans text-neutral-500 text-sm md:text-base font-light leading-relaxed mt-4">
            No matter the sector of your business, chargeNET supplies tailored commercial hardware, remote software dashboards, and operational features to match.
          </p>
        </div>

        {/* Premium List Layout (redesigned exactly matching the attached screenshot style) */}
        <div className="border-t border-neutral-150 divide-y divide-neutral-150">
          {sectors.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 sm:p-10 bg-white hover:bg-neutral-950 transition-all duration-500 ease-out cursor-pointer text-left focus:outline-none"
            >
              {/* Row Left: Number Tag & Name */}
              <div className="flex flex-row items-center gap-6 sm:gap-10 md:max-w-4xl">
                {/* Sequence Number Tag */}
                <span className="font-mono text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-500 font-bold tracking-widest select-none pt-1">
                  {s.seq}
                </span>

                {/* Name & short desc */}
                <div className="space-y-2">
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-neutral-950 group-hover:text-white transition-colors duration-300 tracking-tight leading-tight">
                    {s.name}
                  </h3>
                  <p className="font-sans text-neutral-500 group-hover:text-neutral-350 text-xs sm:text-sm font-light leading-relaxed max-w-2xl transition-colors duration-300">
                    {s.description}
                  </p>
                </div>
              </div>

              {/* Row Right: Plus sign exactly matching screenshot design */}
              <div className="mt-4 md:mt-0 flex items-center justify-end shrink-0 pl-10 md:pl-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 group-hover:border-neutral-800 flex items-center justify-center transition-all duration-300 bg-transparent group-hover:bg-neutral-900">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-500 group-hover:text-white transition-transform duration-500 group-hover:rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

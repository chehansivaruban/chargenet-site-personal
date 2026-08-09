'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProductCard {
  id: string;
  fullName: string;
  wordHighlight: string;
  additionalInfo: string;
  colorClass: string;
  textColorClass: string;
  borderColorClass: string;
  imageSrc: string;
  detailUrl: string;
}

export default function HomeChargerProducts() {
  const products: ProductCard[] = [
    {
      id: 'next-gen',
      fullName: 'Next Gen New Charger',
      wordHighlight: 'Next Gen',
      additionalInfo: 'Smart Home Series',
      colorClass: 'bg-[#f4f6f9]', // Sleek Cool Titanium Slate
      textColorClass: 'text-[#1e293b]', // Deep slate
      borderColorClass: 'border-[#cbd5e1]/60',
      imageSrc: '/chargers/home/next_gen.png',
      detailUrl: '/products/next-gen',
    },
    {
      id: 'compatibility',
      fullName: 'Level 2 – 6.6kW and 3.3kW Compatibility',
      wordHighlight: 'Level 2 LCP',
      additionalInfo: 'Adaptive Home Series',
      colorClass: 'bg-[#e9eff5]', // Alpine Blue-Grey
      textColorClass: 'text-[#0f172a]', // Midnight
      borderColorClass: 'border-[#cbdce6]',
      imageSrc: '/chargers/home/L2_66kw.png',
      detailUrl: '/products/l2-home-commercial',
    },
    {
      id: 'velocity',
      fullName: 'Level 2 – 3 Phase up to 22kW',
      wordHighlight: 'Level 2 3-Phase',
      additionalInfo: 'High-Velocity Series',
      colorClass: 'bg-[#f5f2eb]', // Sand Linen Mineral
      textColorClass: 'text-[#1e1b18]', // Deep earth wood
      borderColorClass: 'border-[#e4ddd2]',
      imageSrc: '/chargers/home/L2_3phase.png',
      detailUrl: '/products/l2-3phase',
    },
  ];

  return (
    <section id="products-shelf" className="relative py-24 bg-[#fafafa] text-neutral-900 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Sleek Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block mb-3">
            HOME CHARGING SYSTEM
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl tracking-tight text-neutral-950 uppercase">
            Product Hardware Lineup
          </h2>
        </div>

        {/* Triple Card Layout mirroring the elegant geometric card designs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p.id}
              href={p.detailUrl}
              className={`group relative ${p.colorClass} border ${p.borderColorClass} rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden min-h-[460px] lg:min-h-[500px] cursor-pointer`}
            >
              
              {/* Product Title / Head Segment */}
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-semibold block">
                  {p.additionalInfo}
                </span>
                <h3 className={`font-display font-bold text-3xl sm:text-[34px] leading-[1.0] tracking-tight ${p.textColorClass}`}>
                  {p.fullName}
                </h3>
              </div>

              {/* Central Floating Hardware Image with perspective shadow */}
              <div className="relative my-6 flex items-center justify-center min-h-[170px] sm:min-h-[200px]">
                {/* 3D bottom casting shadow */}
                <div className="absolute bottom-1 w-40 h-5 bg-black/5 rounded-full blur-xl transform scale-y-50 group-hover:scale-y-75 group-hover:scale-x-110 transition-all duration-500 pointer-events-none" />
                
                <div className="relative w-full h-[170px] sm:h-[200px] flex items-center justify-center">
                  <Image
                    src={p.imageSrc}
                    alt={p.fullName}
                    width={320}
                    height={190}
                    className="object-contain max-h-[160px] sm:max-h-[180px] w-auto mx-auto transform group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Bottom Navigation Ribbon */}
              <div className="pt-5 border-t border-black/5 flex items-center justify-between mt-auto">
                <span className="font-sans text-xs font-semibold text-neutral-800 tracking-tight group-hover:text-blue-600 transition-colors">
                  Explore Hardware Specifications
                </span>
                
                {/* Action arrow button that scales on hover */}
                <div className="w-9 h-9 rounded-full bg-neutral-900 group-hover:bg-[#357BCE] text-white flex items-center justify-center transition-all shadow-sm group-hover:scale-110 duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

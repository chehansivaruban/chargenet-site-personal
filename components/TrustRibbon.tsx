'use client';

import * as React from 'react';
import { ShieldCheck, Award, Building } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustRibbon() {
  const certifications = [
    {
      symbol: (
        <span className="font-display font-extrabold tracking-[-0.08em] text-[15px] md:text-[18px] border-[1.5px] border-black px-1.5 py-0.5 leading-none bg-black text-white select-none whitespace-nowrap">
          CE MARK
        </span>
      ),
      title: "CE COMPLIANT",
      desc: "EEA Safety Standard",
    },
    {
      symbol: <ShieldCheck className="w-5 h-5 md:w-6 h-6 text-black shrink-0" />,
      title: "ISO 9001:2015",
      desc: "Quality Management",
    },
    {
      symbol: <Award className="w-5 h-5 md:w-6 h-6 text-black shrink-0" />,
      title: "ISO 14001:2015",
      desc: "Environmental System",
    },
    {
      symbol: <Building className="w-5 h-5 md:w-6 h-6 text-black shrink-0" />,
      title: "ISO 45001:2018",
      desc: "Occupational Safety",
    },
  ];

  // We duplicate the array multiple times to ensure the marquee behaves perfectly on any horizontal width
  const marqueeItems = [...certifications, ...certifications, ...certifications];

  return (
    <section 
      id="certification-ribbon"
      className="absolute bottom-0 left-0 right-0 w-full bg-white border-t border-neutral-200 z-30 select-none overflow-hidden"
    >
      {/* Premium left & right visual edge fades to smoothly blend incoming and outgoing cards on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/40 to-transparent z-40 pointer-events-none lg:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/40 to-transparent z-40 pointer-events-none lg:hidden" />

      {/* MOBILE & TABLET AUTO-MARQUEE ENGINES */}
      <div className="lg:hidden flex overflow-hidden w-full h-16 md:h-20 items-center">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex-none flex flex-row items-center space-x-3 py-4 px-8 md:px-12 border-r border-neutral-100"
            >
              <div className="shrink-0 flex items-center justify-center">
                {item.symbol}
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-display font-black text-xs md:text-sm tracking-widest text-neutral-900 uppercase whitespace-nowrap">
                  {item.title}
                </span>
                <span className="font-sans text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest mt-1 font-medium whitespace-nowrap">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* DESKTOP STATIC CORE GRID LAYOUT */}
      <div className="hidden lg:grid lg:grid-cols-4 w-full divide-x divide-neutral-200 border-neutral-200">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center space-x-4 py-6 md:py-8 px-6 transition-all duration-300 hover:bg-neutral-50"
          >
            <div className="shrink-0 flex items-center justify-center">
              {item.symbol}
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-display font-black text-md tracking-widest text-neutral-900 uppercase whitespace-nowrap">
                {item.title}
              </span>
              <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-widest mt-1 font-medium whitespace-nowrap">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

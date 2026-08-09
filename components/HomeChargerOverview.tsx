'use client';

import * as React from 'react';
import { motion } from 'motion/react';

export default function HomeChargerOverview() {
  return (
    <section className="relative py-24 md:py-36 bg-white text-neutral-900 border-b border-neutral-100 overflow-hidden flex items-center justify-center">
      {/* Subtle, premium abstract ambient light glow for clean design depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Animated Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 mb-8 uppercase"
        >
          Home EV Charging
        </motion.h2>

        {/* Animated Main Description Statement */}
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-sans text-neutral-800 text-lg sm:text-xl md:text-2xl leading-[1.35] tracking-tight font-medium max-w-2xl mx-auto"
        >
          Charge your electric vehicle at home with <span className="text-[#357BCE] font-bold">chargeNET</span>. Now, you decide how to charge, when to charge and how to save. Home just took on a whole new meaning.
        </motion.p>

        {/* Decorative subtle pulse bar for rhythm */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 44 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="h-[3px] bg-[#357BCE] mx-auto mt-12 rounded-full"
        />

      </div>
    </section>
  );
}

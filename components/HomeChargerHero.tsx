'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';

export default function HomeChargerHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Perspective scaling down on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  
  // Parallax zoom rate on background image
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.10]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="relative h-[95dvh] w-full bg-black z-10">
      <motion.section 
        style={{ scale, opacity }}
        className="sticky top-0 h-[95dvh] w-full overflow-hidden flex items-end rounded-b-[36px] md:rounded-b-[56px] shadow-[0_25px_60px_rgba(0,0,0,0.3)] bg-neutral-950 origin-bottom"
      >
        {/* Absolute Background Image loaded via secure Next.js Image optimizer */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden">
          <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 w-full h-full">
            <Image
              src="/home/remove_this_mirror_2K_202605311634.jpeg"
              alt="Smart home charging that grows with you"
              fill
              priority
              className="object-cover object-center transition-opacity duration-1000 ease-out"
              style={{ filter: 'brightness(0.64)' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Aesthetic overlays matching the main landing layout */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
        </div>

        {/* Content resting beautifully with elegant entry animation */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 flex flex-col justify-end">
          <motion.div
            style={{ y: yTranslate }}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="font-mono text-xs text-[#357BCE] font-bold tracking-widest uppercase block mb-3.5">
              Sovereign Power Integration
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white uppercase leading-[0.92] select-none hover:text-[#357BCE] transition-colors duration-300">
              Smart home charging that grows with you
            </h1>
            <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed max-w-2xl mt-6 lg:mt-8">
              Step into high-yield domestic refueling. By balancing smart scheduled connectivity, eco-solar link possibilities, and structural durability, ChargeNET makes home EV charging a clean, effortless pleasure.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}


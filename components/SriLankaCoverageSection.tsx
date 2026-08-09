'use client';

import * as React from 'react';
import { motion, useInView } from 'motion/react';

export default function SriLankaCoverageSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Map video plays only when the map container is visible
  const isMapInView = useInView(mapRef, { amount: 0.3 });

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isMapInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isMapInView]);

  // ─── Animated counter ───
  const [count, setCount] = React.useState(0);
  const counterRef = React.useRef<HTMLDivElement>(null);
  const counterInView = useInView(counterRef, { once: true });

  React.useEffect(() => {
    if (!counterInView) return;
    let frame: number;
    const target = 250;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [counterInView]);

  return (
    <section
      ref={sectionRef}
      id="find-station"
      className="relative w-full min-h-[100dvh] bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* ─── Layout: Two-panel asymmetric split ─── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh]">

        {/* ─── LEFT: Editorial typography panel ─── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-0 relative z-10">
          {/* Massive counter number */}
          <div ref={counterRef} className="mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-2"
            >
              <span className="font-sans font-extralight text-[96px] sm:text-[128px] md:text-[160px] lg:text-[180px] leading-none tracking-tighter text-white tabular-nums">
                {count}
              </span>
              <span className="font-sans font-light text-2xl sm:text-3xl text-white/40 tracking-tight">
                +
              </span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-white/40 font-normal tracking-wide block -mt-2"
            >
              active charging nodes across Sri Lanka
            </motion.span>
          </div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-semibold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-white max-w-lg mb-6 sm:mb-8"
          >
            Every highway.{' '}
            <span className="text-white/30">Every corridor.</span>{' '}
            <span className="text-white/30">Every province.</span>
          </motion.h2>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-white/35 text-sm sm:text-base max-w-md leading-relaxed font-normal mb-12 sm:mb-16"
          >
            From Jaffna to Hambantota, ChargeNET stations are positioned on every major artery — so you never plan a route around charging. Charging plans around you.
          </motion.p>

          {/* Minimal stat row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {[
              { value: '9', label: 'Provinces' },
              { value: '99.9%', label: 'Uptime' },
              { value: '240kW', label: 'Peak Output' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-sans font-semibold text-xl sm:text-2xl text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-white/25 tracking-wide mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: Sri Lanka map ─── */}
        <div
          ref={mapRef}
          className="relative flex items-center justify-center px-6 py-16 lg:py-0"
        >
          {/* Atmospheric glow */}
          <div className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-[#357BCE]/8 rounded-full blur-[120px] pointer-events-none" />

          {/* Live network map video */}
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] rounded-[20px] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <video
              ref={videoRef}
              src="/ChargeNET_Sri_Lanka_charging_grid_202605310052-ezgif.com-video-to-gif-converter.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Animated map of the ChargeNET charging station network across Sri Lanka"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

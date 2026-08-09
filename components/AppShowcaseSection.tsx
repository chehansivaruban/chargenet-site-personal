'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useScroll } from 'motion/react';
import { Apple, Play, Zap } from 'lucide-react';

function StoreBadge({
  eyebrow,
  label,
  icon,
}: {
  eyebrow: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 bg-white hover:bg-[#1d1d1f] text-[#1d1d1f] hover:text-white px-5 py-3 rounded-xl border border-black/10 hover:border-[#1d1d1f] transition-all duration-300"
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wider text-black/45 group-hover:text-white/50 font-sans font-semibold mb-1 transition-colors duration-300">
          {eyebrow}
        </span>
        <span className="text-[16px] font-sans font-bold tracking-tight">{label}</span>
      </span>
    </a>
  );
}

export default function AppShowcaseSection() {
  // ─── Mouse-tilt parallax on the device frame ───
  const frameRef = React.useRef<HTMLDivElement>(null);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 18, mass: 0.4 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 18, mass: 0.4 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rawRotateY.set(px * 8);
    rawRotateX.set(py * -8);
  };
  const handlePointerLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  // ─── Charging cable, draws in as the phone scrolls into view ───
  const cableRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress: cableProgress } = useScroll({
    target: cableRef,
    offset: ['start 0.9', 'start 0.35'],
  });
  const cableDraw = useSpring(cableProgress, { stiffness: 120, damping: 20, mass: 0.5 });

  return (
    <section
      id="app"
      className="relative w-full py-24 sm:py-32 md:py-36 bg-[#f7f7f5] text-[#1d1d1f] overflow-hidden select-none"
    >
      {/* Faint dot-grid texture — consistent with the rest of the site, no blurred color blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      {/* One bold, crisp graphic field behind the device — not a soft blob.
          Smaller and bottom-anchored on mobile (behind just the phone,
          since the layout stacks), full-size and vertically centered from
          lg up (where headline and phone sit side by side). */}
      <div
        className="absolute pointer-events-none rounded-[42%] rotate-[-8deg]
          bottom-[-8%] right-[-22%] w-[380px] h-[380px]
          sm:w-[460px] sm:h-[460px] sm:right-[-16%]
          lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:right-[-8%] lg:w-[620px] lg:h-[620px]"
        style={{
          background: 'linear-gradient(155deg, #357BCE 0%, #1d4b8a 65%, #0c2745 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: headline + store badges only — no feature list */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/5 text-xs font-mono text-[#0071e3] font-semibold shadow-sm mb-7"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>CHARGENET APP</span>
          </motion.div>

          <motion.h2
            initial={{ backgroundPosition: '180% 0' }}
            whileInView={{ backgroundPosition: '0% 0' }}
            viewport={{ once: true }}
            transition={{ duration: 1.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              backgroundImage:
                'linear-gradient(100deg, #1d1d1f 0%, #1d1d1f 42%, #357BCE 50%, #1d1d1f 58%, #1d1d1f 100%)',
              backgroundSize: '280% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            className="font-sans font-black text-[42px] min-[420px]:text-5xl sm:text-6xl md:text-[68px] tracking-tight leading-[1.03] mb-10"
          >
            The app that
            <br />
            gets your EV
            <br />
            charged, anywhere.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <StoreBadge eyebrow="Download on the" label="App Store" icon={<Apple className="w-6 h-6" />} />
            <StoreBadge eyebrow="Get it on" label="Google Play" icon={<Play className="w-5 h-5 fill-current" />} />
          </motion.div>
        </div>

        {/* Right: the device — large, angled, product-shot treatment */}
        <div className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-0">
          <div ref={cableRef} className="relative">
            {/* Charging cable — current draws in as the phone scrolls into view */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 -bottom-14 w-20 h-24 pointer-events-none z-0"
              viewBox="0 0 100 120"
              fill="none"
            >
              <path
                d="M50 120 C 50 85, 20 78, 20 50 C 20 22, 50 22, 50 0"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <motion.path
                d="M50 120 C 50 85, 20 78, 20 50 C 20 22, 50 22, 50 0"
                stroke="#ffffff"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength: cableDraw }}
              />
            </svg>

            {/* Ground shadow — sells the product-shot depth instead of decoration */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6%] w-[70%] h-10 bg-black/25 rounded-[100%] blur-2xl pointer-events-none" />

            <motion.div
              ref={frameRef}
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{ perspective: 1400 }}
              className="relative"
            >
              <motion.div
                style={{ rotateX, rotateY, rotate: -3, transformStyle: 'preserve-3d' }}
                className="relative w-[220px] sm:w-[260px] md:w-[290px]"
              >
                <Image
                  src="/app-phone-crop.png"
                  alt="ChargeNET mobile app"
                  width={250}
                  height={683}
                  className="w-full h-auto select-none drop-shadow-[0_35px_45px_rgba(0,0,0,0.35)] rounded-[28px]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

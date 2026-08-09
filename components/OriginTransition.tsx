'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Zap, Cpu, Award } from 'lucide-react';

export default function OriginTransition() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 18, mass: 0.8 });

  // ─── Cinematic Scroll Transforms ───

  // 1. Zoom and rotate the background circuit wire mesh
  const meshScale = useTransform(smoothProgress, [0, 0.8], [0.95, 1.15]);
  const meshOpacity = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [0.2, 0.9, 0.9, 0.2]);

  // 2. The Morphing Iris Portal: expands to consume the viewport with dark theme
  const portalScale = useTransform(smoothProgress, [0.1, 0.85], [0.1, 4.5]);
  const portalBlur = useTransform(smoothProgress, [0.1, 0.5, 0.85], ['blur-[4px]', 'blur-[0px]', 'blur-[4px]']);

  // 3. Staggered text narrative fade & slide
  const textTranslateY = useTransform(smoothProgress, [0.2, 0.75], [50, -50]);
  const textOpacity = useTransform(smoothProgress, [0.2, 0.35, 0.65, 0.8], [0, 1, 1, 0]);

  // 4. Conduit neon laser paths
  const laserDraw = useTransform(smoothProgress, [0.15, 0.8], [0, 1]);
  const laserOpacity = useTransform(smoothProgress, [0.15, 0.3, 0.7, 0.85], [0, 0.85, 0.85, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden bg-[#f5f5f7] transition-colors duration-500"
    >
      {/* ────────────────── STATIC LIGHT THEME UNDERLAY ────────────────── */}
      <div className="absolute inset-0 bg-[#f5f5f7] z-0" />

      {/* ────────────────── DARK PORTAL REVEAL (Iris) ────────────────── */}
      {/* As the user scrolls, this circular black container scales up to fill the screen */}
      <motion.div
        style={{ scale: portalScale }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[280px] min-h-[280px] rounded-full bg-[#060609] z-10 shadow-[0_0_120px_rgba(53,124,206,0.25)] flex items-center justify-center overflow-hidden"
      >
        {/* Ambient interior portal glow */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* ────────────────── DYNAMIC SCHEMATIC OVERLAY ────────────────── */}
      {/* SVG drawing lines that bridge the partner nodes to origin engineering */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-80">
        <defs>
          <linearGradient id="portal-laser-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.6)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>

        {/* Dynamic routing wire paths */}
        <motion.path
          d="M 10% 20% L 35% 50% L 50% 50%"
          fill="none"
          stroke="url(#portal-laser-1)"
          strokeWidth={1.5}
          strokeDasharray="8 4"
          style={{ pathLength: laserDraw, opacity: laserOpacity }}
        />
        <motion.path
          d="M 90% 80% L 65% 50% L 50% 50%"
          fill="none"
          stroke="url(#portal-laser-1)"
          strokeWidth={1.5}
          strokeDasharray="8 4"
          style={{ pathLength: laserDraw, opacity: laserOpacity }}
        />
      </svg>

      {/* ────────────────── NARRATIVE HUD CONTENT ────────────────── */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pointer-events-none select-none mix-blend-difference"
        style={{ y: textTranslateY, opacity: textOpacity }}
      >
        <div className="space-y-6 max-w-2xl">
          {/* Diagnostic micro indicators */}
         

          <h3 className="font-sans font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-white">
            Connecting the network.
            <br />
            Revealing the origin.
          </h3>

          <p className="font-sans text-white/40 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Dynamic phase routing complete. Synchronizing network telemetry node blocks with our engineering core in Colombo.
          </p>


        </div>
      </motion.div>
    </div>
  );
}

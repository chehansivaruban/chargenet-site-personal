'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'motion/react';

/* ─────────────────────────── DECO METADATA ─────────────────────────── */

const TELEMETRY_NODES = [
  { label: 'TRANS-GRID HANDSHAKE', val: 'SECURE', x: '15%', y: '25%' },
  { label: 'SYS_VOLTAGE', val: '800V DC', x: '80%', y: '15%' },
  { label: 'CAPACITIVE_CHARGE', val: '99.4%', x: '20%', y: '75%' },
  { label: 'FLOW_TELEMETRY', val: '10.2 Gb/s', x: '75%', y: '65%' },
];

export default function CinematicTransition() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth scroll progress using a spring for physics-based inertia
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.8 });

  // ─── Animations mapped to scroll ───

  // 1. Grid collapse: Grid lines rotate and skew as if collapsing under magnetic pull
  const gridSkewY = useTransform(smoothProgress, [0, 0.6], [0, -12]);
  const gridScale = useTransform(smoothProgress, [0, 0.6], [1, 0.88]);
  const gridOpacity = useTransform(smoothProgress, [0, 0.5], [0.12, 0]);

  // 2. The Ink/Liquid curtain wave: translateY of the light curtain rolling up
  const curtainY = useTransform(smoothProgress, [0.05, 0.8], ['0%', '-105%']);

  // 3. Glowing neon energy streams: paths that grow/draw as you scroll
  const streamDraw = useTransform(smoothProgress, [0.1, 0.75], [0, 1]);
  const streamOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.65, 0.8], [0, 0.9, 0.9, 0]);

  // 4. Central energy flare: expands and fades as grid collapses
  const flareScale = useTransform(smoothProgress, [0.2, 0.75], [0.5, 2.5]);
  const flareOpacity = useTransform(smoothProgress, [0.2, 0.5, 0.75], [0, 0.75, 0]);

  // 5. Telemetry overlays: float upward and fade out
  const telemetryY = useTransform(smoothProgress, [0.1, 0.7], [30, -50]);
  const telemetryOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.55, 0.7], [0, 0.7, 0.7, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[75vh] sm:h-[90vh] overflow-hidden bg-[#060609]"
    >
      {/* ────────────────── DARK SECTION PRE-UNDERLAY ────────────────── */}
      {/* Ambient background glows for the incoming dark section */}
      <div className="absolute inset-0 bg-[#060609] pointer-events-none z-0">
        {/* Soft blue glow core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#357BCE]/8 rounded-full blur-[140px]"
          style={{ scale: flareScale, opacity: flareOpacity }}
        />
        {/* Warm cyan secondary accent */}
        <div className="absolute bottom-0 right-[20%] w-[350px] h-[300px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* SVG Neon Energy Streams (draws in behind the rolling light layer) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70">
        <defs>
          <linearGradient id="stream-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(53,124,206,0)" />
            <stop offset="50%" stopColor="rgba(53,124,206,0.6)" />
            <stop offset="100%" stopColor="rgba(6,6,9,0)" />
          </linearGradient>
          <linearGradient id="stream-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,6,9,0)" />
            <stop offset="50%" stopColor="rgba(34,211,238,0.5)" />
            <stop offset="100%" stopColor="rgba(6,6,9,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -100 100 Q 300 400, 800 200 T 1900 700"
          fill="none"
          stroke="url(#stream-grad-1)"
          strokeWidth={1.5}
          style={{ pathLength: streamDraw, opacity: streamOpacity }}
        />
        <motion.path
          d="M 2000 100 Q 1400 500, 900 300 T -100 600"
          fill="none"
          stroke="url(#stream-grad-2)"
          strokeWidth={1}
          style={{ pathLength: streamDraw, opacity: streamOpacity }}
        />
      </svg>

      {/* Floating HUD Telemetry Readouts */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 select-none hidden md:block"
        style={{ y: telemetryY, opacity: telemetryOpacity }}
      >
        {TELEMETRY_NODES.map((node, i) => (
          <div
            key={i}
            className="absolute p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] backdrop-blur-[2px]"
            style={{ left: node.x, top: node.y }}
          >
            <div className="font-mono text-[8px] tracking-[0.2em] text-white/30 uppercase mb-0.5">
              {node.label}
            </div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-[#357BCE] font-bold">
              {node.val}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ────────────────── LIGHT SECTION OVERLAY (ROLLS UP) ────────────────── */}
      {/* This layer starts fully covering the viewport with the light theme background.
          As you scroll, it rolls upward, morphing via an organic curved bottom shape. */}
      <motion.div
        className="absolute inset-0 z-20 origin-top will-change-transform"
        style={{ y: curtainY }}
      >
        {/* Core light body */}
        <div className="absolute inset-x-0 top-0 bottom-[120px] bg-[#f5f5f7] overflow-hidden">
          {/* Tech grid texture - warps and collapses */}
          <motion.div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              skewY: gridSkewY,
              scale: gridScale,
              opacity: gridOpacity,
            }}
          />

          {/* Central focus highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.02)_100%)] pointer-events-none" />
        </div>

        {/* Morphing Liquid Wave Wavefront (SVG shape at the bottom of the light curtain) */}
        <div className="absolute inset-x-0 bottom-0 h-[122px] pointer-events-none fill-[#f5f5f7] -mt-1">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Curved organic double-wave path */}
            <path d="M 0 0 L 0 60 Q 360 120, 720 60 T 1440 60 L 1440 0 Z" />
          </svg>
        </div>

        {/* Ambient shadow gradient at the wavefront edge to give it physical depth */}
        <div
          className="absolute inset-x-0 bottom-[-40px] h-[40px] pointer-events-none z-30"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 100%)',
          }}
        />
      </motion.div>
    </div>
  );
}

'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring, type MotionValue } from 'motion/react';
import { ChevronDown, Cpu, Wifi } from 'lucide-react';

// Faint fractal-noise grain, applied as a low-opacity overlay — the texture
// that keeps a large dark canvas from reading as a flat digital void.
const GRAIN_URI =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

interface Line {
  text: string;
  fromRotate: number;
  fromDx: number;
  accent?: boolean;
}

// The mission statement, broken into short flowing fragments. Each line
// starts tilted and off-center and animates to flat and centered as it
// reveals — a settling motion, not a permanent tilt, so the resting quote
// reads as one clean centered paragraph.
const LINES: Line[] = [
  { text: 'We rebuild electric grids', fromRotate: -3, fromDx: -26 },
  { text: 'to enable high-efficiency,', fromRotate: 2.5, fromDx: 30 },
  { text: 'long-distance travel —', fromRotate: -2, fromDx: -18 },
  { text: 'designed, built, and operated', fromRotate: 3, fromDx: 24 },
  { text: 'with clean electric reliability.', fromRotate: -2.5, fromDx: -16, accent: true },
];

// Each line's reveal window along the shared scroll progress, with a little
// overlap between consecutive lines so the sequence reads as one continuous
// sweep rather than discrete steps.
const RANGES: [number, number][] = [
  [0, 0.32],
  [0.17, 0.49],
  [0.34, 0.66],
  [0.51, 0.83],
  [0.68, 1],
];

// Fixed (not random) ambient particle layout — random values computed at
// render time would differ between the server and the first client render
// and trigger a hydration mismatch, so these are hand-placed instead.
const PARTICLES = [
  { left: '12%', size: 3, duration: 7, delay: 0 },
  { left: '22%', size: 2, duration: 9, delay: 1.4 },
  { left: '38%', size: 2.5, duration: 8, delay: 0.6 },
  { left: '58%', size: 3, duration: 10, delay: 2.1 },
  { left: '71%', size: 2, duration: 7.5, delay: 0.9 },
  { left: '84%', size: 2.5, duration: 8.5, delay: 1.8 },
  { left: '93%', size: 3, duration: 9.5, delay: 0.3 },
];

function QuoteLine({
  line,
  range,
  progress,
}: {
  line: Line;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const blurPx = useTransform(progress, range, [14, 0]);
  const rotate = useTransform(progress, range, [line.fromRotate, 0]);
  const x = useTransform(progress, range, [line.fromDx, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  // Raw scroll-driven targets, then springed — this is what sells "coming
  // out of the screen at you" rather than a flat fade: each line starts
  // small, distant, and blurred, then grows toward full size with a soft
  // physical overshoot as it arrives, instead of snapping linearly to rest.
  const rawScale = useTransform(progress, range, [0.55, 1]);
  const scale = useSpring(rawScale, { stiffness: 110, damping: 14, mass: 0.7 });
  const rawY = useTransform(progress, range, [34, 0]);
  const y = useSpring(rawY, { stiffness: 110, damping: 16, mass: 0.7 });

  return (
    <motion.span
      style={{ opacity, y, scale, filter, rotate, x }}
      className={`block will-change-transform ${
        line.accent ? 'text-[#357BCE] font-bold' : 'text-white font-semibold'
      }`}
    >
      {line.text}
    </motion.span>
  );
}



interface ChipProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className: string;
  baseRotate: number;
  parallaxY: MotionValue<number>;
  parallaxRotate: MotionValue<number>;
  mouse: { x: number; y: number };
  mouseFactor: number;
  bobDuration: number;
  bobDelay: number;
}

// Same three-layer motion treatment as the photos (scroll parallax, idle
// bob, cursor drift), applied to a glass info card instead of a photo —
// these sit in the two corners the photos don't occupy.
function FloatingChip({
  icon: Icon,
  title,
  description,
  className,
  baseRotate,
  parallaxY,
  parallaxRotate,
  mouse,
  mouseFactor,
  bobDuration,
  bobDelay,
}: ChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: parallaxY, rotate: parallaxRotate }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [-7, 7, -7] }}
        transition={{ duration: bobDuration, delay: bobDelay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          style={{
            transform: `translate(${mouse.x * mouseFactor}px, ${mouse.y * mouseFactor}px) rotate(${baseRotate}deg)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="w-[200px] sm:w-[230px] bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#357BCE] mb-3">
            <Icon className="w-4.5 h-4.5 stroke-[1.75]" />
          </div>
          <h3 className="font-sans font-semibold text-sm text-white tracking-tight mb-1.5">{title}</h3>
          <p className="font-sans text-white/45 text-[11px] leading-relaxed font-normal">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GridMissionSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const quoteRef = React.useRef<HTMLDivElement>(null);

  // Progress spans a fixed scroll band as the quote's top edge travels from
  // just below mid-viewport up toward the top — independent of how tall the
  // section is, so nothing needs retuning if content changes.
  const { scrollYProgress: revealProgress } = useScroll({
    target: quoteRef,
    offset: ['start 0.92', 'start 0.2'],
  });

  // A second, section-wide progress (0 → 1 across the whole scroll passage)
  // used purely for parallax depth — independent of the line reveal above.
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const quoteParallaxY = useTransform(sectionProgress, [0, 1], [30, -50]);
  const chip1ParallaxY = useTransform(sectionProgress, [0, 1], [-50, 80]);
  const chip1ParallaxRotate = useTransform(sectionProgress, [0, 1], [6, -3]);
  const chip2ParallaxY = useTransform(sectionProgress, [0, 1], [100, -90]);
  const chip2ParallaxRotate = useTransform(sectionProgress, [0, 1], [-7, 2]);

  // Cursor-reactive drift for the floating photos.
  const [mouse, setMouse] = React.useState({ x: 0, y: 0 });
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="grid-mission-section"
      onPointerMove={handlePointerMove}
      className="relative w-full min-h-[130vh] md:min-h-[145vh] shrink-0 bg-[#08070a] text-white flex flex-col overflow-hidden z-30 select-none"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: `url("${GRAIN_URI}")` }}
      />

      {/* Ambient glow — breathes continuously rather than sitting static */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#357BCE] rounded-full blur-[180px] pointer-events-none"
      />

      {/* Drifting ambient particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute bottom-0 rounded-full bg-[#357BCE]/60 pointer-events-none"
          style={{ left: p.left, width: p.size, height: p.size }}
          animate={{ y: ['0vh', '-70vh'], opacity: [0, 0.7, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}



      {/* Floating info chips — the other two corners */}
      <FloatingChip
        icon={Cpu}
        title="Infrastructure"
        description="Island-wide load distribution, thermal diagnostics, and dynamic power routing."
        className="right-4 sm:right-10 md:right-16 top-[8vh] sm:top-[10vh]"
        baseRotate={-4}
        parallaxY={chip1ParallaxY}
        parallaxRotate={chip1ParallaxRotate}
        mouse={mouse}
        mouseFactor={14}
        bobDuration={5}
        bobDelay={0.3}
      />

      <FloatingChip
        icon={Wifi}
        title="Connectivity"
        description="Instant OTA updates, integrated ticketing, and live telemetry at 99.9% uptime."
        className="left-4 sm:left-10 md:left-16 bottom-[10vh] sm:bottom-[12vh]"
        baseRotate={3}
        parallaxY={chip2ParallaxY}
        parallaxRotate={chip2ParallaxRotate}
        mouse={mouse}
        mouseFactor={-16}
        bobDuration={6}
        bobDelay={1}
      />

      {/* Quote — scroll-scrubbed line-by-line reveal, settling flat and
          centered, plus a slow parallax drift across the full section so
          it keeps moving even once every line has settled in */}
      <motion.div
        ref={quoteRef}
        style={{ y: quoteParallaxY, perspective: 1000 }}
        className="relative z-20 max-w-4xl mx-auto w-full px-6 flex-1 flex items-center justify-center text-center"
      >
        <h2 className="font-sans text-3xl min-[390px]:text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.22]">
          {LINES.map((line, i) => (
            <QuoteLine key={i} line={line} range={RANGES[i]} progress={revealProgress} />
          ))}
        </h2>
      </motion.div>

      {/* Scroll indicator */}
      <div className="relative z-20 flex items-center justify-center gap-2 pb-10 pointer-events-none">
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/40"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">Down</span>
      </div>
    </section>
  );
}

'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  type MotionValue,
} from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface SplitChapter {
  kind: 'split';
  side: 'left' | 'right';
  image: string;
  imageAspect: 'landscape' | 'portrait';
  tag: string;
  title: string;
  body: string;
  cta: string;
  // When true, the image only drifts (x/y parallax) and never scales —
  // some source images already fill their frame tightly, so the zoom
  // makes them crop awkwardly as they move.
  noZoom?: boolean;
}

interface BookendChapter {
  kind: 'intro' | 'outro';
  tag: string;
  title: string;
  body?: string;
  pills?: string[];
}

type Chapter = SplitChapter | BookendChapter;

function isBookend(chapter: Chapter): chapter is BookendChapter {
  return chapter.kind === 'intro' || chapter.kind === 'outro';
}

const CHAPTERS: Chapter[] = [
  {
    kind: 'intro',
    tag: 'OUR TECHNOLOGY',
    title: 'Precision Engineering.\nBuilt for the Grid.\nTrusted at Every Charge.',
    body: 'The first Sri Lankan-built charging network — power electronics, firmware, and enclosure, engineered and manufactured entirely in Colombo.',
  },
  {
    kind: 'split',
    side: 'right',
    image: '/origin_showcase/power.png',
    imageAspect: 'landscape',
    noZoom: true,
    tag: 'ELECTRONICS',
    title: 'First-principles power architecture.',
    body: 'Engineered to operate reliably under variable grid conditions — dynamic load balancing, transient surge protection, and liquid-cooled high-efficiency modules.',
    cta: 'POWER ARCHITECTURE',
  },
  {
    kind: 'split',
    side: 'left',
    image: '/origin_showcase/firmware.png',
    imageAspect: 'portrait',
    tag: 'EMBEDDED FIRMWARE',
    title: 'Real-time systems, built fully in-house.',
    body: 'Instantaneous OTA synchronization, encrypted handshake telemetry, and proprietary smart load curtailment running on our own embedded stack.',
    cta: 'EMBEDDED STACK',
  },
  {
    kind: 'split',
    side: 'right',
    image: '/origin_showcase/enclosure.png',
    imageAspect: 'portrait',
    tag: 'INDUSTRIAL DESIGN',
    title: 'Architectural-grade enclosures.',
    body: 'Powder-coated stainless steel frameworks rated IP54 for extreme climate resilience — assembled entirely by our engineers in Colombo.',
    cta: 'ENCLOSURE DESIGN',
  },
  {
    kind: 'outro',
    tag: 'NO SHORTCUTS',
    title: 'Just Real Engineering,\nDelivered with Integrity.',
    pills: ['LOCAL ENGINEERING', 'ISO CERTIFIED'],
  },
];

const N = CHAPTERS.length;

// Smoothstep — every crossfade in this component runs through this instead
// of raw linear interpolation. Linear opacity/scale ramps read as a digital
// dissolve; the eased S-curve is what makes a crossfade read as filmic.
function ease(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

// Fade-in / hold / fade-out envelope for one chapter's slice of the shared
// scroll progress, with edge cases so the very first chapter is already
// visible at progress 0 and the very last stays visible through progress 1.
function computeChapterOpacity(p: number, index: number): number {
  const start = index / N;
  const end = (index + 1) / N;
  const pad = (end - start) * 0.2;

  if (index === 0) {
    if (p <= end - pad) return 1;
    if (p >= end) return 0;
    return ease(1 - (p - (end - pad)) / pad);
  }
  if (index === N - 1) {
    if (p <= start) return 0;
    if (p >= start + pad) return 1;
    return ease((p - start) / pad);
  }
  if (p <= start || p >= end) return 0;
  if (p <= start + pad) return ease((p - start) / pad);
  if (p >= end - pad) return ease(1 - (p - (end - pad)) / pad);
  return 1;
}

// The image arrives with a quick eased push-in (1.12 → 1) over the first
// ~30% of its chapter's window, then holds at rest — instead of continuing
// to shrink the whole time it's on screen. The parallax drift (below) is
// what keeps it moving through the rest of the dwell.
function computeChapterScale(p: number, index: number): number {
  const start = index / N;
  const end = (index + 1) / N;
  const entranceSpan = (end - start) * 0.3;
  if (entranceSpan <= 0) return 1;
  const t = clamp01((p - start) / entranceSpan);
  return 1.12 - 0.12 * ease(t);
}

// Drifts an image from -PARALLAX_PX to +PARALLAX_PX across its own
// chapter's scroll window (clamped outside it) — the image keeps moving
// the whole time its chapter is on screen, instead of sitting static once
// revealed.
const PARALLAX_PX = 42;

function computeChapterParallax(p: number, index: number): number {
  const start = index / N;
  const end = (index + 1) / N;
  const t = clamp01((p - start) / (end - start));
  return (t - 0.5) * 2 * PARALLAX_PX;
}

// One caption element's reveal within its chapter — a short eased entrance
// window, offset by `order` so tag → title → body → cta arrive as a
// cascade instead of popping in together, capped by the chapter's own
// opacity envelope so exits still fade out as one unit.
function computeItemOpacity(p: number, index: number, order: number): number {
  const chapterOp = computeChapterOpacity(p, index);
  const start = index / N;
  const end = (index + 1) / N;
  const entranceSpan = (end - start) * 0.22;
  const staggerStep = entranceSpan * 0.3;
  const itemStart = start + order * staggerStep;
  const itemSpan = entranceSpan * 0.65;
  if (itemSpan <= 0) return chapterOp;
  const t = clamp01((p - itemStart) / itemSpan);
  return Math.min(chapterOp, ease(t));
}

function useItemMotion(progress: MotionValue<number>, index: number, order: number) {
  const opacity = useTransform(progress, (p) => computeItemOpacity(p, index, order));
  const y = useTransform(opacity, (o) => (1 - o) * 18);
  const blurPx = useTransform(opacity, (o) => (1 - o) * 9);
  const filter = useMotionTemplate`blur(${blurPx}px)`;
  return { opacity, y, filter };
}

function ChapterDot({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const dotOpacity = useTransform(progress, (p) => computeChapterOpacity(p, index));
  const opacity = useTransform(dotOpacity, (v) => 0.25 + v * 0.75);
  const scale = useTransform(dotOpacity, (v) => 0.8 + v * 0.6);
  return <motion.span className="w-1.5 h-1.5 rounded-full bg-[#357BCE]" style={{ opacity, scale }} />;
}

// Small "film reel" timecode readout — 01 / 05 — ticking over as the
// active chapter changes. Motion values don't re-render text on their own,
// so this subscribes and mirrors the active index into real React state.
function TimecodeReadout({ progress }: { progress: MotionValue<number> }) {
  const [index, setIndex] = React.useState(0);
  useMotionValueEvent(progress, 'change', (p) => {
    const i = Math.min(N - 1, Math.max(0, Math.floor(p * N)));
    setIndex(i);
  });
  return (
    <span className="font-mono text-[9px] tracking-[0.15em] text-white/25 tabular-nums">
      {String(index + 1).padStart(2, '0')}/{String(N).padStart(2, '0')}
    </span>
  );
}

function ChapterSlide({
  chapter,
  index,
  progress,
}: {
  chapter: Chapter;
  index: number;
  progress: MotionValue<number>;
}) {
  const chapterOpacity = useTransform(progress, (p) => computeChapterOpacity(p, index));
  const imageBlurPx = useTransform(chapterOpacity, (o) => (1 - o) * 18);
  const imageFilter = useMotionTemplate`blur(${imageBlurPx}px)`;
  const scale = useTransform(progress, (p) => computeChapterScale(p, index));
  const parallax = useTransform(progress, (p) => computeChapterParallax(p, index));

  const tagMotion = useItemMotion(progress, index, 0);
  const titleMotion = useItemMotion(progress, index, 1);
  const bodyMotion = useItemMotion(progress, index, 2);
  const ctaMotion = useItemMotion(progress, index, 3);

  if (isBookend(chapter)) {
    return (
      <motion.div style={{ opacity: chapterOpacity }} className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div style={{ scale, y: parallax, filter: imageFilter }} className="absolute inset-0">
          <Image src="/origin_showcase/background.png" alt="" fill className="object-cover" sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-3xl text-center">
          <motion.h2
            style={titleMotion}
            className="font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-[1.12] text-white whitespace-pre-line mb-6"
          >
            {chapter.title}
          </motion.h2>
          {chapter.body && (
            <motion.p
              style={bodyMotion}
              className="font-sans text-white/55 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
            >
              {chapter.body}
            </motion.p>
          )}
          {chapter.pills && (
            <motion.div style={ctaMotion} className="flex items-center justify-center gap-2.5 mt-7">
              {chapter.pills.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-[3px] bg-[#357BCE]/20 border border-[#357BCE]/40 font-mono text-[10px] tracking-[0.15em] text-[#8fb8e8]"
                >
                  {p}
                </span>
              ))}
            </motion.div>
          )}
          {chapter.kind === 'intro' && (
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex justify-center mt-14"
            >
              <ChevronDown className="w-5 h-5 text-white/40" />
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }

  const imageBlock = (
    <div
      className={`relative w-full overflow-hidden ${chapter.imageAspect === 'landscape' ? 'h-[38vh] sm:h-[46vh] md:h-[52vh]' : 'h-[52vh] sm:h-[62vh] md:h-[72vh]'}`}
    >
      <motion.div
        style={{
          scale: chapter.noZoom ? 1 : scale,
          x: chapter.imageAspect === 'landscape' ? parallax : 0,
          y: chapter.imageAspect === 'portrait' ? parallax : 0,
          filter: imageFilter,
        }}
        className="absolute inset-0"
      >
        <Image
          src={chapter.image}
          alt={chapter.title}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </motion.div>
    </div>
  );

  const textBlock = (
    <div className={chapter.side === 'left' ? 'lg:pl-4' : 'lg:pr-4'}>
      <motion.span
        style={tagMotion}
        className="inline-block px-2.5 py-1 mb-5 rounded-[3px] bg-[#357BCE]/20 border border-[#357BCE]/40 font-mono text-[10px] tracking-[0.2em] text-[#8fb8e8]"
      >
        {chapter.tag}
      </motion.span>
      <motion.h3
        style={titleMotion}
        className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.15] text-white mb-5 max-w-md"
      >
        {chapter.title}
      </motion.h3>
      <motion.p style={bodyMotion} className="font-sans text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-md mb-7">
        {chapter.body}
      </motion.p>
      <motion.button
        type="button"
        style={ctaMotion}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[3px] border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 transition-colors duration-300 font-mono text-[10px] tracking-[0.15em] text-white/80"
      >
        <span>{chapter.cta}</span>
        <ArrowRight className="w-3 h-3" />
      </motion.button>
    </div>
  );

  return (
    <motion.div style={{ opacity: chapterOpacity }} className="absolute inset-0 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {chapter.side === 'left' ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </motion.div>
  );
}

// A hand-rolled equivalent of `position: sticky`, using fixed/absolute
// toggling driven by a real scroll listener instead. This page's root
// layout wrapper carries `overflow-x-hidden`, which per a well-known CSS
// quirk forces `overflow-y: auto` on it — making it (not the true
// viewport) the nearest ancestor scroll container for sticky-positioning
// purposes. Since that wrapper's height is always exactly its content
// height, its own scroll offset never moves, so `position: sticky` inside
// it never actually engages. Fixing that wrapper site-wide turned out to
// interact badly with the global mandatory scroll-snap config, so instead
// this pin is implemented locally with `position: fixed`, which only cares
// about *transformed* ancestors, not scroll containers — sidestepping the
// issue entirely without any page-wide change.
function usePinMode(sectionRef: React.RefObject<HTMLElement | null>) {
  const [mode, setMode] = React.useState<'before' | 'pinned' | 'after'>('before');

  React.useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > 0) setMode('before');
      else if (rect.bottom <= window.innerHeight) setMode('after');
      else setMode('pinned');
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionRef]);

  return mode;
}

// Strength (0-1) of the cinema framing — letterbox bars + vignette. Ramps
// in over the first ~2.5% of the pin and back out over the last ~2.5%, so
// the "you're watching something" framing brackets the whole sequence
// rather than snapping on and off.
function computeFrameStrength(p: number): number {
  const inEnd = 0.025;
  const outStart = 0.975;
  if (p <= 0 || p >= 1) return 0;
  if (p < inEnd) return ease(p / inEnd);
  if (p > outStart) return ease((1 - p) / (1 - outStart));
  return 1;
}

export default function OriginShowcase() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const pinMode = usePinMode(sectionRef);

  const frameStrength = useTransform(scrollYProgress, computeFrameStrength);
  const vignetteOpacity = useTransform(frameStrength, (v) => v * 0.6);

  return (
    <section id="origin-section" ref={sectionRef} className="relative w-full bg-black" style={{ height: `${N * 100}vh` }}>
      <div
        className="w-full h-[100dvh] overflow-hidden"
        style={
          pinMode === 'pinned'
            ? { position: 'fixed', top: 0, left: 0, right: 0 }
            : pinMode === 'after'
              ? { position: 'absolute', bottom: 0, left: 0, right: 0 }
              : { position: 'absolute', top: 0, left: 0, right: 0 }
        }
      >
        {/* Grain texture, consistent with the site's other dark sections */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        {/* Vignette — darkens the edges so the eye stays on the subject,
            brackets the pinned sequence together with the letterbox bars */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-25"
          style={{
            opacity: vignetteOpacity,
            background: 'radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.75) 100%)',
          }}
        />

        {/* Letterbox bars — the "you're watching something" cinema frame,
            sliding in as the pin engages and away as it releases */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[5vh] sm:h-[6.5vh] bg-black z-40 pointer-events-none"
          style={{ scaleY: frameStrength, transformOrigin: 'top' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[5vh] sm:h-[6.5vh] bg-black z-40 pointer-events-none"
          style={{ scaleY: frameStrength, transformOrigin: 'bottom' }}
        />

        {/* Chapter progress rail */}
        <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
          {CHAPTERS.map((_, i) => (
            <ChapterDot key={i} index={i} progress={scrollYProgress} />
          ))}
          <div className="w-4 h-px bg-white/15 my-1" />
          <TimecodeReadout progress={scrollYProgress} />
        </div>

        {CHAPTERS.map((chapter, i) => (
          <ChapterSlide key={i} chapter={chapter} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

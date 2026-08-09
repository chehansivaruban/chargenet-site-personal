'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const partnerLogos = [
  { url: '/partners/cropped-ioc.webp', name: 'Lanka IOC' },
  { url: '/partners/337-3370658_colombo-city-centre-colombo-city-centre-logo.png', name: 'Colombo City Centre' },
  { url: '/partners/john-keells-holdings-logo-png-transparent.png', name: 'John Keells Holdings' },
  { url: '/partners/Brandix_Apparel_Limited_Logo.png', name: 'Brandix' },
  { url: '/partners/Jaguar-Logo-2012.png', name: 'Jaguar' },
  { url: '/partners/LandRover.svg.png', name: 'Land Rover' },
  { url: '/partners/20131113022516Cinnamon_Air_logo.png', name: 'Cinnamon Air' },
  { url: '/partners/micro-logo-B2C3DD0185-seeklogo.com.png', name: 'Micro Cars' },
  { url: '/partners/maga-logo-47321F1221-seeklogo.com.png', name: 'Maga' },
  { url: '/partners/amw-capital-leasin--600.png', name: 'AMW Capital Leasing' },
  { url: '/partners/EV-Cosmos-green-logo.png', name: 'EV Cosmos' },
  { url: '/partners/mayleen-logo-oblong.png', name: 'Mayleen Group' },
];

export default function PartnerShowcase() {
  const sectionRef = React.useRef<HTMLElement>(null);

  // ─── Scroll-driven dynamic background & text crossfade (Theme transition) ───
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.8 });

  // Interpolate background color:
  // Starts light grey (#f5f5f7) to blend with AppShowcaseSection,
  // then fades to black (#060609) towards the end to blend with OriginShowcase.
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.75, 0.95, 1],
    ['#f5f5f7', '#f5f5f7', '#060609', '#060609']
  );

  // Interpolate main text color:
  // Black (#1d1d1f) -> White (#ffffff)
  const textColor = useTransform(
    smoothProgress,
    [0, 0.75, 0.95, 1],
    ['#1d1d1f', '#1d1d1f', '#ffffff', '#ffffff']
  );

  // Interpolate subtext color:
  // Grey (#737373) -> White/40
  const subTextColor = useTransform(
    smoothProgress,
    [0, 0.75, 0.95, 1],
    ['#737373', '#737373', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)']
  );

  // Interpolate tag border color:
  // light border -> dark border
  const tagBorderColor = useTransform(
    smoothProgress,
    [0, 0.75, 0.95, 1],
    ['rgba(0,0,0,0.08)', 'rgba(0,0,0,0.08)', 'rgba(255,255,255,0.1)', 'rgba(255,255,255,0.1)']
  );

  // Interpolate logo default style modifier:
  // Grayscale opacity 0.35 on light backgrounds, brightness-100 on dark.
  const logoBrightnessClass = useTransform(
    smoothProgress,
    [0, 0.75, 0.95, 1],
    ['brightness-50', 'brightness-50', 'brightness-200', 'brightness-200']
  );

  const [brightnessStr, setBrightnessStr] = React.useState('brightness-50');

  // Sync motion value to react state for class mapping
  React.useEffect(() => {
    return logoBrightnessClass.onChange((latest) => {
      setBrightnessStr(latest);
    });
  }, [logoBrightnessClass]);

  return (
    <motion.section
      ref={sectionRef}
      id="partners-section"
      className="w-full py-24 md:py-32 overflow-hidden z-30 select-none border-b font-sans transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor: tagBorderColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ─── HEADER AREA (Apple Minimalism) ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl space-y-4">
            <motion.span
              style={{ color: subTextColor }}
              className="font-mono text-[9px] tracking-[0.25em] uppercase block"
            >
              Trust Network
            </motion.span>
            <motion.h2
              style={{ color: textColor }}
              className="font-sans font-medium text-4xl sm:text-5xl tracking-tight leading-[1.1]"
            >
              Powering Sri Lanka’s
              <br />
              <span className="opacity-45">leading networks.</span>
            </motion.h2>
          </div>
          <div className="max-w-xs">
            <motion.p
              style={{ color: subTextColor }}
              className="text-xs sm:text-sm leading-relaxed font-light"
            >
              Collaborating with key national infrastructure, retail, and corporate partners to build a reliable EV ecosystem.
            </motion.p>
          </div>
        </div>

        {/* ─── LOGO GRID (Apple-style Monochrome) ─── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className="w-full max-w-[130px] aspect-[2.5] flex items-center justify-center relative group"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className={`max-w-full max-h-full object-contain filter grayscale opacity-35 transition-all duration-500 group-hover:opacity-85 group-hover:grayscale-0 group-hover:brightness-100 ${brightnessStr}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

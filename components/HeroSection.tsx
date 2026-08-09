'use client';

import * as React from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'motion/react';
import TrustRibbon from './TrustRibbon';

export default function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  // Sri Lanka's First & Largest EV Network main copy
  const headlineText = "Sri Lanka’s First & Largest EV Network";

  // List of all uploaded hero images for the desktop slideshow
  const desktopHeroImages = React.useMemo(() => [
    "/hero/hero_section.jpg",
    "/hero/hero_10_44PM.jpg",
    "/hero/hero_11_03PM.jpg",
    "/hero/maintain_that_size_with_this_202605302244.jpeg",
    "/hero/please_make_the_charger_smaller_202605302342.jpeg",
    "/hero/replace_it_with_the_attatched_202605302303.jpeg",
    "/hero/replace_the_charger_to_this_202605302338.jpeg",
    "/hero/the_wire_should_connect_properly_202605302241.jpeg"
  ], []);

  // List of all mobile-optimized hero images in public/mobile_hero
  const mobileHeroImages = React.useMemo(() => [
    "/mobile_hero/mobile_hero_12_09AM.jpg",
    "/mobile_hero/mobile_hero_12_11AM.jpg",
    "/mobile_hero/mobile_hero_12_13AM.jpg",
    "/mobile_hero/mobile_hero_12_14AM.jpg",
    "/mobile_hero/mobile_hero_12_16AM.jpg",
    "/mobile_hero/mobile_hero_12_17AM.jpg",
    "/mobile_hero/mobile_hero_12_18AM.jpg",
    "/mobile_hero/mobile_hero_12_19AM.jpg",
    "/mobile_hero/mobile_hero_12_20AM.jpg"
  ], []);

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      const initialMatch = mediaQuery.matches;

      // Defer state update to avoid synchronous layouts cascade warning in effect
      const timer = setTimeout(() => {
        setIsMobile(initialMatch);
      }, 0);

      const handleChange = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches);
        setCurrentImageIndex(0); // Reset index smoothly when viewport changes
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  const heroImages = isMobile ? mobileHeroImages : desktopHeroImages;

  // Change image every 6 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Multi-dimensional 3D clip-mask reveal animation on the selected H1 title
    const chars = titleRef.current?.querySelectorAll('.char-span');
    const revealBar = containerRef.current.querySelector('.title-reveal-bar');

    if (chars && chars.length > 0) {
      tl.fromTo(
        chars,
        {
          opacity: 0,
          y: '110%',
          rotateX: -80,
          skewY: 6,
          filter: 'blur(12px)',
        },
        {
          opacity: 1,
          y: '0%',
          rotateX: 0,
          skewY: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          stagger: 0.02,
          ease: 'power3.out',
        }
      );
    }

    if (revealBar) {
      tl.fromTo(
        revealBar,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.9, ease: 'power3.out' },
        '-=0.7'
      );
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="h-[100dvh] w-full relative overflow-hidden flex items-end bg-black snap-start shrink-0"
    >
      {/* Background Slideshow Layer */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden bg-neutral-950">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex % heroImages.length] || heroImages[0]}
            alt="Sri Lanka Charging Grid Background"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1.00 }}
            transition={{ duration: 2.0, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.95)' }}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Shading gradients - modified to be near-transparent so images are fully visible of their rich colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10" />
      </div>

      {/* Headline resting beautifully above the bottom certifications bar */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 sm:pb-36 md:pb-44 flex flex-col justify-end leading-[0.9]">
        <h1 
          ref={titleRef}
          className="font-display font-black text-[2.75rem] min-[390px]:text-[3.25rem] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white max-w-3xl cursor-default select-none uppercase leading-[0.92] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] [perspective:1000px]"
        >
          {headlineText.split(' ').map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block mr-[0.28em] whitespace-nowrap overflow-hidden align-bottom py-1">
              {word.split('').map((char, charIdx) => (
                <span
                  key={charIdx}
                  className="char-span inline-block transition-colors duration-250 hover:text-[#357BCE] transform-gpu origin-bottom-left"
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        {/* Sleek electric accent line revealing alongside the title */}
        <div className="title-reveal-bar mt-4 h-[3px] w-28 bg-gradient-to-r from-[#357BCE] via-blue-400 to-transparent origin-left rounded-full shadow-[0_0_12px_rgba(53,123,206,0.8)]" />
      </div>

      {/* Trust certifications bottom bar - matching exactly the brand ribbon in reference layout */}
      <TrustRibbon />
    </section>
  );
}

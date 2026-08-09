'use client';

import * as React from 'react';
import { BatteryCharging, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from 'motion/react';

interface GridPillar {
  id: string;
  title: string;
  type: 'home' | 'fast' | 'app';
  description: string;
  imageUrl: string;
}

export default function EvSolutionsSection() {
  const sectionRef = React.useRef<HTMLElement>(null);

  // ─── Rack-focus exit ───
  // As this section's bottom edge travels from the viewport bottom to the
  // viewport top (i.e. its final full-viewport-height of scroll before it's
  // gone), gently pull focus off the light content — like a camera racking
  // focus away right before the cut into the dark reveal below.
  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });
  const smoothExitProgress = useSpring(exitProgress, { stiffness: 130, damping: 22, mass: 0.5 });
  const exitScale = useTransform(smoothExitProgress, [0, 1], [1, 0.96]);
  const exitOpacity = useTransform(smoothExitProgress, [0, 1], [1, 0.85]);
  const exitBlurPx = useTransform(smoothExitProgress, [0, 1], [0, 6]);
  const exitFilter = useMotionTemplate`blur(${exitBlurPx}px)`;

  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState<'home' | 'fast'>('home');
  const [chargerKw, setChargerKw] = React.useState<number>(20);
  const [isMobile, setIsMobile] = React.useState(false);

  // Responsive mobile screen detection
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Responsive horizontal scroll tracking states & refs
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const children = Array.from(container.children) as HTMLElement[];
    
    let closestIndex = 0;
    let minDiff = Infinity;
    children.forEach((child, idx) => {
      const childRect = child.getBoundingClientRect();
      const diff = Math.abs(childRect.left - containerRect.left);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children[index]) {
      const child = children[index];
      const scrollTarget = child.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: scrollTarget,
        behavior: 'smooth',
      });
    }
  };

  const handlePillarClick = (type: 'home' | 'fast' | 'app') => {
    if (type === 'home') {
      setActiveTab('home');
      setChargerKw(20);
      document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'fast') {
      setActiveTab('fast');
      setChargerKw(120);
      document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById('app')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Simulator calculations
  const [carBatteryCapacity, setCarBatteryCapacity] = React.useState<number>(60); // kWh
  const [currentChargeLevel, setCurrentChargeLevel] = React.useState<number>(20); // %
  const [targetChargeLevel, setTargetChargeLevel] = React.useState<number>(80); // %

  const pillars: GridPillar[] = [
    {
      id: 'home-charging',
      title: 'Home charging',
      type: 'home',
      description: 'The ChargeNET charger is a smart, powerful and safe electric car charger for use at home.',
      imageUrl: '/ev-solution/ev_solution_1_48AM.jpg',
    },
    {
      id: 'commercial-charging',
      title: 'Commercial charging',
      type: 'fast',
      description: 'Are you considering offering electric car chargers to employees or customers? With ChargeNET, you get a flexible, scalable and future-proof charging solution.',
      imageUrl: '/ev-solution/An_ultra-high-resolution,_8k_photorealistic_photograph_202605310156.jpeg',
    },
    {
      id: 'app',
      title: 'App',
      type: 'app',
      description: 'Unlock chargers with RFID smart cards, manage your virtual wallet, and watch live charging telemetry on the go.',
      imageUrl: '/ev-solution/a_good_looking_female_model_202605310154.jpeg',
    },
  ];

  // Charging Speed Calculations
  const calculateChargingTime = () => {
    const energyNeeded = carBatteryCapacity * ((targetChargeLevel - currentChargeLevel) / 100);
    const timeHours = energyNeeded / chargerKw;
    const timeMinutes = Math.round(timeHours * 60);
    
    if (timeMinutes < 60) {
      return `${timeMinutes} minutes`;
    } else {
      const hours = Math.floor(timeMinutes / 60);
      const minutes = timeMinutes % 60;
      return `${hours}h ${minutes}m`;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="charging-solutions-section"
      className="bg-[#f5f5f7] text-[#1d1d1f] py-16 sm:py-24 md:py-32 w-full relative z-30 snap-start min-h-[100dvh] flex flex-col justify-center shrink-0 border-b border-black/5"
    >
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full"
        style={{ scale: exitScale, opacity: exitOpacity, filter: exitFilter }}
      >
        {/* Section Header - Apple Editorial Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 25, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 border-b border-neutral-200 pb-6 sm:pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-[11px] sm:text-xs text-[#0071e3] font-bold uppercase tracking-widest block mb-2">
              HARDWARE & SOFTWARE SOLUTIONS
            </span>
            <h3 className="font-sans font-bold text-2xl sm:text-4xl md:text-5xl tracking-tight text-[#1d1d1f]">
              Charging solutions for EVs
            </h3>
          </div>
          <p className="font-sans text-[#86868b] text-xs sm:text-sm md:text-[15px] max-w-md leading-relaxed font-normal">
            Intelligent, scalable charging infrastructure engineered for home convenience, rapid commercial networks, and seamless mobile management.
          </p>
        </motion.div>

        {/* 3-Column Grid representing options - Animates from stacked pile fan-out on scroll (mobile responsive) */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory scrollbar-none scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden perspective-[1400px]"
        >
          {pillars.map((pillar, idx) => {
            // Screen-responsive stacked deck initial positions: fits gracefully on both mobile & desktop
            const stackInitial = isMobile
              ? [
                  { opacity: 0.3, x: 45, y: 35, rotate: -8, scale: 0.88, filter: 'blur(4px)' },
                  { opacity: 0.7, x: 0, y: 20, rotate: 0, scale: 0.94, filter: 'blur(2px)' },
                  { opacity: 0.3, x: -45, y: 35, rotate: 8, scale: 0.88, filter: 'blur(4px)' },
                ][idx % 3]
              : [
                  { opacity: 0, x: 260, y: 65, rotate: -14, scale: 0.82, filter: 'blur(6px)' },
                  { opacity: 0.4, x: 0, y: 35, rotate: 0, scale: 0.9, filter: 'blur(3px)' },
                  { opacity: 0, x: -260, y: 65, rotate: 14, scale: 0.82, filter: 'blur(6px)' },
                ][idx % 3];

            return (
              <motion.div
                key={pillar.id}
                id={`card-${pillar.id}`}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handlePillarClick(pillar.type)}
                initial={stackInitial}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.85, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="w-[82vw] sm:w-[340px] md:w-auto flex-shrink-0 md:flex-shrink snap-start flex flex-col bg-white text-[#1d1d1f] p-4 sm:p-5 rounded-2xl sm:rounded-[24px] border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:border-[#0071e3]/30 transition-all duration-500 group cursor-pointer transform-gpu origin-center"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-[18px] bg-neutral-100 border border-black/5 shadow-inner">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Title & Arrow */}
                <div className="flex items-center space-x-2 mt-4 sm:mt-5 mb-2 px-1">
                  <span className="text-[#0071e3] text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:translate-x-1.5">
                    &rarr;
                  </span>
                  <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-[#1d1d1f] tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#6e6e73] text-xs sm:text-sm leading-relaxed tracking-normal font-normal px-1 pb-1">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex md:hidden justify-center items-center gap-2.5 mt-5 mb-6 select-none">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-[3px] w-10 sm:w-12 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-[#0071e3]' : 'bg-neutral-300'
              }`}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ---------------- INTERACTIVE EMULATION SUITE SECTION (Apple Light Glass Mobile Optimized) ---------------- */}
        <motion.div 
          id="calculator-section" 
          initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 border border-black/5 bg-white p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[28px] relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
        >
          {/* Subtle Ambient Backlight Glow */}
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-[-20%] right-[-10%] w-[380px] h-[380px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" 
          />

          {/* Clean grid mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Simulator Setup controls */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[#1d1d1f] tracking-tight leading-tight mb-2.5">
                  Predictive Charge Efficiency Calculator
                </h3>

                <p className="font-sans text-[#86868b] text-xs sm:text-sm max-w-lg mb-6 sm:mb-8 leading-relaxed font-normal">
                  Select a ChargeNET station class grid, toggle battery sizing specifications, and estimate exactly how long taking standard top-ups takes down to the minute.
                </p>

                {/* Apple Pill Selector Bar */}
                <div className="grid grid-cols-2 gap-2 border border-black/5 p-1 sm:p-1.5 bg-[#f5f5f7] mb-6 rounded-full shadow-inner">
                  {[pillars[0], pillars[1]].map((p) => {
                    const isSelected = activeTab === p.type;
                    return (
                      <button
                        key={p.type}
                        onClick={() => {
                          const nextTab = p.type as 'home' | 'fast';
                          setActiveTab(nextTab);
                          setChargerKw(nextTab === 'home' ? 20 : 120);
                        }}
                        className={`py-2 sm:py-2.5 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider transition-all rounded-full ${
                          isSelected
                            ? 'bg-white text-[#1d1d1f] shadow-md shadow-black/5'
                            : 'text-[#86868b] hover:text-[#1d1d1f]'
                        }`}
                        type="button"
                      >
                        {p.title.split(' ')[0]} Charging
                      </button>
                    );
                  })}
                </div>

                {/* Charger Wattage Selector Slider */}
                <div className="flex flex-col space-y-2 mb-6 sm:mb-8 bg-[#f5f5f7]/70 p-4 sm:p-5 border border-black/5 rounded-xl sm:rounded-[18px]">
                  <div className="flex justify-between items-baseline">
                    <label className="font-sans text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#515154]">
                      Charger Output Rating
                    </label>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#0071e3]">{chargerKw} kW</span>
                  </div>
                  <input
                    type="range"
                    min={activeTab === 'home' ? 20 : 50}
                    max={activeTab === 'home' ? 22 : 240}
                    step={activeTab === 'home' ? 1 : 10}
                    value={chargerKw}
                    onChange={(e) => setChargerKw(Number(e.target.value))}
                    className="w-full accent-[#0071e3] cursor-pointer min-h-[32px]"
                  />
                  <div className="flex justify-between font-mono text-[9px] sm:text-[9.5px] text-[#86868b]">
                    <span>{activeTab === 'home' ? '20 kW (Compact AC)' : '50 kW (Rapid DC)'}</span>
                    <span>{activeTab === 'home' ? '22 kW (Max Home AC)' : '240 kW (Ultra-Fast DC)'}</span>
                  </div>
                </div>

                {/* Range Sliders Matrix */}
                <div className="space-y-5 sm:space-y-6">
                  {/* Battery capacity */}
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-baseline">
                      <label className="font-sans text-[11px] sm:text-xs uppercase tracking-wider font-bold text-[#515154]">
                        Battery Capacity Sizing
                      </label>
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#0071e3]">{carBatteryCapacity} kWh</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="110"
                      step="5"
                      value={carBatteryCapacity}
                      onChange={(e) => setCarBatteryCapacity(Number(e.target.value))}
                      className="w-full accent-[#0071e3] cursor-pointer min-h-[32px]"
                    />
                    <div className="flex justify-between font-mono text-[9px] sm:text-[9.5px] text-[#86868b]">
                      <span>30 kWh (Compact EV)</span>
                      <span>110 kWh (Premium SUV)</span>
                    </div>
                  </div>

                  {/* Charge ranges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-baseline">
                        <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#515154]">
                          Initial SoC (Start)
                        </label>
                        <span className="font-mono text-xs font-bold text-[#1d1d1f]">{currentChargeLevel}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="75"
                        step="5"
                        value={currentChargeLevel}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setCurrentChargeLevel(val);
                          if (val >= targetChargeLevel) {
                            setTargetChargeLevel(Math.min(val + 5, 100));
                          }
                        }}
                        className="accent-[#1d1d1f] min-h-[32px]"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-baseline">
                        <label className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#515154]">
                          Target SoC (End)
                        </label>
                        <span className="font-mono text-xs font-bold text-[#0071e3]">{targetChargeLevel}%</span>
                      </div>
                      <input
                        type="range"
                        min="25"
                        max="100"
                        step="5"
                        value={targetChargeLevel}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setTargetChargeLevel(val);
                          if (val <= currentChargeLevel) {
                            setCurrentChargeLevel(Math.max(val - 5, 0));
                          }
                        }}
                        className="accent-[#0071e3] min-h-[32px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Simulator Output Display Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between border border-black/5 bg-[#f5f5f7]/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl sm:rounded-[22px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] relative group hover:border-[#0071e3]/30 transition-all duration-300 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="font-sans text-[9.5px] sm:text-[10px] text-[#86868b] font-bold uppercase tracking-wider block mb-1">
                  Expected session statistics
                </span>
                
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-neutral-200/80">
                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#1d1d1f] uppercase tracking-tight">
                    {activeTab === 'home' ? 'Residential AC Feed' : 'Rapid Highway DC Net'}
                  </h4>
                  <BatteryCharging className="w-5 h-5 text-[#0071e3]" />
                </div>

                <div className="py-6 sm:py-8 text-center border-b border-neutral-200/80">
                  <span className="font-sans text-[9.5px] sm:text-[10px] text-[#86868b] font-bold block uppercase tracking-wider mb-1">
                    Estimated Charging Time
                  </span>
                  <motion.div 
                    key={`${carBatteryCapacity}-${currentChargeLevel}-${targetChargeLevel}-${chargerKw}`}
                    initial={{ opacity: 0, scale: 0.92, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0071e3] tracking-tight select-none"
                  >
                    {calculateChargingTime()}
                  </motion.div>
                  <span className="font-sans text-[10px] sm:text-[10.5px] uppercase tracking-wider font-bold text-[#6e6e73] block mt-2">
                    Providing {chargerKw} kW Feed Rate
                  </span>
                </div>

                {/* Details layout grids */}
                <div className="grid grid-cols-2 gap-4 py-5 sm:py-6 border-b border-neutral-200/60">
                  <div>
                    <span className="font-sans text-[9px] text-[#86868b] font-bold block uppercase tracking-wider mb-1">
                      Energy Delivered
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#1d1d1f]">
                      {(carBatteryCapacity * ((targetChargeLevel - currentChargeLevel) / 100)).toFixed(1)} kWh
                    </span>
                  </div>
                  <div>
                    <span className="font-sans text-[9px] text-[#86868b] font-bold block uppercase tracking-wider mb-1">
                      Est. Range Added
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#34c759]">
                      +{(carBatteryCapacity * ((targetChargeLevel - currentChargeLevel) / 100) * 6.3).toFixed(0)} km
                    </span>
                  </div>
                </div>
              </div>

              {/* Apple CTA Button */}
              <div className="mt-6 sm:mt-8 relative z-10">
                <a
                  href="#find-station"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#1d1d1f] hover:bg-[#0071e3] text-white font-sans text-xs uppercase tracking-widest font-bold py-3.5 sm:py-4 transition-all duration-300 rounded-[12px] sm:rounded-[14px] shadow-sm active:scale-[0.99]"
                >
                  <span>Locate stations on map</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ArrowRight, CornerDownRight, Check, X, Shield, Sparkles, LogIn, ExternalLink, Milestone, Power } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CapsuleHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<'catalog' | 'business' | null>(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  // Monitor scroll movements with a buffer to prevent jitter and maintain ultra-smooth, premium translation fluidly
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);

      if (currentScrollY <= 15) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down -> hide navbar smoothly
          setIsVisible(false);
          setActiveMenu(null);
        } else {
          // Scrolling up -> reveal navbar smoothly
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const catalogSublinks = {
    home: {
      title: 'Home Chargers',
      items: [
        { name: 'L2 Charger - Home / Commercial', href: '/home-charger', desc: 'Versatile Level 2 dynamic vehicle charger' },
        { name: 'Level 2 Charger - 3 Phase', href: '/home-charger', desc: 'High-speed 3-phase domestic power feed' },
      ],
    },
    commercial: {
      title: 'Commercial Chargers',
      items: [
        { name: 'CD 80 Kw charger', href: '/commercial-charger', desc: 'Sovereign commercial-grade DC charging node' },
        { name: 'Fast Charger - Single Port', href: '/commercial-charger', desc: 'Substantial en-route standalone public feeder' },
        { name: 'Fast Charger - Dual Port', href: '/commercial-charger', desc: 'Flagship concurrent load splitting terminal' },
      ],
    },
    software: {
      title: 'Software Solutions',
      items: [
        { name: 'Mobile app', href: '/#app', desc: 'Instant charge telemetry in your hand' },
      ],
    },
  };

  const businessSublinks = {
    charging: {
      title: 'Monetized & Fleet charging',
      items: [
        { name: 'Commercial Charging', href: '/commercial-charger', desc: 'Enterprise smart physical stations & grid planning' },
        { name: 'General Business Portal', href: '/business', desc: 'Monetize parking and manage work loads' },
      ],
    },
    sectors: {
      title: 'Industry solution sectors',
      items: [
        { name: 'Apartments & Multi-Family', href: '/business/apartments', desc: 'Premium multi-family smart setups' },
        { name: 'Automotive Showrooms', href: '/business/automotive', desc: 'Blistering fast showroom charging' },
        { name: 'Cities & Municipalities', href: '/business/municipalities', desc: 'Weatherproof public hubs for cities' },
        { name: 'Retail & Hospitality Centers', href: '/business/retail', desc: 'Extend tenant dwell times with smart grids' },
      ],
    },
    sectorsMore: {
      title: 'Enterprise fleets & hubs',
      items: [
        { name: 'Fuel Stations & CPOs', href: '/business/fuel-stations', desc: 'Blistering modular DC configurations' },
        { name: 'Public Parking Hubs', href: '/business/parking-hubs', desc: 'Self-maintaining passive income generators' },
        { name: 'Workplaces & Fleet Depots', href: '/business/workplaces', desc: 'Employee-benefit depots' },
      ],
    },
  };

  return (
    <>
      {/* 
        PREMIUM SCROLL-AWARE FLOATING HEADER
        Utilizes a spring physics-based Framer motion header to slide gracefully up and down without friction.
      */}
      <motion.nav
        animate={{ y: isVisible ? 0 : -140 }}
        transition={{ type: 'spring', stiffness: 280, damping: 32, mass: 0.8 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-6xl z-50 font-sans pointer-events-auto"
      >
        {/* Cool, grey slate-toned floating glass capsule matching the attached mock design screenshot precisely */}
        <div
          id="capsule-nav-container"
          className="bg-neutral-300/40 border border-white/25 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.06)] pl-5 pr-4 py-2 flex items-center justify-between rounded-[22px] transition-all relative"
        >
          {/* Logo element using the official custom ChargeNet brand logo image */}
          <div className="flex items-center space-x-2 shrink-0">
            <Link href="/" className="flex items-center space-x-2 group focus:outline-none">
              <div className="hover:scale-105 transition-transform duration-250 flex items-center">
                <Image
                  src="/chargenetlogo.png"
                  alt="ChargeNet Logo"
                  width={140}
                  height={32}
                  className="h-8.5 w-auto object-contain brightness-95 contrast-105"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* MAIN DESKTOP NAVIGATION BAR */}
          <div className="hidden md:flex items-center space-x-1.5 lg:space-x-2.5">
            
            {/* 1. Catalog dropdown link */}
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu('catalog')}
                onClick={() => setActiveMenu(activeMenu === 'catalog' ? null : 'catalog')}
                className={`flex items-center gap-1 px-4.5 py-2 text-[13px] font-semibold tracking-normal transition-all rounded-full focus:outline-none select-none ${
                  activeMenu === 'catalog'
                    ? 'bg-white text-neutral-900 shadow-[0_4px_12px_rgba(0,0,0,0.03)]'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-white/35'
                }`}
              >
                <span>Catalog</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'catalog' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 2. Business dropdown link */}
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu('business')}
                onClick={() => setActiveMenu(activeMenu === 'business' ? null : 'business')}
                className={`flex items-center gap-1 px-4.5 py-2 text-[13px] font-semibold tracking-normal transition-all rounded-full focus:outline-none select-none ${
                  activeMenu === 'business'
                    ? 'bg-white text-neutral-900 shadow-[0_4px_12px_rgba(0,0,0,0.03)]'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-white/35'
                }`}
              >
                <span>Business</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === 'business' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* 3. About link */}
            <Link
              href="/about"
              className="px-4.5 py-2 text-[13px] font-semibold text-neutral-800 hover:text-neutral-950 hover:bg-white/35 rounded-full transition-all tracking-normal"
            >
              About
            </Link>

          </div>

          {/* RIGHT BUTTONS BAR: Exact Login link, Contact pill and Hamburger */}
          <div className="flex items-center space-x-1">
            
            {/* Elegant transparent Login button as defined under user criteria */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center gap-1 text-neutral-800 hover:text-neutral-950 px-4 py-2 text-[12.5px] font-semibold hover:bg-white/35 rounded-full transition-all"
            >
              <LogIn className="w-3.5 h-3.5 text-neutral-650" />
              <span>Login</span>
            </Link>

            {/* Premium, prominent White Pill button styled strictly matching 'Shop now' screenshot */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white border border-neutral-350/80 transition-all duration-300 text-xs font-bold px-6 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)] tracking-wide active:scale-95"
            >
              <span>Contact</span>
            </Link>

            {/* Aesthetic physical menu line trigger exactly mimicking the hamburger lines '≡' in the image layout */}
            <button
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setActiveMenu(null);
              }}
              className="p-2.5 text-neutral-850 hover:bg-white/35 rounded-full transition-all flex items-center justify-center focus:outline-none ml-1 cursor-pointer"
              type="button"
              id="hamburger-menu-trigger"
              aria-label="Toggle Navigation Panel"
            >
              <div className="flex flex-col space-y-1.5 w-4.5">
                <span className={`h-0.5 bg-neutral-950 transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2 w-5' : 'w-5'}`} />
                <span className={`h-0.5 bg-neutral-950 transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'w-4.5'}`} />
                <span className={`h-0.5 bg-neutral-950 transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2 w-5' : 'w-4'}`} />
              </div>
            </button>
          </div>

          {/* MEGAMENU PANELS: Animated with fluid Spring physics strictly matched with layout screenshots */}
          <AnimatePresence>
            {activeMenu && (
              <>
                {/* Dismiss backdrop overlay immediately on mouse leaves */}
                <div
                  className="fixed inset-0 top-[80px] z-40 bg-transparent"
                  onMouseEnter={() => setActiveMenu(null)}
                  onClick={() => setActiveMenu(null)}
                />

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  className="absolute top-[calc(100%+12px)] left-0 w-full max-w-4xl bg-white/95 backdrop-blur-2xl border border-neutral-200/80 shadow-[0_25px_60px_rgba(0,0,0,0.12)] rounded-[20px] p-8 z-50 pointer-events-auto"
                >
                  {/* CATALOG MEGAMENU: matches exactly the visual layout of image 1 */}
                  {activeMenu === 'catalog' && (
                    <div className="grid grid-cols-3 gap-x-8">
                      {/* Subsegment: Home Chargers */}
                      <div className="space-y-3.5 border-r border-neutral-100 pr-5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {catalogSublinks.home.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {catalogSublinks.home.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Subsegment: Commercial Chargers */}
                      <div className="space-y-3.5 border-r border-[#eaecf0] pr-5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {catalogSublinks.commercial.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {catalogSublinks.commercial.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Subsegment: Software Solutions */}
                      <div className="space-y-3.5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {catalogSublinks.software.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {catalogSublinks.software.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BUSINESS MEGAMENU */}
                  {activeMenu === 'business' && (
                    <div className="grid grid-cols-3 gap-x-8">
                      {/* Subsegment: Charging Solutions */}
                      <div className="space-y-3.5 border-r border-neutral-100 pr-5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {businessSublinks.charging.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {businessSublinks.charging.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Subsegment: Sectors Column 1 */}
                      <div className="space-y-3.5 border-r border-[#eaecf0] pr-5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {businessSublinks.sectors.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {businessSublinks.sectors.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Subsegment: Sectors Column 2 */}
                      <div className="space-y-3.5">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-extrabold pb-1.5 border-b border-neutral-100">
                          {businessSublinks.sectorsMore.title}
                        </span>
                        <div className="space-y-3 pt-2">
                          {businessSublinks.sectorsMore.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group block focus:outline-none"
                            >
                              <span className="font-display font-black text-sm md:text-base text-neutral-900 group-hover:text-[#357BCE] transition-colors leading-tight uppercase block">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-neutral-400 font-light block mt-0.5 leading-normal">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* FULL DRAWER OVERLAY PANEL: Beautiful responsive drawer sliding down elegant for mobile nodes */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-[110%] bg-white/95 backdrop-blur-2xl border border-neutral-250 shadow-2xl p-6 rounded-2.5xl md:hidden flex flex-col space-y-6 z-50 pointer-events-auto"
            >
              {/* Mobile Drawer Main Content Links */}
              <div className="space-y-6">
                
                {/* Catalog Segment */}
                <div className="space-y-2.5 pb-4 border-b border-neutral-100">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-[#357BCE] font-bold">
                    Hardware Catalog
                  </span>
                  <div className="flex flex-col gap-2.5 pl-1">
                    <Link href="/home-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • L2 Charger - Home / Commercial
                    </Link>
                    <Link href="/home-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • Level 2 Charger - 3 Phase
                    </Link>
                    <Link href="/commercial-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • CD 80 Kw charger
                    </Link>
                    <Link href="/commercial-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • Fast Charger - Single Port
                    </Link>
                    <Link href="/commercial-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • Fast Charger - Dual Port
                    </Link>
                    <Link href="/#app" onClick={() => setMobileOpen(false)} className="text-xs text-[#357BCE] font-bold block active:text-[#357BCE] uppercase">
                      • Mobile App
                    </Link>
                  </div>
                </div>

                {/* Business Navigation block */}
                <div className="space-y-2.5 pb-4 border-b border-neutral-100">
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-[#357BCE] font-bold">
                    Business Divisions & Sectors
                  </span>
                  <div className="flex flex-col gap-2.5 pl-1">
                    <Link href="/commercial-charger" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • Commercial Charging
                    </Link>
                    <Link href="/business" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-700 font-semibold block active:text-[#357BCE] uppercase">
                      • General Business Portal
                    </Link>
                    <Link href="/business/apartments" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Apartments & Multi-Family
                    </Link>
                    <Link href="/business/automotive" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Automotive Showrooms
                    </Link>
                    <Link href="/business/municipalities" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Cities & Municipalities
                    </Link>
                    <Link href="/business/retail" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Retail & Hospitality Centers
                    </Link>
                    <Link href="/business/fuel-stations" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Fuel Stations & CPOs
                    </Link>
                    <Link href="/business/parking-hubs" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Public Parking Hubs
                    </Link>
                    <Link href="/business/workplaces" onClick={() => setMobileOpen(false)} className="text-xs text-neutral-500 font-medium block active:text-[#357BCE] uppercase">
                      • Workplaces & Fleet Depots
                    </Link>
                  </div>
                </div>

                {/* About Page Navigation block */}
                <div className="pb-4 border-b border-neutral-100 space-y-1">
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between font-display font-black text-sm uppercase text-neutral-900 hover:text-[#357BCE] py-1.5 focus:outline-none"
                  >
                    <span>About</span>
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                  </Link>
                </div>

              </div>

              {/* Action layout boxes inside mobile drawer strictly as required */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {/* Login button */}
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-xs py-3.5 rounded-xl text-center transition-colors active:scale-95"
                >
                  <LogIn className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Login Portal</span>
                </Link>

                {/* Contact button */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center bg-neutral-900 hover:bg-[#357BCE] text-white font-bold text-xs py-3.5 rounded-xl text-center shadow-md transition-all active:scale-95"
                >
                  <span>Contact Grid</span>
                </Link>
              </div>

              {/* Safety certification logs */}
              <div className="flex items-center justify-center gap-1 text-[9px] text-neutral-400 font-mono">
                <Shield className="w-3 h-3 text-emerald-600" />
                <span>Ceylon sovereign network connection verified</span>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

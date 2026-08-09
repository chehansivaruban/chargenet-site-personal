'use client';

import * as React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-900 pt-20 pb-16 relative z-35 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* UPPER HUB SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16">
          
          {/* LK Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="block font-sans text-[10.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase mb-6 leading-none">
                SRI LANKA HUB
              </span>
              <p className="font-sans text-neutral-300 text-xs md:text-[13px] leading-relaxed max-w-xs mb-8 font-light">
                Bay 1-5, Trace Expert City, Tripoli Square, Colombo 10, Sri Lanka.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  Sales
                </span>
                <span className="font-sans text-neutral-300 text-xs font-normal">
                  +94 11 422 2502
                </span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  General & Aftersales
                </span>
                <span className="font-sans text-neutral-300 text-xs font-normal">
                  011 555 1551 / 077 055 5553
                </span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  Inquiries
                </span>
                <div className="flex flex-col space-y-1">
                  <a href="mailto:sales@chargenet.lk" className="font-sans text-neutral-400 hover:text-white text-xs transition-colors duration-200">
                    sales@chargenet.lk
                  </a>
                  <a href="mailto:info@chargenet.lk" className="font-sans text-neutral-400 hover:text-white text-xs transition-colors duration-200">
                    info@chargenet.lk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UK Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="block font-sans text-[10.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase mb-6 leading-none">
                UNITED KINGDOM HUB
              </span>
              <p className="font-sans text-neutral-300 text-xs md:text-[13px] leading-relaxed max-w-xs mb-8 font-light">
                87-89 Baker Street, London, W1U 6RJ, UK.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  General Operations
                </span>
                <span className="font-sans text-neutral-300 text-xs font-normal">
                  +44 203 515 0055
                </span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  Inquiries
                </span>
                <a href="mailto:info@chargenetgroup.co.uk" className="font-sans text-neutral-400 hover:text-white text-xs transition-colors duration-200 block">
                  info@chargenetgroup.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* UAE Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="block font-sans text-[10.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase mb-6 leading-none">
                UNITED ARAB EMIRATES HUB
              </span>
              <p className="font-sans text-neutral-300 text-xs md:text-[13px] leading-relaxed max-w-xs mb-8 font-light">
                #5, 29th Floor Al Saqr Business Tower, Sheikh Zayed Rd, Dubai, United Arab Emirates.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  General Operations
                </span>
                <span className="font-sans text-neutral-300 text-xs font-normal">
                  +971 52 1944 672
                </span>
              </div>
              <div>
                <span className="block font-mono text-[9px] text-neutral-600 uppercase tracking-widest leading-none mb-1.5">
                  Inquiries
                </span>
                <a href="mailto:natashia@codegen.ae" className="font-sans text-neutral-400 hover:text-white text-xs transition-colors duration-200 block">
                  natashia@codegen.ae
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM NAVIGATION & METRICS ROW */}
        <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Logo element elegantly inverted for pristine high contrast */}
          <div className="flex flex-col gap-2">
            <a href="#" className="inline-block select-none py-1">
              <img 
                src="/chargenetlogo.png" 
                alt="chargeNET" 
                className="h-5 md:h-[22px] w-auto object-contain invert brightness-200 transition-opacity duration-200 hover:opacity-80"
                referrerPolicy="no-referrer"
              />
            </a>
            <span className="font-mono text-[8px] text-neutral-600 tracking-[0.15em] uppercase">
              Global smart electric corridor grid
            </span>
          </div>

          {/* Symmetrical Links menu */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] font-sans tracking-widest uppercase font-bold text-neutral-400">
            <a href="#home-chargers" className="hover:text-white transition-colors">Residential</a>
            <a href="#fast-chargers" className="hover:text-white transition-colors">Commercial</a>
            <a href="#find-station" className="hover:text-white transition-colors">Live Stations</a>
            <a href="#app" className="hover:text-white transition-colors">App Ecosystem</a>
          </div>

        </div>

        {/* COMPLIANCE & LEGAL BOTTOM METADATA BAR */}
        <div className="mt-12 pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row justify-between items-center text-neutral-600 text-[9px] uppercase font-mono tracking-[0.2em] gap-4">
          <span>© {new Date().getFullYear()} CHARGENET GROUP. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Operations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

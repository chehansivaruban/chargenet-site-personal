'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Zap, Compass, RotateCw, ShieldCheck, Route, Clock, Check, HelpCircle, HeartHandshake, Laptop, Play, Pause, VolumeX, Volume2 } from 'lucide-react';

export default function CommercialChargerEnergyManagement() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log('Video play interrupted:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="commercial-mobility-grid" className="w-full bg-white text-neutral-900 border-t border-b border-neutral-200 overflow-hidden">
      
      {/* 
        ZIG-ZAG / ALTERNATING FEATURE ROWS
        An interlocking architectural 50/50 grid system with zero margins,
        heavy boundaries, and modern editorial high-contrast frames.
      */}
      <div className="w-full flex flex-col">
        
        {/* ==========================================
            ROW 1: LEFT TEXT / RIGHT VIDEO (Hyper-Speed DC Fast Charging)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-neutral-200 items-stretch">
          
          {/* Left Block: Minimalist Stark White Copy Frame */}
          <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 bg-white hover:bg-neutral-50/50 transition-colors duration-500">
            <div className="max-w-xl my-auto space-y-8">
              
              {/* Header Segment */}
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block">
                  PROPULSION & throughput // 01
                </span>
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.0] font-bold">
                  Hyper-Speed <br />DC Fast Charging
                </h2>
                <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light pt-2">
                  Charge quickly with our liquid-cooled Level 3 DC fast dispensing hubs. Engineered for high-frequency operations, these flagship models deliver rapid energy transfers, recharging commercial fleets and passenger vehicles up to 80% within 20 minutes to eliminate offline wait times.
                </p>
              </div>

              {/* Minimalist Micro Performance Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Clock className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      20 MIN REPLENISH
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Power up to 80% battery capacity in less than twenty minutes, dramatically lowering dwell intervals.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Zap className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      240kW CAPACITY
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Intelligently split active high-kilowatt dynamic lines between multiple parked clients automatically.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Pure Video Display with Floating Media HUD */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-auto bg-neutral-950 border-t md:border-t-0 md:border-l border-neutral-200 overflow-hidden group min-h-[400px]">
            {/* Full-Bleed High-Contrast Fast-Charging Video Representation */}
            <video
              ref={videoRef}
              src="/ChargeNET_Sri_Lanka_charging_grid_202605310052-ezgif.com-video-to-gif-converter.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale brightness-[0.85] contrast-110 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-700"
            />
            
            {/* Modern HUD controller */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  id="fast-charge-play"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  id="fast-charge-mute"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="font-mono text-[9px] text-white tracking-widest font-bold">
                  HIGH SPEED OUTPUT DATA ON Air
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ==========================================
            ROW 2: LEFT MEDIA / RIGHT TEXT (The Largest Network in Sri Lanka)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-neutral-200 items-stretch">
          
          {/* Left Block: Modern charging infrastructure photo */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-auto bg-neutral-900 overflow-hidden group min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1200"
              alt="An elaborate network of public EV charging bays on a multi-port station layout"
              fill
              className="object-cover object-center w-full h-full filter brightness-90 saturate-[0.80] group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-6 left-6 font-mono text-[9px] tracking-wider text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
              SRI LANKA&apos;S FIRST EV NATIVE GRID
            </div>
          </div>

          {/* Right Block: Largest EV Network information */}
          <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 bg-white hover:bg-neutral-50/50 transition-colors duration-500 border-t md:border-t-0 md:border-l border-neutral-200">
            <div className="max-w-xl my-auto space-y-8">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block">
                  Pioneering technology // 02
                </span>
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.0] font-bold">
                  Sri Lanka&apos;s Largest <br />EV Charging Network
                </h2>
                <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light pt-2">
                  ChargeNET is the absolute first to introduce organized electric vehicle fast-charging to Sri Lanka. We built the island&apos;s very first public charging stations, and today we continue to support the largest active EV customer base nationwide. Our network includes over 100+ public charge bays strategically positioned across major cities and national expressways.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Compass className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      FIRST IN THE COUNTRY
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    We brought native EV micro-grid fast charging to Sri Lanka, shaping clean transport from the ground up.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      LARGEST USER BASE
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Over 80% of registered EV motorists across the island utilize our authorized cloud ticketing software daily.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ==========================================
            ROW 3: LEFT TEXT / RIGHT MEDIA (Works with Your EV Car)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-neutral-200 items-stretch">
          
          {/* Left Block: Copy frame detailing "Works with my car" */}
          <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 bg-white hover:bg-neutral-50/50 transition-colors duration-500">
            <div className="max-w-xl my-auto space-y-8">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block">
                  universal hardware access // 03
                </span>
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.0] font-bold">
                  Works flawlessly <br />with your EV car
                </h2>
                <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light pt-2">
                  Yes, it works with my car. Built to accommodate every modern EV platform, ChargeNET dispensers support universal physical connections. We provide integrated ports for GB/T (domestic and imported), CCS2 (European standard), and CHAdeMO, ensuring a safe, rapid, and perfectly calibrated energy stream for your specific car model.
                </p>
              </div>

              {/* Protocol Highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      GB/T & CCS2 STACK
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Connect any modern electric SUV, sedan, or commercial fleet truck seamlessly with automatic pin detection.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <RotateCw className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      LIVE VOLTAGE ADAPTERS
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Auto-modulating smart chips adjust current limits on the fly to protect your vehicle&apos;s thermal integrity.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Modern electric car cockpit/charging bay */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-auto bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-200 overflow-hidden group min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200"
              alt="A beautiful modern electric sportback vehicle being charged effortlessly with a high-speed dispenser"
              fill
              className="object-cover object-center w-full h-full filter brightness-95 saturate-[0.80] group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-6 left-6 font-mono text-[9px] tracking-wider text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
              UNIVERSAL NO-RECONCILIATION CHARGING
            </div>
          </div>

        </div>

        {/* ==========================================
            ROW 4: LEFT MEDIA / RIGHT TEXT (24/7 Professional Maintenance Support)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-neutral-200 items-stretch">
          
          {/* Left Block: Professional engineering maintenance work */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-auto bg-neutral-900 overflow-hidden group min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200"
              alt="Two certified ChargeNet engineers calibrating a high-voltage commercial electrical panel"
              fill
              className="object-cover object-center w-full h-full filter brightness-90 saturate-[0.80] group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-6 left-6 font-mono text-[9px] tracking-wider text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
              FIELD ENGINEERING DISPATCH ACTIVE
            </div>
          </div>

          {/* Right Block: 24/7 Maintenance Details */}
          <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 bg-white hover:bg-neutral-50/50 transition-colors duration-500 border-t md:border-t-0 md:border-l border-neutral-200">
            <div className="max-w-xl my-auto space-y-8">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block">
                  MAXIMUM SYSTEM RESILIENCE // 04
                </span>
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.0] font-bold">
                  24/7 Maintenance <br />& Support
                </h2>
                <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light pt-2">
                  Keep your commercial charging infrastructure performing peak-to-peak. ChargeNET runs a dedicated monitoring platform integrated with live telemetry. If a node detects atypical load parameters, our automatic diagnostic framework schedules a fix instantly, backed by round-the-clock physical dispatch support.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <HeartHandshake className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      24/7 HELPLINE ASSIST
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Access experienced electrical technicians and software specialists over the air whenever needed.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Laptop className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      REMOTE RECOVERY
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Over 90% of dynamic software or card sync issues are diagnosed and patched fully remotely within minutes.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ==========================================
            ROW 5: LEFT TEXT / RIGHT MEDIA (Worry-Free Range Assurance)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-stretch">
          
          {/* Left Block: Copy frame detailing Range Assurance */}
          <div className="flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-24 bg-white hover:bg-neutral-50/50 transition-colors duration-500">
            <div className="max-w-xl my-auto space-y-8">
              
              <div className="space-y-4">
                <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block">
                  MASSIVE FREEDOM ON ROADWAYS // 05
                </span>
                <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.0] font-bold">
                  Worry-Free Range <br />Wherever You Wander
                </h2>
                <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light pt-2">
                  You don&apos;t have to worry about the range because of our massive network. With public ChargeNET stations dense across major corridors, town centers, and highway junctions, long-distance journeys are totally stress-free. Travel from heartlands to costal routes knowing a rapid charge port is ready.
                </p>
              </div>

              {/* Protocol Highlights */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Route className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      BEYOND PROVINCES
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Easily navigate complex long tracks without planning stops using our live network station availability indicators.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Compass className="w-4 h-4 stroke-[2.5]" />
                    <span className="font-display font-bold text-[10px] uppercase tracking-wider text-neutral-900">
                      COAST-TO-COAST GRID
                    </span>
                  </div>
                  <p className="font-sans text-neutral-500 text-xs font-light leading-relaxed">
                    Reliable distribution corridors mean you are never more than a short hop away from your next supercharge.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Block: Scenic highway drive */}
          <div className="relative w-full h-[360px] sm:h-[460px] md:h-auto bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-200 overflow-hidden group min-h-[400px]">
            <Image
              src="/ev-solution/An_ultra-high-resolution,_8k_photorealistic_photograph_202605310156.jpeg"
              alt="An electric car driving through a scenic, high-definition outdoor mountain valley highway representing range freedom"
              fill
              className="object-cover object-center w-full h-full filter brightness-95 saturate-[0.80] group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-6 left-6 font-mono text-[9px] tracking-wider text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
              INFINITE DRIVING ROAMING PLATFORM
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

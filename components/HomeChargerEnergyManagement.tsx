'use client';

import * as React from 'react';
import { ShieldCheck, Cpu, Zap, Play, Pause, VolumeX, Volume2 } from 'lucide-react';

export default function HomeChargerEnergyManagement() {
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
    <section id="energy-management" className="w-full bg-white text-neutral-900 overflow-hidden border-t border-b border-neutral-100">
      {/* 50/50 Edge-to-Edge Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        
        {/* Left Column: Full-Bleed Media Panel */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] bg-neutral-950 overflow-hidden group">
          {/* Main Demonstrative Video */}
          <video
            ref={videoRef}
            src="/home/load_balance.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Minimalist Floating Controls overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                id="video-play-btn"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white flex items-center justify-center transition-all shadow-sm cursor-pointer"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                id="video-mute-btn"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-mono text-[9px] text-white/90 uppercase tracking-widest font-extrabold">
                DEMONSTRATION ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-contrast elegant copy and key bullet highlights */}
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 md:px-16 lg:px-24 bg-white h-auto md:h-[600px] border-l border-neutral-100">
          <div className="max-w-xl space-y-6">
            
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-blue-600 font-extrabold tracking-widest uppercase block">
                INTELLIGENT HOME ENERGY MANAGEMENT
              </span>
              <h2 className="font-display font-medium text-4xl sm:text-5xl lg:text-[46px] tracking-tight text-neutral-950 uppercase leading-[1.05]">
                Dynamic load balancing
              </h2>
              <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                Maximize your home&rsquo;s EV charging speeds without running the risk of overloading your main electrical service panel. Through continuous system polling, our intelligent algorithm instantly scales your charger&rsquo;s power intake down during peak household demand, then ramps it back up to maximum velocity the second overhead decreases.
              </p>
            </div>

            {/* Micro Highlights Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-100">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-display font-bold text-[11px] uppercase tracking-wider text-neutral-900">
                    Overload Safeguards
                  </span>
                </div>
                <p className="font-sans text-neutral-500 text-xs leading-relaxed font-light">
                  Active monitoring shields regional utility fuses and appliance lines automatically.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Cpu className="w-4 h-4" />
                  <span className="font-display font-bold text-[11px] uppercase tracking-wider text-neutral-900">
                    Avoid Panel Upgrades
                  </span>
                </div>
                <p className="font-sans text-neutral-500 text-xs leading-relaxed font-light">
                  Avoid costly breaker panel work by staying perfectly within your existing line thresholds.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

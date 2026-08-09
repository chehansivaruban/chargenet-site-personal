'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Generative wireframe mesh drawn sharp on Retina screens
function GenerativeMeshCanvas({ index }: { index: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let deathSync = false;
    let animationId: number;
    let time = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      if (deathSync) return;
      for (const entry of entries) {
        const dpi = window.devicePixelRatio || 1;
        canvas.width = entry.contentRect.width * dpi;
        canvas.height = entry.contentRect.height * dpi;
        ctx.scale(dpi, dpi);
      }
    });
    
    resizeObserver.observe(canvas.parentElement || canvas);

    const draw = () => {
      if (deathSync) return;
      time += 0.035;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      if (w <= 0 || h <= 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.2;

      // Draw subtle background grid lines representing digital coordinates
      ctx.strokeStyle = 'rgba(23, 23, 23, 0.06)';
      for (let x = 0; x < w; x += 15) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 15) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2;

      if (index === 0) {
        // Fast energy pulse waves (sine curves)
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.45)'; // blue-600
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          for (let i = 0; i < w + 10; i += 8) {
            const y = cy + Math.sin(i * 0.04 + time * 1.2 + j * 0.8) * 12;
            if (i === 0) ctx.moveTo(i, y);
            else ctx.lineTo(i, y);
          }
          ctx.stroke();
        }
      } else if (index === 1) {
        // Clock peak optimization (rotating vectors and timing arcs)
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)'; // cyan-500
        const radius = 24;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Indicator lines
        const lineVal = 4;
        for (let i = 0; i < lineVal; i++) {
          const angle = (i * Math.PI * 2) / lineVal + time * 0.3;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * (radius - 5), cy + Math.sin(angle) * (radius - 5));
          ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
          ctx.stroke();
        }

        // Center clock point
        ctx.fillStyle = 'rgba(37, 99, 235, 0.85)';
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Efficiency coins (interconnected layered geometric triangles)
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.45)';
        const size = Math.min(w, h) * 0.28;
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3 + time * 0.4;
          const px = cx + Math.cos(angle) * size;
          const py = cy + Math.sin(angle) * size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
          const angle = (i * Math.PI * 2) / 3 - time * 0.4;
          const px = cx + Math.cos(angle) * (size * 0.6);
          const py = cy + Math.sin(angle) * (size * 0.6);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      deathSync = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [index]);

  return <canvas ref={canvasRef} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />;
}

export default function HomeChargerBenefits() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const benefits = [
    {
      category: "SPEED & METRICS",
      title: "4x faster than a wall plug",
      desc: "Forget overnight trickle charging. Our Level 2 residential solutions add up to 50km of range per hour, ensuring your electric vehicle is ready to go whenever you are."
    },
    {
      category: "UTILITY OPTIMIZATION",
      title: "Make the most of off-peak pricing",
      desc: "Our smart home chargers replenish your system fast enough to capture lowest utility rate slots overnight, ensuring absolutely no cheap kilowatt is ever wasted."
    },
    {
      category: "ECONOMIC VALUE",
      title: "Charging cheaper than a flat white",
      desc: "A typical full charging session costs a fraction of transit fuel rates. Powering your entire daily commute is more affordable than your morning artisanal coffee choice."
    }
  ];

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-home-benefit-row',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative py-24 bg-white text-neutral-900 border-b border-neutral-150 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block mb-2">
            WHY CHARGENET RESIDENTIAL
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
            Domestic Refueling, Upgraded
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded-full" />
        </div>

        {/* Benefits List (Replaces generic cards with the screenshot list structure) */}
        <div className="flex flex-col border-t border-neutral-150">
          {benefits.map((b, idx) => {
            const seqNumber = `H-0${idx + 1}`;
            return (
              <div
                key={idx}
                className="gsap-home-benefit-row group relative flex flex-col md:flex-row items-stretch justify-between p-6 sm:p-10 bg-white hover:bg-neutral-950 hover:text-white border-b border-neutral-150 transition-all duration-500 ease-out cursor-pointer text-neutral-950"
              >
                {/* Visual Section: Generative WebGL/Vector Canvas with Text details */}
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">

                  {/* High Contrast Generative Frame Panel representing visual wires */}
                  <div className="relative w-full sm:w-[150px] aspect-video sm:aspect-square sm:h-[80px] rounded-[6px] bg-neutral-50 group-hover:bg-[#0b0b0b] border border-neutral-150 group-hover:border-neutral-900 overflow-hidden flex items-center justify-center p-1 transition-colors duration-500">
                    <GenerativeMeshCanvas index={idx} />
                  </div>

                  {/* Core Typography Block */}
                  <div className="space-y-1 mt-4 sm:mt-0 max-w-2xl">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl md:text-2xl text-neutral-950 group-hover:text-white uppercase tracking-tight transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="font-sans text-neutral-500 group-hover:text-neutral-300 text-xs sm:text-sm leading-relaxed font-light transition-colors duration-300">
                      {b.desc}
                    </p>
                  </div>
                </div>

                {/* Right Arrow Interactive trigger (s2.png circular top-right target) */}
                <div className="flex items-center justify-end mt-6 md:mt-0 self-end md:self-center">
                  <div className="w-11 h-11 rounded-full border border-neutral-200 group-hover:border-neutral-800 flex items-center justify-center transition-all duration-300 bg-white group-hover:bg-white text-neutral-950">
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

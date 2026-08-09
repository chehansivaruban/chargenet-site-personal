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
        // Sine wave charging grid mesh
        ctx.strokeStyle = 'rgba(37, 99, 235, 0.45)'; // blue-650
        for (let j = 0; j < 4; j++) {
          ctx.beginPath();
          for (let i = 0; i < w + 10; i += 8) {
            const y = cy + Math.sin(i * 0.035 + time + j * 0.7) * 16 * Math.cos(time * 0.15 + j);
            if (i === 0) ctx.moveTo(i, y);
            else ctx.lineTo(i, y);
          }
          ctx.stroke();
        }
      } else if (index === 1) {
        // Orbiting electron trails around energy cell
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)'; // cyan-500
        ctx.beginPath();
        ctx.arc(cx, cy, 22, 0, Math.PI * 2);
        ctx.stroke();

        const numParticles = 6;
        for (let i = 0; i < numParticles; i++) {
          const angle = (i * Math.PI * 2) / numParticles + time * 0.55;
          const px = cx + Math.cos(angle) * (22 + Math.sin(time) * 10);
          const py = cy + Math.sin(angle) * (22 + Math.sin(time) * 10);

          ctx.fillStyle = 'rgba(37, 99, 235, 0.8)';
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(37, 99, 235, 0.18)';
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.stroke();
        }
      } else if (index === 2) {
        // Connected grid nodes
        const points = [];
        const rows = 3;
        const cols = 4;
        const padX = w / (cols + 1);
        const padY = h / (rows + 1);

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = padX * (c + 1) + Math.sin(time + r * 1.5) * 5;
            const y = padY * (r + 1) + Math.cos(time + c * 1.5) * 5;
            points.push({ x, y });
          }
        }

        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
            if (dist < w * 0.4) {
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.stroke();
            }
          }
        }

        ctx.fillStyle = 'rgba(37, 99, 235, 0.9)';
        points.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Rotating 3D hyper-energy wireframe cube projected in 2D
        const size = Math.min(w, h) * 0.28;
        const vertices = [
          [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
          [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1]
        ];

        const rotX = time * 0.35;
        const rotY = time * 0.5;

        const projected = vertices.map(v => {
          const x = v[0], y = v[1], z = v[2];
          const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
          const y1 = y * cosX - z * sinX;
          const z1 = y * sinX + z * cosX;

          const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
          const x2 = x * cosY + z1 * sinY;

          return {
            x: cx + x2 * size,
            y: cy + y1 * size
          };
        });

        ctx.strokeStyle = 'rgba(37, 99, 235, 0.45)';
        const edges = [
          [0,1], [1,2], [2,3], [3,0],
          [4,5], [5,6], [6,7], [7,4],
          [0,4], [1,5], [2,6], [3,7]
        ];

        ctx.beginPath();
        edges.forEach(e => {
          ctx.moveTo(projected[e[0]].x, projected[e[0]].y);
          ctx.lineTo(projected[e[1]].x, projected[e[1]].y);
        });
        ctx.stroke();

        ctx.fillStyle = 'cyan';
        projected.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
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

export default function CommercialChargerBenefits() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const benefits = [
    {
      category: "REVENUE STREAM",
      title: "Optimize Yield & Open New Revenue",
      desc: "Drastically reduce fleet fuel expenses when converting corporate fleets to electric, or configure paid public charging tariffs on-site to generate stable, passive cash flows."
    },
    {
      category: "TARGET DEMOGRAPHIC",
      title: "Draw Premium EV Clientele",
      desc: "Convert your retail center, hospitality site, or commercial parking complex into a preferred hub for high-spending EV operators who spend money while parking."
    },
    {
      category: "COMPLIANCE & ASSETS",
      title: "Future-Proof Real Estate Assets",
      desc: "Install highly scalable commercial-class platforms that conform closely to zero-emissions legislation, keeping you ahead of strict local regulatory guidelines."
    },
    {
      category: "ENVIRONMENTAL LEADERSHIP",
      title: "Mitigate Carbon & ESG Footprint",
      desc: "Meet ambitious corporate sustainability metrics and reduce logistics greenhouse gases. Scale easily using smart power sensors instead of costly municipal feed lines."
    }
  ];

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-benefit-row',
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
      className="relative py-24 md:py-32 bg-white text-neutral-900 border-b border-neutral-150 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block mb-2">
            BUSINESS STRATEGY INTEGRATION
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
            Why Introduce EV Fueling To Your Operation?
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 mt-4 rounded-full" />
        </div>

        {/* Benefits List (Replaces generic cards with the screenshot list structure) */}
        <div className="flex flex-col border-t border-neutral-150">
          {benefits.map((b, idx) => {
            const seqNumber = `C-0${idx + 1}`;
            return (
              <div
                key={idx}
                className="gsap-benefit-row group relative flex flex-col md:flex-row items-stretch justify-between p-6 sm:p-10 bg-white hover:bg-neutral-950 hover:text-white border-b border-neutral-150 transition-all duration-500 ease-out cursor-pointer text-neutral-950"
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

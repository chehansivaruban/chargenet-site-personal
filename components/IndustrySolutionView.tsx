'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  Check, 
  Building, 
  Users, 
  LineChart, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  FileText, 
  ArrowRight, 
  Activity, 
  Clock, 
  Shield, 
  Cpu, 
  TrendingUp, 
  Wrench, 
  Layers, 
  HelpCircle, 
  Award, 
  Sparkles,
  BarChart3,
  Sliders,
  CheckCircle,
  X,
  MapPin,
  Flame,
  ZapOff,
  LucideIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CapsuleHeader from './CapsuleHeader';
import Footer from './Footer';

// Sector configuration interfaces
export interface SectorConfig {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  heroDescription: string;
  heroStats: { label: string; value: string; desc: string }[];
  canvasType: 'apartments' | 'automotive' | 'municipalities' | 'retail' | 'fuel-stations' | 'parking-hubs' | 'workplaces';
  
  // Pain points vs solutions
  bentoItems: {
    title: string;
    painPoint: string;
    solution: string;
    metric: string;
    icon: LucideIcon;
  }[];

  // Tech Architecture Specs
  architectureSpecs: {
    category: string;
    specs: { name: string; value: string }[];
  }[];

  // Interactive Simulator parameters
  simulator: {
    title: string;
    subtitle: string;
    slider1: { label: string; min: number; max: number; step: number; default: number; unit: string };
    slider2: { label: string; min: number; max: number; step: number; default: number; unit: string };
    slider3: { label: string; min: number; max: number; step: number; default: number; unit: string };
    calculate: (v1: number, v2: number, v3: number) => {
      metric1: { label: string; value: string; sub: string };
      metric2: { label: string; value: string; sub: string };
      metric3: { label: string; value: string; sub: string };
      recommendation: string;
    };
  };

  // Recommended Hardware
  recommendedProducts: {
    id: string;
    name: string;
    power: string;
    imageSrc: string;
    badge: string;
    shortDesc: string;
    slug: string;
  }[];

  // Deployment Steps
  turnkeySteps: { step: string; title: string; desc: string }[];

  // FAQs
  faqs: { question: string; answer: string }[];
}

// Interactive Canvas Component tailored per sector
function InteractiveSectorCanvas({ canvasType }: { canvasType: SectorConfig['canvasType'] }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let destroyed = false;
    let animationId: number;
    let time = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      if (destroyed) return;
      for (const entry of entries) {
        const dpi = window.devicePixelRatio || 1;
        canvas.width = entry.contentRect.width * dpi;
        canvas.height = entry.contentRect.height * dpi;
        ctx.scale(dpi, dpi);
      }
    });

    resizeObserver.observe(canvas.parentElement || canvas);

    const draw = () => {
      if (destroyed) return;
      time += 0.02;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      if (w <= 0 || h <= 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);

      // Grid background
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.035)';
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2;

      if (canvasType === 'apartments') {
        // Multi-tenant load grid with active node waves
        const nodes = [
          { x: cx - 120, y: cy - 60 },
          { x: cx + 120, y: cy - 60 },
          { x: cx - 120, y: cy + 60 },
          { x: cx + 120, y: cy + 60 },
          { x: cx, y: cy }
        ];

        // Draw connections
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.lineWidth = 1.5;
        nodes.forEach((n1, i) => {
          nodes.forEach((n2, j) => {
            if (i < j) {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.stroke();
            }
          });
        });

        // Animated pulses on connections
        nodes.forEach((node, idx) => {
          const pulseR = 12 + Math.sin(time * 3 + idx) * 4;
          ctx.fillStyle = idx === 4 ? 'rgba(59, 130, 246, 0.9)' : 'rgba(16, 185, 129, 0.8)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = idx === 4 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(16, 185, 129, 0.3)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2);
          ctx.stroke();
        });

      } else if (canvasType === 'automotive') {
        // High-voltage telemetry dial & waveform
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
        
        ctx.beginPath();
        ctx.arc(cx, cy, 75, -Math.PI * 0.75, Math.PI * 0.75);
        ctx.stroke();

        // Speed needle
        const angle = -Math.PI * 0.75 + (Math.sin(time * 1.5) * 0.5 + 0.5) * (Math.PI * 1.5);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * 60, cy + Math.sin(angle) * 60);
        ctx.stroke();

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fill();

        // High frequency wave at bottom
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.beginPath();
        for (let x = 0; x < w; x += 4) {
          const y = h - 35 + Math.sin(x * 0.05 + time * 4) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

      } else if (canvasType === 'municipalities') {
        // Civic network grid map with pulsing nodes
        const cityNodes = [
          { x: cx - 140, y: cy - 70, label: 'Central Hub' },
          { x: cx + 110, y: cy - 50, label: 'Civic Plaza' },
          { x: cx - 60, y: cy + 80, label: 'Transit Depot' },
          { x: cx + 130, y: cy + 70, label: 'Port District' }
        ];

        cityNodes.forEach((node, idx) => {
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.15)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 40 + Math.sin(time + idx) * 10, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = 'rgba(37, 99, 235, 0.85)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
          ctx.fill();

          // Connect to neighbor
          const next = cityNodes[(idx + 1) % cityNodes.length];
          ctx.strokeStyle = 'rgba(37, 99, 235, 0.25)';
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(next.x, next.y);
          ctx.stroke();
        });

      } else if (canvasType === 'retail') {
        // Dwell-time multiplier flow rings
        const rings = 4;
        for (let i = 0; i < rings; i++) {
          const r = 35 + i * 28 + Math.sin(time * 2 + i) * 3;
          ctx.strokeStyle = `rgba(147, 51, 234, ${0.4 - i * 0.08})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(cx, cy, r, time * 0.2 * (i % 2 === 0 ? 1 : -1), time * 0.2 * (i % 2 === 0 ? 1 : -1) + Math.PI * 1.2);
          ctx.stroke();
        }

        ctx.fillStyle = 'rgba(147, 51, 234, 0.9)';
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);
        ctx.fill();

      } else if (canvasType === 'fuel-stations') {
        // Ultra-DC dual port power flow stream
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 2;
        
        // Left stream
        ctx.beginPath();
        ctx.moveTo(cx - 80, 20);
        ctx.bezierCurveTo(cx - 80, cy, cx - 120, cy, cx - 120, h - 20);
        ctx.stroke();

        // Right stream
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
        ctx.beginPath();
        ctx.moveTo(cx + 80, 20);
        ctx.bezierCurveTo(cx + 80, cy, cx + 120, cy, cx + 120, h - 20);
        ctx.stroke();

        // Power particles moving along
        const pY1 = (time * 90) % (h - 40) + 20;
        ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
        ctx.beginPath();
        ctx.arc(cx - 100, pY1, 5, 0, Math.PI * 2);
        ctx.fill();

        const pY2 = ((time + 0.5) * 90) % (h - 40) + 20;
        ctx.fillStyle = 'rgba(59, 130, 246, 0.9)';
        ctx.beginPath();
        ctx.arc(cx + 100, pY2, 5, 0, Math.PI * 2);
        ctx.fill();

      } else {
        // Workplaces & Parking Hubs solar / load balancing wave
        ctx.lineWidth = 1.5;
        const count = 3;
        for (let i = 0; i < count; i++) {
          ctx.strokeStyle = i === 0 ? 'rgba(59, 130, 246, 0.5)' : i === 1 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(234, 179, 8, 0.5)';
          ctx.beginPath();
          for (let x = 0; x < w; x += 5) {
            const y = cy + Math.sin(x * 0.02 + time * 2 + i * 1.5) * (25 + i * 8);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      destroyed = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [canvasType]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
    />
  );
}

export default function IndustrySolutionView({ config }: { config: SectorConfig }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [inquirySubmitted, setInquirySubmitted] = React.useState(false);

  // Simulator State
  const [slider1Val, setSlider1Val] = React.useState(config.simulator.slider1.default);
  const [slider2Val, setSlider2Val] = React.useState(config.simulator.slider2.default);
  const [slider3Val, setSlider3Val] = React.useState(config.simulator.slider3.default);

  // Form State
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    bayCount: config.simulator.slider1.default.toString(),
    message: ''
  });

  const simResults = React.useMemo(() => {
    return config.simulator.calculate(slider1Val, slider2Val, slider3Val);
  }, [config.simulator, slider1Val, slider2Val, slider3Val]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setInquirySubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        bayCount: config.simulator.slider1.default.toString(),
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-neutral-900 overflow-x-hidden antialiased font-sans flex flex-col">
      {/* Black ambient Header backing */}
      <div className="bg-black text-white">
        <CapsuleHeader />
      </div>

      <main className="flex-grow pt-20 md:pt-24">
        {/* Sticky top breadcrumb bar */}
        <section className="bg-white py-4 border-b border-neutral-150 sticky top-[72px] z-30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link 
              href="/business" 
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 hover:text-black transition-all group font-extrabold uppercase"
              id="back-to-business-link"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:-translate-x-1 transition-transform" />
              <span>RETURN TO INDUSTRY SECTORS</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              <span className="hover:text-neutral-700 transition-colors uppercase">SECTOR ARCHITECTURE</span>
              <ChevronRight className="w-3 h-3 text-neutral-300 animate-pulse" />
              <span className="text-neutral-900 font-extrabold">{config.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Narrative & Hero Specs */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase font-extrabold text-blue-600 bg-blue-50/80 border border-blue-100/80 px-3.5 py-1.5 rounded-full inline-block">
                    {config.categoryTag}
                  </span>
                  <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-950 leading-[1.05] tracking-tight uppercase">
                    {config.title}
                  </h1>
                  <p className="text-[#4B5563] text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    {config.subtitle}
                  </p>
                </div>

                <p className="text-neutral-600 text-sm md:text-base font-light leading-relaxed">
                  {config.heroDescription}
                </p>

                {/* Hero Stats Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {config.heroStats.map((stat, idx) => (
                    <div key={idx} className="bg-neutral-50/90 border border-neutral-200/70 p-5 rounded-2xl space-y-1">
                      <span className="font-display font-black text-2xl sm:text-3xl text-neutral-950 block">
                        {stat.label}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-blue-600 font-bold uppercase block">
                        {stat.value}
                      </span>
                      <p className="text-[11px] text-neutral-500 font-light leading-snug">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-neutral-800 active:scale-98 text-white px-8 py-4 rounded-2xl text-xs font-bold tracking-[0.1em] uppercase transition-all shadow-md hover:shadow-lg"
                    id="sector-inquire-btn"
                  >
                    <PhoneCall className="w-4 h-4 text-neutral-400" />
                    <span>Inquire for Site Blueprint</span>
                  </button>

                  <a 
                    href="#interactive-calculator"
                    className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-50 border border-neutral-250 text-neutral-700 hover:text-neutral-950 py-4 px-6 rounded-2xl text-xs font-bold tracking-[0.1em] uppercase transition-all"
                  >
                    <Sliders className="w-4 h-4 text-neutral-400" />
                    <span>Run Sector Simulator</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Compliant with CE, OCPP 2.0.1 & Ceylon Electricity Board (CEB) Grid Specs</span>
                </div>
              </div>

              {/* Right Column: Generative Interactive Canvas Card */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center bg-neutral-950 text-white rounded-[32px] p-8 sm:p-10 border border-neutral-800 overflow-hidden min-h-[420px] md:min-h-[500px] shadow-xl group">
                
                {/* Canvas Background */}
                <InteractiveSectorCanvas canvasType={config.canvasType} />

                {/* Overlay Header Tag */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="font-mono text-[9px] tracking-widest text-neutral-400 bg-neutral-900/90 border border-neutral-800 px-3 py-1 rounded-full font-bold uppercase">
                    SECTOR TELEMETRY ENGINE
                  </span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                </div>

                {/* Central Visual Graphic overlay info */}
                <div className="relative z-10 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto shadow-inner">
                    <Activity className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="font-display font-black text-xl uppercase tracking-wider text-white">
                    {config.title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-light max-w-xs mx-auto leading-relaxed">
                    Real-time load management, smart telemetry streams, and hardware synchronization.
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[9px] font-mono text-neutral-400 bg-neutral-900/90 border border-neutral-800 px-4 py-2 rounded-xl z-10">
                  <span>DYNAMIC BALANCER: ACTIVE</span>
                  <span className="text-emerald-400 font-bold">100% ONLINE</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Sector Simulator / ROI Calculator Section */}
        <section id="interactive-calculator" className="py-16 md:py-24 bg-neutral-900 text-white border-t border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400 font-bold block">
                INTERACTIVE DEPLOYMENT SIMULATOR
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                {config.simulator.title}
              </h2>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {config.simulator.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Sliders Control Panel */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-3xl border border-neutral-800 space-y-8">
                
                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-neutral-300 font-bold uppercase">{config.simulator.slider1.label}</span>
                    <span className="text-cyan-400 font-black text-base bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-lg">
                      {slider1Val} {config.simulator.slider1.unit}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min={config.simulator.slider1.min} 
                    max={config.simulator.slider1.max} 
                    step={config.simulator.slider1.step}
                    value={slider1Val}
                    onChange={(e) => setSlider1Val(Number(e.target.value))}
                    className="w-full accent-cyan-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>{config.simulator.slider1.min} {config.simulator.slider1.unit}</span>
                    <span>{config.simulator.slider1.max} {config.simulator.slider1.unit}</span>
                  </div>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-neutral-300 font-bold uppercase">{config.simulator.slider2.label}</span>
                    <span className="text-blue-400 font-black text-base bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-lg">
                      {slider2Val} {config.simulator.slider2.unit}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min={config.simulator.slider2.min} 
                    max={config.simulator.slider2.max} 
                    step={config.simulator.slider2.step}
                    value={slider2Val}
                    onChange={(e) => setSlider2Val(Number(e.target.value))}
                    className="w-full accent-blue-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>{config.simulator.slider2.min} {config.simulator.slider2.unit}</span>
                    <span>{config.simulator.slider2.max} {config.simulator.slider2.unit}</span>
                  </div>
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-neutral-300 font-bold uppercase">{config.simulator.slider3.label}</span>
                    <span className="text-purple-400 font-black text-base bg-purple-950/60 border border-purple-800/60 px-3 py-1 rounded-lg">
                      {slider3Val} {config.simulator.slider3.unit}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min={config.simulator.slider3.min} 
                    max={config.simulator.slider3.max} 
                    step={config.simulator.slider3.step}
                    value={slider3Val}
                    onChange={(e) => setSlider3Val(Number(e.target.value))}
                    className="w-full accent-purple-400 h-2 bg-neutral-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>{config.simulator.slider3.min} {config.simulator.slider3.unit}</span>
                    <span>{config.simulator.slider3.max} {config.simulator.slider3.unit}</span>
                  </div>
                </div>

              </div>

              {/* Calculated Outputs Display */}
              <div className="lg:col-span-5 bg-gradient-to-br from-neutral-950 to-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <span className="font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold block">
                  PROJECTED PERFORMANCE METRICS
                </span>

                <div className="space-y-4">
                  
                  <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-1">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase">{simResults.metric1.label}</span>
                    <div className="font-display font-black text-3xl text-cyan-400">{simResults.metric1.value}</div>
                    <p className="text-[11px] text-neutral-400 font-light">{simResults.metric1.sub}</p>
                  </div>

                  <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-1">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase">{simResults.metric2.label}</span>
                    <div className="font-display font-black text-3xl text-emerald-400">{simResults.metric2.value}</div>
                    <p className="text-[11px] text-neutral-400 font-light">{simResults.metric2.sub}</p>
                  </div>

                  <div className="p-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-1">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase">{simResults.metric3.label}</span>
                    <div className="font-display font-black text-2xl text-purple-300">{simResults.metric3.value}</div>
                    <p className="text-[11px] text-neutral-400 font-light">{simResults.metric3.sub}</p>
                  </div>

                </div>

                {/* Recommended Hardware Configuration Callout */}
                <div className="p-4 bg-blue-950/40 border border-blue-800/50 rounded-2xl space-y-2">
                  <span className="font-mono text-[9px] text-blue-400 uppercase font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> RECOMMENDED HARDWARE MATRIX
                  </span>
                  <p className="text-xs text-neutral-200 font-medium">
                    {simResults.recommendation}
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md"
                >
                  Request Official Proposal
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* Bento Grid: Legacy Pain Points vs chargeNET Breakthroughs */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="max-w-3xl mb-16 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-600 font-extrabold block">
                ARCHITECTURAL BREAKTHROUGHS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
                Solving Legacy Sector Bottlenecks
              </h2>
              <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
                How chargeNET replaces traditional charging friction points with high-uptime, intelligent energy engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.bentoItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#FAFBFB] border border-neutral-200/80 p-8 rounded-3xl space-y-6 hover:border-neutral-300 hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-[9px] font-black tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase">
                          {item.metric}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-xl text-neutral-950 uppercase tracking-tight">
                        {item.title}
                      </h3>

                      <div className="space-y-3 pt-2">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-red-500 font-extrabold uppercase flex items-center gap-1">
                            <ZapOff className="w-3 h-3" /> Legacy Challenge:
                          </span>
                          <p className="text-neutral-500 text-xs font-light leading-relaxed">
                            {item.painPoint}
                          </p>
                        </div>

                        <div className="space-y-1 pt-2 border-t border-neutral-200/60">
                          <span className="text-[10px] font-mono text-emerald-600 font-extrabold uppercase flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> chargeNET Solution:
                          </span>
                          <p className="text-neutral-800 text-xs font-medium leading-relaxed">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Technical Architecture Specs Matrix */}
        <section className="py-20 bg-neutral-50 border-t border-b border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-600 font-extrabold block">
                SYSTEM SPECIFICATIONS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
                Technical Architecture Matrix
              </h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Detailed electrical, communications, and security metrics for this sector implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {config.architectureSpecs.map((group, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-3xl p-8 space-y-6 shadow-sm">
                  <h3 className="font-display font-extrabold text-lg uppercase tracking-wider text-neutral-900 border-b border-neutral-150 pb-4">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-neutral-100 last:border-0">
                        <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase font-bold sm:mr-4 shrink-0">
                          {spec.name}
                        </span>
                        <span className="text-xs font-bold text-neutral-900 pt-1 sm:pt-0">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Recommended Hardware Stack */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-600 font-extrabold block">
                  HARDWARE SELECTION
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-950 uppercase tracking-tight">
                  Recommended Chargers for {config.title}
                </h2>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Engineered hardware units matching the electrical demands of this sector.
                </p>
              </div>

              <Link 
                href="/catalog" 
                className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-widest"
              >
                <span>VIEW COMPLETE CATALOG</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.recommendedProducts.map((prod) => (
                <div 
                  key={prod.id} 
                  className="bg-[#FAFBFB] border border-neutral-200/80 rounded-3xl p-6 flex flex-col justify-between hover:border-neutral-300 hover:shadow-xl transition-all group"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                        {prod.badge}
                      </span>
                      <span className="font-mono text-xs font-extrabold text-neutral-800 bg-white border border-neutral-200 px-3 py-1 rounded-md shadow-sm">
                        {prod.power}
                      </span>
                    </div>

                    <div className="relative h-48 w-full flex items-center justify-center my-4">
                      <Image 
                        src={prod.imageSrc} 
                        alt={prod.name} 
                        width={200} 
                        height={200}
                        className="object-contain max-h-44 group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-black text-lg text-neutral-950 uppercase tracking-tight">
                        {prod.name}
                      </h3>
                      <p className="text-neutral-500 text-xs font-light leading-relaxed">
                        {prod.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-200/60 mt-6">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors"
                    >
                      <span>Explore Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Turnkey 4-Step Deployment Roadmap */}
        <section className="py-20 bg-neutral-950 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="max-w-3xl mb-16 space-y-3">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-cyan-400 font-bold block">
                TURNKEY IMPLEMENTATION
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                4-Step Deployment Protocol
              </h2>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                From initial electrical grid assessment to cloud management activation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {config.turnkeySteps.map((s, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl space-y-4 relative">
                  <span className="font-mono text-3xl font-black text-cyan-400 block">
                    {s.step}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Enterprise Call to Action Banner */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-slate-900 text-white rounded-[32px] p-8 md:p-14 relative overflow-hidden border border-neutral-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 shadow-2xl">
              
              <div className="space-y-4 max-w-2xl relative z-10">
                <span className="font-mono text-[10px] text-blue-400 font-bold tracking-[0.2em] block uppercase">
                  READY TO BUILD YOUR INFRASTRUCTURE?
                </span>
                <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight leading-tight">
                  Deploy chargeNET at your site
                </h2>
                <p className="text-neutral-300 text-sm font-light leading-relaxed">
                  Our specialist power engineers conduct complete physical layout audits, handle utility clearances with local power authorities, and provide turnkey installation.
                </p>
              </div>

              <div className="shrink-0 space-y-3 relative z-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs uppercase tracking-widest px-8 py-5 rounded-2xl transition-all shadow-lg block text-center w-full"
                  id="bottom-inquire-btn"
                >
                  Speak to an Engineer
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-neutral-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Initial Grid Survey Included</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Inquiry Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-neutral-900 rounded-3xl p-8 max-w-xl w-full border border-neutral-200 shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {inquirySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-neutral-900">
                    Inquiry Received
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our senior power infrastructure engineering team will review your site details and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <span className="font-mono text-[9px] text-blue-600 font-bold uppercase tracking-widest block mb-1">
                      ENTERPRISE BLUEPRINT REQUEST
                    </span>
                    <h3 className="font-display font-black text-2xl uppercase tracking-tight text-neutral-950">
                      Inquire for {config.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed mt-1">
                      Provide your site parameters below to schedule a turnkey electrical assessment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ruwan Jayasinghe"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                        Work Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ruwan@property.lk"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+94 77 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                        Organization / Property Name
                      </label>
                      <input 
                        type="text" 
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Colombo Horizon Towers"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                      Target Parking Bays to Equip
                    </label>
                    <input 
                      type="number" 
                      value={formData.bayCount}
                      onChange={(e) => setFormData({ ...formData, bayCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-neutral-600 uppercase font-bold block">
                      Site Notes or Special Requirements
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify transformer availability, multi-floor parking layout, or timeframe..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-250 text-xs focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0F172A] hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-md"
                  >
                    Submit Engineering Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

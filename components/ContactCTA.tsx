'use client';

import * as React from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

type Track = 'home' | 'business';
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const tracks: Record<
  Track,
  {
    label: string;
    hook: string;
    body: string;
    points: string[];
    cta: string;
    accent: string;
    glow: string;
  }
> = {
  home: {
    label: 'For Home',
    hook: 'Wake up fully charged every morning.',
    body: 'Frictionless overnight charging in your driveway. Natively engineered to work with Sri Lanka’s single-phase and three-phase residential grids, managing domestic load dynamics safely and automatically scheduling charges around off-peak rates.',
    points: [
      'Dynamic load balancing protects domestic appliances',
      'Native configurations for single-phase or three-phase setups',
      'IP54-rated weatherproof wall enclosure options',
    ],
    cta: 'Configure home setup',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.1)',
  },
  business: {
    label: 'For Business',
    hook: 'Fulfill enterprise EV fleet and utility charging needs.',
    body: 'Convert parking assets into active business benefits. Support corporate ESG goals, provide clean workplace charging perks, or monetize premium DC charging bays with a fully integrated billing and telemetry analytics suite.',
    points: [
      'Automated monetization, guest billing, and analytics controls',
      'High-uptime, IP54 marine-grade housings for Sri Lankan coastal areas',
      'Centralized telemetry interface for group load balancing',
    ],
    cta: 'Request enterprise layout',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.08)',
  },
};

export default function ContactCTA() {
  const [selected, setSelected] = React.useState<Track>('home');
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<SubmitStatus>('idle');
  const active = tracks[selected];

  const sectionRef = React.useRef<HTMLElement>(null);

  // ─── Scroll-driven dynamic background & text crossfade (Theme transition) ───
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.8 });

  // Interpolate background color:
  // - black (#060609) -> light grey (#f5f5f7) -> light grey (#f5f5f7) -> black (#060609)
  const bgColor = useTransform(
    smoothProgress,
    [0, 0.22, 0.78, 1],
    ['#060609', '#f5f5f7', '#f5f5f7', '#060609']
  );

  // Interpolate main text color:
  // - white (#ffffff) -> black (#1d1d1f) -> black (#1d1d1f) -> white (#ffffff)
  const textColor = useTransform(
    smoothProgress,
    [0, 0.22, 0.78, 1],
    ['#ffffff', '#1d1d1f', '#1d1d1f', '#ffffff']
  );

  // Interpolate subtext color:
  // - white/40 -> dark/50 -> dark/50 -> white/40
  const subTextColor = useTransform(
    smoothProgress,
    [0, 0.22, 0.78, 1],
    ['rgba(255,255,255,0.4)', 'rgba(115,115,115,1)', 'rgba(115,115,115,1)', 'rgba(255,255,255,0.4)']
  );

  // Interpolate tag background & border color:
  // - dark/border -> light/border
  const tagBorderColor = useTransform(
    smoothProgress,
    [0, 0.22, 0.78, 1],
    ['rgba(255,255,255,0.1)', 'rgba(0,0,0,0.08)', 'rgba(0,0,0,0.08)', 'rgba(255,255,255,0.1)']
  );

  const handleCircuitSwitch = (trackKey: Track) => {
    setSelected(trackKey);
    setStatus('idle');
    setEmail('');
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!email || !email.includes('@')) {
      setStatus('error');
      const t = setTimeout(() => setStatus('idle'), 3000);
      return () => clearTimeout(t);
    }

    setStatus('loading');
    const t = setTimeout(() => {
      setStatus('success');
    }, 1500);
    return () => clearTimeout(t);
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 w-full relative z-30 border-t border-b overflow-hidden font-sans transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        borderColor: tagBorderColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* ─── HEADER AREA (Apple Minimalism) ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl space-y-4">
            <motion.span
              style={{ color: subTextColor }}
              className="font-mono text-[9px] tracking-[0.25em] uppercase block"
            >
              Contact
            </motion.span>
            <motion.h2
              style={{ color: textColor }}
              className="font-sans font-medium text-4xl sm:text-5xl tracking-tight leading-[1.1]"
            >
              Engineered for driveways.
              <br />
              <span className="opacity-45">Architected for enterprise.</span>
            </motion.h2>
          </div>

          {/* Apple-style Segmented Control (Light background themed) */}
          <div className="bg-black/[0.04] p-1 rounded-full border border-black/[0.06] flex gap-1 shrink-0 self-start md:self-auto">
            {(Object.keys(tracks) as Track[]).map((key) => {
              const track = tracks[key];
              const isSelected = selected === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleCircuitSwitch(key)}
                  className="relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors duration-300 cursor-pointer text-black/45 hover:text-black/70"
                  style={{ minWidth: '110px', textAlign: 'center' }}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="active-pill-contact"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${isSelected ? 'text-black font-semibold' : ''}`}>
                    {track.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── MAIN CONTENT BLOCK (Apple-style dark mode card contrast) ─── */}
        <div className="w-full bg-[#0d0d0f] border border-white/[0.06] rounded-2xl p-8 sm:p-12 relative overflow-hidden min-h-[380px] flex items-center shadow-xl">
          {/* Subtle background glow representing active conduit state */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[140px] transition-all duration-700"
              style={{ background: active.glow }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Description & Feature points */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <h3 className="font-sans font-semibold text-2xl tracking-tight text-white leading-tight">
                    {active.hook}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light max-w-xl">
                    {active.body}
                  </p>
                </div>

                <ul className="space-y-3.5 pt-4 border-t border-white/5">
                  {active.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-neutral-300 leading-normal">
                      <span className="h-5 w-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-neutral-400" />
                      </span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Contact Inquiry Input Field */}
              <div className="lg:col-span-5 w-full bg-white/[0.01] border border-white/[0.04] p-6 sm:p-8 rounded-xl space-y-6">
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase block">
                    Inquiry Gateway
                  </span>
                  <h4 className="font-sans font-semibold text-sm text-white">
                    Request configuration specs
                  </h4>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-3 w-full">
                  <div className="space-y-1.5 w-full">
                    <div className="flex gap-2 w-full">
                      <input
                        type="text"
                        placeholder="Enter email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'loading' || status === 'success'}
                        className={`flex-1 min-w-0 bg-[#060609] border px-3.5 py-2.5 rounded-lg font-sans text-xs text-white placeholder-neutral-600 outline-none transition-all duration-300 ${
                          status === 'error'
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20'
                            : status === 'success'
                              ? 'border-emerald-500/50 focus:border-emerald-500/50'
                              : 'border-white/10 focus:border-white/20 focus:bg-[#060609]'
                        }`}
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`px-4 py-2.5 rounded-lg flex items-center justify-center font-sans text-xs font-medium tracking-wide transition-all duration-300 ${
                          status === 'success'
                            ? 'bg-emerald-600 text-white'
                            : status === 'error'
                              ? 'bg-red-600 text-white'
                              : 'bg-white hover:bg-neutral-200 text-black cursor-pointer'
                        }`}
                      >
                        {status === 'loading' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Simple system status message banner */}
                    <AnimatePresence mode="wait">
                      {status === 'success' && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="font-mono text-[9px] text-emerald-400 mt-1"
                        >
                          Request received. Our engineering team will contact you.
                        </motion.p>
                      )}
                      {status === 'error' && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="font-mono text-[9px] text-red-400 mt-1"
                        >
                          Please enter a valid email address.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM MASTER GATEWAY ACCESS BAR (Minimal Link style) */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <motion.span
              style={{ color: subTextColor }}
              className="font-mono text-[8px] tracking-widest uppercase block"
            >
              Full Consultation
            </motion.span>
            <motion.p
              style={{ color: subTextColor }}
              className="text-xs font-light leading-relaxed"
            >
              Prefer a full site survey or looking for bulk charger deployment? Visit our dedicated contact center.
            </motion.p>
          </div>
          <motion.a
            href="/contact"
            style={{ color: textColor }}
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold hover:opacity-70 transition-opacity uppercase tracking-wider group/link self-start sm:self-auto"
          >
            <span>Go to contact page</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </motion.a>
        </div>

      </div>
    </motion.section>
  );
}

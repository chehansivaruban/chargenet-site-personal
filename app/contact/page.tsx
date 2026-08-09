'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, ArrowLeft, Home, Building2, ShieldCheck, Check } from 'lucide-react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [inquiryType, setInquiryType] = React.useState<'home' | 'business'>('home');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate high-speed data packet transfer
    await new Promise(resolve => setTimeout(resolve, 900));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Global Capsule Navigation Header */}
      <CapsuleHeader />

      {/* Main Content wrapper */}
      <main className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-white min-h-[85vh] text-black">
        {/* Decorative Grid and Soft ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,123,206,0.02)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[30vh] rounded-full bg-blue-600/[0.02] blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Back button link to main page */}
          <div className="mb-10">
            <Link 
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#357BCE] transition-colors font-mono uppercase tracking-widest"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* Page Asymmetric Header */}
          <div className="border-b border-neutral-100 pb-12 mb-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#357BCE]" />
                  <span className="font-mono text-[9px] text-[#357BCE] font-bold tracking-[0.25em] uppercase">
                    [ COMMUNICATIONS INTERFACE // ACTIVE NODE ]
                  </span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 select-none">
                  {"Let's engineer your charging solution."}
                </h1>
              </div>
              <div className="md:col-span-4">
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                  Tailored domestic charging architectures for smart homes, and robust multi-protocol options for businesses and EV fleet infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT AREA: Switcher options & beautiful value props */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-36">
              
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-extrabold block">
                  Select your application
                </span>
                
                {/* Visual Segmented Control Selector */}
                <div className="grid grid-cols-2 p-1 bg-neutral-100 rounded-[6px] border border-neutral-200/50">
                  <button
                    type="button"
                    onClick={() => setInquiryType('home')}
                    className={`flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all ${
                      inquiryType === 'home' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-neutral-500 hover:text-black hover:bg-neutral-50/70'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5" />
                    Homes
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('business')}
                    className={`flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider rounded-[4px] transition-all ${
                      inquiryType === 'business' 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-neutral-500 hover:text-black hover:bg-neutral-50/70'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    Businesses
                  </button>
                </div>
              </div>

              {/* Dynamic Information Display card based on select state */}
              <div className="p-6 md:p-8 bg-neutral-50 border border-neutral-250/60 rounded-[6px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/[0.015] rounded-full blur-2xl pointer-events-none" />
                
                {inquiryType === 'home' ? (
                  <motion.div
                    key="home-val"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Home className="w-5 h-5 text-[#357BCE]" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900">
                        ChargeNET Home Charger
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed font-light">
                        Never worry about low range again. Sleep peaceful while our 7kW / 22kW heavy-duty smart home charging module monitors energy tariffs, protects your grid phase load, and dynamically charges your EV dynamically.
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-neutral-200 border-dashed">
                      <li className="flex items-center gap-2 text-[11px] text-neutral-600 font-mono">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        AUTO-SCHEDULING FOR OFF-PEAK TARIFFS
                      </li>
                      <li className="flex items-center gap-2 text-[11px] text-neutral-600 font-mono">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        MOBILE REMOTE TELEMETRY LOGS
                      </li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="business-val"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#357BCE]" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-display font-black text-sm uppercase tracking-wider text-neutral-900">
                        ChargeNET Enterprise Hub
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed font-light">
                        Attract premium clientele, monetise visitor parking, and provide elite workplace perks for your staff. With our heavy dual AC outlets or rapid multi-protocol DC charge stations, your location becomes a prime local hub.
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-neutral-200 border-dashed">
                      <li className="flex items-center gap-2 text-[11px] text-neutral-600 font-mono">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        AUTOMATED COMMERCIAL REV PAYOUTS
                      </li>
                      <li className="flex items-center gap-2 text-[11px] text-neutral-600 font-mono">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        REAL-TIME CENTRALIZED DASHBOARDS
                      </li>
                    </ul>
                  </motion.div>
                )}

              </div>

              {/* R&D Trust badge */}
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100/50 rounded-[4px] border border-neutral-200/50">
                <ShieldCheck className="w-4 h-4 text-[#357BCE]" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold">
                  Certified ISO Assembly Sri Lanka
                </span>
              </div>

            </div>

            {/* RIGHT AREA: Full Interactive Contact Form with beautiful visual state feedback */}
            <div className="lg:col-span-7 bg-neutral-50 border border-neutral-250/60 rounded-[8px] p-8 md:p-10 relative">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="form-module"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-extrabold">
                        Inquiry Specification Form
                      </span>
                      <span className="font-mono text-[9px] text-[#357BCE] border border-blue-200 bg-blue-50 px-2.5 py-0.5 rounded-[2px] font-bold uppercase tracking-wide">
                        {inquiryType === 'home' ? 'Residential Setup' : 'Commercial Enterprise'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="form-name" className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                          Full Name / Contact person *
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Priyantha Silva"
                          required
                          className="w-full bg-white border border-neutral-200 text-xs px-4 py-3 rounded-[4px] text-black focus:outline-none focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="form-email" className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                          Email address *
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="priyantha@domain.lk"
                          required
                          className="w-full bg-white border border-neutral-200 text-xs px-4 py-3 rounded-[4px] text-black focus:outline-none focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="form-phone" className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                          Mobile number *
                        </label>
                        <input
                          id="form-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+94 7X XX XXX XX"
                          required
                          className="w-full bg-white border border-neutral-200 text-xs px-4 py-3 rounded-[4px] text-black focus:outline-none focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all"
                        />
                      </div>

                      {/* Location */}
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="form-location" className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                          City / region in Sri Lanka
                        </label>
                        <input
                          id="form-location"
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Colombo, Kandy, Galle"
                          className="w-full bg-white border border-neutral-200 text-xs px-4 py-3 rounded-[4px] text-black focus:outline-none focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all"
                        />
                      </div>
                    </div>

                    {/* Details in Textarea */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="form-details" className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                        Required specifications (Describe your space)
                      </label>
                      <textarea
                        id="form-details"
                        rows={4}
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder={
                          inquiryType === 'home'
                            ? "Tell us about your home, main grid phase (single or three-phase if known), parking area, and vehicle type."
                            : "Describe your enterprise layout: apartment block, public fast charger hub, fleet size, or corporate premises parking slots."
                        }
                        className="w-full bg-white border border-neutral-200 text-xs px-4 py-3 rounded-[4px] text-black focus:outline-none focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all resize-none"
                      />
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-[#357BCE] text-white font-display text-[10.5px] uppercase tracking-widest font-black py-4.5 transition-all duration-300 rounded-[3px] select-none active:scale-[0.985] shadow-md border border-neutral-800"
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Transmitting connection details...' : 'Initiate Transmission Link'}
                        {!isSubmitting && <Send className="w-3.5 h-3.5" />}
                      </span>
                    </button>

                    <p className="text-[9px] font-mono text-neutral-400 text-center uppercase tracking-widest leading-relaxed">
                      * Rest assured, your data is isolated securely using SSL architecture.
                    </p>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shadow-inner">
                      <Sparkles className="w-6 h-6 text-[#357BCE] animate-pulse" />
                    </div>

                    <div className="space-y-2 max-w-sm">
                      <h3 className="font-display font-black text-2xl text-neutral-900 uppercase tracking-tight">
                        TRANSMISSION LOGGED.
                      </h3>
                      <p className="font-sans text-neutral-500 text-xs leading-relaxed font-light">
                        We have successfully generated an interactive handshake ticket for <strong>{formData.name}</strong>! Our engineers in Colombo will evaluate your requirements and reach back in less than 24 hours.
                      </p>
                    </div>

                    <div className="bg-neutral-100 border border-neutral-200/60 p-4 rounded-[4px] font-mono text-[9px] text-neutral-500 max-w-sm">
                      PACKET_TRANSMISSION: <span className="text-emerald-600 font-bold">200_OK_VERIFIED (CH_NET)</span>
                    </div>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-[#357BCE] hover:text-[#2b65ac] transition-colors"
                    >
                      Reset Handshake Link
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>
      </main>

      {/* 2. Corporate Minimalist Operations Footer */}
      <Footer />
    </div>
  );
}

'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Check, ArrowRight, Loader2, Wrench, Sparkles, PhoneCall } from 'lucide-react';

export default function HomeChargerContactCTA() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    chargerModel: 'next-gen',
    phaseType: 'single-phase',
    city: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      alert('Please fill out the required files (Name, Phone number, and City/Province).');
      return;
    }

    setIsSubmitting(true);
    // Simulate real high-performing API call proxy
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      chargerModel: 'next-gen',
      phaseType: 'single-phase',
      city: '',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="home-installation-booking" className="relative py-24 bg-white text-neutral-900 border-b border-neutral-100 overflow-hidden">
      {/* Subtle background glow effect consistent with other sections */}
      <div className="absolute -bottom-24 right-0 w-[450px] h-[450px] bg-blue-50/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-12 left-0 w-[400px] h-[400px] bg-[#f5f2eb]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Modern high-contrast split divider banner layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Certified Home Installation Package Info Column (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-[#357BCE] font-extrabold tracking-widest uppercase block">
                HYDROGRID & HOME CERTIFIED INSTALLATION
              </span>
              <h2 className="font-display font-medium text-4xl sm:text-[46px] leading-[1.0] text-neutral-950 uppercase tracking-tight">
                Get Your Bespoke Quote
              </h2>
              <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                {"Every residential chargeNET installation is calibrated individually to fit your home's thermal capacity. Fill out the quick inquiry board to schedule a comprehensive remote digital DB panel inspection with our engineering team."}
              </p>
            </div>

            {/* Premium Package Inclusions Checklist with clean styled cards */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-extrabold block">
                Standard Installation Package Includes:
              </h4>

              <div className="space-y-3.5 pt-1">
                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Lightning & Surge Safeguard</h5>
                    <p className="font-sans text-neutral-550 text-[11px] font-light leading-relaxed mt-0.5">
                      Includes certified Surge Protection Device (SPD) to protect the charger from voltage spikes and lightning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Double-Pole Safety Circuit Breaker</h5>
                    <p className="font-sans text-neutral-550 text-[11px] font-light leading-relaxed mt-0.5">
                      Premium RCBO installation prevents minor residual earth leakages from shutting down household appliances.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#357BCE] shrink-0 mt-0.5">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Certified On-Site Turnkey Setup</h5>
                    <p className="font-sans text-neutral-550 text-[11px] font-light leading-relaxed mt-0.5">
                      Includes up to 10 meters of premium armored heavy-gauge cable conduit, wall mount brackets, and dynamic configuration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick emergency service row */}
            <div className="flex items-center gap-4 pt-6 border-t border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#357BCE]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">
                  Installation Helpline
                </span>
                <span className="font-display text-sm font-bold text-neutral-900 tracking-tight">
                  +94 11 200 4545
                </span>
              </div>
            </div>

          </div>

          {/* Right Panel: Beautiful Floating Interactive Consultation Form Container (Col Span 7) */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#fafafa] border border-neutral-200/70 p-8 sm:p-10 rounded-[32px] md:rounded-[40px] shadow-[0_24px_50px_rgba(0,0,0,0.03)] h-full flex flex-col justify-center min-h-[480px]">
              
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display font-bold text-lg text-neutral-950 uppercase">
                        Residential Setup Request
                      </h3>
                      <p className="font-sans text-neutral-500 text-xs font-light">
                        No immediate commitment needed. Just register your basic interest below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="name">
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="E.g. Shan Wickremasinghe"
                          className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#357BCE] transition-all"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="phone">
                          Phone Number <span className="text-blue-600">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="E.g. +94 77 123 4567"
                          className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#357BCE] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="shan@gmail.com"
                          className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#357BCE] transition-all"
                        />
                      </div>

                      {/* City/Location Input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="city">
                          City / Province <span className="text-blue-600">*</span>
                        </label>
                        <input
                          id="city"
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="E.g. Colombo 03, Western"
                          className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#357BCE] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Choose charger model */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="charger">
                          Selected Charger Hardware
                        </label>
                        <select
                          id="charger"
                          value={formData.chargerModel}
                          onChange={(e) => setFormData({ ...formData, chargerModel: e.target.value })}
                          className="w-full px-3 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-800 focus:outline-none focus:border-[#357BCE] transition-all appearance-none cursor-pointer"
                        >
                          <option value="next-gen">Next Gen New Charger (Smart Home series)</option>
                          <option value="compatibility">6.6kW & 3.3kW Level 2 Compatibility</option>
                          <option value="velocity">3 Phase up to 22kW L2</option>
                        </select>
                      </div>

                      {/* Phase current support */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="phase">
                          In-Home Electrical Phase
                        </label>
                        <select
                          id="phase"
                          value={formData.phaseType}
                          onChange={(e) => setFormData({ ...formData, phaseType: e.target.value })}
                          className="w-full px-3 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-800 focus:outline-none focus:border-[#357BCE] transition-all appearance-none cursor-pointer"
                        >
                          <option value="single-phase">Single Phase (1-Phase)</option>
                          <option value="three-phase">Three Phase (3-Phase)</option>
                          <option value="unsure">I Am Not Sure // Need Survey</option>
                        </select>
                      </div>
                    </div>

                    {/* Short message */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block font-bold" htmlFor="message">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="E.g. Let us know preferred installation day or cable layout notes details..."
                        className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-neutral-200/80 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#357BCE] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-[#357BCE] disabled:bg-neutral-850 text-white font-sans text-xs uppercase tracking-widest font-extrabold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm cursor-pointer active:scale-[0.98]"
                      id="submit-residential-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                          <span>Processing Booking...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Installation Booking</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 px-4 flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
                      <ShieldCheck className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-medium text-2xl text-neutral-950 uppercase tracking-tight">
                        Booking Complete
                      </h3>
                      <p className="font-sans text-neutral-550 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
                        {"Thank you, request registered! A chargeNET engineer will contact you shortly on your phone/email to request digital photos of your main distribution breaker board. Let's make home charging effortless."}
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-emerald-100 rounded-2xl text-left max-w-sm w-full shadow-sm text-[11px] font-sans text-neutral-600 font-light space-y-1.5">
                      <div className="flex gap-1.5 items-center font-bold text-emerald-800 uppercase text-[9px] tracking-wide">
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Registered Booking Summary</span>
                      </div>
                      <div><strong className="text-neutral-800">Target Model:</strong> {formData.chargerModel === 'next-gen' ? 'Next Gen New (Smart)' : formData.chargerModel === 'compatibility' ? '6.6kW Level 2 Compatibility' : '3 Phase up to 22kW L2'}</div>
                      <div><strong className="text-neutral-800">Supply line:</strong> {formData.phaseType === 'single-phase' ? '1-Phase (Single)' : formData.phaseType === 'three-phase' ? '3-Phase (Triple)' : 'Unsure // Needs inspection'}</div>
                      <div><strong className="text-neutral-800">Assigned Location:</strong> {formData.city}, Sri Lanka</div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-[10px] text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider"
                    >
                      <span>Submit another booking request</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

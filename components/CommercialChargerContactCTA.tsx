'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Check, ArrowRight, Loader2, Wrench, Sparkles, PhoneCall } from 'lucide-react';

export default function CommercialChargerContactCTA() {
  const [formData, setFormData] = React.useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    chargerModel: 'cd-80kw',
    quantity: '1-3',
    city: '',
    industryType: 'Workplace',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.phone || !formData.city) {
      alert('Please fill out the required fields (Company Name, Contact Name, Phone, and City).');
      return;
    }

    setIsSubmitting(true);
    // Simulate real enterprise API call proxy
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      chargerModel: 'cd-80kw',
      quantity: '1-3',
      city: '',
      industryType: 'Workplace',
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section id="commercial-installation-booking" className="relative py-24 bg-white text-neutral-900 border-b border-neutral-100 overflow-hidden">
      {/* Subtle background glow effect consistent with other sections */}
      <div className="absolute -bottom-24 right-0 w-[450px] h-[450px] bg-blue-50/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -top-12 left-0 w-[400px] h-[400px] bg-[#f5f2eb]/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Modern high-contrast split divider banner layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Panel: Certified Commercial Installation Info Column (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-[#357BCE] font-extrabold tracking-widest uppercase block">
                CHARGE_NET ENTERPRISE CONSULTING
              </span>
              <h2 className="font-display font-medium text-4xl sm:text-[46px] leading-[1.0] text-neutral-950 uppercase tracking-tight">
                Request Bespoke Quote
              </h2>
              <p className="font-sans text-neutral-500 text-sm md:text-base leading-relaxed font-light">
                {"Every enterprise chargeNET installation is precisely mapped individually to fit your venue's capacity limits. Fill out the quick inquiry board to schedule a detailed remote digital DB panel inspection with our engineering crew."}
              </p>
            </div>

            {/* Premium Package Inclusions Checklist with clean styled cards */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#357BCE] font-extrabold block">
                Standard Commercial Package Includes:
              </h4>

              <div className="space-y-3.5 pt-1">
                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Industrial Surge Isolation</h5>
                    <p className="font-sans text-neutral-500 text-[11px] font-light leading-relaxed mt-0.5">
                      Equipped with heavy-duty Surge Protection Devices (SPD) to protect delicate industrial dispensers against volatile voltage spikes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3px]" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Multi-Channel Circuit Shields</h5>
                    <p className="font-sans text-neutral-500 text-[11px] font-light leading-relaxed mt-0.5">
                      Premium commercial RCBO assemblies shield sub-panels, isolating feed faults and keeping your facility safe.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#357BCE] shrink-0 mt-0.5">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-xs uppercase text-neutral-900 tracking-wider">Turn-key Corporate Civil Works</h5>
                    <p className="font-sans text-neutral-500 text-[11px] font-light leading-relaxed mt-0.5">
                      Includes comprehensive site surveys, concrete mounting base installations, heavy armored conduit paths, and final parameter configurations.
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
                  Corporate Hotline
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
                        Commercial RFP & Consulting
                      </h3>
                      <p className="font-sans text-neutral-500 text-xs font-light">
                        Share your general property details below. Our technical experts will design a customized proposal.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 animate-fade-in">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Company / Venue Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                          placeholder="E.g. Colombo City Centre"
                          className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Contact Person Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.contactName}
                          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                          placeholder="Your full name"
                          className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Business Phone <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="E.g. +94 77 123 4567"
                          className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Business Email
                        </label>
                        <input 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="E.g. manager@company.com"
                          className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Preferred Charger Model
                        </label>
                        <select 
                          value={formData.chargerModel}
                          onChange={(e) => setFormData({...formData, chargerModel: e.target.value})}
                          className="w-full text-xs font-sans border border-neutral-200 bg-white rounded-xl py-3 px-3.5 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none cursor-pointer"
                        >
                          <option value="cd-80kw">CD 80 kW Charger (DC Fast)</option>
                          <option value="fast-single">Rapid Charger Single-Port (120kW-150kW)</option>
                          <option value="fast-dual">Rapid Charger Dual-Port (150kW-240kW)</option>
                          <option value="multi-series">Custom Fleet Mix Portfolio</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Estimated Units Needed
                        </label>
                        <select 
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          className="w-full text-xs font-sans border border-neutral-200 bg-white rounded-xl py-3 px-3.5 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none cursor-pointer"
                        >
                          <option value="1-3">1 to 3 Units</option>
                          <option value="4-10">4 to 10 Units</option>
                          <option value="10+">10+ Large Scale Depot</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Corporate City / Location <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          placeholder="E.g. Colombo, Kandy, Galle"
                          className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                          Industry Segment
                        </label>
                        <select 
                          value={formData.industryType}
                          onChange={(e) => setFormData({...formData, industryType: e.target.value})}
                          className="w-full text-xs font-sans border border-neutral-200 bg-white rounded-xl py-3 px-3.5 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none cursor-pointer"
                        >
                          <option value="Apartments">Apartments & Multi-Family</option>
                          <option value="Retail">Retail & Hospitality</option>
                          <option value="Offices">Workplaces & Corporate Sites</option>
                          <option value="Fleet">Logistics Fleet Depots</option>
                          <option value="Municipal">Municipal & Public Utilities</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase text-neutral-400 tracking-wider block font-semibold">
                        Special Site Requirements / Technical Notes
                      </label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
                        placeholder="E.g. Please let us know if substation upgrades are anticipated..."
                        className="w-full text-xs font-sans font-normal border border-neutral-200 bg-white rounded-xl py-3 px-4 focus:ring-1 focus:ring-[#357BCE] focus:border-[#357BCE] transition-all outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2 text-[10px] text-neutral-450 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Authorized chargeNET technician inspection scheduled immediately upon request setup.</span>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-950 hover:bg-[#357BCE] text-white py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-bold uppercase tracking-wider text-xs transition-all duration-300 disabled:bg-neutral-800 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Processing Submission...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit RFP Consultation</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
                    className="text-center py-8 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 animate-bounce">
                      <Check className="w-[32px] h-[32px] stroke-[2.5px]" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#357BCE] font-bold block">
                        REQUEST REGISTERED SUCCESSFULLY
                      </span>
                      <h4 className="font-display font-black text-2xl uppercase tracking-tight text-neutral-900 leading-none">
                        Proposal Ticket Active
                      </h4>
                      <p className="font-sans text-neutral-500 text-xs max-w-sm mx-auto font-light leading-relaxed">
                        Thank you for reaching out, <span className="text-neutral-900 font-bold">{formData.contactName}</span>. Your dispatch reference ticket is registered. An enterprise electrical engineer will call you shortly.
                      </p>
                    </div>

                    <div className="border border-neutral-150 rounded-2xl p-4 bg-white max-w-sm w-full divide-y divide-neutral-100 text-left">
                      <div className="flex justify-between py-2 text-xs">
                        <span className="text-neutral-400">Company Ref:</span>
                        <span className="font-semibold text-neutral-800">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between py-2 text-xs">
                        <span className="text-neutral-400">Location Area:</span>
                        <span className="font-semibold text-neutral-800">{formData.city}</span>
                      </div>
                      <div className="flex justify-between py-2 text-xs">
                        <span className="text-neutral-400">Hardware Spec:</span>
                        <span className="font-semibold text-[#357BCE] font-mono">
                          {formData.chargerModel === 'cd-80kw' ? 'CD 80 kW DC' : formData.chargerModel === 'fast-single' ? 'Rapid Single (150kW)' : 'Rapid Dual (240kW)'}
                        </span>
                      </div>
                    </div>

                    <button 
                      onClick={handleReset}
                      className="text-neutral-450 hover:text-neutral-800 text-[11px] font-mono tracking-wider uppercase border-b border-dashed border-neutral-300 hover:border-neutral-500 transition-colors uppercase pt-2 cursor-pointer"
                    >
                      Submit a new RFP form
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

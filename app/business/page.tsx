'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import { ArrowRight, Building, Check, Users, ShieldCheck, HeartHandshake, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function BusinessSolutionsPage() {
  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased font-sans">
      <CapsuleHeader />

      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Main Hero Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#357BCE] font-bold tracking-widest uppercase block">
                ENTERPRISE SOLUTONS
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-950 leading-tight">
                Empower your workplace. Monetize your parking spaces.
              </h1>
              <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
                {"Turn static commercial real estate, corporate offices, or central fleet depot structures into high-yield, smart-metered electric vehicle hubs. From intelligent local dynamic power load configurations to corporate reporting platforms."}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="/contact?type=business" 
                  className="bg-neutral-950 text-white hover:bg-blue-600 font-bold text-xs uppercase px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Request Corporate layout</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-neutral-200 p-8 rounded-xl shadow-sm relative overflow-hidden space-y-6">
              <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
              <h3 className="font-display font-black text-lg text-neutral-950 uppercase">
                Enterprise Capabilities
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                {"We assist businesses throughout the design, compliance approvals with local utilities, hardware mounting, central cluster setup, and operational launch."}
              </p>
              
              <ul className="space-y-3 pt-4 border-t border-neutral-150">
                <li className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>OCPP 1.6/2.0 protocol integration to run with custom networks</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-neutral-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Configurable monetization rules based on daytime or user hierarchy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            {/* Multi-charger power sharing */}
            <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-all">
              <div className="space-y-4">
                <div className="bg-blue-50 text-[#357BCE] p-3 rounded-lg w-fit">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-neutral-950 uppercase">
                  Dynamic Load Balance
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed">
                  {"Avoid expensive primary transformer modifications. Our systems distribute current dynamically among in-use nodes, ensuring maximum vehicle speed while protecting the facility transformer safety ceilings."}
                </p>
              </div>
            </div>

            {/* Workplace management */}
            <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-all">
              <div className="space-y-4">
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-lg w-fit">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-neutral-950 uppercase">
                  Corporate Perks & Guest Access
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed">
                  {"Provide complimentary or cheap fast-charging variables for registered employees, and configure public monetization matrices for guests, visitors, and commercial vehicles seamlessly."}
                </p>
              </div>
            </div>

            {/* Revenue Optimization dashboard */}
            <div className="bg-white border border-neutral-200 p-8 rounded-xl shadow-sm flex flex-col justify-between hover:border-neutral-300 transition-all">
              <div className="space-y-4">
                <div className="bg-purple-50 text-purple-600 p-3 rounded-lg w-fit">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-neutral-950 uppercase">
                  Billing & Analytics Sync
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed">
                  {"Integrated gateway setup allows immediate automated payouts. View power consumption trends, carbon offset reports, dynamic tariff parameters, and individual cluster usage logs from a single central portal."}
                </p>
              </div>
            </div>

          </div>

          {/* Trust Statement */}
          <div className="bg-neutral-900 text-white rounded-xl p-8 md:p-12 relative overflow-hidden border border-neutral-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-xs text-[#357BCE] font-bold tracking-widest block uppercase">
                {"CEYLON'S LARGEST POWER GRID EXPERT"}
              </span>
              <h2 className="font-display font-black text-2xl md:text-3.5xl uppercase tracking-tight">
                Ready to deploy your enterprise grid?
              </h2>
              <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                {"Our engineering team performs direct physical layout examinations, grid assessments, and takes care of end-to-end commissioning. Tap into the clean energy transport shift."}
              </p>
            </div>
            
            <div className="shrink-0">
              <a 
                href="/contact"
                className="bg-white text-black hover:bg-[#357BCE] hover:text-white font-display text-xs font-black uppercase tracking-widest px-8 py-4.5 rounded-[2px] transition-all whitespace-nowrap block text-center"
              >
                Connect with Engineer
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

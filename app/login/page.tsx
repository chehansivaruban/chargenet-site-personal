'use client';

import * as React from 'react';
import CapsuleHeader from '../../components/CapsuleHeader';
import Footer from '../../components/Footer';
import { Eye, EyeOff, ShieldCheck, Mail, Lock, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoginPage() {
  const [userRole, setUserRole] = React.useState<'driver' | 'partner'>('driver');
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [loginSuccessful, setLoginSuccessful] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    setIsSubmitting(true);
    // Simulate highly encrypted authorization check
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setLoginSuccessful(true);
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden antialiased font-sans">
      <CapsuleHeader />

      <main className="relative pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center min-h-[85vh]">
        
        {/* Background micro grid dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,123,206,0.015)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="w-full max-w-md px-6 relative z-10">
          
          {/* Logo badge identifier */}
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-blue-600 font-bold tracking-widest uppercase block mb-3">
              CENTRAL AUTH PROTOCOL
            </span>
            <h1 className="font-display font-black text-3xl text-neutral-950 uppercase tracking-tight">
              Connect Portals
            </h1>
            <p className="text-neutral-500 text-xs mt-1 leading-relaxed font-light">
              Access your personalized chargeNET analytics, monetization dashboard, or individual station telemetry.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm space-y-6">
            
            {/* User Type Toggle buttons (Driver vs Partner) */}
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-neutral-100/80 border border-neutral-100 rounded-lg">
              <button
                type="button"
                onClick={() => {
                  setUserRole('driver');
                  setLoginSuccessful(false);
                }}
                className={`py-2 text-[11px] font-bold uppercase tracking-wider rounded transition-all focus:outline-none ${
                  userRole === 'driver'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                EV Driver Port
              </button>
              <button
                type="button"
                onClick={() => {
                  setUserRole('partner');
                  setLoginSuccessful(false);
                }}
                className={`py-2 text-[11px] font-bold uppercase tracking-wider rounded transition-all focus:outline-none ${
                  userRole === 'partner'
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Grid Partner
              </button>
            </div>

            <AnimatePresence mode="wait">
              {!loginSuccessful ? (
                <motion.form
                  key="login-form"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
                      Account Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                      <input
                        required
                        type="email"
                        placeholder={userRole === 'driver' ? 'driver@chargenet.lk' : 'partner@corporate.lk'}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-[5px] pl-10 pr-4 py-3.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
                        Secret Passphrase
                      </label>
                      <a href="#reset" className="text-[10px] hover:underline font-mono text-neutral-400 text-right">
                        Forgot Key?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
                      <input
                        required
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-[5px] pl-10 pr-10 py-3.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3.5 text-neutral-400 hover:text-neutral-700"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-blue-600 text-white font-display text-xs font-black uppercase tracking-wider py-4 rounded-[4px] shadow-sm select-none transition-all active:scale-[0.985] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Secure authorize session</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="login-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg text-center space-y-4"
                >
                  <div className="mx-auto w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-sm text-neutral-900 uppercase">
                      AUTHORIZATION GRANTED
                    </h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {"Session verified. Directing to your active chargeNET network overview dashboard..."}
                    </p>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 border bg-white border-neutral-100 p-2.5 rounded">
                    CREDENTIAL PROTOCOL: <span className="text-emerald-600 font-semibold uppercase">{userRole}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          <div className="mt-6 flex justify-center items-center gap-1 text-[10px] text-neutral-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-bit AES end-to-end telemetry encryption active</span>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

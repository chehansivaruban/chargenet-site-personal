'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, RefreshCw, ShieldAlert } from 'lucide-react';
import CapsuleHeader from '../components/CapsuleHeader';
import Footer from '../components/Footer';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Captured page prerender error:', error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden antialiased font-sans flex flex-col justify-between">
      <CapsuleHeader />

      <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="inline-flex p-4 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 animate-pulse">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-red-500 font-bold tracking-widest uppercase block">
              SYSTEM CONFLICT
            </span>
            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white uppercase">
              Prerender Disrupted
            </h1>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              An error occurred during components compilation or server layout streaming. This usually indicates a temporary network transition or server-side hydration delay.
            </p>
            {error?.message && (
              <pre className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-left text-[10px] font-mono text-red-400 overflow-x-auto max-h-32">
                <code>{error.message}</code>
              </pre>
            )}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button 
              onClick={() => reset()}
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase px-5 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry Load</span>
            </button>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 font-bold text-xs uppercase px-5 py-3.5 rounded-full shadow-md transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Central Grid</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

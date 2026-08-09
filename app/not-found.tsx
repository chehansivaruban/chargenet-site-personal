import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      {/* Top minimal header */}
      <header className="py-6 px-8 border-b border-neutral-900 flex justify-between items-center bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="inline-block py-1">
          <span className="font-sans font-black text-base md:text-lg tracking-widest text-white uppercase block">
            charge<span className="text-blue-500 font-extrabold">NET</span>
          </span>
        </Link>
        <span className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase">
          Ecosystem Grid Status: 404
        </span>
      </header>

      {/* Main minimal 404 block */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="inline-flex p-4 rounded-full bg-neutral-950 border border-neutral-900 text-blue-500 animate-pulse">
            <AlertCircle className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs text-blue-500 font-bold tracking-widest uppercase block">
              DIAGNOSTIC STATUS: 404
            </span>
            <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white uppercase">
              NODE NOT FOUND
            </h1>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              The charging station route or digital page you are trying to reach is currently offline, undergoing maintenance, or does not exist in our grid directory.
            </p>
          </div>

          <div className="pt-4">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-blue-600 hover:text-white font-bold text-xs uppercase px-6 py-3.5 rounded-full shadow-md transition-colors duration-250 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Central Network</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="py-6 px-8 border-t border-neutral-900 text-center text-neutral-600 text-[9px] font-mono tracking-widest uppercase bg-black">
        <span>© {new Date().getFullYear()} chargeNET group. global smart corridors.</span>
      </footer>
    </div>
  );
}

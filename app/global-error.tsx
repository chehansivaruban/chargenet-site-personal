'use client';

import * as React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Captured root global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-black text-white font-sans antialiased flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full text-center p-6 space-y-6">
          <div className="inline-flex p-4 rounded-full bg-neutral-900 border border-neutral-800 text-red-500">
            <span className="font-mono text-xl font-black">X</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-red-500 font-bold tracking-widest uppercase block">
              FATAL ERROR
            </span>
            <h2 className="font-display font-black text-2xl text-white uppercase tracking-tight">
              Grid Prerender Halted
            </h2>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">
              A critical exception occurred while assembling the global page layouts and script loaders.
            </p>
            {error?.message && (
              <pre className="p-3 bg-neutral-900/80 border border-neutral-800 rounded-lg text-left text-[10px] font-mono text-red-400 overflow-x-auto max-h-32">
                <code>{error.message}</code>
              </pre>
            )}
          </div>

          <div>
            <button
              onClick={() => reset()}
              className="bg-white text-black hover:bg-neutral-200 font-bold text-xs uppercase px-6 py-3 rounded-full transition-transform hover:scale-105 cursor-pointer"
            >
              Re-initialize Core
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

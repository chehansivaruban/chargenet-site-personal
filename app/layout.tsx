import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChargeNET | Sri Lanka’s First & Largest EV Charging Network',
  description: 'Sri Lanka’s premier EV fast-charging network empowering sustainable electric mobility.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth snap-y snap-mandatory`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof window !== 'undefined' && window.fetch) {
                    var _fetch = window.fetch;
                    var desc = Object.getOwnPropertyDescriptor(window, 'fetch') || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
                    if (!desc || !desc.set) {
                      try {
                        Object.defineProperty(window, 'fetch', {
                          get: function() { return _fetch; },
                          set: function(val) { _fetch = val; },
                          configurable: true,
                          enumerable: true
                        });
                      } catch (e1) {
                        try {
                          var proto = Object.getPrototypeOf(window);
                          if (proto) {
                            Object.defineProperty(proto, 'fetch', {
                              get: function() { return _fetch; },
                              set: function(val) { _fetch = val; },
                              configurable: true,
                              enumerable: true
                            });
                          }
                        } catch (e2) {}
                      }
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#000000] text-white font-sans antialiased selection:bg-[#357BCE] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

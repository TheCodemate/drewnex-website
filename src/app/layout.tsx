import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';
import { MobileHeader } from '@/components/MobileHeader';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Drewnex - tartak z wieloletnią tradycją',
  description:
    'Jesteśmy tartakiem który od ponad 30 lat zajmuje się obróbką wysokiej jakości drewna i wytwarzaniu produktów pochodnych takich jak więźby, tarcica, drewno opałowe i wiele innych.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        {/* Skrypt do obsługi ostrzeżeń React o niezgodności hydratacji */}
        <Script id="handle-hydration-warning" strategy="beforeInteractive">
          {`
            (function() {
              // Funkcja do obsługi ostrzeżeń React o niezgodności hydratacji
              window.__NEXT_HYDRATION_MARK_ATTRIBUTES__ = true;
              
              // Usuwamy atrybuty dodawane przez rozszerzenia przeglądarki
              const removeExtensionAttributes = () => {
                const bodyEl = document.body;
                if (bodyEl) {
                  bodyEl.removeAttribute('data-new-gr-c-s-check-loaded');
                  bodyEl.removeAttribute('data-gr-ext-installed');
                  bodyEl.removeAttribute('cz-shortcut-listen');
                }
              };
              
              // Wykonujemy funkcję po załadowaniu DOM
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', removeExtensionAttributes);
              } else {
                removeExtensionAttributes();
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${poppins.className} min-w-[360px]`}>
        <Header />
        <MobileHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Edish Connect | Where Engineering Meets Inspiration • Tier-2 GCCs & Dedicated ODCs',
  description: 'Edish Connect builds high-performance dedicated ODCs and sovereign Global Capability Centers (GCCs) in Tier-2 Jaipur, synthesizing client cultural ethos with mathematical precision and 98% retention.',
  openGraph: {
    title: 'Edish Connect | Where Engineering Meets Inspiration',
    description: 'Build your India capability with cultural fit in Tier-2 Jaipur.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600..900;1,9..144,600..900&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#081426] text-white min-h-screen selection:bg-navy-800 selection:text-gold-300 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

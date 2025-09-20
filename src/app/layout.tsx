import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Professional Physiotherapy at Home | Expert Care in Your Comfort Zone',
  description: 'Get expert physiotherapy treatment in the comfort of your home. Licensed professionals, personalized care, and comprehensive treatment plans. Book your free consultation today!',
  keywords: 'physiotherapy, home visit, physiotherapist, rehabilitation, pain relief, exercise therapy, Bangalore, Haldwani, Ramnagar',
  authors: [{ name: 'Physio Home Visit' }],
  creator: 'Physio Home Visit',
  publisher: 'Physio Home Visit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://physio-home-visit.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Physiotherapy at Home | Expert Care in Your Comfort Zone',
    description: 'Get expert physiotherapy treatment in the comfort of your home. Licensed professionals, personalized care, and comprehensive treatment plans.',
    url: 'https://physio-home-visit.vercel.app',
    siteName: 'Physio Home Visit',
    images: [
      {
        url: '/images/Physiotherapy (1).webp',
        width: 1200,
        height: 630,
        alt: 'Professional Physiotherapy at Home',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Physiotherapy at Home | Expert Care in Your Comfort Zone',
    description: 'Get expert physiotherapy treatment in the comfort of your home. Licensed professionals, personalized care, and comprehensive treatment plans.',
    images: ['/images/Physiotherapy (1).webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//docs.google.com" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
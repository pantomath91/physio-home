import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Physio Home Visit | Professional Physiotherapy Services at Your Doorstep",
  description: "Expert physiotherapy services delivered to your home. Professional, convenient, and personalized care for your recovery and wellness needs.",
  keywords: "physiotherapy, home physiotherapy, mobile physiotherapy, physiotherapist, home visit physio, rehabilitation, physical therapy",
  authors: [{ name: "Physio Home Visit" }],
  openGraph: {
    title: "Physio Home Visit | Professional Physiotherapy Services at Your Doorstep",
    description: "Expert physiotherapy services delivered to your home. Professional, convenient, and personalized care for your recovery and wellness needs.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "your-google-site-verification", // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XVQNLGWLTW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XVQNLGWLTW');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen`} suppressHydrationWarning>
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 transform translate-x-1/2 translate-y-1/2 rotate-12">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-slate-100 to-blue-100 opacity-40 blur-3xl" />
            </div>
            <div className="absolute -bottom-40 -left-40 transform -translate-x-1/2 -translate-y-1/2 -rotate-12">
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-100 to-slate-100 opacity-40 blur-3xl" />
            </div>
          </div>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

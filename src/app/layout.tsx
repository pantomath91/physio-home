import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Physio Home Visit",
  description: "Professional physiotherapy services at your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
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
        </div>
      </body>
    </html>
  );
}

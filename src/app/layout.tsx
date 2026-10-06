import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CursorSparkle } from "@/components/CursorSparkle";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MagicScene from "@/components/MagicScene";
import { AiWidget } from "@/components/AiWidget";
import { VisibilityWrapper } from "@/components/VisibilityWrapper";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MagicBuilds | AI SaaS, Web & Custom Software",
  description: "We weave code and strategy to build magical digital experiences, AI SaaS products, and custom software that accelerates business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-[#050505] text-[#F8FAFC]`}>
        <MagicScene />
        <CursorSparkle />
        
        {/* Keep AI widget global for magical feeling everywhere */}
        <AiWidget />
        
        <VisibilityWrapper>
          <Navbar />
        </VisibilityWrapper>
        
        <main className="flex-1 flex flex-col relative z-10">
          {children}
        </main>
        
        <VisibilityWrapper>
          <Footer />
        </VisibilityWrapper>
      </body>
    </html>
  );
}

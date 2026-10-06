import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorSparkle } from "@/components/CursorSparkle";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MagicScene from "@/components/MagicScene";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magicbuilds | AI SaaS, Web & Custom Software",
  description: "We weave code and strategy to build magical digital experiences, AI SaaS products, and custom software that accelerates business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-[#050505] text-[#F8FAFC]`}>
        <MagicScene />
        <CursorSparkle />
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

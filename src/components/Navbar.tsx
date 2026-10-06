"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/20 backdrop-blur-3xl border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group hover:opacity-80 active:scale-95 transition-all">
            <Sparkles className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-glow transition-all">
              Magicbuilds
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all active:scale-95 hover:text-gold-400",
                  pathname === link.href ? "text-gold-500 text-glow" : "text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-all active:scale-95"
            >
              Client Login
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-gold-500/10 border border-white/10 hover:border-gold-500/50 text-white transition-all active:scale-95 magic-glow font-medium text-sm"
            >
              Start Project
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 text-gray-300 hover:text-white active:scale-95 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/40 backdrop-blur-3xl border-b border-white/10 overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="flex flex-col px-4 pt-2 pb-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all active:scale-95",
                    pathname === link.href
                      ? "bg-gold-500/10 text-gold-500"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-all active:scale-95",
                  pathname === "/login"
                    ? "bg-gold-500/10 text-gold-500"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                Client Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg bg-gold-500 text-black font-semibold text-center text-sm active:scale-95 transition-all"
              >
                Start Project
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

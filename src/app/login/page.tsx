"use client";

import { Sparkles, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock authentication delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-md mx-4 p-6 sm:p-8 rounded-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <Sparkles className="w-6 h-6 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <span className="font-bold text-xl text-white">Magicbuilds</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Client Portal</h1>
          <p className="text-gray-400 text-sm">Enter your credentials to access your dashboard.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input 
              type="email" 
              defaultValue="demo@client.com"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <a href="#" className="text-xs text-gold-500 hover:text-gold-400">Forgot?</a>
            </div>
            <input 
              type="password" 
              defaultValue="password123"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl bg-gold-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-gold-400 transition-all disabled:opacity-70 magic-glow mt-4"
          >
            {isLoading ? (
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Sign In
              </>
            )}
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-2 transition-colors">
            Return to main site <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

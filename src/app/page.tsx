import Link from "next/link";
import { ArrowRight, Sparkles, Code, Search, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Magic Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm magic-glow">
          <Sparkles className="w-4 h-4 text-gold-500" />
          <span className="text-sm font-medium text-gray-200">Transforming ideas into digital magic</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 sm:mb-8 max-w-4xl leading-tight break-words">
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 text-glow italic">extraordinary</span> digital experiences
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          From AI-powered SaaS platforms to high-converting websites and custom software solutions. 
          We bring the magic that makes your business grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all active:scale-95 magic-glow flex items-center justify-center gap-2 group text-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all active:scale-95 text-center"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24 sm:py-32 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">[ Our Expertise ]</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter">Capabilities</h2>
          </div>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed font-light">
            Everything you need to dominate the digital landscape, engineered with precision and magic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 auto-rows-[minmax(250px,auto)]">
          {/* Bento Item 1: Large Feature */}
          <div className="lg:col-span-8 lg:row-span-2 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-3xl border border-white/10 hover:border-gold-500/30 transition-all group relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[100px] rounded-full group-hover:bg-gold-500/20 transition-colors pointer-events-none" />
            <Cpu className="w-12 h-12 text-gold-500 mb-12" />
            <div className="relative z-10">
              <span className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4 block">01</span>
              <h3 className="text-3xl sm:text-5xl font-heading font-bold mb-6 group-hover:text-gold-400 transition-colors">AI SaaS Platforms</h3>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg font-light">
                Intelligent, scalable applications powered by the latest language models. We turn complex AI into intuitive, highly-profitable tools.
              </p>
            </div>
          </div>

          {/* Bento Item 2 */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-gold-500/30 transition-all group flex flex-col justify-between">
            <Code className="w-10 h-10 text-gold-500 mb-8" />
            <div>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-3 block">02</span>
              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-gold-400 transition-colors">Web Dev</h3>
              <p className="text-gray-400 leading-relaxed font-light">High-performance, beautiful websites that convert.</p>
            </div>
          </div>

          {/* Bento Item 3 */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-gold-500/30 transition-all group flex flex-col justify-between">
            <Search className="w-10 h-10 text-gold-500 mb-8" />
            <div>
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-3 block">03</span>
              <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-gold-400 transition-colors">SEO Growth</h3>
              <p className="text-gray-400 leading-relaxed font-light">Data-driven strategies to dominate search rankings.</p>
            </div>
          </div>

          {/* Bento Item 4: Wide Feature */}
          <div className="lg:col-span-12 p-8 sm:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-gold-500/30 transition-all group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <Sparkles className="w-10 h-10 text-gold-500 mb-6" />
              <span className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-3 block">04</span>
              <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-gold-400 transition-colors">Custom Software Integration</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
                Tailored architectural solutions, secure APIs, and middleware that perfectly align with your enterprise needs.
              </p>
            </div>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 hover:border-gold-500/50 transition-all active:scale-95 shrink-0"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

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

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
          We build <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 text-glow">extraordinary</span> digital experiences
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          From AI-powered SaaS platforms to high-converting websites and custom software solutions. 
          We bring the magic that makes your business grow.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all magic-glow flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="w-full max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to dominate the digital landscape, crafted with precision and magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "AI SaaS", desc: "Intelligent platforms that automate and scale.", icon: <Cpu className="w-8 h-8 text-gold-500 mb-6" /> },
            { title: "Web Dev", desc: "High-performance, beautiful websites.", icon: <Code className="w-8 h-8 text-gold-500 mb-6" /> },
            { title: "SEO", desc: "Data-driven strategies to rank higher.", icon: <Search className="w-8 h-8 text-gold-500 mb-6" /> },
            { title: "Custom Software", desc: "Tailored solutions for complex problems.", icon: <Sparkles className="w-8 h-8 text-gold-500 mb-6" /> },
          ].map((service, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-500/30 transition-all hover:-translate-y-2 group">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

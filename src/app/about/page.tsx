import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MessageSquare, Sparkles, Award } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 overflow-hidden">
      {/* Editorial Header */}
      <div className="mb-24 sm:mb-32">
        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6 block">[ The Agency ]</span>
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-bold tracking-tighter mb-8 leading-[0.9]">
          Engineering <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow italic pr-4">
            meets Art.
          </span>
        </h1>
      </div>

      {/* Manifesto & Core Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
        {/* Left Column: Mission Manifesto */}
        <div className="lg:col-span-7">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl sm:text-3xl font-heading text-white leading-snug mb-8">
              We started MagicBuilds with a simple premise: enterprise-grade software doesn't have to be boring, and highly creative websites don't have to be slow.
            </p>
            <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
              By combining strict engineering practices with cutting-edge design and animation, we build digital products that leave a lasting impression. From the initial architecture to the final polish of a micro-interaction, our attention to detail remains absolute.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Whether we are architecting a complex AI SaaS backend or fine-tuning cursor sparks on a landing page, we treat every line of code as an opportunity to craft something extraordinary.
            </p>
          </div>
        </div>

        {/* Right Column: Values */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">
              Engineering First
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Beautiful animations mean nothing if the site takes 10 seconds to load. We prioritize performance, accessibility, and unshakeable architecture above all else.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all">
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gold-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">
              Design Magic
            </h3>
            <p className="text-gray-400 leading-relaxed font-light">
              We sweat the small stuff. Micro-interactions, perfect easing curves, and carefully crafted layouts that guide the user's eye naturally.
            </p>
          </div>
        </div>
      </div>

      {/* Creators / Leadership Section */}
      <div className="mb-32">
        <div className="mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">
            [ The Creators ]
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-white">
            Visionaries Behind the Magic
          </h2>
          <p className="text-xl text-gray-400 font-light mt-4 max-w-2xl">
            Uniting professional financial discipline, strategic product architecture, and cutting-edge engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Creator 1: CMA Shashikanth */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <div>
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-gold-500/30 transition-colors">
                <Image
                  src="/images/shashikanth.jpg"
                  alt="CMA Shashikanth - Creator of MagicBuilds"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500 text-black shadow-lg">
                    Creator
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                    CMA
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-gold-400 transition-colors">
                  CMA Shashikanth
                </h3>
              </div>
              <p className="text-gold-500/90 text-sm font-medium tracking-wide uppercase mb-4">
                Co-Creator
              </p>
              <p className="text-gray-400 leading-relaxed font-light mb-8">
                Blends financial acumen with deep tech architecture to create scalable, high-conversion software and AI SaaS solutions that deliver true business returns.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="mailto:shashikanthudugula@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group/link break-all"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-gold-500/10 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-gold-500" />
                </div>
                <span>shashikanthudugula@gmail.com</span>
              </a>
              <a
                href="tel:7036948050"
                className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group/link"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-gold-500/10 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-gold-500" />
                </div>
                <span>+91 7036948050</span>
              </a>
            </div>
          </div>

          {/* Creator 2: CA Jeevan Reddy */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <div>
              <div className="relative w-full h-[360px] sm:h-[400px] rounded-2xl overflow-hidden mb-8 border border-white/10 group-hover:border-gold-500/30 transition-colors bg-gradient-to-br from-white/[0.04] via-gold-500/5 to-transparent flex flex-col items-center justify-center p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-heading font-extrabold text-3xl shadow-[0_0_40px_rgba(217,119,6,0.35)]">
                    JR
                  </div>
                  <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-black/80 border border-gold-500/40 text-gold-400">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-xl font-heading font-bold text-white mb-1">
                  Chartered Accountant
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  Executive Leadership
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500 text-black shadow-lg">
                    Creator
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                    CA
                  </span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-3xl font-heading font-bold text-white group-hover:text-gold-400 transition-colors">
                  CA Jeevan Reddy
                </h3>
              </div>
              <p className="text-gold-500/90 text-sm font-medium tracking-wide uppercase mb-4">
                Co-Creator
              </p>
              <p className="text-gray-400 leading-relaxed font-light mb-8">
                Directs executive leadership, corporate strategy, and sustainable tech ventures, ensuring every digital product is built with enterprise excellence, high scalability, and measurable impact.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="mailto:jeevandepa@gmail.com"
                className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group/link break-all"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-gold-500/10 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-gold-500" />
                </div>
                <span>jeevandepa@gmail.com</span>
              </a>
              <a
                href="tel:7671950268"
                className="inline-flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors group/link"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-gold-500/10 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-gold-500" />
                </div>
                <span>+91 7671950268</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Contact Banner */}
      <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-3xl border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 bg-gold-500/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-3 block">
            [ Direct Contact ]
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-3 tracking-tight text-white">
            Connect Directly with the Creators
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg">
            Have a project or strategic venture in mind? Reach out directly to the founders.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <a
            href="mailto:jeevandepa@gmail.com"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-gold-500 text-black font-bold text-sm hover:bg-gold-400 transition-all active:scale-95 magic-glow text-center inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Email CA Jeevan Reddy
          </a>
          <a
            href="mailto:shashikanthudugula@gmail.com"
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all active:scale-95 text-center inline-flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-gold-500" />
            Email CMA Shashikanth
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 overflow-hidden">
      {/* Editorial Header */}
      <div className="mb-24 sm:mb-32">
        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6 block">[ The Agency ]</span>
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-bold tracking-tighter mb-8 leading-[0.9]">
          Engineering <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow italic pr-4">meets Art.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
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
              Whether we are architecting a complex AI SaaS backend or fine-tuning the cursor sparks on a landing page, we treat every line of code as an opportunity to craft something extraordinary.
            </p>
          </div>
        </div>

        {/* Right Column: Values */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">Engineering First</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Beautiful animations mean nothing if the site takes 10 seconds to load. We prioritize performance, accessibility, and unshakeable architecture above all else.
            </p>
          </div>
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all">
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gold-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">Design Magic</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              We sweat the small stuff. Micro-interactions, perfect easing curves, and carefully crafted layouts that guide the user's eye naturally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

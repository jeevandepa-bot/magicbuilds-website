export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow">Magicbuilds</span>
        </h1>
        <p className="text-xl text-gray-400">
          Where engineering meets art.
        </p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We started Magicbuilds with a simple premise: enterprise-grade software doesn't have to be boring, and highly creative websites don't have to be slow. By combining strict engineering practices with cutting-edge design and animation, we build digital products that leave a lasting impression.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Whether we are architecting a complex AI SaaS backend or fine-tuning the cursor sparks on a landing page, our attention to detail remains absolute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-gold-400">Engineering First</h3>
            <p className="text-gray-400 leading-relaxed">
              Beautiful animations mean nothing if the site takes 10 seconds to load. We prioritize performance, accessibility, and clean code above all else.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-gold-400">Design Magic</h3>
            <p className="text-gray-400 leading-relaxed">
              We sweat the small stuff. Micro-interactions, perfect easing curves, and carefully crafted layouts that guide the user's eye naturally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

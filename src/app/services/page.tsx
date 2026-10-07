import { Cpu, Code, Search, Blocks, Terminal, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "AI SaaS Platforms",
      description: "We build scalable, intelligent software-as-a-service applications powered by the latest AI models. From generative tools to predictive analytics, we turn complex AI into intuitive user experiences.",
      icon: <Cpu className="w-10 h-10 text-gold-500" />
    },
    {
      title: "Web Development",
      description: "Lightning-fast, highly animated, and responsive websites that convert visitors into customers. We specialize in modern frameworks like React and Next.js.",
      icon: <Code className="w-10 h-10 text-gold-500" />
    },
    {
      title: "SEO & Digital Growth",
      description: "Technical and content-driven SEO strategies that guarantee higher rankings. We optimize every line of code so search engines love your site as much as users do.",
      icon: <Search className="w-10 h-10 text-gold-500" />
    },
    {
      title: "Custom Software Integration",
      description: "Connecting disconnected systems. We build secure APIs, custom dashboards, and middleware that streamlines your internal operations.",
      icon: <Blocks className="w-10 h-10 text-gold-500" />
    },
    {
      title: "Backend Architecture",
      description: "Robust, secure, and scalable backend systems using Node.js, Python, and serverless architectures designed for high traffic loads.",
      icon: <Terminal className="w-10 h-10 text-gold-500" />
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that bring your web experience to iOS and Android seamlessly without sacrificing performance.",
      icon: <Smartphone className="w-10 h-10 text-gold-500" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 overflow-hidden">
      {/* Editorial Header */}
      <div className="mb-24 sm:mb-32 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
        <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6 block">[ What We Do ]</span>
        <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-heading font-bold tracking-tighter mb-8 leading-[0.9]">
          Digital <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow italic pr-4">Craftsmanship.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
          We don't just write code. We architect scalable platforms, engineer high-performance systems, and weave magic into every pixel.
        </p>
      </div>

      {/* Editorial List Layout instead of generic grid */}
      <div className="space-y-0">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative border-t border-white/10 py-12 md:py-16 hover:bg-white/[0.01] transition-colors"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Massive Number */}
              <div className="md:col-span-2 hidden md:block">
                <span className="text-5xl lg:text-7xl font-heading font-bold text-white/5 group-hover:text-gold-500/20 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              
              {/* Title & Icon */}
              <div className="md:col-span-5 flex flex-col items-start">
                <div className="mb-6 p-4 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl shadow-inner group-hover:border-gold-500/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 group-hover:text-gold-400 transition-colors tracking-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:pt-4">
                <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-4 block md:hidden">0{idx + 1}</span>
                <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Closing Border */}
        <div className="border-t border-white/10" />
      </div>

      {/* CTA Section */}
      <div className="mt-32 text-center p-8 sm:p-16 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-3xl border border-white/10 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-gold-500/5 blur-[100px] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tighter relative z-10">Beyond the scope?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light relative z-10">
          We thrive on the cutting edge. If you have a highly custom architectural challenge, let's architect the perfect path forward.
        </p>
        <Link
          href="/contact"
          className="relative z-10 inline-flex px-10 py-5 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all active:scale-95 magic-glow"
        >
          Discuss Your Vision
        </Link>
      </div>
    </div>
  );
}

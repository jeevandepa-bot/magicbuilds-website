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
    <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-center mb-16 sm:mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow">Services</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          Comprehensive digital solutions crafted with modern technology and magical design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold-500/30 hover:bg-white/[0.04] transition-all duration-300">
            <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white/5 rounded-2xl inline-block">
              {service.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-24 text-center p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-6">Need something highly custom?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          We love tackling unique challenges. If you have a specific vision in mind, let's talk and figure out the best technological path forward.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-8 py-4 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all magic-glow"
        >
          Discuss Your Vision
        </Link>
      </div>
    </div>
  );
}

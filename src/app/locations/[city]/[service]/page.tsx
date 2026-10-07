import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

// The matrix of data we want to generate pages for.
// In a real app, this might come from a CMS or Database.
const CITIES = ["new-york", "london", "austin", "singapore"];
const SERVICES = ["ai-saas", "web-development", "seo", "custom-software"];

// Helper to format slugs into readable text
function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateStaticParams() {
  const params = [];
  for (const city of CITIES) {
    for (const service of SERVICES) {
      params.push({ city, service });
    }
  }
  return params;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ city: string; service: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const cityName = formatSlug(resolvedParams.city);
  const serviceName = formatSlug(resolvedParams.service);
  
  // Dynamic SEO Metadata
  return {
    title: `Top ${serviceName} Company in ${cityName} | MagicBuilds`,
    description: `Looking for the best ${serviceName} experts in ${cityName}? MagicBuilds delivers high-performance digital solutions tailored for your business.`,
  };
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const resolvedParams = await params;
  const cityName = formatSlug(resolvedParams.city);
  const serviceName = formatSlug(resolvedParams.service);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 mb-10 backdrop-blur-md magic-glow">
          <MapPin className="w-4 h-4 text-gold-500" />
          <span className="text-xs font-semibold tracking-widest uppercase text-gray-300">Serving {cityName} & Worldwide</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-heading font-semibold tracking-tighter mb-8 max-w-5xl leading-[0.9] break-words">
          Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 text-glow italic">{serviceName}</span> <br className="hidden md:block" />
          in {cityName}.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl leading-relaxed font-light">
          Dominate your market in {cityName} with our world-class {serviceName.toLowerCase()} solutions. We blend engineering excellence with magical design.
        </p>

        <Link
          href="/contact"
          className="w-full sm:w-auto px-10 py-5 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all active:scale-95 magic-glow flex items-center justify-center gap-3 group text-center"
        >
          <span className="sm:hidden">Book Consultation</span>
          <span className="hidden sm:inline">Book a Consultation in {cityName}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center border-t border-white/10 pt-32">
          <div className="lg:col-span-7">
            <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6 block">[ The Advantage ]</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-tighter">Why choose MagicBuilds for {serviceName}?</h2>
            <p className="text-gray-400 text-lg sm:text-xl mb-12 leading-relaxed font-light max-w-2xl">
              The digital landscape in {cityName} is highly competitive. Our {serviceName.toLowerCase()} strategies are designed not just to compete, but to completely outperform your industry rivals at every level of the stack.
            </p>
            <ul className="space-y-6">
              {["Unmatched performance & speed", "Custom-tailored to your business model", "Scalable infrastructure", "Ongoing technical support & optimization"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                  </div>
                  <span className="text-gray-300 text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="p-10 sm:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-3xl border border-white/10 relative overflow-hidden group hover:border-gold-500/30 transition-all">
               <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold-500/20 transition-colors" />
               <Sparkles className="w-12 h-12 text-gold-500 mb-8" />
               <h3 className="text-3xl font-heading font-bold text-white mb-4">Ready to start?</h3>
               <p className="text-gray-400 font-light mb-10 text-lg leading-relaxed">Join dozens of successful companies in {cityName} who trust MagicBuilds with their most critical infrastructure.</p>
               <Link href="/contact" className="block w-full text-center py-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all active:scale-95">
                 Contact Our Team
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

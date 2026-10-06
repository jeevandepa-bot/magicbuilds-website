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
    title: `Top ${serviceName} Company in ${cityName} | Magicbuilds`,
    description: `Looking for the best ${serviceName} experts in ${cityName}? Magicbuilds delivers high-performance digital solutions tailored for your business.`,
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

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm magic-glow">
          <MapPin className="w-4 h-4 text-gold-500" />
          <span className="text-sm font-medium text-gray-200">Serving {cityName} & Worldwide</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight">
          Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 text-glow">{serviceName}</span> in {cityName}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
          Dominate your market in {cityName} with our world-class {serviceName.toLowerCase()} solutions. We blend engineering excellence with magical design to accelerate your growth.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all magic-glow flex items-center gap-2 group"
        >
          Book a Consultation in {cityName}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 py-24 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why choose Magicbuilds for {serviceName} in {cityName}?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The digital landscape in {cityName} is highly competitive. Our {serviceName.toLowerCase()} strategies are designed not just to compete, but to completely outperform your industry rivals.
            </p>
            <ul className="space-y-4">
              {["Unmatched performance & speed", "Custom-tailored to your business model", "Scalable infrastructure", "Ongoing technical support & optimization"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 blur-[60px] rounded-full pointer-events-none" />
             <Sparkles className="w-12 h-12 text-gold-500 mb-6" />
             <h3 className="text-2xl font-bold text-white mb-4">Ready to start?</h3>
             <p className="text-gray-400 mb-6">Join dozens of successful companies in {cityName} who trust Magicbuilds.</p>
             <Link href="/contact" className="block w-full text-center py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all">
               Contact Our Team
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

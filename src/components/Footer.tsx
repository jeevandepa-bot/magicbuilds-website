import Link from "next/link";
import { Sparkles, MessageCircle, Globe, AtSign } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent pt-16 pb-8 mt-auto relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="font-bold text-lg text-white">MagicBuilds</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              We weave code and strategy to build magical digital experiences,
              AI SaaS products, and custom software that accelerates business growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-gold-400 hover:bg-white/10 transition-colors">
                <AtSign className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">AI SaaS Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">SEO & Marketing</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Locations</h3>
            <ul className="space-y-3">
              <li><Link href="/locations/new-york/ai-saas" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">New York AI SaaS</Link></li>
              <li><Link href="/locations/london/web-development" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">London Web Dev</Link></li>
              <li><Link href="/locations/austin/seo" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Austin SEO</Link></li>
              <li><Link href="/locations/singapore/custom-software" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Singapore Software</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
            <Link href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MagicBuilds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Let's create <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 text-glow">Magic</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to start your next project? Reach out to us and let's discuss how we can help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <form className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Required</label>
              <select 
                id="service" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-colors appearance-none"
              >
                <option value="">Select a service...</option>
                <option value="ai">AI SaaS Development</option>
                <option value="web">Web Development</option>
                <option value="seo">SEO & Digital Marketing</option>
                <option value="custom">Custom Software</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full py-4 rounded-xl bg-gold-500 text-black font-bold text-lg hover:bg-gold-400 transition-all magic-glow mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="flex items-start gap-6 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-gold-500/10 transition-colors">
              <Mail className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-1">For general inquiries & projects:</p>
              <a href="mailto:hello@magicbuilds.com" className="text-lg text-white hover:text-gold-400 transition-colors">
                hello@magicbuilds.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-gold-500/10 transition-colors">
              <Phone className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-1">Mon-Fri from 9am to 6pm:</p>
              <a href="tel:+15551234567" className="text-lg text-white hover:text-gold-400 transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-gold-500/10 transition-colors">
              <MapPin className="w-8 h-8 text-gold-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-1">Our headquarters:</p>
              <p className="text-lg text-white">
                123 Innovation Drive<br />
                Tech District, SF 94103
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

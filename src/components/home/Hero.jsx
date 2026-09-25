import React from 'react';
import { FileText, PhoneCall, Star, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-stone-950">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=2000"
          alt="Kammili's Kitchen Local Biryani"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80"></div>
      </div>

      {/* Decorative Floating Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Your Favorite Local Eatery</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-none">
            {restaurantInfo.tagline}
          </h1>
          <p className="max-w-2xl mx-auto text-stone-300 text-base sm:text-lg md:text-xl font-light leading-relaxed">
            {restaurantInfo.subTagline}
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* View Menu Document Button */}
          <a
            href="/menu-doc.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 text-sm font-extrabold tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2.5"
          >
            <FileText className="w-4 h-4" />
            <span>View Menu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Call Us Button */}
          <a
            href={`tel:${restaurantInfo.contact.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900/90 border border-amber-500/40 text-stone-100 hover:text-white hover:bg-stone-800 text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Call Us: {restaurantInfo.contact.phoneDisplay}</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-stone-400 text-xs font-medium border-t border-stone-800/80 max-w-xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-stone-300 font-bold">4.9/5 Rating by Local Diners</span>
          </div>

          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Dine-In & Takeaway Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}

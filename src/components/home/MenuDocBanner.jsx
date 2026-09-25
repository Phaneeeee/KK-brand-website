import React from 'react';
import { FileText, ExternalLink, Download, PhoneCall } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function MenuDocBanner() {
  return (
    <section id="menu-doc" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle Accent Light */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Menu</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              View Our Full Menu Card
            </h3>
            
            <p className="text-stone-400 text-sm max-w-lg leading-relaxed">
              Explore our complete range of Biryani's, Non-Veg & Veg Starters, Fried Rice & Noodles in an external, printable document.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full md:w-auto">
            <a
              href="/menu-doc.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Open Menu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`tel:${restaurantInfo.contact.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-950 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Us</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

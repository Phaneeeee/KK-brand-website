import React from 'react';
import { CheckCircle2, Heart, ShieldCheck } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function About() {
  const { about } = restaurantInfo;

  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          {/* Section Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>About Kammili's Kitchen</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {about.title}
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
              {about.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {about.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-3 bg-stone-800/60 p-4 rounded-2xl border border-stone-800">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm font-medium text-stone-200">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Bar & Clean Hygiene Badge */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto text-center sm:text-left">
              {about.stats.map((stat, i) => (
                <div key={i}>
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-400 block">
                    {stat.number}
                  </span>
                  <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-stone-950 px-6 py-4 rounded-2xl border border-amber-500/30 flex items-center space-x-4 shrink-0 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white font-serif">Clean & Hygienic</span>
                <span className="text-xs text-stone-400">Fresh Ingredients Daily</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

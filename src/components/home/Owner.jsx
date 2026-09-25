import React from 'react';
import { Quote, Sparkles, UserCheck } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function Owner() {
  const { owner } = restaurantInfo;

  return (
    <section className="py-20 bg-stone-950 text-stone-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950 rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl relative space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Meet the Owner</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {owner.name}
              </h2>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0">
              <UserCheck className="w-4 h-4" />
              <span>{owner.role}</span>
            </div>
          </div>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            {owner.story}
          </p>

          {/* Quote Card */}
          <div className="bg-stone-950/80 p-6 sm:p-8 rounded-2xl border border-amber-900/30 relative">
            <Quote className="w-10 h-10 text-amber-500/20 absolute top-4 right-4 pointer-events-none" />
            <p className="font-serif italic text-amber-200 text-base sm:text-xl relative z-10 leading-relaxed">
              "{owner.quote}"
            </p>
            <span className="block text-xs uppercase tracking-widest text-stone-400 font-bold mt-4">
              — Pavan Kalyan Kammili, Founder
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

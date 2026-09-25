import React from 'react';
import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Loved by Local Diners
          </h2>
          <p className="text-stone-400 text-base">
            Read authentic reviews from guests who love dining at Kammili's Kitchen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-stone-950 p-8 rounded-3xl border border-stone-800 hover:border-amber-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-500 font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Highlight Badge */}
                <span className="inline-block text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  "{item.highlight}"
                </span>

                {/* Comment */}
                <p className="text-stone-300 text-base leading-relaxed font-light italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center space-x-4 pt-4 border-t border-stone-900">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h4 className="font-serif text-base font-bold text-white">
                      {item.name}
                    </h4>
                    <CheckCircle className="w-4 h-4 text-emerald-400" title="Verified Diner" />
                  </div>
                  <p className="text-stone-500 text-xs font-medium">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

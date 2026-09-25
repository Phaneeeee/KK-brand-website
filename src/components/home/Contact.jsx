import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ExternalLink, Navigation, Star, AlertCircle, Loader2 } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function Contact() {
  const { contact } = restaurantInfo;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingError, setRatingError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setRatingError(true);
      return;
    }
    setRatingError(false);
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append('Rating', `${rating} / 5 Stars`);

    try {
      const response = await fetch('https://formspree.io/f/mrpbaywk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setRating(0);
        }, 6000);
      } else {
        alert('There was an issue submitting your review. Please try again.');
      }
    } catch (error) {
      alert('Network connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <MapPin className="w-4 h-4" />
            <span>Visit Us & Share Your Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-stone-400 text-base">
            Located on Main Road, Gudlavalleru. Visit us for dine-in or call ahead for takeaway orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900/90 p-8 rounded-3xl border border-stone-800 space-y-6 shadow-xl">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-stone-800">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                  Open Today for Dine-In & Takeaway
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-white text-base">Location Address</h4>
                  <p className="text-stone-300 font-semibold text-sm">{contact.address}</p>
                  <p className="text-stone-400 text-xs">{contact.city}</p>
                  <a
                    href={contact.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-amber-400 hover:text-amber-300 hover:underline font-bold pt-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Call Us</h4>
                  <a href={`tel:${contact.phone}`} className="text-amber-400 hover:underline font-bold text-base mt-0.5 block">
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-stone-400 hover:text-white text-sm mt-0.5 block">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-stone-800 space-y-3">
                <div className="flex items-center space-x-2 text-stone-200 font-serif font-bold">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-2 text-xs">
                  {contact.openingHours.map((slot, index) => (
                    <div key={index} className="flex justify-between text-stone-400 py-1 border-b border-stone-800/40">
                      <span className="font-medium">{slot.days}</span>
                      <span className="text-amber-400 font-semibold">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Food Review Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900/90 p-8 sm:p-10 rounded-3xl border border-stone-800 space-y-6 shadow-xl">
              <div>
                <div className="inline-flex items-center space-x-2 text-amber-500 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>Diner Feedback</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Leave a Review About Our Food
                </h3>
                <p className="text-stone-400 text-xs mt-1">
                  We'd love to hear your feedback on your favorite Biryanis and Starters!
                </p>
              </div>
              
              {formSubmitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-2xl flex items-center space-x-4 text-sm animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold text-base block text-emerald-300">Thank you for your review!</span>
                    <span className="text-xs text-emerald-400/90">Your feedback has been sent directly to Kammili's Kitchen team.</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Rating Selector with Required Validation */}
                  <div className={`space-y-2 bg-stone-950/70 p-4 rounded-2xl border transition-colors ${ratingError ? 'border-red-500/60 bg-red-500/5' : 'border-stone-800/80'}`}>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 block">
                        Your Rating <span className="text-red-400">*</span>
                      </label>
                      {ratingError && (
                        <div className="flex items-center space-x-1 text-xs text-red-400 font-semibold animate-pulse">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Please select a star rating</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                            setRatingError(false);
                          }}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              star <= (hoverRating || rating)
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-stone-700'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-400 ml-3">
                        {hoverRating || rating > 0 ? `${hoverRating || rating} / 5 Stars` : 'Tap stars to rate'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-stone-400 font-medium">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors placeholder:text-stone-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-stone-400 font-medium">Dish Ordered</label>
                      <input
                        type="text"
                        name="dish"
                        placeholder="e.g. Chicken Dum Biryani"
                        className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors placeholder:text-stone-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-stone-400 font-medium">Your Review / Feedback</label>
                    <textarea
                      rows="4"
                      name="message"
                      required
                      placeholder="Write your review or feedback about our food taste, freshness, and portion..."
                      className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none transition-colors placeholder:text-stone-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending Review...</span>
                      </>
                    ) : (
                      <>
                        <Star className="w-4 h-4 fill-white" />
                        <span>Submit Your Review</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

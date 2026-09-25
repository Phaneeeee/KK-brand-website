import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-800/80">
          
          {/* Brand Col with Official Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-stone-900/90 p-1 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/logo.png"
                  alt="Kammili's Kitchen Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                KAMMILI'S KITCHEN
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              {restaurantInfo.subTagline}
            </p>
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={restaurantInfo.social.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-amber-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 mr-2 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-amber-500 pl-3">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm">
              {restaurantInfo.contact.openingHours.map((slot, index) => (
                <li key={index} className="flex flex-col border-b border-stone-900 pb-2">
                  <span className="text-stone-400 font-medium">{slot.days}</span>
                  <span className="text-amber-400 font-semibold">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-amber-500 pl-3">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>{restaurantInfo.contact.address}, {restaurantInfo.contact.city}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:text-white font-bold text-amber-400 transition-colors">
                  {restaurantInfo.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:text-white transition-colors">
                  {restaurantInfo.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`tel:${restaurantInfo.contact.phone}`}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg flex items-center justify-center space-x-2 shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us for Orders</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} {restaurantInfo.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#home" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-stone-300 transition-colors">Terms of Service</a>
            <span className="text-amber-500 font-semibold">
              kammiliskitchen.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

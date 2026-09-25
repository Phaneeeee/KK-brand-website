import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-xl py-3 border-b border-amber-900/30'
          : 'bg-gradient-to-b from-stone-950/90 via-stone-900/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with official image */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl bg-stone-950/90 p-1 border border-amber-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
              <img
                src="/logo.png"
                alt="Kammili's Kitchen Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide block leading-none">
                KAMMILI'S KITCHEN
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold block mt-1">
                Main Road, Gudlavalleru
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-200 hover:text-amber-400 text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300 flex items-center space-x-1"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${restaurantInfo.contact.phone}`}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href={`tel:${restaurantInfo.contact.phone}`}
              className="bg-amber-500 text-white p-2.5 rounded-full shadow-md text-xs font-bold flex items-center justify-center sm:hidden"
              title="Call Us"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-amber-400" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900/98 backdrop-blur-xl border-b border-stone-800 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 px-4 py-3 rounded-lg font-medium text-base transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col space-y-3">
            <a
              href={`tel:${restaurantInfo.contact.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-center py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Us: {restaurantInfo.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

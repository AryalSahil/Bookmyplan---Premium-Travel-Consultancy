import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-blue text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <Compass className="w-8 h-8 text-luxury-gold" />
            <span className="text-2xl font-serif font-bold tracking-wider">BOOKMYPLAN</span>
          </Link>
          <p className="text-white/60 leading-relaxed mb-6">
            Designing stress-free, fully customized travel experiences for the modern explorer. Your journey, our masterpiece.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-luxury-gold font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors">Travel Blog</Link></li>
            <li><Link to="/plan-my-trip" className="text-white/60 hover:text-white transition-colors">Plan My Trip</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-luxury-gold font-serif text-xl mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/60">
              <Phone size={18} className="text-luxury-gold" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Mail size={18} className="text-luxury-gold" />
              <span>concierge@bookmyplan.com</span>
            </li>
            <li className="text-white/60 italic">
              Available 24/7 for our premium clients.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-luxury-gold font-serif text-xl mb-6">Newsletter</h4>
          <p className="text-white/60 mb-4">Subscribe for exclusive travel inspiration and luxury offers.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <button className="bg-luxury-gold text-luxury-blue font-bold py-3 rounded-lg hover:bg-luxury-gold-light transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-white/40 text-sm">
        <p>© 2026 Bookmyplan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

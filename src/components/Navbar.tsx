import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', type: 'link' },
    { name: 'How It Works', path: 'how-it-works', type: 'scroll' },
    { name: 'Services', path: '/services', type: 'link' },
    { name: 'Blog', path: '/blog', type: 'link' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled ? 'bg-luxury-blue/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className={cn("w-8 h-8 transition-colors duration-300", scrolled ? "text-luxury-gold" : "text-white")} />
          <span className={cn(
            "text-2xl font-serif font-bold tracking-wider transition-colors duration-300",
            scrolled ? "text-white" : "text-white"
          )}>
            BOOKMYPLAN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.type === 'scroll' ? (
              <button
                key={link.path}
                onClick={() => scrollToSection(link.path)}
                className={cn(
                  "nav-link text-sm uppercase tracking-widest font-medium cursor-pointer",
                  scrolled ? "text-white/80" : "text-white/90"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-link text-sm uppercase tracking-widest font-medium",
                  scrolled ? "text-white/80" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/plan-my-trip"
            className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-blue px-6 py-2.5 rounded-full text-sm font-bold tracking-widest transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            CONSULT NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-luxury-blue border-t border-white/10 p-6 md:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              link.type === 'scroll' ? (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(link.path)}
                  className="text-white/80 text-lg font-serif tracking-wide hover:text-luxury-gold transition-colors text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white/80 text-lg font-serif tracking-wide hover:text-luxury-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              to="/plan-my-trip"
              className="bg-luxury-gold text-luxury-blue px-6 py-3 rounded-full text-center font-bold tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              PLAN MY TRIP
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

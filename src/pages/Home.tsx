import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Map, Users, Calendar, CheckCircle2, Compass, Award, Globe, Heart } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506929199175-60933ee89334?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Travel"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-luxury-blue/40 mix-blend-multiply"></div>
          <motion.div 
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 30%, rgba(197, 160, 89, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(197, 160, 89, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(197, 160, 89, 0.15) 0%, transparent 50%)"
              ] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-0"
          />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-luxury-gold font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
          >
            Exquisite Travel Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-tight"
          >
            Personalized Journeys.<br />
            <span className="italic">Designed Just for You.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We design stress-free, fully customized travel experiences for modern explorers who seek the extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0px 0px 0px rgba(197, 160, 89, 0)", "0px 0px 20px rgba(197, 160, 89, 0.4)", "0px 0px 0px rgba(197, 160, 89, 0)"] }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              <Link
                to="/plan-my-trip"
                className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-blue px-10 py-4 rounded-full text-lg font-bold tracking-widest transition-all duration-300 shadow-2xl flex items-center gap-2 group"
              >
                PLAN MY TRIP
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold tracking-widest transition-all duration-300"
            >
              TALK TO CONSULTANT
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('how-it-works')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-luxury-gold transition-colors"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.button>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-blue mb-6">How It Works</h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Users, title: "Consult", desc: "Share your dreams and preferences with our expert travel designers." },
              { icon: Map, title: "Design", desc: "We craft a unique, day-by-day itinerary tailored specifically to you." },
              { icon: Calendar, title: "Book", desc: "We handle all bookings, from premium hotels to exclusive experiences." },
              { icon: Compass, title: "Travel", desc: "Embark on your journey with 24/7 support and zero stress." },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ y: -10, scale: 1.1 }}
                  className="w-20 h-20 bg-luxury-cream rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-luxury-gold transition-colors duration-500 shadow-lg"
                >
                  <step.icon className="w-10 h-10 text-luxury-gold group-hover:text-white transition-colors duration-500" />
                </motion.div>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-luxury-blue/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-luxury-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold font-bold tracking-widest uppercase text-sm mb-4 block">The Bookmyplan Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-blue mb-8 leading-tight">Why Choose Bookmyplan?</h2>
            <div className="space-y-8">
              {[
                { icon: Star, title: "Human Consultant", desc: "No algorithms or chatbots. You'll work with real travel experts who take the time to understand your unique tastes and travel style." },
                { icon: ShieldCheck, title: "Premium Hotels", desc: "Access to our exclusive network of handpicked 5-star properties, boutique villas, and luxury resorts worldwide with VIP perks." },
                { icon: CheckCircle2, title: "Transparent Pricing", desc: "No hidden fees or surprise costs. We provide detailed, transparent pricing for every element of your trip before you book." },
                { icon: Award, title: "Exclusive Access", desc: "From private museum tours after hours to tables at fully-booked Michelin restaurants, we open doors others can't." },
                { icon: Globe, title: "Global Support", desc: "Travel with peace of mind. Our local partners and 24/7 concierge are always just a call away, anywhere in the world." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-300">
                    <item.icon className="text-luxury-gold w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{item.title}</h4>
                    <p className="text-luxury-blue/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Resort"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-luxury-blue p-10 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-luxury-gold text-4xl font-serif mb-2">15+</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">Years of Expertise</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-blue mb-4">Featured Destinations</h2>
              <p className="text-luxury-blue/60 max-w-xl">Explore our most sought-after locations, curated for the discerning traveler.</p>
            </div>
            <Link to="/services" className="text-luxury-gold font-bold tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              VIEW ALL DESTINATIONS <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amalfi Coast, Italy", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", price: "From $4,500" },
              { name: "Kyoto, Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", price: "From $5,200" },
              { name: "Santorini, Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", price: "From $3,800" },
            ].map((dest, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <button className="w-full bg-white text-luxury-blue py-3 rounded-full font-bold tracking-widest">EXPLORE</button>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">{dest.name}</h3>
                <p className="text-luxury-gold font-medium">{dest.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-luxury-blue text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Star className="text-luxury-gold w-12 h-12 mx-auto mb-8 fill-luxury-gold" />
          <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
            "Bookmyplan didn't just book a trip; they designed a memory. Every detail was perfect, from the hidden gems in Rome to the private villa in Bali."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-luxury-gold">
              <img src="https://i.pravatar.cc/150?u=1" alt="Client" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Alexandra & James</p>
              <p className="text-white/50 text-sm uppercase tracking-widest">Honeymoon in Italy & Greece</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Follow Our Journey</h2>
            <p className="text-luxury-blue/60 italic">@BookmyplanLuxuryTravel</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img
                  src={`https://picsum.photos/seed/travel${i}/600/600`}
                  alt="Instagram"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

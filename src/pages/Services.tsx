import React from 'react';
import { motion } from 'motion/react';
import { Globe, Heart, Building2, Users, Camera, Plane, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Customized International Trips",
      desc: "Bespoke itineraries across Europe, Asia, and the Americas, designed around your interests.",
      img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Heart,
      title: "Honeymoon Planning",
      desc: "Romantic escapes to the world's most secluded and beautiful destinations.",
      img: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Building2,
      title: "Corporate Travel",
      desc: "Seamless business travel management for executives who value time and comfort.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Camera,
      title: "Destination Weddings",
      desc: "Full-service planning for your dream wedding in an extraordinary location.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Users,
      title: "Group Tours",
      desc: "Private, curated group experiences for families, friends, or special interest groups.",
      img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Plane,
      title: "Private Jet Charters",
      desc: "The ultimate in luxury and convenience. Fly on your own schedule.",
      img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-luxury-blue mb-6">Our Services</h1>
          <p className="text-luxury-blue/60 text-lg max-w-2xl mx-auto">
            From private islands to cultural immersions, we offer a range of premium travel services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-blue/20 group-hover:bg-luxury-blue/40 transition-colors"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="text-luxury-gold w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-luxury-gold transition-colors">{service.title}</h3>
              <p className="text-luxury-blue/60 leading-relaxed mb-6">{service.desc}</p>
              <Link to="/plan-my-trip" className="inline-flex items-center gap-2 text-luxury-gold font-bold tracking-widest text-sm hover:gap-4 transition-all">
                ENQUIRE NOW <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-luxury-blue rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=1000" alt="Pattern" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready for something truly unique?</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
              Our consultants are ready to design a journey that exceeds your wildest expectations.
            </p>
            <Link
              to="/plan-my-trip"
              className="bg-luxury-gold text-luxury-blue px-12 py-5 rounded-full font-bold tracking-[0.2em] hover:bg-luxury-gold-light transition-all shadow-2xl inline-block"
            >
              START PLANNING
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "The Ultimate Guide to Luxury Travel in Japan",
      excerpt: "From private tea ceremonies in Kyoto to the neon lights of Tokyo, discover the best of Japan.",
      category: "Destinations",
      date: "Oct 12, 2025",
      author: "Elena Rossi",
      img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hidden Gems of the Amalfi Coast",
      excerpt: "Escape the crowds and find the most exclusive spots on Italy's most beautiful coastline.",
      category: "Travel Tips",
      date: "Sep 28, 2025",
      author: "Marco Silva",
      img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "What to Pack for a Luxury Safari",
      excerpt: "Our expert guide on essential items for your next African adventure.",
      category: "Lifestyle",
      date: "Sep 15, 2025",
      author: "Sarah Jenkins",
      img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Rise of Sustainable Luxury Travel",
      excerpt: "How to enjoy the world's finest experiences while protecting the planet.",
      category: "Trends",
      date: "Aug 30, 2025",
      author: "David Chen",
      img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-luxury-blue mb-6">Travel Journal</h1>
          <p className="text-luxury-blue/60 text-lg max-w-2xl mx-auto">
            Insights, inspiration, and expert advice for the modern explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {posts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-2xl">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-luxury-blue">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-luxury-blue/40 mb-4 uppercase tracking-widest font-bold">
                  <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4 group-hover:text-luxury-gold transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-luxury-blue/60 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-luxury-gold font-bold tracking-widest group-hover:gap-4 transition-all">
                  READ ARTICLE <ArrowRight size={18} />
                </button>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="bg-luxury-cream p-8 rounded-3xl">
              <h3 className="text-2xl font-serif mb-6">Categories</h3>
              <ul className="space-y-4">
                {["Destinations", "Travel Tips", "Lifestyle", "Trends", "Luxury News"].map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex justify-between items-center text-luxury-blue/60 hover:text-luxury-gold transition-colors">
                      <span>{cat}</span>
                      <span className="text-xs bg-white px-2 py-1 rounded-md shadow-sm">12</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-luxury-blue text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-serif mb-4 text-luxury-gold">Join the Club</h3>
              <p className="text-white/60 mb-6">Get exclusive travel guides and luxury offers delivered to your inbox.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-luxury-gold transition-colors"
                />
                <button className="w-full bg-luxury-gold text-luxury-blue font-bold py-3 rounded-xl hover:bg-luxury-gold-light transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <div className="p-8 rounded-3xl border border-luxury-blue/5">
              <h3 className="text-2xl font-serif mb-6">Popular Posts</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={`https://picsum.photos/seed/post${i}/200/200`} alt="Post" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm group-hover:text-luxury-gold transition-colors line-clamp-2">
                        How to Experience the Best of Paris in 48 Hours
                      </h4>
                      <p className="text-xs text-luxury-blue/40 mt-1 uppercase tracking-widest">Sep 05, 2025</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BrokerSection from "../components/BrokerSection";
import { motion, AnimatePresence } from "motion/react"; 
import { Shield, Target, Award, HelpCircle, ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";

const Home = () => {
  // ১. FAQ এবং কার্ড পপ-আপের জন্য স্টেট (State)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // ২. আপনার কার্ডের ডাটা (Knowledge Base Section)
  const posts = [
    {
      id: 1,
      title: "What is Forex?",
      category: "Basics",
      img: "/forex.jpg",
      desc: "Forex is the global marketplace for exchanging national currencies against one another. It is the largest and most liquid financial market in the world, operating 24 hours a day. Unlike other markets, it has no central location and operates through a global network of banks and institutions.",
    },
    {
      id: 2,
      title: "Risk Management",
      category: "Strategy",
      img: "/risk.jpg",
      desc: "The key to long-term success in trading. Learn how to calculate position sizes, set stop losses, and manage your emotions to protect your trading capital from market volatility. Without a proper risk strategy, even the best technical setup can lead to losses.",
    },
    {
      id: 3,
      title: "Technical Analysis Basics",
      category: "Analysis",
      img: "/Analysis.jpg",
      desc: "Master the art of reading price charts. Understand support and resistance levels, trend lines, and institutional price action to predict future market movements. Learn to see what big banks are doing before they make their move.",
    },
  ];

  const faqData = [
    {
      q: "Is forex trading risky?",
      a: "Yes, forex trading involves significant risk. We emphasize education and risk management to help you navigate these risks professionally.",
    },
    {
      q: "How much capital do I need?",
      a: "You can start with as little as $300, but we recommend learning the basics first before committing any capital.",
    },
    {
      q: "Is this beginner-friendly?",
      a: "Absolutely. Our curriculum is designed to take you from zero to professional analysis step-by-step.",
    },
  ];

  return (
    <main className="relative">
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-dark-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Who We Are</h2>
              <h3 className="text-4xl font-bold mb-6 text-white">Transparency First, <br /> Education Always.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                CSS Traders was founded with a single mission: to provide honest, professional, and accessible forex education.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="text-gold" />, title: "No False Promises", desc: "We focus on risk management and realistic expectations." },
                  { icon: <Target className="text-gold" />, title: "Real Market Analysis", desc: "Learn to read charts like a professional institution." },
                  { icon: <Award className="text-gold" />, title: "Proven Mentorship", desc: "Guided by traders with years of live market experience." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Analysis" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl border border-gold/30 hidden md:block text-center">
                <div className="text-4xl font-bold text-gold mb-1">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Educational Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Start Your Journey Section (অ্যানিমেশন সহ) */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Knowledge Base</h2>
              <h3 className="text-4xl font-bold text-white">Start Your Journey</h3>
            </div>
            <button 
              onClick={() => alert("Our comprehensive trading resources are coming soon! Stay tuned.")}
              className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Resources <ArrowUpRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                layoutId={`card-${post.id}`} 
                onClick={() => setSelectedPost(post)}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
              >
                <div className="h-48 overflow-hidden">
                  <motion.img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
               <div className="p-6">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-bold mt-2 text-white group-hover:text-gold transition-colors">
                    {post.title}
                  </h4>
                  
                  {/* নতুন বাটন স্টাইল অ্যারো সহ */}
                  <div className="flex items-center gap-2 mt-4 group/btn">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">
                      Learn more
                    </span>
                    <ArrowRight 
                      size={14} 
                      className="text-gold group-hover/btn:translate-x-1 transition-transform duration-300" 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BrokerSection />

      {/* FAQ Section */}
      <section className="py-24 bg-dark-soft/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <HelpCircle className="text-gold w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === i ? "border-gold/50 bg-gold/5" : "border-white/5"}`}>
                <button onClick={() => setActiveIndex(activeIndex === i ? null : i)} className="w-full p-6 flex justify-between items-center text-left focus:outline-none group">
                  <h4 className={`font-bold transition-colors ${activeIndex === i ? "text-gold" : "text-white group-hover:text-gold"}`}>{item.q}</h4>
                  <motion.div animate={{ rotate: activeIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={20} className={activeIndex === i ? "text-gold" : "text-white/40"} /></motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                      <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* পপ-আপ ডিটেইলস কার্ড (এটি তখন আসবে যখন কার্ডে ক্লিক করবেন) */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* ব্যাকগ্রাউন্ড অন্ধকার করার জন্য ওভারলে */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* মেইন কন্টেন্ট পপ-আপ */}
            <motion.div
              layoutId={`card-${selectedPost.id}`}
              className="relative bg-[#0f0f0f] w-full max-w-2xl rounded-4xl overflow-hidden border border-white/10 z-10 shadow-2xl"
            >
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img src={selectedPost.img} className="w-full h-full object-cover" alt="" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="p-8 md:p-12">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{selectedPost.category}</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">{selectedPost.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed font-light">{selectedPost.desc}</p>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="mt-10 px-8 py-3 bg-gold text-black font-bold rounded-full hover:bg-white transition-all active:scale-95"
                  >
                    Close & Go Back
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
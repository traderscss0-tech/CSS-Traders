import React, { useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import BrokerSection from "../components/BrokerSection";
import { motion, AnimatePresence } from "framer-motion"; 
import { 
  Shield, Target, Award, HelpCircle, ChevronDown, 
  ArrowUpRight, ArrowRight, ShieldCheck, Zap, 
  BarChart3, Handshake, MousePointerClick, RefreshCw, TrendingUp, Lock 
} from "lucide-react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    {
      id: 1,
      title: "What is Forex?",
      category: "Basics",
      img: "/forex.jpg",
      desc: "Forex is the global marketplace for exchanging national currencies against one another. It is the largest and most liquid financial market in the world.",
    },
    {
      id: 2,
      title: "Risk Management",
      category: "Strategy",
      img: "/risk.jpg",
      desc: "The key to long-term success in trading. Learn how to calculate position sizes and protect your capital.",
    },
    {
      id: 3,
      title: "Technical Analysis Basics",
      category: "Analysis",
      img: "/Analysis.jpg",
      desc: "Master the art of reading price charts. Understand support and resistance levels and institutional price action.",
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
    <main className="relative bg-black">
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-dark-soft/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4 text-left">Who We Are</h2>
              <h3 className="text-4xl font-bold mb-6 text-white text-left">Transparency First, <br /> Education Always.</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8 text-left">
                CSS Traders was founded with a single mission: to provide honest, professional, and accessible forex education.
              </p>
              <div className="space-y-6 text-left">
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

      {/* --- REFINED COPY TRADING HOME SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Zap size={14} className="animate-pulse" />
              <span>Investment Opportunity</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              Mirror Our Strategy. <br /> <span className="text-gold italic">Automate Your Success.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Strategy Performance Card */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-[50px] border border-gold/30 bg-black/80 backdrop-blur-xl shadow-2xl relative"
            >
              <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">CSS Master Account</h3>
                  <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                    <BarChart3 size={12} /> Verified Institutional Trades
                  </div>
                </div>
                <div className="text-right">
                  {/* Updated 50/50 Green */}
                  <div className="text-4xl font-black text-green-400 leading-none">50/50</div>
                  <p className="text-[10px] text-green-400/60 uppercase font-bold tracking-widest mt-2">Profit Split</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-10 text-left">
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1 tracking-widest">Target Monthly ROI</p>
                  <p className="text-2xl font-black text-white">8% - 15%</p>
                </div>
                {/* Updated Drawdown Red */}
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1 tracking-widest">Max Drawdown</p>
                  <p className="text-2xl font-black text-red-500">Under 10%</p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1 tracking-widest">Success Fee</p>
                  <p className="text-2xl font-black text-green-400">$0.00</p>
                </div>
                <div className="p-5 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-[10px] text-white/30 uppercase font-bold mb-1 tracking-widest">Min Investment</p>
                  <p className="text-2xl font-black text-white">$300</p>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://vtm.pro/NJB3ae', '_blank')}
                className="w-full bg-gold hover:bg-white text-black font-black py-6 rounded-[25px] flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 shadow-2xl shadow-gold/20 group text-lg"
              >
                Join Now & Connect Account <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Updated Fund Control Highlighted Badge */}
              <div className="mt-8 p-4 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center gap-3 group">
                 <div className="bg-gold/20 p-2 rounded-full">
                    <Lock size={16} className="text-gold" />
                 </div>
                 <span className="text-gold text-[11px] font-bold uppercase tracking-wider">
                   100% Fund Control In Your Own Broker Account
                 </span>
              </div>
            </motion.div>

            {/* Right: How it works */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10 text-left"
            >
              <h3 className="text-3xl font-bold text-white mb-8">How to Get Started?</h3>
              {[
                { icon: <MousePointerClick className="text-gold" size={28} />, title: "Open & Fund Account", desc: "Create an account with our recommended broker and deposit a minimum of $300 USD." },
                { icon: <RefreshCw className="text-gold" size={28} />, title: "Mirror Strategy", desc: "Link your account to our master trader. All our institutional trades will be copied instantly." },
                { icon: <TrendingUp className="text-gold" size={28} />, title: "Earn & Grow", desc: "Monitor your growth daily. We only share profits after you've successfully gained from the market." }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20 group-hover:bg-gold/20 transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{step.title}</h4>
                    <p className="text-white/40 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
              <div className="p-8 rounded-[35px] border border-white/5 bg-white/5 backdrop-blur-sm mt-10">
                <p className="text-white/50 text-[11px] italic leading-relaxed text-center">
                  <span className="text-gold font-bold">Safe & Transparent:</span> We do not hold your capital. Your funds are always under your control with a regulated broker. Profit sharing occurs only on net monthly gains.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="text-left">
              <h2 className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-4">Knowledge Base</h2>
              <h3 className="text-4xl font-bold text-white">Start Your Journey</h3>
            </div>
            <button 
              onClick={() => alert("Our comprehensive trading resources are coming soon!")}
              className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all text-xs uppercase tracking-widest"
            >
              View All Resources <ArrowUpRight size={18} />
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
               <div className="p-6 text-left">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-bold mt-2 text-white group-hover:text-gold transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-4 group/btn">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest">Learn more</span>
                    <ArrowRight size={14} className="text-gold group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                      <div className="px-6 pb-6 text-sm text-white/50 leading-relaxed border-t border-white/5 pt-4 text-left">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-up Details Card */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPost(null)} className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            <motion.div layoutId={`card-${selectedPost.id}`} className="relative bg-[#0a0a0a] w-full max-w-2xl rounded-[40px] overflow-hidden border border-white/10 z-10 shadow-2xl">
              <div className="h-64 md:h-80 overflow-hidden relative">
                <img src={selectedPost.img} className="w-full h-full object-cover" alt="" />
                <button onClick={() => setSelectedPost(null)} className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">✕</button>
              </div>
              <div className="p-8 md:p-12 text-left">
                <span className="text-gold text-xs font-bold uppercase tracking-widest">{selectedPost.category}</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6 tracking-tight">{selectedPost.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed">{selectedPost.desc}</p>
                <button onClick={() => setSelectedPost(null)} className="mt-10 px-10 py-4 bg-gold text-black font-bold rounded-2xl hover:bg-white transition-all active:scale-95">Close & Go Back</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
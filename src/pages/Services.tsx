import React, { useState } from "react";
import ServicesComponent from "../components/Services";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Copy,
  Check,
  X,
  MessageCircle,
  Star,
  Zap,
  Handshake,
  BarChart3,
  Gem
} from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const cryptoAddresses = [
    { network: "TRC20 (Recommended)", address: "TQSu84LQCp5VcWxcvqj7VsfggHukH6Z7E8", color: "text-green-400" },
    { network: "BEP20 (BSC)", address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785", color: "text-orange-400" },
    { network: "ERC20 (Ethereum)", address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785", color: "text-blue-400" },
  ];

  const pricingPlans = [
    {
      name: "Monthly Pro Access",
      price: "49",
      duration: "Month",
      features: [
        "Full Trading Curriculum",
        "Daily Market Analysis",
        "Discord Community Access",
        "Real-time Trade Calls",
        "Standard Support"
      ],
      isPopular: false,
      tag: "Flexible",
      icon: <Star className="text-gold" size={24} />
    },
    {
      name: "Yearly Elite Pass",
      price: "500",
      duration: "Year",
      features: [
        "Everything in Monthly",
        "Priority 1-on-1 Mentorship",
        "Order Flow Indicators",
        "Advanced Strategy Webinars",
        "Lifetime Legacy Status"
      ],
      isPopular: true,
      tag: "Best Value",
      icon: <Gem className="text-gold" size={24} />
    },
  ];

  const handleEnrollClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCopy = (networkName, address) => {
    navigator.clipboard.writeText(address);
    setCopiedText(networkName);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <main className="pt-32 pb-24 text-white bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. HEADER */}
        <div className="text-center mb-20">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center">
            Professional <span className="text-gold italic">Trading</span> <br /> Curriculum
          </motion.h1>
          <p className="text-white/40 text-xl max-w-3xl mx-auto leading-relaxed text-center">
            Comprehensive solutions designed to take you from market basics to institutional analysis.
          </p>
        </div>

        <ServicesComponent />

        {/* 2. ULTIMATE COPY TRADING SECTION (RESORED LAYOUT) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 relative overflow-hidden rounded-[50px] border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent p-8 md:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
                <Handshake size={16} className="animate-pulse" />
                <span>Transparent Profit Partnership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Hands-Free Growth <br />
                <span className="text-gold italic">Mirror Our Success</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Connect your account to our master strategy. We handle the analysis, risk, and execution. You keep 100% control of your funds and only share profits when we win.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10 text-left">
                {[
                  { title: "No Upfront Fees", desc: "No setup costs or hidden activation charges." },
                  { title: "50/50 Profit Share", desc: "Performance-based model. No profit, no fee." },
                  { title: "Full Fund Safety", desc: "Your capital never leaves your regulated broker." },
                  { title: "Manual Risk Control", desc: "Strict drawdown limits to preserve your wealth." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/50 transition-all">
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-white/40 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 md:p-12 rounded-[40px] border border-gold/30 bg-black/80 backdrop-blur-xl relative z-10 shadow-2xl">
                <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-6">
                  <div className="text-left">
                    <h3 className="font-bold text-xl uppercase tracking-tighter text-white">Copy Trading <br /> Performance</h3>
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-2">
                      <BarChart3 size={10} /> Verified Live Results
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-gold tracking-tighter">50/50 %</span>
                    <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Profit Split</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-10 text-left">
                  <div className="space-y-1"><p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">Monthly Target</p><p className="text-xl font-extrabold text-white">8% - 15%</p></div>
                  <div className="space-y-1"><p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Max Drawdown</p><p className="text-xl font-extrabold text-red-400">Under 10%</p></div>
                  <div className="space-y-1"><p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">Success Fee</p><p className="text-xl font-extrabold text-green-400">$0.00 USD</p></div>
                  <div className="space-y-1"><p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">Min. Investment</p><p className="text-xl font-extrabold text-white">$300 USD</p></div>
                </div>
                <button onClick={() => window.open("https://vtm.pro/NJB3ae", "_blank")} className="w-full bg-gold hover:bg-white text-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 shadow-xl shadow-gold/20 group">
                  Join Now & Connect Account <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[120px] z-0"></div>
            </div>
          </div>
        </motion.div>

        {/* 3. MEMBERSHIP PLANS - SHARP & PREMIUM (2 CARDS) */}
        <div className="mt-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            <Lock size={16} />
            <span>Secure USDT Enrollment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-white text-center">Membership <span className="text-gold">Programs</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative p-[1px] rounded-[40px] transition-all duration-500 overflow-hidden ${
                  plan.isPopular ? 'bg-gradient-to-b from-gold/60 to-transparent shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'bg-white/10'
                }`}
              >
                <div className="bg-[#0c0c0c] rounded-[39px] p-10 h-full flex flex-col relative z-10">
                  <div className={`absolute top-8 right-10 text-[9px] font-black uppercase tracking-[3px] py-1 px-4 rounded-full ${plan.isPopular ? 'bg-gold text-black' : 'bg-white/10 text-white/40'}`}>
                    {plan.tag}
                  </div>

                  <div className="text-left mb-8">
                    <div className="mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-extrabold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black text-white">${plan.price}</span>
                        <span className="text-white/30 font-bold uppercase text-[10px] tracking-widest">/ {plan.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-5 mb-12 flex-grow text-left border-t border-white/5 pt-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-white/60 text-[15px] font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleEnrollClick(plan)} 
                    className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95 ${
                        plan.isPopular ? 'bg-gold text-black hover:bg-white' : 'bg-white/5 border border-white/10 hover:bg-white hover:text-black'
                    }`}
                  >
                    Enroll Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform"/>
                  </button>
                  <p className="mt-4 text-[9px] text-white/20 font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                    <ShieldCheck size={12}/> Secure USDT Encryption
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. VITAL CRYPTO MODAL - SCROLLABLE & DETAILED */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/95 backdrop-blur-md" />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-gold/30 rounded-[45px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center sticky top-0 bg-[#0a0a0a] z-20">
                <h3 className="text-lg font-black flex items-center gap-2 text-white"> <ShieldCheck className="text-gold" size={24}/> SECURE PAYMENT</h3>
                <button onClick={() => setIsModalOpen(false)} className="bg-white/5 p-2 rounded-full text-white/40 hover:text-white"><X size={24}/></button>
              </div>

              <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                <div className="bg-gold/5 p-6 rounded-3xl text-center mb-8">
                  <h4 className="text-5xl font-black text-white">${selectedPlan.price} <span className="text-gold text-lg">USDT</span></h4>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">Enrollment for {selectedPlan.name}</p>
                </div>

                <div className="space-y-4 mb-10">
                  {cryptoAddresses.map((item, index) => (
                    <div key={index} className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-gold/50 transition-all group">
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.network}</span>
                        <button onClick={() => handleCopy(item.network, item.address)} className="text-gold text-[10px] font-black uppercase flex items-center gap-2 hover:text-white">
                          {copiedText === item.network ? "COPIED" : "COPY ADDRESS"}
                        </button>
                      </div>
                      <p className="text-[13px] font-mono break-all text-white/80 bg-black/40 p-4 rounded-xl border border-white/5 leading-relaxed tracking-wider text-center">
                        {item.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* MODAL FOOTER - TEXT RESTORED */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                    <p className="text-[12px] text-white/50 mb-6 leading-relaxed text-center">
                        After sending the payment, please send a <span className="text-gold font-bold underline">Screenshot</span> of the transaction to our WhatsApp for activation.
                    </p>
                    <button 
                        onClick={() => window.open(`https://wa.me/919832797759?text=Hello,%20I've%20sent%20the%20$${selectedPlan.price}%20USDT%20for%20${selectedPlan.name}.%20Here%20is%20the%20screenshot...`, "_blank")} 
                        className="w-full bg-[#25D366] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 text-sm hover:scale-105 transition-all shadow-lg shadow-[#25D366]/10"
                    >
                        <MessageCircle size={22} fill="black"/> CONFIRM ON WHATSAPP
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }
      `}</style>
    </main>
  );
};

export default Services;
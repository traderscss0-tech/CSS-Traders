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
  Zap
} from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [selectedPlan, setSelectedPlan] = useState({ name: "", price: "" });

  const pricingPlans = [
    {
      name: "Monthly Pro Access",
      price: "49",
      duration: "Month",
      features: [
        "Full Trading Curriculum",
        "Daily Market Analysis",
        "Private Discord Community",
        "Standard Support",
        "Real-time Trade Calls"
      ],
      isPopular: false,
      tag: "Flexible"
    },
    {
      name: "Yearly Elite Pass",
      price: "500",
      duration: "Year",
      features: [
        "Everything in Monthly",
        "Priority 1-on-1 Mentorship",
        "Institutional Order Flow Tools",
        "Exclusive Strategy Webinars",
        "2 Months Free Savings"
      ],
      isPopular: true,
      tag: "Best Value"
    },
  ];

  const cryptoAddresses = [
    { network: "TRC20 (Recommended)", address: "TQSu84LQCp5VcWxcvqj7VsfggHukH6Z7E8", color: "text-green-400" },
    { network: "BEP20 (BSC)", address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785", color: "text-orange-400" },
    { network: "ERC20 (Ethereum)", address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785", color: "text-blue-400" },
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
    <main className="pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. HEADER SECTION */}
        <div className="text-center mb-20">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-bold mb-6"
          >
            Professional <span className="text-gold italic">Trading</span> <br /> Curriculum
          </motion.h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your trading journey.
          </p>
        </div>

        {/* 2. SERVICES COMPONENT */}
        <ServicesComponent />

        {/* 3. PRO MEMBERSHIP SECTION - 2 CARD LAYOUT */}
        <div className="mt-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
            <Lock size={16} />
            <span>Secure USDT Enrollment</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-16 text-white">
            Membership <span className="text-gold">Plans</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ 
                    y: -15, 
                    transition: { duration: 0.3 },
                    boxShadow: "0px 20px 40px rgba(212, 175, 55, 0.15)"
                }}
                className={`relative p-10 rounded-[45px] border transition-all duration-500 flex flex-col ${
                  plan.isPopular 
                  ? 'bg-gradient-to-b from-gold/15 to-transparent border-gold/40 shadow-2xl' 
                  : 'bg-[#0f0f0f] border-white/10 hover:border-gold/30'
                }`}
              >
                {/* Badge/Tag */}
                <div className={`absolute top-6 right-8 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[2px] ${plan.isPopular ? 'bg-gold text-black' : 'bg-white/10 text-white/60'}`}>
                  {plan.tag}
                </div>

                <div className="text-left mb-10">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6 border border-gold/20">
                    {plan.isPopular ? <Zap className="text-gold" fill="currentColor" size={24}/> : <Star className="text-gold" size={24}/>}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-white">${plan.price}</span>
                    <span className="text-white/30 font-bold text-sm uppercase tracking-widest">/ {plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-5 mb-12 flex-grow text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-gold" />
                      </div>
                      <span className="text-white/70 text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleEnrollClick(plan)}
                  className={`w-full py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 group ${
                    plan.isPopular 
                    ? 'bg-gold text-black hover:bg-white shadow-[0_10px_30px_rgba(212,175,55,0.3)]' 
                    : 'bg-white/5 hover:bg-white text-white hover:text-black border border-white/10'
                  }`}
                >
                  Join the Circle
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-lg bg-[#080808] border border-gold/30 p-8 md:p-12 rounded-[50px] shadow-3xl z-10"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors">
                <X size={28} />
              </button>

              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <ShieldCheck className="text-gold" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Crypto Payment</h3>
                <p className="text-white/50 text-base">
                  Pay <span className="text-gold font-bold">${selectedPlan.price} USDT</span> for <br/> 
                  <span className="text-white uppercase font-black tracking-tighter">{selectedPlan.name}</span>
                </p>
              </div>

              <div className="space-y-4">
                {cryptoAddresses.map((item, index) => (
                  <div key={index} className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/40 transition-all group">
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-xs font-black uppercase tracking-widest ${item.color}`}>{item.network}</span>
                      <button onClick={() => handleCopy(item.network, item.address)} className="text-gold group-hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase">
                        {copiedText === item.network ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
                      </button>
                    </div>
                    <p className="text-sm text-white/80 font-mono break-all bg-black/60 p-4 rounded-xl border border-white/5 leading-relaxed">
                      {item.address}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-gold/5 border border-gold/20 text-center">
                <p className="text-sm text-white/60 mb-6">
                  Send the screenshot to WhatsApp for instant activation.
                </p>
                <button
                  onClick={() => window.open(`https://wa.me/919832797759?text=Hello,%20I%20have%20sent%20the%20$${selectedPlan.price}%20USDT%20payment%20for%20${selectedPlan.name}.%20Here%20is%20the%20screenshot...`, "_blank")}
                  className="w-full bg-[#25D366] hover:bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                >
                  <MessageCircle size={20} fill="black" /> Confirm on WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Services;
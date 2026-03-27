import React, { useState } from "react";
import ServicesComponent from "../components/Services";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  Headphones,
  Lock,
  TrendingUp,
  Handshake,
  BarChart3,
  Copy,
  Check,
  X,
  MessageCircle,
} from "lucide-react";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(""); // এখানে নেটওয়ার্কের নাম সেভ হবে

  const cryptoAddresses = [
    {
      network: "TRC20 (Recommended)",
      address: "TQSu84LQCp5VcWxcvqj7VsfggHukH6Z7E8",
      color: "text-green-400",
    },
    {
      network: "BEP20 (BSC)",
      address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785",
      color: "text-orange-400",
    },
    {
      network: "ERC20 (Ethereum)",
      address: "0x6db0469D342fC9c3c9cE7c57471ea135daa59785",
      color: "text-blue-400",
    },
  ];

  // কপি করার ফাংশন (নেটওয়ার্ক নাম অনুযায়ী ট্র্যাক করবে)
  const handleCopy = (networkName: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedText(networkName); // অ্যাড্রেস নয়, বরং ইউনিক নেটওয়ার্ক নাম সেভ করছি
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
            Professional <span className="text-gold italic">Trading</span>{" "}
            <br /> Curriculum
          </motion.h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed text-center">
            Comprehensive solutions designed to take you from market basics to
            institutional analysis.
          </p>
        </div>

        {/* 2. MAIN SERVICES GRID */}
        <ServicesComponent />

        {/* 3. ULTIMATE COPY TRADING SECTION */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white text-left">
                Hands-Free Growth <br />
                <span className="text-gold italic">Mirror Our Success</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Connect your account to our master strategy. We handle the
                analysis, risk, and execution. You keep 100% control of your
                funds and only share profits when we win.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mb-10 text-left">
                {[
                  {
                    title: "No Upfront Fees",
                    desc: "No setup costs or hidden activation charges.",
                  },
                  {
                    title: "50/50 Profit Share",
                    desc: "Performance-based model. No profit, no fee.",
                  },
                  {
                    title: "Full Fund Safety",
                    desc: "Your capital never leaves your regulated broker.",
                  },
                  {
                    title: "Manual Risk Control",
                    desc: "Strict drawdown limits to preserve your wealth.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/50 transition-all">
                      <CheckCircle2 size={18} className="text-gold" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-white/40 text-[11px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-8 md:p-12 rounded-[40px] border border-gold/30 bg-black/80 backdrop-blur-xl relative z-10 shadow-2xl">
                <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-6">
                  <div className="text-left">
                    <h3 className="font-bold text-xl uppercase tracking-tighter text-white">
                      Copy Trading <br /> Strategy Performance
                    </h3>
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest flex items-center gap-1 mt-2">
                      <BarChart3 size={10} /> Verified Live Results
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-gold tracking-tighter">
                      50/50 %
                    </span>
                    <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">
                      Profit Split
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10 text-left">
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">
                      Monthly Target
                    </p>
                    <p className="text-xl font-extrabold text-white">
                      8% - 15%
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest">
                      Max Drawdown
                    </p>
                    <p className="text-xl font-extrabold text-red-400">
                      Under 10%
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">
                      Success Fee
                    </p>
                    <p className="text-xl font-extrabold text-green-400">
                      $0.00 USD
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-nowrap">
                      Min. Investment
                    </p>
                    <p className="text-xl font-extrabold text-white">
                      $300 USD
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() =>
                      window.open("https://vtm.pro/NJB3ae", "_blank")
                    }
                    className="w-full bg-gold hover:bg-white text-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 shadow-xl shadow-gold/20 group"
                  >
                    Join Now & Connect Account{" "}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>

                  <div className="pt-4 border-t border-white/5 text-center">
                    <div className="flex items-center justify-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">
                      <ShieldCheck size={14} className="text-gold" />
                      <span>Regulated Funds Control</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 blur-[120px] -z-0"></div>
            </div>
          </div>
        </motion.div>

        {/* 4. PRO MEMBERSHIP SECTION */}
        <div className="mt-40 grid lg:grid-cols-2 gap-16 items-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6">
              <Lock size={16} />
              <span>Private USDT Enrollment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
              Master the Markets with <br />{" "}
              <span className="text-gold underline underline-offset-8">
                CSS Inner Circle
              </span>
            </h2>
            <p className="text-white/60 mb-10 text-lg leading-relaxed">
              Join our private ecosystem via secure USDT payment. No banking
              records, no traditional trails—just professional institutional
              education.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <TrendingUp size={24} className="text-gold" />,
                  title: "High-Probability Calls",
                  desc: "Real-time trade entries shared daily.",
                },
                {
                  icon: <Headphones size={24} className="text-gold" />,
                  title: "Direct Mentorship",
                  desc: "1-on-1 support and weekly live Q&A.",
                },
                {
                  icon: <ShieldCheck size={24} className="text-gold" />,
                  title: "Anonymous Access",
                  desc: "Crypto-only payments for your privacy.",
                },
                {
                  icon: <Lock size={24} className="text-gold" />,
                  title: "Private Tools",
                  desc: "Access to exclusive trading indicators.",
                },
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-bold text-lg mb-1 text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gold/10 rounded-[45px] blur-2xl"></div>
            <div className="relative glass-card p-10 md:p-12 rounded-[40px] border border-gold/20 bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Pro Membership
                  </h3>
                  <p className="text-gold text-[10px] font-bold uppercase tracking-widest">
                    USDT Exclusive
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold text-gold">$99</span>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1 text-nowrap">
                    Life Time
                  </p>
                </div>
              </div>
              <div className="space-y-5 mb-10 text-left">
                {[
                  "Advanced Trading Curriculum",
                  "Daily Market Breakdowns",
                  "Exclusive Discord Access",
                  "Institutional Order Flow Training",
                  "Personalized Trade Reviews",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2
                      size={16}
                      className="text-gold flex-shrink-0"
                    />
                    <span className="text-white/80 font-medium text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gold hover:bg-white text-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-gold/10 active:scale-95 group"
              >
                Enroll Now (USDT){" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- PAYMENT MODAL (REFINED COPY LOGIC) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-gold/20 p-8 md:p-10 rounded-[40px] shadow-2xl z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/20">
                  <ShieldCheck className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  Secure Crypto Payment
                </h3>
                <p className="text-white/50 text-sm">
                  Send <span className="text-gold font-bold">$99 USDT</span> to
                  any network below.
                </p>
              </div>

              <div className="space-y-4 text-left">
                {cryptoAddresses.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${item.color}`}
                      >
                        {item.network}
                      </span>

                      {/* FIX: এখানে copiedText === item.network দিয়ে চেক করা হচ্ছে */}
                      <button
                        onClick={() => handleCopy(item.network, item.address)}
                        className="text-gold hover:text-white transition-colors flex items-center gap-1 text-[10px] font-bold uppercase"
                      >
                        {copiedText === item.network ? (
                          <>
                            <Check size={12} /> Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} /> Copy Address
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-white/90 font-mono break-all bg-black/40 p-3 rounded-lg border border-white/5 normal-case tracking-normal leading-relaxed">
                      {item.address}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gold/5 border border-gold/20 text-center">
                <p className="text-xs text-white/60 leading-relaxed">
                  After sending the payment, please send a{" "}
                  <span className="text-white font-bold underline">
                    Screenshot
                  </span>{" "}
                  of the transaction to our WhatsApp for activation.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/919832797759?text=Hello,%20I%20have%20sent%20the%20$99%20USDT%20payment.%20Here%20is%20the%20screenshot...`,
                      "_blank",
                    )
                  }
                  className="mt-4 flex items-center justify-center gap-2 mx-auto text-gold font-bold text-sm hover:underline"
                >
                  <MessageCircle size={16} /> Contact on WhatsApp
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

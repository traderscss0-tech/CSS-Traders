import { useState, useEffect } from "react";
import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

const Hero = () => {
  const [goldData, setGoldData] = useState({ price: 0, percent: 0 });
  const [btcData, setBtcData] = useState({ price: 0, percent: 0 });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const token = "d72cl01r01qqkte0fmv0d72cl01r01qqkte0fmvg";

        // Gold Fetch (XAU/USD)
        const goldRes = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=OANDA:XAU_USD&token=${token}`,
        );
        const goldJson = await goldRes.json();

        // BTC Fetch (BTC/USDT)
        const btcRes = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=BINANCE:BTCUSDT&token=${token}`,
        );
        const btcJson = await btcRes.json();

        if (goldJson.c)
          setGoldData({ price: goldJson.c, percent: goldJson.dp });
        if (btcJson.c) setBtcData({ price: btcJson.c, percent: btcJson.dp });
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-125 h-125 bg-gold/15 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-125 h-125 bg-gold/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <div className="w-2 h-2 bg-gold rounded-full animate-ping" />
            Live Market Analysis & Education
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter text-white">
            Trade <span className="text-gold gold-glow">Smart.</span> <br />
            Trade <span className="text-gold gold-glow">Confidently.</span>
          </h1>
          <p className="text-xl text-white/50 mb-12 max-w-lg leading-relaxed font-light">
            Empowering the next generation of South Asian traders with
            institutional-grade analysis.
          </p>
          <a
            href="https://vtm.pro/NJB3ae"
            target="_blank"
            className="bg-gold text-dark px-10 py-5 rounded-2xl font-bold inline-flex items-center gap-3 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all"
          >
            Start Your Journey <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Right Side: Bull Image and 2 Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative hidden lg:block perspective-1000"
        >
          <div className="relative z-10 glass-card p-5 rounded-[40px] border-gold/20 gold-border-glow overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-tr from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* বুল ইমেজটি এখানে */}
            <img
              src="/banner-img.jpg"
              alt="Bull Trading"
              className="rounded-[30px] w-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />

            {/* GOLD CARD (উপরের দিকে) */}
            <motion.a
              href="https://www.tradingview.com/chart/?symbol=OANDA:XAUUSD"
              target="_blank"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-12 left-8 glass-card p-5 rounded-3xl border border-gold/40 shadow-2xl backdrop-blur-xl z-20 cursor-pointer hover:border-gold transition-all group/gold block no-underline"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-gold w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  Live Signal
                </span>
              </div>
              <div className="text-xl font-bold text-white flex items-center gap-3">
                <span className="group-hover/gold:text-gold transition-colors">
                  XAU/USD
                </span>
                <span className="text-lg font-semibold text-white/90">
                  {goldData.price > 0 ? `$${goldData.price.toFixed(2)}` : "..."}
                </span>
                <span
                  className={`text-sm font-medium ${goldData.percent >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {goldData.percent >= 0 ? "+" : ""}
                  {goldData.percent.toFixed(2)}%
                </span>
              </div>
            </motion.a>

            {/* BITCOIN CARD (নিচের দিকে) */}
            <motion.a
              href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT"
              target="_blank"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute bottom-12 right-8 glass-card p-5 rounded-3xl border border-gold/40 shadow-2xl backdrop-blur-xl z-20 cursor-pointer hover:border-gold transition-all group/btc block no-underline"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-gold w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  Market Trend
                </span>
              </div>
              <div className="text-xl font-bold text-white flex items-center gap-3">
                <span className="group-hover/btc:text-gold transition-colors">
                  BTC/USDT
                </span>
                <span className="text-lg font-semibold text-white/90">
                  {btcData.price > 0
                    ? `$${btcData.price.toLocaleString()}`
                    : "..."}
                </span>
                <span
                  className={`text-sm font-medium ${btcData.percent >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {btcData.percent >= 0 ? "+" : ""}
                  {btcData.percent.toFixed(2)}%
                </span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

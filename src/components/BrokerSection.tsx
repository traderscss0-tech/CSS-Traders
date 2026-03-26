import React from "react";
import { motion } from "motion/react";
import { ExternalLink, CheckCircle, ArrowUpRight } from "lucide-react";

const BrokerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5 -skew-y-3 origin-right" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[40px] p-8 md:p-16 border-gold/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] -mr-32 -mt-32" />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Elevate Your Trading with Our{" "}
                <span className="text-gold">Recommended Broker</span>
              </h2>
              <p className="text-white/60 mb-8 text-lg leading-relaxed">
                Joining our recommended broker through CSS Traders gives you
                access to exclusive benefits, lower spreads, and our dedicated
                community support.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Ultra-low spreads starting from 0.24 pips",
                  "Fast execution with no requotes",
                  "Exclusive CSS Traders education materials",
                  "Priority support for our community members",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                      <CheckCircle size={14} className="text-gold" />
                    </div>
                    <span className="text-white/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://vtm.pro/NJB3ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                >
                  Open Account Now <ExternalLink size={18} />
                </a>

                <a
                  href="https://www.vtmarkets.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  View Broker Details
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80"
                  alt="Broker Platform"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-dark-soft border border-gold/50 p-6 rounded-2xl shadow-2xl z-20"
              >
                <div className="text-gold text-3xl font-bold mb-1">0.24</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                  Min Spreads
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrokerSection;

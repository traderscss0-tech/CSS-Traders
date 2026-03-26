import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const contentMap: any = {
    "forex-education": {
      title: "Forex Education",
      mainDesc: "Master institutional trading concepts from zero to pro.",
      learnings: ["Institutional Order Flow", "Liquidity Concepts", "Market Structure Masterclass"]
    },
    "live-analysis": {
      title: "Live Chart Analysis",
      mainDesc: "Watch professionals analyze the market in real-time.",
      learnings: ["Live Session Participation", "Daily Bias Identification", "Trade Logic Breakdown"]
    },
    "trading-signals": {
      title: "Trading Signals",
      mainDesc: "Receive high-probability trade alerts with logic.",
      learnings: ["Real-time Signal Execution", "Risk Management Rules", "Detailed Setup Explanations"]
    },
    "broker-guidance": {
      title: "Broker Guidance",
      mainDesc: "Find the safest and most reliable platforms.",
      learnings: ["Regulated Broker Lists", "Account Setup Masterclass", "Safe Deposit Methods"]
    }
  };

  const data = contentMap[slug as string];
  if (!data) return <div className="text-white text-center pt-40">Service Not Found!</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="text-gold inline-flex items-center gap-2 mb-10"><ArrowLeft size={20}/> Back to Home</Link>
        <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
        <p className="text-white/60 text-lg leading-relaxed mb-12">{data.mainDesc}</p>
        <div className="glass-card p-10 rounded-3xl border border-white/5 bg-white/5">
           <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"><TrendingUp className="text-gold"/> Details</h2>
           <div className="grid md:grid-cols-2 gap-4">
             {data.learnings.map((l: string) => (
               <div key={l} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                 <CheckCircle2 className="text-gold" size={18}/> {l}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
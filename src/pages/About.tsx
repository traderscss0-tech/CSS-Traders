import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Users, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Mission: <span className="text-gold italic">Integrity</span> <br />in Trading
          </motion.h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            We are a team of professional traders dedicated to raising the standard of forex education in South Asia. No hype, just real skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="aspect-video rounded-[40px] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Our Office" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-gold/30">
              <div className="text-gold text-2xl font-bold">Est. 2021</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Why We Started CSS Traders</h2>
            <p className="text-white/50 leading-relaxed">
              The forex market is often portrayed as a "get rich quick" scheme. We saw too many beginners losing their hard-earned capital due to lack of proper education and misleading signals. 
            </p>
            <p className="text-white/50 leading-relaxed">
              CSS Traders was built to change that. We focus on institutional price action, risk management, and the psychological discipline required to survive and thrive in the markets.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Active Students', value: '2,500+' },
                { label: 'Live Sessions', value: '500+' },
                { label: 'Success Rate', value: '85%' },
                { label: 'Support Hours', value: '24/7' }
              ].map((stat, i) => (
                <div key={i} className="glass-card p-4 rounded-2xl border-white/5">
                  <div className="text-gold text-2xl font-bold">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Shield className="w-10 h-10 text-gold" />, 
              title: 'Transparency', 
              desc: 'We show real results and real losses. Trading is a business, not a gamble.' 
            },
            { 
              icon: <Target className="text-gold w-10 h-10" />, 
              title: 'Precision', 
              desc: 'Our analysis is based on high-probability institutional order flow concepts.' 
            },
            { 
              icon: <Users className="text-gold w-10 h-10" />, 
              title: 'Community', 
              desc: 'Join a network of like-minded traders supporting each other daily.' 
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-[40px] border-white/5 hover:border-gold/30 transition-all">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;

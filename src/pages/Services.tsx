import React from 'react';
import ServicesComponent from '../components/Services';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Professional <span className="text-gold italic">Trading</span> <br />Curriculum
          </motion.h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to take you from market basics to institutional analysis.
          </p>
        </div>

        <ServicesComponent />

        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">The CSS Traders <br />Learning Path</h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Foundations', desc: 'Master the basics of pips, leverage, and market structure.' },
                { step: '02', title: 'Technical Mastery', desc: 'Learn supply & demand, liquidity, and trend analysis.' },
                { step: '03', title: 'Risk Protocol', desc: 'Develop a professional risk management framework.' },
                { step: '04', title: 'Live Execution', desc: 'Apply your skills in real-time market conditions.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="text-gold font-bold text-2xl opacity-30 group-hover:opacity-100 transition-opacity">{item.step}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-10 rounded-[40px] border-gold/20">
            <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
            <p className="text-white/50 mb-8">Join our next intake and get access to our full curriculum and community.</p>
            <ul className="space-y-4 mb-10">
              {['Lifetime Access', 'Weekly Live Calls', 'Private Discord Group', 'Direct Mentorship'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-gold" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gold text-dark font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gold-light transition-all">
              Enroll Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;

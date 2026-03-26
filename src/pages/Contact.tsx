import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Get in <span className="text-gold italic">Touch</span>
            </motion.h1>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Have questions about our courses or broker partnership? Our team is here to help you on your trading journey.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Mail className="text-gold" />, title: 'Email Us', detail: 'support@csstraders.com' },
                { icon: <Phone className="text-gold" />, title: 'Call Us', detail: '+91 98765 43210' },
                { icon: <MapPin className="text-gold" />, title: 'Visit Us', detail: 'Financial District, Mumbai, India' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                    <p className="text-xl font-bold">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 rounded-[40px] border-gold/20"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none transition-colors appearance-none">
                  <option>Forex Education</option>
                  <option>Broker Partnership</option>
                  <option>Chart Analysis</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-gold text-dark font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { Mail, MapPin, Send, Clock, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

const WhatsAppIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Pro Membership Access",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", msg: "" }); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.msg) setStatus({ type: "", msg: "" }); // টাইপ করার সময় এরর মেসেজ সরিয়ে ফেলা
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", msg: "Please fill all fields first." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "loading", msg: "Sending Email..." });

    const submitData = new FormData();
    submitData.append("access_key", "d64235e9-9a55-4364-b316-c1eef28f8ba2"); 
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("topic", formData.topic);
    submitData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", msg: "Email Sent Successfully!" });
        setFormData({ name: "", email: "", topic: "Pro Membership Access", message: "" });
      } else {
        setStatus({ type: "error", msg: "Failed: " + data.message });
      }
    } catch (error) {
      setStatus({ type: "error", msg: "Network error. Use WhatsApp instead." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setStatus({ type: "error", msg: "Enter Name and Message for WhatsApp." });
      return;
    }

    const phoneNumber = "919832797759";
    const whatsappMessage = `*New Website Inquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Topic:* ${encodeURIComponent(formData.topic)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // মোবাইলে Redirection স্মুথ করার জন্য
    setStatus({ type: "success", msg: "Redirecting to WhatsApp..." });
    setTimeout(() => {
        window.location.href = whatsappURL; 
    }, 500);
  };

  return (
    <main className="pt-24 md:pt-32 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Get in <span className="text-gold italic">Touch</span>
            </motion.h1>
            
            <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Have questions about our <span className="text-white font-bold">Pro Membership</span>, <span className="text-white font-bold">Real-time Trade Calls</span>, or <span className="text-white font-bold">1-on-1 Mentorship</span>?
            </p>

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs md:text-sm font-medium mb-10"
            >
              <Clock size={16} />
              <span>Response: Instant on WhatsApp</span>
            </motion.div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="text-gold" size={20} />, title: "Email Us", detail: "traderscss0@gmail.com", link: "mailto:traderscss0@gmail.com" },
                { icon: <WhatsAppIcon size={22} className="text-gold" />, title: "WhatsApp & Call", detail: "+91 98327 97759", link: "https://wa.me/919832797759" },
              ].map((item, i) => (
                <a 
                  href={item.link} 
                  key={i} 
                  className="flex gap-4 md:gap-6 items-center group bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                    <p className="text-base md:text-xl font-bold text-white truncate">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 md:p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-gold/50 focus:outline-none text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-gold/50 focus:outline-none text-white text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Topic of Interest</label>
                <div className="relative">
                    <select name="topic" value={formData.topic} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 focus:border-gold/50 focus:outline-none text-white/80 appearance-none text-sm cursor-pointer">
                        <option className="bg-zinc-900">Pro Membership Access</option>
                        <option className="bg-zinc-900">Mentorship Program</option>
                        <option className="bg-zinc-900">Live Trade Calls Support</option>
                        <option className="bg-zinc-900">Copy Trading</option>
                        <option className="bg-zinc-900">Other Queries</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">▼</div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-gold/50 focus:outline-none text-white text-sm resize-none"></textarea>
              </div>

              {/* Status Message */}
              <AnimatePresence mode="wait">
                {status.msg && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`flex items-center gap-2 p-3 rounded-lg text-xs font-medium ${
                            status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : 
                            status.type === "error" ? "bg-red-500/10 text-red-400 border border-red-500/20" : 
                            "bg-gold/10 text-gold border border-gold/20"
                        }`}
                    >
                        {status.type === "success" ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                        {status.msg}
                    </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Email"} <Send size={16} />
                </button>

                <button 
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                >
                  WhatsApp <WhatsAppIcon size={18} />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[9px] text-white/20 uppercase tracking-[2px] pt-4">
                <ShieldCheck size={12} />
                <span>Secure & Professional</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
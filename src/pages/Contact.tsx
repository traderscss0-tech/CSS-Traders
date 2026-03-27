import React, { useState } from "react";
import { motion } from "framer-motion"; 
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

  const [status, setStatus] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all fields first.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d64235e9-9a55-4364-b316-c1eef28f8ba2",
          ...formData
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Successfully Sent!");
        setFormData({ name: "", email: "", topic: "Pro Membership Access", message: "" });
      } else {
        setStatus("Error sending email.");
      }
    } catch (err) {
      setStatus("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setStatus("Enter Name and Message first.");
      return;
    }

    const phoneNumber = "919832797759";
    const text = `*New Inquiry*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Topic:* ${encodeURIComponent(formData.topic)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    
    // মোবাইলের জন্য সবথেকে নিরাপদ রিডাইরেকশন পদ্ধতি
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    
    setStatus("Opening WhatsApp...");
    window.location.assign(whatsappURL);
  };

  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start text-left">
          
          {/* Left Content */}
          <div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Get in <span className="text-gold italic">Touch</span>
            </motion.h1>
            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                Have questions about our <span className="text-white">Pro Membership</span> or <span className="text-white">Mentorship</span>? We respond fast.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 max-w-sm">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold"><Mail size={20}/></div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-bold">traderscss0@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 max-w-sm">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center text-[#25D366]"><WhatsAppIcon size={20}/></div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-white font-bold">+91 98327 97759</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-[30px] border border-white/10 shadow-2xl">
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold/50 outline-none text-white text-sm" />
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold/50 outline-none text-white text-sm" />
              </div>
              
              <select name="topic" value={formData.topic} onChange={handleChange} className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 focus:border-gold/50 outline-none text-white text-sm">
                <option>Pro Membership Access</option>
                <option>Mentorship Program</option>
                <option>Other Queries</option>
              </select>

              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your Message..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-gold/50 outline-none text-white text-sm resize-none"></textarea>

              {status && (
                <div className={`p-3 rounded-lg text-xs text-center font-bold ${status.includes("Success") ? "bg-green-500/10 text-green-500" : "bg-gold/10 text-gold"}`}>
                  {status}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="button" 
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  {isSubmitting ? "..." : "SEND EMAIL"} <Send size={16} />
                </button>

                <button 
                  type="button" 
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-[#25D366] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  WHATSAPP <WhatsAppIcon size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
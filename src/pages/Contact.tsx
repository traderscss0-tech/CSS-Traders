import React, { useState } from "react";
import { motion } from "framer-motion"; 
// ChevronDown আইকনটি ইমপোর্ট করলাম
import { Mail, MapPin, Send, Clock, CheckCircle2, ShieldCheck, ChevronDown } from "lucide-react";

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
    setStatus("Sending Email...");

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
        setStatus("Email Sent Successfully!");
        setFormData({ name: "", email: "", topic: "Pro Membership Access", message: "" });
      } else {
        setStatus("Error: " + data.message);
      }
    } catch (error) {
      setStatus("Network error. Please try WhatsApp.");
    }
    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      setStatus("Enter your Name and Message for WhatsApp.");
      return;
    }

    const phoneNumber = "919832797759";
    const whatsappMessage = `*New Website Inquiry*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Topic:* ${encodeURIComponent(formData.topic)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message)}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;
    
    setStatus("Redirecting to WhatsApp...");
    setTimeout(() => {
        window.location.assign(whatsappURL);
    }, 300);
  };

  return (
    <main className="pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-left">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Get in <span className="text-gold italic">Touch</span>
            </motion.h1>
            
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Have questions about our <span className="text-white font-bold">Pro Membership</span>, <span className="text-white font-bold">Real-time Trade Calls</span>, or <span className="text-white font-bold">1-on-1 Mentorship</span>? Our team is here to guide you.
            </p>

            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-12 animate-pulse"
            >
              <Clock size={16} />
              <span>Response Time: Instant on WhatsApp / 2h on Email</span>
            </motion.div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-gold" size={22} />, title: "Email Us", detail: "traderscss0@gmail.com", link: "mailto:traderscss0@gmail.com" },
                { icon: <WhatsAppIcon size={22} className="text-gold" />, title: "WhatsApp & Call", detail: "+91 98327 97759", link: "https://wa.me/919832797759" },
                { icon: <MapPin className="text-gold" size={22} />, title: "Our Presence", detail: "Global Support from India", link: "#" },
              ].map((item, i) => (
                <a 
                  href={item.link} 
                  key={i} 
                  target={item.title.includes("WhatsApp") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex gap-6 items-center group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">{item.title}</h4>
                    <p className="text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Dual Action Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-gold/20 bg-white/5 backdrop-blur-md shadow-2xl mt-8 lg:mt-0"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none text-white transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none text-white transition-colors text-sm" />
                </div>
              </div>

              {/* DROPDOWN WITH ARROW SIGN */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Topic of Interest</label>
                <div className="relative group">
                    <select 
                        name="topic" 
                        value={formData.topic} 
                        onChange={handleChange} 
                        className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none text-white/80 appearance-none text-sm cursor-pointer transition-all pr-12"
                    >
                        <option value="Pro Membership Access">Pro Membership Access</option>
                        <option value="Mentorship Program">Mentorship Program</option>
                        <option value="Live Trade Calls Support">Live Trade Calls Support</option>
                        <option value="Copy Trading">Copy Trading</option>
                        <option value="Other Queries">Other Queries</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-focus-within:text-gold transition-colors">
                        <ChevronDown size={20} />
                    </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-gold/50 focus:outline-none text-white transition-colors resize-none text-sm"></textarea>
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <button 
                  type="button"
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-gold/10 disabled:opacity-50 active:scale-95 text-sm uppercase tracking-wider"
                >
                  {isSubmitting ? "Sending..." : "Send Email"} <Send size={18} />
                </button>

                <button 
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full bg-[#25D366] text-white font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all active:scale-95 border border-[#25D366]/20 text-sm uppercase tracking-wider"
                >
                  WhatsApp <WhatsAppIcon size={20} />
                </button>
              </div>

              {/* Status Display */}
              {status && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className={`text-center p-4 rounded-xl text-xs font-bold uppercase tracking-widest ${status.includes("Success") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-gold/10 text-gold border border-gold/20"}`}
                >
                  {status.includes("Successfully") && <CheckCircle2 size={16} className="inline mr-2" />}
                  {status}
                </motion.div>
              )}

              <div className="flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-[2px] pt-4">
                <ShieldCheck size={12} />
                <span>Secure & Professional Communication</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
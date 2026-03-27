import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

// Official WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Official Telegram SVG Icon
const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0Zm5.206 16.561c-.199.336-.583.513-1.055.405-.624-.143-4.305-1.458-6.195-2.115-.815-.285-1.571-.564-2.271-.837-.7-.273-1.2-.468-1.5-.585-.504-.197-.83-.454-.83-.81 0-.36.327-.616.832-.814.757-.297 5.86-2.316 7.644-3.033.435-.175.768-.31.999-.405.231-.095.53-.19.86-.19s.63.095.83.285c.2.19.297.47.297.81 0 .34-.145.864-.436 1.73-.29 1.458-1.127 5.174-1.185 5.564Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-1 group">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center ">
                <img
                  src="/nav-logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-tighter text-white leading-none transition-colors">
                  CSS TRADERS
                </span>
                <span className="text-[10px] text-gold font-medium tracking-[0.2em] uppercase">
                  Trade Smart
                </span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed text-left">
              Empowering South Asian traders with professional education,
              real-time analysis, and institutional-grade trading strategies.
            </p>
            
            <div className="flex gap-4">
              {[
                { 
                  name: "Instagram", 
                  icon: <Instagram size={18} />, 
                  href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=i4wi2ic" 
                },
                { 
                  name: "WhatsApp", 
                  icon: <WhatsAppIcon />, 
                  href: "https://wa.me/919832797759" 
                },
                { 
                  name: "Facebook", 
                  icon: <Facebook size={18} />, 
                  href: "https://www.facebook.com/profile.php?id=61577422409785" 
                },
                { 
                  name: "Telegram", 
                  icon: <TelegramIcon />, 
                  href: "#" // এখানে আপনার টেলিগ্রাম লিঙ্ক বসাতে পারেন
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          
          <div className="text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white/50 text-sm hover:text-gold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Forex Education",
                "Copy Trading",
                "Chart Analysis",
                "Trading Signals",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 text-sm hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=traderscss0@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors group"
                >
                  <Mail size={16} className="text-gold" />
                  traderscss0@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919832797759"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  +91 98327 97759
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors"
                >
                  <MapPin size={16} className="text-gold" />
                  Global Support India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
         
          <div className="bg-white/5 p-6 rounded-2xl mb-8 border border-gold/20 shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)]">
            <h5 className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 text-left">
              Risk Disclaimer
            </h5>
            <p className="text-[12px] text-white/50 leading-loose uppercase text-left">
              Forex trading involves a high level of risk and may not be
              suitable for all investors. Due to leverage, you can lose more
              than your initial investment. Always trade with money you can
              afford to lose. Market conditions can change quickly, and past
              performance does not guarantee future results. All trading
              decisions are made at your own risk and responsibility. This
              content is provided for educational purposes only.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 text-left md:text-center">
            <p>
              © 2026{" "}
              <a href="#" className="hover:text-gold">
                CSS Traders.
              </a>{" "}
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-gold">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
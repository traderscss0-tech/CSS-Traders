import React from "react";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

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
            <p className="text-white/50 text-sm leading-relaxed">
              Empowering South Asian traders with professional education,
              real-time analysis, and institutional-grade trading strategies.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
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

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "Forex Education",
                "Chart Analysis",
                "Trading Signals",
                "Broker Guidance",
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

          <div>
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
                  href="tel:+910000000000"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  +91 00000 00000
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
                  India
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12">
          <div className="bg-white/5 p-6 rounded-2xl mb-8 border border-gold/20 shadow-[0_0_50px_-12px_rgba(212,175,55,0.3)]">
            <h5 className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Risk Disclaimer
            </h5>
            <p className="text-[12px] text-white/50 leading-loose uppercase">
              Forex trading involves a high level of risk and may not be
              suitable for all investors. Due to leverage, you can lose more
              than your initial investment. Always trade with money you can
              afford to lose. Market conditions can change quickly, and past
              performance does not guarantee future results. You should fully
              understand the risks involved before trading. All trading
              decisions are made at your own risk and responsibility.This
              content is provided for educational purposes only.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
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

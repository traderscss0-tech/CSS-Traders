import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  BarChart2,
  Bell,
  ShieldCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      slug: "forex-education",
      title: "Forex Education",
      tag: "Academy",
      desc: "Master the art of institutional trading and bank levels.",
      icon: <BookOpen className="text-gold" size={24} />,
    },
    {
      slug: "live-analysis",
      title: "Live Chart Analysis",
      tag: "Real-time",
      desc: "Watch our mentors analyze the live market sessions.",
      icon: <BarChart2 className="text-gold" size={24} />,
    },
    {
      slug: "trading-signals",
      title: "Trading Signals",
      tag: "High Probability",
      desc: "Receive real-time trade alerts with precise entry points.",
      icon: <Bell className="text-gold" size={24} />,
    },
    {
      slug: "broker-guidance",
      title: "Broker Guidance",
      tag: "Safety First",
      desc: "Navigate the complex world of brokers with our advice.",
      icon: <ShieldCheck className="text-gold" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Choose the right path for your trading journey with our expert
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-[30px] border border-white/10 hover:border-gold/50 transition-all group"
            >
              <div className="mb-6">{service.icon}</div>
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                {service.tag}
              </span>
              <h3 className="text-xl font-bold text-white mt-2 mb-4">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                {service.desc}
              </p>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-gold text-sm font-bold group-hover:gap-4 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

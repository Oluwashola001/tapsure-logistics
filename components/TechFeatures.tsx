"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Ensure Variants is imported
import { MapPin, Bell, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <MapPin size={32} />,
    title: "Live GPS Tracking",
    desc: "Watch your delivery move in real-time on our interactive map. No more guessing games.",
    delay: 0.2
  },
  {
    icon: <Bell size={32} />,
    title: "Instant Updates",
    desc: "Receive automated SMS and push notifications the moment your package status changes.",
    delay: 0.4
  },
  {
    icon: <Clock size={32} />,
    title: "Smart ETAs",
    desc: "Our AI predicts traffic patterns to give you precise arrival times down to the minute.",
    delay: 0.6
  },
];

// Animation variants for the container (stagger effect)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Animation variants for individual items (spring effect)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring" as const, // <--- THE CRITICAL FIX: Add 'as const'
      stiffness: 50, 
      damping: 20 
    }
  },
};

export default function TechFeatures() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Ambience (Blue Glow) */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Total Visibility. <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Zero Uncertainty.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We have removed the "black box" of logistics. From pickup to drop-off, 
            you see exactly what we see.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative bg-white/5 border border-white/10 p-10 rounded-3xl group overflow-hidden"
            >
              {/* Hover Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/0 group-hover:to-blue-500/5 transition-all duration-500" />
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors cursor-pointer">
                <span>See how it works</span>
                <ArrowRight size={16} className="-ml-1 group-hover:ml-1 transition-all" />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
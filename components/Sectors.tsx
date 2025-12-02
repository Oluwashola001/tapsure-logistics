"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Briefcase, HeartPulse, Utensils, ArrowRight, Shirt, Truck } from "lucide-react";

export default function Sectors() {
  // REDUCED TO THE "ESSENTIAL 6" FOR A CLEANER GRID
  const sectors = [
    {
      icon: <ShoppingBag size={28} />,
      title: "E-Commerce",
      desc: "Instant delivery for online vendors & Instagram stores.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50"
    },
    {
      icon: <Briefcase size={28} />,
      title: "Corporate",
      desc: "Secure document handling for offices and firms.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Medical",
      desc: "Cold-chain ready for pharmacies and labs.",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500/50"
    },
    {
      icon: <Utensils size={28} />,
      title: "Food & Groceries",
      desc: "Rapid dispatch for restaurants and meal kits.",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50"
    },
    {
      icon: <Shirt size={28} />,
      title: "Retail & Fashion",
      desc: "Stock replenishment for fashion outlets & boutiques.",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "group-hover:border-pink-500/50"
    },
    {
      icon: <Truck size={28} />,
      title: "Industrial",
      desc: "Reliable movement for parts, tools, and machinery.",
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "group-hover:border-yellow-500/50"
    },
  ];

  // Logic for Mobile: Duplicate the list multiple times to simulate "Infinite" continuous swiping
  const mobileSectors = [...sectors, ...sectors, ...sectors];

  // Reusable Card Component
  const SectorCard = ({ item, index }: { item: typeof sectors[0], index: number }) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 6) * 0.1, duration: 0.5 }}
      // INTERACTION: Scale up on hover (desktop) and tap (mobile)
      whileHover={{ scale: 1.03, y: -5, zIndex: 10 }} // Reduced scale slightly for wider cards
      whileTap={{ scale: 1.03, y: -5, zIndex: 10 }}
      className={`
        min-w-[280px] md:min-w-0 snap-center
        relative p-8 rounded-3xl 
        bg-white/5 backdrop-blur-sm border border-white/10 
        hover:bg-white/10 transition-colors duration-300 group cursor-pointer
        ${item.border} hover:shadow-2xl hover:shadow-blue-900/10
        flex flex-col h-full
      `}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color} ring-1 ring-white/5`}>
        {item.icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">
        {item.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {item.desc}
      </p>

      <div className="flex items-center gap-2 text-xs font-bold text-white/50 group-hover:text-white transition-colors">
        <span>Learn more</span>
        <ArrowRight size={14} className="-ml-1 group-hover:ml-0 transition-all" />
      </div>
    </motion.div>
  );

  return (
    <section className="bg-black py-20 relative border-t border-white/10 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Speed & Scale.</span>
          </h2>
        </motion.div>

        {/* --- MOBILE VIEW: Continuous Horizontal Swipe (Looped Data) --- */}
        <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar">
          {mobileSectors.map((item, index) => (
            <SectorCard key={`mobile-${index}`} item={item} index={index} />
          ))}
        </div>

        {/* --- DESKTOP VIEW: Clean 3-Column Grid (Single Data Set) --- 
            CHANGED: lg:grid-cols-3 (was 4). 
            This creates wider cards that fill the space beautifully.
        */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((item, index) => (
            <SectorCard key={`desktop-${index}`} item={item} index={index} />
          ))}
        </div>

        {/* Mobile Swipe Hint Gradient */}
        <div className="md:hidden absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      </div>
    </section>
  );
}
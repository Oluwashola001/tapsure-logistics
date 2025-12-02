"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroVideo() {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.bfldr.com/BP2LMQ0A/at/p6tmr4tm9g3hc35888xqrgx/UF-dataViz.mp4"
          type="video/mp4"
        />
      </video>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />

      {/* CONTENT CONTAINER */}
      {/* 1. justify-center: Centers content vertically on mobile.
          2. px-6: Adds side padding.
      */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SPACING FIX: 
           - Mobile: mt-0 (Let justify-center handle it).
           - Desktop: md:mt-32 (Keep your requested desktop shift).
        */}
        <div className="w-full text-left mt-16 md:mt-24"> 
          
          {/* MOBILE LABEL - Increased spacing below to mb-6 */}
          <p className="block md:hidden text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 border-l-2 border-blue-500 pl-3">
            Logistics Reimagined
          </p>

          {/* HEADLINE - Increased spacing below to mb-8 to fill space */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 text-white max-w-4xl"
          >
            Smarter <span className="text-blue-500">Logistics</span> <br className="hidden md:block" />
            for Faster Delivery.
          </motion.h1>

          {/* SUBTEXT - Increased spacing below to mb-12 to fill space */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm md:text-lg text-slate-300 max-w-xs md:max-w-xl mb-12 font-light leading-relaxed pl-1"
          >
            Experience the new standard of delivery. Seamless, transparent, and built for your business.
          </motion.p>

          {/* TRACKING BAR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-3 max-w-md pl-1"
          >
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Tracking Number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full bg-transparent border-b border-slate-500 text-white text-base md:text-lg py-3 focus:outline-none focus:border-white transition-colors placeholder:text-slate-500"
              />
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 md:p-4 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
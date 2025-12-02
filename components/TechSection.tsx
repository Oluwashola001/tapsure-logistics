"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TechSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect: The video moves slightly slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  // Scale effect: Subtle zoom out as you scroll past
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.95]);

  return (
    // CHANGED: Removed fixed height (h-[85vh]) and added 'aspect-video'.
    // This forces the container to be 16:9 ratio, preventing side cropping.
    <section ref={containerRef} className="relative w-full aspect-video bg-black overflow-hidden border-t border-white/10">
      
      {/* VIDEO CONTAINER 
        - Full width/height
        - Cinematic Motion effects
      */}
      <motion.div 
        style={{ y, scale }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" /> {/* Cinematic dimmer */}
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://stream.mux.com/o02TiqsHipkzxWRGtPXaFoj7S00o02HYuke/high.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Optional: Minimalist label in corner */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-mono text-blue-200 uppercase tracking-widest">
          System Live
        </span>
      </motion.div>

      {/* Top & Bottom Fades for seamless integration */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />

    </section>
  );
}
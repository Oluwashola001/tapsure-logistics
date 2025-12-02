"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Ensure Variants is imported if not already
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AppExperienceFinal() {
  // WhatsApp Configuration
  const whatsappUrl = "https://wa.me/2348123385928?text=Hello,%20Tapsure,%20I%20need...";

  // Animation Variants
  const containerVariants: Variants = { // Added explicit type to container
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = { // Added explicit type to item
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const // <--- THE FIX
      }
    },
  };

  return (
    <section className="bg-black relative border-t border-white/10 min-h-screen md:h-[800px] overflow-hidden pt-0 pb-12 md:pb-0">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto h-full px-6 md:px-12 relative z-20 flex flex-col md:flex-row"
      >
        
        {/* LEFT: The Hand Mockup Container
            - Mobile: Order 1. Added '-ml-12' (Shifted further left).
            - Desktop: Order 0.
        */}
        <div className="-ml-6 relative order-1 md:order-none w-full h-[500px] md:absolute md:bottom-0 md:left-0 md:h-full md:w-[70%] z-10 pointer-events-none">
          <motion.div 
            variants={itemVariants}
            className="relative w-full h-full"
          >
            <Image 
              src="/hand-mockupv2.png" 
              alt="Tapsure Mobile App"
              fill
              className="object-cover object-top md:object-contain md:object-left-bottom drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* RIGHT: Text Details */}
        <motion.div 
          variants={itemVariants}
          className="relative order-2 md:order-none z-20 flex flex-col justify-center h-full w-full md:w-[40%] ml-auto mt-8 md:mt-0 md:pt-32 text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Logistics in <br />
            <span className=" text-blue-500">
              Your Pocket.
            </span>
          </h2>
          
          <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
            Book, pay, and track instantly. Enterprise power in your hand.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-10">
            {[
              "Instant Bank Transfers",
              "Real-time Rider Tracking",
              "Automated Digital Receipts"
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-center gap-3 text-slate-300 text-sm md:text-base"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <CheckCircle2 size={12} />
                </div>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* WHATSAPP LINKED BUTTON (Converted from button to motion.a) */}
          <motion.a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5 flex items-center gap-2 group w-fit cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

    </section>
  );
}
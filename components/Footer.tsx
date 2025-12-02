"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp Link Configuration
  // 1. Number: 2348123385928 (International format without +)
  // 2. Text: "Hello, Tapsure, I need..." (URL Encoded)
  const whatsappLink = "https://wa.me/2348123385928?text=Hello,%20Tapsure,%20I%20need...";

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      {/* --- STICKY BACK TO TOP BUTTON --- */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 md:bottom-12 md:right-12 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-600/30 border border-white/10 hover:bg-blue-500 transition-colors"
            aria-label="Back to Top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* --- TOP: THE CALL TO ACTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to move <br />
              <span className="text-blue-500">faster?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              Join the hundreds of businesses trusting Tapsure for their last-mile delivery needs.
            </p>
          </div>

          <div className="flex-shrink-0">
            {/* CHANGED: Replaced <button> with <a> tag to link to WhatsApp */}
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center gap-3 group"
            >
              <span>Get a Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/10 w-full my-16 md:my-24" />

        {/* --- BOTTOM: LINKS & CONTACT --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            
            {/* UPDATED: ICON + TEXT LAYOUT 
               This ensures perfect visibility and alignment.
            */}
            <div className="flex items-center gap-3">
               <div className="relative w-10 h-10">
                  {/* Using the Icon only image. Ensure 'icon.png' or a square version of your logo exists in public folder */}
                  <Image 
                    src="/icon.png" 
                    alt="Tapsure Logo" 
                    fill 
                    className="object-contain" 
                  />
               </div>
               <h3 className="text-white font-bold text-2xl tracking-tight">
                 TAPSURE
               </h3>
            </div>
            
            <p className="text-slate-500 text-sm leading-relaxed">
              Redefining urban logistics with speed, technology, and reliability.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['About Us', 'Careers', 'Drivers', 'Press'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {['Same-Day Delivery', 'Corporate Logistics', 'E-commerce', 'International'].map((item) => (
                <li key={item}><a href="#" className="hover:text-blue-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (Using your real details) */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 flex-shrink-0 mt-1" />
                <span>Osogbo, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:tapsureng@gmail.com" className="hover:text-white transition-colors">tapsureng@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                {/* Also making the phone number clickable for WhatsApp or Dialing */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +234 812 338 5928
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2025 Tapsure Logistics Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
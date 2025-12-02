"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp Configuration
  const whatsappUrl = "https://wa.me/2348123385928?text=Hello,%20Tapsure,%20I%20need...";

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "Tracking", href: "#" },
    { name: "About", href: "#" },
    { name: "Company", href: "#" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const, staggerChildren: 0.1 }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
        {/* The Glass Pill Container */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 md:px-6 md:py-3 flex items-center justify-between w-full max-w-4xl shadow-2xl relative z-50">
          
          {/* BRAND AREA: Blue Square + Text */}
          <div className="flex items-center gap-2">
            {/* The Blue Geometric Accent */}
            <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-sm shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            
            <span className="text-white font-bold tracking-tight text-lg md:text-xl">
              TAPSURE
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300 ml-auto mr-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Hamburger */}
          <div className="flex items-center gap-3">
            {/* DESKTOP WHATSAPP BUTTON */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors"
            >
              BOOK NOW
            </a>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-1 hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-32 px-6 md:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  variants={linkVariants}
                  className="text-4xl text-white font-bold tracking-tighter hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              variants={linkVariants}
              className="mt-auto mb-12 w-full space-y-4"
            >
               <hr className="border-white/10 w-full" />
               <div className="flex justify-between text-slate-400 text-sm px-2">
                  <span>© 2025 Tapsure</span>
                  <span>Osogbo, NG</span>
               </div>
               
               {/* MOBILE MENU WHATSAPP BUTTON */}
               <a 
                 href={whatsappUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block text-center bg-blue-600 active:bg-blue-700 text-white py-5 rounded-2xl text-xl font-bold w-full shadow-lg shadow-blue-900/20"
               >
                Book a Rider
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
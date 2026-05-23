"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; 
import { ScrambleText } from "../ui/ScrambleText";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false); 
  const [isCentered, setIsCentered] = useState(false);

  // THIS IS THE LIST OF LINKS
  const navItems = [
    { name: "About", link: "/#about" },
    { name: "Services", link: "/#services" },
    { name: "Projects", link: "/#projects" },
    { name: "Education", link: "/#certifications" },
    { name: "Contact", link: "/#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollY.getPrevious()!;
      
      // Determine if navbar should be centered (after scrolling past the hero video)
      const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 400;
      setIsCentered(current > threshold);

      if (current < 50) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-6 z-50 transition-all duration-500",
          isCentered 
            ? "inset-x-0 mx-auto w-[95%] md:w-fit" 
            : "right-4 md:right-10 w-auto",
          "border border-white/[0.1] rounded-full",
          "bg-black/50 backdrop-blur-md",
          "shadow-lg px-6 py-3 flex items-center justify-between md:gap-6"
        )}
      >
        {/* 1. LOGO / HOME */}
        <Link href="/" className="flex items-center justify-center p-1">
          {/* UPDATED: Changed text-sm to text-base */}
          <ScrambleText 
            text="Home" 
            className="text-zinc-400 font-medium text-base hover:text-white transition-colors cursor-pointer" 
          />
        </Link>

        {/* 2. DESKTOP LINKS */}
        {/* UPDATED: Changed text-sm to text-base */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium text-zinc-400">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <ScrambleText 
                text={item.name} 
                className="hover:text-white transition-colors py-1"
              />
            </Link>
          ))}
        </div>

        {/* 3. DESKTOP BUTTON (Hidden on Mobile) */}
        <div className="hidden md:flex items-center">
          <Link href="https://www.linkedin.com/in/ammar-ahmad2408/" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            >
              Let's Talk
            </motion.button>
          </Link>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON (Visible ONLY on Mobile) */}
        <button 
          aria-label="Open Menu"
          onClick={() => setIsOpen(true)} 
          className="md:hidden text-zinc-300 hover:text-white p-1"
        >
          <Menu className="w-5 h-5" />
        </button>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center border-l border-white/5"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

            {/* CLOSE BUTTON */}
            <button
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-zinc-400 hover:text-white p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* VERTICAL LINKS LOOP */}
            <div className="flex flex-col items-center gap-4 w-full max-w-xs px-6 relative z-10">
            {navItems.map((item, i) => (
              <Link key={item.name} href={item.link} onClick={() => setIsOpen(false)} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="w-full text-center py-4 text-3xl font-bold text-zinc-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300 border border-transparent hover:border-white/10"
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}

              {/* Mobile CTA */}
              <Link href="https://www.linkedin.com/in/ammar-ahmad2408/" target="_blank" onClick={() => setIsOpen(false)}>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 px-10 py-4 rounded-full bg-white text-black text-xl font-bold"
                  >
                    Let's Talk
                  </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
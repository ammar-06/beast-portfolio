"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Download, Linkedin, Play } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Upwork Icon
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className={className} role="img" xmlns="http://www.w3.org/2000/svg" aria-label="Upwork">
    <path d="M746.7 528.6c-28.8 0-56.1-11.1-77-29.2l-35.5 171.2h-84.7l57.4-269.4c-33.1-52.3-51.2-115.6-57.4-160.6h-4.2c-7.6 53.6-40.6 206.8-40.6 206.8-13.4 63.2-70.3 109.1-135.6 109.1-76.7 0-139-62.3-139-139V240.6h84.7v176.9c0 29.9 24.3 54.2 54.3 54.2 25.4 0 47.6-18.1 53-43l41.4-188.1h96.4c4.2 42.4 17.9 95.8 41.4 137.4 30.6 54.3 71.2 84.1 113.6 84.1 30.6 0 55.5-24.7 55.5-55.5s-24.9-55.5-55.5-55.5c-17.9 0-36.6 6.4-55.5 18.9l-36.6-66.8c29.9-18.9 63.2-29.9 97.9-29.9 76.7 0 139 62.3 139 139s-62.3 139-139 139z" />
  </svg>
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Video shrinking
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);

  // Scrolled state logic
  const bgOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.3, 1], ["-20%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.3, 1], [0.95, 1]);
  const photoX = useTransform(scrollYProgress, [0.3, 1], ["20%", "0%"]);
  const photoOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);

  const btnBaseClass = "relative group overflow-hidden flex items-center justify-center gap-2 px-8 h-14 rounded-full font-bold transition-all duration-300 w-full sm:w-auto";

  // Typing effect logic
  const firstName = "Ammar";
  const lastName = "Ahmad";
  const totalChars = firstName.length + lastName.length;
  
  const [visibleCount, setVisibleCount] = useState(1); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Attempt to autoplay with sound on mount
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks autoplay with sound, show our custom play button
          setIsPlaying(false);
        });
      }
    }
  }, []);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const holdTime = 2000;

    const handleTyping = () => {
      if (!isDeleting) {
        if (visibleCount < totalChars) {
          setVisibleCount(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), holdTime);
          return;
        }
      } else {
        if (visibleCount > 1) { 
          setVisibleCount(prev => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [visibleCount, isDeleting, totalChars]);

  const bgTheme = "#0a0a0a"; 

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-black">
      {/* Sticky container holds the layout in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Scrolled background: Dark elegant background from user's old code */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: bgOpacity, backgroundColor: bgTheme }}
        />

        {/* --- INITIAL VIEW: VIDEO --- */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ scale: videoScale, opacity: videoOpacity, y: videoY }}
        >
          {/* Video Container */}
          <div className="relative w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 md:bg-black/40 pointer-events-none"></div>

            {/* Play Button Overlay */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-24 h-24 md:w-32 md:h-32 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center z-40 transition-all border border-white/20 group cursor-pointer"
                >
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white/90 ml-2 group-hover:scale-110 transition-transform" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Video overlay text */}
            <div className="absolute bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-6 md:left-16 lg:left-24 z-20 pointer-events-none">
              <h1 className="text-5xl md:text-8xl lg:text-[7rem] font-extrabold text-white leading-[1.1] mb-2 md:mb-4 drop-shadow-xl tracking-tight">
                Ammar <br /> Ahmad
              </h1>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg md:text-3xl font-bold tracking-[0.1em] uppercase max-w-lg leading-relaxed drop-shadow-md">
                Ai Engineer
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- SCROLLED VIEW: THE USER'S OLD CODE IMPLEMENTATION --- */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between pointer-events-none"
          style={{ opacity: textOpacity }}
        >
          {/* Background image styling from their original code */}
          <motion.div 
            className="absolute -top-24 right-0 w-[80%] md:w-[60%] h-[120%] z-0 pointer-events-none"
            style={{ 
              x: photoX, 
              opacity: photoOpacity,
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)'
            }}
          >
            {/* Desktop Video */}
            <video 
              src="/hero-founder.mp4" 
              autoPlay
              loop
              muted
              playsInline
              className="hidden md:block w-full h-full object-cover object-top opacity-100 brightness-75" 
            />
            {/* Mobile Image */}
            <img 
              src="/hero-founder-mobile.png" 
              alt="Ammar Ahmad" 
              className="block md:hidden w-full h-full object-cover object-top opacity-100 brightness-75" 
            />
            {/* Bottom fade only, side fade is handled by the maskImage above */}
            <div className="absolute bottom-0 w-full h-32 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </motion.div>

          <motion.div 
            className="relative z-20 w-full h-full flex flex-col justify-center pl-6 md:pl-16 lg:pl-20 pr-6"
            style={{ x: textX, scale: textScale }}
          >
            <div className="max-w-4xl pointer-events-auto">
                {/* --- NAME & TYPING EFFECT --- */}
                <div className="relative group w-fit mb-4 min-h-[90px] md:min-h-[120px]">
                    <h1 className="font-extrabold leading-none tracking-tighter uppercase whitespace-nowrap cursor-default flex flex-wrap text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
                      <span className="flex mr-4 text-white group-hover:text-gray-200 transition-colors">
                        {firstName.split("").map((letter, i) => (
                          <span key={i} className={`transition-opacity duration-100 ${i < visibleCount ? "opacity-100" : "opacity-0"}`}>{letter}</span>
                        ))}
                      </span>
                      <span className="flex text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 drop-shadow-lg">
                        {lastName.split("").map((letter, i) => {
                           const globalIndex = i + firstName.length;
                           return <span key={i} className={`transition-opacity duration-100 ${globalIndex < visibleCount ? "opacity-100" : "opacity-0"}`}>{letter}</span>;
                        })}
                      </span>
                    </h1>
                    <motion.div 
                       animate={{ width: `${(visibleCount / totalChars) * 100}%` }}
                       transition={{ type: "tween", ease: "linear", duration: isDeleting ? 0.1 : 0.15 }}
                       className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full opacity-80"
                    ></motion.div>
                </div>

                <div className="mt-6 text-xl md:text-3xl font-bold text-gray-200 max-w-xl leading-tight">
                  Orchestrating Autonomous Workflows. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Powered by AI.</span>
                </div>

                <div className="mt-6 text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
                  <strong className="text-white">AI Engineer</strong> architecting resilient, self-governing systems. Enabling Artificial Intelligence to reason, plan, and execute complex business logic autonomously.
                </div>

                {/* --- BUTTON GRID --- */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pb-10">
                  <a href="#projects" className={`${btnBaseClass} bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                    <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 pointer-events-none"></div>
                    <span className="relative z-10 flex items-center gap-2">
                        View My Work 
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </a>
                  
                  <a href="#contact" className={`${btnBaseClass} text-white border border-white/20 hover:border-white/40`}>
                    <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 pointer-events-none"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <Mail className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" /> 
                      Contact Me
                    </span>
                  </a>

                  <a href="/Ammar_Ahmad_CV.pdf" download className={`${btnBaseClass} text-zinc-300 border border-zinc-700 hover:text-white hover:border-zinc-500`}>
                    <div className="absolute inset-0 bg-zinc-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 pointer-events-none"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                      Download CV
                    </span>
                  </a>

                  <div className={`${btnBaseClass} border border-zinc-700 bg-zinc-900/50`}>
                      <div className="absolute inset-0 bg-zinc-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 pointer-events-none"></div>
                      <div className="relative z-10 flex items-center gap-6">
                        <Link href="https://www.linkedin.com/in/ammar-ahmad2408/" target="_blank" className="text-zinc-400 hover:text-[#0077b5] hover:scale-110 transition-all duration-300">
                          <Linkedin className="w-6 h-6" />
                        </Link>
                        <div className="w-px h-5 bg-zinc-600 pointer-events-none"></div>
                        <Link href="https://www.upwork.com/freelancers/~0196c931ce0a2a9851" target="_blank" className="text-zinc-400 hover:text-[#14a800] hover:scale-110 transition-all duration-300" aria-label="Upwork Profile">
                          <UpworkIcon className="w-8 h-8" />
                        </Link>
                      </div>
                  </div>
                </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
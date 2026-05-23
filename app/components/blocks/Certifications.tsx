// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";
import { educationData, certificationsData } from "@/app/data/certificationsData";
import { ExternalLink, GraduationCap, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// PERFORMANCE FIX: Lightweight easing
const lightAnim = {
  duration: 0.5,
  ease: "easeOut"
};

const Certifications = () => {
  return (
    <section id="certifications" className="pt-40 pb-24 bg-transparent relative overflow-hidden">
      
      {/* SEPARATOR LINE */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }} 
            transition={lightAnim}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Certifications</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ ...lightAnim, delay: 0.2 }}
            className="h-1 bg-blue-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: EDUCATION */}
          <div className="lg:col-span-5 space-y-8">
            <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={lightAnim}
                className="text-2xl font-bold text-white flex items-center gap-2 mb-6"
            >
                <GraduationCap className="text-blue-400" /> Academic Background
            </motion.h3>
            
            <div className="relative border-l border-zinc-800 ml-3 space-y-12">
                {educationData.map((edu, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-50px" }} 
                        transition={{ ...lightAnim, delay: idx * 0.1 }}
                        className="relative pl-8"
                    >
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <h4 className="text-lg font-bold text-zinc-100">{edu.institution}</h4>
                        <p className="text-blue-400 text-sm font-medium mb-2">{edu.degree}</p>
                        <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                            {edu.date}
                        </span>
                        <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* RIGHT SIDE: CERTIFICATES */}
          <div className="lg:col-span-7">
             <motion.h3 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={lightAnim}
                className="text-2xl font-bold text-white flex items-center gap-2 mb-8"
            >
                <Award className="text-purple-400" /> Professional Certifications
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              
                {certificationsData.map((cert, idx) => (
                    <Link key={idx} href={cert.link} target="_blank" className="group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }} 
                            transition={{ ...lightAnim, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            // OPTIMIZATION: Solid BG
                            className="bg-[#111111]/60 backdrop-blur-md border border-zinc-800 rounded-xl p-4 h-full hover:border-blue-500/50 hover:bg-[#151515]/80 transition-colors cursor-pointer flex flex-col"
                        >
                            <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden bg-zinc-950 border border-zinc-800/50">
                                <Image 
                                   src={cert.image} 
                                   alt={cert.title} 
                                   fill 
                                   className="object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>
                            <h4 className="text-xs font-bold text-zinc-200 group-hover:text-white line-clamp-2 mb-1">
                                {cert.title}
                            </h4>
                            <p className="text-[10px] text-zinc-500 mb-2">{cert.issuer}</p>
                            <div className="mt-auto flex items-center gap-1 text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Verify Credential</span>
                                <ExternalLink className="w-3 h-3" />
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { projectsData } from "@/app/data/projectsData"; 
import { ArrowLeft, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsData.find((p) => p.slug === slug);
  const router = useRouter();

  // Handle case where project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <button onClick={() => router.back()} className="text-blue-400 hover:underline">Go Back</button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 selection:bg-blue-500/30">
      
      {/* --- HEADER HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-zinc-800">
        
        {/* Background Glow */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${project.gradient} blur-[120px] opacity-20 pointer-events-none`}></div>

        <div className="max-w-4xl mx-auto relative z-10">
            {/* Back Button */}
            <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Projects
            </Link>

            {/* Project Tagline & Icon */}
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <span className={`text-lg font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r ${project.textGradient}`}>
                    {project.tagline}
                </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                {project.title}
            </h1>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-lg">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* --- DETAILS CONTENT --- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
            
            {/* 1. THE PROBLEM (Interactive Animation) */}
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
                <h3 className="text-red-400 font-bold text-xl uppercase tracking-widest pt-2">The Problem</h3>
                
                <motion.div 
                    initial={{ x: 0, backgroundColor: "rgba(0,0,0,0)" }}
                    whileHover={{ 
                        scale: 1.02, 
                        x: 10, 
                        backgroundColor: "rgba(239, 68, 68, 0.05)", // Faint red tint
                        borderLeftColor: "#f87171" // Bright red border
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="prose prose-invert max-w-none pl-6 border-l-2 border-red-500/30 rounded-r-xl pr-4 py-2 cursor-default"
                >
                    <p className="text-xl text-zinc-300 leading-relaxed m-0">
                        {project.problem}
                    </p>
                </motion.div>
            </div>

            {/* 2. THE SOLUTION (Interactive Animation) */}
            <div className="grid md:grid-cols-[150px_1fr] gap-8">
                <h3 className="text-blue-400 font-bold text-xl uppercase tracking-widest pt-2">The Solution</h3>
                
                <div>
                    <motion.div 
                        initial={{ x: 0, backgroundColor: "rgba(0,0,0,0)" }}
                        whileHover={{ 
                            scale: 1.02, 
                            x: 10, 
                            backgroundColor: "rgba(59, 130, 246, 0.05)", // Faint blue tint
                            borderLeftColor: "#3b82f6" // Bright blue border
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="pl-6 border-l-2 border-blue-500/30 rounded-r-xl pr-4 py-2 cursor-default mb-8"
                    >
                        <p className="text-xl text-zinc-300 leading-relaxed m-0">
                            {project.solution}
                        </p>
                    </motion.div>
                    
                    {/* Key Features List */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {project.features?.map((feature, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                className="flex gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 transition-colors"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-zinc-400 text-sm font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. ARCHITECTURE BLOCK */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-center"
            >
                <Cpu className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">Agentic Architecture</h3>
                <p className="text-zinc-500 max-w-md mx-auto">
                    This system relies on event-driven orchestration handled via n8n and Python microservices.
                </p>
            </motion.div>

        </div>
      </section>

    </div>
  );
}
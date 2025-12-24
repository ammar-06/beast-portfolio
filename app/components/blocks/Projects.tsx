// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cpu, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/app/data/projectsData";
import { SpotlightCard } from "../ui/SpotlightCard"; 
// 1. IMPORT TILT
import { Tilt } from 'react-tilt';

const lightAnim = { duration: 0.5, ease: "easeOut" };

// 2. DEFINE TILT OPTIONS
const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.02,   // 2% Zoom on Hover (Replaces the "Pop Up" y-10)
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,   // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0a0a0a] relative z-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={lightAnim}
                className="text-4xl md:text-5xl font-black text-white mb-6"
            >
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Projects</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }} 
                transition={{ ...lightAnim, delay: 0.1 }}
                className="text-zinc-400 text-lg max-w-2xl border-l-2 border-zinc-800 pl-6"
            >
                A look at recent agentic workflows and systems I've built. <br />
                Focusing on <span className="text-zinc-200">logic, orchestration, and ROI.</span>
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const Icon = project.icon;
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }} 
          transition={{ ...lightAnim, delay: index * 0.1 }}
          className="h-full"
        >
          {/* 3. WRAP WITH TILT COMPONENT */}
          {/* We added className="h-full" to Tilt to ensure layout stays correct */}
          <Tilt options={defaultTiltOptions} className="h-full">
            <SpotlightCard className="group h-full bg-[#111111] border border-zinc-800 rounded-3xl p-8 overflow-hidden transition-colors duration-300 hover:bg-[#161616] hover:border-zinc-600">
                
                {/* The Gradient Blob */}
                <div className={cn(
                    "absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br",
                    project.gradient
                )}></div>

                {/* The Rotating Icon */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 rotate-12 text-white">
                    <Icon className="w-24 h-24" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                    <Cpu className="w-5 h-5 text-zinc-300" />
                                </div>
                                <span className={cn("text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r", project.textGradient)}>
                                    {project.tagline}
                                </span>
                            </div>
                            <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                        {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.stack.slice(0, 3).map((tech: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-950 border border-zinc-800 rounded-md">
                                {tech}
                            </span>
                        ))}
                        {project.stack.length > 3 && (
                            <span className="px-3 py-1.5 text-xs font-medium text-zinc-500 bg-zinc-950 border border-zinc-900 rounded-md">
                            +{project.stack.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            </SpotlightCard>
          </Tilt>
        </motion.div>
    </Link>
  );
};
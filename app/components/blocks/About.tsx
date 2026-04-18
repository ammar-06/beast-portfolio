"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Zap, 
  Code2, 
  Terminal, 
  Database, 
  Share2, 
  GitGraph, 
  MessageSquare, 
  Workflow, 
  AppWindow, 
  Search,
  Link,      // Added for LangChain
  Network    // Added for LangGraph
} from "lucide-react";

// --- SKILLS LIST ---
const skills = [
  { name: "LangChain", icon: <Link className="w-5 h-5" />, color: "text-emerald-400" },   // New addition
  { name: "LangGraph", icon: <Network className="w-5 h-5" />, color: "text-rose-400" }, // New addition
  { name: "n8n Orchestration", icon: <Layers className="w-5 h-5" />, color: "text-red-400" },
  { name: "Multi-Agent Systems", icon: <Cpu className="w-5 h-5" />, color: "text-blue-400" },
  { name: "Agentic Workflows", icon: <Workflow className="w-5 h-5" />, color: "text-purple-400" },
  { name: "Webhooks & API Integ.", icon: <Share2 className="w-5 h-5" />, color: "text-orange-400" },
  { name: "Prompt Engineering", icon: <Terminal className="w-5 h-5" />, color: "text-green-400" },
  { name: "RAG Pipelines", icon: <Search className="w-5 h-5" />, color: "text-cyan-400" },
  { name: "CRM & G-Workspace", icon: <AppWindow className="w-5 h-5" />, color: "text-indigo-400" },
  { name: "Python", icon: <Code2 className="w-5 h-5" />, color: "text-yellow-400" },
  { name: "Vector Databases", icon: <Database className="w-5 h-5" />, color: "text-teal-400" },
  { name: "Git / GitHub", icon: <GitGraph className="w-5 h-5" />, color: "text-white" },
  { name: "Jira Integration", icon: <Zap className="w-5 h-5" />, color: "text-blue-500" },
  { name: "Slack Bots", icon: <MessageSquare className="w-5 h-5" />, color: "text-pink-400" },
];

export const About = () => {
  return (
    <section id="about" className="relative w-full py-24 overflow-hidden bg-[#0a0a0a]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT: TEXT CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="pt-4"
          >
            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Turning Data Chaos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Into Order.
              </span>
            </h2>

            {/* --- THE PROBLEM BLOCK (Animated) --- */}
            <motion.div 
                className="mb-8 pl-6 border-l-2 border-red-500/30 rounded-r-xl pr-4 py-2 cursor-default"
                initial={{ x: 0, backgroundColor: "rgba(0,0,0,0)" }}
                whileHover={{ 
                    scale: 1.02, 
                    x: 10, 
                    backgroundColor: "rgba(239, 68, 68, 0.05)", // Faint red tint
                    borderLeftColor: "#f87171" // Bright red border
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <h4 className="text-red-400 font-bold text-sm tracking-widest uppercase mb-2">The Problem</h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                   Business data is fragmented, unstructured, and spread across documents, conversations, internal systems, and legacy databases. Traditional automation and analytics approaches struggle to interpret context, handle ambiguity, and extract reliable insights from this noise, leaving valuable information <span className="text-gray-200">underutilized.</span>
                </p>
            </motion.div>

            {/* --- THE SOLUTION BLOCK (Animated) --- */}
            <motion.div 
                className="pl-6 border-l-2 border-blue-500/30 rounded-r-xl pr-4 py-2 cursor-default"
                initial={{ x: 0, backgroundColor: "rgba(0,0,0,0)" }}
                whileHover={{ 
                    scale: 1.02, 
                    x: 10, 
                    backgroundColor: "rgba(59, 130, 246, 0.05)", // Faint blue tint
                    borderLeftColor: "#3b82f6" // Bright blue border
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                <h4 className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-2">My Solution</h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                   I build <strong className="text-white">Context-Aware RAG Pipelines</strong>. I create agents that ingest raw, unstructured chaos and convert it into structured, actionable ROI, bridging the gap between your legacy systems and modern AI.
                </p>
            </motion.div>

          </motion.div>

          {/* --- RIGHT: THE ARSENAL (TECH GRID) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> My Arsenal
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(250, 204, 21, 1)", // Electric Yellow Border
                    boxShadow: "0px 0px 20px rgba(250, 204, 21, 0.2)" // Yellow Glow
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4 group cursor-default"
                >
                  <div className={`p-2 rounded-lg bg-black/50 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
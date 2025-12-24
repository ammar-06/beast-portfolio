// @ts-nocheck
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Workflow, Database } from "lucide-react";
// 1. Import the SpotlightCard (Adjust path if your folder structure is different)
import { SpotlightCard } from "../ui/SpotlightCard"; 

// PERFORMANCE FIX: Use simple easing instead of heavy springs
const lightAnim = {
  duration: 0.4,
  ease: "easeOut"
};

const services = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "I build autonomous agents that don't just chat—they take action. Using OpenAI Agents SDK and Python, I create agents that reason, plan, and execute complex business tasks without human oversight.",
    tags: ["OpenAI Agents SDK", "Python", "Autonomous Agents"]
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Stop doing repetitive work. I architect complex, self-healing Agentic workflows in n8n that connect your CRM, Email, and Database. If it has an API, I can agenticly automate it.",
    tags: ["Workflow Orchestration", "Webhooks", "Error Handling", "n8n", "Api Integrations"]
  },
  {
    icon: Database,
    title: "RAG Pipelines",
    description: "Turn your static documents into intelligent conversations. I build Retrieval-Augmented Generation (RAG) systems that let your AI answer questions based on your specific company data.",
    tags: ["Vector DBs", "Knowledge Retrieval", "Context Awareness"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={lightAnim}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ ...lightAnim, delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl md:mx-0 mx-auto"
          >
            I bridge the gap between <span className="text-zinc-200">cutting-edge AI</span> and <span className="text-zinc-200">practical business automation</span>. Here is how I can help you scale.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ ...lightAnim, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                // NOTE: We removed the styling classes from here and moved them inside SpotlightCard
                className="h-full" 
              >
                {/* 2. WRAP CONTENT WITH SPOTLIGHT CARD */}
                <SpotlightCard className="p-8 h-full rounded-3xl bg-[#111111] border border-zinc-800 hover:border-zinc-700 transition-colors">
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zinc-400 leading-relaxed mb-8 text-sm">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/10 border border-blue-900/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
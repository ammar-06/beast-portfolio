"use client";
import React, { useState } from "react";
import { Mail, Linkedin, ArrowRight, User, AtSign, MessageSquare, Loader2, CheckCircle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../../../lib/firebase";

// 1. ADDED UPWORK ICON DEFINITION
const UpworkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className={className} role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M746.7 528.6c-28.8 0-56.1-11.1-77-29.2l-35.5 171.2h-84.7l57.4-269.4c-33.1-52.3-51.2-115.6-57.4-160.6h-4.2c-7.6 53.6-40.6 206.8-40.6 206.8-13.4 63.2-70.3 109.1-135.6 109.1-76.7 0-139-62.3-139-139V240.6h84.7v176.9c0 29.9 24.3 54.2 54.3 54.2 25.4 0 47.6-18.1 53-43l41.4-188.1h96.4c4.2 42.4 17.9 95.8 41.4 137.4 30.6 54.3 71.2 84.1 113.6 84.1 30.6 0 55.5-24.7 55.5-55.5s-24.9-55.5-55.5-55.5c-17.9 0-36.6 6.4-55.5 18.9l-36.6-66.8c29.9-18.9 63.2-29.9 97.9-29.9 76.7 0 139 62.3 139 139s-62.3 139-139 139z" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const dateStr = new Date().toISOString().split('T')[0];
      const sanitizedName = formData.name.replace(/\s+/g, '-');
      const customId = `${dateStr}_${sanitizedName}_${Date.now()}`;
      await setDoc(doc(db, "contacts", customId), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white tracking-tight"
            >
                Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Together</span>
            </motion.h2>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#111111]/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500"
        >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/20">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400 max-w-xs mx-auto mb-8">
                  Thanks for reaching out. I will review your message and get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 text-white font-medium hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-zinc-600"
                >
                  <RefreshCcw className="w-4 h-4" />
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Full Name</label>
                      <div className="relative group/input">
                          <User className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500 group-focus-within/input:text-blue-500 transition-colors" />
                          <input 
                              type="text" 
                              name="name"
                              placeholder="Full Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300"
                          />
                      </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">Email Address</label>
                      <div className="relative group/input">
                          <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500 group-focus-within/input:text-blue-500 transition-colors" />
                          <input 
                              type="email" 
                              name="email"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300"
                          />
                      </div>
                  </div>

                  <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-400 ml-1 uppercase tracking-wider">How can I help you?</label>
                      <div className="relative group/input">
                          <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-zinc-500 group-focus-within/input:text-blue-500 transition-colors" />
                          <textarea 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              required
                              placeholder="Tell me about your project..."
                              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 placeholder:text-zinc-600 resize-none"
                          />
                      </div>
                  </div>

                  <div className="pt-2">
                      <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Submit Request
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                      </button>
                  </div>
              </form>
            )}

            <div className="relative my-8 text-center">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
                <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="bg-[#050505] px-4 text-zinc-600">Or connect via social</span></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ammarofficial321@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 group text-sm"
                >
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                    Shoot me an Email
                </a>
                <a 
                    href="https://www.linkedin.com/in/ammar-ahmad2408/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-white border border-zinc-700 bg-zinc-900/50 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 group text-sm"
                >
                    <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                    DM on LinkedIn
                </a>
            </div>
        </motion.div>

        {/* --- 2. UPDATED FOOTER --- */}
        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Ammar Ahmad. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
                
                {/* UPWORK (Replaced GitHub) */}
                <a href="https://www.upwork.com/freelancers/~0196c931ce0a2a9851" target="_blank" rel="noopener noreferrer" className="hover:text-[#14a800] transition-colors" aria-label="Upwork">
                    <UpworkIcon className="w-6 h-6" />
                </a>

                {/* LINKEDIN */}
                <a href="https://www.linkedin.com/in/ammar-ahmad2408/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                </a>

                {/* EMAIL (Fixed Link) */}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ammarofficial321@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Email">
                    <Mail className="w-5 h-5" />
                </a>

            </div>
        </div>
      </div>
    </section>
  );
};
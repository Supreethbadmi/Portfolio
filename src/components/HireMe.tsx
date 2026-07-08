"use client";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function HireMe() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative z-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center md:text-left flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-3 flex items-center justify-center md:justify-start gap-2">
               <Sparkles size={16} />
               Currently Open to Opportunities
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-sans leading-tight mb-4">
              Let's Build Together
            </h3>
            <p className="text-gray-400 font-sans leading-relaxed mb-6 max-w-lg">
              I’m currently looking for internship opportunities where I can contribute to real products, sharpen my engineering skills, and grow through hands-on development work in software, AI, machine learning, and web technologies.
            </p>
            
            <ul className="space-y-3 text-left max-w-md mb-8">
               <li className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  Open to Software Development internships
               </li>
               <li className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0 mt-0.5" />
                  Open to AI / ML internships
               </li>
               <li className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 size={18} className="text-purple-500 shrink-0 mt-0.5" />
                  Open to Web Development roles
               </li>
               <li className="flex items-start gap-3 text-sm text-gray-300 font-medium">
                  <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  Open to collaborative student developer opportunities
               </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
             <a href="#contact" className="px-8 py-4 rounded-xl bg-white text-black text-center font-bold font-sans hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Contact Me
             </a>
             <a href="/SUPREETH%20B%20R.pdf" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-center font-bold font-sans hover:bg-white/10 hover:scale-105 transition-all">
                Download Resume
             </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

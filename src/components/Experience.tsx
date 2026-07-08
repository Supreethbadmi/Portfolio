"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#121212] relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Education Side */}
        <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-4 flex items-center gap-2">
                 <GraduationCap size={16} />
                 Academic Profile
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-sans leading-tight mb-12">
                Education
              </h3>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 pl-8 pb-4 flex flex-col gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-blue-400" />
                    <span className="text-sm font-mono text-blue-400 mb-2 block">2024 — 2027</span>
                    <h4 className="text-xl font-semibold mb-1 font-sans">Bachelor’s in Computer Science & Artificial Intelligence</h4>
                    <p className="text-gray-400 text-sm">Marwadi University</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-gray-600" />
                    <span className="text-sm font-mono text-gray-500 mb-2 block">2021 — 2024</span>
                    <h4 className="text-lg font-semibold mb-1 font-sans text-gray-300">Diploma in Computer Science & Engineering</h4>
                    <p className="text-gray-500 text-sm">Sanjay Gandhi Polytechnic, Ballari</p>
                </motion.div>
            </div>
        </div>

        {/* Experience Side */}
        <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-purple-400 font-semibold mb-4 flex items-center gap-2">
                 <Briefcase size={16} />
                 Professional Journey
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold font-sans leading-tight mb-12">
                Experience
              </h3>
            </motion.div>

            <div className="relative border-l border-white/10 ml-4 pl-8 pb-4 flex flex-col gap-12">
                {/* YogaYatra Internship */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-purple-400" />
                    <span className="text-sm font-mono text-purple-400 mb-2 block">March 2026 — June 2026</span>
                    
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl mt-4 hover:border-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="text-xl font-semibold font-sans">Software Engineer Intern</h4>
                           <span className="text-sm text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Yoga Yatra Retail (OPC) Private Ltd</span>
                        </div>
                        <ul className="text-gray-400 text-sm leading-relaxed mb-4 list-disc pl-4 space-y-1">
                           <li>Currently working as a Software Engineer Intern, contributing to web development projects with frontend and backend development.</li>
                           <li>Developing responsive websites with modern UI/UX, performance optimization, and bug fixing.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                           <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded">Frontend</span>
                           <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded">Backend</span>
                           <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">Bengaluru</span>
                        </div>
                    </div>
                </motion.div>

                {/* Corizo AI Internship */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-emerald-400" />
                    <span className="text-sm font-mono text-emerald-400 mb-2 block">March 2024 — April 2024</span>
                    
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl mt-4 hover:border-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="text-xl font-semibold font-sans">Artificial Intelligence Intern</h4>
                           <span className="text-sm text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Corizo</span>
                        </div>
                        <ul className="text-gray-400 text-sm leading-relaxed mb-4 list-disc pl-4 space-y-1">
                           <li>Engineered machine learning models by leveraging Python libraries and data preprocessing techniques, driving enhancements in algorithmic accuracy and efficiency for various AI-driven web applications.</li>
                           <li>Engineered machine learning models using Python libraries and data preprocessing techniques to improve accuracy and efficiency for AI-driven applications.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                           <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">Python</span>
                           <span className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">Machine Learning</span>
                           <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">Bengaluru</span>
                        </div>
                    </div>
                </motion.div>

                {/* Corizo Web Dev Internship */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-blue-400" />
                    <span className="text-sm font-mono text-blue-400 mb-2 block">January 2024 — April 2024</span>
                    
                    <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl mt-4 hover:border-white/10 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="text-xl font-semibold font-sans">Web Development Intern</h4>
                           <span className="text-sm text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Corizo</span>
                        </div>
                        <ul className="text-gray-400 text-sm leading-relaxed mb-4 list-disc pl-4 space-y-1">
                           <li>Developed responsive web interfaces by integrating contemporary frameworks, ensuring enhanced accessibility and user engagement across multiple devices.</li>
                           <li>Developed responsive web interfaces using modern frameworks to improve accessibility and user engagement across multiple devices.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                           <span className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded">Web Development</span>
                           <span className="text-xs font-mono text-blue-300 bg-blue-500/10 px-2 py-1 rounded">Responsive UI</span>
                           <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded">Bengaluru</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
}

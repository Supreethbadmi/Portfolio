"use client";
import { motion } from "framer-motion";
import { User, Code2, Cpu, Globe } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-20 bg-[#121212]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-4 flex items-center gap-2">
             <User size={16} />
             About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-6">
            A software and AI student driven by real-world impact.
          </h3>
          <p className="text-lg text-gray-400 font-sans leading-relaxed mb-6">
            I am a Computer Science and Artificial Intelligence student at Marwadi University with a diploma background in Computer Science and Engineering. I enjoy building modern web applications, solving technical problems, and exploring AI-driven systems that combine logic, usability, and real-world impact.
          </p>
          <p className="text-lg text-emerald-400/80 font-sans leading-relaxed font-medium">
            I am actively looking for internship opportunities where I can contribute, learn from real teams, and grow as a developer.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                <Code2 className="text-emerald-400 mb-6" size={32} />
                <h4 className="text-xl font-semibold mb-3 font-sans">Full Stack & Product</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Focusing on Full Stack Development and building UI/UX-centric web applications using modern Javascript technologies.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                <Cpu className="text-blue-400 mb-6" size={32} />
                <h4 className="text-xl font-semibold mb-3 font-sans">AI & Data-Driven</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Deeply interested in Artificial Intelligence, Machine Learning, and leveraging data to engineer intelligent architectures.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
                <Globe className="text-purple-400 mb-6" size={32} />
                <h4 className="text-xl font-semibold mb-3 font-sans">Logic & Problem Solving</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Applying Data Structures, Algorithms, and Object-Oriented paradigms to develop efficient and highly performant solutions.</p>
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

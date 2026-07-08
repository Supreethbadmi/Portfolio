"use client";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL", "HTML", "CSS"]
  },
  {
    title: "AI & Data Science",
    skills: ["Machine Learning (Scikit-learn, TensorFlow)", "CNN", "Data Preprocessing", "Generative AI (Gemini/Vertex AI)"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (Basics)", "Linux", "Git", "Google Cloud Platform (GCP) Basics", "Jenkins", "Docker"]
  },
  {
    title: "Core Computer Science",
    skills: ["Operating Systems (OS)", "Computer Networks (CN)", "Data Structures & Algorithms (DSA)"]
  },
  {
    title: "Languages",
    skills: ["English", "Hindi", "Kannada", "Telugu", "Tamil"]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-4 flex items-center gap-2">
             <Layers size={16} />
             Core Competencies
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans leading-tight mb-12">
            Technical Toolkit
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={categoryVariants}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <h4 className="text-xl font-semibold font-sans mb-6 text-gray-200">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                 {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium font-sans bg-white/5 text-gray-300 border border-white/5 cursor-default hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                    >
                      {skill}
                    </div>
                 ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

// The real project list specified by the user
const projects = [
  {
    title: "Brain Tumor Detection Using Convolutional Neural Networks on MRI Images",
    category: "Deep Learning / Computer Vision / Medical AI",
    description: "Engineered a deep learning model leveraging convolutional neural networks to accurately identify brain tumors in MRI scans, automating diagnostic workflows and improving precision in early tumor detection.",
    highlights: [
      "Automated diagnostic workflows for brain tumors",
      "Preprocessed and augmented MRI dataset to enhance model performance",
      "Reduced overfitting and increased classification accuracy"
    ],
    tags: ["Python", "TensorFlow", "CNN", "Machine Learning"]
  },
  {
    title: "PhishNet Sentinel: AI-Based Phishing Detection",
    category: "AI / Web Security",
    description: "Phishing attacks remain one of the most common cyber threats, where fake websites attempt to steal sensitive user information such as login credentials and banking details. Developed PhishNet Sentinel as a solution.",
    highlights: [
      "Real-time suspicious website detection",
      "Mitigates phishing threats and fake login pages",
      "Protects sensitive user credentials and details"
    ],
    tags: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Election Forensics: Using Machine Learning and Synthetic Data for Possible Election Anomaly Detection",
    category: "Machine Learning / Anomaly Detection",
    description: "Developed an election forensics system using machine learning and synthetic data to detect voting anomalies and suspicious patterns.",
    highlights: [
      "Synthetic election data analysis",
      "Anomaly detection approach for voting patterns",
      "Engineered predictive models to analyze electoral datasets, improving fraud detection accuracy and decision-making insights"
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Statistics"]
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-semibold mb-4 flex items-center gap-2">
             <FolderGit2 size={16} />
             Featured Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
            Selected Projects
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/[0.05] group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4">
                 <div className="flex flex-col">
                    <span className="text-xs font-mono text-emerald-400 mb-3 block">
                        {project.category}
                    </span>
                    <h4 className="text-2xl font-semibold font-sans group-hover:text-emerald-300 transition-colors">
                        {project.title}
                    </h4>
                 </div>
                 <div className="flex gap-4 text-gray-400 mt-1">
                    <a href="#" className="flex items-center gap-2 hover:text-emerald-400 hover:scale-105 transition-all cursor-not-allowed opacity-60" title="Coming Soon">
                       <Github size={18} /> <span className="text-sm font-medium hidden sm:block">GitHub</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-emerald-400 hover:scale-105 transition-all cursor-not-allowed opacity-60" title="Coming Soon">
                       <ExternalLink size={18} /> <span className="text-sm font-medium hidden sm:block">Live Demo</span>
                    </a>
                 </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                 {project.description}
              </p>

              <ul className="mb-8 space-y-2 flex-grow">
                 {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                       <span className="text-emerald-500 mt-[3px]">▹</span> {highlight}
                    </li>
                 ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                 {project.tags.map((tag, i) => (
                     <span key={i} className="text-xs font-mono text-gray-400">
                         {tag}
                     </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

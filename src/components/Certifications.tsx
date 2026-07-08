"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

const certs = [
  {
    title: "Deloitte Australia - Cyber Job Simulation",
    issuer: "Forage",
    date: "2026",
    credentialId: "y4jeMhE3TaARiLCag",
    highlights: [
      "Analyzed complex network environments to identify potential vulnerabilities and performed threat analysis on real-world security scenarios.",
      "Executed risk assessments and developed mitigation strategies to protect digital assets within a professional cybersecurity framework."
    ]
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TCS",
    date: "2026",
    credentialId: null,
    highlights: [
      "Integrated Generative AI with data analytics workflows to automate complex data cleaning and derive actionable business insights.",
      "Engineered prompt-based solutions to solve high-level business challenges, enhancing the efficiency of predictive data models."
    ]
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const certVariants = {
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
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-amber-500 font-semibold mb-4 flex items-center gap-2">
             <Award size={16} />
             Achievements
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
            Certifications
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              variants={certVariants}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all flex flex-col h-full"
            >
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <ShieldCheck size={20} />
                 </div>
                 <div>
                    <h4 className="font-semibold text-lg font-sans text-gray-200 leading-tight">
                       {cert.title}
                    </h4>
                 </div>
               </div>

               <ul className="mb-6 space-y-2 flex-grow list-disc pl-4 text-xs text-gray-400">
                  {cert.highlights.map((highlight, idx) => (
                     <li key={idx} className="leading-relaxed">
                        {highlight}
                     </li>
                  ))}
               </ul>
               
               <div className="mt-auto space-y-2 text-sm text-gray-400 border-t border-white/5 pt-4">
                  <div className="flex justify-between">
                     <span className="text-gray-500">Issuer</span>
                     <span className="font-medium text-gray-300">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-500">Issued</span>
                     <span className="font-medium text-gray-300">{cert.date}</span>
                  </div>
               </div>

               <div className="mt-6">
                  {cert.credentialId ? (
                      <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition cursor-not-allowed opacity-80" title="Credential Available on Request">
                         ID: {cert.credentialId}
                      </button>
                  ) : (
                      <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-500 cursor-not-allowed" title="Credential Available on Request">
                         Credential Available on Request
                      </button>
                  )}
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

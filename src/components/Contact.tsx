"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-[#121212] relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-sans">
            Let&apos;s build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              meaningful
            </span>
          </h2>

          <p className="text-xl text-gray-400 font-sans leading-relaxed mt-6 max-w-2xl mx-auto">
            If you’re building something meaningful and think I’d be a strong fit, I’d love to connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="mailto:supreethbr2k5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition"
          >
            <Mail size={20} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/supreeth-br-5bb95b2b4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/10 hover:bg-[#0A66C2] hover:text-white transition text-[#0A66C2]"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Supreethbadmi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition"
          >
            <Github size={20} />
            GitHub
          </a>

          <a
            href="/SUPREETH%20B%20R.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white transition text-emerald-400"
          >
            <FileText size={20} />
            Resume
          </a>
        </motion.div>
      </div>

      <footer className="mt-32 text-center text-xs font-mono text-gray-600">
         <p>© {new Date().getFullYear()} Supreeth B R. Built with Next.js & Framer Motion.</p>
      </footer>
    </section>
  );
}
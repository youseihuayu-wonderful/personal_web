"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-white dark:from-primary-950/20 dark:via-gray-950 dark:to-gray-950" />

      <div className="section-container relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm mb-4 tracking-wider uppercase">
            AI / ML Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Shihua Yu
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems at the intersection of computer vision,
            NLP, and multi-agent AI. MS in AI @ Northeastern University.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Shihua_Yu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              <FileText size={18} />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 rounded-lg font-medium transition-colors"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-primary-500 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}

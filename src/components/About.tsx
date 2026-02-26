import SectionReveal from "./SectionReveal";
import { GraduationCap, Briefcase, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        </SectionReveal>

        <SectionReveal>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            AI/ML Engineer with hands-on experience in computer vision, natural
            language processing, and multi-agent systems. Skilled in developing
            and evaluating deep learning models for multilingual AI
            applications, 3D robotic simulation, and large-scale data analysis.
            Proven ability to bridge research and production, with experience in
            on-device AI model optimization, dataset curation, and
            cross-functional collaboration with R&D teams.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <GraduationCap className="mx-auto mb-3 text-primary-600 dark:text-primary-400" size={28} />
              <h3 className="font-semibold mb-1">Education</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                MS in AI (CV) — Northeastern
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                BS in CS — UW Seattle
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <Briefcase className="mx-auto mb-3 text-primary-600 dark:text-primary-400" size={28} />
              <h3 className="font-semibold mb-1">Experience</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2+ years in AI/ML engineering
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                OnePlus, T-Mobile, WinGsrobotics
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <Globe className="mx-auto mb-3 text-primary-600 dark:text-primary-400" size={28} />
              <h3 className="font-semibold mb-1">Languages</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                English, Mandarin Chinese, Korean
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

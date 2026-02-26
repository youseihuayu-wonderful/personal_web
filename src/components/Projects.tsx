import SectionReveal from "./SectionReveal";
import { Brain, Wifi } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "AI Language Model Evaluation Platform",
    org: "OnePlus R&D",
    period: "Mar. 2024 – Oct. 2024",
    description:
      "Designed and executed evaluation pipelines for on-device large language models, testing multilingual NLP capabilities including voice-to-text, text-to-image, and cross-lingual translation.",
    highlight:
      "Analyzed model edge cases and failure modes using statistical methods; provided actionable insights that improved model robustness by 25%.",
    tags: ["LLM Evaluation", "NLP", "Multilingual AI", "Edge Computing"],
  },
  {
    icon: Wifi,
    title: "Wi-Fi Device ML-Based Testing & Optimization",
    org: "Personal Project",
    period: "Nov. 2024 – Present",
    description:
      "Developed ML-assisted test case generation for Wi-Fi products (802.11ac/ax), leveraging pattern recognition to identify firmware anomalies and optimize connectivity.",
    highlight:
      "Automated data-driven triage workflows for defect classification and root-cause analysis with third-party vendors.",
    tags: ["Machine Learning", "Wi-Fi 6", "Test Automation", "Anomaly Detection"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <SectionReveal key={i}>
              <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 h-full hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400">
                    <project.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {project.org} &middot; {project.period}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-medium">
                  {project.highlight}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

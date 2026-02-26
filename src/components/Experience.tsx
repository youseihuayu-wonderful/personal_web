import SectionReveal from "./SectionReveal";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "OnePlus",
    subtitle: "Global Consumer Electronics",
    role: "AI/ML Test & Evaluation Engineer",
    location: "Bellevue, WA",
    period: "Oct. 2023 – Present",
    bullets: [
      "Led on-device AI model evaluation for multilingual voice recognition and image translation across 5+ languages, improving inference accuracy and edge-case coverage.",
      "Curated and labeled multimodal datasets (text, speech, image) for model fine-tuning; designed systematic evaluation benchmarks for AI feature releases (OnePlus 13/13R).",
      "Performed root-cause analysis on AI/ML inference failures using log analysis tools (QXDM, QCAT), collaborating with R&D to optimize model-hardware integration on Snapdragon chipsets.",
      "Built automated testing pipelines for AI feature validation across 5G environments, reducing regression cycle time by 40%.",
      "Delivered executive-level reports with data-driven KPIs on AI model performance, risk assessment, and release readiness.",
    ],
  },
  {
    company: "WinGsrobotics",
    subtitle: "Robotics Operating System",
    role: "Machine Learning Engineer Intern",
    location: "Bellevue, WA",
    period: "Jun. 2023 – Aug. 2023",
    bullets: [
      "Developed sensor-driven motion prediction algorithms for robotic arm control using Go and Python, integrating real-time sensor fusion for path planning.",
      "Built a React-based 3D simulation platform for robotic task visualization, enabling low-code model testing and improving simulation accuracy for ML-driven control models.",
      "Supported end-to-end integration of AI perception modules (object detection, pose estimation) with hardware control systems.",
      "Coordinated agile sprints across software, hardware, and AI teams to meet delivery milestones.",
    ],
  },
  {
    company: "T-Mobile",
    subtitle: "5G Innovation Lab",
    role: "Automation & ML Testing Engineer Intern",
    location: "Bellevue, WA",
    period: "Mar. 2022 – Jun. 2022",
    bullets: [
      "Programmed robotic arms for automated UI interaction testing on Android devices, applying computer vision techniques for screen element detection and verification.",
      "Integrated automation frameworks with lab instruments (R&S CMX500, Keysight UXM) for real-time data collection and anomaly detection in 5G network testing.",
      "Developed data analysis scripts in Python for performance metrics extraction, statistical analysis, and defect pattern recognition.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="section-container">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <SectionReveal key={i}>
                <div className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:direction-rtl"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-white dark:ring-gray-950 hidden md:block" />

                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`} style={{ direction: "ltr" }}>
                    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-1 text-primary-600 dark:text-primary-400">
                        <Building2 size={16} />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-400 dark:text-gray-500 text-sm">
                          — {exp.subtitle}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary-400/60"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

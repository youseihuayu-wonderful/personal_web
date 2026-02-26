import SectionReveal from "./SectionReveal";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C++", "SQL", "Golang", "Kotlin", "Swift"],
  },
  {
    label: "ML / AI Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Hugging Face Transformers",
      "spaCy",
      "OpenCV",
      "scikit-learn",
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "AWS (SageMaker, EC2, S3)",
      "Docker",
      "Git / GitHub",
      "Tableau",
      "Azure DevOps",
      "CI/CD Pipelines",
    ],
  },
  {
    label: "Core Competencies",
    skills: [
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Multi-Agent Systems",
      "A/B Testing",
      "Data Visualization",
      "Statistical Analysis",
      "Model Evaluation & Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="section-container">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <SectionReveal key={i}>
              <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-950/50 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                    >
                      {skill}
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

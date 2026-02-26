import SectionReveal from "./SectionReveal";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "youseihuayu@gmail.com",
    href: "mailto:youseihuayu@gmail.com",
  },
  {
    icon: Phone,
    label: "(206) 454-0097",
    href: "tel:+12064540097",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/shihuy",
    href: "https://linkedin.com/in/shihuy",
  },
  {
    icon: Github,
    label: "github.com/youseihuayu-wonderful",
    href: "https://github.com/youseihuayu-wonderful",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="section-container text-center">
        <SectionReveal>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
            I&apos;m always open to discussing AI/ML opportunities, research
            collaborations, or interesting projects. Feel free to reach out!
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <link.icon size={18} />
                {link.label}
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

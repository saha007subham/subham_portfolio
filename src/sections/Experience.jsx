import { motion } from "framer-motion";
import { Briefcase, Calendar, Award, Terminal } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Architect",
      company: "Quantum Tech Labs",
      period: "2024 - Present",
      icon: Terminal,
      desc: "Architecting high-performance React frameworks and next-generation UI solutions. Led a core frontend team to build high-scale real-time telemetry dashboards, reducing application render overhead by 40%. Pioneered the adoption of React 19 concurrent features.",
      tags: ["React 19", "Three.js", "TypeScript", "Tailwind CSS", "Vite", "Zustand"],
    },
    {
      role: "Software Engineer - Frontend",
      company: "Apex Cybernetics",
      period: "2022 - 2024",
      icon: Briefcase,
      desc: "Developed highly responsive dashboard architectures and interactive analytics experiences. Built dynamic modular widget systems and integrated complex Canvas data visual components. Facilitated migration of legacy builds to optimized Vite tools.",
      tags: ["React", "JavaScript", "Framer Motion", "D3.js", "Redux", "Sass"],
    },
    {
      role: "Frontend Developer (Intern)",
      company: "Nova Digital",
      period: "2021 - 2022",
      icon: Award,
      desc: "Engineered web widgets and modular UI components for multiple e-commerce client portals. Maintained unified design token systems and collaborated closely with UX design teams to output pixel-perfect, accessibility-certified interfaces.",
      tags: ["Next.js", "Node.js", "Tailwind CSS", "Figma", "REST APIs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div
        className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full pointer-events-none filter blur-[120px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono-custom tracking-[0.2em] uppercase text-[var(--color-primary)] font-semibold">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Professional <span className="gradient-text glow-text">Experience</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-opacity-30 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12"
          style={{ borderColor: "var(--color-primary)" }}
        >
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={`${exp.role}-${idx}`}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div
                  className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-xl flex items-center justify-center text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--color-bg-secondary)",
                    border: "2px solid var(--color-primary)",
                    boxShadow: "0 0 10px rgba(56,189,248,0.2)",
                  }}
                >
                  <Icon size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>

                {/* Timeline Card */}
                <div className="p-8 rounded-3xl glass-card border-opacity-25 hover:border-opacity-60 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-space font-bold text-[var(--color-text)]">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-space font-semibold text-[var(--color-primary)] mt-1 inline-block">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-custom font-medium self-start md:self-center"
                      style={{
                        background: "rgba(56,189,248,0.08)",
                        border: "1px solid rgba(56,189,248,0.15)",
                        color: "var(--color-primary)",
                      }}
                    >
                      <Calendar size={11} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-[var(--color-muted)] mb-6">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg font-mono-custom"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "var(--color-text)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

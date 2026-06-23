import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certs = [
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    year: "2023",
    color: "#0866ff",
    bgColor: "rgba(8,102,255,0.08)",
    borderColor: "rgba(8,102,255,0.2)",
    description:
      "Comprehensive professional certification covering React, advanced JS, and frontend best practices from Meta engineers.",
    skills: ["ReactJS", "JavaScript", "HTML/CSS", "Version Control"],
    logo: "M",
  },
  {
    title: "Namaste Frontend System Design",
    issuer: "Namaste Dev",
    year: "2023",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.08)",
    borderColor: "rgba(245,158,11,0.2)",
    description:
      "In-depth course on building scalable frontend architectures, design patterns, performance, and micro-frontends.",
    skills: ["System Design", "Architecture", "Performance", "Design Patterns"],
    logo: "N",
  },
  {
    title: "Namaste React",
    issuer: "Namaste Dev",
    year: "2023",
    color: "#38bdf8",
    bgColor: "rgba(56,189,248,0.08)",
    borderColor: "rgba(56,189,248,0.2)",
    description:
      "Deep dive into React internals, hooks, context, state management, and building production-grade applications.",
    skills: ["React Internals", "Custom Hooks", "Redux", "Optimization"],
    logo: "N",
  },
  {
    title: "Generative AI Certificate",
    issuer: "Qualcomm",
    year: "2024",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.08)",
    borderColor: "rgba(16,185,129,0.2)",
    description:
      "Certification in Generative AI concepts, LLM integration, prompt engineering, and AI-powered application development.",
    skills: ["LLMs", "Prompt Engineering", "AI Integration", "GenAI APIs"],
    logo: "Q",
  },
];

function CertCard({ cert, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${cert.color}15` }}
      className="p-6 rounded-2xl glass-card cursor-default"
      style={{
        border: `1px solid ${cert.borderColor}`,
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        background: cert.bgColor,
      }}
      data-cursor-hover
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center font-space font-bold text-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}15)`,
            color: cert.color,
            border: `1px solid ${cert.color}30`,
          }}
        >
          {cert.logo}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="font-space font-bold text-base leading-snug mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {cert.title}
          </h3>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono-custom"
              style={{ color: cert.color }}
            >
              {cert.issuer}
            </span>
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>
              • {cert.year}
            </span>
          </div>
        </div>
        <motion.div whileHover={{ rotate: 15 }}>
          <CheckCircle2
            size={18}
            style={{ color: cert.color, flexShrink: 0 }}
          />
        </motion.div>
      </div>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--color-muted)", lineHeight: "1.65" }}
      >
        {cert.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full text-xs font-mono-custom"
            style={{
              background: `${cert.color}12`,
              color: cert.color,
              border: `1px solid ${cert.color}20`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">05 — Certifications</p>
          <h2
            className="font-space font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Credentials & <span className="gradient-text">Learning</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "var(--color-muted)", lineHeight: "1.7" }}
          >
            Continuous learning and professional development milestones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl glass-card flex flex-wrap items-center justify-center gap-10"
          style={{ border: "1px solid rgba(56,189,248,0.1)" }}
        >
          {[
            { value: "4", label: "Certifications" },
            { value: "3+", label: "Years Learning" },
            { value: "100%", label: "Completion Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-space font-bold text-3xl gradient-text">
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "var(--color-muted)", letterSpacing: "0.1em" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

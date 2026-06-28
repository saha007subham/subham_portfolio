import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "FlyyX Technologies",
    role: "Software Development Engineer",
    period: "June 2023 – Present",
    duration: "2+ years",
    type: "Full-time",
    color: "#38bdf8",
    highlights: [
      "Built Flyy Gamification Platform Dashboard end-to-end as sole frontend engineer",
      "Architected scalable frontend with ReactJS + TypeScript + Redux Toolkit",
      "Platform used by thousands of enterprise users worldwide",
      "Integrated complex GraphQL APIs and real-time data pipelines",
      "Implemented critical performance optimizations — 40% faster load times",
      "Integrated Generative AI / LLM features into the platform",
    ],
    tech: [
      "ReactJS",
      "JavaScript",
      "Redux Toolkit",
      "GraphQL",
      "Tailwind",
      "AI/LLM",
    ],
    logo: "FX",
  },
  {
    company: "AppyCodes",
    role: "Junior Software Engineer",
    period: "October 2022 – May 2023",
    duration: "8 months",
    type: "Full-time",
    color: "#22d3ee",
    highlights: [
      "Built responsive and performant React applications from scratch",
      "Developed reusable component libraries improving dev velocity by 30%",
      "Improved UI consistency and reduced redundant code across projects",
      "Collaborated on mobile-first responsive design systems",
    ],
    tech: ["ReactJS", "TypeScript", "CSS3", "REST APIs", "Component Libraries"],
    logo: "AC",
  },
];

function TimelineCard({ exp, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.15,
      }}
      className="relative flex gap-8"
    >
      {/* Timeline */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.15 + 0.3,
            duration: 0.5,
            type: "spring",
          }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center font-space font-bold text-sm flex-shrink-0 z-10"
          style={{
            background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}15)`,
            border: `1px solid ${exp.color}40`,
            color: exp.color,
            boxShadow: `0 0 20px ${exp.color}20`,
          }}
        >
          {exp.logo}
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{
              delay: index * 0.15 + 0.5,
              duration: 0.8,
            }}
            className="w-px flex-1 mt-3 origin-top"
            style={{
              background: `linear-gradient(to bottom, ${exp.color}40, transparent)`,
            }}
          />
        )}
      </div>

      {/* Experience Card */}
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: `0 20px 60px ${exp.color}12`,
        }}
        className="flex-1 p-6 rounded-2xl mb-10 card-hover glass-card"
        style={{
          border: `1px solid ${exp.color}15`,
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        data-cursor-hover
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3
              className="font-space font-bold text-lg mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {exp.role}
            </h3>

            <div className="flex items-center gap-2">
              <span
                className="font-semibold text-base"
                style={{ color: exp.color }}
              >
                {exp.company}
              </span>
              <ExternalLink size={12} style={{ color: "var(--color-muted)" }} />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1">
            <div
              className="flex items-center gap-1.5 text-xs font-mono-custom"
              style={{ color: "var(--color-muted)" }}
            >
              <Calendar size={12} />
              {exp.period}
            </div>

            <span
              className="px-2.5 py-1 rounded-full text-xs font-mono-custom"
              style={{
                background: `${exp.color}15`,
                color: exp.color,
                border: `1px solid ${exp.color}25`,
              }}
            >
              {exp.duration}
            </span>
          </div>
        </div>

        <ul className="space-y-2 mb-5">
          {exp.highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm"
              style={{
                color: "var(--color-muted)",
                lineHeight: "1.6",
              }}
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: exp.color }}
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-mono-custom"
              style={{
                background: `${exp.color}10`,
                color: exp.color,
                border: `1px solid ${exp.color}20`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">02 — Experience</p>

          <h2
            className="font-space font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Where I've <span className="gradient-text">Worked</span>
          </h2>

          <p
            className="max-w-xl mx-auto text-base"
            style={{
              color: "var(--color-muted)",
              lineHeight: "1.7",
            }}
          >
            Professional journey building real-world products used by thousands
            of users.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineCard
              key={exp.company}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

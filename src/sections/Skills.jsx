import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const skills = [
  { name: "ReactJS", level: 95, color: "#61dafb" },
  { name: "TypeScript", level: 90, color: "#3178c6" },
  { name: "JavaScript", level: 92, color: "#f7df1e" },
  { name: "Redux Toolkit", level: 88, color: "#764abc" },
  { name: "Tailwind CSS", level: 93, color: "#38bdf8" },
  { name: "GraphQL", level: 80, color: "#e535ab" },
  { name: "NodeJS", level: 75, color: "#339933" },
  { name: "REST APIs", level: 90, color: "#22d3ee" },
  { name: "System Design", level: 82, color: "#f59e0b" },
  { name: "DSA", level: 78, color: "#10b981" },
  { name: "AI/LLM Integration", level: 75, color: "#a78bfa" },
  { name: "Performance Opt.", level: 85, color: "#fb7185" },
];

const CIRCUMFERENCE = 2 * Math.PI * 40;

function SkillRing({ skill, index }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        strokeDashoffset: CIRCUMFERENCE * (1 - skill.level / 100),
        transition: {
          duration: 1.4,
          delay: index * 0.06,
          ease: [0.23, 1, 0.32, 1],
        },
      });
    }
  }, [inView, controls, skill.level, index]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl glass-card cursor-default"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s ease",
      }}
      data-cursor-hover
    >
      <div className="relative w-24 h-24">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Track */}
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="5"
          />
          {/* Progress */}
          <motion.circle
            ref={ref}
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke={skill.color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={controls}
            style={{ filter: `drop-shadow(0 0 6px ${skill.color}80)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-space font-bold text-lg"
            style={{ color: skill.color }}
          >
            {skill.level}
          </span>
        </div>
      </div>
      <span
        className="text-xs font-mono-custom text-center leading-tight"
        style={{ color: "var(--color-muted)", letterSpacing: "0.05em" }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">04 — Skills</p>
          <h2
            className="font-space font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "var(--color-muted)", lineHeight: "1.7" }}
          >
            Technologies and tools I use to build exceptional products.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <SkillRing key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Marquee tech bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl glass-card py-5"
          style={{ border: "1px solid rgba(56,189,248,0.1)" }}
        >
          <div
            className="flex items-center gap-8 whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="text-sm font-mono-custom flex-shrink-0 flex items-center gap-2"
                style={{ color: skill.color }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: skill.color }}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

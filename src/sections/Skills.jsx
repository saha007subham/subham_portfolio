import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Award } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Core",
      icon: Laptop,
      color: "var(--color-primary)",
      glowColor: "rgba(56,189,248,0.15)",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "JavaScript & TypeScript", level: 92 },
        { name: "Tailwind CSS & Sass", level: 98 },
        { name: "Three.js & R3F", level: 80 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend & Systems",
      icon: Database,
      color: "var(--color-accent)",
      glowColor: "rgba(34,211,238,0.15)",
      skills: [
        { name: "Node.js & Express", level: 85 },
        { name: "GraphQL & REST APIs", level: 90 },
        { name: "SQL & NoSQL DBs", level: 82 },
        { name: "Python & FastAPI", level: 75 },
        { name: "WebRTC & WebSockets", level: 80 },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Cpu,
      color: "var(--color-secondary)",
      glowColor: "rgba(167,139,250,0.15)",
      skills: [
        { name: "Git & Collaborative Flow", level: 95 },
        { name: "Vite, Webpack & Esbuild", level: 88 },
        { name: "Docker Containers", level: 75 },
        { name: "AWS Cloud Basics", level: 70 },
        { name: "Figma UI/UX Design", level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none filter blur-[150px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono-custom tracking-[0.2em] uppercase text-[var(--color-primary)] font-semibold">
            My Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Technical <span className="gradient-text glow-text">Expertise</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                variants={cardVariants}
                className="p-8 rounded-[2rem] glass-card border-opacity-25 hover:border-opacity-65 transition-all duration-300 flex flex-col justify-between"
                style={{
                  boxShadow: `0 8px 32px 0 ${cat.glowColor}`,
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${cat.color}15`,
                        border: `1px solid ${cat.color}30`,
                        color: cat.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-space font-bold text-[var(--color-text)]">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Progress Lines */}
                  <div className="space-y-6">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-space font-semibold text-[var(--color-text)]">
                            {skill.name}
                          </span>
                          <span className="font-mono-custom text-xs text-[var(--color-muted)]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Progress Bar Container */}
                        <div className="h-1.5 w-full bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-5 rounded-full overflow-hidden border border-opacity-5" style={{ borderColor: "var(--color-muted)" }}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${cat.color}, var(--color-accent))`,
                              boxShadow: `0 0 8px ${cat.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-opacity-5 flex items-center gap-2" style={{ borderColor: "var(--color-muted)" }}>
                  <Award size={14} style={{ color: cat.color }} />
                  <span className="text-[10px] font-mono-custom uppercase tracking-wider text-[var(--color-muted)]">
                    Advanced Proficiency Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

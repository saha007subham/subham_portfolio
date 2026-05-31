import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Compass, Code, Brain } from "lucide-react";

const Github = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "Three.js", "AI & Systems"];

  const projects = [
    {
      title: "Aetherial Canvas",
      category: "Three.js",
      desc: "Interactive 3D particle design workspace built using React Three Fiber, allowing real-time physics editing and shader compilations.",
      icon: Compass,
      tags: ["React Three Fiber", "Three.js", "Shaders", "Zustand"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
    {
      title: "Omni Mind Dashboard",
      category: "AI & Systems",
      desc: "Sleek glassmorphic analytics suite with integrated LLM streaming responses, interactive pipeline graphs, and database telemetry.",
      icon: Brain,
      tags: ["Next.js", "OpenAI API", "Recharts", "Prisma"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
    {
      title: "Synapse Code Suite",
      category: "React",
      desc: "Next-gen collaborative markdown and code editor, powered by WebRTC sync, active compilation trees, and custom workspace themes.",
      icon: Code,
      tags: ["React 19", "WebRTC", "Monaco Editor", "Tailwind CSS"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
    {
      title: "Helix Component Library",
      category: "React",
      desc: "Stunning, production-ready component catalog utilizing Framer Motion, strict accessibility patterns, and robust CSS variable systems.",
      icon: Layers,
      tags: ["React", "Framer Motion", "CSS Variables", "Storybook"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
    {
      title: "Lumen Raycaster",
      category: "Three.js",
      desc: "Experimental light raycasting and environment simulator inside WebGL canvas, testing custom shader glass reflection metrics.",
      icon: Compass,
      tags: ["Three.js", "WebGL", "GLSL Shaders", "Vite"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
    {
      title: "Titan Telemetry",
      category: "AI & Systems",
      desc: "High-performance systems monitor utilizing micro-frontends, telemetry streams, and lightweight WebAssembly data parsers.",
      icon: Brain,
      tags: ["React", "Rust/Wasm", "WebSockets", "Tailwind CSS"],
      demo: "https://react.dev",
      github: "https://github.com",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient highlights */}
      <div
        className="absolute right-0 bottom-10 w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[150px] opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-primary), transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 top-10 w-[450px] h-[450px] rounded-full pointer-events-none filter blur-[130px] opacity-5"
        style={{
          background: "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono-custom tracking-[0.2em] uppercase text-[var(--color-primary)] font-semibold">
            My Works
          </span>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Featured <span className="gradient-text glow-text">Projects</span>
          </h2>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-5 py-2.5 rounded-full text-xs md:text-sm font-space font-semibold transition-all duration-300 relative overflow-hidden cursor-pointer"
                style={{
                  background:
                    filter === cat
                      ? "transparent"
                      : "rgba(255,255,255,0.03)",
                  border: `1px solid ${
                    filter === cat
                      ? "rgba(56,189,248,0.3)"
                      : "rgba(255,255,255,0.05)"
                  }`,
                  color: filter === cat ? "var(--color-primary)" : "var(--color-muted)",
                }}
              >
                {cat}
                {filter === cat && (
                  <motion.span
                    layoutId="activeFilterTab"
                    className="absolute inset-0 z-[-1] rounded-full"
                    style={{
                      background: "rgba(56, 189, 248, 0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  key={proj.title}
                  className="p-8 rounded-[2rem] glass-card flex flex-col justify-between border-opacity-25 hover:border-opacity-65 group relative overflow-hidden"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-[var(--color-primary)]"
                        style={{
                          background: "rgba(56,189,248,0.08)",
                          border: "1px solid rgba(56,189,248,0.15)",
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <span
                        className="text-[10px] font-mono-custom uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "var(--color-muted)",
                        }}
                      >
                        {proj.category}
                      </span>
                    </div>

                    {/* Meta info */}
                    <h3 className="text-xl font-space font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)] mb-6">
                      {proj.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-1 rounded font-mono-custom text-[var(--color-muted)]"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 border-t border-opacity-5 pt-5" style={{ borderColor: "var(--color-muted)" }}>
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-space font-bold text-[var(--color-primary)] hover:underline"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-space font-bold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

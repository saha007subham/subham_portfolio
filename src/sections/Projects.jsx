import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Layers, Zap, Moon, Smartphone } from "lucide-react";

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
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

const projects = [
  {
    name: "SnapUI",
    tagline: "Modern React Component Platform",
    description:
      "A developer-focused UI platform featuring copy-paste React components. Built for modern developers who need production-ready, accessible components with zero friction.",
    tech: ["React.js", "Tailwind CSS", "Vite", "React Router"],
    features: [
      { icon: Layers, label: "Copy-paste Components" },
      { icon: Moon, label: "Dark Mode" },
      { icon: Smartphone, label: "Responsive Layouts" },
      { icon: Zap, label: "Smooth Transitions" },
    ],
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8, #22d3ee)",
    glow: "rgba(56,189,248,0.25)",
    borderColor: "rgba(56,189,248,0.2)",
    github: "https://github.com/saha007subham/snap-ui",
    demo: "https://snap-ui-two.vercel.app/",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Featured",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.15,
      }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovering(false);
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovering ? 1.01 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="rounded-3xl overflow-hidden glass-card"
        style={{
          border: `1px solid ${project.borderColor}`,
          boxShadow: hovering
            ? `0 20px 80px ${project.glow}, 0 0 0 1px ${project.borderColor}`
            : `0 4px 30px rgba(0,0,0,0.3)`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          transition: "box-shadow 0.4s ease",
        }}
        data-cursor-hover
      >
        {/* Image section */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
            animate={{ scale: hovering ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 30%, rgba(2,4,8,0.9) 100%)",
            }}
          />

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 rounded-full text-xs font-mono-custom tracking-wider"
              style={{
                background: project.gradient,
                color: "#020408",
                fontWeight: 600,
              }}
            >
              {project.badge}
            </span>
          </div>

          {/* Buttons overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: hovering ? 1 : 0, y: hovering ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 flex gap-2"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl glass-card"
              style={{ border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Github size={16} style={{ color: "var(--color-text)" }} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-xl"
              style={{ background: project.gradient }}
            >
              <ExternalLink size={16} style={{ color: "#020408" }} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-4">
            <h3
              className="font-space font-bold text-2xl mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm font-mono-custom"
              style={{ color: "var(--color-primary)" }}
            >
              {project.tagline}
            </p>
          </div>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "var(--color-muted)", lineHeight: "1.7" }}
          >
            {project.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 p-3 rounded-xl"
                style={{
                  background: "rgba(56,189,248,0.04)",
                  border: "1px solid rgba(56,189,248,0.08)",
                }}
              >
                <Icon
                  size={14}
                  style={{ color: "var(--color-primary)", flexShrink: 0 }}
                />
                <span
                  className="text-xs"
                  style={{ color: "var(--color-muted)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono-custom"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--color-muted)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold glass-card"
              style={{
                color: "var(--color-text)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              data-cursor-hover
            >
              <Github size={15} /> GitHub
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 30px ${project.glow}`,
              }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
              style={{ background: project.gradient, color: "#020408" }}
              data-cursor-hover
            >
              <ExternalLink size={15} /> Live Demo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">03 — Projects</p>
          <h2
            className="font-space font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
            }}
          >
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-base"
            style={{ color: "var(--color-muted)", lineHeight: "1.7" }}
          >
            Side projects and open-source work that showcase my approach to
            building premium experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

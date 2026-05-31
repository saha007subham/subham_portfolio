import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profileImg from "../assets/LinkedIn_img.png";

const skills = [
  "ReactJS",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Tailwind CSS",
  "GraphQL",
  "NodeJS",
  "REST APIs",
  "Performance Optimization",
  "System Design",
  "UI/UX",
  "Git",
];

const highlights = [
  "Built and shipped a gamification platform used by thousands of users globally",
  "Independently designed core features and owned product from concept to production",
  "Optimized rendering performance across devices for seamless user experience",
  "Integrated GraphQL APIs and complex data pipelines",
  "Collaborated with cross-functional teams at Flyy on production-ready applications",
  "Focus on writing efficient, reusable, and maintainable code",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <div>
            <motion.p variants={item} className="section-label mb-4">
              01 — About Me
            </motion.p>
            <motion.h2
              variants={item}
              className="font-space font-bold mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
              }}
            >
              Frontend Engineer building{" "}
              <span className="gradient-text">scalable systems</span>
            </motion.h2>
          </div>

          {/* Main Content Grid */}
          <motion.div
            variants={item}
            className="grid lg:grid-cols-3 gap-8 items-start"
          >
            {/* Left: Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div
                className="relative w-full max-w-xs rounded-[2rem] overflow-hidden glass-card"
                style={{
                  border: "1px solid rgba(56,189,248,0.15)",
                  boxShadow:
                    "0 0 60px rgba(56,189,248,0.15), inset 0 0 30px rgba(56,189,248,0.05)",
                }}
              >
                <div className="aspect-[3/3] overflow-hidden">
                  <motion.img
                    src={profileImg}
                    alt="Subham Saha"
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                {/* Decorative corner accents */}
                <div
                  className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2"
                  style={{ borderColor: "#38bdf8" }}
                />
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2"
                  style={{ borderColor: "#38bdf8" }}
                />
              </div>
            </motion.div>

            {/* Right: Bio and Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Bio */}
              <motion.div variants={item} className="space-y-4">
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-muted)", lineHeight: "1.8" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    Frontend Engineer with 3+ years
                  </span>{" "}
                  of experience building scalable, high-performance web
                  applications using React.js, JavaScript, and modern UI
                  technologies. I specialize in creating responsive,
                  user-centric interfaces with a strong focus on performance
                  optimization, clean architecture, and maintainable code.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-muted)", lineHeight: "1.8" }}
                >
                  I have independently built and shipped a{" "}
                  <span className="font-semibold" style={{ color: "#38bdf8" }}>
                    gamification platform used by thousands of users globally
                  </span>
                  , where I was responsible for designing and developing core
                  features, optimizing rendering performance, and ensuring a
                  seamless user experience across devices.
                </p>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-muted)", lineHeight: "1.8" }}
                >
                  Currently at{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    Flyy
                  </span>
                  , I contribute to building production-ready applications,
                  collaborating with cross-functional teams, and continuously
                  improving system performance, scalability, and usability.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div variants={item} className="space-y-2">
                {highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-muted)", lineHeight: "1.6" }}
                    >
                      {highlight}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Core Values */}
              <motion.div
                variants={item}
                className="grid grid-cols-2 gap-4 pt-2"
              >
                {[
                  { label: "Problem Solving", icon: "🎯" },
                  { label: "Continuous Learning", icon: "📚" },
                  { label: "Clean Code", icon: "✨" },
                  { label: "User Impact", icon: "🚀" },
                ].map(({ label, icon }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl glass-card"
                    style={{ border: "1px solid rgba(56,189,248,0.1)" }}
                  >
                    <div className="text-2xl mb-2">{icon}</div>
                    <div
                      className="text-xs font-mono-custom"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={item} className="pt-6">
            <h3
              className="font-space font-bold text-lg mb-5"
              style={{ color: "var(--color-text)" }}
            >
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 0 20px rgba(56,189,248,0.3)",
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono-custom tracking-wide glass-card cursor-default"
                  style={{
                    color: "var(--color-primary)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    background: "rgba(56,189,248,0.04)",
                    transition: "all 0.3s ease",
                  }}
                  data-cursor-hover
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-4 pt-4">
            {[
              { value: "3+", label: "Years Building", desc: "Production Apps" },
              { value: "10K+", label: "Users Reached", desc: "Global Impact" },
              { value: "20+", label: "Projects", desc: "Shipped" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card text-center"
                style={{ border: "1px solid rgba(56,189,248,0.1)" }}
              >
                <div className="font-space font-bold text-3xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div
                  className="text-xs font-mono-custom"
                  style={{
                    color: "var(--color-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

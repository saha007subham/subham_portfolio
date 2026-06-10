import { useEffect, useRef, Component } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, ExternalLink } from "lucide-react";
import HeroScene from "../components/HeroScene";

class ErrorBoundaryHero extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
const typewriterWords = [
  "React Applications",
  "TypeScript Systems",
  "AI-Powered Experiences",
  "Scalable Frontends",
];

export default function Hero() {
  const wordRef = useRef(null);
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);
  const timerRef = useRef();

  useEffect(() => {
    const type = () => {
      const word = typewriterWords[wordIndex.current];
      if (!wordRef.current) return;

      if (!deleting.current) {
        wordRef.current.textContent = word.slice(0, charIndex.current + 1);
        charIndex.current++;
        if (charIndex.current === word.length) {
          deleting.current = true;
          timerRef.current = setTimeout(type, 2000);
          return;
        }
      } else {
        wordRef.current.textContent = word.slice(0, charIndex.current - 1);
        charIndex.current--;
        if (charIndex.current === 0) {
          deleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % typewriterWords.length;
        }
      }

      timerRef.current = setTimeout(type, deleting.current ? 60 : 90);
    };

    timerRef.current = setTimeout(type, 800);
    return () => clearTimeout(timerRef.current);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Radial glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(56,189,248,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34,211,238,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(14,165,233,0.06) 0%, transparent 60%)",
        }}
      />

      {/* 3D Scene */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <ErrorBoundaryHero>
          <HeroScene />
        </ErrorBoundaryHero>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-custom tracking-widest glass-card"
              style={{
                color: "var(--color-primary)",
                border: "1px solid rgba(56,189,248,0.2)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-glow-pulse"
                style={{ background: "#38bdf8", boxShadow: "0 0 8px #38bdf8" }}
              />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-space font-bold leading-none mb-4"
            style={{
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "var(--color-text)" }}>Subham</span>{" "}
            <span className="gradient-text glow-text">Saha</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="font-space font-semibold mb-6"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "var(--color-muted)",
            }}
          >
            Frontend Engineer crafting{" "}
            <span className="gradient-text">
              <span ref={wordRef} />
              <span className="animate-pulse" style={{ color: "#38bdf8" }}>
                |
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12"
            style={{ color: "var(--color-muted)", lineHeight: "1.7" }}
          >
            3+ years building scalable React applications used by thousands of
            users worldwide. Specializing in TypeScript, performance
            optimization, and AI-powered web experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollTo("#projects")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(56,189,248,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm magnetic-btn"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
                color: "#020408",
                fontFamily: "Space Grotesk",
                boxShadow: "0 0 20px rgba(56,189,248,0.3)",
              }}
              data-cursor-hover
            >
              <ExternalLink size={16} />
              View Projects
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm glass-card magnetic-btn"
              style={{
                color: "var(--color-text)",
                border: "1px solid rgba(56,189,248,0.25)",
                fontFamily: "Space Grotesk",
              }}
              data-cursor-hover
            >
              <Download size={16} />
              Resume
            </motion.a>

            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm glass-card magnetic-btn"
              style={{
                color: "var(--color-primary)",
                border: "1px solid rgba(56,189,248,0.2)",
                fontFamily: "Space Grotesk",
              }}
              data-cursor-hover
            >
              <Mail size={16} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-10 mt-16"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "2K+", label: "Followers" },
              { value: "20+", label: "Projects Built" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-space font-bold text-3xl gradient-text">
                  {stat.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{
                    color: "var(--color-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--color-muted)" }}
        data-cursor-hover
      >
        {/* <span className="text-xs font-mono-custom tracking-widest" style={{ letterSpacing: '0.2em' }}>SCROLL</span> */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--color-primary)" }} />
        </motion.div>
      </motion.button>
    </section>
  );
}

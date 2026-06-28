import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

function Tooltip({ text, children, isDark }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full right-[-70px] -translate-x-1/2 mt-3 px-3 py-2 rounded-lg whitespace-nowrap text-xs font-medium pointer-events-none z-50"
            style={{
              background: isDark
                ? "rgba(15,23,42,0.95)"
                : "rgba(255,255,255,0.95)",
              border: `1px solid ${
                isDark ? "rgba(56,189,248,0.3)" : "rgba(2,132,199,0.2)"
              }`,
              color: isDark ? "#38bdf8" : "#0284c7",
              boxShadow: isDark
                ? "0 10px 30px rgba(56,189,248,0.15)"
                : "0 10px 30px rgba(2,132,199,0.1)",
            }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "skills", "contact"];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when section is in the middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 h-16"
        style={{
          background: scrolled
            ? isDark
              ? "rgba(2,4,8,0.85)"
              : "rgba(255,255,255,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? isDark
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(2, 132, 199, 0.1)"
            : "none",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
          data-cursor-hover
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
              boxShadow: "0 0 20px rgba(56,189,248,0.4)",
            }}
          >
            <Code2 size={16} className="text-black" />
          </div>

          <span
            className="font-space font-bold text-sm tracking-wider"
            style={{ color: "var(--color-text)" }}
          >
            Subham S<span className="gradient-text">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className={`text-sm font-medium transition-colors duration-200 section-label ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                }`}
                style={{
                  letterSpacing: "0.05em",
                  fontSize: "0.8rem",
                }}
                data-cursor-hover
              >
                {link.label}
              </motion.button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Tooltip text="Your choice is saved on this device." isDark={isDark}>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full flex items-center justify-center glass-card"
              data-cursor-hover
            >
              {isDark ? (
                <Sun size={15} style={{ color: "var(--color-primary)" }} />
              ) : (
                <Moon size={15} style={{ color: "var(--color-primary)" }} />
              )}
            </motion.button>
          </Tooltip>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono-custom tracking-wider magnetic-btn"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
              color: "#020408",
              boxShadow: "0 0 20px rgba(56,189,248,0.3)",
            }}
            data-cursor-hover
          >
            Hire Me
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full glass-card"
            data-cursor-hover
          >
            {mobileOpen ? (
              <X size={16} style={{ color: "var(--color-primary)" }} />
            ) : (
              <Menu size={16} style={{ color: "var(--color-primary)" }} />
            )}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] flex flex-col pt-20 px-6"
            style={{
              background: isDark
                ? "rgba(2,4,8,0.97)"
                : "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                  className={`py-5 text-left text-2xl font-space font-semibold border-b transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                  }`}
                  style={{
                    borderColor: "var(--color-border)",
                  }}
                >
                  {link.label}
                </motion.button>
              );
            })}

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 py-4 rounded-full text-center text-lg font-semibold"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
                color: "#020408",
              }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

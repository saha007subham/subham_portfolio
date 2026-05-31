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
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 rounded-lg whitespace-nowrap text-xs font-medium pointer-events-none z-50 font-space"
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
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section for highlight
      const scrollPos = window.scrollY + 200;
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 glass-card border-b border-opacity-50"
          : "py-6 bg-transparent border-transparent"
      }`}
      style={{
        borderBottomColor: scrolled ? "var(--color-border)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand/Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
              boxShadow: scrolled
                ? "0 0 15px rgba(56,189,248,0.2)"
                : "none",
            }}
          >
            <Code2 size={20} className="text-black" />
          </motion.div>
          <span className="font-space font-bold text-lg tracking-tight hover:gradient-text transition-all duration-300">
            Subham Saha
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="relative py-2 text-sm font-space font-semibold transition-colors duration-300 hover:text-[var(--color-primary)]"
              style={{
                color:
                  activeSection === link.href
                    ? "var(--color-primary)"
                    : "var(--color-text)",
              }}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #38bdf8, #22d3ee)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <Tooltip text={isDark ? "Activate Light Mode" : "Activate Dark Mode"} isDark={isDark}>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl glass-card flex items-center justify-center cursor-pointer border border-opacity-50 text-[var(--color-primary)]"
              style={{ borderColor: "var(--color-border)" }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </Tooltip>

          {/* Mobile Hamburguer Toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2.5 rounded-xl glass-card flex items-center justify-center border border-opacity-50 text-[var(--color-text)]"
            style={{ borderColor: "var(--color-border)" }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-card mt-4 mx-6 rounded-2xl border border-opacity-50"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left py-3 px-4 rounded-xl font-space font-semibold transition-all duration-300 flex items-center justify-between"
                  style={{
                    background:
                      activeSection === link.href
                        ? "rgba(56, 189, 248, 0.1)"
                        : "transparent",
                    color:
                      activeSection === link.href
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                  }}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <div className="w-1.5 h-1.5 rounded-full animate-glow-pulse" style={{ background: "#38bdf8" }} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certification from "./sections/Certification";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(
    () => !document.body.classList.contains("light-mode"),
  );

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen transition-colors duration-500 bg-[var(--color-bg-primary)] text-[var(--color-text)]">
        {/* Scroll indicator bar */}
        <ScrollProgress />

        {/* Dynamic interactive particle background */}
        <ParticleBackground />

        {/* Primary header navbar */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Main structured portfolio sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certification />
          <Contact />
        </main>

        {/* Footer segment */}
        <Footer />
      </div>
    </>
  );
}

export default App;

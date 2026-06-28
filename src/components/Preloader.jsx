import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingMessages = [
  "Initializing components...",
  "Styling layout structures...",
  "Assembling portfolio nodes...",
  "Fine-tuning animations...",
  "Ready to explore!"
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 350); // Pause briefly at 100%
          return 100;
        }
        
        // Random increment for organic loading feel
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // Cycle messages based on progress
    if (progress < 25) setMessageIndex(0);
    else if (progress < 50) setMessageIndex(1);
    else if (progress < 75) setMessageIndex(2);
    else if (progress < 95) setMessageIndex(3);
    else setMessageIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-bg)] transition-colors duration-500"
    >
      <div className="w-full max-w-md px-8 text-center flex flex-col items-center">
        {/* Glowing Geometric Loader */}
        <div className="relative mb-8 w-20 h-20">
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] opacity-20 animate-ping" />
          {/* Rotating Middle Ring */}
          <div 
            className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[var(--color-accent)] animate-spin" 
            style={{ animationDuration: "1.5s" }}
          />
          {/* Inner Glowing Core */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-80 flex items-center justify-center shadow-lg shadow-[var(--color-glow-sm)]">
            <span className="text-xs font-mono-custom text-black font-bold">SS</span>
          </div>
        </div>

        {/* Counter */}
        <motion.div 
          className="text-5xl font-mono-custom font-extrabold tracking-wider bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] -webkit-background-clip-text -webkit-text-fill-color-transparent bg-clip-text mb-4"
          style={{ textShadow: "0 0 30px var(--color-glow)" }}
        >
          {progress}%
        </motion.div>

        {/* Progress Bar Track */}
        <div className="w-full h-[6px] bg-white bg-opacity-5 rounded-full overflow-hidden mb-6 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#38bdf8] to-[#22d3ee] rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Dynamic Status Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-sm font-space font-medium text-[var(--color-muted)] min-h-[20px]"
          >
            {loadingMessages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

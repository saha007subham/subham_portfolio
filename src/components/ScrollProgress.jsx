import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9997] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #38bdf8, #22d3ee, #67e8f9)",
        boxShadow: "0 0 10px #38bdf8",
      }}
    />
  );
}

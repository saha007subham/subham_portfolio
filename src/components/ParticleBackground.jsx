import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const rafRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDarkMode = document.body.classList.contains("light-mode") === false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const darkColors = [
      "rgba(56,189,248,",
      "rgba(34,211,238,",
      "rgba(103,232,249,",
    ];

    const lightColors = [
      "rgba(2,132,199,",
      "rgba(13,148,215,",
      "rgba(6,182,212,",
    ];

    const colors = isDarkMode ? darkColors : lightColors;

    const count = Math.min(60, Math.floor(window.innerWidth / 20));

    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.2 + 0.4,
      opacity: 0,
      baseOpacity: Math.random() * 0.4 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    const onMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", onMove);

    const draw = () => {
      timeRef.current += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += 0.03;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;

          p.vx -= (dx / dist) * force * 0.015;
          p.vy -= (dy / dist) * force * 0.015;
        }

        p.vx *= 0.985;
        p.vy *= 0.985;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        const pulse = Math.sin(p.pulsePhase) * 0.3 + 0.7;
        p.opacity = p.baseOpacity * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.fill();

        if (isDarkMode && Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.8, 0, Math.PI * 2);

          ctx.strokeStyle = `${p.color}${p.opacity * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        for (
          let j = i + 1;
          j < Math.min(i + 8, particles.current.length);
          j++
        ) {
          const p2 = particles.current[j];

          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;

          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            const linkOpacity =
              Math.max(p.opacity, p2.opacity) * (1 - d / 80) * 0.3;

            ctx.strokeStyle = isDarkMode
              ? `rgba(56,189,248,${linkOpacity})`
              : `rgba(2,132,199,${linkOpacity * 0.6})`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: document.body.classList.contains("light-mode") ? 0.5 : 0.7,
      }}
    />
  );
}

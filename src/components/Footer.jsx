import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
            }}
          >
            <Code2 size={14} className="text-black" />
          </div>

          <span
            className="font-space font-bold text-sm"
            style={{ color: "var(--color-text)" }}
          >
            Subham Saha
          </span>
        </div>

        <p
          className="text-xs flex items-center gap-1.5 font-mono-custom"
          style={{ color: "var(--color-muted)" }}
        >
          Built with
          <Heart size={11} style={{ color: "#fb7185" }} />
          using React + Three.js
        </p>

        <p
          className="text-xs font-mono-custom"
          style={{ color: "var(--color-muted)" }}
        >
          © 2026 Subham Saha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

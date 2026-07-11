"use client";

import { motion } from "framer-motion";

/**
 * Unified section heading: mono console eyebrow + Syne display title
 * with a per-word mask reveal.
 */
export default function SectionHeading({
  eyebrow,
  plain,
  accent,
  isInView,
  align = "left",
  barGradient = "linear-gradient(90deg, #00e5ff, #2979ff)",
}: {
  eyebrow: string;
  plain: string;
  accent: string;
  isInView: boolean;
  align?: "left" | "center";
  barGradient?: string;
}) {
  const words: { text: string; accent: boolean }[] = [
    ...plain.split(" ").map((w) => ({ text: w, accent: false })),
    ...accent.split(" ").map((w) => ({ text: w, accent: true })),
  ];

  return (
    <div style={{ marginBottom: "64px", textAlign: align }}>
      <motion.p
        className="font-mono-ui"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          color: "#00e5ff",
          fontSize: "13px",
          letterSpacing: "0.2em",
          marginBottom: "14px",
          fontWeight: 500,
        }}
      >
        {eyebrow}
      </motion.p>

      <h2
        className="font-display"
        style={{
          fontSize: "clamp(34px, 5vw, 54px)",
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "bottom",
              paddingBottom: "0.12em",
              marginBottom: "-0.12em",
            }}
          >
            <motion.span
              className={word.accent ? "gradient-text" : undefined}
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {word.text}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "80px",
          height: "3px",
          background: barGradient,
          borderRadius: "2px",
          marginTop: "18px",
          transformOrigin: align === "center" ? "center" : "left",
          marginLeft: align === "center" ? "auto" : undefined,
          marginRight: align === "center" ? "auto" : undefined,
        }}
      />
    </div>
  );
}

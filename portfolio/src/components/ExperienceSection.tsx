"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Advanced Application Engineer (AEH) Intern",
    company: "Accenture",
    location: "India",
    period: "May 2026 - Jul 2026",
    color: "#00e5ff",
    bg: "rgba(0, 229, 255, 0.06)",
    points: [
      "Selected as an Advanced Application Engineering (AEH) Intern, working across enterprise-grade application engineering and delivery.",
      "Applied software design, testing, and code-review practices on service-oriented architectures and large-scale systems.",
      "Contributed to full-stack and backend development with a focus on quality, performance, and maintainability.",
    ],
    tech: ["Software Design", "Full-Stack", "Code Review", "SOA"],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        padding: "140px 0",
        background: "linear-gradient(180deg, #030712 0%, #06101e 50%, #030712 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <SectionHeading
          eyebrow="// work_history"
          plain="Work"
          accent="Experience"
          isInView={isInView}
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical glowing line */}
          <div
            style={{
              position: "absolute",
              left: "23px",
              top: "10px",
              bottom: "10px",
              width: "2px",
              background: "linear-gradient(180deg, #00e5ff, #2979ff, #7c4dff, #00e5ff)",
              borderRadius: "2px",
              boxShadow: "0 0 8px rgba(0,229,255,0.3)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{ position: "relative", paddingLeft: "64px" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "16px",
                    top: "28px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}, 0 0 24px ${exp.color}50`,
                    zIndex: 2,
                    border: "2px solid #030712",
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    borderColor: `${exp.color}35`,
                    boxShadow: `0 4px 30px ${exp.color}12`,
                    x: 6,
                  }}
                  style={{
                    background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
                    border: "1px solid rgba(0, 229, 255, 0.08)",
                    borderRadius: "16px",
                    padding: "28px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "6px" }}>
                    <h3 className="font-display" style={{ color: "white", fontSize: "19px", fontWeight: 700 }}>
                      {exp.role}
                    </h3>
                    <span style={{ color: exp.color, fontSize: "12px", fontWeight: 600, padding: "4px 12px", background: exp.bg, borderRadius: "20px", border: `1px solid ${exp.color}25`, whiteSpace: "nowrap" }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: exp.color, fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
                    {exp.company} &middot; <span style={{ color: "#80cbc4", fontWeight: 500 }}>{exp.location}</span>
                  </p>

                  {/* Points */}
                  <div style={{ marginBottom: "20px" }}>
                    {exp.points.map((p) => (
                      <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: exp.color, boxShadow: `0 0 6px ${exp.color}`, marginTop: "7px", flexShrink: 0 }} />
                        <span style={{ color: "#80cbc4", fontSize: "13px", lineHeight: 1.7 }}>{p}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "4px 14px",
                          fontSize: "11px",
                          borderRadius: "20px",
                          border: `1px solid ${exp.color}25`,
                          color: exp.color,
                          background: exp.bg,
                          fontFamily: "monospace",
                          fontWeight: 600,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

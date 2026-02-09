"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "BigDocs",
    subtitle: "Healthcare Management System",
    description:
      "Comprehensive healthcare analytics platform featuring AI disease prediction with 92% accuracy across 100+ diseases. Built real-time appointment system supporting 50+ concurrent users with data-driven insights for managing 1000+ medical records daily.",
    tech: ["Python", "ML", "Statistical Modeling", "Data Analytics", "Real-time Systems"],
    highlights: [
      "92% AI accuracy across 100+ diseases",
      "50+ concurrent users supported",
      "1000+ daily medical records",
    ],
    github: "https://github.com/divanshu0212",
    demo: "#",
    gradient: "linear-gradient(135deg, #00e5ff, #2979ff)",
    accent: "#00e5ff",
    accentBg: "rgba(0, 229, 255, 0.06)",
  },
  {
    title: "TrackFolio",
    subtitle: "AI-Powered Career Analytics Platform",
    description:
      "Sophisticated ATS tracking system with multi-dimensional scoring across 15+ parameters, achieving 12% improvement in compatibility scores. Implemented intelligent data processing pipelines delivering 3.2x improvement in system performance.",
    tech: ["NLP", "TF-IDF", "Semantic Similarity", "Cosine Similarity", "Analytics"],
    highlights: [
      "15+ parameter scoring system",
      "89% accuracy improvement via NLP & ML",
      "3.2x performance improvement",
    ],
    github: "https://github.com/divanshu0212",
    demo: "",
    gradient: "linear-gradient(135deg, #2979ff, #7c4dff)",
    accent: "#2979ff",
    accentBg: "rgba(41, 121, 255, 0.06)",
  },
  {
    title: "Plant Z",
    subtitle: "AI-Powered Plant Healthcare Analytics",
    description:
      "CNN-based ML pipeline achieving 98% accuracy on 87K+ plant disease images. Designed analytics dashboard for tracking engagement, care patterns, and community data. Integrated Gemini API with conversation analytics and token optimization.",
    tech: ["CNN", "TensorFlow", "Gemini API", "Data Viz", "Predictive Analytics"],
    highlights: [
      "98% accuracy on 87K+ images",
      "Gemini API integration",
      "Analytics dashboard with KPIs",
    ],
    github: "https://github.com/divanshu0212",
    demo: "#",
    gradient: "linear-gradient(135deg, #7c4dff, #00e5ff)",
    accent: "#7c4dff",
    accentBg: "rgba(124, 77, 255, 0.06)",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
    >
      <motion.div
        whileHover={{
          borderColor: `${project.accent}40`,
          boxShadow: `0 8px 40px ${project.accent}15, 0 0 0 1px ${project.accent}20`,
          y: -8,
        }}
        style={{
          background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.08)",
          borderRadius: "20px",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top accent bar */}
        <div style={{ height: "3px", background: project.gradient }} />

        <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <h3 style={{ color: "white", fontSize: "22px", fontWeight: 800, marginBottom: "4px" }}>
                {project.title}
              </h3>
              <p style={{ color: project.accent, fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em" }}>
                {project.subtitle}
              </p>
            </div>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: project.accentBg,
                border: `1px solid ${project.accent}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <p style={{ color: "#80cbc4", fontSize: "14px", lineHeight: 1.75, marginBottom: "20px" }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: "24px" }}>
            {project.highlights.map((h) => (
              <div key={h} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: project.accent, boxShadow: `0 0 6px ${project.accent}` }} />
                <span style={{ color: "#b2dfdb", fontSize: "13px" }}>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px", marginTop: "auto" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "4px 14px",
                  fontSize: "11px",
                  borderRadius: "20px",
                  border: `1px solid ${project.accent}25`,
                  color: project.accent,
                  background: project.accentBg,
                  fontFamily: "monospace",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3, color: "#00e5ff" }}
                style={{ color: "#80cbc4", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: 500 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3, color: "#00e5ff" }}
                style={{ color: "#80cbc4", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", fontWeight: 500 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "140px 0",
        background: "linear-gradient(180deg, #030712 0%, #071222 50%, #030712 100%)",
      }}
    >
      {/* Hex subtle overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 40 L30 55 L5 40 L5 20 Z' fill='none' stroke='%2300e5ff' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ color: "#00e5ff", fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>
            {"// What I've Built"}
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #00e5ff, #7c4dff)", borderRadius: "2px", marginTop: "16px" }} />
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

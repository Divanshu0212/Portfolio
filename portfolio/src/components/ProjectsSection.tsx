"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Delivrd",
    subtitle: "Agentic AI Payment & Verification Platform",
    description:
      "Autonomous AI payment platform with cryptographic escrow that won 1st place at Cognizance 2026, IIT Roorkee — Asia's second-largest student-run tech fest. Agentic workflows drive verification and settlement end-to-end with zero manual intervention.",
    tech: ["Agentic AI", "LLM Orchestration", "Cryptographic Escrow", "FastAPI", "Multi-Agent"],
    highlights: [
      "🏆 1st place — Cognizance 2026, IIT Roorkee",
      "Autonomous agentic payment workflows",
      "Cryptographic escrow verification",
    ],
    github: "https://github.com/divanshu0212",
    demo: "",
    gradient: "linear-gradient(135deg, #00e5ff, #2979ff)",
    accent: "#00e5ff",
    accentBg: "rgba(0, 229, 255, 0.06)",
  },
  {
    title: "EduHub",
    subtitle: "13-Microservice Multi-Tenant University ERP",
    description:
      "Multi-tenant university ERP spanning 13 microservices across service-oriented modules with large-scale databases, winner of the MongoDB Track at HackByte 4.0 (MLH Official 2026). Led all backend architecture across the platform.",
    tech: ["Microservices", "MongoDB", "Node.js", "RabbitMQ", "Docker"],
    highlights: [
      "🏆 MongoDB Track Winner — HackByte 4.0 (MLH)",
      "13-microservice multi-tenant architecture",
      "Led all backend architecture design",
    ],
    github: "https://github.com/Divanshu0212/ERP",
    demo: "",
    gradient: "linear-gradient(135deg, #2979ff, #7c4dff)",
    accent: "#2979ff",
    accentBg: "rgba(41, 121, 255, 0.06)",
  },
  {
    title: "ELIXA",
    subtitle: "AI Agent Layer for the EduHub ERP",
    description:
      "AI-agent integration layer built for EduHub's 13-microservice ERP, part of the MongoDB Track win at HackByte 4.0 (MLH Official 2026). Orchestrates multi-agent workflows across service boundaries to automate ERP operations end-to-end.",
    tech: ["AI Agents", "Multi-Agent Orchestration", "MongoDB", "Node.js"],
    highlights: [
      "🏆 MongoDB Track Winner — HackByte 4.0 (MLH)",
      "Multi-agent orchestration across microservices",
      "Automates ERP workflows end-to-end",
    ],
    github: "https://github.com/Divanshu0212/Elixa",
    demo: "",
    gradient: "linear-gradient(135deg, #7c4dff, #2979ff)",
    accent: "#7c4dff",
    accentBg: "rgba(124, 77, 255, 0.06)",
  },
  {
    title: "SalesPipe",
    subtitle: "Multi-Tenant B2B Sales CRM (Event-Driven)",
    description:
      "Modular monolith B2B Sales CRM spanning 10 domain modules with compile-time boundary enforcement (Spring Modulith + ArchUnit), deployed on Kubernetes with HPA autoscaling. Transactional-outbox event backbone (Debezium CDC → Kafka) with idempotent, dedupe-backed consumers, plus an AI lead-scoring pipeline fusing Sentence-BERT embeddings with XGBoost/LightGBM behind a Resilience4j circuit breaker.",
    tech: ["Java 21", "Spring Boot 3", "Kafka", "Debezium CDC", "Kubernetes", "Sentence-BERT", "XGBoost"],
    highlights: [
      "10 domain modules, boundary-enforced",
      "Debezium CDC → Kafka outbox event backbone",
      "AI lead-scoring gated on AUC-ROC & precision@k",
    ],
    github: "https://github.com/divanshu0212",
    demo: "",
    gradient: "linear-gradient(135deg, #00e5ff, #7c4dff)",
    accent: "#00b8d4",
    accentBg: "rgba(0, 184, 212, 0.06)",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Cursor-tracked spotlight + 3D tilt
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotOpacity = useMotionValue(0);
  const tiltX = useSpring(useMotionValue(0), { stiffness: 200, damping: 24 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 200, damping: 24 });
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x}px ${y}px, ${project.accent}14, transparent 65%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotX.set(x);
    spotY.set(y);
    tiltX.set(((y - rect.height / 2) / rect.height) * -4);
    tiltY.set(((x - rect.width / 2) / rect.width) * 4);
  };

  const handleMouseLeave = () => {
    spotOpacity.set(0);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => spotOpacity.set(1)}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          borderColor: `${project.accent}40`,
          boxShadow: `0 8px 40px ${project.accent}15, 0 0 0 1px ${project.accent}20`,
        }}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
          background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 229, 255, 0.08)",
          borderRadius: "20px",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Spotlight overlay */}
        <motion.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: spotlight,
            opacity: spotOpacity,
            pointerEvents: "none",
            zIndex: 1,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Top accent bar */}
        <div style={{ height: "3px", background: project.gradient, position: "relative", zIndex: 2 }} />

        <div style={{ padding: "32px", flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 2 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <h3 className="font-display" style={{ color: "white", fontSize: "22px", fontWeight: 800, marginBottom: "4px" }}>
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
        <SectionHeading
          eyebrow="// shipped"
          plain="Featured"
          accent="Projects"
          isInView={isInView}
          barGradient="linear-gradient(90deg, #00e5ff, #7c4dff)"
        />

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

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    title: "Cognizance 2026, IIT Roorkee",
    highlight: "🥇 1st Place — Asia's 2nd-largest student tech fest",
    description:
      "Won 1st place by creating Delivrd, an agentic AI payment and verification platform with cryptographic escrow, at Asia's second-largest student-run tech fest.",
    icon: "🏆",
    color: "#FFD700",
    bg: "rgba(255, 215, 0, 0.06)",
  },
  {
    title: "HackByte 4.0 (MLH Official 2026)",
    highlight: "MongoDB Track Winner | Top 8 at HackByte 3.0",
    description:
      "Won the MongoDB Track with ELIXA, leading all backend architecture and AI-agent integration. Also placed Top 8 at HackByte 3.0 among 120 teams selected from 1,200+ nationwide participants.",
    icon: "🥇",
    color: "#00e5ff",
    bg: "rgba(0, 229, 255, 0.06)",
  },
  {
    title: "Competitive Programming",
    highlight: "LeetCode Knight | 4★ CodeChef | Codeforces Pupil",
    description:
      "Achieved Knight badge on LeetCode, 4-star rating on CodeChef, and Pupil rating on Codeforces — demonstrating strong DSA and algorithmic problem-solving skills.",
    icon: "⚡",
    color: "#7c4dff",
    bg: "rgba(124, 77, 255, 0.06)",
  },
  {
    title: "Flipkart Grid 7.0",
    highlight: "Semi-finalist",
    description:
      "Semi-finalist in one of India's largest engineering challenges, competing in advanced system design and competitive programming.",
    icon: "🚀",
    color: "#2979ff",
    bg: "rgba(41, 121, 255, 0.06)",
  },
  {
    title: "Leadership & Communication",
    highlight: "City-wide Debate Initiative — 20+ Teams",
    description:
      "Piloted a city-wide debate initiative involving 20+ competing teams, building stakeholder management and communication skills.",
    icon: "🎤",
    color: "#00e5ff",
    bg: "rgba(0, 229, 255, 0.06)",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      style={{
        position: "relative",
        padding: "140px 0",
        background: "linear-gradient(180deg, #030712 0%, #050d1a 50%, #030712 100%)",
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
          eyebrow="// milestones"
          plain="Key"
          accent="Achievements"
          isInView={isInView}
          barGradient="linear-gradient(90deg, #FFD700, #00e5ff)"
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
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
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
                    background: a.color,
                    boxShadow: `0 0 12px ${a.color}, 0 0 24px ${a.color}50`,
                    zIndex: 2,
                    border: "2px solid #030712",
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    borderColor: `${a.color}35`,
                    boxShadow: `0 4px 30px ${a.color}12`,
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
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: a.bg,
                        border: `1px solid ${a.color}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {a.icon}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 className="font-display" style={{ color: "white", fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>
                        {a.title}
                      </h3>
                      <p style={{ color: a.color, fontSize: "13px", fontWeight: 600, marginBottom: "10px", letterSpacing: "0.02em" }}>
                        {a.highlight}
                      </p>
                      <p style={{ color: "#80cbc4", fontSize: "13px", lineHeight: 1.7 }}>
                        {a.description}
                      </p>
                    </div>
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

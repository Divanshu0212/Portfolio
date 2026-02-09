"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    title: "HackByte 3.0",
    highlight: "Top 8 among 1,200+ teams",
    description:
      "Secured top 8 position among elite 120 teams selected from over 1,200 participating teams nationwide, demonstrating exceptional analytical problem-solving skills.",
    icon: "🏆",
    color: "#FFD700",
    bg: "rgba(255, 215, 0, 0.06)",
  },
  {
    title: "Flipkart Grid 7.0",
    highlight: "Semi-finalist",
    description:
      "Semi-finalist in one of India's largest tech challenges, showcasing advanced problem-solving capabilities and technical expertise in competitive programming.",
    icon: "🚀",
    color: "#00e5ff",
    bg: "rgba(0, 229, 255, 0.06)",
  },
  {
    title: "Competitive Programming",
    highlight: "Knight Badge | 4★ CodeChef | Pupil Codeforces",
    description:
      "Achieved Knight badge on LeetCode, attained 4-star rating on CodeChef, and reached Pupil rating on Codeforces, demonstrating strong problem-solving abilities.",
    icon: "⚡",
    color: "#7c4dff",
    bg: "rgba(124, 77, 255, 0.06)",
  },
  {
    title: "Leadership & Communication",
    highlight: "City-wide Debate Initiative — 20+ Teams",
    description:
      "Piloted city-wide debate initiative involving 20+ competing teams, demonstrating stakeholder management and communication skills.",
    icon: "🎤",
    color: "#2979ff",
    bg: "rgba(41, 121, 255, 0.06)",
  },
  {
    title: "Technical Innovation",
    highlight: "Robo Rush 2024 — 5th out of 50+ Teams",
    description:
      "Built a line-following, remote-controlled robot car that can pick up and move weights over long distances at IIITDMJ's Robo Rush 2024 competition.",
    icon: "🤖",
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
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ color: "#00e5ff", fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>
            {"// Milestones"}
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #FFD700, #00e5ff)", borderRadius: "2px", marginTop: "16px" }} />
        </motion.div>

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
                      <h3 style={{ color: "white", fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>
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

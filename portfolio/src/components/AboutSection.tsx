"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 229, 255, 0.12)",
  borderRadius: "16px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
};

const stats = [
  { value: "3+", label: "Projects Delivered" },
  { value: "92%", label: "AI Accuracy" },
  { value: "4★", label: "CodeChef Rating" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "140px 0",
        background: "linear-gradient(180deg, #030712 0%, #050d1a 30%, #071222 70%, #030712 100%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
            {"// Who I Am"}
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #00e5ff, #2979ff)", borderRadius: "2px", marginTop: "16px" }} />
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px" }}>
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={{ ...cardStyle, padding: "40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>
                {/* Left text */}
                <div>
                  <p style={{ color: "#b2dfdb", fontSize: "17px", lineHeight: 1.8, marginBottom: "16px" }}>
                    I&apos;m a <span style={{ color: "#00e5ff", fontWeight: 700 }}>Pre-Final Year CSE student</span> at
                    the Indian Institute of Information Technology, Jabalpur. I&apos;m passionate about
                    leveraging technology to solve real-world problems through data analytics,
                    machine learning, and full-stack development.
                  </p>
                  <p style={{ color: "#80cbc4", fontSize: "15px", lineHeight: 1.8 }}>
                    With experience building healthcare platforms, AI-powered analytics tools, and
                    competitive programming solutions, I thrive at the intersection of data science
                    and software engineering. I love turning complex datasets into actionable insights
                    and building systems that scale.
                  </p>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", justifyContent: "center" }}>
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.03, borderColor: "rgba(0,229,255,0.4)" }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        padding: "20px 24px",
                        background: "rgba(0, 229, 255, 0.04)",
                        border: "1px solid rgba(0, 229, 255, 0.1)",
                        borderRadius: "12px",
                        cursor: "default",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span className="gradient-text" style={{ fontSize: "32px", fontWeight: 800, minWidth: "60px" }}>
                        {stat.value}
                      </span>
                      <span style={{ color: "#80cbc4", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{ color: "#00e5ff", fontSize: "20px", fontWeight: 600, marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Education
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              {/* IIIT */}
              <motion.div
                whileHover={{ borderColor: "rgba(0,229,255,0.4)", boxShadow: "0 0 30px rgba(0,229,255,0.1)", y: -4 }}
                style={{ ...cardStyle, padding: "28px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "8px" }}>
                  <h4 style={{ color: "white", fontWeight: 700, fontSize: "18px" }}>
                    Indian Institute Of Information Technology
                  </h4>
                  <span style={{ color: "#00e5ff", fontSize: "12px", fontWeight: 600, padding: "4px 12px", background: "rgba(0,229,255,0.08)", borderRadius: "20px", border: "1px solid rgba(0,229,255,0.15)", whiteSpace: "nowrap" }}>
                    Aug 2023 - May 2027
                  </span>
                </div>
                <p style={{ color: "#00e5ff", fontSize: "14px", marginBottom: "4px", fontWeight: 500 }}>
                  B.Tech in Computer Science & Engineering
                </p>
                <p style={{ color: "#80cbc4", fontSize: "13px" }}>Pre-Final Year</p>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "#546e7a", fontSize: "12px" }}>📍 Jabalpur, India</span>
                </div>
              </motion.div>

              {/* School */}
              <motion.div
                whileHover={{ borderColor: "rgba(0,229,255,0.4)", boxShadow: "0 0 30px rgba(0,229,255,0.1)", y: -4 }}
                style={{ ...cardStyle, padding: "28px" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px", flexWrap: "wrap", gap: "8px" }}>
                  <h4 style={{ color: "white", fontWeight: 700, fontSize: "18px" }}>
                    KRSD Public School
                  </h4>
                  <span style={{ color: "#7c4dff", fontSize: "12px", fontWeight: 600, padding: "4px 12px", background: "rgba(124,77,255,0.08)", borderRadius: "20px", border: "1px solid rgba(124,77,255,0.15)", whiteSpace: "nowrap" }}>
                    Apr 2021 - Jun 2022
                  </span>
                </div>
                <p style={{ color: "#7c4dff", fontSize: "14px", marginBottom: "4px", fontWeight: 500 }}>
                  CBSE Class XII
                </p>
                <p style={{ color: "#80cbc4", fontSize: "13px" }}>Percentage: 94.2%</p>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ color: "#546e7a", fontSize: "12px" }}>📍 Mathura, India</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(0, 229, 255, 0.1)",
  borderRadius: "16px",
  padding: "28px",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "⟨/⟩",
    color: "#00e5ff",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "Data & Visualization",
    icon: "📊",
    color: "#2979ff",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Pandas / NumPy", level: 88 },
      { name: "Matplotlib / Plotly", level: 82 },
      { name: "Excel", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    icon: "🧠",
    color: "#7c4dff",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Statistical Modeling", level: 80 },
      { name: "Predictive Analytics", level: 78 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: "🗄️",
    color: "#00e5ff",
    skills: [
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Git", level: 88 },
      { name: "RESTful APIs", level: 82 },
    ],
  },
  {
    title: "Core CS Concepts",
    icon: "⚙️",
    color: "#2979ff",
    skills: [
      { name: "DSA", level: 85 },
      { name: "DBMS", level: 82 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Query Optimization", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "💡",
    color: "#7c4dff",
    skills: [
      { name: "Problem Solving", level: 92 },
      { name: "Analytical Thinking", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Data Storytelling", level: 88 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "13px", color: "#b2dfdb", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: "12px", color, fontFamily: "monospace", fontWeight: 600 }}>{level}%</span>
      </div>
      <div
        style={{
          height: "6px",
          background: "rgba(10, 22, 40, 0.8)",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "10px",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "140px 0",
        background: "linear-gradient(180deg, #030712 0%, #06101e 50%, #030712 100%)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "64px" }}
        >
          <p style={{ color: "#00e5ff", fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>
            {"// What I Know"}
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2 }}>
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #00e5ff, #2979ff)", borderRadius: "2px", marginTop: "16px" }} />
        </motion.div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              whileHover={{
                borderColor: `${category.color}40`,
                boxShadow: `0 0 30px ${category.color}15`,
                y: -6,
              }}
              style={cardStyle}
            >
              {/* Card Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontSize: "28px", lineHeight: 1 }}>{category.icon}</span>
                <h3 style={{ color: "white", fontWeight: 700, fontSize: "16px" }}>{category.title}</h3>
                <div style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: category.color, boxShadow: `0 0 8px ${category.color}` }} />
              </div>

              {/* Skill Bars */}
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIdx * 0.12 + skillIdx * 0.08}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

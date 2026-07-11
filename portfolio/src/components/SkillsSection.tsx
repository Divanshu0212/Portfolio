"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

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
    title: "Languages",
    glyph: "</>",
    color: "#00e5ff",
    skills: ["C++", "Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "GenAI & Agentic AI",
    glyph: "~>",
    color: "#7c4dff",
    skills: [
      "LLM Orchestration",
      "Multi-Agent Systems",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Gemini API",
      "Groq / LLaMA",
    ],
  },
  {
    title: "Backend & APIs",
    glyph: "{}",
    color: "#2979ff",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Next.js",
      "Microservices",
      "RESTful APIs",
    ],
  },
  {
    title: "Databases",
    glyph: "::",
    color: "#00e5ff",
    skills: [
      "PostgreSQL",
      "MongoDB Atlas",
      "MySQL",
      "Query Optimization",
      "Schema Design",
    ],
  },
  {
    title: "DevOps & Tools",
    glyph: "$_",
    color: "#2979ff",
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "RabbitMQ",
      "Redis",
      "Celery",
      "Prometheus",
      "Grafana",
      "JWT",
    ],
  },
  {
    title: "AI / ML & Data",
    glyph: "%",
    color: "#7c4dff",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Predictive Modeling",
      "Tableau",
      "Plotly",
    ],
  },
];

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
        <SectionHeading
          eyebrow="// tech_stack"
          plain="Skills &"
          accent="Expertise"
          isInView={isInView}
        />

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
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span
                  className="font-mono-ui"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: category.color,
                    background: `${category.color}10`,
                    border: `1px solid ${category.color}25`,
                    borderRadius: "10px",
                    width: "42px",
                    height: "42px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    textShadow: `0 0 12px ${category.color}80`,
                  }}
                >
                  {category.glyph}
                </span>
                <h3 className="font-display" style={{ color: "white", fontWeight: 700, fontSize: "17px" }}>
                  {category.title}
                </h3>
                <div style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: category.color, boxShadow: `0 0 8px ${category.color}` }} />
              </div>

              {/* Skill Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    className="skill-chip font-mono-ui"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.35,
                      delay: catIdx * 0.1 + 0.25 + skillIdx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      backgroundColor: `${category.color}18`,
                      borderColor: `${category.color}60`,
                      boxShadow: `0 4px 16px ${category.color}20`,
                      color: "#ffffff",
                    }}
                    style={{
                      padding: "7px 14px",
                      fontSize: "12px",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#b2dfdb",
                      cursor: "default",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

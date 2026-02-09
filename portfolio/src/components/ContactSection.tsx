"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "divanshu0212@gmail.com",
    href: "mailto:divanshu0212@gmail.com",
    iconPath: "M2 4h20v16H2z M22 4L12 13L2 4",
    fill: false,
  },
  {
    label: "Phone",
    value: "+91-9359992426",
    href: "tel:+919359992426",
    iconPath: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
    fill: false,
  },
  {
    label: "GitHub",
    value: "divanshu0212",
    href: "https://github.com/divanshu0212",
    iconPath: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    fill: true,
  },
  {
    label: "LinkedIn",
    value: "Divanshu Bhargava",
    href: "https://linkedin.com/in/divanshu-bhargava",
    iconPath: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    fill: true,
  },
];

const codingProfiles = [
  { label: "LeetCode", href: "https://leetcode.com/divanshu0212", icon: "🏅", badge: "Knight", color: "#FFD700" },
  { label: "CodeChef", href: "https://codechef.com/users/divanshu0212", icon: "⭐", badge: "4 Star", color: "#00e5ff" },
  { label: "Codeforces", href: "https://codeforces.com/profile/divanshu02", icon: "💻", badge: "Pupil", color: "#7c4dff" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "140px 0 80px",
        background: "linear-gradient(180deg, #030712 0%, #071222 40%, #0a1628 100%)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p style={{ color: "#00e5ff", fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>
            {"// Let's Connect"}
          </p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "16px" }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: "#80cbc4", maxWidth: "500px", margin: "0 auto", fontSize: "15px", lineHeight: 1.7 }}>
            I&apos;m always open to discussing new opportunities, interesting projects,
            or collaborations. Feel free to reach out!
          </p>
          <div style={{ width: "80px", height: "3px", background: "linear-gradient(90deg, #00e5ff, #2979ff)", borderRadius: "2px", margin: "20px auto 0" }} />
        </motion.div>

        {/* Contact Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                borderColor: "rgba(0, 229, 255, 0.35)",
                boxShadow: "0 4px 30px rgba(0, 229, 255, 0.1)",
                x: 4,
              }}
              style={{
                background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
                border: "1px solid rgba(0, 229, 255, 0.08)",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(0, 229, 255, 0.06)",
                  border: "1px solid rgba(0, 229, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill={link.fill ? "#00e5ff" : "none"} stroke={link.fill ? "none" : "#00e5ff"} strokeWidth="1.5">
                  <path d={link.iconPath} />
                </svg>
              </div>
              <div>
                <p style={{ color: "#546e7a", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px", fontWeight: 600 }}>
                  {link.label}
                </p>
                <p style={{ color: "white", fontSize: "14px", fontWeight: 600 }}>
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ textAlign: "center", color: "#80cbc4", fontSize: "16px", marginBottom: "24px", fontWeight: 600, letterSpacing: "0.05em" }}>
            Competitive Programming Profiles
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            {codingProfiles.map((profile, i) => (
              <motion.a
                key={profile.label}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{
                  scale: 1.06,
                  borderColor: `${profile.color}40`,
                  boxShadow: `0 0 25px ${profile.color}15`,
                }}
                style={{
                  background: "linear-gradient(135deg, rgba(10, 25, 50, 0.9), rgba(5, 15, 35, 0.8))",
                  border: "1px solid rgba(0, 229, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "18px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "24px" }}>{profile.icon}</span>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>{profile.label}</p>
                  <p style={{ color: profile.color, fontSize: "12px", fontWeight: 600 }}>{profile.badge}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "100px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "32px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <p style={{ color: "#546e7a", fontSize: "13px" }}>
            © 2026 Divanshu Bhargava. Built with Next.js & Framer Motion.
          </p>
          <motion.p
            style={{ color: "#00e5ff", fontSize: "13px", fontFamily: "monospace" }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {"</ Made with ❤️ />"}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

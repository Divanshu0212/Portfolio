"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: false });
const AchievementsSection = dynamic(() => import("@/components/AchievementsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative", background: "#030712", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero with scroll animation */}
      <HeroSection />

      {/* Content sections wrapper */}
      <div style={{ position: "relative", zIndex: 10, background: "#030712" }}>
        <ParticleBackground />
        <div style={{ position: "relative", zIndex: 2 }}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

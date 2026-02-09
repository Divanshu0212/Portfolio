"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOTAL_FRAMES = 240;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNum}.png`;
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.floor((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) {
          imagesRef.current = images;
          setImagesLoaded(true);
          renderFrame(0);
        }
      };
      images.push(img);
    }
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cover the canvas with the image
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = (canvas.width - img.width * scale) / 2;
    const y = (canvas.height - img.height * scale) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

    // Dark overlay for text readability
    ctx.fillStyle = "rgba(3, 7, 18, 0.35)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  // Scroll-driven animation
  useEffect(() => {
    if (!imagesLoaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollHeight = container.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(-rect.top / scrollHeight, 0),
        1
      );

      const frameIndex = Math.min(
        Math.floor(scrollProgress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => renderFrame(frameIndex));
      }
    };

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [imagesLoaded]);

  return (
    <section id="home">
      <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
        {/* Fixed canvas */}
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-screen"
          style={{ zIndex: 0 }}
        />

        {/* Loading screen */}
        {!imagesLoaded && (
          <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Loading Experience
              </h2>
              <div className="w-64 h-1 bg-[#0a1628] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00e5ff] to-[#7c4dff] rounded-full"
                  style={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-[#80cbc4] text-sm mt-2">{loadProgress}%</p>
            </motion.div>
          </div>
        )}

        {/* Hero Content - Sticky overlay */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                className="text-[#00e5ff] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={
                  imagesLoaded
                    ? { opacity: 1, letterSpacing: "0.3em" }
                    : {}
                }
                transition={{ duration: 1, delay: 0.5 }}
              >
                Hello, I&apos;m
              </motion.p>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text text-glow-strong">Divanshu</span>
              <br />
              <span className="text-white/90">Bhargava</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#80cbc4] max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              CSE Pre-Final Year @ IIIT Jabalpur | Data Analyst &
              Full-Stack Developer | Building intelligent systems with ML &
              Analytics
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center pointer-events-auto flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#projects"
                style={{
                  padding: "14px 36px",
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, #00e5ff, #2979ff, #00e5ff)",
                  backgroundSize: "200% 200%",
                  color: "#030712",
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 20px rgba(0, 229, 255, 0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 40px rgba(0,229,255,0.6), 0 0 60px rgba(0,229,255,0.3), inset 0 1px 1px rgba(255,255,255,0.4)",
                  backgroundPosition: "100% 50%",
                }}
                whileTap={{ scale: 0.96 }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  backgroundPosition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                style={{
                  padding: "14px 36px",
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.08), rgba(41, 121, 255, 0.08))",
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                  color: "#00e5ff",
                  fontWeight: 800,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                whileHover={{
                  scale: 1.06,
                  borderColor: "#00e5ff",
                  background: "linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(41, 121, 255, 0.15))",
                  boxShadow: "0 0 30px rgba(0,229,255,0.4), inset 0 0 20px rgba(0,229,255,0.1)",
                }}
                whileTap={{ scale: 0.96 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderImage = "linear-gradient(135deg, #00e5ff, #2979ff, #7c4dff) 1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderImage = "none";
                  e.currentTarget.style.borderColor = "rgba(0, 229, 255, 0.3)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#80cbc4] text-xs tracking-widest uppercase">
                  Scroll Down
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00e5ff"
                  strokeWidth="2"
                >
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

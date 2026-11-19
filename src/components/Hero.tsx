/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MessageSquare, Phone, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "../data";
import { TEXT } from "../data/language";

// ─────────────────────────────────────────────
// CSS-only 3D wood door panel centerpiece
// ─────────────────────────────────────────────
function WoodDoorCenterpiece({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [ambientAngle, setAmbientAngle] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    let animId: number;
    const start = performance.now();
    const loop = (now: number) => {
      const elapsed = (now - start) / 1000;
      setAmbientAngle(Math.sin(elapsed * 0.9) * 3);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [shouldReduceMotion]);

  const rotX = shouldReduceMotion ? 0 : mouseY * -6 + (mouseY === 0 ? ambientAngle * 0.4 : 0);
  const rotY = shouldReduceMotion ? 0 : mouseX * 8 + (mouseX === 0 ? ambientAngle : 0);

  return (
    <div
      className="hero-3d-stage w-full h-full flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <motion.div
        className="hero-wood-panel relative"
        style={{
          width: "min(300px, 78vw)",
          height: "min(450px, 64vh)",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateX: rotX, rotateY: rotY }}
        transition={{ type: "spring", stiffness: 140, damping: 24 }}
        initial={{ opacity: 0, rotateY: -16 }}
        whileInView={{ opacity: 1 }}
      >
        {/* BASE — deep walnut door slab */}
        <div
          className="absolute inset-0 rounded-sm overflow-hidden"
          style={{
            background: "linear-gradient(155deg, #3D2A18 0%, #2A1A0C 45%, #1E1208 70%, #2D1F10 100%)",
            boxShadow:
              "0 48px 96px -16px rgba(0,0,0,0.95), 0 24px 48px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
            transform: "translateZ(0px)",
          }}
        >
          <div className="wood-grain-animated absolute inset-0 opacity-55" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 20% 15%, rgba(197,151,58,0.09) 0%, transparent 55%)",
            }}
          />
        </div>

        {/* OUTER RAISED FRAME */}
        <div
          className="absolute rounded-sm"
          style={{
            inset: "14px",
            background: "linear-gradient(130deg, #4A3020 0%, #2D1F10 100%)",
            transform: "translateZ(7px)",
            boxShadow:
              "0 0 0 1px rgba(197,151,58,0.22), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        />

        {/* INNER BEVEL */}
        <div
          className="absolute rounded-sm"
          style={{
            inset: "28px",
            background: "linear-gradient(145deg, #3A2512 0%, #261508 100%)",
            transform: "translateZ(14px)",
            boxShadow: "0 0 0 1px rgba(197,151,58,0.14), inset 0 2px 6px rgba(0,0,0,0.6)",
          }}
        />

        {/* UPPER PANEL */}
        <div
          className="absolute overflow-hidden rounded-sm"
          style={{
            left: "44px",
            right: "44px",
            top: "44px",
            height: "35%",
            background: "linear-gradient(130deg, #452F1A 0%, #2C1A09 100%)",
            transform: "translateZ(20px)",
            boxShadow:
              "0 0 0 1px rgba(197,151,58,0.2), inset 0 1px 0 rgba(255,255,255,0.03), 0 4px 16px rgba(0,0,0,0.5)",
          }}
        >
          <div className="wood-grain-animated absolute inset-0 opacity-40" />
          {/* subtle cross grain */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent 0, transparent 5px, rgba(139,94,60,0.04) 5px, rgba(139,94,60,0.04) 6px)",
            }}
          />
        </div>

        {/* LOWER PANEL */}
        <div
          className="absolute overflow-hidden rounded-sm"
          style={{
            left: "44px",
            right: "44px",
            bottom: "44px",
            height: "35%",
            background: "linear-gradient(130deg, #452F1A 0%, #2C1A09 100%)",
            transform: "translateZ(20px)",
            boxShadow:
              "0 0 0 1px rgba(197,151,58,0.2), inset 0 1px 0 rgba(255,255,255,0.03), 0 4px 16px rgba(0,0,0,0.5)",
          }}
        >
          <div className="wood-grain-animated absolute inset-0 opacity-40" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent 0, transparent 5px, rgba(139,94,60,0.04) 5px, rgba(139,94,60,0.04) 6px)",
            }}
          />
        </div>

        {/* CENTER MEDALLION */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
          style={{
            width: "52px",
            height: "52px",
            background:
              "radial-gradient(circle at 38% 32%, #DDB96A 0%, #C5973A 40%, #9A7328 70%, #6B4E1C 100%)",
            transform: "translateZ(28px)",
            boxShadow:
              "0 0 0 3px rgba(197,151,58,0.25), 0 0 20px rgba(197,151,58,0.2), 0 8px 24px rgba(0,0,0,0.7)",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="9" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
            <circle cx="13" cy="13" r="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
            <path
              d="M13 4 L13 22 M4 13 L22 13"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* DOOR KNOB */}
        <div
          className="absolute rounded-full"
          style={{
            right: "52px",
            top: "50%",
            marginTop: "-7px",
            width: "14px",
            height: "14px",
            background:
              "radial-gradient(circle at 32% 32%, #DDB96A, #9A7328 70%, #6B4E1C 100%)",
            transform: "translateZ(32px)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 0 1px rgba(197,151,58,0.4)",
          }}
        />

        {/* Cast shadow */}
        <div
          className="absolute inset-x-4 pointer-events-none"
          style={{
            bottom: "-20px",
            height: "30px",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, transparent 70%)",
            filter: "blur(10px)",
            transform: "translateZ(-8px) scaleX(0.9)",
          }}
        />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Hero section
// ─────────────────────────────────────────────
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (shouldReduceMotion || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    },
    [shouldReduceMotion]
  );

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };
  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { n: "20+", l: "Years Experience" },
    { n: "500+", l: "Projects Done" },
    { n: "100%", l: "Custom Work" },
  ];

  const pills = ["Door Fitting", "Windows", "Wardrobes", "Repairs"];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F0C09 0%, #17120D 45%, #0F0C09 100%)",
      }}
    >
      {/* Warm ambient glows */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(197,151,58,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-1/2 w-[400px] h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Top gold stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(197,151,58,0.5) 25%, rgba(197,151,58,0.8) 50%, rgba(197,151,58,0.5) 75%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">
        {/* ── LEFT: Editorial text ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-7 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="h-[1px] w-10" style={{ background: "rgba(197,151,58,0.5)" }} />
            <span
              className="text-[10px] uppercase tracking-[0.4em] font-medium font-sans"
              style={{ color: "var(--color-gold)" }}
            >
              Minnathur, Tamil Nadu
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-serif leading-[1.1] tracking-tight">
              <span
                className="block text-5xl sm:text-6xl md:text-7xl font-bold"
                style={{ color: "var(--color-ivory)" }}
              >
                {TEXT.heroHeading}
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl font-normal italic mt-2"
                style={{ color: "var(--color-gold)" }}
              >
                {TEXT.heroSubheading}
              </span>
            </h1>
          </motion.div>

          {/* Body copy */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-sm sm:text-base font-light leading-relaxed max-w-md"
            style={{ color: "var(--color-secondary-text)" }}
          >
            {TEXT.heroSubtitle}
          </motion.p>

          {/* Service pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {pills.map((s) => (
              <span
                key={s}
                className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-sans border"
                style={{
                  color: "var(--color-secondary-text)",
                  borderColor: "rgba(197,151,58,0.2)",
                  background: "rgba(197,151,58,0.07)",
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-1"
          >
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm transition-all duration-300 font-sans"
              style={{
                color: "var(--color-bg)",
                background: "var(--color-gold)",
                boxShadow: "0 8px 24px rgba(197,151,58,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-gold-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--color-gold)";
              }}
            >
              <MessageSquare size={14} fill="currentColor" />
              <span>{TEXT.heroPrimaryCta}</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold px-8 py-4 rounded-sm transition-all duration-300 border font-sans"
              style={{
                color: "var(--color-gold)",
                borderColor: "rgba(197,151,58,0.3)",
              }}
            >
              <Phone size={14} />
              <span>{TEXT.heroSecondaryCta}</span>
            </a>
          </motion.div>

          {/* Credential row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4 w-full border-t"
            style={{ borderColor: "rgba(197,151,58,0.1)" }}
          >
            {stats.map(({ n, l }) => (
              <div key={l} className="text-left">
                <div
                  className="font-serif text-2xl font-bold"
                  style={{ color: "var(--color-gold)" }}
                >
                  {n}
                </div>
                <div
                  className="font-sans text-[10px] uppercase tracking-wider"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── 3D wood door panel centerpiece ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex items-center justify-center h-[380px] sm:h-[460px] lg:h-[540px] relative w-full mt-4 lg:mt-0"
        >
          {/* Atmospheric backglow */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(197,151,58,0.08) 0%, transparent 70%)",
            }}
          />

          <WoodDoorCenterpiece mouseX={mouse.x} mouseY={mouse.y} />

          {/* Floating badge — brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="glass-panel absolute bottom-4 sm:bottom-8 left-2 sm:left-4 rounded-sm px-3.5 sm:px-5 py-2 sm:py-3 text-left"
          >
            <div
              className="text-[8px] sm:text-[9px] uppercase tracking-widest font-semibold font-sans"
              style={{ color: "var(--color-gold)" }}
            >
              Est. 2001
            </div>
            <div
              className="font-serif text-xs sm:text-sm font-medium"
              style={{ color: "var(--color-ivory)" }}
            >
              K.S. WOOD WORK
            </div>
            <div
              className="text-[8px] sm:text-[9px] font-sans mt-0.5"
              style={{ color: "var(--color-secondary-text)" }}
            >
              Premium Craftsmanship
            </div>
          </motion.div>

          {/* Floating badge — location */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="glass-panel absolute top-4 sm:top-8 right-2 sm:right-4 rounded-sm px-3 sm:px-4 py-1.5 sm:py-2.5 text-right"
          >
            <div
              className="text-[8px] sm:text-[9px] uppercase tracking-widest font-sans"
              style={{ color: "var(--color-secondary-text)" }}
            >
              Service Area
            </div>
            <div
              className="font-serif text-xs sm:text-sm font-medium"
              style={{ color: "var(--color-ivory)" }}
            >
              Minnathur, TN
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <button
          onClick={() => handleScrollToSection("about")}
          className="flex flex-col items-center gap-2 transition-colors group"
          style={{ color: "var(--color-secondary-text)" }}
          aria-label={TEXT.heroScrollAriaLabel}
        >
          <span
            className="text-[9px] uppercase tracking-[0.3em] font-sans font-light"
          >
            {TEXT.heroScrollLabel}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "var(--color-gold)" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #0F0C09, transparent)",
        }}
      />
    </section>
  );
}

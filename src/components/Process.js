"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaPenNib, FaCode, FaRocket, FaCog, FaChartLine } from "react-icons/fa";
import Link from "next/link";

const STEPS = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Insight & Strategy",
    description:
      "Understanding the underlying concept and target audience to build a solid, research-backed foundation.",
    icon: <FaSearch />,
    accent: "#059669",
    accentRgb: "5,150,105",
    light: "#D1FAE5",
  },
  {
    id: "02",
    title: "Design",
    subtitle: "UI/UX Architecture",
    description:
      "Creating wireframes and refining them based on feedback for an intuitive, delightful experience.",
    icon: <FaPenNib />,
    accent: "#0891B2",
    accentRgb: "8,145,178",
    light: "#CFFAFE",
  },
  {
    id: "03",
    title: "Build",
    subtitle: "Development Phase",
    description:
      "Developing robust functionality using cutting-edge technologies, clean code, and engineering best practices.",
    icon: <FaCode />,
    accent: "#7C3AED",
    accentRgb: "124,58,237",
    light: "#EDE9FE",
  },
  {
    id: "04",
    title: "Launch",
    subtitle: "Quality Assurance",
    description:
      "Rigorously testing every layer of the product to ensure a bulletproof, smooth, and confident launch.",
    icon: <FaRocket />,
    accent: "#DB2777",
    accentRgb: "219,39,119",
    light: "#FCE7F3",
  },
  {
    id: "05",
    title: "Maintain",
    subtitle: "Ongoing Support",
    description:
      "Adding new functionalities and providing proactive support for a delightful end-user experience.",
    icon: <FaCog />,
    accent: "#D97706",
    accentRgb: "217,119,6",
    light: "#FEF3C7",
  },
  {
    id: "06",
    title: "Optimize",
    subtitle: "Growth & Scaling",
    description:
      "Analyzing performance metrics and optimizing every layer to drive continuous growth and market success.",
    icon: <FaChartLine />,
    accent: "#0F766E",
    accentRgb: "15,118,110",
    light: "#CCFBF1",
  },
];

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
      style={{ cursor: "default" }}
    >
      <div
        className="relative overflow-hidden rounded-[2rem] h-full flex flex-col transition-all duration-500"
        style={{
          background: hovered
            ? "#ffffff"
            : "rgba(255,255,255,0.72)",
          border: `1.5px solid rgba(${step.accentRgb}, ${hovered ? 0.35 : 0.12})`,
          boxShadow: hovered
            ? `0 20px 60px rgba(${step.accentRgb},0.14), 0 4px 20px rgba(0,0,0,0.06)`
            : "0 2px 16px rgba(0,0,0,0.04)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(${step.accentRgb},0.9), transparent)`,
            opacity: hovered ? 1 : 0.2,
          }}
        />

        {/* Ghost number */}
        <span
          className="absolute bottom-4 right-6 text-[6.5rem] font-black leading-none select-none pointer-events-none transition-all duration-500"
          style={{
            color: hovered ? `rgba(${step.accentRgb},0.07)` : `rgba(${step.accentRgb},0.04)`,
            lineHeight: 1,
          }}
        >
          {step.id}
        </span>

        {/* Inner glow blob */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(${step.accentRgb},0.1) 0%, transparent 70%)`,
                filter: "blur(16px)",
              }}
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Icon + step number row */}
          <div className="flex items-start justify-between mb-7">
            <motion.div
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl"
              style={{
                background: hovered
                  ? `linear-gradient(135deg, ${step.light}, rgba(${step.accentRgb},0.15))`
                  : step.light,
                color: step.accent,
                border: `1.5px solid rgba(${step.accentRgb},0.2)`,
                boxShadow: hovered ? `0 4px 20px rgba(${step.accentRgb},0.25)` : "none",
                transition: "all 0.4s ease",
              }}
            >
              {step.icon}
            </motion.div>

            <span
              className="text-[11px] font-black tracking-[0.35em] uppercase transition-colors duration-300"
              style={{ color: `rgba(${step.accentRgb},${hovered ? 0.7 : 0.35})` }}
            >
              {step.id}
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="text-[11px] font-black tracking-[0.25em] uppercase mb-2 transition-colors duration-300"
            style={{ color: step.accent }}
          >
            {step.subtitle}
          </p>

          {/* Title */}
          <h3
            className="text-[1.6rem] font-black tracking-tight mb-3 transition-colors duration-300"
            style={{
              background: hovered
                ? `linear-gradient(135deg, #0f172a 30%, ${step.accent})`
                : "none",
              WebkitBackgroundClip: hovered ? "text" : undefined,
              WebkitTextFillColor: hovered ? "transparent" : undefined,
              backgroundClip: hovered ? "text" : undefined,
              color: hovered ? undefined : "#0f172a",
            }}
          >
            {step.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed flex-1 mb-7"
            style={{ color: "#64748b" }}
          >
            {step.description}
          </p>

          {/* Separator */}
          <div
            className="h-px mb-5 transition-opacity duration-300"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(${step.accentRgb},0.3), transparent)`,
              opacity: hovered ? 1 : 0.4,
            }}
          />

          {/* CTA */}
          {/* <motion.div
            className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] w-fit"
            style={{ color: step.accent }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Learn More
            <motion.svg
              animate={{ x: hovered ? 3 : 0 }}
              transition={{ duration: 0.3 }}
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </motion.svg>
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
}

const Process = () => {
  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background:
          "linear-gradient(160deg, #f0fdf9 0%, #ecfdf5 30%, #f0fdfa 60%, #f7fffe 100%)",
      }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft orbs */}
        <div
          className="absolute top-[-12%] right-[-6%] w-[650px] h-[650px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(5,150,105,0.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.55,
          }}
        />

        {/* Fine lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(5,150,105,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(5,150,105,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Ghost big text */}
        <div
          className="absolute top-8 left-4 select-none pointer-events-none"
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            lineHeight: 1,
            color: "rgba(5,150,105,0.055)",
          }}
        >
          WEBSTEP
        </div>

        {/* Floating accent dots */}
        {[
          { top: "9%", left: "7%", size: 5, color: "5,150,105" },
          { top: "22%", right: "5%", size: 4, color: "8,145,178" },
          { bottom: "16%", left: "13%", size: 6, color: "124,58,237" },
          { bottom: "30%", right: "9%", size: 4, color: "219,39,119" },
          { top: "55%", left: "4%", size: 3, color: "217,119,6" },
          { top: "70%", right: "6%", size: 5, color: "15,118,110" },
        ].map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -13, 0], opacity: [0.35, 0.75, 0.35] }}
            transition={{
              duration: 3.2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              ...d,
              width: d.size,
              height: d.size,
              background: `rgba(${d.color},0.75)`,
              boxShadow: `0 0 ${d.size * 5}px rgba(${d.color},0.5)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8"
            style={{
              border: "1.5px solid rgba(5,150,105,0.25)",
              background: "rgba(5,150,105,0.07)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="w-8 h-[2px]" style={{ background: "#059669" }} />
            <span
              className="text-[11px] font-black tracking-[0.3em] uppercase"
              style={{ color: "#059669" }}
            >
              Workflow Excellence
            </span>
            <div className="w-8 h-[2px]" style={{ background: "#059669" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[5rem] font-black leading-[0.92] tracking-[-0.03em] mb-6"
          >
            <span style={{ color: "#0f172a" }}>A High-Performance</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Development Process
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg max-w-xl mx-auto leading-relaxed font-medium"
            style={{ color: "#64748b" }}
          >
            Our systematic 6-step approach ensures every project is delivered
            with bulletproof stability and precision.
          </motion.p>

          {/* Animated gradient line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 h-[3px] w-36 rounded-full origin-left"
            style={{
              background:
                "linear-gradient(90deg, #059669, #0891B2, #7C3AED)",
            }}
          />
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {STEPS.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <p
            className="text-sm font-semibold"
            style={{ color: "#94a3b8" }}
          >
            Ready to begin your project?
          </p>

          <Link
            href="/customize-package"
            className="relative overflow-hidden flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white"
            style={{
              background:
                "linear-gradient(135deg, #059669, #0891B2)",
              boxShadow:
                "0 0 40px rgba(5,150,105,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="tracking-wide">Start a Project</span>
            <motion.svg
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </motion.svg>
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
              }}
            />
          </Link>

           <Link
              href="/works"
            className="flex items-center gap-2 text-sm font-bold transition-colors duration-300"
            style={{ color: "#059669" }}
          >
            View our work
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
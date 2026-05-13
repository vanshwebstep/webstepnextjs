"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple, FaAndroid } from "react-icons/fa";
import { FiMonitor, FiShoppingCart, FiCpu, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const EXPERTISE = [
  {
    id: "01",
    title: "Web App Development",
    tagline: "Full-stack excellence",
    description:
      "Building high-performance, scalable web ecosystems using cutting-edge stacks that adapt, scale, and dominate.",
    accent: "#22D3EE",
    accentRgb: "34,211,238",
    features: ["React & Next.js", "API-first Architecture", "Cloud Native"],
    icon: <FiMonitor size={20} />,
  },
  {
    id: "02",
    title: "iOS Solutions",
    tagline: "Native Apple craft",
    description:
      "Native Apple experiences crafted for performance, elegance, and seamless user delight on every device.",
    accent: "#34D399",
    accentRgb: "52,211,153",
    features: ["Swift & SwiftUI", "App Store Ready", "Offline First"],
    icon: <FaApple size={20} />,
  },
  {
    id: "03",
    title: "Android Apps",
    tagline: "Global mobile reach",
    description:
      "Dynamic Android development for a global mobile audience with fluid, pixel-perfect interfaces.",
    accent: "#60A5FA",
    accentRgb: "96,165,250",
    features: ["Kotlin Compose", "Material You", "Play Store"],
    icon: <FaAndroid size={20} />,
  },
  {
    id: "04",
    title: "E-Commerce",
    tagline: "Revenue-first design",
    description:
      "High-conversion retail platforms engineered for seamless growth and unforgettable shopping journeys.",
    accent: "#A78BFA",
    accentRgb: "167,139,250",
    features: ["Headless Commerce", "Checkout UX", "Growth Analytics"],
    icon: <FiShoppingCart size={20} />,
  },
  {
    id: "05",
    title: "Tech Consultancy",
    tagline: "Future-proof strategy",
    description:
      "Strategic technology roadmaps to future-proof your digital presence and outpace every competitor.",
    accent: "#FB923C",
    accentRgb: "251,146,60",
    features: ["Architecture Review", "Tech Audit", "Scaling Plans"],
    icon: <FiCpu size={20} />,
  },
  {
    id: "06",
    title: "Digital Marketing",
    tagline: "Data-driven growth",
    description:
      "Data-driven strategies that dominate search landscapes and convert audiences into loyal, recurring clients.",
    accent: "#F472B6",
    accentRgb: "244,114,182",
    features: ["SEO & SEM", "Content Strategy", "CRO"],
    icon: <FiTrendingUp size={20} />,
  },
];

function ExpertiseRow({ service, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
      style={{ cursor: "default" }}
    >
      {/* Left accent bar */}
      <motion.div
        animate={{ height: hovered ? "100%" : "40%", opacity: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-0 top-0 w-[3px] rounded-full"
        style={{
          background: `linear-gradient(180deg, ${service.accent}, transparent)`,
          transformOrigin: "top",
        }}
      />

      {/* Row */}
      <div
        className="relative flex items-start gap-6 pl-8 pr-6 py-8 rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(120deg, rgba(${service.accentRgb},0.1) 0%, rgba(10,14,26,0.95) 100%)`
            : "rgba(255,255,255,0.025)",
          border: `1px solid rgba(${service.accentRgb}, ${hovered ? 0.3 : 0.08})`,
        }}
      >
        {/* Glow blob */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute -right-12 -top-12 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(${service.accentRgb},0.18) 0%, transparent 70%)`,
                filter: "blur(20px)",
              }}
            />
          )}
        </AnimatePresence>

        {/* Icon box */}
        <div className="shrink-0 mt-1">
          <motion.div
            animate={{
              background: hovered
                ? `linear-gradient(135deg, rgba(${service.accentRgb},0.25), rgba(${service.accentRgb},0.08))`
                : `rgba(${service.accentRgb},0.08)`,
              boxShadow: hovered
                ? `0 0 20px rgba(${service.accentRgb},0.3)`
                : "none",
            }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ border: `1px solid rgba(${service.accentRgb},0.25)`, color: service.accent }}
          >
            {service.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <span
              className="text-[10px] font-black tracking-[0.4em] uppercase"
              style={{ color: `rgba(${service.accentRgb},0.5)` }}
            >
              {service.id}
            </span>
            <div
              className="h-px max-w-[36px] flex-1"
              style={{ background: `rgba(${service.accentRgb},0.2)` }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: service.accent }}
            >
              {service.tagline}
            </span>
          </div>

          <h3
            className="text-xl font-black tracking-tight mb-2 transition-colors duration-300"
            style={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.85)" }}
          >
            {service.title}
          </h3>

          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "rgba(255, 255, 255, 0.86)" }}
          >
            {service.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((f, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 + i * 0.05 + 0.2 }}
                className="text-[11px] font-semibold px-3 py-1 rounded-full"
                style={{
                  background: `rgba(${service.accentRgb},0.1)`,
                  border: `1px solid rgba(${service.accentRgb},0.2)`,
                  color: service.accent,
                }}
              >
                {f}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 self-center"
          style={{ color: service.accent }}
        >
          <svg
            width="20"
            height="20"
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
        </motion.div>
      </div>
    </motion.div>
  );
}

const OurExpertize = () => {
  const leftCol = EXPERTISE.slice(0, 3);
  const rightCol = EXPERTISE.slice(3, 6);

  return (
    <section
      className="relative overflow-hidden py-32"
      style={{
        background:
          "linear-gradient(160deg, #020617 0%, #0a0f2c 30%, #0c1b3a 60%, #1e3a8a 100%)"
      }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-8%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ghost big number */}
        <div
          className="absolute top-10 left-6 select-none pointer-events-none"
          style={{
            fontSize: "5rem",
            fontWeight: 900,
            lineHeight: 1,
            background:
              "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.03) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WEBSTEP
        </div>
        <div
          className="absolute bottom-14 right-6 select-none pointer-events-none"
          style={{
            fontSize: "9rem",
            fontWeight: 900,
            lineHeight: 1,
            background:
              "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.03) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ★
        </div>

        {/* Floating accent dots */}
        {[
          { top: "8%", left: "6%", size: 5, color: "34,211,238" },
          { top: "20%", right: "4%", size: 4, color: "52,211,153" },
          { bottom: "15%", left: "12%", size: 6, color: "96,165,250" },
          { bottom: "28%", right: "8%", size: 4, color: "167,139,250" },
          { top: "52%", left: "3%", size: 3, color: "244,114,182" },
          { top: "68%", right: "6%", size: 5, color: "34,211,238" },
        ].map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              ...d,
              width: d.size,
              height: d.size,
              background: `rgba(${d.color},0.9)`,
              boxShadow: `0 0 ${d.size * 5}px rgba(${d.color},0.7)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white backdrop-blur-md border border-white/60 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-10 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
              </span>
              Our Expertise
            </div>


            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-[5rem] font-black leading-[0.9] tracking-[-0.03em]"
            >
              <span className="block" style={{ color: "rgba(255,255,255,0.9)" }}>
                Powering Your
              </span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Success
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:max-w-xs"
          >
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(255, 255, 255, 0.86)" }}
            >
              We leverage elite technical stacks to build products that redefine
              market standards and outlast the competition.
            </p>
            <div className="flex gap-8">
              {[["150+", "Projects"], ["8+", "Years"], ["98%", "Retention"]].map(
                ([val, label]) => (
                  <div key={label}>
                    <div
                      className="text-2xl font-black"
                      style={{ color: "#22D3EE" }}
                    >
                      {val}
                    </div>
                    <div
                      className="text-[11px] font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(255, 255, 255, 0.86)" }}
                    >
                      {label}
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px mb-12 origin-left"
          style={{
            background:
              "linear-gradient(90deg, #22D3EE, #60A5FA, transparent)",
          }}
        />

        {/* ── Two-column list ── */}
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3">
          <div className="space-y-3">
            {leftCol.map((s, i) => (
              <ExpertiseRow key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="space-y-3">
            {rightCol.map((s, i) => (
              <ExpertiseRow key={s.id} service={s} index={i + 3} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: "rgba(255, 255, 255, 0.86)" }}
          >
            Ready to transform your digital vision into reality?
          </p>

          <div className="flex items-center gap-4">

            <Link
              href="/customize-package"
              className="relative overflow-hidden flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #22D3EE, #60A5FA)",
                boxShadow:
                  "0 0 40px rgba(34,211,238,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="tracking-wide">Get a Quote</span>
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
            </Link>


            <Link
              href="/works"
              className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
              style={{ color: "rgba(255, 255, 255, 0.86)" }}
            >
              View portfolio
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurExpertize;
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";

const TopBadge = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9] animate-pulse" />
    <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">{text}</span>
  </motion.div>
);

const SERVICES = [
  {
    id: "01",
    title: "PSD to HTML",
    slug: "psd-to-html",
    tagline: "Pixel-perfect conversion",
    description:
      "W3C validated, semantic HTML from layered PSD files. Structured for performance, built for longevity.",
    accent: "#E879F9",
    accentRgb: "232,121,249",
    gradientFrom: "#E879F9",
    gradientTo: "#A855F7",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Sketch to HTML",
    tagline: "Prototype to production",
    slug: "sketch-to-html",
    description:
      "Clean, commented code that brings Sketch prototypes to life with cross-browser precision and modern CSS.",
    accent: "#38BDF8",
    accentRgb: "56,189,248",
    gradientFrom: "#38BDF8",
    gradientTo: "#818CF8",
    features: ["Cross-browser", "Modern CSS", "Interactive UI"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Email Templates",
    tagline: "Inbox-first engineering",
    slug: "email-templates",
    description:
      "High-conversion templates rendering flawlessly across Gmail, Outlook, Apple Mail — on every device.",
    accent: "#34D399",
    accentRgb: "52,211,153",
    gradientFrom: "#34D399",
    gradientTo: "#06B6D4",
    features: ["Mobile-First", "Dark Mode", "Clean Code"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function TiltCard({ service, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "1200px" }}
      className="relative group cursor-default"
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-px rounded-[2.5rem] pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(${service.accentRgb},0.35) 0%, transparent 70%)`,
          filter: "blur(1px)",
        }}
      />

      {/* Card Border Glow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(${service.accentRgb},0.4), transparent 50%, rgba(${service.accentRgb},0.15))`,
          opacity: hovered ? 1 : 0.2,
          padding: "1px",
        }}
      />

      {/* Main Card */}
      <div
        className="relative z-10 rounded-[2.5rem] overflow-hidden h-full"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: `1px solid rgba(${service.accentRgb}, ${hovered ? 0.4 : 0.12})`,
          backdropFilter: "blur(20px)",
          transition: "border-color 0.4s ease",
        }}
      >
        {/* Top Shimmer Line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(${service.accentRgb},0.9) 50%, transparent 100%)`,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative p-9 flex flex-col h-full" style={{ transform: "translateZ(20px)" }}>

          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            {/* Icon */}
            <motion.div
              animate={{ scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, rgba(${service.accentRgb}, 0.2), rgba(${service.accentRgb}, 0.05))`,
                border: `1px solid rgba(${service.accentRgb}, 0.3)`,
                color: service.accent,
              }}
            >
              {service.icon}
            </motion.div>

            {/* Service Number */}
            <span
              className="text-[11px] font-black tracking-[0.35em] uppercase"
              style={{ color: `rgba(${service.accentRgb}, 0.5)` }}
            >
              {service.id}
            </span>
          </div>

          {/* Tagline */}
          <p
            className="text-[12px] font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: service.accent }}
          >
            {service.tagline}
          </p>

          {/* Title */}
          <h3
            className="text-3xl font-black mb-4 leading-tight tracking-tight"
            style={{

              background: `linear-gradient(135deg, #ffffff 30%, ${service.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white leading-relaxed mb-8 flex-1">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {service.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.18 + i * 0.06 + 0.3 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `rgba(${service.accentRgb}, 0.15)` }}
                >
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4.2 7.5L8.5 2.5" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[12px] text-white tracking-wide font-medium">{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <div
            className="h-px mb-7"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(${service.accentRgb}, 0.3), transparent)`,
            }}
          />

          {/* CTA */}
          <Link
            href={`/services/${service.slug}`}
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] w-fit"
            style={{ color: `rgba(${service.accentRgb}, 0.7)` }}
          >
            Explore Service
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

const ConversionService = () => {
  return (
    <>


      <section
        className="relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(160deg, #020617 0%, #0a0f2c 30%, #0c1b3a 60%, #1e3a8a 100%)"
        }}
      >
        {/* ─── Background Layer ─── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large orbs */}
          <div
            className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div
            className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div
            className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
          />

          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Floating accent dots */}
          {[
            { top: "12%", left: "8%", size: 4, color: "232,121,249" },
            { top: "25%", right: "6%", size: 3, color: "56,189,248" },
            { bottom: "20%", left: "15%", size: 5, color: "52,211,153" },
            { bottom: "35%", right: "12%", size: 3, color: "232,121,249" },
            { top: "60%", left: "5%", size: 2, color: "56,189,248" },
          ].map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute rounded-full"
              style={{
                ...dot,
                width: dot.size,
                height: dot.size,
                background: `rgba(${dot.color}, 0.8)`,
                boxShadow: `0 0 ${dot.size * 4}px rgba(${dot.color}, 0.6)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">

          {/* ─── Section Header ─── */}
          <div className="flex flex-col items-center text-center mb-24">
            {/* <TopBadge text="Conversion Experts" /> */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white backdrop-blur-md border border-white/60  tracking-[0.3em] uppercase mb-10 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
              </span>
              <p className="text-[#FF1F8E] font-bold text-[10px]"> Conversion Experts</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 mb-6"
            >
              <h2
                className="text-6xl md:text-[5.5rem] font-black leading-[0.95] tracking-[-0.03em]"


              >
                <span className="block text-white/90">Premium</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Markup Services
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed"
            >
              We transform your designs into high-performance, pixel-perfect code that scales across the digital landscape.
            </motion.p>

            {/* Animated gradient line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 h-px w-40 rounded-full"
              style={{
                background: "linear-gradient(90deg, transparent, #E879F9, #38BDF8, transparent)",
              }}
            />
          </div>

          {/* ─── Cards ─── */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {SERVICES.map((service, i) => (
              <TiltCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <p className="text-white/80 text-sm tracking-wide">
              Ready to bring your design to life?
            </p>

            <Link
              href="/customize-package"
              className="relative group flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #E879F9, #A855F7)",
                boxShadow: "0 0 40px rgba(232,121,249,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="relative z-10 tracking-wide">Get a Quote</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.span>
              {/* Shine sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)" }}
              />
            </Link>

            {/* Secondary link */}
            <Link
              href="/works"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white/100 transition-colors duration-300 tracking-wide"
            >
              View portfolio
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ConversionService;
"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from 'next/link';

const SERVICES = [
  {
    id: "01",
    title: "PSD to HTML",
    slug: "psd-to-html",
    subTitle: "Premium Conversion",
    description:
      "High-performance, SEO-friendly HTML markups from your layered PSD files with pixel-perfect precision and semantic structure.",
    tags: ["Semantic HTML", "W3C Validated", "SEO Ready"],
    accent: "#E879F9",
    accentLight: "#FAE8FF",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Sketch to HTML",
    subTitle: "Modern Workflow",
    slug: "sketch-to-html",
    description:
      "W3C validated and fast-loading HTML markups meticulously crafted from your Sketch application designs with cross-browser precision.",
    tags: ["Cross-browser", "Modern CSS", "Responsive"],
    accent: "#38BDF8",
    accentLight: "#E0F2FE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Email Templates",
    slug: "email-templates",
    subTitle: "Responsive Campaigns",
    description:
      "Responsive email template conversions ensuring great readability and cross-client compatibility across Gmail, Outlook, and Apple Mail.",
    tags: ["Mobile-First", "Dark Mode", "Multi-client"],
    accent: "#34D399",
    accentLight: "#D1FAE5",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

function ServiceRow({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative mb-6"
    >
      {/* Row container */}
      <div
        className="relative flex  flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 py-12 px-6 rounded-2xl border transition-all duration-500 backdrop-blur-sm"
        style={{
          borderColor: hovered ? service.accent + "40" : "#e5e7eb",
          background: hovered
            ? `linear-gradient(135deg, ${service.accent}08, transparent 60%)`
            : "#ffffff",
          boxShadow: hovered
            ? `0 10px 40px -10px ${service.accent}25`
            : "0 2px 10px rgba(0,0,0,0.03)",
        }}
      >

        {/* Hover left bar */}
        <motion.div
          animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 bottom-0 w-0.5 origin-top rounded-full"
          style={{ background: `linear-gradient(180deg, ${service.accent}, transparent)` }}
        />

        {/* Number + Icon */}
        <div className="flex items-center gap-5 lg:w-40 shrink-0 pl-6">
          <motion.div
            animate={{
              background: hovered
                ? `linear-gradient(135deg, ${service.accent}, ${service.accent}cc)`
                : service.accentLight,
              color: hovered ? "#fff" : service.accent,
              scale: hovered ? 1.12 : 1,
              rotate: hovered ? 3 : 0,
            }}
            transition={{ duration: 0.35 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
          >
            {service.icon}
          </motion.div>
          <span
            className="font-black text-4xl tracking-tight leading-none select-none transition-all duration-300"
            style={{
              color: hovered ? service.accent : "#cbd5f5",
              letterSpacing: "-0.03em",
            }}
          >
            {service.id}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 group transition-all duration-300">
          {/* Subtitle */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-opacity-10 backdrop-blur-sm"
              style={{
                color: service.accent,
                backgroundColor: `${service.accent}20`,
              }}
            >
              {service.subTitle}
            </span>

            {/* small line */}
            <div
              className="h-[1px] flex-1 opacity-30"
              style={{ backgroundColor: service.accent }}
            />
          </div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight tracking-tight transition-all duration-300 group-hover:translate-x-1"
            style={{
              background: hovered
                ? `linear-gradient(90deg, ${service.accent}, #0f172a)`
                : "none",
              WebkitBackgroundClip: hovered ? "text" : "initial",
              WebkitTextFillColor: hovered ? "transparent" : "#0f172a",
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed max-w-lg transition-colors duration-300 group-hover:text-slate-800">
            {service.description}
          </p>

          {/* Bottom Accent Line */}
          <div
            className="mt-4 h-[2px] w-10 transition-all duration-300 group-hover:w-20"
            style={{ backgroundColor: service.accent }}
          />
        </div>

        {/* Tags */}
        <div className="hidden lg:flex flex-col gap-2 shrink-0 w-44">
          {service.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.12 + i * 0.07 + 0.3 }}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full text-center tracking-wide transition-all duration-300 backdrop-blur-sm"
              style={{
                background: hovered ? service.accentLight : "#f8fafc",
                color: hovered ? service.accent : "#64748b",
                border: `1px solid ${hovered ? service.accent + "40" : "#e2e8f0"}`,
                transform: hovered ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA Arrow */}
        <div className="pl-6 lg:pl-0 shrink-0">
          <Link
            href={`/services/${service.slug}`}
            animate={{
              background: hovered ? service.accent : "#ffffff",
              color: hovered ? "#fff" : service.accent,
            }}
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300"
            style={{
              borderColor: service.accent + "50",
              boxShadow: hovered
                ? `0 10px 30px -5px ${service.accent}40`
                : "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

const Services = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <>


      <section
        className="relative bg-white overflow-hidden py-28 md:py-36"
      >

        {/* Subtle top bleed from dark section above */}
        <div
          className="absolute  top-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(5,5,8,0.04) 0%, transparent 100%)",
          }}
        />

        {/* Faint dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient color blobs */}
        <div className="absolute top-[-5%] right-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
          style={{ background: "radial-gradient(circle, #E879F9 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[-5%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* ─── Header ─── */}
          <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E879F9]" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">Core Capabilities</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={headingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.03em] text-slate-900"

              >
                Smart
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #E879F9 0%, #38BDF8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Services
                </span>
              </motion.h2>
            </div>

            {/* Right — desc + stat row */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:max-w-xs"
            >
              <p className="text-slate-800  text-base leading-relaxed mb-8">
                A high-performance workflow engineered to transform ambitious concepts into global digital leaders.
              </p>

              {/* Mini stats row */}
              <div className="flex gap-8">
                {[["500+", "Projects"], ["99%", "Accuracy"], ["5★", "Rated"]].map(([num, label]) => (
                  <div key={label}>
                    <p
                      className="text-2xl font-black text-slate-900 leading-none"

                    >
                      {num}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-1 tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-full mb-0 origin-left"
            style={{
              background: "linear-gradient(90deg, #E879F9, #38BDF8, #34D399, transparent)",
            }}
          />

          {/* ─── Service Rows ─── */}
          <div>
            {SERVICES.map((service, i) => (
              <ServiceRow key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-slate-100"
          >
            <p className="text-slate-800 text-sm max-w-sm leading-relaxed">
              Every project is handled with dedicated engineers — no templates, no shortcuts.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/customize-package"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white tracking-wide transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #E879F9, #A855F7)",
                  boxShadow: "0 4px 20px rgba(232,121,249,0.2)",
                }}
              >
                Order Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

             <Link
                href="/services"
                whileHover={{ x: 3 }}
                className="text-sm text-slate-400 hover:text-slate-700 flex items-center gap-2 transition-colors duration-300 font-medium"
              >
                See all services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Services;
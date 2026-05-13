"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaQuoteLeft, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowUpRight, HiOutlineChevronDown } from "react-icons/hi2";
import AnimatedSection from '../AnimatedSection';
import { FaHistory, FaBullseye, FaLightbulb, FaAward } from 'react-icons/fa';
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutStory = () => {
  const storyPoints = [
    { icon: <FaHistory />, title: "Our Heritage", text: "Founded in 2005, evolved into a global digital powerhouse." },
    { icon: <FaBullseye />, title: "Our Mission", text: "To empower brands with future-proof digital architectures." },
    { icon: <FaLightbulb />, title: "Our Vision", text: "Defining the standard for high-end web experiences." },
    { icon: <FaAward />, title: "Quality First", text: "Zero compromise on performance and user experience." }
  ];
const PROCESS_STEPS = [
  { num: "01", title: "Discovery & Audit", desc: "We deep-dive into your business, competitors, users, and tech stack. No assumptions — only evidence.", icon: "🔍", color: "#6366f1", accent: "#e0e7ff" },
  { num: "02", title: "Strategy & Architecture", desc: "We define the roadmap, tech architecture, and success metrics before writing a single line of code.", icon: "🗺️", color: "#8b5cf6", accent: "#ede9fe" },
  { num: "03", title: "Design & Prototype", desc: "High-fidelity mockups and interactive prototypes, validated with real users before development begins.", icon: "✏️", color: "#ec4899", accent: "#fce7f3" },
  { num: "04", title: "Build & Iterate", desc: "Agile 2-week sprints. You see working software every fortnight — no black box development.", icon: "⚙️", color: "#f59e0b", accent: "#fef3c7" },
  { num: "05", title: "Launch & Scale", desc: "Careful staged rollout, performance monitoring, and post-launch optimisation built into every engagement.", icon: "🚀", color: "#10b981", accent: "#d1fae5" },
];
const Reveal = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
  return (
  <section id="process" className="bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <Reveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-5 border border-violet-100"
          style={{ background: "#ede9fe", color: "#6d28d9" }}>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">How We Work</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our proven process
        </h2>
        <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
          Every engagement follows a battle-tested framework honed over 500+ projects and two decades.
        </p>
      </Reveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, #E879F9, #A855F7, #38BDF8)" }} />

        <div className="space-y-6">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} direction="left">
              <div className="group flex gap-6 relative">
                {/* Circle */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center
                  font-extrabold text-[13px] border-2 shadow-md transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: step.accent,
                    borderColor: `${step.color}40`,
                    color: step.color,
                  }}>
                  {step.num}
                </div>

                {/* Card */}
                <div className="flex-1 p-6 rounded-2xl border border-slate-100 bg-white
                  group-hover:border-purple-100 group-hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
                  transition-all duration-400">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{step.icon}</span>
                    <h3 className="text-slate-900 font-extrabold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 text-[15px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutStory;

"use client";
import React, { useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import AnimatedSection from '../AnimatedSection';
import { FaArrowRight, FaQuoteLeft, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineChevronDown } from "react-icons/hi2";

const AboutHero = () => {
  const STATS = [
  { num: "500+", label: "Projects Delivered", sub: "Across 30+ industries" },
  { num: "200+", label: "Happy Clients", sub: "From startups to Fortune 500" },
  { num: "20+", label: "Years Experience", sub: "Since 2004" },
  { num: "98%", label: "Client Retention", sub: "Long-term partnerships" },
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
const StatsTicker = () => (
  <section className="bg-white border-y border-slate-100 py-14">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="text-4xl md:text-5xl font-extrabold mb-1"
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {s.num}
            </p>
            <p className="text-slate-900 font-semibold text-[15px] mb-0.5">{s.label}</p>
            <p className="text-slate-400 text-[12px]">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
  return (
    <>
    <section className="relative w-full py-20  overflow-hidden bg-slate-50 font-roboto">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/5 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto max-w-5xl relative z-10 px-6">
        <AnimatedSection delay={0.1} direction="up">
          <div className="text-center flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl mt-8 mb-4
            border border-white/60 bg-white/50 backdrop-blur-xl shadow-sm
            text-[11px] font-bold tracking-[0.3em] uppercase"
              style={{ color: "#FF1F8E" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#FF1F8E" }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#FF1F8E" }} />
              </span>
              About us
            </motion.div>


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[0.9] text-slate-900 mb-6"
            >
              Pioneering
              <br />
              <span className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                Software Excellence
                <span className="absolute left-0 -bottom-2 w-full h-[5px] rounded-full animate-pulse"
                  style={{ background: "linear-gradient(90deg, #E879F9, #A855F7, #38BDF8)", filter: "blur(4px)", opacity: 0.6 }} />
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-12">
              We architect robust digital ecosystems. A fusion of technical mastery and strategic design, crafted to empower your business with future-proof solutions.
            </p>

           
             <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.45 }}
                      className="flex flex-wrap items-center justify-center gap-4"
                    >
                      <a href="#process"
                        className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-[15px]
                          transition-all duration-300 hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #E879F9, #A855F7, #38BDF8)", boxShadow: "0 16px 40px rgba(168,85,247,0.35)" }}>
                         Our Philosophy
                        <HiOutlineArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                      <a href="#initiateInquiry"
                        className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-600 text-[15px]
                          border border-slate-200 hover:border-purple-300 hover:text-purple-600 bg-white/60 backdrop-blur-md transition-all duration-300">
                      Join The Journey
                      </a>
                    </motion.div>

          </div>
        </AnimatedSection>

        {/* Simple Stats/Trust Strip */}
   
      </div>
        

    </section>
    <StatsTicker />
    </>
    
  );
};

export default AboutHero;

"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaQuoteLeft, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowUpRight, HiOutlineChevronDown } from "react-icons/hi2";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  { num: "500+", label: "Projects Delivered", sub: "Across 30+ industries" },
  { num: "200+", label: "Happy Clients", sub: "From startups to Fortune 500" },
  { num: "20+", label: "Years Experience", sub: "Since 2004" },
  { num: "98%", label: "Client Retention", sub: "Long-term partnerships" },
];

const CATEGORIES = ["All", "Healthcare", "E-Commerce", "SaaS", "Education", "Fintech", "Non-Profit", "Enterprise"];

const CASE_STUDIES = [
  {
    id: "dr-treat",
    slug: "dr-treat",
    title: "Dr. Treat",
    tagline: "Redesigning patient care from the ground up",
    category: "Healthcare",
    tags: ["Healthcare", "SaaS"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    logo: "🏥",
    client: "Dr. Treat Inc.",
    duration: "6 months",
    year: "2023",
    tech: ["React", "Node.js", "AWS", "Figma"],
    challenge: "A fragmented patient onboarding system causing 40% drop-offs before appointments were confirmed.",
    solution: "End-to-end UX redesign + custom booking engine with real-time slot management and automated reminders.",
    result: "72% reduction in drop-off rate. Appointment throughput grew 3× in 90 days.",
    metrics: [
      { label: "Drop-off Reduced", val: "72%" },
      { label: "Booking Speed", val: "3×" },
      { label: "Patient NPS", val: "+58" },
    ],
    testimonial: {
      quote: "TechnoScore didn't just build software — they fundamentally transformed how our patients experience care.",
      author: "Dr. Sarah Linton",
      role: "CEO, Dr. Treat Inc.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&q=80",
    },
    featured: true,
    color: "#6366f1",
    accent: "#e0e7ff",
    lightText: "#4338ca",
  },
  {
    id: "shopvault",
    slug: "shopvault",
    title: "ShopVault",
    tagline: "An e-commerce engine that scales with ambition",
    category: "E-Commerce",
    tags: ["E-Commerce", "Enterprise"],
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80",
    logo: "🛒",
    client: "ShopVault Ltd.",
    duration: "8 months",
    year: "2023",
    tech: ["Laravel", "React", "MySQL", "Stripe", "Redis"],
    challenge: "Legacy Magento store crashing under Black Friday traffic. $800K in lost sales in one weekend.",
    solution: "Custom Laravel commerce engine with Redis caching, CDN integration, and a headless React storefront.",
    result: "$2M+ monthly GMV on launch. Zero downtime across 3 consecutive Black Fridays.",
    metrics: [
      { label: "Monthly GMV", val: "$2M+" },
      { label: "Page Load", val: "0.8s" },
      { label: "Conversion Lift", val: "+44%" },
    ],
    testimonial: {
      quote: "We went from dreading sales peaks to welcoming them. The platform handles everything flawlessly.",
      author: "Marcus Webb",
      role: "CTO, ShopVault Ltd.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    },
    featured: true,
    color: "#f59e0b",
    accent: "#fef3c7",
    lightText: "#b45309",
  },
  {
    id: "eduforge",
    slug: "eduforge",
    title: "EduForge LMS",
    tagline: "Learning infrastructure for the next generation",
    category: "Education",
    tags: ["Education", "SaaS"],
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
    logo: "🎓",
    client: "EduForge Group",
    duration: "10 months",
    year: "2024",
    tech: ["PHP", "React", "MySQL", "WebRTC", "AWS"],
    challenge: "120 institutions managing students on spreadsheets. No unified grading, no live class capability.",
    solution: "Full-stack LMS with live WebRTC classrooms, automated grading, progress analytics, and mobile apps.",
    result: "50,000+ students onboarded. 92% course completion rate vs 41% industry average.",
    metrics: [
      { label: "Students Served", val: "50K+" },
      { label: "Completion Rate", val: "92%" },
      { label: "Institutions", val: "120+" },
    ],
    testimonial: {
      quote: "EduForge became our backbone overnight. Teachers love it. Students love it. Parents love it.",
      author: "Prof. Amara Osei",
      role: "Director, EduForge Group",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
    },
    featured: false,
    color: "#10b981",
    accent: "#d1fae5",
    lightText: "#047857",
  },
  {
    id: "retrievr",
    slug: "retrievr",
    title: "Retrievr",
    tagline: "Asset tracking reimagined for the modern enterprise",
    category: "SaaS",
    tags: ["SaaS", "Enterprise"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
    logo: "📦",
    client: "Retrievr Corp.",
    duration: "7 months",
    year: "2022",
    tech: ["Node.js", "Vue.js", "MongoDB", "AWS IoT"],
    challenge: "Warehouses losing $3M/year in misplaced assets. Manual barcode scans taking 8+ hours per audit.",
    solution: "IoT-integrated SaaS platform with real-time GPS tracking, automated audit trails, and mobile scanner app.",
    result: "Asset loss reduced by 89%. Audit time cut from 8 hours to 22 minutes.",
    metrics: [
      { label: "Asset Loss ↓", val: "89%" },
      { label: "Audit Time", val: "22min" },
      { label: "ROI in Y1", val: "6.4×" },
    ],
    testimonial: {
      quote: "Retrievr paid for itself in 3 weeks. That's not marketing — that's what happened.",
      author: "Jamie Torres",
      role: "Operations VP, Retrievr Corp.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    },
    featured: false,
    color: "#8b5cf6",
    accent: "#ede9fe",
    lightText: "#6d28d9",
  },
  {
    id: "fundpath",
    slug: "fundpath",
    title: "FundPath",
    tagline: "Where fintech meets financial clarity",
    category: "Fintech",
    tags: ["Fintech", "SaaS"],
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80",
    logo: "💰",
    client: "FundPath Financial",
    duration: "9 months",
    year: "2023",
    tech: ["Node.js", "React", "PostgreSQL", "Plaid API"],
    challenge: "Retail investors struggling to understand their portfolio performance. 70% of users churning in week 1.",
    solution: "AI-powered investment dashboard with plain-English insights, automated rebalancing, and tax reports.",
    result: "Week-1 churn dropped from 70% to 12%. AUM on platform grew from $4M to $47M in 12 months.",
    metrics: [
      { label: "Churn ↓", val: "70%→12%" },
      { label: "AUM Growth", val: "10×" },
      { label: "DAU", val: "28K+" },
    ],
    testimonial: {
      quote: "Our users went from confused to confident. TechnoScore made complex finance feel approachable.",
      author: "Leila Nasser",
      role: "Product Lead, FundPath",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
    },
    featured: false,
    color: "#f43f5e",
    accent: "#ffe4e6",
    lightText: "#be123c",
  },
  {
    id: "grace-mercy",
    slug: "grace-mercy",
    title: "Grace Mercy Foundation",
    tagline: "Giving a non-profit the digital presence it deserves",
    category: "Non-Profit",
    tags: ["Non-Profit"],
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=900&q=80",
    logo: "✝️",
    client: "Grace Mercy Foundation",
    duration: "3 months",
    year: "2022",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Stripe"],
    challenge: "A 20-year-old organisation with a website from 2009. Online donations were nearly zero.",
    solution: "Emotionally resonant website with donor journey optimisation, CMS for staff, and streamlined giving flow.",
    result: "Online donations grew 312% in 6 months. Monthly recurring donors up 5×.",
    metrics: [
      { label: "Donation Growth", val: "312%" },
      { label: "Recurring Donors", val: "5×" },
      { label: "Volunteer Sign-ups", val: "+180%" },
    ],
    testimonial: {
      quote: "We finally have a digital home that reflects who we are. People feel moved to give when they visit.",
      author: "Rev. Daniel Okafor",
      role: "Executive Director, Grace Mercy",
      avatar: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=80&q=80",
    },
    featured: false,
    color: "#ec4899",
    accent: "#fce7f3",
    lightText: "#be185d",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery & Audit", desc: "We deep-dive into your business, competitors, users, and tech stack. No assumptions — only evidence.", icon: "🔍", color: "#6366f1", accent: "#e0e7ff" },
  { num: "02", title: "Strategy & Architecture", desc: "We define the roadmap, tech architecture, and success metrics before writing a single line of code.", icon: "🗺️", color: "#8b5cf6", accent: "#ede9fe" },
  { num: "03", title: "Design & Prototype", desc: "High-fidelity mockups and interactive prototypes, validated with real users before development begins.", icon: "✏️", color: "#ec4899", accent: "#fce7f3" },
  { num: "04", title: "Build & Iterate", desc: "Agile 2-week sprints. You see working software every fortnight — no black box development.", icon: "⚙️", color: "#f59e0b", accent: "#fef3c7" },
  { num: "05", title: "Launch & Scale", desc: "Careful staged rollout, performance monitoring, and post-launch optimisation built into every engagement.", icon: "🚀", color: "#10b981", accent: "#d1fae5" },
];

const INDUSTRIES = [
  { name: "Healthcare", count: 42, icon: "🏥", color: "#6366f1", accent: "#e0e7ff" },
  { name: "E-Commerce", count: 68, icon: "🛒", color: "#f59e0b", accent: "#fef3c7" },
  { name: "SaaS", count: 95, icon: "☁️", color: "#8b5cf6", accent: "#ede9fe" },
  { name: "Education", count: 38, icon: "🎓", color: "#10b981", accent: "#d1fae5" },
  { name: "Fintech", count: 55, icon: "💳", color: "#f43f5e", accent: "#ffe4e6" },
  { name: "Non-Profit", count: 29, icon: "❤️", color: "#ec4899", accent: "#fce7f3" },
  { name: "Enterprise", count: 71, icon: "🏢", color: "#0ea5e9", accent: "#e0f2fe" },
  { name: "IoT / Hardware", count: 22, icon: "📡", color: "#14b8a6", accent: "#ccfbf1" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION HELPER
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — HERO (light)
// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #ecfdf5 30%, #fdf4ff 60%, #eff6ff 100%)" }}>
      {/* Soft orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 60%)" }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 60%)" }} />
        <div className="absolute top-[35%] left-[45%] w-[45vw] h-[45vw] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%)", transform: "translate(-50%,-50%)" }} />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(100,100,100,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <motion.div style={{ y }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl mb-8
            border border-white/60 bg-white/50 backdrop-blur-xl shadow-sm
            text-[11px] font-bold tracking-[0.3em] uppercase"
          style={{ color: "#FF1F8E" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#FF1F8E" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#FF1F8E" }} />
          </span>
          Case Studies &amp; Client Results
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-[88px] font-extrabold tracking-tight leading-[0.9] text-slate-900 mb-6"
        >
          Real projects.
          <br />
          <span className="relative inline-block"
            style={{
              background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Real results.
            <span className="absolute left-0 -bottom-2 w-full h-[5px] rounded-full animate-pulse"
              style={{ background: "linear-gradient(90deg, #E879F9, #A855F7, #38BDF8)", filter: "blur(4px)", opacity: 0.6 }} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          500+ projects. 200+ clients. Every case study here is a story of a real
          problem solved — with measurable, verified outcomes you can hold us to.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#featured"
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-[15px]
              transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #E879F9, #A855F7, #38BDF8)", boxShadow: "0 16px 40px rgba(168,85,247,0.35)" }}>
            Explore Work
            <HiOutlineArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a href="#process"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-600 text-[15px]
              border border-slate-200 hover:border-purple-300 hover:text-purple-600 bg-white/60 backdrop-blur-md transition-all duration-300">
            Our Process
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Scroll</span>
        <HiOutlineChevronDown className="animate-bounce text-lg" />
      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — STATS
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — FEATURED CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────
const FeaturedStudies = () => {
  const featured = CASE_STUDIES.filter(c => c.featured);
  return (
    <section id="featured"
      className="py-24 px-6"
      style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #fdf4ff 60%, #eff6ff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl mb-5
            bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm"
            style={{ color: "#FF1F8E" }}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Featured Projects</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Our headline{" "}
            <span style={{
              background: "linear-gradient(135deg, #E879F9, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>case studies</span>
          </h2>
        </Reveal>

        <div className="space-y-10">
          {featured.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden border border-slate-100
                bg-white shadow-[0_4px_24px_rgba(168,85,247,0.08)]
                hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)] hover:border-purple-100
                transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-72 md:h-auto overflow-hidden">
                    <Image src={cs.img} alt={cs.title} fill className="object-cover
                      transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 md:from-white/20 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold
                        tracking-widest uppercase backdrop-blur-md border border-white/40 text-white shadow-sm"
                        style={{ background: `${cs.color}cc` }}>
                        {cs.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl">{cs.logo}</span>
                      <div>
                        <p className="text-slate-400 text-[11px] tracking-wider uppercase">{cs.client}</p>
                        <h3 className="text-slate-900 text-2xl font-extrabold">{cs.title}</h3>
                      </div>
                    </div>

                    <p className="text-slate-500 text-[15px] leading-relaxed mb-6 italic">
                      "{cs.tagline}"
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-7 p-4 rounded-2xl border"
                      style={{ background: cs.accent, borderColor: `${cs.color}22` }}>
                      {cs.metrics.map(m => (
                        <div key={m.label} className="text-center">
                          <p className="text-2xl font-extrabold" style={{ color: cs.lightText }}>{m.val}</p>
                          <p className="text-slate-500 text-[10px] mt-0.5 leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {cs.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full text-[11px] font-semibold border border-slate-200 text-slate-500 bg-slate-50">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link href={`/case-studies/${cs.slug}`}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-[14px]
                        transition-all duration-300 hover:gap-3 hover:scale-105 w-fit shadow-md"
                      style={{ background: `linear-gradient(135deg, ${cs.color}, ${cs.color}cc)`, boxShadow: `0 8px 24px ${cs.color}30` }}>
                      Read Full Case Study
                      <FaArrowRight className="text-[12px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — ALL CASE STUDIES GRID
// ─────────────────────────────────────────────────────────────────────────────
const AllStudies = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CASE_STUDIES : CASE_STUDIES.filter(c => c.tags.includes(active));

  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? CASE_STUDIES.length : CASE_STUDIES.filter(c => c.tags.includes(cat)).length;
    return acc;
  }, {});

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl mb-5
            border border-purple-100 shadow-sm"
            style={{ background: "#fdf4ff", color: "#A855F7" }}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">All Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Browse by industry
          </h2>
        </Reveal>

        {/* Filter */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] font-semibold
                  tracking-wide border transition-all duration-300
                  ${active === cat
                    ? "text-white border-transparent scale-105 shadow-lg"
                    : "bg-white text-slate-500 border-slate-200 hover:border-purple-200 hover:text-purple-600 hover:scale-105"
                  }`}
                style={active === cat ? {
                  background: "linear-gradient(135deg, #E879F9, #A855F7, #38BDF8)",
                  boxShadow: "0 8px 20px rgba(168,85,247,0.3)",
                } : {}}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${active === cat ? "bg-white/70" : "bg-purple-300"}`} />
                {cat}
                <span className={`min-w-[18px] text-center text-[9px] font-bold px-1.5 py-0.5 rounded-full
                  ${active === cat ? "bg-white/25 text-white" : "bg-purple-100 text-purple-500"}`}>
                  {counts[cat]}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cs, i) => (
            <Reveal key={`${active}-${cs.id}`} delay={i * 0.07}>
              <div className="group relative rounded-[2rem] overflow-hidden border border-purple-100/60
                bg-white/70 backdrop-blur-md
                shadow-[0_4px_24px_rgba(168,85,247,0.08)]
                transition-all duration-500 flex flex-col h-full
                hover:-translate-y-3 hover:scale-[1.02]
                hover:shadow-[0_28px_64px_rgba(168,85,247,0.2),0_4px_16px_rgba(236,72,153,0.1)]
                hover:border-purple-200/80">

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={cs.img} alt={cs.title} fill className="object-cover
                    transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xl">{cs.logo}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[9px] font-bold
                      tracking-widest uppercase text-white backdrop-blur-md border border-white/30"
                      style={{ background: `${cs.color}cc` }}>
                      {cs.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white/60 text-[10px] uppercase tracking-wider">{cs.year} · {cs.duration}</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    flex flex-col justify-end p-5"
                    style={{ background: "linear-gradient(to top, rgba(15,15,40,0.92) 0%, rgba(15,15,40,0.3) 60%, transparent 100%)" }}>
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/80 text-[13px] leading-relaxed mb-3 line-clamp-2">{cs.challenge}</p>
                      <div className="flex items-center justify-end">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg
                          group-hover:scale-110 transition-transform duration-300"
                          style={{ background: `linear-gradient(135deg, ${cs.color}, ${cs.color}bb)` }}>
                          <FaExternalLinkAlt size={11} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 py-4 bg-white/90 backdrop-blur-md border-t border-purple-50 flex flex-col flex-1">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1" style={{ color: cs.lightText }}>
                    {cs.category}
                  </p>
                  <h3 className="text-slate-900 font-extrabold text-[17px] tracking-tight mb-2.5">
                    {cs.title}
                  </h3>

                  {/* Metrics pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.metrics.map(m => (
                      <div key={m.label} className="px-3 py-1.5 rounded-xl text-center"
                        style={{ background: cs.accent, border: `1px solid ${cs.color}25` }}>
                        <p className="text-[13px] font-extrabold" style={{ color: cs.lightText }}>{m.val}</p>
                        <p className="text-slate-400 text-[9px]">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-500 border border-slate-100 bg-slate-50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold mt-auto transition-all duration-300 group/lnk"
                    style={{ color: cs.color }}>
                    Read case study
                    <HiOutlineArrowUpRight className="group-hover/lnk:translate-x-0.5 group-hover/lnk:-translate-y-0.5 transition-transform text-sm" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 — TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────
const Testimonials = () => {
  const testimonials = CASE_STUDIES.map(c => ({ ...c.testimonial, project: c.title, color: c.color, accent: c.accent, lightText: c.lightText }));
  return (
    <section className="py-24 px-6"
      style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #fdf4ff 60%, #eff6ff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-5 border border-pink-100"
            style={{ background: "#fce7f3", color: "#be185d" }}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Client Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            What our clients say
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative p-6 rounded-2xl border border-slate-100 h-full flex flex-col bg-white
                shadow-[0_4px_24px_rgba(168,85,247,0.07)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.15)]
                hover:-translate-y-1 transition-all duration-400">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <FaStar key={s} className="text-amber-400 text-[12px]" />
                  ))}
                </div>
                <FaQuoteLeft style={{ color: `${t.color}25` }} className="text-3xl mb-3" />
                <p className="text-slate-600 text-[14px] leading-relaxed flex-1 mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2"
                    style={{ "--tw-ring-color": `${t.color}50` }}>
                    <Image src={t.avatar} alt={t.author} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-[14px]">{t.author}</p>
                    <p className="text-slate-400 text-[11px]">{t.role}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: t.accent, color: t.lightText }}>
                      {t.project}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 6 — PROCESS
// ─────────────────────────────────────────────────────────────────────────────
const Process = () => (
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

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 7 — INDUSTRIES
// ─────────────────────────────────────────────────────────────────────────────
const Industries = () => (
  <section className="py-24 px-6"
    style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #fdf4ff 60%, #eff6ff 100%)" }}>
    <div className="max-w-6xl mx-auto">
      <Reveal className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-5 border border-emerald-100"
          style={{ background: "#d1fae5", color: "#047857" }}>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Industry Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Every sector. Every scale.
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.07}>
            <div className="group p-6 rounded-2xl border border-slate-100 text-center bg-white
              hover:border-purple-200 hover:-translate-y-2
              hover:shadow-[0_12px_40px_rgba(168,85,247,0.15)]
              transition-all duration-400 cursor-default">
              <span className="text-4xl block mb-3">{ind.icon}</span>
              <p className="text-slate-900 font-bold text-[15px] mb-1">{ind.name}</p>
              <p className="text-slate-400 text-[12px]">{ind.count}+ projects</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 8 — MARQUEE TRUST STRIP
// ─────────────────────────────────────────────────────────────────────────────
const TrustStrip = () => {
  const logos = [
    "Dr. Treat", "Stillwell Hansen", "Retrievr", "Grace Mercy",
    "EduForge", "ShopVault", "FundPath", "LeafOS",
    "Clarix ERP", "NovaDash", "StudyCircle", "Pixel Academy",
  ];
  return (
    <section className="bg-white py-14 border-y border-slate-100 overflow-hidden">
      <Reveal className="text-center mb-8">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-600">
          Trusted by leading companies worldwide
        </p>
      </Reveal>
      <div className="flex gap-12 items-center" style={{ animation: "marquee 30s linear infinite", width: "max-content" }}>
        {[...logos, ...logos].map((name, i) => (
          <span key={i} className="text-slate-600 font-extrabold text-[15px] whitespace-nowrap tracking-wide">
            {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 9 — CTA BANNER
// ─────────────────────────────────────────────────────────────────────────────
const CTABanner = () => (
  <section className="bg-white py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <Reveal>
        <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-purple-100
          shadow-[0_20px_80px_rgba(168,85,247,0.15)]"
          style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #eff6ff 50%, #f0fdf9 100%)" }}>
          {/* Orbs */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,121,249,0.2) 0%, transparent 70%)" }} />
          <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-6 border border-purple-200 shadow-sm"
              style={{ background: "white", color: "#A855F7" }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#A855F7" }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "#A855F7" }} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase">Start Your Project</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Ready to build your
              <br />
              <span style={{
                background: "linear-gradient(135deg, #E879F9, #A855F7, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                success story?
              </span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 200+ companies who turned their biggest challenges into their biggest competitive advantages.
              Let's talk about yours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contactus"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-[15px]
                  transition-all duration-300 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #E879F9, #A855F7, #38BDF8)", boxShadow: "0 16px 48px rgba(168,85,247,0.3)" }}>
                Book a Free Discovery Call
                <HiOutlineArrowUpRight />
              </Link>
              <Link href="/works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-600 text-[15px]
                  border border-slate-200 hover:border-purple-300 hover:text-purple-600 bg-white transition-all duration-300">
                See More Work
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["No commitment required", "Response within 24hrs", "Free initial consultation"].map(s => (
                <span key={s} className="flex items-center gap-2 text-slate-400 text-[13px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ASSEMBLY
// ─────────────────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <main className="bg-white min-h-screen">
        <Hero />
        <StatsTicker />
        <FeaturedStudies />
        <TrustStrip />
        <AllStudies />
        <Testimonials />
        <Process />
        <Industries />
        <CTABanner />
      </main>
    </>
  );
}
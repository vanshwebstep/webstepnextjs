"use client";
import React, { useState, useEffect, useRef } from 'react';
import drTreatCase from '@/components/img/dr-treat-case.png';
import stillwellHansenWork from '@/components/img/Stillwell-Hansen-work.png';
import retrievrWork1 from '@/components/img/Retrievr-work1.png';
import graceMercyWork from '@/components/img/Grace-Mercy-work.png';
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiVuedotjs, SiAmazonwebservices } from 'react-icons/si';
import Link from "next/link";

// ── Filter categories ──────────────────────────────────────────────────────────
const CATEGORIES = ["All", "UI & UX", "Education", "Front End Dev", "Development", "PHP", "Laravel", "Node.js"];

// ── Full projects data ─────────────────────────────────────────────────────────
const ALL_PROJECTS = [
    {
        img: drTreatCase,
        title: "Dr. Treat",
        category: "Healthcare / UX Design",
        tags: ["UI & UX", "Development"],
        tech: ["React", "Figma"],
        desc: "Patient-centric healthcare platform with intuitive UX flows and real-time appointment scheduling.",
        year: "2023",
    },
    {
        img: stillwellHansenWork,
        title: "Stillwell Hansen",
        category: "Infrastructure / Development",
        tags: ["Development", "Node.js"],
        tech: ["Node.js", "MongoDB"],
        desc: "Large-scale infrastructure project portal with real-time progress tracking and team collaboration.",
        year: "2023",
    },
    {
        img: retrievrWork1,
        title: "Retrievr",
        category: "SaaS / Mobile App",
        tags: ["Node.js", "Development", "Laravel"],
        tech: ["Laravel", "Vue", "AWS"],
        desc: "Smart asset tracking SaaS app used by 10,000+ businesses across North America.",
        year: "2022",
    },
    {
        img: graceMercyWork,
        title: "Grace Mercy",
        category: "Non-Profit / Web Design",
        tags: ["UI & UX", "Front End Dev"],
        tech: ["Next.js", "Tailwind"],
        desc: "Emotionally driven web presence for a non-profit, growing online donations by 3x.",
        year: "2022",
    }
    // {
    //     img: drTreatCase,          // replace with real image
    //     title: "EduForge LMS",
    //     category: "Education / Development",
    //     tags: ["Education", "Front End Dev", "PHP"],
    //     tech: ["PHP", "React", "MySQL"],
    //     desc: "Full-stack learning management system serving 50,000+ students across 120 institutions.",
    //     year: "2024",
    // },
    // {
    //     img: stillwellHansenWork,  // replace with real image
    //     title: "ShopVault",
    //     category: "E-Commerce / Laravel",
    //     tags: ["Laravel", "PHP", "Development"],
    //     tech: ["Laravel", "MySQL", "Stripe"],
    //     desc: "High-performance e-commerce engine handling $2M+ in monthly transactions.",
    //     year: "2023",
    // },
    // {
    //     img: retrievrWork1,        // replace with real image
    //     title: "NovaDash",
    //     category: "Analytics / Front End",
    //     tags: ["Front End Dev", "UI & UX"],
    //     tech: ["React", "D3.js", "Tailwind"],
    //     desc: "Real-time analytics dashboard used by marketing teams to track multi-channel performance.",
    //     year: "2024",
    // },
    // {
    //     img: graceMercyWork,       // replace with real image
    //     title: "LeafOS",
    //     category: "IoT / Node.js Platform",
    //     tags: ["Node.js", "Development", "Front End Dev"],
    //     tech: ["Node.js", "Vue", "AWS"],
    //     desc: "Smart farming IoT platform connecting 500+ sensors for crop monitoring and automation.",
    //     year: "2024",
    // },
    // {
    //     img: drTreatCase,          // replace with real image
    //     title: "Clarix ERP",
    //     category: "Enterprise / PHP",
    //     tags: ["PHP", "Laravel", "Development"],
    //     tech: ["PHP", "Laravel", "React"],
    //     desc: "Modular ERP system for mid-sized enterprises — HR, inventory, finance in one platform.",
    //     year: "2023",
    // },
    // {
    //     img: stillwellHansenWork,  // replace with real image
    //     title: "Pixel Academy",
    //     category: "Education / UI Design",
    //     tags: ["Education", "UI & UX"],
    //     tech: ["Next.js", "Figma"],
    //     desc: "Creative coding school with gamified learning paths and live peer code reviews.",
    //     year: "2024",
    // },
    // {
    //     img: retrievrWork1,        // replace with real image
    //     title: "StudyCircle",
    //     category: "Education / Node.js",
    //     tags: ["Education", "Node.js", "Front End Dev"],
    //     tech: ["Node.js", "Vue", "WebRTC"],
    //     desc: "Live tutoring platform with WebRTC-powered breakout rooms and AI-assisted quizzes.",
    //     year: "2024",
    // },
    // {
    //     img: graceMercyWork,       // replace with real image
    //     title: "FundPath",
    //     category: "Fintech / Development",
    //     tags: ["Development", "Node.js", "UI & UX"],
    //     tech: ["Node.js", "React", "Plaid"],
    //     desc: "Investment tracking dashboard with automated portfolio rebalancing and tax reporting.",
    //     year: "2023",
    // },
];

// ── Tech icon map ──────────────────────────────────────────────────────────────
const TECH_COLORS = {
    "React": "bg-sky-100 text-sky-700",
    "Node.js": "bg-green-100 text-green-700",
    "PHP": "bg-indigo-100 text-indigo-700",
    "Laravel": "bg-red-100 text-red-700",
    "Next.js": "bg-slate-100 text-slate-700",
    "Vue": "bg-emerald-100 text-emerald-700",
    "Tailwind": "bg-cyan-100 text-cyan-700",
    "MongoDB": "bg-green-100 text-green-800",
    "MySQL": "bg-blue-100 text-blue-700",
    "AWS": "bg-orange-100 text-orange-700",
    "Figma": "bg-purple-100 text-purple-700",
    "Stripe": "bg-violet-100 text-violet-700",
    "D3.js": "bg-yellow-100 text-yellow-700",
    "WebRTC": "bg-pink-100 text-pink-700",
    "Plaid": "bg-teal-100 text-teal-700",
    "default": "bg-gray-100 text-gray-600",
};

// ── Filter Bar ─────────────────────────────────────────────────────────────────
const FilterBar = ({ activeFilter, setActiveFilter }) => {
    const counts = CATEGORIES.reduce((acc, cat) => {
        acc[cat] = cat === "All"
            ? ALL_PROJECTS.length
            : ALL_PROJECTS.filter(p => p.tags.includes(cat)).length;
        return acc;
    }, {});

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-14">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`
                        group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                        text-[12px] font-semibold tracking-wide border
                        transition-all duration-300 overflow-hidden
                        ${activeFilter === cat
                            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-lg shadow-purple-300/40 scale-105"
                            : "bg-white/70 backdrop-blur-md text-slate-500 border-purple-100 hover:border-purple-300 hover:text-purple-600 hover:scale-105 hover:shadow-md"
                        }
                    `}
                >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-300
                        ${activeFilter === cat ? "bg-white/70" : "bg-purple-300 group-hover:bg-purple-500"}`}
                    />
                    {cat}
                    <span className={`
                        min-w-[18px] text-center text-[10px] font-bold px-1.5 py-0.5 rounded-full transition-all duration-300
                        ${activeFilter === cat ? "bg-white/25 text-white" : "bg-purple-100 text-purple-500"}
                    `}>
                        {counts[cat]}
                    </span>
                </button>
            ))}
        </div>
    );
};

// ── Project Card ───────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
    <AnimatedSection key={index} delay={0.08 * (index + 1)} direction="up">
        <div className="group relative rounded-[2rem] overflow-hidden
            border border-purple-100/60
            bg-white/70 backdrop-blur-md
            shadow-[0_4px_24px_rgba(168,85,247,0.08)]
            transition-all duration-500 h-full
            hover:-translate-y-3 hover:scale-[1.02]
            hover:shadow-[0_28px_64px_rgba(168,85,247,0.22),0_4px_16px_rgba(236,72,153,0.12)]
            hover:border-purple-200/80">

            {/* Image */}
            <div className="overflow-hidden relative aspect-[4/3]">
                <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Year badge */}
                <div className="absolute top-4 left-4 z-10
                    bg-white/90 backdrop-blur-md rounded-full
                    px-3 py-1 text-[10px] font-bold text-slate-500 tracking-widest uppercase
                    shadow-sm">
                    {project.year}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0
                    bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-[#F0ABFC] font-bold text-[10px] capitalize tracking-widest mb-2 block">
                            {project.category}
                        </span>
                        <h4 className="text-white text-xl font-black tracking-tight mb-2">
                            {project.title}
                        </h4>
                        <p className="text-white/70 text-[13px] leading-relaxed mb-4 line-clamp-2">
                            {project.desc}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.slice(0, 2).map((t) => (
                                    <span key={t} className="text-[9px] font-bold uppercase tracking-wider
                                        bg-white/20 text-white/90 px-2 py-0.5 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center
                                text-slate-900 shadow-lg flex-shrink-0
                                group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-500
                                group-hover:text-white group-hover:rotate-12
                                transition-all duration-300">
                                <FaExternalLinkAlt size={13} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 py-4 bg-white/90 backdrop-blur-md border-t border-purple-50">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-purple-500 mb-1">
                    {project.category}
                </p>
                <h4 className="text-slate-900 font-black text-[16px] tracking-tight mb-2.5">
                    {project.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span key={t} className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${TECH_COLORS[t] || TECH_COLORS.default}`}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedSection>
);

// ── Main Work component ────────────────────────────────────────────────────────
const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter(p => p.tags.includes(activeFilter));

    return (
        <section
            className="py-20 md:py-28 relative z-10 px-6 font-roboto overflow-hidden"
            style={{
                background:
                    "linear-gradient(160deg, #f0fdf9 0%, #ecfdf5 30%, #f0fdfa 60%, #f7fffe 100%)",
            }}
        >
            {/* ── Background Glow Orbs ── */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* ── Header ── */}
                <AnimatedSection delay={0.1} direction="up" className="text-center mb-16">

                    {/* Glass Badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl
                        bg-white/50 backdrop-blur-xl border border-white/60
                        text-[#FF1F8E] font-semibold text-[11px] tracking-[0.35em] uppercase
                        shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-6
                        hover:scale-105 transition-all duration-300 cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF1F8E]" />
                        </span>
                        Our Work &amp; Case Studies
                    </div>

                    {/* Heading */}
                    <h2 className="relative text-5xl text-slate-900 md:text-7xl font-extrabold tracking-tight leading-[0.9] mb-6">
                        <span className="block text-slate-900">Our work—drawn from</span>
                        <span
                            className="relative inline-block"
                            style={{
                                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            20+ years
                            <span className="absolute left-0 -bottom-2 w-full h-[6px] rounded-full
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                blur-sm opacity-70 animate-pulse" />
                        </span>{" "}
                        of projects
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        Twenty years in business has yielded hundreds of client partnerships,
                        each with their own challenges, each uniquely rewarding.{" "}
                        <span className="text-slate-900 font-semibold">TechnoScore</span>{" "}
                        delivers powerful, scalable, and future-ready digital solutions.
                    </p>

                    {/* Divider */}
                    <div className="relative w-20 h-1.5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto">
                        <div className="absolute inset-0 blur-md opacity-70 bg-gradient-to-r from-pink-400 to-cyan-400" />
                    </div>
                </AnimatedSection>

                {/* ── Filter Bar ── */}
                <AnimatedSection delay={0.2} direction="up">
                    <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                </AnimatedSection>

                {/* ── Project Grid ── */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={`${activeFilter}-${project.title}`} project={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <p className="text-slate-400 font-semibold text-lg">No projects found in this category yet.</p>
                        <button
                            onClick={() => setActiveFilter("All")}
                            className="mt-4 text-purple-500 font-semibold text-sm hover:text-purple-700 transition-colors"
                        >
                            ← View all projects
                        </button>
                    </div>
                )}

                {/* ── Stats Row ── */}
                <AnimatedSection delay={0.6} direction="up" className="mt-4 mb-14">
                    <div className="flex flex-wrap justify-center gap-10">
                        {[
                            { num: "20+", label: "Years Experience" },
                            { num: "500+", label: "Projects Delivered" },
                            { num: "200+", label: "Happy Clients" },
                            { num: "98%", label: "Client Retention" },
                            { num: "40+", label: "Tech Experts" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p
                                    className="text-4xl font-extrabold"
                                    style={{
                                        background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {stat.num}
                                </p>
                                <p className="text-sm font-semibold text-slate-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* ── CTA ── */}
                <AnimatedSection delay={0.7} direction="up" className="text-center">
                    <Link
              href="/case-study" className="group relative px-10 py-4 rounded-2xl text-white font-semibold overflow-hidden
                        bg-gradient-to-r from-pink-500 to-purple-500
                        shadow-lg hover:shadow-purple-500/40 hover:shadow-2xl
                        hover:scale-105 transition-all duration-300">
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: "linear-gradient(135deg, #E879F9 0%, #A855F7 50%, #38BDF8 100%)" }} />
                        <span className="relative z-10">View More Case Studies →</span>
                    </Link>
                </AnimatedSection>

            </div>
        </section>
    );
};

export default Work;
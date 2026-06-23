"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FiInstagram, FiLinkedin, FiTwitter, FiArrowUpRight, FiUsers, FiAward, FiTarget } from 'react-icons/fi';
import { assetImage } from "@/lib/assets";
const riyaArchitect = assetImage("riya_architect.png");
const amanArchitect = assetImage("aman_architect.png");

const team = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Founder & Product Strategist",
    image: riyaArchitect,
    bio: "A visionary digital strategist with over 12 years of experience engineering high-performance web applications. Riya specializes in translating complex startup ideas and enterprise requirements into seamless, high-converting digital solutions.",
    expertise: ["React & Next.js", "Product Architecture", "Enterprise Scalability"],
    accent: "violet",
    stats: [
      { label: "Projects Delivered", value: "250+", icon: <FiTarget /> },
      { label: "Global Clients", value: "120+", icon: <FiAward /> },
      { label: "Years Experience", value: "12Y", icon: <FiUsers /> },
    ],
  },
  {
    id: 2,
    name: "Aman Gupta",
    role: "Head of Engineering",
    image: amanArchitect,
    bio: "An elite software architect who thrives on cross-platform engineering complexity. Aman leads our development division, ensuring every custom web application, mobile app, and API is optimized for ultimate speed, security, and global scale.",
    expertise: ["Full-Stack Dev", "Mobile App Architect", "Cloud Infrastructure"],
    accent: "cyan",
    stats: [
      { label: "Apps & Sites Live", value: "80+", icon: <FiTarget /> },
      { label: "Client Satisfaction", value: "99%", icon: <FiAward /> },
      { label: "System Uptime", value: "100%", icon: <FiUsers /> },
    ],
  },
];

const socials = [
  { icon: <FiLinkedin />, label: "LinkedIn", href: "#", hoverColor: "#0077b5" },
  { icon: <FiInstagram />, label: "Instagram", href: "#", hoverColor: "#e1306c" },
  { icon: <FiTwitter />, label: "Twitter", href: "#", hoverColor: "#1da1f2" },
];

/* Accent tokens — add more members by extending this map */
const accentTokens = {
  violet: {
    role: "text-violet-500",
    dot: "bg-violet-500",
    border: "border-violet-500/40",
    statHoverBorder: "hover:border-violet-400/40",
    statHoverVal: "group-hover:text-violet-500",
    statIcon: "text-violet-500",
    thumbRing: "ring-violet-500",
    thumbShadow: "[box-shadow:0_0_0_3px_rgba(139,92,246,0.2)]",
  },
  cyan: {
    role: "text-cyan-500",
    dot: "bg-cyan-500",
    border: "border-cyan-500/40",
    statHoverBorder: "hover:border-cyan-400/40",
    statHoverVal: "group-hover:text-cyan-500",
    statIcon: "text-cyan-500",
    thumbRing: "ring-cyan-500",
    thumbShadow: "[box-shadow:0_0_0_3px_rgba(6,182,212,0.2)]",
  },
};

const MarketingTeam = () => {
  const [activeMember, setActiveMember] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [displayed, setDisplayed] = useState(0);   // what's actually rendered

  const member = team[displayed];
  const tokens = accentTokens[member.accent];

  const handleSwitch = (idx) => {
    if (idx === activeMember || switching) return;
    setSwitching(true);
    setActiveMember(idx);
    setTimeout(() => {
      setDisplayed(idx);
      setSwitching(false);
    }, 180);
  };

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#FF1F8E] font-bold text-[10px] tracking-[0.3em] uppercase mb-10 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]"></span>
            </span>
            Webstep Core
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.05]">
            Meet the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Innovators
            </span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

          {/* LEFT — Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.14)] bg-slate-900 aspect-[4/5]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 opacity-90 transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

              {/* Arrow badge */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-violet-500/50 group-hover:rotate-45 group-hover:scale-110">
                <FiArrowUpRight size={24} />
              </div>

              {/* Member overlay */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <p className="text-white/50 text-[9px] font-bold uppercase tracking-[0.35em] mb-2">
                  {member.role}
                </p>
                <h4 className="text-white text-2xl font-black tracking-tight leading-tight mb-4">
                  {member.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-[9px] font-bold text-white uppercase tracking-widest"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating social icons */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-20">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 text-sm transition-all duration-300 shadow-lg hover:scale-110 hover:-translate-x-0.5"
                  style={{ "--hover-color": s.hoverColor }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.borderColor = s.hoverColor; }}
                  onMouseLeave={e => { e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = ""; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Details */}
          <div
            className="w-full lg:w-1/2 lg:pt-6"
            style={{ opacity: switching ? 0 : 1, transform: switching ? "translateY(8px)" : "translateY(0)", transition: "opacity 0.18s ease, transform 0.18s ease" }}
          >
            {/* Name + role */}
            <div
              className="mb-8"
              style={{ animation: !switching ? "fadeUp 0.45s cubic-bezier(.22,1,.36,1) forwards" : "none" }}
            >
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-4">
                {member.name}
              </h3>
              <p className={`font-black uppercase tracking-[0.35em] text-[11px] flex items-center gap-3 ${tokens.role}`}>
                <span className={`w-8 h-px ${tokens.dot}`} />
                {member.role}
              </p>
            </div>

            {/* Bio */}
            <p className={`text-slate-500 text-lg leading-relaxed font-medium italic mb-10 border-l-2 pl-5 ${tokens.border}`}>
              &quot;{member.bio}&quot;
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {member.stats.map((s, i) => (
                <div
                  key={i}
                  className={`group p-5 rounded-2xl bg-white border border-slate-100 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md ${tokens.statHoverBorder}`}
                >
                  <div className={`mb-3 text-base ${tokens.statIcon}`}>{s.icon}</div>
                  <p className={`text-2xl font-black text-slate-900 mb-1 transition-colors duration-300 ${tokens.statHoverVal}`}>
                    {s.value}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Member selector */}
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-8 border-t border-slate-100">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 shrink-0">
                Our Team
              </span>

              <div className="flex gap-3 p-2 bg-slate-50 border border-slate-100 rounded-2xl">
                {team.map((m, idx) => {
                  const t = accentTokens[m.accent];
                  const isActive = activeMember === idx;
                  return (
                    <button
                      key={m.id}
                      onClick={() => handleSwitch(idx)}
                      title={m.name}
                      className={`relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${isActive
                          ? `ring-2 ring-offset-2 scale-110 shadow-lg grayscale-0 opacity-100 ring-${m.accent === "violet" ? "violet" : "cyan"}-500 ${t.thumbShadow}`
                          : "opacity-40 grayscale hover:opacity-80 hover:grayscale-0 hover:scale-105"
                        }`}
                    >
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    </button>
                  );
                })}
              </div>

              <div className="h-px flex-grow bg-slate-100 hidden sm:block" />

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-700 transition-colors duration-300 group"
              >
                Full Tech Team
                <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
};

export default MarketingTeam;
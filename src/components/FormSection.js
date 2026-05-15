"use client";
import React from 'react';
import ContactForm from './contactus/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const infoItems = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Global HQ",
    detail: "E-45 Industrial Area Phase-8",
    subDetail: "Mohali, Punjab",
    accent: "violet",
  },
  {
    icon: <FaEnvelope />,
    title: "Contact Us",
    detail: "info@webstepsolutions.com",
    subDetail: "+91 97818 90033",
    accent: "cyan",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    detail: "Mon – Sat: 9:00 AM – 6:00 PM",
    subDetail: "Sun: Closed",
    accent: "amber",
  },
];

const socials = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "#",
    hoverColor: "#0077b5",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "#",
    hoverColor: "#e1306c",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "#",
    hoverColor: "#1da1f2",
  },
];

/* Per-accent Tailwind token sets */
const accentTokens = {
  violet: {
    icon: "text-violet-500",
    iconHoverBg: "group-hover:bg-violet-50 group-hover:border-violet-300",
    titleHover: "group-hover:text-violet-500",
  },
  cyan: {
    icon: "text-cyan-500",
    iconHoverBg: "group-hover:bg-cyan-50 group-hover:border-cyan-300",
    titleHover: "group-hover:text-cyan-500",
  },
  amber: {
    icon: "text-amber-500",
    iconHoverBg: "group-hover:bg-amber-50 group-hover:border-amber-300",
    titleHover: "group-hover:text-amber-500",
  },
};

const FormSection = () => {
  return (
    <section id='initiateInquiry' className="py-20 md:py-24 relative z-10 px-6 overflow-hidden bg-white">

      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-slate-200" />
            <span className="text-[10px] font-black tracking-[0.38em] uppercase text-slate-400">
              Get In Touch
            </span>
            <span className="w-10 h-px bg-slate-200" />
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
            Ready to Bring Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ideas to Life?
            </span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            We&apos;re here to help you navigate the digital landscape. Reach out to discuss your
            project, or just say hello!
          </p>
        </div>

        {/* ── Card ── */}
        <div className="relative p-[1.5px] rounded-[3rem] bg-gradient-to-r from-[#FF1F8E] via-[#A855F7] to-[#38BDF8] hover:shadow-[0_50px_100px_-20px_rgba(255,31,142,0.25)] transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row rounded-[3rem] overflow-hidden bg-white">

            {/* LEFT — Info */}
            <div className="w-full lg:w-[42%] p-12 md:p-16 flex flex-col justify-center gap-10 bg-white border-b lg:border-b-0 lg:border-r border-slate-100">

              {infoItems.map((item, i) => {
                const t = accentTokens[item.accent];
                return (
                  <div key={i} className="flex gap-5 items-start group cursor-default">
                    <div
                      className={`w-13 h-13 min-w-[52px] min-h-[52px] rounded-2xl border border-slate-100 bg-white flex items-center justify-center text-lg flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 ${t.icon} ${t.iconHoverBg}`}
                    >
                      {item.icon}
                    </div>
                    <div className="pt-0.5">
                      <h4 className={`font-black text-slate-900 text-xl mb-1 transition-colors duration-200 ${t.titleHover}`}>
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-base font-medium leading-snug">{item.detail}</p>
                      <p className="text-slate-400 text-sm font-medium leading-snug">{item.subDetail}</p>
                    </div>
                  </div>
                );
              })}

              {/* Socials */}
              <div className="pt-8 border-t border-slate-100">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-5">
                  Social Connectivity
                </p>
                <div className="flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl border border-slate-100 bg-white flex items-center justify-center text-slate-400 text-sm transition-all duration-300 shadow-sm hover:scale-110 hover:-translate-y-0.5"
                      onMouseEnter={e => {
                        e.currentTarget.style.color = s.hoverColor;
                        e.currentTarget.style.borderColor = s.hoverColor;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.borderColor = "";
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="w-full lg:w-[58%] p-6 md:p-16 bg-gradient-to-br from-white to-slate-50 flex flex-col">
              <div className="mb-10">
                <h3 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                  Initiate Inquiry
                </h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  Complete the form below and our specialists will engage with you shortly.
                </p>
              </div>

              <div className="flex-grow">
                <ContactForm light={true} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
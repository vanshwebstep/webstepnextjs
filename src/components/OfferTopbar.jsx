"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
  FaTwitter, FaEnvelope,
} from "react-icons/fa";

const offers = [
  { badge: "Sale",  badgeBg: "#f43f8e",  text: <>Get <strong style={{color:"#f9a8d4"}}>20% OFF</strong> on all Web Development packages — this week only</> },
  { badge: "Free",  badgeBg: "#10b981",  text: <><strong style={{color:"#6ee7b7"}}>Free UI/UX Consultation</strong> with every Full Stack project</> },
  { badge: "Hot",   badgeBg: "#f97316",  text: <>WordPress website starting at <strong style={{color:"#fdba74"}}>₹9,999</strong> only — limited slots!</> },
  { badge: "New",   badgeBg: "#0ea5e9",  text: <>Launch with our <strong style={{color:"#7dd3fc"}}>Startup Bundle</strong> — website + logo + SEO</> },
  { badge: "Sale",  badgeBg: "#a855f7",  text: <><strong style={{color:"#d8b4fe"}}>30% OFF</strong> Shopify store setup — offer ending soon</> },
  { badge: "Free",  badgeBg: "#10b981",  text: <><strong style={{color:"#6ee7b7"}}>3 months free support</strong> with every custom web app</> },
  { badge: "New",   badgeBg: "#0ea5e9",  text: <>AI Chatbot integration starting at <strong style={{color:"#7dd3fc"}}>₹14,999</strong> — book now</> },
];

const socialLinks = [
  { icon: <FaFacebookF size={11} />, href: "#", hoverColor: "#1877f2", label: "Facebook" },
  { icon: <FaInstagram size={11} />, href: "#", hoverColor: "#e1306c", label: "Instagram" },
  { icon: <FaLinkedinIn size={11} />, href: "#", hoverColor: "#0077b5", label: "LinkedIn" },
  { icon: <FaTwitter size={11} />,   href: "#", hoverColor: "#1da1f2", label: "Twitter" },
];

const SEP = <span style={{ color: "#4b5563", fontSize: "9px", padding: "0 4px" }}>✦</span>;

export default function OfferTopbar() {
  const doubled = [...offers, ...offers];

  return (
    <div
      className="fixed top-0 left-0 w-full z-[10001]"
      style={{
       background: "linear-gradient(160deg, #110217 0%, #200a2c 30%, #1e0c3a 60%, #1c0a1f 100%)",
        boxShadow: "0 1px 12px rgba(0,0,0,0.4)",
        padding: "5px 0",
      }}

    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", height: "40px", gap: "14px" }}>

        {/* ── LEFT: Email + Socials ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: 0 }}>

          {/* Email */}
          <a
            href="mailto:support@webstepsolutions.com"
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              fontSize: "11.5px", fontWeight: 600, color: "#f472b6",
              textDecoration: "none", whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#f9a8d4"}
            onMouseLeave={e => e.currentTarget.style.color = "#f472b6"}
          >
            <FaEnvelope size={11} color="#f472b6" />
            support@webstepsolutions.com
          </a>

          {/* Divider */}
          <div style={{ width: "1px", height: "16px", background: "#2d2d35" }} />

          {/* Social Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} aria-label={s.label}
                style={{
                  width: "23px", height: "23px", borderRadius: "6px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#6b7280", background: "#1c1c24",
                  border: "1px solid #2d2d35",
                  transition: "all 0.2s", textDecoration: "none",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.hoverColor;
                  e.currentTarget.style.borderColor = s.hoverColor + "60";
                  e.currentTarget.style.background = s.hoverColor + "18";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#6b7280";
                  e.currentTarget.style.borderColor = "#2d2d35";
                  e.currentTarget.style.background = "#1c1c24";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "16px", background: "#2d2d35" }} />

          {/* Live dot */}
          {/* <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ position: "relative", display: "inline-flex", width: "7px", height: "7px" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#f43f8e", opacity: 0.5, animation: "ws-ping 1.2s cubic-bezier(0,0,0.2,1) infinite" }} />
              <span style={{ position: "relative", width: "7px", height: "7px", borderRadius: "50%", background: "#f43f8e", display: "inline-block" }} />
            </span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#f43f8e", letterSpacing: "0.1em", textTransform: "uppercase" }}>Live Offers</span>
          </div> */}
        </div>

        {/* ── CENTER: Ticker ── */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: "40px", background: "linear-gradient(to right, #111116, transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "40px", background: "linear-gradient(to left, #111116, transparent)", zIndex: 10, pointerEvents: "none" }} />

          {/* <div className="ws-ticker-wrap">
            {doubled.map((o, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "0 20px", whiteSpace: "nowrap" }}>
                <span style={{
                  background: o.badgeBg, color: "#fff",
                  fontSize: "8px", fontWeight: 800, letterSpacing: "0.12em",
                  textTransform: "uppercase", padding: "2px 7px", borderRadius: "4px",
                }}>
                  {o.badge}
                </span>
                <span style={{ fontSize: "11.5px", color: "#d1d5db", fontWeight: 500 }}>{o.text}</span>
                {SEP}
              </span>
            ))}
          </div> */}
        </div>

        {/* ── RIGHT: CTA ── */}
        <div style={{ flexShrink: 0 }}>
          <Link href="/customize-package"
            style={{
              display: "inline-flex", alignItems: "center",
              background: "linear-gradient(135deg, #f43f8e, #a855f7)",
              color: "#fff", fontSize: "10px", fontWeight: 800,
              letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "6px 16px", borderRadius: "7px",
              textDecoration: "none", whiteSpace: "nowrap",
              boxShadow: "0 2px 16px rgba(244,63,142,0.4)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 4px 22px rgba(244,63,142,0.55)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(244,63,142,0.4)"; }}
          >
            Grab Deal →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes ws-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ws-ticker-wrap {
          display: flex;
          width: max-content;
          animation: ws-ticker 38s linear infinite;
        }
        .ws-ticker-wrap:hover { animation-play-state: paused; }
        @keyframes ws-ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
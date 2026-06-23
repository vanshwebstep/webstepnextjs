"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import Menu from "./Menu";
import { assetImage } from "@/lib/assets";
const logo = assetImage("logo.png");

const AIChatWidget = dynamic(() => import("./AIChat/AIChatWidget"), {
  ssr: false,
  loading: () => null,
});

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [chatReady, setChatReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadChat = () => setChatReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadChat, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(loadChat, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <header
        className={`fixed top-[3rem] left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-slate-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
            : "bg-white/80 backdrop-blur-2xl py-3 border-b border-slate-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between gap-10">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={logo}
              alt="WebStep Solutions"
              width={150}
              className="transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <Menu scrolled={scrolled} />
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">

            {/* Phone */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:bg-[#FF1F8E] group-hover:border-[#FF1F8E] transition-all duration-300">
                <FiPhone size={18} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-500">
                  Expert Support
                </span>
                <a
                  href="tel:7973938927"
                  className="text-[14px] font-bold text-slate-900 hover:text-[#FF1F8E] transition-colors"
                >
                  79739-38927
                </a>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/customize-package"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 text-white text-[11px] font-bold tracking-[0.18em] uppercase overflow-hidden group transition-all duration-300 hover:shadow-[0_12px_30px_rgba(255,31,142,0.25)]"
            >
              <span className="absolute inset-0 bg-[#FF1F8E] opacity-0 group-hover:opacity-100 transition duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] border border-slate-200 rounded-xl bg-white shadow-sm"
          >
            <span className={`block w-5 h-[2px] bg-slate-900 transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[2px] bg-slate-900 transition-all ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block w-5 h-[2px] bg-slate-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl">
            <div className="px-6 py-10 flex flex-col gap-10">
              <Menu mobile={true} closeMenu={() => setMenuOpen(false)} />
              <div className="space-y-5">
                <a
                  href="tel:9781890033"
                  className="flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 block mb-1">
                      Expert Support
                    </span>
                    <span className="text-lg font-bold text-slate-900">
                      79739-38927
                    </span>
                  </div>
                  <FiPhone size={22} className="text-[#FF1F8E]" />
                </a>
                <button className="w-full py-4 rounded-2xl bg-[#FF1F8E] text-white font-bold text-[11px] tracking-[0.25em] uppercase shadow-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {chatReady && <AIChatWidget />}
    </>
  );
};

export default Header;




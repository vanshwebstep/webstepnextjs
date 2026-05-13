"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaPaperPlane,
    FaChevronUp,
} from 'react-icons/fa';
import logo from "@/components/img/logo.png";

const socialLinks = [
    { icon: <FaFacebookF size={15} />, href: "#", label: "Facebook",  hoverColor: "#1877f2" },
    { icon: <FaInstagram size={15} />, href: "#", label: "Instagram", hoverColor: "#e1306c" },
    { icon: <FaLinkedinIn size={15} />, href: "#", label: "LinkedIn", hoverColor: "#0077b5" },
    { icon: <FaTwitter size={15} />,   href: "#", label: "Twitter",   hoverColor: "#1da1f2" },
    { icon: <FaYoutube size={15} />,   href: "#", label: "YouTube",   hoverColor: "#ff0000" },
];

const quickLinks = [
    { name: "Home",     href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/works" },
    { name: "About Us", href: "/about" },
    { name: "Blog",     href: "/blog" },
    { name: "Contact",  href: "/contactus" },
];

const services = [
    { name: "Web Development",   href: "/fullstack" },
    { name: "Mobile Apps",       href: "/mobileApp" },
    { name: "UI/UX Design",      href: "/uiux" },
    { name: "Digital Marketing", href: "/marketing" },
    { name: "SEO Optimization",  href: "/seo" },
];

/* Shared column heading */
const ColTitle = ({ children }) => (
    <h4 className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-900 mb-5 flex items-center gap-2">
        <span
            className="w-5 h-0.5 rounded-full flex-shrink-0"
            style={{ background: "linear-gradient(90deg,#06b6d4,#8b5cf6)" }}
        />
        {children}
    </h4>
);

/* Nav / service link with animated arrow */
const NavLink = ({ href, children }) => (
    <li>
        <Link
            href={href}
            className="group inline-flex items-center gap-0 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#FF1F8E] transition-colors duration-200"
        >
            {children}
            <span className="ml-0 opacity-0 group-hover:opacity-100 group-hover:ml-1.5 transition-all duration-200 text-[10px]">
                →
            </span>
        </Link>
    </li>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-slate-100">

            {/* Ambient blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-800/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex w-fit items-center">
                            <Image src={logo} alt="Webstep Solutions Logo" width={170} />
                        </Link>

                        <p className="text-slate-500 text-base leading-relaxed font-medium">
                            Empowering brands with cutting-edge digital solutions. We transform complex
                            ideas into seamless digital experiences.
                        </p>

                        <div className="flex items-center gap-2">
                            {socialLinks.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 shadow-sm"
                                    onMouseEnter={e => {
                                        e.currentTarget.style.color = s.hoverColor;
                                        e.currentTarget.style.borderColor = s.hoverColor;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.color = "#6b6b6b";
                                        e.currentTarget.style.borderColor = "#6b6b6b";
                                    }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <ColTitle>Navigation</ColTitle>
                        <ul className="space-y-3">
                            {quickLinks.map((l, i) => (
                                <NavLink key={i} href={l.href}>{l.name}</NavLink>
                            ))}
                        </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                        <ColTitle>Expertise</ColTitle>
                        <ul className="space-y-3">
                            {services.map((s, i) => (
                                <NavLink key={i} href={s.href}>{s.name}</NavLink>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-5">
                        <ColTitle>Newsletter</ColTitle>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">
                            Subscribe to get the latest digital trends delivered to your inbox.
                        </p>

                        {/* Input */}
                        <div className="relative flex items-center">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-slate-50 border border-slate-100 rounded-full py-3.5 pl-5 pr-14 text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none focus:border-pink-800 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] transition-all duration-300"
                            />
                            <button
                                aria-label="Subscribe"
                                className="absolute right-1.5 w-9 h-9 rounded-full flex items-center justify-center text-white text-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_16px_rgba(139,92,246,0.3)]"
                                style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
                            >
                                <FaPaperPlane size={13} />
                            </button>
                        </div>

                        {/* CTA card */}
                        <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.08)] transition-all duration-300 group cursor-default">
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center text-violet-500 flex-shrink-0 text-base"
                                style={{ background: "linear-gradient(135deg,rgba(6,182,212,0.1),rgba(139,92,246,0.1))", border: "0.5px solid rgba(139,92,246,0.2)" }}
                            >
                                <FaPhoneAlt size={16} />
                            </div>
                            <div>
                                <p className="text-[9px] uppercase tracking-widest text-slate-500 font-black">Talk to us</p>
                                <a
                                    href="tel:9781890033"
                                    className="text-slate-900 font-black text-sm hover:text-violet-500 transition-colors"
                                >
                                    +91 97818-90033
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                        © {currentYear}{" "}
                        <span className="text-slate-900">Webstep Solutions</span>.{" "}
                        All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Link href="/privacy" className="hover:text-slate-700 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-slate-700 transition-colors">
                            Terms of Service
                        </Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-1.5 group hover:text-violet-500 transition-colors"
                        >
                            Back to top
                            <FaChevronUp
                                size={11}
                                className="group-hover:-translate-y-1 transition-transform duration-300"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
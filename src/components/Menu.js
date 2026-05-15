"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
import {
    FiCode, FiSmartphone, FiTrendingUp, FiSearch,
    FiMail, FiPenTool, FiShoppingCart, FiMonitor,
    FiBriefcase, FiBookOpen, FiLayers,
    FiLayout, FiFilm
} from 'react-icons/fi';

// ─── Submenu Data ─────────────────────────────────────────────────────────────

const submenus = {
    services: {
        featured: { label: "New", text: "AI-Powered Websites" },
        groups: [
            {
                heading: "Development",
                items: [
                    { name: "Web Development",  href: "/services/web-development",  icon: FiCode,         desc: "Custom websites & apps"  },
                    { name: "App Development",  href: "/services/app-development",  icon: FiSmartphone,   desc: "iOS & Android apps"       },
                    { name: "E-Commerce",       href: "/services/ecommerce",        icon: FiShoppingCart, desc: "Shopify, WooCommerce"     },
                    { name: "UI/UX Design",     href: "/services/ui-ux",            icon: FiLayout,       desc: "User-first interfaces"    },
                ],
            },
            {
                heading: "Marketing",
                items: [
                    { name: "SEO Services",    href: "/services/seo",             icon: FiSearch,     desc: "Rank higher, grow faster" },
                    { name: "Social Media",    href: "/services/social-media",    icon: FiTrendingUp, desc: "Content & paid ads"        },
                    { name: "Email Marketing", href: "/services/email-marketing", icon: FiMail,       desc: "Campaigns that convert"    },
                    { name: "Brand Design",    href: "/services/branding",        icon: FiPenTool,    desc: "Logos & brand identity"    },
                ],
            },
        ],
    },

    portfolio: {
        featured: { label: "Latest", text: "Work & Real Results" },
        groups: [
            {
                heading: "Our Work",
                items: [
                    { name: "Our Work",   href: "/works",            icon: FiLayers,   desc: "Full portfolio"      },
                ],
            },
            {
                heading: "Case Studies",
                items: [
                    { name: "Case Studies",  href: "/case-study",   icon: FiShoppingCart, desc: "Case Studies"},
                ],
            },
        ],
    },
};

// ─── Mega Menu Panel ───────────────────────────────────────────────────────────

const MegaPanel = ({ data, mobile, closeMenu }) => (
    <div className={mobile ? "mt-2" : ""}>
        {data.featured && (
            <div className={`flex items-center gap-2 mb-4 ${mobile ? "px-1" : ""}`}>
                <span className="bg-[#FF1F8E] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    {data.featured.label}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">{data.featured.text}</span>
            </div>
        )}
        <div className={`flex ${mobile ? "flex-col gap-4" : "gap-8"}`}>
            {data.groups.map((group, gi) => (
                <div key={gi} className={mobile ? "" : "min-w-[180px]"}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-3 px-1">
                        {group.heading}
                    </p>
                    <ul className="flex flex-col gap-1">
                        {group.items.map((item, ii) => (
                            <li key={ii}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group/item transition-all duration-200"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover/item:bg-[#FF1F8E]/10 group-hover/item:text-[#FF1F8E] transition-all duration-200 shrink-0">
                                        <item.icon size={14} />
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[12px] font-semibold text-slate-800 group-hover/item:text-[#FF1F8E] transition-colors">
                                            {item.name}
                                        </span>
                                        {!mobile && item.desc && (
                                            <span className="text-[10px] text-slate-400">{item.desc}</span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

// ─── Main Menu ─────────────────────────────────────────────────────────────────

const Menu = ({ mobile = false, closeMenu, scrolled = false }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const navLinks = [
        { name: "Home",      href: "/"          },
        { name: "Services",  href: "#",         submenuKey: "services"  },
        { name: "Portfolio", href: "/works",    submenuKey: "portfolio" },
        { name: "About",     href: "/about"     },
        { name: "Blog",      href: "/blog"      },
        { name: "Packages",  href: "/packages"  },
        { name: "Contact",   href: "/contactus" },
    ];

    const linkClasses = mobile
        ? "flex items-center justify-between w-full py-4 text-slate-700 hover:text-[#FF1F8E] font-semibold text-[14px] tracking-wide uppercase border-b border-slate-100 transition-all"
        : `relative px-4 py-2 ${scrolled ? "text-slate-900" : "text-slate-600"} hover:text-[#FF1F8E] font-semibold text-[12px] tracking-[0.18em] uppercase transition-all duration-300`;

    return (
        <nav className={`w-full ${mobile ? "block" : "flex items-center justify-center font-roboto"}`}>
            <ul className={`${mobile ? "flex flex-col" : "flex items-center gap-1 whitespace-nowrap"}`}>
                {navLinks.map((link, idx) => (
                    <li key={idx} className={mobile ? "w-full" : "relative group"}>

                        {link.submenuKey ? (
                            <div
                                className="relative mt-[4px]"
                                onMouseEnter={!mobile ? () => setActiveSubmenu(link.submenuKey) : undefined}
                                onMouseLeave={!mobile ? () => setActiveSubmenu(null) : undefined}
                            >
                                <button
                                    onClick={mobile ? () => setActiveSubmenu(activeSubmenu === link.submenuKey ? null : link.submenuKey) : undefined}
                                    className={`${linkClasses} flex items-center gap-1.5 whitespace-nowrap`}
                                >
                                    {link.name}
                                    <FaAngleDown
                                        className={`text-[10px] shrink-0 transition-all duration-300 ${activeSubmenu === link.submenuKey ? "rotate-180 text-[#FF1F8E]" : "opacity-50"}`}
                                    />
                                    {!mobile && (
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF1F8E] transition-all duration-300 group-hover:w-full" />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {activeSubmenu === link.submenuKey && (
                                        <motion.div
                                            initial={{ opacity: 0, y: mobile ? 0 : 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: mobile ? 0 : 16 }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                            className={
                                                mobile
                                                    ? "bg-slate-50 rounded-xl mt-1 p-4 overflow-hidden"
                                                    : "absolute top-full left-0 mt-5 bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.10)] border border-slate-100/80 z-[100] p-5"
                                            }
                                        >
                                            <MegaPanel
                                                data={submenus[link.submenuKey]}
                                                mobile={mobile}
                                                closeMenu={() => {
                                                    setActiveSubmenu(null);
                                                    if (mobile && closeMenu) closeMenu();
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        ) : (
                            <Link
                                href={link.href}
                                className={linkClasses}
                                onClick={mobile ? closeMenu : undefined}
                            >
                                {link.name}
                                {!mobile && (
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF1F8E] transition-all duration-300 group-hover:w-full" />
                                )}
                            </Link>
                        )}

                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
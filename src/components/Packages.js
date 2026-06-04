"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "reactjs-popup/dist/index.css";
import Modal from "./Popup";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { fetchContent } from "@/lib/contentApi";

const FALLBACK_TABS = [
  "website development",
  "digital marketing",
  "mobile app development",
];

const FALLBACK_PACKAGES = [
  {
    title: "Website Starter",
    category: "website development",
    des: "A clean launch package for small business websites.",
    symbol: "$",
    price: 199,
    pricedes: "/project",
    events: [
      { title: "Up to 5 Pages" },
      { title: "Responsive Design" },
      { title: "Basic SEO Setup" },
      { title: "Contact Form" },
    ],
    btn: "Choose Plan",
    isPopular: false,
  },
  {
    title: "Website Pro",
    category: "website development",
    des: "Custom website package with premium UI and analytics.",
    symbol: "$",
    price: 499,
    pricedes: "/project",
    events: [
      { title: "Up to 15 Pages" },
      { title: "Custom UI/UX Design" },
      { title: "Advanced SEO & Analytics" },
      { title: "Speed Optimization" },
    ],
    btn: "Choose Plan",
    isPopular: true,
  },
  {
    title: "Marketing Basic",
    category: "digital marketing",
    des: "Monthly growth setup for search and social visibility.",
    symbol: "$",
    price: 149,
    pricedes: "/mo",
    events: [
      { title: "Keyword Research" },
      { title: "On-page SEO" },
      { title: "4 Social Posts" },
      { title: "Monthly Report" },
    ],
    btn: "Choose Plan",
    isPopular: false,
  },
  {
    title: "Marketing Growth",
    category: "digital marketing",
    des: "Performance-focused marketing for scaling businesses.",
    symbol: "$",
    price: 399,
    pricedes: "/mo",
    events: [
      { title: "Advanced SEO" },
      { title: "Paid Ads Setup" },
      { title: "Content Calendar" },
      { title: "Conversion Tracking" },
    ],
    btn: "Choose Plan",
    isPopular: true,
  },
  {
    title: "App MVP",
    category: "mobile app development",
    des: "Start with a focused mobile app MVP.",
    symbol: "$",
    price: 999,
    pricedes: "/project",
    events: [
      { title: "Core App Screens" },
      { title: "API Integration" },
      { title: "Basic Admin Panel" },
      { title: "Testing Support" },
    ],
    btn: "Choose Plan",
    isPopular: false,
  },
  {
    title: "App Scale",
    category: "mobile app development",
    des: "Full mobile app build with richer product workflows.",
    symbol: "$",
    price: 2499,
    pricedes: "/project",
    events: [
      { title: "Custom UI/UX" },
      { title: "Advanced Features" },
      { title: "Push Notifications" },
      { title: "Launch Support" },
    ],
    btn: "Choose Plan",
    isPopular: true,
  },
];

const normalizePackage = (pkg, index) => ({
  title: pkg.title || `Package ${index + 1}`,
  category: pkg.category || FALLBACK_TABS[0],
  des: pkg.des || pkg.description || "A flexible package for your business needs.",
  symbol: pkg.symbol || "$",
  price: pkg.price ?? 0,
  pricedes: pkg.pricedes || pkg.priceDes || "/project",
  events: Array.isArray(pkg.events)
    ? pkg.events
    : Array.isArray(pkg.features)
      ? pkg.features.map((title) => ({ title }))
      : [],
  btn: pkg.btn || "Choose Plan",
  isPopular: Boolean(pkg.isPopular || pkg.popular),
});

const Packages = () => {
  const [activeTab, setActiveTab] = useState(FALLBACK_TABS[0]);
  const [tabs, setTabs] = useState(FALLBACK_TABS);
  const [packages, setPackages] = useState(FALLBACK_PACKAGES);

  useEffect(() => {
    let mounted = true;

    fetchContent("packages", {
      tabs: FALLBACK_TABS,
      packages: FALLBACK_PACKAGES,
    }).then((data) => {
      if (!mounted) return;

      const nextTabs = Array.isArray(data?.tabs) && data.tabs.length
        ? data.tabs
        : FALLBACK_TABS;
      const nextPackages = Array.isArray(data?.packages) && data.packages.length
        ? data.packages.map(normalizePackage)
        : FALLBACK_PACKAGES;

      setTabs(nextTabs);
      setPackages(nextPackages);
      setActiveTab((current) => (nextTabs.includes(current) ? current : nextTabs[0]));
    });

    return () => {
      mounted = false;
    };
  }, []);

  const cards = useMemo(
    () => packages.filter((pkg) => pkg.category === activeTab),
    [activeTab, packages]
  );

  return (
    <section className="py-24 min-h-screen px-4 md:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mt-12 mb-20">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            style={{
              background: "linear-gradient(135deg, #E879F9 0%, #E879F9 40%, #38BDF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Packages
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white shadow-lg"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {cards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {cards.map((pkg, index) => (
              <motion.div
                key={`${pkg.category}-${pkg.title}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl p-8 flex flex-col backdrop-blur-xl ${
                  pkg.isPopular
                    ? "bg-white border-2 border-pink-500 shadow-[0_20px_60px_rgba(255,31,142,0.2)]"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white px-5 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    <FaStar className="text-yellow-300" /> Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-900">{pkg.title}</h2>
                  <p className="text-slate-500 text-sm mt-2">{pkg.des}</p>
                </div>

                <div className="mb-8 border-b border-slate-100 pb-6">
                  <div className="flex items-end gap-2">
                    <span className="text-xl text-slate-400">{pkg.symbol}</span>
                    <span className="text-6xl font-extrabold text-slate-900">{pkg.price}</span>
                    <span className="text-slate-400">{pkg.pricedes}</span>
                  </div>
                </div>

                <div className="flex-1 mb-8">
                  <ul className="space-y-4">
                    {pkg.events.map((event, idx) => (
                      <li key={`${pkg.title}-${idx}`} className="flex items-start gap-3">
                        <FaCheckCircle className="text-pink-600 mt-1 shrink-0" />
                        <span className="text-slate-600 text-sm">{event.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <Modal />
                  <Link
                    href="/customize-package"
                    className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] rounded-full text-white font-bold tracking-wide uppercase overflow-hidden shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] transition-all duration-300"
                  >
                    {pkg.btn}
                    <FaCheckCircle className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 font-semibold">No packages found for this category yet.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/customize-package">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-12 py-5 bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] text-white rounded-full font-bold tracking-wide uppercase shadow-lg hover:shadow-xl transition-all"
            >
              Create Custom Package
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Packages;

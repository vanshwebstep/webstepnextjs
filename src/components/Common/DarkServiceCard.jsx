"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const DarkServiceCard = ({
  icon,
  title,
  description,
  features,
  id,
  gradient = "from-[#FF1F8E] to-[#FF1F8E]/70",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-[#FF1F8E]/40 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,31,142,0.15)]"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FF1F8E]/10 to-transparent" />

      {/* number */}
      {id && (
        <span className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-[#FF1F8E]/20 transition">
          {id}
        </span>
      )}

      {/* icon */}
      <div
        className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xl mb-8 shadow-[0_0_25px_rgba(255,31,142,0.25)]`}
      >
        {icon}
      </div>

      {/* title */}
      <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-[#FF1F8E] transition">
        {title}
      </h3>

      {/* description */}
      <p className="relative z-10 text-slate-400 mb-8 leading-relaxed text-[15px]">
        {description}
      </p>

      {/* optional features */}
      {features && (
        <div className="relative z-10 space-y-2 mb-8">
          {features.map((f, i) => (
            <div key={i} className="text-slate-500 text-sm">
              • {f}
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <button className="relative z-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-[#FF1F8E] transition">
        Learn More <FiArrowRight />
      </button>
    </motion.div>
  );
};

export default DarkServiceCard;
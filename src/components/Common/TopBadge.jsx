"use client";
import React from "react";
import { motion } from "framer-motion";

const TopBadge = ({
  text = "Workflow Excellence",
  delay = 0,
  duration = 0.6
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className="flex items-center justify-center gap-4 mb-6"
    >
      {/* Left Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="h-[2px] bg-gradient-to-r from-transparent via-[#FF1F8E] to-[#FF1F8E]"
      />

      {/* Text with glow */}
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        className="
          text-[11px] font-bold tracking-[0.35em] uppercase
          text-[#FF1F8E]
          relative
        "
      >
        {text}

        {/* Glow effect */}
        <span className="absolute inset-0 blur-[6px] opacity-40 text-[#FF1F8E]">
          {text}
        </span>
      </motion.span>

      {/* Right Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="h-[2px] bg-gradient-to-l from-transparent via-[#FF1F8E] to-[#FF1F8E]"
      />
    </motion.div>
  );
};

export default TopBadge;
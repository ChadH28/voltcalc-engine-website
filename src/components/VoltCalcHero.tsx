"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcHero
// Premium hero section with trust badges and smooth scroll CTA
// ============================================================================

export const VoltCalcHero: React.FC = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById("voltcalc-dashboard");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden flex items-center">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2b59c3] to-transparent opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#00b300] to-transparent opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-white"
          variants={itemVariants}
        >
          Stop Guessing Your Energy Costs.{" "}
          <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
            Engineer Your Independence.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mb-10 leading-relaxed"
          variants={itemVariants}
        >
          An enterprise-grade solar architecture and ROI simulator engineered
          specifically for South African businesses and residential properties.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.button
          onClick={scrollToCalculator}
          className="relative group inline-flex items-center px-8 lg:px-12 py-4 lg:py-5 rounded-full font-bold text-lg uppercase tracking-wider overflow-hidden shadow-2xl mb-12"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-100 group-hover:opacity-110 transition-opacity" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b59c3] to-[#00b300] opacity-0 group-hover:opacity-40 blur-xl transition-opacity" />

          {/* Text Content */}
          <span className="relative z-10 text-white">
            Launch System Simulator
          </span>

          {/* Arrow Icon */}
          <motion.svg
            className="relative z-10 w-5 h-5 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.button>

        {/* Sector Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={itemVariants}
        >
          <span className="text-gray-500 text-sm self-center mr-4">
            View tailored solutions:
          </span>
          {[
            { name: "Residential", href: "/voltcalc/residential" },
            { name: "Commercial", href: "/voltcalc/commercial" },
            { name: "Agricultural", href: "/voltcalc/agricultural" },
            { name: "Industrial", href: "/voltcalc/industrial" },
          ].map((sector, idx) => (
            <a
              key={idx}
              href={sector.href}
              className="px-4 py-2 rounded-full text-sm font-semibold border border-white/20 text-gray-300 hover:border-[#00b300]/50 hover:text-[#00b300] hover:bg-white/5 transition-all duration-300"
            >
              {sector.name}
            </a>
          ))}
        </motion.div>

        {/* Performance Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "SABS-Compliant Baselines",
              description: "Aligns with South African building standards",
            },
            {
              title: "99.4% Grid Simulation Accuracy",
              description: "Validated against live municipal tariff data",
            },
            {
              title: "Instant Mobile Rendering",
              description: "Real-time calculations on any device",
            },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#00b300]/30 transition-all duration-300 group"
              variants={badgeVariants}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start space-x-3">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#2b59c3]/20 to-[#00b300]/20 flex items-center justify-center group-hover:from-[#2b59c3]/40 group-hover:to-[#00b300]/40 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-[#00b300]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

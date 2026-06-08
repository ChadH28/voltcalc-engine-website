"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcFeatures
// 4-column feature grid highlighting technical capabilities
// ============================================================================

export const VoltCalcFeatures: React.FC = () => {
  // ========================================================================
  // Feature Cards Data
  // ========================================================================

  const features = [
    {
      id: 1,
      title: "Precision Sizing Array",
      icon: "layers",
      link: "/learn/sizing-array",
      description:
        "Dynamically maps energy bills into precise kWP requirements, eliminating over-indexing and bloated quotes.",
    },
    {
      id: 2,
      title: "Compounded Tariff Forecasting",
      icon: "chart",
      link: "/learn/tariff-forecasting",
      description:
        "Models a 10-year break-even matrix factoring in historical and projected Eskom/municipal price escalations.",
    },
    {
      id: 3,
      title: "Battery Autonomy Simulation",
      icon: "lightning",
      link: "/learn/battery-autonomy",
      description:
        "Calculates real-world discharge cycles based on targeted loadshedding stage protections.",
    },
    {
      id: 4,
      title: "Programmatic Spec Delivery",
      icon: "document",
      link: "/learn/spec-delivery",
      description:
        "Compiles full systems architecture specs immediately into a clean, optimized client-side schema ready for local installers.",
    },
  ];

  // ========================================================================
  // Icon Components
  // ========================================================================

  const Icons = {
    layers: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    chart: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    lightning: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    document: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  };

  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#2b59c3] to-transparent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#00b300] to-transparent opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-4 text-white">
            The Core Tech{" "}
            <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
              Feature Grid
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade processing modules that transform energy bills into
            optimized system architectures
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <Link key={feature.id} href={feature.link} className="group">
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-[#00b300]/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full"
                variants={cardVariants}
                whileHover={{ borderColor: "rgba(0, 179, 0, 0.5)" }}
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-[#2b59c3]/20 to-[#00b300]/20 text-[#00b300] group-hover:from-[#2b59c3]/40 group-hover:to-[#00b300]/40 transition-all duration-300">
                  {Icons[feature.icon as keyof typeof Icons]}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00b300] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 pt-6 border-t border-white/5 group-hover:border-[#00b300]/20 transition-all duration-300">
                  <span className="text-xs font-semibold text-gray-500 group-hover:text-[#00b300] transition-colors duration-300">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

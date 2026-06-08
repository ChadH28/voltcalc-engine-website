"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcAgricultural
// Industrial-grade solar solution for Western Cape estates and farms
// ============================================================================

export const VoltCalcAgricultural: React.FC = () => {
  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <div className="bg-gradient-to-br from-[#0d0e0f] via-[#0a0b0c] to-[#0d0e0f] text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[#7029a3] to-transparent opacity-8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-[#00b300] to-transparent opacity-8 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 min-h-screen flex items-center py-20 lg:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Protect Your Harvest. Decentralize Your{" "}
              <span className="bg-gradient-to-r from-[#7029a3] to-[#00b300] bg-clip-text text-transparent">
                Estate's Power Infrastructure
              </span>
              .
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cold-chain protection, irrigation autonomy, and continuous
              production cycles for Stellenbosch wine estates, commercial farms,
              and agricultural logistics hubs.
            </p>
          </motion.div>

          {/* Industry Pain Point */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-[#7029a3]/30 rounded-2xl p-8 lg:p-12 mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Agricultural-Grade Reliability
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-bold text-[#7029a3]">
                  Cold-chain breakdown prevention:
                </span>{" "}
                A single grid outage costs a wine estate or cold-storage
                facility thousands in spoilage. Multi-day battery redundancy
                keeps temperature-sensitive loads running regardless of rural
                supply volatility.
              </p>
              <p>
                <span className="font-bold text-[#00b300]">
                  Pumping system protection:
                </span>{" "}
                Continuous irrigation cycles powered by daylight solar harvest
                eliminate dependency on erratic rural supply lines and
                peak-tariff surges.
              </p>
            </div>
          </motion.div>

          {/* Utility Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Heavy Inverter Cluster Architecture",
                description:
                  "Calculates heavy-duty, high-kilowatt multi-inverter configurations capable of absorbing massive pump motor startup surges.",
                icon: "⚡",
              },
              {
                title: "Solar Tracking Integration",
                description:
                  "Models high-yield ground-mount arrays designed for maximum daylight exposure across vast acreage with intelligent tracking.",
                icon: "☀️",
              },
              {
                title: "Storage Redundancy Buffers",
                description:
                  "Calculates massive multi-day battery safety reserves to secure automated temperature-sensitive cold storage integrity.",
                icon: "🧊",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-[#7029a3]/30 hover:border-[#00b300]/50 hover:shadow-xl hover:shadow-[#00b300]/15 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00b300] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <a
              href="/#voltcalc-dashboard"
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#7029a3] to-[#00b300] text-white hover:shadow-2xl hover:shadow-[#7029a3]/30 transition-all duration-300"
            >
              Design Your Agricultural System
              <svg
                className="w-5 h-5 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

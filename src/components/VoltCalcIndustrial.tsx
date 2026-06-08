"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcIndustrial
// Enterprise-scale solar for manufacturing and large production facilities
// ============================================================================

export const VoltCalcIndustrial: React.FC = () => {
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
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a] text-white overflow-hidden">
      {/* Minimal ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#2b59c3] to-transparent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[#00b300] to-transparent opacity-5 rounded-full blur-3xl" />
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
              Engineered to Endure. Industrial Solar Arrays for{" "}
              <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                Uninterrupted Production Throughput
              </span>
              .
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              High-voltage grid tie-ins, real-time SCADA telemetry, and
              multi-megawatt demand-charge reduction for manufacturing plants,
              food processing facilities, and large-scale industrial operations.
            </p>
          </motion.div>

          {/* Technical Engineering Focus */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/15 rounded-2xl p-8 lg:p-12 mb-16 max-w-3xl mx-auto font-mono text-sm"
          >
            <h2 className="text-2xl font-black mb-6 text-white tracking-wide">
              Complex Electrical Variables
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <div className="flex items-start space-x-3">
                <span className="text-[#2b59c3] font-bold">→</span>
                <span>
                  <span className="text-[#2b59c3]">Demand-charge lowering</span>{" "}
                  through peak-shaving algorithms reducing max draw windows
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-[#00b300] font-bold">→</span>
                <span>
                  <span className="text-[#00b300]">
                    Power factor correction
                  </span>{" "}
                  tracking for regulatory compliance and grid stability
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-white font-bold">→</span>
                <span>
                  Multi-megawatt generation thresholds balancing solar output
                  with real-time factory demand patterns
                </span>
              </div>
            </div>
          </motion.div>

          {/* Power Matrix Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "High-Voltage Grid Tie-Ins",
                description:
                  "Simulates structural step-down engineering and medium-voltage grid syncing for stable factory integration with utility dispatch.",
                stat: "MV-Class",
              },
              {
                title: "Real-Time SCADA/Telemetry",
                description:
                  "Previews how industrial dashboards monitor localized energy performance metrics across multiple production lines in real-time.",
                stat: "SCADA",
              },
              {
                title: "Custom PPA vs CapEx Modeler",
                description:
                  "Compares immediate outright ownership benefits (Section 12B) against zero-upfront Power Purchase Agreement operational models.",
                stat: "PPA/CapEx",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/20 hover:border-[#2b59c3]/50 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="font-mono text-sm text-[#2b59c3] mb-3 tracking-widest uppercase">
                  {feature.stat}
                </div>
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
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white hover:shadow-2xl hover:shadow-[#2b59c3]/30 transition-all duration-300"
            >
              Model Your Industrial System
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

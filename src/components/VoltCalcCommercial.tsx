"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcCommercial
// Premium B2B solar solution for corporate offices and retail
// ============================================================================

export const VoltCalcCommercial: React.FC = () => {
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
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-[#00b300] to-transparent opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-[#2b59c3] to-transparent opacity-10 rounded-full blur-3xl" />
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
              Convert Your Corporate Utility Expense Into a{" "}
              <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent">
                100% Tax-Deductible Asset
              </span>
              .
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              SARS Section 12B compliant. Unlock immediate capital deductions
              and stabilize cash flow for office parks, retail outlets, and
              corporate campuses.
            </p>
          </motion.div>

          {/* SARS Financial Engine */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#00b300]/20 to-[#2b59c3]/10 backdrop-blur-md border border-[#00b300]/30 rounded-2xl p-8 lg:p-12 mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#00b300]">
              The SARS Section 12B Tax Incentive
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-bold text-[#00b300]">
                  Claim 100% upfront capital deduction:
                </span>{" "}
                Corporate enterprises can write off the entire solar system
                installation cost in year one, reducing effective setup costs by
                up to{" "}
                <span className="font-bold text-[#00b300]">
                  27% at standard corporate tax rates
                </span>
                .
              </p>
              <p>
                <span className="font-bold text-white">
                  Bottom-line impact:
                </span>{" "}
                A R450,000 system becomes effectively R330,000 after tax
                benefits—immediate cash flow relief while locking in predictable
                energy costs for the next decade.
              </p>
            </div>
          </motion.div>

          {/* Operational Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Peak-Shaving Calculations",
                description:
                  "Identifies maximum daytime solar output to run heavy office HVAC and operations, lowering baseline grid consumption by 40–60%.",
                metric: "40–60%",
                metricLabel: "Reduction",
              },
              {
                title: "Operational Continuity",
                description:
                  "Eliminates local mini-substation downtime or regional grid stress to maintain 100% workforce uptime and productivity.",
                metric: "100%",
                metricLabel: "Uptime",
              },
              {
                title: "Granular ROI Tracking",
                description:
                  "Integrates with reporting frameworks to show real-time monthly operational spend reductions and asset depreciation schedules.",
                metric: "Real-Time",
                metricLabel: "Tracking",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00b300]/50 hover:shadow-xl hover:shadow-[#00b300]/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="text-5xl font-black text-[#00b300] mb-2 group-hover:text-[#00cc00] transition-colors">
                  {feature.metric}
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {feature.metricLabel}
                </p>
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
              className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white hover:shadow-2xl hover:shadow-[#00b300]/30 transition-all duration-300"
            >
              Model Your Commercial System
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

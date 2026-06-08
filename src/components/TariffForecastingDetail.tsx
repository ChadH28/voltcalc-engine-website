"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: TariffForecastingDetail
// Financial modeling and tariff forecasting breakdown
// ============================================================================

export const TariffForecastingDetail: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] text-white min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-bl from-[#00b300] to-transparent opacity-10 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h1 className="text-5xl lg:text-6xl font-black mb-4">
            Predictive Cash Flow Modeling:
            <span className="bg-gradient-to-r from-[#2b59c3] to-[#00b300] bg-clip-text text-transparent block">
              Against Compounding Utility Hikes
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Real 2026/2027 tariff data from NERSA and municipal authorities
            inform break-even projections.
          </p>
        </motion.div>

        {/* Regulatory Context */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            2026/2027 Regulatory Tariff Context
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2b59c3]/20 to-transparent border border-[#2b59c3]/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#2b59c3] mb-4">
                Eskom Direct Increase
              </h3>
              <p className="text-4xl font-black text-white mb-2">8.76%</p>
              <p className="text-sm text-gray-400">
                NERSA-approved 2026/2027 tariff hike directly affecting national
                grid consumption charges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00b300]/20 to-transparent border border-[#00b300]/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#00b300] mb-4">
                Municipal Bulk Purchase Adjustment
              </h3>
              <p className="text-4xl font-black text-white mb-2">9.01%</p>
              <p className="text-sm text-gray-400">
                City of Cape Town and regional municipalities amplifying tariff
                hikes with local redistribution costs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Compounding Cost Matrix */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            The Compounded Cost Matrix
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              VoltCalc models a{" "}
              <span className="font-bold text-[#00b300]">
                10-year ROI curve
              </span>{" "}
              factoring in an active baseline of{" "}
              <span className="font-bold">
                12% annual compounding municipal price inflation
              </span>
              . This accounts for both regulatory increases and secondary cost
              pressures (maintenance, grid stability levies, etc.).
            </p>
            <p className="text-gray-400 text-sm">
              Historical data from 2015–2025 shows that municipal rates often
              exceed NERSA base increases by 3–5 percentage points. Our
              conservative model uses 12% to ensure homeowners aren't surprised
              by under-projections.
            </p>
          </div>

          {/* 10-Year Cost Projection Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-bold">Year</th>
                  <th className="text-right py-3 px-4 font-bold">
                    Monthly Bill
                  </th>
                  <th className="text-right py-3 px-4 font-bold">
                    Annual Cost
                  </th>
                  <th className="text-right py-3 px-4 font-bold">
                    Cumulative Increase
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [1, "R1,500", "R18,000", "0%"],
                  [2, "R1,680", "R20,160", "12%"],
                  [3, "R1,881", "R22,579", "25%"],
                  [5, "R2,362", "R28,344", "57%"],
                  [10, "R4,189", "R50,272", "179%"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-3 px-4">{row[0]}</td>
                    <td className="text-right py-3 px-4 text-[#2b59c3]">
                      {row[1]}
                    </td>
                    <td className="text-right py-3 px-4">{row[2]}</td>
                    <td className="text-right py-3 px-4 font-bold text-[#00b300]">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* SSEG Feed-In Offsets */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Cape Town SSEG Feed-In Offsets
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              When your solar system generates excess energy during daylight
              hours, you can feed power back into the Cape Town grid via the{" "}
              <span className="font-bold">
                Small-Scale Embedded Generation (SSEG) program
              </span>
              . The utility provides credits against your consumption.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#00b300]/10 to-transparent border border-[#00b300]/20 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">SSEG Feed-In Rate</p>
                <p className="text-2xl font-black text-[#00b300]">R2.80/kWh</p>
              </div>
              <div className="bg-gradient-to-br from-[#2b59c3]/10 to-transparent border border-[#2b59c3]/20 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">
                  Grid Consumption Rate
                </p>
                <p className="text-2xl font-black text-[#2b59c3]">R4.00/kWh</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-lg p-4">
                <p className="text-xs text-gray-500 mb-2">Net Offset Value</p>
                <p className="text-2xl font-black text-white">R1.20/kWh</p>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              This creates a hybrid arbitrage: you consume at peak rates during
              morning/evening, while generating during midday for feed-in
              credits. Over 10 years, this accelerates your payback by 12–18
              months.
            </p>
          </div>
        </motion.section>

        {/* CapEx vs OpEx */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-white">
            CapEx vs. OpEx Amortization
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2b59c3]/20 to-transparent border border-[#2b59c3]/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#2b59c3] mb-4">
                With Solar (CapEx)
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li>
                  <span className="font-bold">Upfront Cost:</span> R450,000
                </li>
                <li>
                  <span className="font-bold">Annual Maintenance:</span> R2,000
                </li>
                <li>
                  <span className="font-bold">10-Year Lifespan Cost:</span>{" "}
                  R470,000
                </li>
                <li>
                  <span className="font-bold text-[#00b300]">
                    Residual Asset Value:
                  </span>{" "}
                  R180,000
                </li>
              </ul>
              <p className="font-bold text-[#00b300]">
                Net 10-Year Cost: R290,000
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Grid-Only (OpEx)
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li>
                  <span className="font-bold">Year 1 Annual Cost:</span> R18,000
                </li>
                <li>
                  <span className="font-bold">Year 10 Annual Cost:</span>{" "}
                  R50,272
                </li>
                <li>
                  <span className="font-bold">Total 10-Year Cost:</span>{" "}
                  R326,000
                </li>
                <li>
                  <span className="font-bold text-red-400">
                    No residual asset
                  </span>
                </li>
              </ul>
              <p className="font-bold text-red-400">Grid Cost: R326,000</p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a
            href="/#voltcalc-dashboard"
            className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider bg-gradient-to-r from-[#2b59c3] to-[#00b300] text-white hover:shadow-2xl transition-all duration-300"
          >
            Back to Calculator
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: BatteryAutonomyDetail
// Battery management and autonomy simulation breakdown
// ============================================================================

export const BatteryAutonomyDetail: React.FC = () => {
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
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#05050a] to-[#0a0a0a] text-white min-h-screen">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-[#7029a3] to-transparent opacity-8 rounded-full blur-3xl" />
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
            De-Risking the Grid:
            <span className="bg-gradient-to-r from-[#7029a3] to-[#00b300] bg-clip-text text-transparent block">
              Dynamic Runtime Storage Simulation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Advanced battery management strategies to maximize cell lifespan and
            guarantee backup autonomy.
          </p>
        </motion.div>

        {/* Section 1: Depth of Discharge */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-[#7029a3]">
            Depth of Discharge (DoD) Safety Margins
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-gradient-to-br from-[#7029a3]/20 to-transparent border border-[#7029a3]/30 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                VoltCalc limits default discharge simulations to a strict{" "}
                <span className="font-bold text-[#7029a3]">80% DoD</span>{" "}
                threshold. This preserves lithium-ion cell chemistry
                (specifically LiFePO4 formulations) for extended lifespan.
              </p>
              <p className="text-gray-400 text-sm">
                Each charge/discharge cycle degrades cell capacity by ~0.08%. By
                constraining discharge to 80% DoD, we guarantee a minimum of{" "}
                <span className="font-bold">6,000+ lifecycle runs</span>
                —approximately 12–15 years of daily use without significant
                degradation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#7029a3]/10 to-transparent border border-[#7029a3]/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    DoD Threshold
                  </p>
                  <p className="text-3xl font-black text-[#7029a3]">80%</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Guaranteed Cycles
                  </p>
                  <p className="text-3xl font-black text-[#00b300]">6,000+</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                    Warranty Lifespan
                  </p>
                  <p className="text-3xl font-black text-white">10–15 Yrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* DoD Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 font-bold">DoD %</th>
                  <th className="text-left py-3 px-4 font-bold">
                    Typical Cycles
                  </th>
                  <th className="text-left py-3 px-4 font-bold">Lifespan</th>
                  <th className="text-left py-3 px-4 font-bold">Strategy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "100%",
                    "2,000–3,000",
                    "4–6 Yrs",
                    "Aggressive (Not Recommended)",
                  ],
                  ["90%", "4,000–5,000", "8–10 Yrs", "Moderate Risk"],
                  ["80%", "6,000+", "12–15 Yrs", "VoltCalc Standard ✓"],
                  ["70%", "8,000+", "15–20 Yrs", "Ultra-Conservative"],
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-3 px-4 font-bold">{row[0]}</td>
                    <td className="py-3 px-4 text-gray-400">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-400">{row[2]}</td>
                    <td className="py-3 px-4">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 2: Critical Load Segregation */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-[#7029a3]">
            Critical-Load Segregation
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            During grid outages, VoltCalc's hybrid inverter intelligently
            isolates essential circuits from high-draw appliances. This extends
            runtime dramatically.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Essential Loads */}
            <div className="bg-gradient-to-br from-[#00b300]/20 to-transparent border border-[#00b300]/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[#00b300] mb-4">
                Priority 1: Essential Circuits (50W avg)
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-[#00b300] mr-2">●</span> WiFi Router &
                  Modem
                </li>
                <li className="flex items-center">
                  <span className="text-[#00b300] mr-2">●</span> Refrigerator
                  (compressor duty cycle)
                </li>
                <li className="flex items-center">
                  <span className="text-[#00b300] mr-2">●</span> Point-of-Sale
                  Systems
                </li>
                <li className="flex items-center">
                  <span className="text-[#00b300] mr-2">●</span> Security Alarms
                  & Lighting
                </li>
                <li className="flex items-center">
                  <span className="text-[#00b300] mr-2">●</span> Medical
                  Equipment (if applicable)
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                <span className="font-bold">Runtime on 5kWh battery:</span> 100+
                hours (4+ days)
              </p>
            </div>

            {/* High Draw Loads */}
            <div className="bg-gradient-to-br from-red-500/20 to-transparent border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-red-400 mb-4">
                Disconnected During Outage
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">●</span> Electric
                  Stove/Oven
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">●</span> Geysers & Water
                  Heaters
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">●</span> HVAC Systems
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">●</span> Electric
                  Kettles/Toasters
                </li>
                <li className="flex items-center">
                  <span className="text-red-400 mr-2">●</span> Washing Machines
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                <span className="font-bold">Reason:</span> These consume 3–5kW
                individually, draining battery in minutes.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Inverter Surge Tolerance */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-[#7029a3]">
            Inverter Surge Tolerance
          </h2>
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Inductive loads (motors, pumps, compressors) require significant
              startup current surges. A typical water pump draws 3x rated power
              for 200–500ms during startup. VoltCalc's{" "}
              <span className="font-bold">5kW hybrid inverter</span> is rated
              for{" "}
              <span className="font-bold text-[#7029a3]">8kW peak surge</span>{" "}
              capacity, safely absorbing these transients without tripping.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                load: "Refrigerator Compressor",
                steady: "600W",
                surge: "2,000W",
                duration: "300ms",
              },
              {
                load: "Water Pump",
                steady: "750W",
                surge: "2,500W",
                duration: "400ms",
              },
              {
                load: "Borehole Pump",
                steady: "1,500W",
                surge: "5,000W",
                duration: "500ms",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#7029a3]/10 to-transparent border border-[#7029a3]/20 rounded-lg p-4"
              >
                <p className="font-bold text-sm mb-3">{item.load}</p>
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="text-gray-500">Steady Power</p>
                    <p className="text-[#00b300]">{item.steady}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Peak Surge</p>
                    <p className="text-[#7029a3]">{item.surge}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Duration</p>
                    <p className="text-white">{item.duration}</p>
                  </div>
                </div>
              </div>
            ))}
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

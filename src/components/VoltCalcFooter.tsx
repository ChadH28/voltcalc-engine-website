"use client";

import React from "react";
import { motion } from "framer-motion";

// ============================================================================
// Component: VoltCalcFooter
// Minimalist corporate footer with navigation and social links
// ============================================================================

export const VoltCalcFooter: React.FC = () => {
  // ========================================================================
  // Navigation Links Data
  // ========================================================================

  const navigation = {
    products: [
      { name: "Solar Calculator", href: "/#voltcalc-dashboard" },
      // { name: "System Simulator", href: "/#voltcalc-dashboard" },
      // { name: "ROI Projections", href: "/#voltcalc-dashboard" },
      // { name: "Mobile App", href: "#" },
    ],
    solutions: [
      { name: "Residential", href: "/voltcalc/residential" },
      { name: "Commercial", href: "/voltcalc/commercial" },
      { name: "Agricultural", href: "/voltcalc/agricultural" },
      { name: "Industrial", href: "/voltcalc/industrial" },
    ],
    resources: [
      // { name: "Technical Case Studies", href: "#" },
      { name: "Installation Guides", href: "#" },
      { name: "Tariff Insights", href: "#" },
      // { name: "Blog", href: "#" },
    ],
  };

  // ========================================================================
  // Social Icons Components
  // ========================================================================

  const socialLinks = [
    {
      name: "Twitter/X",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-10.72 10.3z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
        </svg>
      ),
      href: "#",
    },
  ];

  // ========================================================================
  // Animation Variants
  // ========================================================================

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // ========================================================================
  // Render
  // ========================================================================

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* ================================================================
              LEFT COLUMN: Logo & Company Info
              ================================================================ */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              {/* Logo Placeholder */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2b59c3] to-[#00b300] flex items-center justify-center font-bold text-white">
                VC
              </div>
              <span className="text-lg font-bold text-white">VoltCalc</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              High-Performance Web Engineering & Digital Growth Retainers for
              renewable energy brands.
            </p>
          </motion.div>

          {/* ================================================================
              PRODUCTS COLUMN
              ================================================================ */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Products
            </h4>
            <ul className="space-y-3">
              {navigation.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00b300] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================================================================
              SOLUTIONS COLUMN
              ================================================================ */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-3">
              {navigation.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00b300] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================================================================
              RESOURCES COLUMN
              ================================================================ */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Technical Case Studies
            </h4>
            <ul className="space-y-3">
              {navigation.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00b300] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================================================================
              RIGHT COLUMN: Social Icons
              ================================================================ */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">
              Connect
            </h4>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-[#00b300] transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          {/* Legal & Copyright */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              © {new Date().getFullYear()} VoltCalc Solar Systems. All rights
              reserved. | Powered by{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-[#00b300] transition-colors duration-200"
              >
                BC Digital
              </a>
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-[#00b300] transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#00b300] transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ambient background effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#2b59c3]/5 to-transparent pointer-events-none" />
    </footer>
  );
};

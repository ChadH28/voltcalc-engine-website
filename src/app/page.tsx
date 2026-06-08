"use client";

import { VoltCalcHero } from "@/components/VoltCalcHero";
import { VoltCalcFeatures } from "@/components/VoltCalcFeatures";
import { VoltCalcDashboard } from "@/components/VoltCalcDashboard";
import { VoltCalcCaptureForm } from "@/components/VoltCalcCaptureForm";
import { VoltCalcFooter } from "@/components/VoltCalcFooter";
import { useSolarCalculator } from "@/hooks/useSolarCalculator";

export default function Home() {
  const calculator = useSolarCalculator();

  return (
    <>
      {/* Hero Section */}
      <VoltCalcHero />

      {/* Features Grid */}
      <VoltCalcFeatures />

      {/* Main Calculator Dashboard */}
      <div id="voltcalc-dashboard">
        <VoltCalcDashboard />
      </div>

      {/* Lead Capture Form - Only show when user has entered a bill amount */}
      {calculator.monthlyBill > 0 && (
        <VoltCalcCaptureForm
          panelCount={calculator.panelCount}
          estimatedSystemCost={calculator.estimatedSystemCost}
          requiredKwp={calculator.requiredKwp}
          batteryCapacityKwh={calculator.batteryCapacityKwh}
          paybackPeriodYears={calculator.paybackPeriodYears}
        />
      )}

      {/* Footer */}
      <VoltCalcFooter />
    </>
  );
}

import { useState, useMemo } from "react";

// ============================================================================
// Type Definitions
// ============================================================================

interface TenYearProjection {
  year: number;
  savings: number;
  gridCostWithoutSolar: number;
}

interface SolarSystemCalculations {
  monthlyKwhUsage: number;
  dailyKwhUsage: number;
  requiredKwp: number;
  panelCount: number;
  batteryCapacityKwh: number;
  estimatedSystemCost: number;
  yearOneMonthlySavings: number;
  paybackPeriodYears: number;
  tenYearSavingsArray: TenYearProjection[];
}

interface UseSolarCalculatorState {
  monthlyBill: number;
  targetSavingsPercentage: number;
  batteryAutonomyHours: number;
}

export interface UseSolarCalculatorReturn
  extends UseSolarCalculatorState, SolarSystemCalculations {
  setMonthlyBill: (value: number) => void;
  setTargetSavingsPercentage: (value: number) => void;
  setBatteryAutonomyHours: (value: number) => void;
}

// ============================================================================
// South African Market Assumptions (Hardcoded)
// ============================================================================

const MARKET_ASSUMPTIONS = {
  costPerKwh: 4.0, // ZAR
  peakSunHoursPerDay: 5.5,
  panelPrice540W: 2200, // ZAR per 540W panel
  panelWatts: 540, // Watts per panel
  inverter5kwPrice: 15000, // ZAR for 5kW hybrid inverter
  inverter5kwCapacity: 5, // kW reference capacity
  battery5kwhPrice: 22000, // ZAR for 5kWh lithium-ion battery
  battery5kwhCapacity: 5, // kWh reference capacity
  annualElectricityInflation: 0.12, // 12% annual tariff increase
  baselineInstallationCost: 25000, // ZAR for structural/compliance
} as const;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Round a number to 2 decimal places for currency precision
 */
const roundToTwoDecimals = (value: number): number => {
  return Math.round(value * 100) / 100;
};

/**
 * Calculate the complete solar system requirements and financial projections
 */
const calculateSolarSystem = (
  monthlyBill: number,
  targetSavingsPercentage: number,
  batteryAutonomyHours: number,
): SolarSystemCalculations => {
  // ========================================================================
  // Input Validation
  // ========================================================================

  if (monthlyBill < 0) {
    throw new Error("Monthly bill cannot be negative");
  }
  if (targetSavingsPercentage < 0 || targetSavingsPercentage > 100) {
    throw new Error("Target savings percentage must be between 0 and 100");
  }
  if (batteryAutonomyHours < 0) {
    throw new Error("Battery autonomy hours cannot be negative");
  }

  // ========================================================================
  // Step 1: Calculate Energy Usage
  // ========================================================================

  const monthlyKwhUsage = roundToTwoDecimals(
    monthlyBill / MARKET_ASSUMPTIONS.costPerKwh,
  );
  const dailyKwhUsage = roundToTwoDecimals(monthlyKwhUsage / 30);

  // ========================================================================
  // Step 2: Calculate Required Solar Array Size (kWp)
  // ========================================================================

  const requiredKwp = roundToTwoDecimals(
    (dailyKwhUsage * (targetSavingsPercentage / 100)) /
      MARKET_ASSUMPTIONS.peakSunHoursPerDay,
  );

  // ========================================================================
  // Step 3: Calculate Number of Physical Panels (540W each)
  // ========================================================================

  const panelKw = MARKET_ASSUMPTIONS.panelWatts / 1000; // Convert watts to kW
  const panelCount = Math.ceil(requiredKwp / panelKw);

  // ========================================================================
  // Step 4: Calculate Battery Capacity for Autonomy Hours
  // ========================================================================

  const batteryCapacityKwh = roundToTwoDecimals(
    dailyKwhUsage * (batteryAutonomyHours / 24),
  );

  // ========================================================================
  // Step 5: Calculate Total Estimated System Cost
  // ========================================================================

  const panelCost = panelCount * MARKET_ASSUMPTIONS.panelPrice540W;

  // Scale inverter cost proportionally to system size (5kW reference)
  const inverterCost = roundToTwoDecimals(
    MARKET_ASSUMPTIONS.inverter5kwPrice *
      (requiredKwp / MARKET_ASSUMPTIONS.inverter5kwCapacity),
  );

  // Scale battery cost proportionally to system size (5kWh reference)
  const batteryCost = roundToTwoDecimals(
    MARKET_ASSUMPTIONS.battery5kwhPrice *
      (batteryCapacityKwh / MARKET_ASSUMPTIONS.battery5kwhCapacity),
  );

  const estimatedSystemCost = roundToTwoDecimals(
    panelCost +
      inverterCost +
      batteryCost +
      MARKET_ASSUMPTIONS.baselineInstallationCost,
  );

  // ========================================================================
  // Step 6: Calculate Year One Monthly Savings
  // ========================================================================

  const monthlyKwhOffset = roundToTwoDecimals(
    monthlyKwhUsage * (targetSavingsPercentage / 100),
  );
  const yearOneMonthlySavings = roundToTwoDecimals(
    monthlyKwhOffset * MARKET_ASSUMPTIONS.costPerKwh,
  );

  // ========================================================================
  // Step 7: Generate 10-Year Projection Array & Calculate Payback Period
  // ========================================================================

  const tenYearSavingsArray: TenYearProjection[] = [];
  let cumulativeSavings = 0;
  let paybackPeriodYears = 0;
  let paybackFound = false;
  let previousYearCumulativeSavings = 0;
  let paybackYearIndex = -1;
  let paybackYearFraction = 0;

  for (let year = 0; year <= 10; year++) {
    // Calculate electricity tariff at this year with 12% annual inflation
    const inflationMultiplier = Math.pow(
      1 + MARKET_ASSUMPTIONS.annualElectricityInflation,
      year,
    );
    const currentYearCostPerKwh = roundToTwoDecimals(
      MARKET_ASSUMPTIONS.costPerKwh * inflationMultiplier,
    );

    // Calculate savings for this year
    const currentYearMonthlySavings = roundToTwoDecimals(
      monthlyKwhOffset * currentYearCostPerKwh,
    );
    const currentYearAnnualSavings = roundToTwoDecimals(
      currentYearMonthlySavings * 12,
    );

    // Accumulate savings (skip year 0 since system not yet operational)
    if (year > 0) {
      cumulativeSavings += currentYearAnnualSavings;
    }

    // Calculate total grid cost without solar for this year
    const monthlyGridCostAtYear = roundToTwoDecimals(
      monthlyBill * inflationMultiplier,
    );
    const annualGridCostWithoutSolar = roundToTwoDecimals(
      monthlyGridCostAtYear * 12,
    );

    // Track cumulative savings for payback calculation
    if (year > 0 && !paybackFound) {
      if (cumulativeSavings >= estimatedSystemCost) {
        // Payback occurs in this year
        paybackFound = true;
        paybackYearIndex = year;
        // Interpolate to find exact fraction of year for precise payback
        previousYearCumulativeSavings =
          cumulativeSavings - currentYearAnnualSavings;
        const remainingBeforePayback =
          estimatedSystemCost - previousYearCumulativeSavings;
        paybackYearFraction = remainingBeforePayback / currentYearAnnualSavings;
        paybackPeriodYears = roundToTwoDecimals(year - 1 + paybackYearFraction);
      }
    }

    // Add to projections array
    tenYearSavingsArray.push({
      year,
      savings: roundToTwoDecimals(cumulativeSavings),
      gridCostWithoutSolar: annualGridCostWithoutSolar,
    });
  }

  // If payback hasn't been found within 10 years, calculate based on year-one savings
  if (!paybackFound && yearOneMonthlySavings > 0) {
    // Approximate: use simplified calculation for cases where payback > 10 years
    // This uses a more complex formula accounting for average inflation over period
    const annualSavingsYear1 = yearOneMonthlySavings * 12;
    // Using compound interest formula to find payback with 12% tariff growth
    // P = systemCost, A = year1 savings, r = inflation rate
    // We solve: P = A * ((1 - (1+r)^n) / -r) but reverse to find n
    // Approximation for long payback periods:
    const avgInflationAdjustment =
      1 + MARKET_ASSUMPTIONS.annualElectricityInflation / 2;
    paybackPeriodYears = roundToTwoDecimals(
      estimatedSystemCost / (annualSavingsYear1 * avgInflationAdjustment),
    );
  }

  return {
    monthlyKwhUsage,
    dailyKwhUsage,
    requiredKwp,
    panelCount,
    batteryCapacityKwh,
    estimatedSystemCost,
    yearOneMonthlySavings,
    paybackPeriodYears,
    tenYearSavingsArray,
  };
};

// ============================================================================
// React Custom Hook: useSolarCalculator
// ============================================================================

/**
 * Custom React hook for solar system calculator
 *
 * Manages user input state (monthly bill, savings target, battery autonomy)
 * and automatically recalculates solar system requirements, costs, and 10-year
 * ROI projections with compound 12% electricity tariff inflation.
 *
 * All calculations are client-side and safe for SSR environments.
 * All currency values are rounded to 2 decimal places.
 *
 * @returns Object containing input state, state setters, and all calculated metrics
 *
 * @example
 * const calculator = useSolarCalculator();
 * calculator.setMonthlyBill(1500); // User's current monthly bill in ZAR
 * calculator.setTargetSavingsPercentage(75); // Offset 75% of usage
 * calculator.setBatteryAutonomyHours(8); // 8 hours backup capacity
 *
 * // Access results:
 * console.log(calculator.panelCount); // Total 540W panels needed
 * console.log(calculator.estimatedSystemCost); // Total hardware + install cost
 * console.log(calculator.paybackPeriodYears); // Break-even timeline
 * calculator.tenYearSavingsArray.forEach(projection => {
 *   console.log(`Year ${projection.year}: R${projection.savings} cumulative savings`);
 * });
 */
export const useSolarCalculator = (): UseSolarCalculatorReturn => {
  // State for user inputs
  const [monthlyBill, setMonthlyBill] = useState<number>(0);
  const [targetSavingsPercentage, setTargetSavingsPercentage] =
    useState<number>(50);
  const [batteryAutonomyHours, setBatteryAutonomyHours] = useState<number>(4);

  // Memoized calculations prevent unnecessary recalculations on every render
  // Only recalculates when inputs change
  const calculations = useMemo(() => {
    try {
      return calculateSolarSystem(
        monthlyBill,
        targetSavingsPercentage,
        batteryAutonomyHours,
      );
    } catch (error) {
      // Graceful error handling: return zero values if calculation fails
      console.error("Solar calculation error:", error);
      return {
        monthlyKwhUsage: 0,
        dailyKwhUsage: 0,
        requiredKwp: 0,
        panelCount: 0,
        batteryCapacityKwh: 0,
        estimatedSystemCost: 0,
        yearOneMonthlySavings: 0,
        paybackPeriodYears: 0,
        tenYearSavingsArray: [],
      };
    }
  }, [monthlyBill, targetSavingsPercentage, batteryAutonomyHours]);

  // Return combined object with state, setters, and calculations
  return {
    // Input state
    monthlyBill,
    targetSavingsPercentage,
    batteryAutonomyHours,
    // State setters
    setMonthlyBill,
    setTargetSavingsPercentage,
    setBatteryAutonomyHours,
    // Calculated results
    ...calculations,
  };
};

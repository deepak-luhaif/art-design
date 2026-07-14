"use client";

import { useMemo, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Tutorial, Stroke } from "@/lib/types";
import { getCachedRoughPath } from "@/lib/rough-helper";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

type Props = {
  tutorial: Tutorial;
  currentStep: number;
  className?: string;
  animate?: boolean;
};

export default function StepCanvas({ tutorial, currentStep, className, animate = true }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const mounted = useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);

  // 1. Gather all visible strokes up to the current step
  const { visibleStrokes, activeStepStrokes } = useMemo(() => {
    // Collect all hidden stroke IDs up to the current step
    const hiddenSet = new Set<string>();
    for (let i = 0; i < currentStep; i++) {
      const step = tutorial.steps[i];
      if (step && step.hideStrokeIds) {
        step.hideStrokeIds.forEach((id) => hiddenSet.add(id));
      }
    }

    // Collect all strokes introduced up to the current step
    const allStrokes: Stroke[] = [];
    const activeStrokes: Stroke[] = [];

    for (let i = 0; i < currentStep; i++) {
      const step = tutorial.steps[i];
      if (step) {
        const isCurrentStep = step.id === currentStep;
        step.strokes.forEach((stroke) => {
          allStrokes.push(stroke);
          if (isCurrentStep) {
            activeStrokes.push(stroke);
          }
        });
      }
    }

    // Filter out strokes that are marked hidden
    const visible = allStrokes.filter((stroke) => !hiddenSet.has(stroke.id));

    return {
      visibleStrokes: visible,
      activeStepStrokes: activeStrokes,
    };
  }, [tutorial, currentStep]);

  // Construct label for accessibility
  const stepData = tutorial.steps.find((s) => s.id === currentStep);
  const label = stepData
    ? `${tutorial.name} drawing, step ${currentStep} of ${tutorial.steps.length}: ${stepData.title}. ${stepData.instruction}`
    : `${tutorial.name} drawing`;

  if (!mounted) {
    return (
      <svg
        viewBox={tutorial.viewBox}
        role="img"
        aria-label={label}
        className={className}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    );
  }

  return (
    <svg
      viewBox={tutorial.viewBox}
      role="img"
      aria-label={label}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    >
      {visibleStrokes.map((stroke) => {
        const pathData = getCachedRoughPath(stroke.id, stroke.shape);
        const isActive = activeStepStrokes.some((s) => s.id === stroke.id);
        const isGuide = stroke.isGuide;

        // Find the index of the stroke within the current step (for stagger)
        const activeIndex = activeStepStrokes.findIndex((s) => s.id === stroke.id);
        const delay = activeIndex >= 0 ? activeIndex * 0.15 : 0;
        const duration = stroke.duration ?? 0.65;

        // Set style properties based on ink vs guide line
        const pathStyle = {
          fill: "none",
          stroke: isGuide ? "var(--color-border)" : "var(--color-text-primary)",
          strokeWidth: isGuide ? 1.25 : 2.15,
          strokeDasharray: isGuide ? "5 6" : "none",
          strokeLinecap: "round" as const,
          strokeLinejoin: "round" as const,
          vectorEffect: "non-scaling-stroke" as const,
          opacity: isGuide ? 0.38 : 0.92,
        };

        if (shouldAnimate && isActive) {
          return (
            <motion.path
              key={stroke.id}
              d={pathData}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: delay,
              }}
              style={pathStyle}
            />
          );
        }

        // Render statically for old strokes or if animations are disabled
        return (
          <path
            key={stroke.id}
            d={pathData}
            style={pathStyle}
          />
        );
      })}
    </svg>
  );
}

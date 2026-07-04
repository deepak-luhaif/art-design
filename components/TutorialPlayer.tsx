"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Tutorial } from "@/lib/types";
import { getStoredStep, setStoredStep, subscribeStoredStep } from "@/lib/progressStore";
import StepCanvas from "./StepCanvas";
import StepControls from "./StepControls";
import ProgressBar from "./ProgressBar";
import FrameSheet from "./FrameSheet";

const FADE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: "easeInOut" as const },
};

function Confetti() {
  const pieces = Array.from({ length: 24 });
  const colors = ["var(--color-accent)", "var(--color-accent-2)", "var(--color-accent-3)"];
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {pieces.map((_, i) => {
        const angle = (i / pieces.length) * Math.PI * 2;
        const distance = 90 + ((i * 37) % 90);
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        return (
          <motion.span
            key={i}
            className="absolute top-1/2 left-1/2 h-2 w-2"
            style={{ background: colors[i % colors.length], borderRadius: i % 3 === 0 ? "999px" : "2px" }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
            animate={{ x, y: y - 40, opacity: 0, rotate: (i % 2 ? 1 : -1) * 180 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}

export default function TutorialPlayer({ tutorial }: { tutorial: Tutorial }) {
  const total = tutorial.steps.length;
  const [showFrameSheet, setShowFrameSheet] = useState(false);
  const reduceMotion = useReducedMotion();

  // localStorage is the source of truth for progress, so revisiting a tutorial resumes where it left off.
  const currentStep = useSyncExternalStore(
    (callback) => subscribeStoredStep(tutorial.slug, callback),
    () => getStoredStep(tutorial.slug, total),
    () => 1
  );
  const goToStep = (step: number) => setStoredStep(tutorial.slug, Math.min(total, Math.max(1, step)));

  const isComplete = currentStep === total;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
          ← All tutorials
        </Link>
        <button
          type="button"
          onClick={() => setShowFrameSheet((v) => !v)}
          className="min-h-11 px-4 py-2 text-sm font-semibold"
          style={{
            borderWidth: "var(--border-width)",
            borderColor: "var(--color-border)",
            borderStyle: "solid",
            borderRadius: "var(--radius-theme)",
            background: showFrameSheet ? "var(--color-accent)" : "var(--color-surface)",
            color: showFrameSheet ? "var(--color-surface)" : "var(--color-text-primary)",
          }}
        >
          {showFrameSheet ? "Back to player" : "View all frames"}
        </button>
      </div>

      <div>
        <h1
          className="text-3xl font-bold sm:text-4xl"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
        >
          {tutorial.name}
        </h1>
        <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {tutorial.subtitle}
        </p>
      </div>

      {showFrameSheet ? (
        <FrameSheet
          tutorial={tutorial}
          currentStep={currentStep}
          onSelectStep={(s) => {
            goToStep(s);
            setShowFrameSheet(false);
          }}
        />
      ) : (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div
            className="canvas-frame relative flex aspect-square w-full items-center justify-center overflow-hidden lg:w-3/5"
            style={{
              background: "var(--color-surface)",
              borderWidth: "var(--border-width)",
              borderColor: "var(--color-border)",
              borderStyle: "solid",
              borderRadius: "var(--radius-theme-lg)",
              boxShadow: "var(--shadow-card)",
              padding: "clamp(1rem, 4%, 2.5rem)",
            }}
          >
            {isComplete && !reduceMotion && <Confetti key={`confetti-${currentStep}`} />}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentStep}
                className="h-full w-full"
                initial={reduceMotion ? undefined : FADE_TRANSITION.initial}
                animate={reduceMotion ? undefined : FADE_TRANSITION.animate}
                exit={reduceMotion ? undefined : FADE_TRANSITION.exit}
                transition={FADE_TRANSITION.transition}
              >
                <StepCanvas tutorial={tutorial} currentStep={currentStep} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex w-full flex-col gap-5 lg:w-2/5">
            <ProgressBar current={currentStep} total={total} />

            <StepControls steps={tutorial.steps} currentStep={currentStep} onChange={goToStep} />

            {isComplete && (
              <p role="status" className="text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
                🎉 Nicely done — you finished the {tutorial.name.toLowerCase()} tutorial!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

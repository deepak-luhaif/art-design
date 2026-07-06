"use client";

import Link from "next/link";
import { useState, useSyncExternalStore, useEffect } from "react";
import type { Tutorial } from "@/lib/types";
import { getStoredStep, setStoredStep, subscribeStoredStep } from "@/lib/progressStore";
import StepCanvas from "./StepCanvas";
import StepControls from "./StepControls";
import FrameSheet from "./FrameSheet";

export default function TutorialPlayer({ tutorial }: { tutorial: Tutorial }) {
  const total = tutorial.steps.length;
  const [showFrameSheet, setShowFrameSheet] = useState(false);

  // localStorage is the source of truth for progress
  const currentStep = useSyncExternalStore(
    (callback) => subscribeStoredStep(tutorial.slug, callback),
    () => getStoredStep(tutorial.slug, total),
    () => 1
  );
  const goToStep = (step: number) => setStoredStep(tutorial.slug, Math.min(total, Math.max(1, step)));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToStep(Math.max(1, currentStep - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToStep(Math.min(total, currentStep + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, total, goToStep]);

  const isComplete = currentStep === total;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:py-12">
      {/* Navigation Header */}
      <div className="flex flex-col gap-4 md:gap-6">
        <Link
          href="/"
          className="text-xs uppercase tracking-widest font-semibold hover:text-[var(--color-accent)] transition-colors w-fit"
          style={{ color: "var(--color-text-secondary)" }}
        >
          ← Back to library
        </Link>

        {/* Tutorial Header with improved hierarchy */}
        <div className="flex flex-col gap-3">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--color-text-primary)",
            }}
          >
            Drawing a {tutorial.name}
          </h1>
          <p
            className="text-sm md:text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
          >
            {tutorial.description}
          </p>
        </div>

        {/* Toggle Button with improved styling */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => setShowFrameSheet((v) => !v)}
            className="group min-h-11 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-surface)] active:scale-95"
            style={{
              borderColor: showFrameSheet ? "var(--color-accent)" : "var(--color-border)",
              background: showFrameSheet ? "var(--color-accent)" : "transparent",
              color: showFrameSheet ? "var(--color-surface)" : "var(--color-text-primary)",
            }}
          >
            {showFrameSheet ? "← Back to player" : "View contact sheet →"}
          </button>
        </div>
      </div>

      <hr className="border-[var(--color-border)] w-full opacity-40" />

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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Drawing Canvas Area */}
          <div
            className="lg:col-span-3 aspect-square w-full flex items-center justify-center p-6 md:p-8 border border-[var(--color-border)] sketchbook-page transition-all duration-500"
            style={{
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="h-full w-full relative flex items-center justify-center">
              <StepCanvas tutorial={tutorial} currentStep={currentStep} animate={true} />
            </div>
          </div>

          {/* Sidebar Step Controls */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <StepControls steps={tutorial.steps} currentStep={currentStep} onChange={goToStep} />

            {/* Finished state prompt */}
            {isComplete && (
              <div
                role="status"
                className="p-5 border text-center transition-all duration-500 bg-[var(--color-surface)] sketchbook-page"
                style={{
                  borderColor: "var(--color-accent)",
                }}
              >
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
                >
                  ✎ Sketchbook Complete
                </p>
                <p
                  className="text-xs mt-1 leading-relaxed"
                  style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                >
                  You finished all {total} frames of the {tutorial.name.toLowerCase()} tutorial. Use the tabs above to revisit any step or view the contact sheet.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import type { Step } from "@/lib/types";

type Props = {
  steps: Step[];
  currentStep: number;
  onChange: (step: number) => void;
};

export default function StepControls({ steps, currentStep, onChange }: Props) {
  const total = steps.length;
  const step = steps.find((s) => s.id === currentStep);
  const atStart = currentStep <= 1;
  const atEnd = currentStep >= total;

  const navButtonStyle = (disabled: boolean) => ({
    border: "1px solid var(--color-border)",
    background: "var(--color-surface)",
    color: disabled ? "var(--color-text-secondary)" : "var(--color-text-primary)",
    opacity: disabled ? 0.35 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  });

  const progressPercent = (currentStep / total) * 100;

  return (
    <div className="flex flex-col gap-6 p-6 border border-[var(--color-border)] bg-[var(--color-surface)] sketchbook-page">
      {/* Progress Bar */}
      <div className="w-full flex flex-col gap-2">
        <div className="h-1.5 w-full bg-[var(--color-border)] overflow-hidden border border-[var(--color-border)]">
          <div
            className="h-full bg-[var(--color-accent)] transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p
          className="text-[10px] tracking-[0.2em] font-semibold uppercase opacity-60 text-right"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Frame {currentStep} of {total}
        </p>
      </div>

      {/* Top Header Controls */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, currentStep - 1))}
          disabled={atStart}
          style={navButtonStyle(atStart)}
          className="min-h-11 min-w-[5.5rem] px-4 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all hover:bg-[var(--color-bg)] active:scale-95 disabled:active:scale-100 disabled:hover:bg-transparent"
          title="Keyboard: Left Arrow"
        >
          ← Back
        </button>

        <div className="text-center flex flex-col gap-1">
          <h2
            className="text-xl font-bold"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "var(--tracking-display)",
              color: "var(--color-text-primary)",
            }}
          >
            {step?.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onChange(Math.min(total, currentStep + 1))}
          disabled={atEnd}
          style={navButtonStyle(atEnd)}
          className="min-h-11 min-w-[5.5rem] px-4 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all hover:bg-[var(--color-bg)] active:scale-95 disabled:active:scale-100 disabled:hover:bg-transparent"
          title="Keyboard: Right Arrow"
        >
          Next →
        </button>
      </div>

      <hr className="border-[var(--color-border)] w-full opacity-60" />

      {/* Step Instruction */}
      <div className="min-h-[4.5rem] flex items-center justify-center sm:justify-start">
        <p
          className="text-sm md:text-base leading-relaxed italic text-center sm:text-left"
          style={{
            color: "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
          }}
        >
          {step?.instruction}
        </p>
      </div>

      <hr className="border-[var(--color-border)] w-full opacity-60" />

      {/* Keyboard Shortcuts Hint */}
      <div
        className="p-3 bg-[var(--color-bg)] border border-[var(--color-border)] text-center"
        style={{ opacity: 0.85 }}
      >
        <p
          className="text-[11px] tracking-wider uppercase font-semibold"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Use <span className="inline-block px-2 py-0.5 border border-[var(--color-border)] bg-[var(--color-surface)] mx-1">←</span> <span className="inline-block px-2 py-0.5 border border-[var(--color-border)] bg-[var(--color-surface)] mx-1">→</span> to navigate
        </p>
      </div>

      {/* Signature Sketchbook Page Corners Navigation */}
      <div className="flex flex-col gap-2">
        <span
          className="text-[10px] tracking-wider uppercase font-semibold opacity-65"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Sketchbook Pages
        </span>
        <div
          role="group"
          aria-label="Jump to frame"
          className="flex flex-wrap gap-2.5 justify-start"
        >
          {steps.map((s) => {
            const isCurrent = s.id === currentStep;
            return (
              <button
                key={s.id}
                type="button"
                aria-label={`Go to frame ${s.id}: ${s.title}`}
                aria-current={isCurrent ? "step" : undefined}
                onClick={() => onChange(s.id)}
                className="flex items-center justify-center p-0.5 transition-all hover:opacity-100 focus-visible:outline-2"
                style={{ outlineColor: "var(--color-accent)" }}
              >
                {/* Custom Page-Corner Mini SVG Icon */}
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  className="transition-all duration-300"
                  style={{
                    transform: isCurrent ? "scale(1.2) translateY(-2px)" : "scale(1)",
                  }}
                >
                  {/* Page base boundary */}
                  <path
                    d="M1,1 L9,1 L13,5 L13,17 L1,17 Z"
                    fill={isCurrent ? "var(--color-accent)" : "none"}
                    stroke={isCurrent ? "var(--color-accent)" : "var(--color-border)"}
                    strokeWidth="1.2"
                    className="transition-all duration-300"
                  />
                  {/* Folded corner tab */}
                  <path
                    d="M9,1 L9,5 L13,5"
                    fill="none"
                    stroke={isCurrent ? "var(--color-surface)" : "var(--color-border)"}
                    strokeWidth="1.2"
                    className="transition-all duration-300"
                  />
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

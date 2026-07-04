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
    borderWidth: "var(--border-width)",
    borderColor: "var(--color-border)",
    borderStyle: "solid" as const,
    borderRadius: "var(--radius-theme)",
    background: "var(--color-surface)",
    color: disabled ? "var(--color-text-secondary)" : "var(--color-text-primary)",
    opacity: disabled ? 0.45 : 1,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, currentStep - 1))}
          disabled={atStart}
          style={navButtonStyle(atStart)}
          className="min-h-11 min-w-[5rem] px-5 py-2.5 text-sm font-semibold transition-transform active:scale-95 disabled:active:scale-100"
        >
          Back
        </button>

        <div className="text-center">
          <p
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Step {currentStep} of {total}
          </p>
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            {step?.title}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onChange(Math.min(total, currentStep + 1))}
          disabled={atEnd}
          style={navButtonStyle(atEnd)}
          className="min-h-11 min-w-[5rem] px-5 py-2.5 text-sm font-semibold transition-transform active:scale-95 disabled:active:scale-100"
        >
          Next
        </button>
      </div>

      <p
        className="step-instruction text-center text-sm sm:text-left"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {step?.instruction}
      </p>

      <div role="group" aria-label="Jump to a step" className="flex flex-wrap justify-center sm:justify-start">
        {steps.map((s) => {
          const isCurrent = s.id === currentStep;
          return (
            <button
              key={s.id}
              type="button"
              aria-label={`Go to step ${s.id}: ${s.title}`}
              aria-current={isCurrent ? "step" : undefined}
              onClick={() => onChange(s.id)}
              className="flex h-7 w-7 shrink-0 items-center justify-center"
            >
              <span
                className="h-3 w-3 rounded-full transition-transform"
                style={{
                  background: isCurrent ? "var(--color-accent)" : "var(--color-border)",
                  transform: isCurrent ? "scale(1.5)" : "scale(1)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

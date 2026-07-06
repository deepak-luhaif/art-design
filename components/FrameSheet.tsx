import StepCanvas from "./StepCanvas";
import type { Tutorial } from "@/lib/types";

type Props = {
  tutorial: Tutorial;
  currentStep: number;
  onSelectStep: (step: number) => void;
};

export default function FrameSheet({ tutorial, currentStep, onSelectStep }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center opacity-85">
        <span
          className="text-xs uppercase tracking-widest font-semibold"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Sketchbook Contact Sheet
        </span>
        <span
          className="text-xs italic"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Select a page to jump directly to that step
        </span>
      </div>
      
      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        role="list"
        aria-label={`All ${tutorial.steps.length} steps of the ${tutorial.name} tutorial`}
      >
        {tutorial.steps.map((s) => {
          const isCurrent = s.id === currentStep;
          return (
            <button
              key={s.id}
              type="button"
              role="listitem"
              onClick={() => onSelectStep(s.id)}
              aria-current={isCurrent ? "step" : undefined}
              aria-label={`Jump to step ${s.id}: ${s.title}`}
              className="flex flex-col gap-2 p-3 text-left transition-all duration-200 bg-[var(--color-surface)] hover:border-[var(--color-accent)] sketchbook-page"
              style={{
                borderWidth: "var(--border-width)",
                borderColor: isCurrent ? "var(--color-accent)" : "var(--color-border)",
                borderStyle: "solid",
                boxShadow: isCurrent ? "0 2px 8px rgba(138, 106, 63, 0.15)" : "none",
              }}
            >
              <div
                className="aspect-square w-full overflow-hidden border border-[var(--color-border)] p-2"
                style={{
                  background: "var(--color-bg)",
                }}
              >
                {/* Render static sketches in contact sheet, no animations */}
                <StepCanvas tutorial={tutorial} currentStep={s.id} animate={false} />
              </div>
              <p
                className="truncate text-xs font-semibold"
                style={{
                  color: isCurrent ? "var(--color-accent)" : "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {s.id}. {s.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

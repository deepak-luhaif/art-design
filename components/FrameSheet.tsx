import StepCanvas from "./StepCanvas";
import type { Tutorial } from "@/lib/types";

type Props = {
  tutorial: Tutorial;
  currentStep: number;
  onSelectStep: (step: number) => void;
};

export default function FrameSheet({ tutorial, currentStep, onSelectStep }: Props) {
  return (
    <div
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
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
            className="flex flex-col gap-1.5 p-2 text-left transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-surface)",
              borderWidth: "var(--border-width)",
              borderColor: isCurrent ? "var(--color-accent)" : "var(--color-border)",
              borderStyle: "solid",
              borderRadius: "var(--radius-theme-sm)",
              boxShadow: isCurrent ? "var(--shadow-card)" : "none",
            }}
          >
            <div
              className="aspect-square w-full overflow-hidden"
              style={{
                borderRadius: "calc(var(--radius-theme-sm) - 4px)",
                background: "var(--color-bg)",
              }}
            >
              <StepCanvas tutorial={tutorial} currentStep={s.id} />
            </div>
            <p className="truncate text-[11px] font-medium" style={{ color: "var(--color-text-secondary)" }}>
              {s.id}. {s.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}

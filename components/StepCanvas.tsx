import type { Tutorial } from "@/lib/types";

type Props = {
  tutorial: Tutorial;
  currentStep: number;
  className?: string;
};

export default function StepCanvas({ tutorial, currentStep, className }: Props) {
  const visible = tutorial.elements.filter(
    (e) => e.step <= currentStep && (e.hideAt === undefined || currentStep < e.hideAt)
  );
  const stepData = tutorial.steps.find((s) => s.id === currentStep);
  const label = stepData
    ? `${tutorial.name} drawing, step ${currentStep} of ${tutorial.steps.length}: ${stepData.title}. ${stepData.instruction}`
    : `${tutorial.name} drawing`;

  return (
    <svg
      viewBox={tutorial.viewBox}
      role="img"
      aria-label={label}
      className={className}
      style={{ color: "var(--color-text-primary)", width: "100%", height: "100%", display: "block" }}
    >
      {visible.map((e) => e.element)}
    </svg>
  );
}

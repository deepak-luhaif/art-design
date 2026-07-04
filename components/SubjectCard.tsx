import Link from "next/link";
import StepCanvas from "./StepCanvas";
import type { Tutorial } from "@/lib/types";

export default function SubjectCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="flex flex-col gap-4 p-5 transition-transform hover:-translate-y-1"
      style={{
        background: "var(--color-surface)",
        borderWidth: "var(--border-width)",
        borderColor: "var(--color-border)",
        borderStyle: "solid",
        borderRadius: "var(--radius-theme-lg)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        className="aspect-square w-full overflow-hidden"
        style={{ borderRadius: "var(--radius-theme)", background: "var(--color-bg)" }}
      >
        <StepCanvas tutorial={tutorial} currentStep={tutorial.steps.length} />
      </div>
      <div>
        <h3
          className="text-xl font-bold"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
        >
          {tutorial.name}
        </h3>
        <p className="mt-1 text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {tutorial.subtitle}
        </p>
      </div>
      <span className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--color-accent)" }}>
        Start drawing →
      </span>
    </Link>
  );
}

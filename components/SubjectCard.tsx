import Link from "next/link";
import StepCanvas from "./StepCanvas";
import type { Tutorial } from "@/lib/types";

export default function SubjectCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="flex flex-col gap-4 p-6 transition-all duration-300 hover:border-[var(--color-accent)] bg-[var(--color-surface)] sketchbook-page"
      style={{
        borderWidth: "var(--border-width)",
        borderColor: "var(--color-border)",
        borderStyle: "solid",
        borderRadius: "var(--radius-theme-lg)",
      }}
    >
      <div
        className="aspect-square w-full overflow-hidden flex items-center justify-center p-4 border border-[var(--color-border)]"
        style={{ background: "var(--color-bg)" }}
      >
        {/* Render final step instantly as preview, disabled animations */}
        <StepCanvas tutorial={tutorial} currentStep={tutorial.steps.length} animate={false} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-baseline gap-2">
          <h3
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            {tutorial.name}
          </h3>
          <span className="text-xs uppercase tracking-widest opacity-60 font-semibold">
            {tutorial.difficulty}
          </span>
        </div>
        <p className="text-sm line-clamp-2" style={{ color: "var(--color-text-secondary)" }}>
          {tutorial.description}
        </p>
        <p className="text-xs italic opacity-75 mt-1" style={{ color: "var(--color-text-secondary)" }}>
          {tutorial.steps.length} frames
        </p>
      </div>
      <span className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold border-b border-transparent hover:border-[var(--color-accent)] transition-all" style={{ color: "var(--color-accent)" }}>
        Open sketchbook →
      </span>
    </Link>
  );
}

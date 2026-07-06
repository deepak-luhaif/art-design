import Link from "next/link";
import StepCanvas from "./StepCanvas";
import type { Tutorial } from "@/lib/types";

export default function SubjectCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Link
      href={`/tutorials/${tutorial.slug}`}
      className="group flex flex-col gap-4 p-6 transition-all duration-300 bg-[var(--color-surface)] sketchbook-page hover:shadow-lg hover:border-[var(--color-accent)] active:scale-98"
      style={{
        borderWidth: "var(--border-width)",
        borderColor: "var(--color-border)",
        borderStyle: "solid",
        borderRadius: "var(--radius-theme-lg)",
      }}
    >
      <div
        className="aspect-square w-full overflow-hidden flex items-center justify-center p-4 border border-[var(--color-border)] transition-all duration-300 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-surface)]"
        style={{ background: "var(--color-bg)" }}
      >
        {/* Render final step instantly as preview, disabled animations */}
        <StepCanvas tutorial={tutorial} currentStep={tutorial.steps.length} animate={false} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-baseline gap-2">
          <h3
            className="text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            {tutorial.name}
          </h3>
          <span
            className="text-xs uppercase tracking-widest font-semibold px-2 py-1 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-surface)]"
            style={{
              opacity: 0.6,
              background: "transparent",
              color: "var(--color-text-secondary)",
            }}
          >
            {tutorial.difficulty}
          </span>
        </div>
        <p className="text-sm line-clamp-2 transition-colors duration-300" style={{ color: "var(--color-text-secondary)" }}>
          {tutorial.description}
        </p>
        <p
          className="text-xs italic opacity-75 mt-1 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {tutorial.steps.length} frames
        </p>
      </div>
      <span
        className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold border-b-2 transition-all duration-300"
        style={{
          color: "var(--color-accent)",
          borderColor: "transparent",
        }}
      >
        Open sketchbook
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

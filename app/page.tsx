import SubjectCard from "@/components/SubjectCard";
import { tutorials } from "@/lib/tutorials";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 sm:py-14">
      <section className="flex flex-col items-start gap-5 rounded-[var(--radius-theme-lg)] py-6">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          Step by step, at your own pace
        </p>
        <h1
          className="max-w-2xl text-4xl leading-[1.05] font-bold sm:text-6xl"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
        >
          Pick a subject. Draw it one line at a time.
        </h1>
        <p className="max-w-xl text-base sm:text-lg" style={{ color: "var(--color-text-secondary)" }}>
          Contour breaks every drawing into 20&ndash;30 small, beginner-friendly steps. Watch the
          picture build up frame by frame, jump back and forth freely, and revisit any step until
          it clicks.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            Choose what to draw
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <SubjectCard key={tutorial.slug} tutorial={tutorial} />
          ))}
          <div
            className="flex flex-col items-center justify-center gap-2 p-5 text-center"
            style={{
              borderWidth: "var(--border-width)",
              borderColor: "var(--color-border)",
              borderStyle: "dashed",
              borderRadius: "var(--radius-theme-lg)",
              color: "var(--color-text-secondary)",
            }}
          >
            <p className="text-sm font-semibold">More subjects coming soon</p>
            <p className="text-xs">New tutorials drop straight into this grid.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

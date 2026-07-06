import SubjectCard from "@/components/SubjectCard";
import { tutorials } from "@/lib/tutorials";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:py-16">
      <section className="flex flex-col items-start gap-4 max-w-3xl">
        <p
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
        >
          Slow drawing, one pencil stroke at a time
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "var(--tracking-display)",
            color: "var(--color-text-primary)",
          }}
        >
          Watch the lines draw themselves. Learn to see.
        </h1>
        <p
          className="text-base md:text-lg leading-relaxed mt-2"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
        >
          Contour is a quiet, interactive sketchbook. Rather than flashing completed outlines on a screen, each step’s line art draws itself in a real pencil-tracing sequence. Step backward and forward freely, study the construction lines, and take your time.
        </p>
      </section>

      <hr className="border-[var(--color-border)] w-full" />

      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-2xl font-bold md:text-3xl"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "var(--tracking-display)" }}
          >
            The Tutorial Library
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <SubjectCard key={tutorial.slug} tutorial={tutorial} />
          ))}
          
          <div
            className="flex flex-col items-center justify-center gap-3 p-6 text-center border-2 border-dashed bg-transparent"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider">More pages to come</p>
            <p className="text-xs max-w-[200px] leading-relaxed opacity-75">
              We regularly expand the library with new subjects and construction methods.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

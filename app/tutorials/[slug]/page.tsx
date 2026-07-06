import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TutorialPlayer from "@/components/TutorialPlayer";
import { getTutorial, tutorials } from "@/lib/tutorials";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) return {};
  return {
    title: `Draw a ${tutorial.name} — Contour`,
    description: tutorial.description,
  };
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  if (!tutorial) notFound();

  return <TutorialPlayer tutorial={tutorial} />;
}

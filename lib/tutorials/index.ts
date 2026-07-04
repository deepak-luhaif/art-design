import type { Tutorial } from "@/lib/types";
import { catTutorial } from "./cat";
import { personTutorial } from "./person";

export const tutorials: Tutorial[] = [catTutorial, personTutorial];

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

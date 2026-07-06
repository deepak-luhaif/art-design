import type { Tutorial } from "@/lib/types";
import { catTutorial } from "./cat";
import { humanFigureTutorial } from "./human-figure";
import { animeCharacterTutorial } from "./anime-character";
import { dogTutorial } from "./dog";
import { flowerTutorial } from "./flower";
import { carTutorial } from "./car";

export const tutorials: Tutorial[] = [
  catTutorial,
  humanFigureTutorial,
  animeCharacterTutorial,
  dogTutorial,
  flowerTutorial,
  carTutorial
];

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

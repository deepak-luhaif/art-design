import type { Step } from "../types";

const subjectPrefixes = new Set([
  "anime",
  "car",
  "cat",
  "dog",
  "human",
  "rose",
]);

function labelForStroke(strokeId: string) {
  const words = strokeId.split("-");

  if (subjectPrefixes.has(words[0])) {
    words.shift();
  }

  const direction = words.at(-1);
  if (direction === "left" || direction === "right") {
    words.unshift(words.pop()!);
  }

  return words.join(" ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

/**
 * Turns compound tutorial frames into one-action beginner frames.
 * Guides are hidden only after the final part of the original frame is drawn.
 */
export function expandBeginnerSteps(steps: Step[]): Step[] {
  let nextId = 1;

  return steps.flatMap((step) => {
    if (step.strokes.length <= 1) {
      return [{ ...step, id: nextId++ }];
    }

    return step.strokes.map((stroke, index) => {
      const label = labelForStroke(stroke.id);
      const isLastPart = index === step.strokes.length - 1;

      return {
        id: nextId++,
        title: `${step.title}: ${label}`,
        instruction: `Draw only the ${label.toLowerCase()} in this frame. Use the guides and nearby finished lines as anchors. Work slowly, then compare its size, angle, and spacing before continuing.`,
        strokes: [stroke],
        ...(isLastPart && step.hideStrokeIds
          ? { hideStrokeIds: step.hideStrokeIds }
          : {}),
      };
    });
  });
}

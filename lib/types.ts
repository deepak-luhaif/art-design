export type ShapeSpec =
  | { type: "circle"; cx: number; cy: number; r: number }
  | { type: "line"; x1: number; y1: number; x2: number; y2: number }
  | { type: "ellipse"; cx: number; cy: number; rx: number; ry: number }
  | { type: "path"; d: string };

export type Stroke = {
  id: string;
  shape: ShapeSpec;
  duration?: number; // duration of draw in seconds
  isGuide?: boolean;
};

export type Step = {
  id: number;
  title: string;
  instruction: string;
  strokes: Stroke[];
  hideStrokeIds?: string[];
};

export type Tutorial = {
  slug: string;
  name: string;
  description: string;
  difficulty: "easy" | "medium";
  viewBox: string;
  steps: Step[];
};

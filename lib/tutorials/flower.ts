import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const flowerTutorial: Tutorial = {
  slug: "flower",
  name: "Botanical Rose",
  description:
    "A natural rose study built from a tight center, overlapping petal cups, an elegant stem, and two structured leaves.",
  difficulty: "easy",
  viewBox: "0 0 400 430",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Bloom guides",
      instruction: "Place a small circle for the bud center and a wider oval for the full bloom.",
      strokes: [
        { id: "rose-core-guide", shape: { type: "circle", cx: 200, cy: 142, r: 25 }, isGuide: true },
        { id: "rose-bloom-guide", shape: { type: "ellipse", cx: 200, cy: 150, rx: 102, ry: 88 }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Stem gesture",
      instruction: "Draw a single relaxed curve from the bloom toward the bottom of the page.",
      strokes: [
        { id: "rose-stem-guide", shape: { type: "path", d: "M202,222 C190,278 213,328 197,405" }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Rose center",
      instruction: "Begin with a tight broken spiral instead of a perfect target-like circle.",
      strokes: [
        { id: "rose-center", shape: { type: "path", d: "M190,145 C190,130 211,127 216,140 C220,153 204,163 193,155 C185,149 190,138 201,138 C208,139 209,147 204,151" } },
      ],
      hideStrokeIds: ["rose-core-guide"],
    },
    {
      id: 4,
      title: "Inner cup",
      instruction: "Wrap three short, uneven petals around the center to form the first cup.",
      strokes: [
        { id: "rose-inner-top", shape: { type: "path", d: "M177,143 C177,118 205,108 224,124 C232,138 222,151 211,158" } },
        { id: "rose-inner-left", shape: { type: "path", d: "M177,143 C164,149 165,171 183,181 C197,184 210,173 211,158" } },
        { id: "rose-inner-right", shape: { type: "path", d: "M224,124 C241,130 247,152 237,169 C228,180 214,181 201,176" } },
      ],
    },
    {
      id: 5,
      title: "Upper petals",
      instruction: "Add two broad petals whose rims overlap and turn away from the center.",
      strokes: [
        { id: "rose-upper-left", shape: { type: "path", d: "M165,158 C143,132 151,96 183,82 C206,75 224,91 224,124" } },
        { id: "rose-upper-right", shape: { type: "path", d: "M207,92 C233,72 268,92 270,125 C269,150 253,166 237,169" } },
      ],
    },
    {
      id: 6,
      title: "Side petals",
      instruction: "Open the bloom with a cupped petal on each side, keeping their silhouettes different.",
      strokes: [
        { id: "rose-side-left", shape: { type: "path", d: "M166,112 C133,99 104,120 104,153 C105,181 127,202 159,203 C171,194 178,185 183,181" } },
        { id: "rose-side-right", shape: { type: "path", d: "M250,106 C280,101 300,124 296,157 C291,187 270,204 241,203 C228,195 213,184 201,176" } },
      ],
    },
    {
      id: 7,
      title: "Lower petal bowl",
      instruction: "Close the flower with two deep lower petals that carry the weight of the bloom.",
      strokes: [
        { id: "rose-lower-left", shape: { type: "path", d: "M104,153 C92,180 106,215 139,231 C163,243 188,232 202,211 C195,197 184,187 171,180" } },
        { id: "rose-lower-right", shape: { type: "path", d: "M296,157 C304,188 287,221 254,234 C231,243 211,230 202,211 C214,194 225,183 237,169" } },
      ],
      hideStrokeIds: ["rose-bloom-guide"],
    },
    {
      id: 8,
      title: "Petal folds",
      instruction: "Use a few interior curves to show where petals turn and disappear behind one another.",
      strokes: [
        { id: "rose-folds", shape: { type: "path", d: "M139,124 C146,151 158,169 183,181 M270,125 C263,153 253,181 229,194 M139,231 C153,213 173,205 202,211 M254,234 C242,213 225,205 202,211" } },
      ],
    },
    {
      id: 9,
      title: "Sepals",
      instruction: "Add three narrow sepals beneath the bloom before drawing the stem.",
      strokes: [
        { id: "rose-sepals", shape: { type: "path", d: "M160,228 C173,245 186,250 200,248 C215,250 229,245 243,230 M184,239 L173,264 M200,248 L201,270 M217,240 L228,262" } },
      ],
    },
    {
      id: 10,
      title: "Stem",
      instruction: "Ink two subtly changing contours around the stem gesture; avoid ruler-straight lines.",
      strokes: [
        { id: "rose-stem-left", shape: { type: "path", d: "M194,248 C185,293 205,336 190,405" } },
        { id: "rose-stem-right", shape: { type: "path", d: "M207,248 C200,291 220,336 203,406" } },
      ],
      hideStrokeIds: ["rose-stem-guide"],
    },
    {
      id: 11,
      title: "Left leaf",
      instruction: "Branch a long leaf to the left and close it with a serrated, pointed silhouette.",
      strokes: [
        { id: "rose-leaf-left", shape: { type: "path", d: "M195,302 C165,278 131,282 111,309 C137,332 169,329 197,312 Z" } },
        { id: "rose-leaf-left-rib", shape: { type: "path", d: "M193,307 C163,305 138,307 116,309 M164,305 L148,291 M153,308 L137,323 M177,305 L166,294 M175,308 L163,320" } },
      ],
    },
    {
      id: 12,
      title: "Right leaf",
      instruction: "Balance the stem with a smaller leaf pointing in the opposite direction.",
      strokes: [
        { id: "rose-leaf-right", shape: { type: "path", d: "M205,345 C233,326 263,336 276,361 C253,379 226,369 205,355 Z" } },
        { id: "rose-leaf-right-rib", shape: { type: "path", d: "M208,351 C232,350 253,355 272,361 M232,350 L244,339 M242,354 L254,369 M220,350 L229,341" } },
      ],
    },
    {
      id: 13,
      title: "Botanical finish",
      instruction: "Finish with two small thorns and three short petal accents near the center.",
      strokes: [
        { id: "rose-thorns", shape: { type: "path", d: "M194,280 L181,271 L193,289 M205,374 L218,365 L204,383" } },
        { id: "rose-center-accents", shape: { type: "path", d: "M183,132 Q193,121 205,123 M188,167 Q200,174 214,166 M225,141 Q231,151 226,160" } },
      ],
    },
  ]),
};

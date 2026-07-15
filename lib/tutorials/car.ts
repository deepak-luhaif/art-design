import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const carTutorial: Tutorial = {
  slug: "car",
  name: "Classic Coupe",
  description:
    "A clean side-profile coupe built from wheel rhythm, a low body line, a flowing roof, and purposeful mechanical details.",
  difficulty: "medium",
  viewBox: "0 0 440 300",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Wheel rhythm",
      instruction: "Place two equal circles on one horizontal axis before drawing any bodywork.",
      strokes: [
        { id: "car-wheel-guide-left", shape: { type: "circle", cx: 125, cy: 220, r: 38 }, isGuide: true },
        { id: "car-wheel-guide-right", shape: { type: "circle", cx: 330, cy: 220, r: 38 }, isGuide: true },
        { id: "car-ground-guide", shape: { type: "line", x1: 55, y1: 260, x2: 390, y2: 260 }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Body envelope",
      instruction: "Sketch a low horizontal box that clears the top third of both wheels.",
      strokes: [
        { id: "car-body-guide", shape: { type: "path", d: "M45,164 L398,164 L398,225 L45,225 Z" }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Cabin envelope",
      instruction: "Set a tapered cabin above the wheelbase, slightly behind the midpoint.",
      strokes: [
        { id: "car-cabin-guide", shape: { type: "path", d: "M143,164 L188,94 L288,94 L334,164 Z" }, isGuide: true },
      ],
    },
    {
      id: 4,
      title: "Main silhouette",
      instruction: "Ink the hood, roof, rear deck, and bumpers as one flowing profile.",
      strokes: [
        { id: "car-silhouette", shape: { type: "path", d: "M44,184 C66,173 95,169 139,166 C155,139 169,110 194,92 C222,79 269,83 291,99 C310,115 326,140 340,160 C363,163 384,169 399,181 L404,213 C393,222 380,226 365,227 C357,188 304,177 278,211 C270,220 267,229 267,238 L188,238 C188,218 182,202 168,191 C139,168 91,184 88,227 L54,224 C43,216 39,199 44,184 Z" } },
      ],
      hideStrokeIds: ["car-body-guide", "car-cabin-guide"],
    },
    {
      id: 5,
      title: "Wheel arches",
      instruction: "Cut two confident arches into the lower body, matching the wheel guides.",
      strokes: [
        { id: "car-arch-left", shape: { type: "path", d: "M88,227 C89,184 139,168 168,191 C182,202 188,218 188,238" } },
        { id: "car-arch-right", shape: { type: "path", d: "M267,238 C267,211 287,188 313,184 C339,180 361,198 365,227" } },
      ],
    },
    {
      id: 6,
      title: "Tires",
      instruction: "Ink the tires over the guides, keeping both wheel sizes identical.",
      strokes: [
        { id: "car-tire-left", shape: { type: "circle", cx: 125, cy: 220, r: 35 } },
        { id: "car-tire-right", shape: { type: "circle", cx: 330, cy: 220, r: 35 } },
      ],
      hideStrokeIds: ["car-wheel-guide-left", "car-wheel-guide-right"],
    },
    {
      id: 7,
      title: "Rims",
      instruction: "Add nested rim circles and compact center hubs.",
      strokes: [
        { id: "car-rim-left", shape: { type: "circle", cx: 125, cy: 220, r: 22 } },
        { id: "car-rim-right", shape: { type: "circle", cx: 330, cy: 220, r: 22 } },
        { id: "car-hub-left", shape: { type: "circle", cx: 125, cy: 220, r: 6 } },
        { id: "car-hub-right", shape: { type: "circle", cx: 330, cy: 220, r: 6 } },
      ],
    },
    {
      id: 8,
      title: "Window shape",
      instruction: "Follow the roof with one dark glass shape, divided by a slightly leaning pillar.",
      strokes: [
        { id: "car-windows", shape: { type: "path", d: "M153,158 C166,133 179,108 199,96 C221,88 259,91 280,104 C297,118 310,139 321,158 Z" } },
        { id: "car-b-pillar", shape: { type: "line", x1: 241, y1: 92, x2: 246, y2: 158 } },
      ],
    },
    {
      id: 9,
      title: "Belt line",
      instruction: "Run a single rising line from the front fender through the rear quarter panel.",
      strokes: [
        { id: "car-belt-line", shape: { type: "path", d: "M57,184 C128,174 209,169 319,169 C349,170 375,176 397,184" } },
      ],
    },
    {
      id: 10,
      title: "Doors and handles",
      instruction: "Divide the body with one front door and a shorter rear seam; keep gaps consistent.",
      strokes: [
        { id: "car-door-front", shape: { type: "path", d: "M151,168 L158,224 Q198,232 241,224 L244,164" } },
        { id: "car-door-rear", shape: { type: "path", d: "M244,164 L248,222 Q282,226 307,211" } },
        { id: "car-handles", shape: { type: "path", d: "M208,181 L224,181 M269,181 L283,181" } },
      ],
    },
    {
      id: 11,
      title: "Lights and bumpers",
      instruction: "Use compact graphic shapes for the headlamp, tail lamp, and bumper cuts.",
      strokes: [
        { id: "car-headlight", shape: { type: "path", d: "M49,181 L81,177 L74,191 L45,195" } },
        { id: "car-tail-light", shape: { type: "path", d: "M371,173 L397,181 L398,195 L376,192 Z" } },
        { id: "car-bumpers", shape: { type: "path", d: "M42,207 L66,207 M380,211 L404,210" } },
      ],
    },
    {
      id: 12,
      title: "Lower structure",
      instruction: "Connect the wheel openings with a clean rocker line and a shallow lower shadow.",
      strokes: [
        { id: "car-rocker", shape: { type: "path", d: "M188,238 C211,241 244,241 267,238" } },
        { id: "car-lower-shadow", shape: { type: "path", d: "M192,228 Q226,234 263,228" } },
      ],
    },
    {
      id: 13,
      title: "Mechanical accents",
      instruction: "Finish with mirrors, wheel spokes, and two restrained hood and trunk seams.",
      strokes: [
        { id: "car-mirror", shape: { type: "path", d: "M151,151 C141,146 132,150 134,158 L153,160" } },
        { id: "car-wheel-spokes", shape: { type: "path", d: "M125,198 L125,242 M103,220 L147,220 M109,204 L141,236 M141,204 L109,236 M330,198 L330,242 M308,220 L352,220 M314,204 L346,236 M346,204 L314,236" } },
        { id: "car-panel-seams", shape: { type: "path", d: "M83,174 Q112,174 139,166 M340,160 Q354,166 371,173" } },
      ],
      hideStrokeIds: ["car-ground-guide"],
    },
  ]),
};

import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const catTutorial: Tutorial = {
  slug: "cat",
  name: "Studio Cat",
  description:
    "A poised seated cat built from soft construction shapes, confident contours, and restrained facial detail.",
  difficulty: "easy",
  viewBox: "0 0 400 430",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Head shape",
      instruction: "Begin with a wide oval. Keep it light—the cheeks will extend beyond it.",
      strokes: [
        { id: "cat-head-guide", shape: { type: "ellipse", cx: 200, cy: 128, rx: 73, ry: 67 }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Body shape",
      instruction: "Place a tall pear-shaped oval beneath the head to establish the seated pose.",
      strokes: [
        { id: "cat-body-guide", shape: { type: "ellipse", cx: 200, cy: 294, rx: 76, ry: 105 }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Face guides",
      instruction: "Add a center line and a gently curved eye line to keep the expression balanced.",
      strokes: [
        { id: "cat-face-center", shape: { type: "path", d: "M200,65 C197,102 198,142 200,175" }, isGuide: true },
        { id: "cat-eye-guide", shape: { type: "path", d: "M145,121 Q200,108 255,121" }, isGuide: true },
      ],
    },
    {
      id: 4,
      title: "Ears and face",
      instruction: "Ink two tapered ears, then connect them with one smooth cheek-and-chin contour.",
      strokes: [
        { id: "cat-ear-left", shape: { type: "path", d: "M143,78 C132,56 132,34 151,57 L165,72" } },
        { id: "cat-ear-right", shape: { type: "path", d: "M235,72 L249,57 C268,34 268,56 257,78" } },
        { id: "cat-face", shape: { type: "path", d: "M143,78 C129,92 124,111 127,135 C131,171 160,195 200,197 C240,195 269,171 273,135 C276,111 271,92 257,78 C235,62 165,62 143,78 Z" } },
        { id: "cat-inner-ears", shape: { type: "path", d: "M143,67 Q145,51 153,64 M247,64 Q255,51 257,67" } },
      ],
      hideStrokeIds: ["cat-head-guide", "cat-face-center", "cat-eye-guide"],
    },
    {
      id: 5,
      title: "Calm eyes",
      instruction: "Draw two low almond shapes. Small pupils give the cat a quiet, attentive gaze.",
      strokes: [
        { id: "cat-eye-left", shape: { type: "path", d: "M151,123 C161,112 178,112 188,124 C179,136 161,136 151,123 Z" } },
        { id: "cat-eye-right", shape: { type: "path", d: "M212,124 C222,112 239,112 249,123 C239,136 221,136 212,124 Z" } },
        { id: "cat-pupil-left", shape: { type: "ellipse", cx: 170, cy: 124, rx: 3.5, ry: 8 } },
        { id: "cat-pupil-right", shape: { type: "ellipse", cx: 230, cy: 124, rx: 3.5, ry: 8 } },
      ],
    },
    {
      id: 6,
      title: "Muzzle",
      instruction: "Use a tiny softened triangle for the nose and two shallow curves for the mouth.",
      strokes: [
        { id: "cat-nose", shape: { type: "path", d: "M192,147 Q200,142 208,147 L200,155 Z" } },
        { id: "cat-mouth", shape: { type: "path", d: "M200,155 C199,165 188,168 182,161 M200,155 C201,165 212,168 218,161" } },
        { id: "cat-muzzle", shape: { type: "path", d: "M174,149 Q184,143 191,150 M209,150 Q216,143 226,149" } },
      ],
    },
    {
      id: 7,
      title: "Whiskers",
      instruction: "Pull three long, relaxed strokes outward from each cheek.",
      strokes: [
        { id: "cat-whiskers", shape: { type: "path", d: "M164,153 C143,150 126,145 110,138 M163,160 C140,160 121,160 104,164 M166,167 C145,173 128,181 114,190 M236,153 C257,150 274,145 290,138 M237,160 C260,160 279,160 296,164 M234,167 C255,173 272,181 286,190" } },
      ],
    },
    {
      id: 8,
      title: "Body contour",
      instruction: "Shape the shoulders into a tapered chest, then broaden gently at the seated haunches.",
      strokes: [
        { id: "cat-body", shape: { type: "path", d: "M165,190 C143,212 132,249 130,300 C128,343 143,375 168,390 C187,400 213,400 232,390 C257,375 272,343 270,300 C268,249 257,212 235,190" } },
        { id: "cat-chest", shape: { type: "path", d: "M164,202 Q200,220 236,202" } },
      ],
      hideStrokeIds: ["cat-body-guide"],
    },
    {
      id: 9,
      title: "Front legs",
      instruction: "Drop two long, slightly tapering lines from the chest toward the paws.",
      strokes: [
        { id: "cat-front-legs", shape: { type: "path", d: "M178,220 C177,270 174,326 170,365 M222,220 C223,270 226,326 230,365" } },
      ],
    },
    {
      id: 10,
      title: "Paws",
      instruction: "Close each leg with a flattened oval and divide the toes with two short marks.",
      strokes: [
        { id: "cat-paw-left", shape: { type: "path", d: "M146,373 C150,360 170,357 184,368 C191,380 181,390 164,390 C150,390 143,383 146,373 Z" } },
        { id: "cat-paw-right", shape: { type: "path", d: "M216,368 C230,357 250,360 254,373 C257,383 250,390 236,390 C219,390 209,380 216,368 Z" } },
        { id: "cat-toes", shape: { type: "path", d: "M160,370 L160,383 M173,369 L174,383 M227,369 L226,383 M240,370 L240,383" } },
      ],
    },
    {
      id: 11,
      title: "Haunches",
      instruction: "Add two broad arcs behind the front paws to show the folded back legs.",
      strokes: [
        { id: "cat-haunch-left", shape: { type: "path", d: "M145,289 C116,320 119,370 153,386" } },
        { id: "cat-haunch-right", shape: { type: "path", d: "M255,289 C284,320 281,370 247,386" } },
      ],
    },
    {
      id: 12,
      title: "Tail guide",
      instruction: "Plan a large S-curve rising behind the right haunch.",
      strokes: [
        { id: "cat-tail-guide", shape: { type: "path", d: "M258,342 C322,330 326,249 286,225" }, isGuide: true },
      ],
    },
    {
      id: 13,
      title: "Tail",
      instruction: "Build thickness around the guide, tapering the tail as it turns back toward the body.",
      strokes: [
        { id: "cat-tail", shape: { type: "path", d: "M255,349 C300,348 329,309 322,268 C318,242 301,218 283,218 C267,218 260,233 269,244 C282,234 296,247 300,267 C307,297 289,323 258,329" } },
      ],
      hideStrokeIds: ["cat-tail-guide"],
    },
    {
      id: 14,
      title: "Finishing accents",
      instruction: "Finish with two brow marks and a few directional chest hairs—enough texture without clutter.",
      strokes: [
        { id: "cat-brows", shape: { type: "path", d: "M153,105 Q170,98 186,105 M214,105 Q230,98 247,105" } },
        { id: "cat-chest-fur", shape: { type: "path", d: "M188,207 L196,216 L202,207 L209,216 L216,207" } },
      ],
    },
  ]),
};

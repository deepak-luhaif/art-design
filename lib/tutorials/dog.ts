import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const dogTutorial: Tutorial = {
  slug: "dog",
  name: "Floppy-Ear Pup",
  description:
    "A friendly seated puppy shaped from a rounded skull, soft muzzle, hanging ears, and a grounded triangular pose.",
  difficulty: "easy",
  viewBox: "0 0 400 430",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Skull guide",
      instruction: "Draw a broad circle for the top of the puppy’s head.",
      strokes: [
        { id: "dog-head-guide", shape: { type: "circle", cx: 200, cy: 125, r: 72 }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Muzzle guide",
      instruction: "Overlap the lower half with a short oval to reserve space for the muzzle.",
      strokes: [
        { id: "dog-muzzle-guide", shape: { type: "ellipse", cx: 200, cy: 157, rx: 45, ry: 31 }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Body guide",
      instruction: "Place a tall oval under the head and widen it toward the seated hips.",
      strokes: [
        { id: "dog-body-guide", shape: { type: "ellipse", cx: 200, cy: 300, rx: 74, ry: 103 }, isGuide: true },
      ],
    },
    {
      id: 4,
      title: "Head contour",
      instruction: "Ink a softly squared head with fuller cheeks and a small chin.",
      strokes: [
        { id: "dog-head", shape: { type: "path", d: "M145,78 C160,57 181,50 200,50 C219,50 240,57 255,78 C270,98 270,132 258,157 C247,181 226,194 200,194 C174,194 153,181 142,157 C130,132 130,98 145,78 Z" } },
      ],
      hideStrokeIds: ["dog-head-guide"],
    },
    {
      id: 5,
      title: "Floppy ears",
      instruction: "Hang a long tapered ear from each side, keeping their curves loose and asymmetrical.",
      strokes: [
        { id: "dog-ear-left", shape: { type: "path", d: "M149,78 C121,76 105,96 108,131 C110,159 124,181 141,176 C153,172 148,144 143,123 C138,103 140,88 149,78 Z" } },
        { id: "dog-ear-right", shape: { type: "path", d: "M251,78 C279,76 295,96 292,131 C290,159 276,181 259,176 C247,172 252,144 257,123 C262,103 260,88 251,78 Z" } },
        { id: "dog-ear-folds", shape: { type: "path", d: "M132,98 C124,119 128,144 139,158 M268,98 C276,119 272,144 261,158" } },
      ],
    },
    {
      id: 6,
      title: "Eyes and brows",
      instruction: "Set two rounded eyes beneath gentle brow curves for an open, friendly expression.",
      strokes: [
        { id: "dog-brows", shape: { type: "path", d: "M151,104 Q170,92 185,102 M215,102 Q230,92 249,104" } },
        { id: "dog-eye-left", shape: { type: "ellipse", cx: 171, cy: 119, rx: 10, ry: 13 } },
        { id: "dog-eye-right", shape: { type: "ellipse", cx: 229, cy: 119, rx: 10, ry: 13 } },
        { id: "dog-pupils", shape: { type: "path", d: "M171,113 L171,123 M229,113 L229,123" } },
      ],
    },
    {
      id: 7,
      title: "Muzzle",
      instruction: "Trace two soft muzzle pads around a compact nose, then remove the guide.",
      strokes: [
        { id: "dog-muzzle", shape: { type: "path", d: "M157,151 C166,138 184,139 200,149 C216,139 234,138 243,151 C251,166 237,181 218,178 C211,177 205,174 200,170 C195,174 189,177 182,178 C163,181 149,166 157,151 Z" } },
        { id: "dog-nose", shape: { type: "path", d: "M188,151 Q200,143 212,151 C210,161 204,165 200,165 C196,165 190,161 188,151 Z" } },
        { id: "dog-mouth", shape: { type: "path", d: "M200,165 C199,174 189,180 180,176 M200,165 C201,174 211,180 220,176" } },
      ],
      hideStrokeIds: ["dog-muzzle-guide"],
    },
    {
      id: 8,
      title: "Body contour",
      instruction: "Taper from the neck into the chest, then widen into the seated hips.",
      strokes: [
        { id: "dog-body", shape: { type: "path", d: "M166,190 C145,216 132,258 130,311 C129,353 149,388 176,397 C191,402 209,402 224,397 C251,388 271,353 270,311 C268,258 255,216 234,190" } },
        { id: "dog-collar", shape: { type: "path", d: "M163,203 Q200,220 237,203" } },
      ],
      hideStrokeIds: ["dog-body-guide"],
    },
    {
      id: 9,
      title: "Chest patch",
      instruction: "Add a shallow shield shape that follows the direction of the chest fur.",
      strokes: [
        { id: "dog-chest", shape: { type: "path", d: "M173,216 C181,237 188,251 200,263 C212,251 219,237 227,216 M184,244 L193,252 L200,245 L207,252 L216,244" } },
      ],
    },
    {
      id: 10,
      title: "Front legs",
      instruction: "Draw two straight but softly bowed forelegs beneath the chest.",
      strokes: [
        { id: "dog-front-left", shape: { type: "path", d: "M176,236 C174,282 168,332 165,375 C170,385 184,385 190,376 L190,252" } },
        { id: "dog-front-right", shape: { type: "path", d: "M224,236 C226,282 232,332 235,375 C230,385 216,385 210,376 L210,252" } },
      ],
    },
    {
      id: 11,
      title: "Paws and toes",
      instruction: "Flatten the feet against an implied floor and divide each into three toes.",
      strokes: [
        { id: "dog-paws", shape: { type: "path", d: "M158,376 C162,366 180,365 190,376 C192,389 181,395 168,393 C158,392 154,385 158,376 Z M210,376 C220,365 238,366 242,376 C246,385 242,392 232,393 C219,395 208,389 210,376 Z" } },
        { id: "dog-toes", shape: { type: "path", d: "M169,374 L168,387 M180,374 L181,387 M220,374 L219,387 M231,374 L232,387" } },
      ],
    },
    {
      id: 12,
      title: "Back legs",
      instruction: "Wrap two broad haunches around the front paws to complete the seated triangle.",
      strokes: [
        { id: "dog-haunch-left", shape: { type: "path", d: "M148,285 C117,323 121,374 161,391" } },
        { id: "dog-haunch-right", shape: { type: "path", d: "M252,285 C283,323 279,374 239,391" } },
      ],
    },
    {
      id: 13,
      title: "Wagging tail",
      instruction: "Finish with a loose tail that lifts behind one haunch and turns upward.",
      strokes: [
        { id: "dog-tail", shape: { type: "path", d: "M258,343 C291,339 312,316 307,287 C304,270 294,258 283,261 C274,264 275,278 285,282 C289,298 279,313 260,319" } },
      ],
    },
    {
      id: 14,
      title: "Final character",
      instruction: "Add one small highlight to each eye and a short chin mark. Stop before the drawing becomes busy.",
      strokes: [
        { id: "dog-eye-highlights", shape: { type: "path", d: "M168,115 L168,116 M226,115 L226,116" } },
        { id: "dog-chin", shape: { type: "path", d: "M190,184 Q200,188 210,184" } },
      ],
    },
  ]),
};

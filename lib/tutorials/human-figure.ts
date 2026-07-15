import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const humanFigureTutorial: Tutorial = {
  slug: "human-figure",
  name: "Relaxed Figure",
  description:
    "A relaxed standing figure that teaches gesture, shoulder and hip rhythm, natural limbs, and balanced weight.",
  difficulty: "medium",
  viewBox: "0 0 400 520",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Gesture line",
      instruction: "Start with one flowing line from the crown through the supporting leg.",
      strokes: [
        { id: "human-gesture", shape: { type: "path", d: "M202,38 C190,120 207,198 197,275 C188,348 177,420 181,479" }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Head guide",
      instruction: "Place a compact oval at the top of the gesture, tipped only slightly.",
      strokes: [
        { id: "human-head-guide", shape: { type: "ellipse", cx: 200, cy: 70, rx: 35, ry: 43 }, isGuide: true },
        { id: "human-face-center", shape: { type: "path", d: "M202,29 Q196,70 202,111" }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Torso masses",
      instruction: "Use a tilted rib-cage oval and a smaller pelvis shape to establish the body rhythm.",
      strokes: [
        { id: "human-rib-guide", shape: { type: "ellipse", cx: 200, cy: 190, rx: 57, ry: 75 }, isGuide: true },
        { id: "human-pelvis-guide", shape: { type: "path", d: "M165,249 Q200,235 235,252 Q230,279 200,286 Q170,278 165,249 Z" }, isGuide: true },
      ],
    },
    {
      id: 4,
      title: "Shoulders and hips",
      instruction: "Angle the shoulder line one way and the hips the other to avoid a stiff pose.",
      strokes: [
        { id: "human-shoulder-guide", shape: { type: "line", x1: 142, y1: 133, x2: 258, y2: 145 }, isGuide: true },
        { id: "human-hip-guide", shape: { type: "line", x1: 167, y1: 259, x2: 234, y2: 252 }, isGuide: true },
      ],
    },
    {
      id: 5,
      title: "Head and neck",
      instruction: "Ink the jaw and skull, then connect the neck into the sloping shoulders.",
      strokes: [
        { id: "human-head", shape: { type: "path", d: "M167,67 C168,42 181,27 201,27 C222,28 234,44 233,69 C232,90 220,108 201,114 C182,108 168,90 167,67 Z" } },
        { id: "human-neck", shape: { type: "path", d: "M184,105 C184,118 181,128 173,134 M217,105 C216,120 220,130 228,138" } },
      ],
      hideStrokeIds: ["human-head-guide", "human-face-center"],
    },
    {
      id: 6,
      title: "Torso contour",
      instruction: "Shape the shoulders, waist, and hips with long connected curves.",
      strokes: [
        { id: "human-torso", shape: { type: "path", d: "M173,132 C152,136 142,151 145,178 C150,213 158,242 169,264 C185,274 215,273 232,260 C241,229 249,195 253,165 C251,148 242,140 228,137 C217,148 185,147 173,132 Z" } },
        { id: "human-neckline", shape: { type: "path", d: "M177,137 Q201,154 225,141" } },
      ],
      hideStrokeIds: ["human-rib-guide", "human-pelvis-guide", "human-shoulder-guide", "human-hip-guide"],
    },
    {
      id: 7,
      title: "Hanging arm",
      instruction: "Let the left arm fall from the shoulder in a relaxed outward curve.",
      strokes: [
        { id: "human-arm-left", shape: { type: "path", d: "M154,143 C136,179 129,223 133,273 C134,288 141,298 150,295 C158,292 159,282 157,270 C154,229 160,188 174,153" } },
        { id: "human-hand-left", shape: { type: "path", d: "M133,273 C126,282 127,300 138,307 C148,310 154,301 150,294" } },
      ],
    },
    {
      id: 8,
      title: "Bent arm",
      instruction: "Bend the right arm gently toward the hip to reinforce the weight shift.",
      strokes: [
        { id: "human-arm-right", shape: { type: "path", d: "M246,149 C267,179 273,211 261,236 C253,252 242,261 233,259 M229,239 C242,232 246,218 244,198 C242,177 235,159 228,148" } },
        { id: "human-hand-right", shape: { type: "path", d: "M233,259 C226,252 224,242 229,236 C236,234 242,241 243,248" } },
      ],
    },
    {
      id: 9,
      title: "Supporting leg",
      instruction: "Carry the body weight down the left leg with a mostly continuous outside contour.",
      strokes: [
        { id: "human-leg-left", shape: { type: "path", d: "M169,261 C165,326 165,397 169,465 C174,479 187,481 193,466 C194,394 197,329 202,272" } },
      ],
    },
    {
      id: 10,
      title: "Relaxed leg",
      instruction: "Angle the right leg slightly outward so it carries less weight.",
      strokes: [
        { id: "human-leg-right", shape: { type: "path", d: "M202,272 C208,328 215,394 223,460 C228,474 241,476 246,461 C238,390 234,322 232,260" } },
      ],
      hideStrokeIds: ["human-gesture"],
    },
    {
      id: 11,
      title: "Feet",
      instruction: "Ground the supporting foot flat and turn the relaxed foot slightly outward.",
      strokes: [
        { id: "human-foot-left", shape: { type: "path", d: "M169,463 C162,472 158,485 166,489 L199,489 C205,484 199,472 192,466" } },
        { id: "human-foot-right", shape: { type: "path", d: "M223,459 C218,470 220,481 229,484 L259,479 C264,473 254,465 246,461" } },
      ],
    },
    {
      id: 12,
      title: "Face placement",
      instruction: "Add quiet eyes, brows, a short nose, and a neutral half-smile.",
      strokes: [
        { id: "human-brows", shape: { type: "path", d: "M178,58 Q187,53 194,58 M207,58 Q216,53 224,59" } },
        { id: "human-eyes", shape: { type: "path", d: "M179,69 Q187,64 194,70 Q187,74 179,69 M207,70 Q215,64 223,69 Q215,74 207,70" } },
        { id: "human-nose", shape: { type: "path", d: "M201,70 C199,79 198,84 203,86" } },
        { id: "human-mouth", shape: { type: "path", d: "M190,93 Q201,99 212,92" } },
      ],
    },
    {
      id: 13,
      title: "Hair mass",
      instruction: "Treat the hair as one graphic shape that overlaps the skull, not as many separate strands.",
      strokes: [
        { id: "human-hair", shape: { type: "path", d: "M166,66 C162,38 178,18 201,18 C225,18 239,39 234,68 C229,54 220,43 208,38 C204,50 190,54 173,48 C170,54 168,60 166,66 Z" } },
        { id: "human-hair-part", shape: { type: "path", d: "M207,38 Q195,29 183,40" } },
      ],
    },
    {
      id: 14,
      title: "Clothing structure",
      instruction: "Use only a few seams and folds to describe fabric direction and the turn of the body.",
      strokes: [
        { id: "human-shirt-folds", shape: { type: "path", d: "M174,178 Q184,206 178,236 M226,178 Q216,205 222,234 M169,264 Q201,254 232,260" } },
        { id: "human-trouser-seams", shape: { type: "path", d: "M202,272 C198,330 200,393 193,466 M202,272 C211,330 216,398 223,460" } },
      ],
    },
    {
      id: 15,
      title: "Final balance",
      instruction: "Finish with shoe soles and two short elbow folds. Keep the gesture readable through the details.",
      strokes: [
        { id: "human-shoe-soles", shape: { type: "path", d: "M163,489 L201,489 M226,484 L260,479" } },
        { id: "human-elbow-folds", shape: { type: "path", d: "M136,230 Q145,226 155,232 M246,216 Q256,220 264,215" } },
      ],
    },
  ]),
};

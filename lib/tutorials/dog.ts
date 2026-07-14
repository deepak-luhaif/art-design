import type { Tutorial } from "../types";

export const dogTutorial: Tutorial = {
  slug: "dog",
  name: "Dog",
  description: "A cute sitting puppy with floppy ears, front-facing, building on core structural ovals.",
  difficulty: "easy",
  viewBox: "0 0 400 460",
  steps: [
    {
      id: 1,
      title: "Head guide",
      instruction: "Draw a light circle to map out the puppy's head.",
      strokes: [
        { id: "dog-head-guide", shape: { type: "circle", cx: 200, cy: 140, r: 60 }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Snout guide",
      instruction: "Add a smaller horizontal oval in the lower half of the head guide.",
      strokes: [
        { id: "dog-snout-guide", shape: { type: "ellipse", cx: 200, cy: 165, rx: 35, ry: 22 }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Center guides",
      instruction: "Add a vertical centerline and a horizontal eye guide cross through the skull.",
      strokes: [
        { id: "dog-center-v", shape: { type: "line", x1: 200, y1: 80, x2: 200, y2: 200 }, isGuide: true },
        { id: "dog-center-h", shape: { type: "line", x1: 140, y1: 140, x2: 260, y2: 140 }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Ear guides",
      instruction: "Sketch two light triangles on the sides for floppy ears hanging down.",
      strokes: [
        { id: "dog-ear-guide-l", shape: { type: "path", d: "M140,120 L100,200 L155,160 Z" }, isGuide: true },
        { id: "dog-ear-guide-r", shape: { type: "path", d: "M260,120 L300,200 L245,160 Z" }, isGuide: true }
      ]
    },
    {
      id: 5,
      title: "Head outline",
      instruction: "Ink the final head shape, smoothing out the cheeks and jaw.",
      strokes: [
        { id: "dog-head-outline", shape: { type: "path", d: "M142,120 C142,88 170,80 200,80 C230,80 258,88 258,120 C258,135 250,150 250,165 C250,195 230,200 200,200 C170,200 150,195 150,165 C150,150 142,135 142,120 Z" } }
      ],
      hideStrokeIds: ["dog-head-guide", "dog-center-v", "dog-center-h"]
    },
    {
      id: 6,
      title: "Snout outline",
      instruction: "Trace the final rounded snout muzzle over the guide.",
      strokes: [
        { id: "dog-snout-outline", shape: { type: "path", d: "M165,165 C165,145 235,145 235,165 C235,188 165,188 165,165 Z" } }
      ],
      hideStrokeIds: ["dog-snout-guide"]
    },
    {
      id: 7,
      title: "Floppy ears",
      instruction: "Trace the ears over the guides, softening the tips into smooth loops.",
      strokes: [
        { id: "dog-ear-l", shape: { type: "path", d: "M142,120 C130,120 102,185 106,200 C110,215 142,190 146,165 Z" } },
        { id: "dog-ear-r", shape: { type: "path", d: "M258,120 C270,120 298,185 294,200 C290,215 258,190 254,165 Z" } }
      ],
      hideStrokeIds: ["dog-ear-guide-l", "dog-ear-guide-r"]
    },
    {
      id: 8,
      title: "Inner ear folds",
      instruction: "Add a soft line inside each ear flap to indicate the fold.",
      strokes: [
        { id: "dog-ear-fold-l", shape: { type: "path", d: "M138,135 Q125,165 132,185" } },
        { id: "dog-ear-fold-r", shape: { type: "path", d: "M262,135 Q275,165 268,185" } }
      ]
    },
    {
      id: 9,
      title: "Nose",
      instruction: "Draw a large, friendly rounded-triangle nose at the top of the snout.",
      strokes: [
        { id: "dog-nose", shape: { type: "path", d: "M188,155 Q200,147 212,155 C212,163 188,163 188,155 Z" } }
      ]
    },
    {
      id: 10,
      title: "Mouth",
      instruction: "Draw a vertical seam down from the nose, splitting into two happy curves.",
      strokes: [
        { id: "dog-mouth", shape: { type: "path", d: "M200,163 L200,172 M200,172 Q190,180 182,174 M200,172 Q210,180 218,174" } }
      ]
    },
    {
      id: 11,
      title: "Tongue",
      instruction: "Add a small, playful tongue slipping out between the mouth curves.",
      strokes: [
        { id: "dog-tongue", shape: { type: "path", d: "M192,174 C192,188 208,188 208,174 Z" } }
      ]
    },
    {
      id: 12,
      title: "Eyes",
      instruction: "Draw two circular puppy eyes above the snout muzzle.",
      strokes: [
        { id: "dog-eye-l", shape: { type: "circle", cx: 176, cy: 128, r: 7 } },
        { id: "dog-eye-r", shape: { type: "circle", cx: 224, cy: 128, r: 7 } }
      ]
    },
    {
      id: 13,
      title: "Pupil highlights",
      instruction: "Add tiny inner highlights to give the eyes expression.",
      strokes: [
        { id: "dog-eye-hl-l", shape: { type: "circle", cx: 174, cy: 126, r: 2 } },
        { id: "dog-eye-hl-r", shape: { type: "circle", cx: 222, cy: 126, r: 2 } }
      ]
    },
    {
      id: 14,
      title: "Eyebrows",
      instruction: "Add two short curved eyebrows high above the eyes.",
      strokes: [
        { id: "dog-brows", shape: { type: "path", d: "M168,118 Q176,112 184,118 M216,118 Q224,112 232,118" } }
      ]
    },
    {
      id: 15,
      title: "Body guide",
      instruction: "Sketch a large vertical oval below the head for the torso.",
      strokes: [
        { id: "dog-body-guide", shape: { type: "ellipse", cx: 200, cy: 300, rx: 75, ry: 90 }, isGuide: true }
      ]
    },
    {
      id: 16,
      title: "Neck guides",
      instruction: "Connect the head to the body with two vertical guidelines.",
      strokes: [
        { id: "dog-neck-guide-l", shape: { type: "line", x1: 165, y1: 200, x2: 155, y2: 230 }, isGuide: true },
        { id: "dog-neck-guide-r", shape: { type: "line", x1: 235, y1: 200, x2: 245, y2: 230 }, isGuide: true }
      ]
    },
    {
      id: 17,
      title: "Body outline",
      instruction: "Ink the outer lines of the torso connecting smoothly down to the hips.",
      strokes: [
        { id: "dog-body-outline", shape: { type: "path", d: "M166,200 C150,210 135,260 135,320 C135,375 160,390 200,390 C240,390 265,375 265,320 C265,260 250,210 234,200 Z" } }
      ],
      hideStrokeIds: ["dog-body-guide", "dog-neck-guide-l", "dog-neck-guide-r"]
    },
    {
      id: 18,
      title: "Front leg guides",
      instruction: "Sketch two straight guide lines down the front for the forelegs.",
      strokes: [
        { id: "dog-leg-guide-fl", shape: { type: "line", x1: 180, y1: 260, x2: 170, y2: 370 }, isGuide: true },
        { id: "dog-leg-guide-fr", shape: { type: "line", x1: 220, y1: 260, x2: 230, y2: 370 }, isGuide: true }
      ]
    },
    {
      id: 19,
      title: "Front legs",
      instruction: "Ink the vertical columns of the front legs and paws.",
      strokes: [
        { id: "dog-leg-fl", shape: { type: "path", d: "M185,250 C185,300 160,320 160,370 C160,385 185,385 185,370 Z" } },
        { id: "dog-leg-fr", shape: { type: "path", d: "M215,250 C215,300 240,320 240,370 C240,385 215,385 215,370 Z" } }
      ],
      hideStrokeIds: ["dog-leg-guide-fl", "dog-leg-guide-fr"]
    },
    {
      id: 20,
      title: "Back leg guides",
      instruction: "Sketch two curved lines for the folded hind leg haunches.",
      strokes: [
        { id: "dog-haunch-guide-l", shape: { type: "path", d: "M135,310 Q115,340 135,375" }, isGuide: true },
        { id: "dog-haunch-guide-r", shape: { type: "path", d: "M265,310 Q285,340 265,375" }, isGuide: true }
      ]
    },
    {
      id: 21,
      title: "Back legs",
      instruction: "Ink the rounded thigh bumps on each side.",
      strokes: [
        { id: "dog-haunch-l", shape: { type: "path", d: "M136,305 C112,320 112,365 136,375 C146,378 156,365 154,350 Z" } },
        { id: "dog-haunch-r", shape: { type: "path", d: "M264,305 C288,320 288,365 264,375 C254,378 244,365 246,350 Z" } }
      ],
      hideStrokeIds: ["dog-haunch-guide-l", "dog-haunch-guide-r"]
    },
    {
      id: 22,
      title: "Tail guide",
      instruction: "Draw a curved guideline for a tail wagging to the side.",
      strokes: [
        { id: "dog-tail-guide", shape: { type: "path", d: "M260,330 Q320,320 310,270" }, isGuide: true }
      ]
    },
    {
      id: 23,
      title: "Tail",
      instruction: "Ink the final happy tail curling upward.",
      strokes: [
        { id: "dog-tail", shape: { type: "path", d: "M262,325 C295,315 315,295 305,275 C295,285 285,305 258,315" } }
      ],
      hideStrokeIds: ["dog-tail-guide"]
    }
  ]
};

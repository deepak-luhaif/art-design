import type { Tutorial } from "../types";

export const catTutorial: Tutorial = {
  slug: "cat",
  name: "Cat",
  description: "A sitting cat, front-facing — 26 frames starting from a simple head guide circle.",
  difficulty: "easy",
  viewBox: "0 0 400 460",
  steps: [
    {
      id: 1,
      title: "Head guide",
      instruction: "Draw a light circle to map out the size and position of the head.",
      strokes: [
        { id: "cat-head-guide", shape: { type: "circle", cx: 200, cy: 150, r: 72 }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Center guides",
      instruction: "Add a vertical and horizontal guideline through the circle so the face comes out symmetric.",
      strokes: [
        { id: "cat-center-v", shape: { type: "line", x1: 200, y1: 82, x2: 200, y2: 218 }, isGuide: true },
        { id: "cat-center-h", shape: { type: "line", x1: 132, y1: 150, x2: 268, y2: 150 }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Ear guides",
      instruction: "Mark two small triangles at the top of the head circle for the ears.",
      strokes: [
        { id: "cat-ear-guide-l", shape: { type: "path", d: "M144,110 L128,40 L180,88 Z" }, isGuide: true },
        { id: "cat-ear-guide-r", shape: { type: "path", d: "M256,110 L272,40 L220,88 Z" }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Left ear",
      instruction: "Ink the final rounded-triangle shape of the left ear over its guide.",
      strokes: [
        { id: "cat-ear-left", shape: { type: "path", d: "M142,112 C128,88 120,58 130,32 C148,52 168,72 178,90 Z" } }
      ]
    },
    {
      id: 5,
      title: "Right ear",
      instruction: "Mirror it for the right ear.",
      strokes: [
        { id: "cat-ear-right", shape: { type: "path", d: "M258,112 C272,88 280,58 270,32 C252,52 232,72 222,90 Z" } }
      ]
    },
    {
      id: 6,
      title: "Inner ears",
      instruction: "Add a soft curved line inside each ear.",
      strokes: [
        { id: "cat-ear-inner-l", shape: { type: "path", d: "M148,96 Q138,72 144,46" } },
        { id: "cat-ear-inner-r", shape: { type: "path", d: "M252,96 Q262,72 256,46" } }
      ],
      hideStrokeIds: ["cat-ear-guide-l", "cat-ear-guide-r"]
    },
    {
      id: 7,
      title: "Face outline",
      instruction: "Trace the rounded cheeks and chin over the guide circle, then let the circle fade away.",
      strokes: [
        { id: "cat-face-outline", shape: { type: "path", d: "M130,150 C130,104 162,80 200,80 C238,80 270,104 270,150 C270,190 248,220 200,224 C152,220 130,190 130,150 Z" } }
      ],
      hideStrokeIds: ["cat-head-guide", "cat-center-v", "cat-center-h"]
    },
    {
      id: 8,
      title: "Eye line",
      instruction: "Add a light horizontal guide across the face to line up the eyes.",
      strokes: [
        { id: "cat-eye-guide", shape: { type: "line", x1: 150, y1: 150, x2: 250, y2: 150 }, isGuide: true }
      ]
    },
    {
      id: 9,
      title: "Left eye",
      instruction: "Draw a wide oval left eye sitting on the guide.",
      strokes: [
        { id: "cat-eye-left", shape: { type: "ellipse", cx: 178, cy: 150, rx: 13, ry: 11 } }
      ]
    },
    {
      id: 10,
      title: "Right eye",
      instruction: "Draw the matching right eye — the guide line has done its job, so it disappears now.",
      strokes: [
        { id: "cat-eye-right", shape: { type: "ellipse", cx: 222, cy: 150, rx: 13, ry: 11 } }
      ],
      hideStrokeIds: ["cat-eye-guide"]
    },
    {
      id: 11,
      title: "Pupils",
      instruction: "Add a round pupil in each eye with a tiny highlight dot for sparkle.",
      strokes: [
        // Since rough.js doesn't fill outlines easily without drawing hatching, 
        // we can draw the outer circles of pupils and the highlight circles
        { id: "cat-pupil-l", shape: { type: "circle", cx: 178, cy: 151, r: 6.5 } },
        { id: "cat-pupil-r", shape: { type: "circle", cx: 222, cy: 151, r: 6.5 } },
        { id: "cat-pupil-hl-l", shape: { type: "circle", cx: 175.5, cy: 148, r: 1.8 } },
        { id: "cat-pupil-hl-r", shape: { type: "circle", cx: 219.5, cy: 148, r: 1.8 } }
      ]
    },
    {
      id: 12,
      title: "Nose",
      instruction: "Add a small triangle nose right between the eyes.",
      strokes: [
        { id: "cat-nose", shape: { type: "path", d: "M193,168 L207,168 L200,178 Z" } }
      ]
    },
    {
      id: 13,
      title: "Mouth",
      instruction: "Draw the classic cat smile: a short stem and two soft curves.",
      strokes: [
        { id: "cat-mouth", shape: { type: "path", d: "M200,178 L200,185 M200,185 Q188,196 178,187 M200,185 Q212,196 222,187" } }
      ]
    },
    {
      id: 14,
      title: "Jaw crease",
      instruction: "Add one small curved line under the chin for definition.",
      strokes: [
        { id: "cat-jaw-crease", shape: { type: "path", d: "M180,218 Q200,226 220,218" } }
      ]
    },
    {
      id: 15,
      title: "Whiskers",
      instruction: "Add three short whisker lines to each cheek.",
      strokes: [
        { id: "cat-whiskers-l", shape: { type: "path", d: "M152,180 L106,172 M150,190 L104,190 M152,200 L106,208" } },
        { id: "cat-whiskers-r", shape: { type: "path", d: "M248,180 L294,172 M250,190 L296,190 M248,200 L294,208" } }
      ]
    },
    {
      id: 16,
      title: "Body guide",
      instruction: "Sketch a big oval below the head to map out the body.",
      strokes: [
        { id: "cat-body-guide", shape: { type: "ellipse", cx: 200, cy: 318, rx: 92, ry: 104 }, isGuide: true }
      ]
    },
    {
      id: 17,
      title: "Neck guides",
      instruction: "Connect the head to the body with two short guide lines.",
      strokes: [
        { id: "cat-neck-guide-l", shape: { type: "line", x1: 168, y1: 218, x2: 168, y2: 214 }, isGuide: true },
        { id: "cat-neck-guide-r", shape: { type: "line", x1: 232, y1: 218, x2: 232, y2: 214 }, isGuide: true }
      ]
    },
    {
      id: 18,
      title: "Body outline",
      instruction: "Trace the final rounded body shape over the guides, then let them fade away.",
      strokes: [
        { id: "cat-body-outline", shape: { type: "path", d: "M168,214 C142,226 130,264 134,314 C138,372 162,418 200,422 C238,418 262,372 266,314 C270,264 258,226 232,214 C218,222 182,222 168,214 Z" } }
      ],
      hideStrokeIds: ["cat-body-guide", "cat-neck-guide-l", "cat-neck-guide-r"]
    },
    {
      id: 19,
      title: "Chest fluff",
      instruction: "Add one soft curve just under the chin where the head meets the chest.",
      strokes: [
        { id: "cat-chest-fluff", shape: { type: "path", d: "M182,232 Q200,240 218,232" } }
      ]
    },
    {
      id: 20,
      title: "Front paw guides",
      instruction: "Add two short guide lines for where the front paws tuck in.",
      strokes: [
        { id: "cat-front-paw-guide-l", shape: { type: "line", x1: 178, y1: 380, x2: 178, y2: 400 }, isGuide: true },
        { id: "cat-front-paw-guide-r", shape: { type: "line", x1: 222, y1: 380, x2: 222, y2: 400 }, isGuide: true }
      ]
    },
    {
      id: 21,
      title: "Front paws",
      instruction: "Ink two rounded paws over the guides, with a couple of toe lines.",
      strokes: [
        { id: "cat-front-paw-l", shape: { type: "ellipse", cx: 178, cy: 400, rx: 22, ry: 15 } },
        { id: "cat-front-paw-r", shape: { type: "ellipse", cx: 222, cy: 400, rx: 22, ry: 15 } },
        { id: "cat-toe-lines", shape: { type: "path", d: "M170,406 L170,414 M186,406 L186,414 M214,406 L214,414 M230,406 L230,414" } }
      ],
      hideStrokeIds: ["cat-front-paw-guide-l", "cat-front-paw-guide-r"]
    },
    {
      id: 22,
      title: "Back leg guides",
      instruction: "Sketch the haunch bumps where the back legs tuck under the body.",
      strokes: [
        { id: "cat-back-leg-guide-l", shape: { type: "path", d: "M136,296 Q116,338 138,376" }, isGuide: true },
        { id: "cat-back-leg-guide-r", shape: { type: "path", d: "M264,296 Q284,338 262,376" }, isGuide: true }
      ]
    },
    {
      id: 23,
      title: "Back legs",
      instruction: "Ink the rounded haunches on each side.",
      strokes: [
        { id: "cat-back-leg-l", shape: { type: "path", d: "M134,292 Q104,336 130,380 Q148,392 162,376" } },
        { id: "cat-back-leg-r", shape: { type: "path", d: "M266,292 Q296,336 270,380 Q252,392 238,376" } }
      ],
      hideStrokeIds: ["cat-back-leg-guide-l", "cat-back-leg-guide-r"]
    },
    {
      id: 24,
      title: "Tail guide",
      instruction: "Draw a light curling line for the tail's path.",
      strokes: [
        { id: "cat-tail-guide", shape: { type: "path", d: "M258,340 Q316,326 320,276 Q322,244 298,236" }, isGuide: true }
      ]
    },
    {
      id: 25,
      title: "Tail",
      instruction: "Ink the final tail curling out from the body.",
      strokes: [
        { id: "cat-tail", shape: { type: "path", d: "M256,334 C296,322 316,288 312,254 C309,230 288,222 272,232 C286,236 299,246 301,264 C303,286 288,310 254,318" } }
      ],
      hideStrokeIds: ["cat-tail-guide"]
    },
    {
      id: 26,
      title: "Final details",
      instruction: "Finish with expression lines and fur texture for depth.",
      strokes: [
        // Cheek definition and wrinkles
        { id: "cat-cheek-l", shape: { type: "path", d: "M148,185 Q145,190 148,200 M152,188 Q148,195 152,205" } },
        { id: "cat-cheek-r", shape: { type: "path", d: "M252,185 Q255,190 252,200 M248,188 Q252,195 248,205" } },
        // Nose shadow/depth
        { id: "cat-nose-shadow", shape: { type: "path", d: "M195,172 L205,172 M192,174 L208,174" } },
        // Chin dimple
        { id: "cat-chin-dimple", shape: { type: "path", d: "M200,220 Q195,224 200,228 Q205,224 200,220" } },
        // Belly fur texture
        { id: "cat-belly-fur", shape: { type: "path", d: "M172,340 Q200,332 228,340 M170,360 Q200,350 230,360 M168,378 Q200,368 232,378" } },
        // Shadow on body for dimension
        { id: "cat-body-shadow", shape: { type: "path", d: "M145,280 Q140,320 142,360 M255,280 Q260,320 258,360" } },
        // Additional fur detail on body
        { id: "cat-body-texture", shape: { type: "path", d: "M185,300 Q188,305 185,310 M215,300 Q212,305 215,310" } }
      ]
    }
  ]
};

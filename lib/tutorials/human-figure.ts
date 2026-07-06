import type { Tutorial } from "../types";

export const humanFigureTutorial: Tutorial = {
  slug: "human-figure",
  name: "Human Figure",
  description: "A simple front-facing full body figure, teaching head/body proportions and limb guidelines.",
  difficulty: "medium",
  viewBox: "0 0 400 600",
  steps: [
    {
      id: 1,
      title: "Head guide",
      instruction: "Draw a light circle for the head.",
      strokes: [
        { id: "human-head-guide", shape: { type: "circle", cx: 200, cy: 92, r: 46 }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Center guides",
      instruction: "Add a vertical and horizontal guideline through the head to keep the face centered.",
      strokes: [
        { id: "human-center-v", shape: { type: "line", x1: 200, y1: 48, x2: 200, y2: 136 }, isGuide: true },
        { id: "human-center-h", shape: { type: "line", x1: 156, y1: 92, x2: 244, y2: 92 }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Torso guide",
      instruction: "Sketch a loose shoulders-to-waist shape below the head.",
      strokes: [
        { id: "human-torso-guide", shape: { type: "path", d: "M126,142 L274,142 L256,330 L144,330 Z" }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Hip guide",
      instruction: "Add a guideline marking the hip width.",
      strokes: [
        { id: "human-hip-guide", shape: { type: "line", x1: 150, y1: 350, x2: 250, y2: 350 }, isGuide: true }
      ]
    },
    {
      id: 5,
      title: "Neck guides",
      instruction: "Connect the head to the shoulders with two short guide lines.",
      strokes: [
        { id: "human-neck-guide-l", shape: { type: "line", x1: 178, y1: 134, x2: 170, y2: 142 }, isGuide: true },
        { id: "human-neck-guide-r", shape: { type: "line", x1: 222, y1: 134, x2: 230, y2: 142 }, isGuide: true }
      ]
    },
    {
      id: 6,
      title: "Head outline",
      instruction: "Trace the final rounded head shape over the guide circle, then let it fade away.",
      strokes: [
        { id: "human-head-outline", shape: { type: "path", d: "M154,92 C154,64 174,44 200,44 C226,44 246,64 246,92 C246,112 238,128 224,138 C210,146 190,146 176,138 C162,128 154,112 154,92 Z" } }
      ],
      hideStrokeIds: ["human-head-guide", "human-center-v", "human-center-h"]
    },
    {
      id: 7,
      title: "Neckline",
      instruction: "Add a soft curve at the base of the neck for the collar.",
      strokes: [
        { id: "human-neckline", shape: { type: "path", d: "M178,140 Q200,156 222,140" } }
      ]
    },
    {
      id: 8,
      title: "Torso outline",
      instruction: "Ink the final shirt silhouette over the guides, then let them fade away.",
      strokes: [
        { id: "human-torso-outline", shape: { type: "path", d: "M172,140 C140,148 128,180 130,230 C132,280 138,320 150,352 C168,362 232,362 250,352 C262,320 268,280 270,230 C272,180 260,148 228,140 C222,150 178,150 172,140 Z" } }
      ],
      hideStrokeIds: ["human-torso-guide", "human-hip-guide", "human-neck-guide-l", "human-neck-guide-r"]
    },
    {
      id: 9,
      title: "Arm guides",
      instruction: "Add two straight guide lines from each shoulder down to the wrists.",
      strokes: [
        { id: "human-arm-guide-l", shape: { type: "line", x1: 132, y1: 150, x2: 96, y2: 300 }, isGuide: true },
        { id: "human-arm-guide-r", shape: { type: "line", x1: 268, y1: 150, x2: 304, y2: 300 }, isGuide: true }
      ]
    },
    {
      id: 10,
      title: "Left arm",
      instruction: "Ink the final sleeve shape over the left guide.",
      strokes: [
        { id: "human-arm-left", shape: { type: "path", d: "M136,150 C110,170 96,220 92,280 C90,296 94,308 104,310 C114,308 118,296 118,282 C122,230 134,182 156,156 Z" } }
      ]
    },
    {
      id: 11,
      title: "Right arm",
      instruction: "Mirror it for the right sleeve — the arm guides have done their job now.",
      strokes: [
        { id: "human-arm-right", shape: { type: "path", d: "M264,150 C290,170 304,220 308,280 C310,296 306,308 296,310 C286,308 282,296 282,282 C278,230 266,182 244,156 Z" } }
      ],
      hideStrokeIds: ["human-arm-guide-l", "human-arm-guide-r"]
    },
    {
      id: 12,
      title: "Left hand",
      instruction: "Add a simple rounded hand at the end of the left sleeve.",
      strokes: [
        { id: "human-hand-left", shape: { type: "ellipse", cx: 104, cy: 317, rx: 13, ry: 17 } },
        { id: "human-thumb-left", shape: { type: "path", d: "M94,312 Q88,318 94,326" } }
      ]
    },
    {
      id: 13,
      title: "Right hand",
      instruction: "Add the matching right hand.",
      strokes: [
        { id: "human-hand-right", shape: { type: "ellipse", cx: 296, cy: 317, rx: 13, ry: 17 } },
        { id: "human-thumb-right", shape: { type: "path", d: "M306,312 Q312,318 306,326" } }
      ]
    },
    {
      id: 14,
      title: "Leg guides",
      instruction: "Add two guide lines from the hips down to the ankles.",
      strokes: [
        { id: "human-leg-guide-l", shape: { type: "line", x1: 168, y1: 356, x2: 160, y2: 560 }, isGuide: true },
        { id: "human-leg-guide-r", shape: { type: "line", x1: 232, y1: 356, x2: 240, y2: 560 }, isGuide: true }
      ]
    },
    {
      id: 15,
      title: "Left leg",
      instruction: "Ink the final pant leg shape over the left guide.",
      strokes: [
        { id: "human-leg-left", shape: { type: "path", d: "M154,352 C148,400 146,460 150,520 C151,540 155,556 162,562 C172,558 176,542 174,520 C178,460 182,404 190,358 Z" } }
      ]
    },
    {
      id: 16,
      title: "Right leg",
      instruction: "Mirror it for the right leg — the leg guides fade away now.",
      strokes: [
        { id: "human-leg-right", shape: { type: "path", d: "M246,352 C252,400 254,460 250,520 C249,540 245,556 238,562 C228,558 224,542 226,520 C222,460 218,404 210,358 Z" } }
      ],
      hideStrokeIds: ["human-leg-guide-l", "human-leg-guide-r"]
    },
    {
      id: 17,
      title: "Left foot",
      instruction: "Add a simple shoe shape at the bottom of the left leg.",
      strokes: [
        { id: "human-foot-left", shape: { type: "path", d: "M150,558 Q145,572 156,576 L182,576 Q188,570 176,562 Z" } }
      ]
    },
    {
      id: 18,
      title: "Right foot",
      instruction: "Add the matching right shoe.",
      strokes: [
        { id: "human-foot-right", shape: { type: "path", d: "M250,558 Q255,572 244,576 L218,576 Q212,570 224,562 Z" } }
      ]
    },
    {
      id: 19,
      title: "Eye line",
      instruction: "Add a light horizontal guide across the face for the eyes.",
      strokes: [
        { id: "human-eye-guide", shape: { type: "line", x1: 170, y1: 86, x2: 230, y2: 86 }, isGuide: true }
      ]
    },
    {
      id: 20,
      title: "Eyes",
      instruction: "Draw two small eyes on the guide — it fades away now.",
      strokes: [
        { id: "human-eyes-l", shape: { type: "ellipse", cx: 182, cy: 86, rx: 7, ry: 8 } },
        { id: "human-eyes-r", shape: { type: "ellipse", cx: 218, cy: 86, rx: 7, ry: 8 } }
      ],
      hideStrokeIds: ["human-eye-guide"]
    },
    {
      id: 21,
      title: "Eyebrows",
      instruction: "Add a short curved brow above each eye.",
      strokes: [
        { id: "human-brows", shape: { type: "path", d: "M172,72 Q182,66 192,72 M208,72 Q218,66 228,72" } }
      ]
    },
    {
      id: 22,
      title: "Nose",
      instruction: "Add a small curved line for the nose.",
      strokes: [
        { id: "human-nose", shape: { type: "path", d: "M200,92 Q197,100 201,103" } }
      ]
    },
    {
      id: 23,
      title: "Mouth",
      instruction: "Draw a simple curved smile.",
      strokes: [
        { id: "human-mouth", shape: { type: "path", d: "M186,112 Q200,120 214,112" } }
      ]
    },
    {
      id: 24,
      title: "Ears",
      instruction: "Add a small curved bump on each side of the head.",
      strokes: [
        { id: "human-ears", shape: { type: "path", d: "M154,82 Q146,92 154,102 M246,82 Q254,92 246,102" } }
      ]
    },
    {
      id: 25,
      title: "Hair",
      instruction: "Draw a simple hairstyle over the top of the head.",
      strokes: [
        { id: "human-hair", shape: { type: "path", d: "M152,88 C150,54 172,30 200,30 C228,30 250,54 248,88 C244,70 230,58 214,54 C222,66 220,78 214,86 C206,68 194,68 186,86 C180,78 178,66 186,54 C170,58 156,70 152,88 Z" } }
      ]
    },
    {
      id: 26,
      title: "Clothing folds",
      instruction: "Add a few soft lines on the shirt and sleeves for fabric folds.",
      strokes: [
        { id: "human-clothing-folds", shape: { type: "path", d: "M160,220 Q170,260 162,300 M240,220 Q230,260 238,300 M188,150 Q200,158 212,150" } }
      ]
    },
    {
      id: 27,
      title: "Final details & expression",
      instruction: "Add clothing wrinkles, shading, and expression lines for a natural finish.",
      strokes: [
        // Pants center seam
        { id: "human-pants-seam", shape: { type: "line", x1: 200, y1: 356, x2: 200, y2: 520 } },
        // Pants fabric wrinkles and depth
        { id: "human-pants-wrinkles-l", shape: { type: "path", d: "M185,400 Q180,430 185,480 M175,410 Q170,450 175,500" } },
        { id: "human-pants-wrinkles-r", shape: { type: "path", d: "M215,400 Q220,430 215,480 M225,410 Q230,450 225,500" } },
        // Shirt definition lines
        { id: "human-shirt-seams", shape: { type: "path", d: "M160,160 L160,320 M240,160 L240,320 M200,160 L200,220" } },
        // Shoe details and straps
        { id: "human-shoe-straps", shape: { type: "path", d: "M154,560 L182,560 M218,560 L246,560" } },
        // Shoe sole/toe definition
        { id: "human-shoe-detail", shape: { type: "path", d: "M150,575 L188,575 M212,575 L250,575 M165,570 M232,570" } },
        // Hand/arm definition
        { id: "human-hand-detail", shape: { type: "path", d: "M130,280 L120,340 M270,280 L280,340" } },
        // Face expression (nose and mouth)
        { id: "human-face-features", shape: { type: "path", d: "M200,105 L200,115 M190,120 Q200,128 210,120" } },
        // Hair shadow/texture
        { id: "human-hair-texture", shape: { type: "path", d: "M165,55 Q170,45 180,48 Q190,42 200,40 Q210,42 220,48 Q230,45 235,55" } },
        // Body contour shadow for dimension
        { id: "human-body-shadow", shape: { type: "path", d: "M145,200 Q140,270 150,340 M255,200 Q260,270 250,340" } }
      ]
    }
  ]
};

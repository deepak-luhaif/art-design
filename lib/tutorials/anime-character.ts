import type { Tutorial } from "../types";

export const animeCharacterTutorial: Tutorial = {
  slug: "anime-character",
  name: "Anime Face",
  description: "An expressive, stylized anime character face showing the classic large-eyed proportions and layered hair clumps.",
  difficulty: "medium",
  viewBox: "0 0 400 400",
  steps: [
    {
      id: 1,
      title: "Head guide",
      instruction: "Draw a light circle to map the skull structure.",
      strokes: [
        { id: "anime-head-guide", shape: { type: "circle", cx: 200, cy: 170, r: 70 }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Center guides",
      instruction: "Add a vertical center line and a horizontal eye level guide line below the circle's middle.",
      strokes: [
        { id: "anime-center-v", shape: { type: "line", x1: 200, y1: 80, x2: 200, y2: 300 }, isGuide: true },
        { id: "anime-center-h", shape: { type: "line", x1: 120, y1: 210, x2: 280, y2: 210 }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Jaw guides",
      instruction: "Extend lines from the circle sides down to form a pointed chin.",
      strokes: [
        { id: "anime-jaw-guide-l", shape: { type: "line", x1: 130, y1: 170, x2: 145, y2: 250 }, isGuide: true },
        { id: "anime-jaw-guide-r", shape: { type: "line", x1: 270, y1: 170, x2: 255, y2: 250 }, isGuide: true },
        { id: "anime-chin-guide-l", shape: { type: "line", x1: 145, y1: 250, x2: 200, y2: 290 }, isGuide: true },
        { id: "anime-chin-guide-r", shape: { type: "line", x1: 255, y1: 250, x2: 200, y2: 290 }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Ear guides",
      instruction: "Sketch two flat boxes on the sides between the eye line and skull bottom.",
      strokes: [
        { id: "anime-ear-guide-l", shape: { type: "path", d: "M124,180 L115,185 L115,220 L126,215 Z" }, isGuide: true },
        { id: "anime-ear-guide-r", shape: { type: "path", d: "M276,180 L285,185 L285,220 L274,215 Z" }, isGuide: true }
      ]
    },
    {
      id: 5,
      title: "Face outline",
      instruction: "Ink the final smooth cheeks and pointed chin over the guidelines.",
      strokes: [
        { id: "anime-face-outline", shape: { type: "path", d: "M130,170 C130,140 140,110 200,110 C260,110 270,140 270,170 C270,210 255,248 200,290 C145,248 130,210 130,170 Z" } }
      ],
      hideStrokeIds: ["anime-head-guide", "anime-center-v", "anime-center-h", "anime-jaw-guide-l", "anime-jaw-guide-r", "anime-chin-guide-l", "anime-chin-guide-r"]
    },
    {
      id: 6,
      title: "Neck lines",
      instruction: "Draw two slender vertical lines for the neck.",
      strokes: [
        { id: "anime-neck", shape: { type: "path", d: "M174,265 L174,320 M226,265 L226,320" } }
      ]
    },
    {
      id: 7,
      title: "Upper eyelashes",
      instruction: "Draw thick, bold arches for the top of the stylized eyes.",
      strokes: [
        { id: "anime-eyelash-l", shape: { type: "path", d: "M145,212 Q162,192 180,212" } },
        { id: "anime-eyelash-r", shape: { type: "path", d: "M220,212 Q238,192 255,212" } }
      ]
    },
    {
      id: 8,
      title: "Lash flares",
      instruction: "Thicken the outer corners and add small pointer spikes.",
      strokes: [
        { id: "anime-lash-flare-l", shape: { type: "path", d: "M145,212 L138,206 M176,206 L180,212" } },
        { id: "anime-lash-flare-r", shape: { type: "path", d: "M255,212 L262,206 M224,206 L220,212" } }
      ]
    },
    {
      id: 9,
      title: "Lower eyelids",
      instruction: "Add small, short curves beneath the eyes for the bottom lashes.",
      strokes: [
        { id: "anime-lid-lower-l", shape: { type: "path", d: "M150,234 Q162,240 174,234" } },
        { id: "anime-lid-lower-r", shape: { type: "path", d: "M226,234 Q238,240 250,234" } }
      ]
    },
    {
      id: 10,
      title: "Iris outlines",
      instruction: "Ink large, tall oval shapes inside the eyelids.",
      strokes: [
        { id: "anime-iris-l", shape: { type: "ellipse", cx: 162, cy: 220, rx: 11, ry: 15 } },
        { id: "anime-iris-r", shape: { type: "ellipse", cx: 238, cy: 220, rx: 11, ry: 15 } }
      ]
    },
    {
      id: 11,
      title: "Pupils",
      instruction: "Add smaller, darker vertical ovals right in the center.",
      strokes: [
        { id: "anime-pupil-l", shape: { type: "ellipse", cx: 162, cy: 220, rx: 5, ry: 8 } },
        { id: "anime-pupil-r", shape: { type: "ellipse", cx: 238, cy: 220, rx: 5, ry: 8 } }
      ]
    },
    {
      id: 12,
      title: "Eye highlights",
      instruction: "Draw two circular bubbles in the top corners for eye reflection sparkle.",
      strokes: [
        { id: "anime-highlight-l", shape: { type: "circle", cx: 159, cy: 213, r: 3 } },
        { id: "anime-highlight-r", shape: { type: "circle", cx: 235, cy: 213, r: 3 } }
      ]
    },
    {
      id: 13,
      title: "Eyelid creases",
      instruction: "Add a subtle crease line just above the top lashes.",
      strokes: [
        { id: "anime-crease-l", shape: { type: "path", d: "M148,198 Q162,192 176,198" } },
        { id: "anime-crease-r", shape: { type: "path", d: "M224,198 Q238,192 252,198" } }
      ]
    },
    {
      id: 14,
      title: "Eyebrows",
      instruction: "Draw thin, curved, highly stylized eyebrows higher up the forehead.",
      strokes: [
        { id: "anime-brow-l", shape: { type: "path", d: "M144,178 Q162,168 180,180" } },
        { id: "anime-brow-r", shape: { type: "path", d: "M220,180 Q238,168 256,178" } }
      ]
    },
    {
      id: 15,
      title: "Nose",
      instruction: "Sketch a simple dot or tiny sharp angle representing a dainty nose.",
      strokes: [
        { id: "anime-nose", shape: { type: "path", d: "M198,238 L201,242 L200,245" } }
      ]
    },
    {
      id: 16,
      title: "Mouth",
      instruction: "Add a small, simple smiling curve for the mouth.",
      strokes: [
        { id: "anime-mouth", shape: { type: "path", d: "M186,264 Q200,272 214,264" } }
      ]
    },
    {
      id: 17,
      title: "Ears outline",
      instruction: "Trace the ears over the guides, keeping the shapes simple.",
      strokes: [
        { id: "anime-ear-l", shape: { type: "path", d: "M130,175 C112,175 110,210 130,225" } },
        { id: "anime-ear-r", shape: { type: "path", d: "M270,175 C288,175 290,210 270,225" } }
      ],
      hideStrokeIds: ["anime-ear-guide-l", "anime-ear-guide-r"]
    },
    {
      id: 18,
      title: "Inner ear lines",
      instruction: "Add small fold curves inside the ears for depth.",
      strokes: [
        { id: "anime-ear-inner-l", shape: { type: "path", d: "M124,190 Q118,200 124,210" } },
        { id: "anime-ear-inner-r", shape: { type: "path", d: "M276,190 Q282,200 276,210" } }
      ]
    },
    {
      id: 19,
      title: "Hair volume guide",
      instruction: "Sketch a large dome enclosing the head to map the hair's outer boundary.",
      strokes: [
        { id: "anime-hair-volume", shape: { type: "path", d: "M110,180 C100,50 300,50 290,180" }, isGuide: true }
      ]
    },
    {
      id: 20,
      title: "Bangs — center",
      instruction: "Draw a pointed hair clump right down the middle of the forehead.",
      strokes: [
        { id: "anime-bangs-c", shape: { type: "path", d: "M190,130 Q200,185 200,195 Q205,170 215,130" } }
      ]
    },
    {
      id: 21,
      title: "Bangs — left side",
      instruction: "Add layered pointed clumps on the left.",
      strokes: [
        { id: "anime-bangs-l1", shape: { type: "path", d: "M160,135 Q172,185 174,190 Q176,165 188,135" } },
        { id: "anime-bangs-l2", shape: { type: "path", d: "M136,145 Q152,180 152,182 Q150,160 162,138" } }
      ]
    },
    {
      id: 22,
      title: "Bangs — right side",
      instruction: "Add matching clumps on the right.",
      strokes: [
        { id: "anime-bangs-r1", shape: { type: "path", d: "M240,135 Q228,185 226,190 Q224,165 212,135" } },
        { id: "anime-bangs-r2", shape: { type: "path", d: "M264,145 Q248,180 248,182 Q250,160 238,138" } }
      ]
    },
    {
      id: 23,
      title: "Side hair strands",
      instruction: "Draw long strands framing the face, falling past the jaw.",
      strokes: [
        { id: "anime-side-hair-l", shape: { type: "path", d: "M130,160 Q120,240 115,260 Q125,230 135,170" } },
        { id: "anime-side-hair-r", shape: { type: "path", d: "M270,160 Q280,240 285,260 Q275,230 265,170" } }
      ]
    },
    {
      id: 24,
      title: "Hair crown outline",
      instruction: "Trace the outer boundary of the hair volume over the guide dome.",
      strokes: [
        { id: "anime-hair-crown", shape: { type: "path", d: "M118,170 C110,120 140,75 200,75 C260,75 290,120 282,170" } }
      ],
      hideStrokeIds: ["anime-hair-volume"]
    },
    {
      id: 25,
      title: "Hair spikiness",
      instruction: "Add a couple of small, dynamic cowlicks/spikes on top of the head.",
      strokes: [
        { id: "anime-hair-spikes", shape: { type: "path", d: "M188,76 Q194,55 192,52 Q198,62 202,75 M212,76 Q206,55 208,52 Q202,62 198,75" } }
      ]
    },
    {
      id: 26,
      title: "Shirt collar",
      instruction: "Finish with a simple rounded neckline at the base of the neck.",
      strokes: [
        { id: "anime-collar", shape: { type: "path", d: "M166,320 Q200,340 234,320" } }
      ]
    }
  ]
};

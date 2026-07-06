import type { Tutorial } from "../types";

export const flowerTutorial: Tutorial = {
  slug: "flower",
  name: "Rose",
  description: "A beautiful rose flower, showing how to layer overlapping petals outwards from a central spiral bud.",
  difficulty: "easy",
  viewBox: "0 0 400 420",
  steps: [
    {
      id: 1,
      title: "Center guide circle",
      instruction: "Draw a light circular guideline in the center to map the rosebud core.",
      strokes: [
        { id: "rose-center-guide", shape: { type: "circle", cx: 200, cy: 190, r: 25 }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Outer boundary guide",
      instruction: "Add a larger light circle around the center to define the final bloom size.",
      strokes: [
        { id: "rose-outer-guide", shape: { type: "circle", cx: 200, cy: 190, r: 85 }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Stem guide",
      instruction: "Sketch a gentle curved vertical guideline down from the bottom of the flower base.",
      strokes: [
        { id: "rose-stem-guide", shape: { type: "path", d: "M200,215 Q180,300 200,380" }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Rose core bud",
      instruction: "Ink a tight, swirling shape in the very center to form the core of the rosebud.",
      strokes: [
        { id: "rose-swirl", shape: { type: "path", d: "M195,188 Q200,175 208,183 Q210,195 198,198 Q190,192 200,182" } }
      ],
      hideStrokeIds: ["rose-center-guide"]
    },
    {
      id: 5,
      title: "Core wrap petal",
      instruction: "Draw a small loop enclosing the center swirl representing the first folded petal.",
      strokes: [
        { id: "rose-core-wrap", shape: { type: "path", d: "M185,180 C185,165 215,165 215,180 C215,195 185,195 185,180 Z" } }
      ]
    },
    {
      id: 6,
      title: "First inner petal",
      instruction: "Add a soft arching line wrapping around the top-left of the core.",
      strokes: [
        { id: "rose-inner-p1", shape: { type: "path", d: "M178,185 C170,160 195,150 210,160" } }
      ]
    },
    {
      id: 7,
      title: "Second inner petal",
      instruction: "Add a matching wrap line around the right side of the core.",
      strokes: [
        { id: "rose-inner-p2", shape: { type: "path", d: "M210,160 C230,165 235,200 215,205" } }
      ]
    },
    {
      id: 8,
      title: "Third inner petal",
      instruction: "Complete the inner layer with a base petal closing the bottom of the bud.",
      strokes: [
        { id: "rose-inner-p3", shape: { type: "path", d: "M215,205 C205,220 180,215 178,185" } }
      ]
    },
    {
      id: 9,
      title: "First middle petal",
      instruction: "Add a wider, sweeping petal line around the top-left of the bud.",
      strokes: [
        { id: "rose-mid-p1", shape: { type: "path", d: "M165,170 C155,135 200,125 220,140" } }
      ]
    },
    {
      id: 10,
      title: "Second middle petal",
      instruction: "Add a sweeping petal flanking the right side.",
      strokes: [
        { id: "rose-mid-p2", shape: { type: "path", d: "M220,140 C250,150 260,190 235,215" } }
      ]
    },
    {
      id: 11,
      title: "Third middle petal",
      instruction: "Ink the bottom petal of the middle layer to cup the bloom.",
      strokes: [
        { id: "rose-mid-p3", shape: { type: "path", d: "M235,215 C210,240 170,230 165,170" } }
      ]
    },
    {
      id: 12,
      title: "Left outer petal",
      instruction: "Draw the first massive outer petal extending all the way to the guide circle on the left.",
      strokes: [
        { id: "rose-outer-p1", shape: { type: "path", d: "M150,160 C130,110 190,95 210,105" } }
      ]
    },
    {
      id: 13,
      title: "Right outer petal",
      instruction: "Draw the second massive outer petal on the right.",
      strokes: [
        { id: "rose-outer-p2", shape: { type: "path", d: "M210,105 C230,95 290,110 270,170" } }
      ]
    },
    {
      id: 14,
      title: "Bottom outer petal",
      instruction: "Draw the final outer base petals to finish the flower head bloom outline. The guidelines are complete.",
      strokes: [
        { id: "rose-outer-p3", shape: { type: "path", d: "M270,170 C280,230 210,280 190,260 C160,275 130,215 150,160" } }
      ],
      hideStrokeIds: ["rose-outer-guide"]
    },
    {
      id: 15,
      title: "Stem outline",
      instruction: "Ink the final thick organic stem line down along the guideline.",
      strokes: [
        { id: "rose-stem", shape: { type: "path", d: "M200,260 Q180,320 200,380" } }
      ],
      hideStrokeIds: ["rose-stem-guide"]
    },
    {
      id: 16,
      title: "Leaves",
      instruction: "Draw two pointed leaves branching off from the stem.",
      strokes: [
        { id: "rose-leaves", shape: { type: "path", d: "M188,300 C160,290 150,315 183,320 Z M200,330 C230,325 240,350 208,355 Z" } }
      ]
    },
    {
      id: 17,
      title: "Leaf veins",
      instruction: "Add a central rib line and tiny vein details inside the leaves.",
      strokes: [
        { id: "rose-veins", shape: { type: "path", d: "M188,300 Q170,305 160,308 M183,320 Q170,318 160,308 M200,330 Q220,335 230,338 M208,355 Q220,348 230,338" } }
      ]
    }
  ]
};

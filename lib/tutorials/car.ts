import type { Tutorial } from "../types";

export const carTutorial: Tutorial = {
  slug: "car",
  name: "Sedan Car",
  description: "A classic side-profile sedan car, demonstrating how to align wheels and build the cabin using straight horizontal and diagonal construction lines.",
  difficulty: "medium",
  viewBox: "0 0 400 400",
  steps: [
    {
      id: 1,
      title: "Chassis guide box",
      instruction: "Draw a long, light rectangle to map out the length and height of the main car body.",
      strokes: [
        { id: "car-body-box", shape: { type: "path", d: "M40,220 L360,220 L360,280 L40,280 Z" }, isGuide: true }
      ]
    },
    {
      id: 2,
      title: "Cabin guide box",
      instruction: "Sketch a smaller box on top of the main body for the windshield, roof, and rear window.",
      strokes: [
        { id: "car-cabin-box", shape: { type: "path", d: "M100,160 L280,160 L300,220 L80,220 Z" }, isGuide: true }
      ]
    },
    {
      id: 3,
      title: "Wheel location guides",
      instruction: "Draw two light circles in the bottom half of the chassis box for the wheels.",
      strokes: [
        { id: "car-wheel-guide-l", shape: { type: "circle", cx: 110, cy: 280, r: 26 }, isGuide: true },
        { id: "car-wheel-guide-r", shape: { type: "circle", cx: 290, cy: 280, r: 26 }, isGuide: true }
      ]
    },
    {
      id: 4,
      title: "Ground line guide",
      instruction: "Sketch a flat guideline underneath the wheels to anchor the car.",
      strokes: [
        { id: "car-ground-guide", shape: { type: "line", x1: 20, y1: 308, x2: 380, y2: 308 }, isGuide: true }
      ]
    },
    {
      id: 5,
      title: "Cabin roof outline",
      instruction: "Ink the final flat roof and diagonal pillars for the windshield and back window over the guide.",
      strokes: [
        { id: "car-cabin-outline", shape: { type: "path", d: "M100,220 L135,160 L245,160 L280,220" } }
      ]
    },
    {
      id: 6,
      title: "Hood and trunk lines",
      instruction: "Draw the straight horizontal lines for the front engine hood and the rear trunk.",
      strokes: [
        { id: "car-hood", shape: { type: "line", x1: 100, y1: 220, x2: 40, y2: 220 } },
        { id: "car-trunk", shape: { type: "line", x1: 280, y1: 220, x2: 350, y2: 220 } }
      ]
    },
    {
      id: 7,
      title: "Bumpers",
      instruction: "Ink the vertical front nose and rear bumper lines dropping down from the hood and trunk.",
      strokes: [
        { id: "car-bumper-front", shape: { type: "line", x1: 40, y1: 220, x2: 35, y2: 260 } },
        { id: "car-bumper-rear", shape: { type: "line", x1: 350, y1: 220, x2: 355, y2: 260 } }
      ]
    },
    {
      id: 8,
      title: "Bottom bumpers",
      instruction: "Draw short horizontal lines at the bottom corner for the front and rear chin spoilers.",
      strokes: [
        { id: "car-chin-f", shape: { type: "line", x1: 35, y1: 260, x2: 75, y2: 260 } },
        { id: "car-chin-r", shape: { type: "line", x1: 355, y1: 260, x2: 325, y2: 260 } }
      ]
    },
    {
      id: 9,
      title: "Wheel arches",
      instruction: "Draw curved semi-circles over the wheels to form the wheel wells.",
      strokes: [
        { id: "car-well-l", shape: { type: "path", d: "M75,260 C75,225 145,225 145,260" } },
        { id: "car-well-r", shape: { type: "path", d: "M255,260 C255,225 325,225 325,260" } }
      ],
      hideStrokeIds: ["car-body-box"]
    },
    {
      id: 10,
      title: "Rocker panel line",
      instruction: "Draw the straight line under the doors connecting the left and right wheel wells.",
      strokes: [
        { id: "car-rocker", shape: { type: "line", x1: 145, y1: 260, x2: 255, y2: 260 } }
      ],
      hideStrokeIds: ["car-cabin-box"]
    },
    {
      id: 11,
      title: "Outer tires",
      instruction: "Ink the final circular outer lines for the tires.",
      strokes: [
        { id: "car-tire-l", shape: { type: "circle", cx: 110, cy: 280, r: 25 } },
        { id: "car-tire-r", shape: { type: "circle", cx: 290, cy: 280, r: 25 } }
      ],
      hideStrokeIds: ["car-wheel-guide-l", "car-wheel-guide-r"]
    },
    {
      id: 12,
      title: "Hubcaps",
      instruction: "Add small circles in the center of the wheels for the metal rims.",
      strokes: [
        { id: "car-rim-l", shape: { type: "circle", cx: 110, cy: 280, r: 10 } },
        { id: "car-rim-r", shape: { type: "circle", cx: 290, cy: 280, r: 10 } }
      ]
    },
    {
      id: 13,
      title: "Windows division",
      instruction: "Draw vertical window pillars to divide the side windows into front and back panes.",
      strokes: [
        { id: "car-windows", shape: { type: "path", d: "M142,160 L145,220 M238,160 L235,220 M188,160 L188,220" } }
      ]
    },
    {
      id: 14,
      title: "Door seam — front",
      instruction: "Add a vertical seam showing where the front door opens.",
      strokes: [
        { id: "car-door-f", shape: { type: "line", x1: 145, y1: 220, x2: 145, y2: 260 } }
      ]
    },
    {
      id: 15,
      title: "Door seam — rear",
      instruction: "Add the vertical seam for the back door.",
      strokes: [
        { id: "car-door-r", shape: { type: "line", x1: 235, y1: 220, x2: 235, y2: 260 } }
      ]
    },
    {
      id: 16,
      title: "Handles",
      instruction: "Sketch two short horizontal lines for the front and back door handles.",
      strokes: [
        { id: "car-handles", shape: { type: "path", d: "M155,228 L170,228 M200,228 L215,228" } }
      ]
    },
    {
      id: 17,
      title: "Lights",
      instruction: "Ink simple rectangles on the front and back corners for the headlights and taillights.",
      strokes: [
        { id: "car-lights", shape: { type: "path", d: "M36,228 L45,228 L45,242 L36,242 Z M348,228 L354,228 L354,242 L348,242 Z" } }
      ]
    },
    {
      id: 18,
      title: "Character trim line",
      instruction: "Draw a straight aesthetic crease line running along the side of the car body.",
      strokes: [
        { id: "car-trim", shape: { type: "line", x1: 45, y1: 242, x2: 348, y2: 242 } }
      ]
    },
    {
      id: 19,
      title: "Ground line",
      instruction: "Finish with a solid ink line representing the shadow on the ground.",
      strokes: [
        { id: "car-ground", shape: { type: "line", x1: 20, y1: 307, x2: 380, y2: 307 } }
      ],
      hideStrokeIds: ["car-ground-guide"]
    }
  ]
};

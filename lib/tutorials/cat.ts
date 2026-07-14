import type { Tutorial } from '../types';

export const catTutorial: Tutorial = {
  slug: 'cat',
  name: 'Cat',
  description:
    'A sitting cat, front-facing — 26 frames starting from a simple head guide circle.',
  difficulty: 'easy',
  viewBox: '0 0 400 460',
  steps: [
    {
      id: 1,
      title: 'Head guide',
      instruction:
        'Draw a light circle to map out the size and position of the head.',
      strokes: [
        {
          id: 'cat-head-guide',
          shape: { type: 'circle', cx: 200, cy: 145, r: 78 },
          isGuide: true,
        },
      ],
    },
    {
      id: 2,
      title: 'Center guides',
      instruction: 'Add vertical and horizontal guidelines for symmetry.',
      strokes: [
        {
          id: 'cat-center-v',
          shape: { type: 'line', x1: 200, y1: 75, x2: 200, y2: 215 },
          isGuide: true,
        },
        {
          id: 'cat-center-h',
          shape: { type: 'line', x1: 130, y1: 145, x2: 270, y2: 145 },
          isGuide: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Ear guides',
      instruction: 'Mark two rounded triangular guides for the ears.',
      strokes: [
        {
          id: 'cat-ear-guide-l',
          shape: { type: 'path', d: 'M135,105 L115,45 L175,85 Z' },
          isGuide: true,
        },
        {
          id: 'cat-ear-guide-r',
          shape: { type: 'path', d: 'M265,105 L285,45 L225,85 Z' },
          isGuide: true,
        },
      ],
    },
    {
      id: 4,
      title: 'Left ear',
      instruction: 'Ink the final rounded ear shape.',
      strokes: [
        {
          id: 'cat-ear-left',
          shape: {
            type: 'path',
            d: 'M138,108 Q122,68 128,48 Q145,65 170,88 Z',
          },
        },
      ],
    },
    {
      id: 5,
      title: 'Right ear',
      instruction: 'Mirror for the right ear.',
      strokes: [
        {
          id: 'cat-ear-right',
          shape: {
            type: 'path',
            d: 'M262,108 Q278,68 272,48 Q255,65 230,88 Z',
          },
        },
      ],
    },
    {
      id: 6,
      title: 'Inner ears',
      instruction: 'Add soft inner ear details.',
      strokes: [
        {
          id: 'cat-ear-inner-l',
          shape: { type: 'path', d: 'M150,98 Q140,72 148,55' },
        },
        {
          id: 'cat-ear-inner-r',
          shape: { type: 'path', d: 'M250,98 Q260,72 252,55' },
        },
      ],
      hideStrokeIds: ['cat-ear-guide-l', 'cat-ear-guide-r'],
    },
    {
      id: 7,
      title: 'Face outline',
      instruction: 'Draw a soft, rounded face with chubby cheeks.',
      strokes: [
        {
          id: 'cat-face-outline',
          shape: {
            type: 'path',
            d: 'M128,152 Q130,112 160,88 Q200,72 240,88 Q270,115 272,155 Q268,195 240,215 Q200,225 160,212 Q130,190 128,152 Z',
          },
        },
      ],
      hideStrokeIds: ['cat-head-guide', 'cat-center-v', 'cat-center-h'],
    },
    {
      id: 8,
      title: 'Eye guide',
      instruction: 'Add a horizontal guide for eye placement.',
      strokes: [
        {
          id: 'cat-eye-guide',
          shape: { type: 'line', x1: 145, y1: 148, x2: 255, y2: 148 },
          isGuide: true,
        },
      ],
    },
    {
      id: 9,
      title: 'Left eye',
      instruction: 'Draw big, expressive almond-shaped eyes.',
      strokes: [
        {
          id: 'cat-eye-left',
          shape: {
            type: 'path',
            d: 'M165,145 Q175,135 188,140 Q195,148 185,155 Q172,153 165,145 Z',
          },
        },
      ],
    },
    {
      id: 10,
      title: 'Right eye',
      instruction: 'Mirror the right eye.',
      strokes: [
        {
          id: 'cat-eye-right',
          shape: {
            type: 'path',
            d: 'M235,145 Q225,135 212,140 Q205,148 215,155 Q228,153 235,145 Z',
          },
        },
      ],
      hideStrokeIds: ['cat-eye-guide'],
    },
    {
      id: 11,
      title: 'Pupils & Highlights',
      instruction: 'Add pupils and tiny sparkle highlights.',
      strokes: [
        {
          id: 'cat-pupil-l',
          shape: { type: 'ellipse', cx: 177, cy: 147, rx: 7, ry: 8.5 },
        },
        {
          id: 'cat-pupil-r',
          shape: { type: 'ellipse', cx: 223, cy: 147, rx: 7, ry: 8.5 },
        },
        {
          id: 'cat-pupil-hl-l',
          shape: { type: 'circle', cx: 174, cy: 143.5, r: 2.2 },
        },
        {
          id: 'cat-pupil-hl-r',
          shape: { type: 'circle', cx: 220, cy: 143.5, r: 2.2 },
        },
      ],
    },
    {
      id: 12,
      title: 'Nose',
      instruction: 'Draw a small, cute triangular nose.',
      strokes: [
        {
          id: 'cat-nose',
          shape: { type: 'path', d: 'M190,170 L210,170 L200,182 Z' },
        },
      ],
    },
    {
      id: 13,
      title: 'Mouth',
      instruction: 'Add the classic gentle cat smile.',
      strokes: [
        {
          id: 'cat-mouth',
          shape: {
            type: 'path',
            d: 'M200,182 L200,190 M185,193 Q192,198 200,193 M215,193 Q208,198 200,193',
          },
        },
      ],
    },
    {
      id: 14,
      title: 'Whiskers',
      instruction: 'Add three whiskers on each cheek.',
      strokes: [
        {
          id: 'cat-whiskers-l',
          shape: {
            type: 'path',
            d: 'M145,185 L105,178 M147,193 L102,193 M145,201 L107,208',
          },
        },
        {
          id: 'cat-whiskers-r',
          shape: {
            type: 'path',
            d: 'M255,185 L295,178 M253,193 L298,193 M255,201 L293,208',
          },
        },
      ],
    },
    {
      id: 15,
      title: 'Body guide',
      instruction: 'Sketch a large oval for the body.',
      strokes: [
        {
          id: 'cat-body-guide',
          shape: { type: 'ellipse', cx: 200, cy: 325, rx: 88, ry: 105 },
          isGuide: true,
        },
      ],
    },
    {
      id: 16,
      title: 'Body outline',
      instruction: 'Trace a soft, rounded body shape.',
      strokes: [
        {
          id: 'cat-body-outline',
          shape: {
            type: 'path',
            d: 'M125,235 Q120,280 135,320 Q140,380 165,410 Q200,425 235,410 Q265,375 270,320 Q280,265 245,235 Q220,225 200,230 Q165,225 125,235 Z',
          },
        },
      ],
      hideStrokeIds: ['cat-body-guide'],
    },
    {
      id: 17,
      title: 'Chest fluff',
      instruction: 'Add a soft chest fluff line.',
      strokes: [
        {
          id: 'cat-chest-fluff',
          shape: { type: 'path', d: 'M165,245 Q200,255 235,245' },
        },
      ],
    },
    {
      id: 18,
      title: 'Front paws',
      instruction: 'Draw two cute rounded front paws with toes.',
      strokes: [
        {
          id: 'cat-front-paw-l',
          shape: { type: 'ellipse', cx: 165, cy: 395, rx: 26, ry: 18 },
        },
        {
          id: 'cat-front-paw-r',
          shape: { type: 'ellipse', cx: 235, cy: 395, rx: 26, ry: 18 },
        },
        {
          id: 'cat-toes',
          shape: {
            type: 'path',
            d: 'M152,398 L152,408 M170,397 L170,407 M182,397 L182,407 M218,397 L218,407 M230,397 L230,407 M248,398 L248,408',
          },
        },
      ],
    },
    {
      id: 19,
      title: 'Back legs',
      instruction: 'Add rounded back haunches.',
      strokes: [
        {
          id: 'cat-back-leg-l',
          shape: {
            type: 'path',
            d: 'M130,310 Q110,340 125,385 Q145,400 160,385',
          },
        },
        {
          id: 'cat-back-leg-r',
          shape: {
            type: 'path',
            d: 'M270,310 Q290,340 275,385 Q255,400 240,385',
          },
        },
      ],
    },
    {
      id: 20,
      title: 'Tail guide',
      instruction: 'Draw a light curving guide for the tail.',
      strokes: [
        {
          id: 'cat-tail-guide',
          shape: {
            type: 'path',
            d: 'M265,355 Q320,370 335,310 Q340,260 310,245',
          },
          isGuide: true,
        },
      ],
    },
    {
      id: 21,
      title: 'Tail',
      instruction: 'Ink the final fluffy tail.',
      strokes: [
        {
          id: 'cat-tail',
          shape: {
            type: 'path',
            d: 'M262,352 Q305,365 328,325 Q335,280 315,255 Q295,245 275,260',
          },
        },
      ],
      hideStrokeIds: ['cat-tail-guide'],
    },
    {
      id: 22,
      title: 'Final details',
      instruction:
        'Add final touches: cheek blush, fur texture, and expression lines.',
      strokes: [
        {
          id: 'cat-cheek-l',
          shape: { type: 'path', d: 'M145,175 Q140,185 148,192' },
        },
        {
          id: 'cat-cheek-r',
          shape: { type: 'path', d: 'M255,175 Q260,185 252,192' },
        },
        {
          id: 'cat-belly-fur',
          shape: {
            type: 'path',
            d: 'M165,330 Q200,345 235,330 M162,355 Q200,365 238,355',
          },
        },
        {
          id: 'cat-body-shadow',
          shape: { type: 'path', d: 'M145,280 Q140,320 150,370' },
        },
      ],
    },
  ],
};

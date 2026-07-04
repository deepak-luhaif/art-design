import type { Step, SvgElementSpec, Tutorial } from "@/lib/types";

const INK = 3.5;
const INK_THIN = 2.25;
const GUIDE = 1.75;
const guideProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: GUIDE,
  strokeDasharray: "5 5",
  opacity: 0.4,
} as const;
const inkProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: INK,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const inkThinProps = {
  ...inkProps,
  strokeWidth: INK_THIN,
};

export const steps: Step[] = [
  { id: 1, title: "Head guide", instruction: "Draw a light circle to map out the size and position of the head." },
  { id: 2, title: "Center guides", instruction: "Add a vertical and horizontal guideline through the circle so the face comes out symmetric." },
  { id: 3, title: "Ear guides", instruction: "Mark two small triangles at the top of the head circle for the ears." },
  { id: 4, title: "Left ear", instruction: "Ink the final rounded-triangle shape of the left ear over its guide." },
  { id: 5, title: "Right ear", instruction: "Mirror it for the right ear." },
  { id: 6, title: "Inner ears", instruction: "Add a soft curved line inside each ear." },
  { id: 7, title: "Face outline", instruction: "Trace the rounded cheeks and chin over the guide circle, then let the circle fade away." },
  { id: 8, title: "Eye line", instruction: "Add a light horizontal guide across the face to line up the eyes." },
  { id: 9, title: "Left eye", instruction: "Draw a wide oval left eye sitting on the guide." },
  { id: 10, title: "Right eye", instruction: "Draw the matching right eye — the guide line has done its job, so it disappears now." },
  { id: 11, title: "Pupils", instruction: "Add a round pupil in each eye with a tiny highlight dot for sparkle." },
  { id: 12, title: "Nose", instruction: "Add a small triangle nose right between the eyes." },
  { id: 13, title: "Mouth", instruction: "Draw the classic cat smile: a short stem and two soft curves." },
  { id: 14, title: "Jaw crease", instruction: "Add one small curved line under the chin for definition." },
  { id: 15, title: "Whiskers", instruction: "Add three short whisker lines to each cheek." },
  { id: 16, title: "Body guide", instruction: "Sketch a big oval below the head to map out the body." },
  { id: 17, title: "Neck guides", instruction: "Connect the head to the body with two short guide lines." },
  { id: 18, title: "Body outline", instruction: "Trace the final rounded body shape over the guides, then let them fade away." },
  { id: 19, title: "Chest fluff", instruction: "Add one soft curve just under the chin where the head meets the chest." },
  { id: 20, title: "Front paw guides", instruction: "Add two short guide lines for where the front paws tuck in." },
  { id: 21, title: "Front paws", instruction: "Ink two rounded paws over the guides, with a couple of toe lines." },
  { id: 22, title: "Back leg guides", instruction: "Sketch the haunch bumps where the back legs tuck under the body." },
  { id: 23, title: "Back legs", instruction: "Ink the rounded haunches on each side." },
  { id: 24, title: "Tail guide", instruction: "Draw a light curling line for the tail's path." },
  { id: 25, title: "Tail", instruction: "Ink the final tail curling out from the body." },
  { id: 26, title: "Final details", instruction: "Finish with a couple of soft fold lines on the cheeks and belly." },
];

export const elements: SvgElementSpec[] = [
  // 1 — head guide circle
  {
    step: 1,
    hideAt: 7,
    element: <circle key="head-guide" data-step={1} data-hide={7} cx={200} cy={150} r={72} {...guideProps} />,
  },
  // 2 — center cross guides
  {
    step: 2,
    hideAt: 7,
    element: (
      <g key="center-guides" data-step={2} data-hide={7}>
        <line x1={200} y1={82} x2={200} y2={218} {...guideProps} />
        <line x1={132} y1={150} x2={268} y2={150} {...guideProps} />
      </g>
    ),
  },
  // 3 — ear guide triangles
  {
    step: 3,
    hideAt: 6,
    element: (
      <g key="ear-guides" data-step={3} data-hide={6}>
        <path d="M144,110 L128,40 L180,88 Z" {...guideProps} />
        <path d="M256,110 L272,40 L220,88 Z" {...guideProps} />
      </g>
    ),
  },
  // 4 — left ear final
  {
    step: 4,
    element: (
      <path
        key="ear-left"
        data-step={4}
        d="M142,112 C128,88 120,58 130,32 C148,52 168,72 178,90 Z"
        {...inkProps}
      />
    ),
  },
  // 5 — right ear final
  {
    step: 5,
    element: (
      <path
        key="ear-right"
        data-step={5}
        d="M258,112 C272,88 280,58 270,32 C252,52 232,72 222,90 Z"
        {...inkProps}
      />
    ),
  },
  // 6 — inner ears
  {
    step: 6,
    element: (
      <g key="ear-inner" data-step={6}>
        <path d="M148,96 Q138,72 144,46" {...inkThinProps} />
        <path d="M252,96 Q262,72 256,46" {...inkThinProps} />
      </g>
    ),
  },
  // 7 — face outline
  {
    step: 7,
    element: (
      <path
        key="face-outline"
        data-step={7}
        d="M130,150 C130,104 162,80 200,80 C238,80 270,104 270,150 C270,190 248,220 200,224 C152,220 130,190 130,150 Z"
        {...inkProps}
      />
    ),
  },
  // 8 — eye guide line
  {
    step: 8,
    hideAt: 10,
    element: <line key="eye-guide" data-step={8} data-hide={10} x1={150} y1={150} x2={250} y2={150} {...guideProps} />,
  },
  // 9 — left eye
  {
    step: 9,
    element: <ellipse key="eye-left" data-step={9} cx={178} cy={150} rx={13} ry={11} {...inkThinProps} />,
  },
  // 10 — right eye
  {
    step: 10,
    element: <ellipse key="eye-right" data-step={10} cx={222} cy={150} rx={13} ry={11} {...inkThinProps} />,
  },
  // 11 — pupils + highlights
  {
    step: 11,
    element: (
      <g key="pupils" data-step={11}>
        <circle cx={178} cy={151} r={6.5} fill="currentColor" stroke="none" />
        <circle cx={222} cy={151} r={6.5} fill="currentColor" stroke="none" />
        <circle cx={175.5} cy={148} r={1.8} fill="var(--color-bg)" stroke="none" />
        <circle cx={219.5} cy={148} r={1.8} fill="var(--color-bg)" stroke="none" />
      </g>
    ),
  },
  // 12 — nose
  {
    step: 12,
    element: <path key="nose" data-step={12} d="M193,168 L207,168 L200,178 Z" fill="currentColor" stroke="none" />,
  },
  // 13 — mouth
  {
    step: 13,
    element: (
      <path
        key="mouth"
        data-step={13}
        d="M200,178 L200,185 M200,185 Q188,196 178,187 M200,185 Q212,196 222,187"
        {...inkThinProps}
      />
    ),
  },
  // 14 — jaw crease
  {
    step: 14,
    element: <path key="jaw-crease" data-step={14} d="M180,218 Q200,226 220,218" {...inkThinProps} opacity={0.7} />,
  },
  // 15 — whiskers
  {
    step: 15,
    element: (
      <g key="whiskers" data-step={15} {...inkThinProps} opacity={0.85}>
        <line x1={152} y1={180} x2={106} y2={172} />
        <line x1={150} y1={190} x2={104} y2={190} />
        <line x1={152} y1={200} x2={106} y2={208} />
        <line x1={248} y1={180} x2={294} y2={172} />
        <line x1={250} y1={190} x2={296} y2={190} />
        <line x1={248} y1={200} x2={294} y2={208} />
      </g>
    ),
  },
  // 16 — body guide oval
  {
    step: 16,
    hideAt: 18,
    element: <ellipse key="body-guide" data-step={16} data-hide={18} cx={200} cy={318} rx={92} ry={104} {...guideProps} />,
  },
  // 17 — neck guides
  {
    step: 17,
    hideAt: 18,
    element: (
      <g key="neck-guides" data-step={17} data-hide={18}>
        <line x1={168} y1={218} x2={168} y2={214} {...guideProps} />
        <line x1={232} y1={218} x2={232} y2={214} {...guideProps} />
      </g>
    ),
  },
  // 18 — body outline
  {
    step: 18,
    element: (
      <path
        key="body-outline"
        data-step={18}
        d="M168,214 C142,226 130,264 134,314 C138,372 162,418 200,422 C238,418 262,372 266,314 C270,264 258,226 232,214 C218,222 182,222 168,214 Z"
        {...inkProps}
      />
    ),
  },
  // 19 — chest fluff
  {
    step: 19,
    element: <path key="chest-fluff" data-step={19} d="M182,232 Q200,240 218,232" {...inkThinProps} opacity={0.7} />,
  },
  // 20 — front paw guides
  {
    step: 20,
    hideAt: 21,
    element: (
      <g key="front-paw-guides" data-step={20} data-hide={21}>
        <line x1={178} y1={380} x2={178} y2={400} {...guideProps} />
        <line x1={222} y1={380} x2={222} y2={400} {...guideProps} />
      </g>
    ),
  },
  // 21 — front paws
  {
    step: 21,
    element: (
      <g key="front-paws" data-step={21}>
        <ellipse cx={178} cy={400} rx={22} ry={15} {...inkProps} />
        <ellipse cx={222} cy={400} rx={22} ry={15} {...inkProps} />
        <path d="M170,406 L170,414 M186,406 L186,414" {...inkThinProps} opacity={0.8} />
        <path d="M214,406 L214,414 M230,406 L230,414" {...inkThinProps} opacity={0.8} />
      </g>
    ),
  },
  // 22 — back leg guides (haunch bumps)
  {
    step: 22,
    hideAt: 23,
    element: (
      <g key="back-leg-guides" data-step={22} data-hide={23}>
        <path d="M136,296 Q116,338 138,376" {...guideProps} />
        <path d="M264,296 Q284,338 262,376" {...guideProps} />
      </g>
    ),
  },
  // 23 — back legs (haunches)
  {
    step: 23,
    element: (
      <g key="back-legs" data-step={23}>
        <path d="M134,292 Q104,336 130,380 Q148,392 162,376" {...inkProps} />
        <path d="M266,292 Q296,336 270,380 Q252,392 238,376" {...inkProps} />
      </g>
    ),
  },
  // 24 — tail guide
  {
    step: 24,
    hideAt: 25,
    element: (
      <path
        key="tail-guide"
        data-step={24}
        data-hide={25}
        d="M258,340 Q316,326 320,276 Q322,244 298,236"
        {...guideProps}
      />
    ),
  },
  // 25 — tail final
  {
    step: 25,
    element: (
      <path
        key="tail"
        data-step={25}
        d="M256,334 C296,322 316,288 312,254 C309,230 288,222 272,232 C286,236 299,246 301,264 C303,286 288,310 254,318"
        {...inkProps}
      />
    ),
  },
  // 26 — final details
  {
    step: 26,
    element: (
      <g key="final-details" data-step={26} {...inkThinProps} opacity={0.55}>
        <path d="M148,182 Q153,188 148,194" />
        <path d="M252,182 Q247,188 252,194" />
        <path d="M172,340 Q200,332 228,340" />
        <path d="M168,378 Q200,368 232,378" />
      </g>
    ),
  },
];

export const catTutorial: Tutorial = {
  slug: "cat",
  name: "Cat",
  subtitle: "A sitting cat, front-facing — 26 steps",
  viewBox: "0 0 400 460",
  steps,
  elements,
};

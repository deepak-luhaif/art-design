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
  { id: 1, title: "Head guide", instruction: "Draw a light circle for the head." },
  { id: 2, title: "Center guides", instruction: "Add a vertical and horizontal guideline through the head to keep the face centered." },
  { id: 3, title: "Torso guide", instruction: "Sketch a loose shoulders-to-waist shape below the head." },
  { id: 4, title: "Hip guide", instruction: "Add a guideline marking the hip width." },
  { id: 5, title: "Neck guides", instruction: "Connect the head to the shoulders with two short guide lines." },
  { id: 6, title: "Head outline", instruction: "Trace the final rounded head shape over the guide circle, then let it fade away." },
  { id: 7, title: "Neckline", instruction: "Add a soft curve at the base of the neck for the collar." },
  { id: 8, title: "Torso outline", instruction: "Ink the final shirt silhouette over the guides, then let them fade away." },
  { id: 9, title: "Arm guides", instruction: "Add two straight guide lines from each shoulder down to the wrists." },
  { id: 10, title: "Left arm", instruction: "Ink the final sleeve shape over the left guide." },
  { id: 11, title: "Right arm", instruction: "Mirror it for the right sleeve — the arm guides have done their job now." },
  { id: 12, title: "Left hand", instruction: "Add a simple rounded hand at the end of the left sleeve." },
  { id: 13, title: "Right hand", instruction: "Add the matching right hand." },
  { id: 14, title: "Leg guides", instruction: "Add two guide lines from the hips down to the ankles." },
  { id: 15, title: "Left leg", instruction: "Ink the final pant leg shape over the left guide." },
  { id: 16, title: "Right leg", instruction: "Mirror it for the right leg — the leg guides fade away now." },
  { id: 17, title: "Left foot", instruction: "Add a simple shoe shape at the bottom of the left leg." },
  { id: 18, title: "Right foot", instruction: "Add the matching right shoe." },
  { id: 19, title: "Eye line", instruction: "Add a light horizontal guide across the face for the eyes." },
  { id: 20, title: "Eyes", instruction: "Draw two small eyes on the guide — it fades away now." },
  { id: 21, title: "Eyebrows", instruction: "Add a short curved brow above each eye." },
  { id: 22, title: "Nose", instruction: "Add a small curved line for the nose." },
  { id: 23, title: "Mouth", instruction: "Draw a simple curved smile." },
  { id: 24, title: "Ears", instruction: "Add a small curved bump on each side of the head." },
  { id: 25, title: "Hair", instruction: "Draw a simple hairstyle over the top of the head." },
  { id: 26, title: "Clothing folds", instruction: "Add a few soft lines on the shirt and sleeves for fabric folds." },
  { id: 27, title: "Final details", instruction: "Finish with a center seam on the pants and simple straps on the shoes." },
];

export const elements: SvgElementSpec[] = [
  // 1 — head guide
  {
    step: 1,
    hideAt: 6,
    element: <circle key="head-guide" data-step={1} data-hide={6} cx={200} cy={92} r={46} {...guideProps} />,
  },
  // 2 — center guides
  {
    step: 2,
    hideAt: 6,
    element: (
      <g key="center-guides" data-step={2} data-hide={6}>
        <line x1={200} y1={48} x2={200} y2={136} {...guideProps} />
        <line x1={156} y1={92} x2={244} y2={92} {...guideProps} />
      </g>
    ),
  },
  // 3 — torso guide
  {
    step: 3,
    hideAt: 8,
    element: (
      <path key="torso-guide" data-step={3} data-hide={8} d="M126,142 L274,142 L256,330 L144,330 Z" {...guideProps} />
    ),
  },
  // 4 — hip guide
  {
    step: 4,
    hideAt: 8,
    element: <line key="hip-guide" data-step={4} data-hide={8} x1={150} y1={350} x2={250} y2={350} {...guideProps} />,
  },
  // 5 — neck guides
  {
    step: 5,
    hideAt: 8,
    element: (
      <g key="neck-guides" data-step={5} data-hide={8}>
        <line x1={178} y1={134} x2={170} y2={142} {...guideProps} />
        <line x1={222} y1={134} x2={230} y2={142} {...guideProps} />
      </g>
    ),
  },
  // 6 — head outline
  {
    step: 6,
    element: (
      <path
        key="head-outline"
        data-step={6}
        d="M154,92 C154,64 174,44 200,44 C226,44 246,64 246,92 C246,112 238,128 224,138 C210,146 190,146 176,138 C162,128 154,112 154,92 Z"
        {...inkProps}
      />
    ),
  },
  // 7 — neckline / collar
  {
    step: 7,
    element: <path key="neckline" data-step={7} d="M178,140 Q200,156 222,140" {...inkThinProps} />,
  },
  // 8 — torso outline
  {
    step: 8,
    element: (
      <path
        key="torso-outline"
        data-step={8}
        d="M172,140 C140,148 128,180 130,230 C132,280 138,320 150,352 C168,362 232,362 250,352 C262,320 268,280 270,230 C272,180 260,148 228,140 C222,150 178,150 172,140 Z"
        {...inkProps}
      />
    ),
  },
  // 9 — arm guides
  {
    step: 9,
    hideAt: 11,
    element: (
      <g key="arm-guides" data-step={9} data-hide={11}>
        <line x1={132} y1={150} x2={96} y2={300} {...guideProps} />
        <line x1={268} y1={150} x2={304} y2={300} {...guideProps} />
      </g>
    ),
  },
  // 10 — left arm
  {
    step: 10,
    element: (
      <path
        key="arm-left"
        data-step={10}
        d="M136,150 C110,170 96,220 92,280 C90,296 94,308 104,310 C114,308 118,296 118,282 C122,230 134,182 156,156 Z"
        {...inkProps}
      />
    ),
  },
  // 11 — right arm
  {
    step: 11,
    element: (
      <path
        key="arm-right"
        data-step={11}
        d="M264,150 C290,170 304,220 308,280 C310,296 306,308 296,310 C286,308 282,296 282,282 C278,230 266,182 244,156 Z"
        {...inkProps}
      />
    ),
  },
  // 12 — left hand
  {
    step: 12,
    element: (
      <g key="hand-left" data-step={12}>
        <ellipse cx={104} cy={317} rx={13} ry={17} {...inkThinProps} />
        <path d="M94,312 Q88,318 94,326" {...inkThinProps} />
      </g>
    ),
  },
  // 13 — right hand
  {
    step: 13,
    element: (
      <g key="hand-right" data-step={13}>
        <ellipse cx={296} cy={317} rx={13} ry={17} {...inkThinProps} />
        <path d="M306,312 Q312,318 306,326" {...inkThinProps} />
      </g>
    ),
  },
  // 14 — leg guides
  {
    step: 14,
    hideAt: 16,
    element: (
      <g key="leg-guides" data-step={14} data-hide={16}>
        <line x1={168} y1={356} x2={160} y2={560} {...guideProps} />
        <line x1={232} y1={356} x2={240} y2={560} {...guideProps} />
      </g>
    ),
  },
  // 15 — left leg
  {
    step: 15,
    element: (
      <path
        key="leg-left"
        data-step={15}
        d="M154,352 C148,400 146,460 150,520 C151,540 155,556 162,562 C172,558 176,542 174,520 C178,460 182,404 190,358 Z"
        {...inkProps}
      />
    ),
  },
  // 16 — right leg
  {
    step: 16,
    element: (
      <path
        key="leg-right"
        data-step={16}
        d="M246,352 C252,400 254,460 250,520 C249,540 245,556 238,562 C228,558 224,542 226,520 C222,460 218,404 210,358 Z"
        {...inkProps}
      />
    ),
  },
  // 17 — left foot
  {
    step: 17,
    element: <path key="foot-left" data-step={17} d="M150,558 Q145,572 156,576 L182,576 Q188,570 176,562 Z" {...inkProps} />,
  },
  // 18 — right foot
  {
    step: 18,
    element: <path key="foot-right" data-step={18} d="M250,558 Q255,572 244,576 L218,576 Q212,570 224,562 Z" {...inkProps} />,
  },
  // 19 — eye guide line
  {
    step: 19,
    hideAt: 20,
    element: <line key="eye-guide" data-step={19} data-hide={20} x1={170} y1={86} x2={230} y2={86} {...guideProps} />,
  },
  // 20 — eyes
  {
    step: 20,
    element: (
      <g key="eyes" data-step={20}>
        <ellipse cx={182} cy={86} rx={7} ry={8} fill="currentColor" stroke="none" />
        <ellipse cx={218} cy={86} rx={7} ry={8} fill="currentColor" stroke="none" />
      </g>
    ),
  },
  // 21 — eyebrows
  {
    step: 21,
    element: (
      <g key="eyebrows" data-step={21}>
        <path d="M172,72 Q182,66 192,72" {...inkThinProps} />
        <path d="M208,72 Q218,66 228,72" {...inkThinProps} />
      </g>
    ),
  },
  // 22 — nose
  {
    step: 22,
    element: <path key="nose" data-step={22} d="M200,92 Q197,100 201,103" {...inkThinProps} />,
  },
  // 23 — mouth
  {
    step: 23,
    element: <path key="mouth" data-step={23} d="M186,112 Q200,120 214,112" {...inkThinProps} />,
  },
  // 24 — ears
  {
    step: 24,
    element: (
      <g key="ears" data-step={24}>
        <path d="M154,82 Q146,92 154,102" {...inkThinProps} />
        <path d="M246,82 Q254,92 246,102" {...inkThinProps} />
      </g>
    ),
  },
  // 25 — hair
  {
    step: 25,
    element: (
      <path
        key="hair"
        data-step={25}
        d="M152,88 C150,54 172,30 200,30 C228,30 250,54 248,88 C244,70 230,58 214,54 C222,66 220,78 214,86 C206,68 194,68 186,86 C180,78 178,66 186,54 C170,58 156,70 152,88 Z"
        {...inkProps}
      />
    ),
  },
  // 26 — clothing folds
  {
    step: 26,
    element: (
      <g key="clothing-folds" data-step={26} {...inkThinProps} opacity={0.6}>
        <path d="M160,220 Q170,260 162,300" />
        <path d="M240,220 Q230,260 238,300" />
        <path d="M188,150 Q200,158 212,150" />
      </g>
    ),
  },
  // 27 — final details
  {
    step: 27,
    element: (
      <g key="final-details" data-step={27} {...inkThinProps} opacity={0.6}>
        <line x1={200} y1={356} x2={200} y2={520} strokeDasharray="none" />
        <path d="M154,566 L182,566" />
        <path d="M218,566 L246,566" />
      </g>
    ),
  },
];

export const personTutorial: Tutorial = {
  slug: "person",
  name: "Person",
  subtitle: "A simple front-facing figure — 27 steps",
  viewBox: "0 0 400 600",
  steps,
  elements,
};

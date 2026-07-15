import type { Tutorial } from "../types";
import { expandBeginnerSteps } from "./beginner-steps";

export const animeCharacterTutorial: Tutorial = {
  slug: "anime-character",
  name: "Anime Portrait",
  description:
    "A polished anime bust focused on face construction, clear eye hierarchy, layered bangs, and a balanced hair silhouette.",
  difficulty: "medium",
  viewBox: "0 0 400 430",
  steps: expandBeginnerSteps([
    {
      id: 1,
      title: "Skull guide",
      instruction: "Draw a circle for the cranium, leaving room below for the jaw.",
      strokes: [
        { id: "anime-skull-guide", shape: { type: "circle", cx: 200, cy: 142, r: 76 }, isGuide: true },
      ],
    },
    {
      id: 2,
      title: "Face guides",
      instruction: "Add a center line and a slightly lowered eye line for youthful proportions.",
      strokes: [
        { id: "anime-center-guide", shape: { type: "path", d: "M200,62 C197,118 199,183 201,246" }, isGuide: true },
        { id: "anime-eye-guide", shape: { type: "path", d: "M126,164 Q200,151 274,164" }, isGuide: true },
      ],
    },
    {
      id: 3,
      title: "Jaw construction",
      instruction: "Taper from the widest part of the skull into soft cheeks and a narrow chin.",
      strokes: [
        { id: "anime-jaw-guide", shape: { type: "path", d: "M127,144 C131,195 151,229 200,258 C249,229 269,195 273,144" }, isGuide: true },
      ],
    },
    {
      id: 4,
      title: "Face contour",
      instruction: "Ink the final face as two long cheek curves meeting at a softened chin.",
      strokes: [
        { id: "anime-face", shape: { type: "path", d: "M130,138 C129,183 142,222 166,244 C179,256 190,264 200,267 C210,264 221,256 234,244 C258,222 271,183 270,138 C265,96 238,72 200,72 C162,72 135,96 130,138 Z" } },
      ],
      hideStrokeIds: ["anime-skull-guide", "anime-center-guide", "anime-jaw-guide"],
    },
    {
      id: 5,
      title: "Upper lashes",
      instruction: "Make the upper eyelids the strongest facial lines, with a slight lift at the outer corners.",
      strokes: [
        { id: "anime-upper-eye-left", shape: { type: "path", d: "M143,166 C155,151 181,150 190,169 C174,159 156,159 143,166 M143,166 L136,161" } },
        { id: "anime-upper-eye-right", shape: { type: "path", d: "M210,169 C219,150 245,151 257,166 C244,159 226,159 210,169 M257,166 L264,161" } },
      ],
    },
    {
      id: 6,
      title: "Iris and lower lid",
      instruction: "Nest tall irises under the lashes and suggest the lower lids with short, light curves.",
      strokes: [
        { id: "anime-iris-left", shape: { type: "ellipse", cx: 169, cy: 174, rx: 13, ry: 19 } },
        { id: "anime-iris-right", shape: { type: "ellipse", cx: 231, cy: 174, rx: 13, ry: 19 } },
        { id: "anime-lower-lids", shape: { type: "path", d: "M148,182 Q169,194 188,181 M212,181 Q231,194 252,182" } },
      ],
      hideStrokeIds: ["anime-eye-guide"],
    },
    {
      id: 7,
      title: "Pupils and light",
      instruction: "Add dark vertical pupils and reserve one clean highlight in each eye.",
      strokes: [
        { id: "anime-pupils", shape: { type: "path", d: "M169,164 L169,182 M231,164 L231,182" } },
        { id: "anime-highlights", shape: { type: "circle", cx: 164, cy: 168, r: 3 } },
        { id: "anime-highlight-right", shape: { type: "circle", cx: 226, cy: 168, r: 3 } },
      ],
    },
    {
      id: 8,
      title: "Brows and features",
      instruction: "Place slim brows high, then keep the nose and mouth understated.",
      strokes: [
        { id: "anime-brows", shape: { type: "path", d: "M143,136 Q166,123 189,134 M211,134 Q234,123 257,136" } },
        { id: "anime-nose", shape: { type: "path", d: "M198,194 L194,207 L201,210" } },
        { id: "anime-mouth", shape: { type: "path", d: "M183,226 Q200,237 217,226 M190,232 Q200,239 210,232" } },
      ],
    },
    {
      id: 9,
      title: "Ears and neck",
      instruction: "Place the ears between brow and nose level, then drop a narrow neck from the jaw.",
      strokes: [
        { id: "anime-ears", shape: { type: "path", d: "M131,151 C115,150 116,188 135,197 M269,151 C285,150 284,188 265,197" } },
        { id: "anime-inner-ears", shape: { type: "path", d: "M127,165 Q121,176 130,186 M273,165 Q279,176 270,186" } },
        { id: "anime-neck", shape: { type: "path", d: "M174,248 C176,276 174,292 162,305 M226,248 C224,276 226,292 238,305" } },
      ],
    },
    {
      id: 10,
      title: "Hair volume",
      instruction: "Plan a large dome around the skull, leaving air between hair and head.",
      strokes: [
        { id: "anime-hair-guide", shape: { type: "path", d: "M103,167 C96,73 145,35 200,35 C255,35 304,73 297,167" }, isGuide: true },
      ],
    },
    {
      id: 11,
      title: "Outer hair",
      instruction: "Ink the hair as a clear silhouette with longer side pieces framing the jaw.",
      strokes: [
        { id: "anime-hair-outer", shape: { type: "path", d: "M108,178 C98,119 111,75 148,50 C173,32 227,32 252,50 C289,75 302,119 292,178 M112,151 C110,203 103,238 94,267 C111,257 124,238 132,211 M288,151 C290,203 297,238 306,267 C289,257 276,238 268,211" } },
      ],
      hideStrokeIds: ["anime-hair-guide"],
    },
    {
      id: 12,
      title: "Center bangs",
      instruction: "Drop three overlapping, tapered locks from the crown toward the brow line.",
      strokes: [
        { id: "anime-bang-center", shape: { type: "path", d: "M170,70 C174,101 181,128 191,152 C195,126 199,99 200,68 C204,101 207,128 211,153 C222,126 228,99 230,72" } },
      ],
    },
    {
      id: 13,
      title: "Side bangs",
      instruction: "Layer broader locks toward the temples, varying their length for a natural rhythm.",
      strokes: [
        { id: "anime-bang-left", shape: { type: "path", d: "M132,91 C139,121 148,146 159,164 C160,137 162,104 166,76 M113,124 C122,145 130,163 143,177 C140,145 141,117 147,88" } },
        { id: "anime-bang-right", shape: { type: "path", d: "M268,91 C261,121 252,146 241,164 C240,137 238,104 234,76 M287,124 C278,145 270,163 257,177 C260,145 259,117 253,88" } },
      ],
    },
    {
      id: 14,
      title: "Shoulders and collar",
      instruction: "Broaden into a simple bust and use the collar to anchor the neck.",
      strokes: [
        { id: "anime-shoulders", shape: { type: "path", d: "M162,301 C135,307 111,328 101,367 M238,301 C265,307 289,328 299,367" } },
        { id: "anime-collar", shape: { type: "path", d: "M158,301 Q200,329 242,301 M172,315 Q200,338 228,315" } },
      ],
    },
    {
      id: 15,
      title: "Hair accents",
      instruction: "Finish with a few directional strand lines and a small crown break—never outline every strand.",
      strokes: [
        { id: "anime-crown-break", shape: { type: "path", d: "M191,40 L198,24 L204,40 L213,27 L211,43" } },
        { id: "anime-hair-accents", shape: { type: "path", d: "M135,67 Q151,54 169,49 M231,49 Q249,54 265,67 M119,195 Q116,222 107,243 M281,195 Q284,222 293,243" } },
      ],
    },
  ]),
};

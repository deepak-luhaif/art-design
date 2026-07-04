# Project brief: "DrawAlong" — step-by-step drawing tutorial website

Hand this file to Claude Code with:
`claude "Build this project from drawing-tutorial-website-spec.md"`

---

## 1. What we're building

A beginner-friendly, visually beautiful drawing tutorial website built in **Next.js (App Router)**.
Users pick a subject (e.g. "Cat", "Person"), then step through a **20–30 step** illustrated
tutorial, one step at a time, with a progress tracker and a nice big canvas showing the drawing
build up frame by frame.

The site should support **4–5 selectable visual themes** that completely change the personality of
the UI without changing the underlying tutorial content:

1. **Anime** — bold outlines, vibrant gradients, halftone dot textures, speed-line accents, playful
   rounded display font for headings, pastel-to-saturated color pops (magenta/cyan/yellow).
2. **GIF / retro web** — chunky pixel-ish borders, scanline/CRT texture overlay, blinking cursor
   accents, comic-sans-adjacent nostalgic font pairing, looping frame-by-frame animation that mimics
   an old animated GIF (visible frame flicker between steps).
3. **Fine art / gallery** — muted paper-like background, serif display typography, thin hairline
   borders, generous whitespace, sepia/charcoal palette, feels like flipping through a sketchbook or
   museum placard.
4. **Minimal / modern studio** — clean neutral palette, geometric sans-serif, lots of negative
   space, subtle shadows, feels like a premium design tool (Figma/Notion energy).
5. _(stretch goal)_ **Watercolor / kids craft** — soft rounded shapes, hand-drawn wobbly borders,
   crayon/marker color palette, big friendly rounded typography, great for a younger audience.

A theme switcher (visible at all times, e.g. top-right pill selector) swaps the whole site's look
instantly — fonts, colors, borders, textures, background, and card styles — while keeping the same
layout structure and the same step data.

---

## 2. Tech stack

- **Next.js 14+** with the App Router (`app/` directory), TypeScript
- **Tailwind CSS** for styling, with a **CSS variable–driven theming system** (see §5) so themes can
  be swapped by toggling a `data-theme` attribute on `<html>` or `<body>`
- **Framer Motion** for step transitions, progress bar animation, and the GIF-flicker effect
- **next/font** for loading theme-specific Google Fonts (see §4)
- Drawings are rendered as **inline SVG** (not raster images) so line art stays crisp at any size and
  can be recolored per theme via `currentColor` / CSS variables
- No backend/database needed — tutorial content lives in local TypeScript data files
- Deployable as a static site (`next export` compatible) or on Vercel

---

## 3. Site structure / pages

```
app/
  layout.tsx                 -> root layout, theme provider, font loading
  page.tsx                   -> home page: hero + subject picker grid
  tutorials/
    [slug]/
      page.tsx                -> tutorial player for one subject (e.g. /tutorials/cat)
  globals.css                 -> Tailwind base + CSS variable theme definitions

components/
  ThemeSwitcher.tsx           -> pill/segmented control to pick 1 of 4-5 themes
  SubjectCard.tsx             -> card on the home page for each tutorial (cat, person, etc.)
  TutorialPlayer.tsx          -> main step-by-step UI (canvas + controls + progress)
  StepCanvas.tsx              -> renders the cumulative SVG drawing for the current step
  StepControls.tsx            -> Back / Next buttons, step counter, "jump to step" dots
  FrameSheet.tsx              -> optional grid view showing all steps at once (like a contact sheet)
  ProgressBar.tsx             -> animated progress indicator

lib/
  themes.ts                   -> theme definitions (colors, fonts, textures, motion style)
  tutorials/
    cat.ts                    -> step data + SVG element data for the cat tutorial
    person.ts                 -> step data + SVG element data for the person tutorial
  types.ts                    -> shared TypeScript types for steps/tutorials/themes
```

### Routes

- `/` — home page: hero section, short pitch, grid of subject cards ("Cat", "Person", + room to add
  more later), theme switcher always visible in the header
- `/tutorials/cat` — the cat tutorial player
- `/tutorials/person` — the person tutorial player
- Tutorial player should be a **reusable component** driven entirely by a data file, so adding a
  new subject later just means adding a new file in `lib/tutorials/`

---

## 4. Typography per theme

Use `next/font/google` for all of these (avoid manual `@font-face`).

| Theme              | Display / heading font                               | Body font      | Personality             |
| ------------------ | ---------------------------------------------------- | -------------- | ----------------------- |
| Anime              | Baloo 2 or Bungee                                    | Inter          | Bold, punchy, playful   |
| GIF / retro        | Press Start 2P (headings only, small sizes) or VT323 | Space Mono     | Nostalgic, chunky       |
| Fine art / gallery | Playfair Display or Cormorant                        | Source Serif 4 | Elegant, editorial      |
| Minimal / modern   | Space Grotesk                                        | Inter          | Clean, geometric        |
| Watercolor / kids  | Fredoka                                              | Nunito         | Soft, rounded, friendly |

Font sizing should scale down gracefully for the retro pixel font (it's unreadable much above
14–16px), and up for the anime/watercolor display fonts on hero headings (48–72px).

---

## 5. Theming system

Implement themes as a **CSS variable palette switched via a `data-theme` attribute**, e.g.:

```css
:root[data-theme='anime'] {
  --bg: #fdf2ff;
  --surface: #ffffff;
  --text-primary: #1a0b2e;
  --text-secondary: #6b21a8;
  --accent: #ff2d95;
  --accent-2: #06b6d4;
  --border-style: 3px solid var(--text-primary);
  --radius: 20px;
  --font-display: 'Baloo 2', sans-serif;
  --font-body: 'Inter', sans-serif;
}

:root[data-theme='retro-gif'] {
  --bg: #0d0d0d;
  --surface: #1a1a1a;
  --text-primary: #39ff14;
  --text-secondary: #00e5ff;
  --accent: #ff00ff;
  --accent-2: #ffff00;
  --border-style: 2px solid var(--text-primary);
  --radius: 0px;
  --font-display: 'Press Start 2P', monospace;
  --font-body: 'Space Mono', monospace;
}

:root[data-theme='gallery'] {
  /* muted paper palette, serif fonts, hairline borders, radius 2px */
}
:root[data-theme='studio'] {
  /* neutral palette, geometric sans, radius 10px, soft shadow */
}
:root[data-theme='craft'] {
  /* pastel crayon palette, rounded blobby radius, hand-drawn border */
}
```

Every component should consume these variables (`bg-[var(--bg)]`, `text-[var(--text-primary)]`,
etc.) via Tailwind arbitrary values or a small `tailwind.config.ts` extension — never hardcode
theme-specific colors inside components.

`ThemeSwitcher.tsx` writes the chosen theme to `document.documentElement.dataset.theme` and
persists it to `localStorage` so it survives navigation and reload.

### Per-theme texture/motion flourishes

- **Anime**: subtle halftone-dot SVG/PNG background pattern behind the hero; speed-line SVG accents
  radiating from the active step number; hover states use a quick scale + color-pop bounce.
- **GIF/retro**: a repeating scanline overlay (`repeating-linear-gradient`) at low opacity over the
  whole page; step transitions **hard-cut** with a 2–3 frame flicker (toggle opacity/visibility
  rapidly for ~150ms) instead of a smooth fade, to mimic a looping animated GIF; blinking `_` cursor
  next to the step title.
- **Gallery**: framed canvas area with a thin double hairline border like a museum label; step
  captions in italic serif; very slow, gentle fade transitions (400–600ms ease).
- **Studio**: crisp drop shadow on the canvas card, smooth 200ms ease transitions, minimal motion.
- **Craft**: wobbly hand-drawn SVG border filter (`feTurbulence` + `feDisplacementMap`) around cards;
  soft bounce/spring transitions via Framer Motion.

---

## 6. Tutorial player behavior

Reuse the exact step-by-step drawing mechanic already prototyped (cumulative SVG reveal):

- Each tutorial subject (`cat.ts`, `person.ts`) exports an ordered list of **20–30 steps**. Each
  step has:
  ```ts
  type Step = {
    id: number;
    title: string; // e.g. "Left ear"
    instruction: string; // one or two beginner-friendly sentences
  };
  ```
- The actual line art is a **single master SVG** per tutorial where every drawn element has a
  `data-step` (the step it's introduced on) and an optional `data-hide` (the step at which a
  construction/guide line should disappear, e.g. the head guide circle is added at step 1 and
  hidden again at step 18 once the final outline is traced over it).
- `StepCanvas.tsx` clones/filters that master SVG at render time based on the current step index —
  same logic as the earlier prototype, just implemented as a proper React component instead of raw
  DOM cloning.
- `StepControls.tsx` provides: Back / Next buttons, a numeric progress readout ("Step 6 of 24"), and
  a row of small dots/thumbnails for jumping directly to any step.
- `FrameSheet.tsx` (linked from the player, e.g. a "view all frames" toggle) shows all steps at once
  in a responsive grid, like the contact-sheet view from the earlier prototype — themed the same as
  the rest of the site.
- Include at least **two tutorials to start** — Cat (~24–25 steps) and Person (~24–30 steps,
  simple front-facing full body: head, torso, arms, hands, legs, feet, face, hair, clothing folds).
  Structure the data files so more subjects can be dropped in later.

---

## 7. Design quality bar

- Should feel genuinely polished per theme, not like one layout with a palette swap — vary border
  radius, border weight, shadow usage, spacing density, and iconography style per theme as described
  above.
- Fully responsive: works well on mobile (stacked layout, larger tap targets for Back/Next) and
  desktop (canvas + step sidebar side by side).
- Respect `prefers-reduced-motion` — disable the GIF-flicker effect and any bounce/spring animations
  for users who request reduced motion, falling back to a simple instant swap.
- Accessible: proper heading hierarchy, buttons have visible focus states, SVG canvas has a
  `role="img"` with a text alternative describing the current step, color contrast checked against
  each theme's palette (retro neon-on-black and gallery muted palettes need extra contrast care).

---

## 8. Deliverables checklist for Claude Code

1. Scaffold Next.js + TypeScript + Tailwind project
2. Implement the CSS-variable theme system + `ThemeSwitcher`
3. Build home page with subject grid + hero
4. Build `TutorialPlayer` + `StepCanvas` + `StepControls` + `ProgressBar`
5. Port the cat tutorial (~24 steps) and write a new person tutorial (~24–30 steps) into
   `lib/tutorials/`
6. Implement all 4 core themes (anime, retro-gif, gallery, studio); watercolor/craft is a stretch
   goal if time allows
7. Add the `FrameSheet` all-steps grid view
8. Responsive + accessibility pass
9. `README.md` with `npm install && npm run dev` instructions

---

## 9. Notes / flexibility

Claude Code should feel free to:

- Pick exact hex values and refine the palettes above for better contrast/aesthetics
- Adjust step counts slightly (20–30 range) based on what reads well for each subject
- Suggest a better project name than "DrawAlong" if inspired
- Add small delighters (confetti on completing a tutorial, sound-free by default, a "save your
  progress" via localStorage) as long as the core checklist above ships first

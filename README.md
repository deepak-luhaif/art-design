# Contour

A beginner-friendly, step-by-step drawing tutorial site. Pick a subject, step through a 20&ndash;30
frame tutorial one line at a time, and swap between five completely different visual themes without
touching the underlying lessons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (Next.js will pick the next free port if 3000 is
taken).

Other scripts:

```bash
npm run build   # production build (static-export friendly)
npm run start   # serve the production build
npm run lint    # eslint
```

## How it's put together

- **`app/`** &mdash; routes. `/` is the home page (hero + subject grid); `/tutorials/[slug]` is the
  tutorial player, driven entirely by the tutorial's data file.
- **`lib/themes.ts`** &mdash; the list of themes and their motion/texture metadata.
- **`lib/tutorials/*.tsx`** &mdash; one file per subject. Each exports a `steps` list (title +
  instruction) and an `elements` list: every piece of line art tagged with the step it first appears
  on (`step`) and, optionally, the step at which a construction guide is replaced by final ink
  (`hideAt`). `StepCanvas` filters this list against the current step to render the cumulative
  drawing &mdash; add a new subject by dropping in another file here.
- **`components/`** &mdash; `TutorialPlayer` composes `StepCanvas`, `StepControls`, `ProgressBar`, and
  the `FrameSheet` contact-sheet view. `ThemeSwitcher` writes the chosen theme to
  `document.documentElement.dataset.theme` and `localStorage`.
- **Theming** is CSS-variable driven: `app/globals.css` defines a full palette/typography/texture
  token set per `data-theme` value, and components only ever read the CSS variables (never a
  hardcoded theme color), so adding a sixth theme is a CSS-only change.

## Themes

| Theme | Personality |
| --- | --- |
| Anime | Bold outlines, magenta/cyan color pops, halftone texture, speed-line accents |
| Retro GIF | Neon-on-black, scanline overlay, hard-cut flicker transitions, blinking cursor |
| Gallery | Warm paper, serif type, hairline frame, slow gentle fades |
| Studio | Neutral palette, geometric sans, soft shadows, minimal motion |
| Craft | Watercolor palette, wobbly hand-drawn borders, spring/bounce transitions |

Progress per tutorial and the selected theme are both saved to `localStorage`, so reloading or
coming back later resumes where you left off. Finishing a tutorial triggers a small confetti
moment (skipped automatically for `prefers-reduced-motion`).

## Accessibility

- The drawing canvas is exposed as a single `role="img"` with a text description of the current
  step, rather than as a tree of individual shapes.
- All interactive controls are real `<button>`/`<a>` elements with visible focus rings and
  44px-minimum tap targets for Back/Next.
- `prefers-reduced-motion` disables the GIF flicker, confetti, and hover bounce effects in favor of
  an instant swap.

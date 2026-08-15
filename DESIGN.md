# Design System

This file is the **entry point for all design and styling decisions** in this
project. It does not replace the brand documentation — it points to it.

> **The authoritative source of truth lives in `docs/`.** Whenever this file
> and a document in `docs/` disagree, the document in `docs/` wins.

## Source of Truth

| Doc | Purpose |
| --- | --- |
| [`docs/kodesbykris-brand-guidelines-v1.md`](docs/kodesbykris-brand-guidelines-v1.md) | kodesbykris Brand Guidelines v1.0 — brand overview, logo system, colors, typography, visual language, layout, brand voice. |

New brand/design documentation should be added as a file in `docs/` and indexed
here so this file always references the current guidelines.

## Rules

1. **Read the brand guidelines before writing UI code.** Any page, component,
   or style must follow the guidelines in `docs/`.
2. **Do not invent new design tokens.** Use the tokens defined in the
   guidelines (colors, typography, spacing, radius).
3. **Reuse brand assets.** Logos live in `public/brands/`, the favicon is
   `app/icon.png` (the brand symbol/mark).
4. **If this file conflicts with `docs/`, the docs win.** Update this file to
   match.

## Quick Reference

For implementation speed, the essentials below are summarized from the
guidelines — read the full doc in `docs/` for the complete system.

### Brand

- **Name:** kodesbykris — a personal software engineering & web development studio
- **Positioning:** personal engineering studio, not an agency
- **Voice:** confident, direct, human (Kris speaking to the client)

### Colors

- **Ink:** `#111111` — primary text, logo, dark surfaces
- **Canvas:** `#F7F7F5` — main light background
- **Lime:** `#B8F23D` — brand accent, used intentionally (CTAs, highlights)

Full scales (brand + neutral + semantic) are in the guidelines, section 4.

### Typography

- **Display:** Space Grotesk — hero/section headings
- **Body:** Inter — paragraphs, nav, buttons, forms
- **Mono:** JetBrains Mono — technical metadata, status labels

### Logo Assets

- `public/brands/Brand Logo.png` — for light backgrounds
- `public/brands/Brand Logo Dark.png` — for dark backgrounds

### Favicon

- `app/icon.png` — the brand symbol/mark, served automatically as the site
  favicon by Next.js.

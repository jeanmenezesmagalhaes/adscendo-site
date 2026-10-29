---
name: Adscendo
description: White and black, Apple-grammar studio site where the only color belongs to the client work it shows.
colors:
  ink: "#1d1d1f"
  pure-black: "#000000"
  canvas: "#ffffff"
  mist: "#f5f5f7"
  graphite: "#424245"
  muted-gray: "#6e6e73"
  faint-gray: "#737378"
  field-line: "#d2d2d7"
  pressed-mist: "#e8e8ed"
  dark-raised: "#2c2c2e"
  dark-edge: "#3a3a3c"
  dark-muted: "#86868b"
  dark-secondary: "#a1a1a6"
  error-red: "#c4302b"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(32px, 7.4vw, 104px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  numeral:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(96px, 17vw, 200px)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.06em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(36px, 5.6vw, 64px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(28px, 3.4vw, 40px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(19px, 2vw, 24px)"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.02em"
  body-large:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: "-0.012em"
  button:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.47
    letterSpacing: "-0.012em"
rounded:
  field: "12px"
  row: "14px"
  inset-card: "16px"
  tile: "28px"
  pill: "999px"
  round: "50%"
spacing:
  hairline-gap: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  gutter: "clamp(20px, 5vw, 48px)"
  block: "clamp(48px, 7vw, 80px)"
  section: "clamp(88px, 13vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.pure-black}"
    textColor: "{colors.canvas}"
  button-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.pressed-mist}"
    textColor: "{colors.ink}"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "32px"
  button-small-on-dark:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.pure-black}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "32px"
  quick-form:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "8px"
  quick-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "48px"
  field-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
  segmented:
    backgroundColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "4px"
  segmented-option:
    textColor: "{colors.muted-gray}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "32px"
  segmented-option-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  list-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.row}"
    padding: "16px 20px"
  list-row-hover:
    backgroundColor: "{colors.pressed-mist}"
  list-row-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mist}"
    typography: "{typography.body-large}"
    rounded: "{rounded.row}"
    padding: "16px 20px"
  tile-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
    padding: "clamp(32px, 4.5vw, 56px)"
  tile-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mist}"
    rounded: "{rounded.tile}"
    padding: "clamp(32px, 4.5vw, 56px)"
  chip:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  chip-on-dark:
    backgroundColor: "{colors.dark-raised}"
    textColor: "{colors.mist}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  form-card:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.tile}"
    padding: "clamp(24px, 4vw, 44px)"
---

# Design System: Adscendo

## Overview

**Creative North Star: "The Product Page for a Studio"**

Adscendo borrows Apple's product-page grammar and turns it on a service business: a white page, quiet gray bands, one full-black band, very large tight Geist headlines, and black pill buttons. The page itself is monochrome. Its only color is in the work it shows: illustrated client websites, rendered inside device frames, in their own palettes. The studio stays neutral so the client work can be colorful.

Density is low and the rhythm is generous. Sections breathe on large vertical padding, headings sit at display scale, and every surface change is a tone step (white to mist, black to near-black ink) rather than a drawn line. Depth belongs to devices only: the browser and phone frames that hold the illustrations are the only things that float.

The signature is a demonstration rather than a decoration. A scroll-linked wipe turns a dated website into a modern one inside a device frame, which proves the craft instead of claiming it. Future surfaces should keep this habit and show the work as a working artifact in a frame.

**Key Characteristics:**
- Monochrome chrome (white, #f5f5f7 mist, one #000 band); color lives only inside illustrated client work.
- Geist at display scale, weight 600, with negative tracking that tightens as size grows.
- Pill shapes for every action and selection control; soft 12-28px corners for containers.
- Tone steps and space separate things. Page chrome uses no hairline dividers.
- Flat at rest. Only device frames cast shadows.
- Motion is a calm rise into place, plus one scroll-driven before/after wipe.

## Colors

The palette is a disciplined Apple-style gray family with no brand accent. Hierarchy comes from value, not hue.

### Primary
- **Ink** (ink): All primary text, black pill buttons, the active segment of a segmented control, the dark "systems" tile, and list rows on the black band. It is near-black, not pure black, so text on white keeps a soft edge.
- **Pure Black** (pure-black): Ground for the single offer band, plus the hover state of ink buttons. It is a surface, never a text color.

### Neutral
- **Canvas** (canvas): Page ground, form cards and inputs, the light "websites" tile, contact list rows, and light pill buttons on the black band.
- **Mist** (mist): Alternating section bands, the hero quick-form trough, segmented-control trough, light chips, and browser-frame toolbar. On dark surfaces it is the primary text color.
- **Graphite** (graphite): Ledes and supporting copy under headlines on light grounds. One step softer than ink.
- **Muted Gray** (muted-gray): Nav links, fine print, captions, secondary text in list rows, and footer text.
- **Faint Gray** (faint-gray): The second line of the two-tone hero headline, placeholders, optional-field hints, and illustration disclaimers.
- **Field Line** (field-line): The 1px stroke on form fields and the browser-frame edge and toolbar. Nowhere else.
- **Pressed Mist** (pressed-mist): Hover fill for light buttons and contact list rows.
- **Dark Secondary** (dark-secondary): Ledes, captions and nav links on the black band and dark tile.
- **Dark Muted** (dark-muted): Trailing notes inside dark list rows.
- **Dark Raised** (dark-raised) / **Dark Edge** (dark-edge): Chips and inset panels raised on ink surfaces, plus row and tag tones inside the dark systems mock.
- **Error Red** (error-red): Functional only. Invalid field border and error status text. It is never decorative.

### Named Rules
**The No-Accent Rule.** Adscendo's own chrome has no brand hue. Saturated color (pine green #1f4d3f, terracotta #b5401f, plum #6b3a4e, star gold #e3a008) is allowed only inside illustrated client work, in device frames or mini screens, and each illustrated client brings its own palette.

**The One Black Band Rule.** A page carries at most one full-bleed #000 band, and it holds the most important commercial moment (the offer). Gray bands alternate with white around it.

**The Tone-Step Rule.** Separate regions by stepping tone (canvas to mist, black to ink, ink to dark-raised) or by space. Never draw a hairline between sections, list rows, or cards in page chrome. Row rules may appear inside illustrated UIs, where they belong to the depicted product.

## Typography

**Display Font:** Geist (with -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial)
**Body Font:** Geist (same stack)

**Character:** A single neo-grotesk stands in for SF Pro. It is set large, at weight 600, and tightly tracked for headlines, with relaxed body text. All voice comes from scale and value, not from pairing.

### Hierarchy
- **Display** (600, clamp 32-104px, 1.02, -0.04em): The hero headline only. It uses two tones, with the first line in ink and the second in faint gray.
- **Numeral** (600, clamp 96-200px, 0.82, -0.06em, tabular figures): The price figure. The currency sign is a superscript at 0.32em.
- **Headline** (600, clamp 36-64px, 1.04, -0.04em): Section headings, which end with a period as statements.
- **Title** (600, clamp 28-40px, 1.08, -0.035em): Tile headings, project names, and the compare heading (which runs to 48px). Process step titles run larger (clamp 32-56px, line-height 1).
- **Lede** (400, clamp 19-24px, 1.38, -0.02em): One sentence under a headline, in graphite, capped at about 36ch.
- **Body Large** (400, 19px): Tile copy, step copy, founder copy (line-height 1.55, 38ch), and offer list rows.
- **Body** (400, 17px, 1.47, -0.012em): Default text.
- **Button** (500, 16px, line-height 1, -0.01em): Pill button labels.
- **Label** (500, 13px): Field labels, segmented options, and small buttons. Nav links and fine print use the same 13px at weight 400.

### Named Rules
**The Tight-At-Size Rule.** Tracking tightens as size grows: -0.012em at body, -0.02em at lede, -0.035 to -0.04em at headline and display, and -0.055 to -0.06em at the footer wordmark and price. Never track headlines at 0 and never use positive tracking.

**The Two-Line Rule.** Headlines run at most two lines at every breakpoint, balanced with `text-wrap: balance`. Long headlines are rewritten, not shrunk.

**The Two-Tone Display Rule.** The hero display sets a claim in ink and its complement in faint gray on a second line. This treatment is reserved for the display role.

## Layout

The container is 1080px wide with fluid side gutters (clamp 20-48px). The hero widens to 1240px. Sections are full-bleed color bands with vertical padding of clamp 88-160px. Inside a section, the headline-and-lede block sits above content separated by clamp 48-80px. Ledes sit 20px under headlines.

Grids are asymmetric two-column layouts (1.15fr / .85fr tiles, .9fr / 1.1fr contact, auto / 1fr price) that collapse to a single column between 820px and 860px. The project list uses three columns, collapsing at 640px. Process steps are two-column rows (title, then copy) that stack below 760px. Grouped rows in a list keep 4-6px gaps so tone carries the grouping.

The hero is centered, and so is the compare stage. Everything after them is left-aligned.

The nav is sticky at 52px and translucent. Its links hide below 720px, leaving the brand and a small pill button.

Observed breakpoints are 560, 640, 720, 760, 820 and 860px. They are recorded as built, not yet consolidated.

## Elevation & Depth

The system is flat at rest, with tonal layering. Surfaces separate by tone and space. The only lifted objects are the device frames that hold illustrated client work, because a device is a physical object and the shadow is part of its depiction.

### Shadow Vocabulary
- **Browser frame** (`box-shadow: 0 30px 80px -20px rgba(0,0,0,.25), 0 10px 30px -10px rgba(0,0,0,.12)`): The desktop device that holds the before/after.
- **Phone frame** (`box-shadow: 0 30px 70px -20px rgba(0,0,0,.35)`): The mobile device frame.
- **Wipe handle** (`box-shadow: 0 0 0 1px rgba(0,0,0,.12), 0 0 24px rgba(0,0,0,.25)` on the line; `0 4px 16px rgba(0,0,0,.25)` on the 36px knob): Lives only inside the device.
- **Mini-screen edge** (`box-shadow: inset 0 0 0 1px rgba(0,0,0,.06)`): A barely-there inset edge on the small phone-screen illustrations.
- **Field focus** (`box-shadow: 0 0 0 3px rgba(29,29,31,.12)`): State only, never at rest.

### Named Rules
**The Only-Devices-Float Rule.** Nothing casts a shadow at rest except device frames and the mini screens. Buttons, tiles, cards, list rows and the nav stay flat. The nav uses translucency and blur, not a shadow.

## Shapes

Every action and every selection control is a full pill (999px): buttons, the hero quick-form trough and its inputs, segmented controls, and chips. Containers use soft corners that shrink with their scale: 28px for tiles and the contact form card, 16px for inset panels and mini screens, 14px for list rows and the browser frame, and 12px for form fields. Circles (50%) hold the founder avatar and window dots. The phone frame is the one exception, with 46px outer and 36px inner corners to depict hardware.

The mark is a line-drawn cloud with round caps and joins at a 2.4 stroke. It appears in the nav, the avatar disc, the favicon (white on a black 11px-radius square), and the oversized footer wordmark. UI icons follow the same line language: 16px, 1.6-1.8 stroke, round caps.

## Components

### Buttons
Confident and quiet: solid pills with no borders and no shadows.
- **Shape:** Full pill (999px). 48px tall with 24px side padding, or 32px tall with 14px padding and 13px type for the nav button.
- **Primary:** An ink fill with white text. Hover deepens it to pure black, and press scales it to 0.98. Transitions run 200ms on the house ease.
- **Light:** On the black band, a canvas fill with ink text. Hover changes it to pressed mist.
- **On dark nav:** The small button inverts to a mist fill with black text.
- **Disabled:** 50% opacity.
- **Focus:** A 2px ink outline at a 3px offset. The ring has no inverted variant yet, so it is near-invisible on the black band and dark nav (open defect, not a rule).

### Chips
- **Style:** Mist pills (14px text, 8px by 14px padding) listing capabilities at the foot of a tile. On ink tiles they use the dark-raised fill with mist text.
- **State:** Static labels with no selected state in the page chrome.

### Cards / Containers
- **Corner Style:** 28px for tiles and form cards, 14px for list rows.
- **Background:** Canvas on mist bands, ink as the dark counterpart tile, and ink rows on the black band.
- **Shadow Strategy:** None (see Elevation & Depth).
- **Border:** None.
- **Internal Padding:** Tiles use clamp 32-56px, form cards clamp 24-44px, and rows 16px by 20px.

### Inputs / Fields
- **Style:** Canvas fill with a 1px field-line stroke, 12px corners, 13px by 14px padding, and 16px text. Labels sit above in 13px weight 500, with "optional" hints in faint gray at weight 400. Selects use a custom muted-gray chevron.
- **Hover / Focus:** On hover the stroke darkens to faint gray. On focus the stroke turns ink with a 3px ink halo at 12% opacity, replacing the default outline.
- **Error:** The stroke turns error red through `:user-invalid`, and the status text turns error red.
- **Quick form (hero):** A mist pill trough with 8px padding, holding two white pill inputs (48px) and a primary button on one row. Below 640px it stacks into a 24px-radius trough with 44px controls.

### Navigation
A sticky 52px bar with a translucent white background (80% opacity), blurred 20px and saturated 180%. The brand (cloud plus "Adscendo.", 19px weight 500) sits on the left, 13px muted links with 28px gaps in the center, and a small black pill on the right. While over the black band the bar switches to dark: black at 82% opacity, dark-secondary links, and a mist pill. The switch transitions over 300ms. Links hide below 720px.

### Work List
Project names set at title scale (600, clamp 28-40px) in up to three columns, each topped by a heavy 4px ink bar with 20px of space above the name. The bar is a solid marker of weight, not a hairline. Linked rows underline the name (2px) on hover.

### Segmented Control
A mist pill trough with 4px padding holding 32px pill options in 13px weight-500 muted text. The active option fills with ink and turns white. Transitions run 250ms.

### Before/After Device (signature)
A sticky compare section 190vh tall pins a device under the nav. On desktop the device is a browser frame (1200:790, 14px corners, a mist toolbar with three window dots and a URL pill). Under 760px it becomes a phone frame (300:620, 10px #111 bezel, notch). The "after" layer is revealed by a clip-path inset driven by scroll progress: the wipe runs from 18% to 78% of the pinned scroll with an ease-out cubic curve. A 2px white divider with a 36px round arrow knob is visible only mid-wipe. The Before/After segmented control mirrors progress and scroll-seeks to either state. With reduced motion, the section unpins and the control switches states instantly. Illustration canvases are authored at fixed widths (1200, 980 or 390px) and scaled to fit.

### Illustration Conventions
- **The past is quarantined.** The "before" site deliberately uses Times New Roman, Verdana, Comic Sans, Courier, Arial, a blue gradient header, text-shadow, ridge borders and saturated reds and yellows. These belong to the illustration of an outdated site and are never system type or color.
- **The after is a real brand.** Each illustrated client gets its own small palette and Geist-based layout (for Harbor & Pine: pine green, deep green-black text, and pale sage panels). Mini phone screens (9:16, 16px corners) carry their own background, text and button color per business.
- **Always disclose.** Each illustration carries a small faint-gray or muted note saying it is illustrative and not client work.

### Motion
The house ease is `cubic-bezier(.16, 1, .3, 1)`. When section parts (headline, lede, tiles, rows, form) enter view, they rise 24px and fade in over 900ms, staggered by 80ms and capped at six steps. The rise only runs once script adds a `js` class, so content stays visible without script. The hero rises on load from 35% opacity and 10px of offset. Mini screens lift 4px on hover. Reduced motion removes all of this and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** keep Adscendo's chrome monochrome: ink, canvas, mist, the gray steps, and one #000 band per page.
- **Do** let color appear only inside illustrated client work held in a device frame or mini screen, and label it as illustrative.
- **Do** separate regions with tone steps (canvas, then mist, then canvas) and generous space (clamp 88-160px section padding).
- **Do** make every button, chip, segmented control and quick-form trough a full pill (999px).
- **Do** set headlines in Geist 600 with negative tracking (-0.035 to -0.04em) and keep them to two lines.
- **Do** demonstrate work as a working artifact in a frame rather than describing it.
- **Do** keep content visible without script and give every scroll-driven effect a reduced-motion fallback.

### Don't:
- **Don't** introduce a brand accent color in page chrome, links, buttons or focus states.
- **Don't** draw hairline dividers between sections, list rows or cards. The #d2d2d7 line is for form fields and the browser frame only.
- **Don't** put eyebrows or kickers above headings. The headline opens the section.
- **Don't** add shadows at rest to anything that is not a device frame or mini screen.
- **Don't** let a headline run past two lines.
- **Don't** reuse the "before" illustration's fonts, gradients or text-shadow outside that illustration.

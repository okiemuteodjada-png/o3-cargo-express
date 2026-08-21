# O3 Cargo Express — Design System Documentation (styles.md)

> **Status note:** No project files, screenshots, or design assets were available at the time this document was produced. None of the values below should be treated as confirmed brand values unless cross-checked against the actual design. Every value in this document is labeled either **CONFIRMED** (stated directly by the business) or **DESIGN-SYSTEM RECOMMENDATION** (a sensible, restrained default proposed here because no actual value was supplied). Do not treat recommended values as final — replace them with real, extracted values once design files/screenshots are available, without changing the structure of this document.

---

## 1. Typography

**Font family:** TBD — not supplied. *(Design-system recommendation: a clean, modern grotesk/sans-serif — e.g., Inter, General Sans, or similar — consistent with the "premium, warm, modern, human" direction. Confirm actual typeface from design files before implementation.)*

- Heading font: TBD (recommend same family as body, differentiated by weight, unless design specifies a separate display face)
- Body font: TBD
- Font weights available: TBD *(recommendation: Regular 400, Medium 500, Semibold 600, Bold 700)*

### Type Scale — Desktop (design-system recommendation, whole pixel values only)

| Token | Size | Suggested use |
|---|---|---|
| Display / H1 | 56px | Hero headline |
| H2 | 48px | Major section headings |
| H3 | 40px | Sub-section headings |
| H4 | 32px | Card / block headings |
| H5 | 24px | Small headings, feature titles |
| Body Large | 18px | Lead paragraphs, hero subtext |
| Body | 16px | Standard body copy |
| Caption / Small | 14px | Captions, form helper text |
| Micro | 12px | Legal text, fine print |

### Type Scale — Mobile (design-system recommendation, whole pixel values only)

| Token | Size | Suggested use |
|---|---|---|
| Display / H1 | 36px | Hero headline |
| H2 | 34px | Major section headings |
| H3 | 28px | Sub-section headings |
| H4 | 22px | Card / block headings |
| H5 | 18px | Small headings, feature titles |
| Body Large | 18px | Lead paragraphs |
| Body | 16px | Standard body copy |
| Caption / Small | 14px | Captions, form helper text |
| Micro | 12px | Legal text, fine print |

- **Button typography:** 16px, Medium/Semibold weight — *(design-system recommendation, TBD confirm against actual buttons)*
- **Line heights:** Headings ~1.2; body text ~1.5–1.6 — *(design-system recommendation)*
- **Letter spacing:** Default (0) for body; slight positive tracking (e.g., 0.2px–0.5px) may be used on all-caps labels/eyebrows only — *(design-system recommendation)*

Do not introduce arbitrary sizes outside the scales above (no 47px, 53px, 15.5px, etc.). If the real design requires an additional level, add it deliberately to the scale rather than using a one-off value.

---

## 2. Colour System

**CONFIRMED:** The O3 brand is based primarily on **Red, Black, and White**, with red treated strictly as an **accent** colour rather than a dominant colour.

Exact hex values were not supplied. The tokens below are **design-system recommendations** using this confirmed direction — replace hex values with the real brand hex codes once available; do not change the token structure.

| Token | Role | Value |
|---|---|---|
| `color-primary` (O3 Red) | Primary brand accent | TBD hex — recommend a confident, warm red (e.g., `#D5342B` range) pending real value |
| `color-dark` | Black / near-black | TBD hex — recommend near-black (e.g., `#141414`) rather than pure `#000000` for warmth |
| `color-background` | Primary background | `#FFFFFF` (White) |
| `color-background-secondary` | Secondary/alternating background | TBD hex — recommend a warm off-white/neutral (e.g., `#F7F5F3`) |
| `color-brand-tint` | Soft brand tint | TBD hex — recommend a very light red/pink tint (e.g., `#FBEAE9`) |
| `color-text-primary` | Primary text | Near-black, same family as `color-dark` |
| `color-text-secondary` | Secondary text | TBD hex — recommend a mid-grey (e.g., `#5C5C5C`) |
| `color-text-muted` | Muted/tertiary text | TBD hex — recommend a lighter grey (e.g., `#8A8A8A`) |
| `color-border` | Light neutral border | TBD hex — recommend a light grey (e.g., `#E5E2DF`) |
| `color-hover` | Hover state | Darkened variant of the element's base colour (e.g., red button hover = darker red) |
| `color-active` | Active/pressed state | Further-darkened variant of base colour |
| `color-focus` | Focus outline | TBD — recommend the primary red or a distinct accessible focus ring colour, at sufficient contrast |
| `color-disabled` | Disabled state | TBD hex — recommend a low-contrast neutral (e.g., `#CFCFCF`) with reduced-opacity text |

### 2.1 Colour Usage Rules

**Red (`color-primary`):**
- Primary CTA buttons
- Small highlights (badges, active nav indicator, key stats)
- Important accents (icons tied to key actions, active states)
- Must **not** be used for every button, icon, heading, or section — restraint is required per brand direction.

**Black (`color-dark`):**
- Headings
- Strong/emphasized text
- Dark section backgrounds (used sparingly, e.g., footer or a single contrast section)

**White (`color-background`):**
- Primary page backgrounds
- Text on dark backgrounds

**Light neutral (`color-background-secondary`):**
- Alternating section backgrounds to create rhythm without introducing new colours
- Supporting surfaces (e.g., card backgrounds distinct from page background)

**Soft red (`color-brand-tint`):**
- Subtle highlights
- Selected/active states (e.g., selected form option)
- Supporting backgrounds behind icons or small callouts — not full sections

The interface must maintain visual restraint: red is an emphasis tool, not a dominant palette colour.

---

## 3. Spacing System

**Base unit: 8px.**

| Token | Value |
|---|---|
| `space-1` | 8px |
| `space-2` | 16px |
| `space-3` | 24px |
| `space-4` | 32px |
| `space-5` | 40px |
| `space-6` | 48px |
| `space-8` | 64px |
| `space-10` | 80px |
| `space-12` | 96px |
| `space-15` | 120px |

**Usage guidance:**
- **Section padding:** 96px–120px top/bottom on desktop; reduce to 48px–64px on mobile.
- **Card padding:** 24px–32px depending on card size.
- **Grid gaps:** 24px–32px between grid items on desktop; 16px on mobile.
- **Text spacing:** 16px between a heading and its following paragraph; 8px between tightly related lines (e.g., label + value).
- **Button spacing:** 16px horizontal gap between adjacent buttons (e.g., primary + secondary CTA pair).
- **Form spacing:** 24px between form fields; 8px between a label and its input.
- **Navigation spacing:** 32px–40px between primary nav items on desktop.

Do not introduce spacing values outside the 8px scale unless the real design explicitly requires it (e.g., a 1px hairline border is not a spacing value and is exempt).

---

## 4. Grid System

*(Design-system recommendation — replace with actual values once design files are available.)*

| Property | Value |
|---|---|
| Maximum content width | 1200px |
| Desktop side padding | 64px |
| Tablet side padding | 40px |
| Mobile side padding | 20px |
| Column structure | 12-column grid on desktop; collapses to a single/stacked column on mobile |
| Grid gaps | 24px–32px desktop; 16px mobile |
| Card widths | Fluid within grid column, capped at a sensible max (e.g., 380px) for readability |
| Image aspect ratios | 4:3 for general content imagery; 1:1 for avatar/testimonial photos; 16:9 for video — **TBD, confirm against real design** |

---

## 5. Border Radius

*(Design-system recommendation.)*

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 10px | Small controls (inputs, small buttons, tags) |
| `radius-md` | 16px | Cards |
| `radius-lg` | 20px | Large containers, hero panels, images |

Avoid excessive rounding — the interface should read as premium and restrained, not playful/bubbly.

---

## 6. Button System

*(All values below are design-system recommendations pending confirmation against the real design; keep the token structure when real values are supplied.)*

### 6.1 Primary Button
| Property | Value |
|---|---|
| Background | `color-primary` (O3 Red) |
| Text colour | White |
| Height | 48px (desktop), 44px minimum (mobile, for touch target compliance) |
| Padding | 16px vertical / 32px horizontal |
| Radius | `radius-sm` (10px) |
| Font size | 16px |
| Font weight | Semibold (600) |
| Hover | Darkened red |
| Active | Further-darkened red |
| Focus | Visible focus ring (accessible contrast), red or dark outline |
| Disabled | `color-disabled` background, muted text, no hover/active response |

### 6.2 Secondary Button
| Property | Value |
|---|---|
| Background | Transparent or White |
| Text colour | `color-dark` or `color-primary` — **TBD, confirm actual treatment** |
| Border | 1px solid `color-border` or `color-primary` |
| Height | Same as primary (48px desktop / 44px mobile) |
| Padding | Same as primary |
| Radius | `radius-sm` (10px) |
| Font size | 16px |
| Font weight | Medium (500) |
| Hover | Subtle background tint (`color-brand-tint` if red-bordered) |
| Active | Slightly deeper tint |
| Focus | Visible focus ring |
| Disabled | Muted border/text, no interaction feedback |

### 6.3 WhatsApp Button
Document separately if it uses WhatsApp's own green branding or a treatment distinct from the primary/secondary system — **TBD, confirm from real design.** If no distinct treatment exists, it should follow the Secondary Button pattern with a WhatsApp icon.

Buttons must remain visually consistent across every page, including `/sales`.

---

## 7. Form System

*(Design-system recommendations pending confirmation.)*

| Property | Value |
|---|---|
| Input height | 48px |
| Padding | 12px vertical / 16px horizontal |
| Border | 1px solid `color-border` |
| Radius | `radius-sm` (10px) |
| Label typography | 14px, Medium weight, `color-text-primary` |
| Placeholder typography | 16px, Regular weight, `color-text-muted` |
| Focus state | Border colour shifts to `color-primary` or `color-focus`, with visible outline/ring |
| Error state | Border shifts to an error colour (e.g., a distinct red-orange, distinguishable from brand red) plus inline error text — **TBD, define a dedicated error colour separate from brand red to avoid ambiguity** |
| Success state | Border/icon shifts to a success colour (e.g., green) — **TBD** |
| Dropdown styling | Matches input styling; custom chevron icon consistent with Iconography section |
| Textarea styling | Matches input styling; minimum height ~120px, vertically resizable |
| Mobile behaviour | Full-width fields; font size minimum 16px to avoid iOS auto-zoom on focus |

---

## 8. Card System

*(Design-system recommendation.)*

| Property | Value |
|---|---|
| Background | White or `color-background-secondary` |
| Border | 1px solid `color-border` (or none, if shadow-only treatment is used — **TBD**) |
| Radius | `radius-md` (16px) |
| Padding | 24px–32px |
| Shadow | Minimal — a soft, low-opacity shadow only; avoid heavy/dramatic shadows |
| Image treatment | Full-bleed at top of card, radius matched to card's top corners |
| Heading | H5 scale (24px desktop / 18px mobile), Semibold |
| Body text | Body scale (16px), `color-text-secondary` |
| CTA | Text link or small secondary button, aligned bottom-left or full-width depending on card type |

---

## 9. Image System

O3 Cargo Express imagery should feel **human, authentic, warm, professional, and trustworthy.**

**Prioritize:**
- People (customers, staff, entrepreneurs)
- Packing and dispatch moments
- Shipping and product handling in progress

**Avoid:** making the site entirely dependent on generic trucks/cargo-ship stock photography. Generic logistics imagery may be used sparingly (e.g., a single supporting visual) but must not dominate the page.

| Property | Value |
|---|---|
| Image radius | Matches container: `radius-md` (16px) for standalone images, `radius-lg` (20px) for large hero/feature images |
| Aspect ratios | 4:3 general content; 1:1 avatars/testimonial photos; 16:9 video — **TBD, confirm against real design** |
| Object-fit | `cover`, with sensible focal points to avoid awkward cropping of people |
| Overlay treatment | Where text sits over an image (e.g., hero), use a subtle dark gradient overlay for legibility — **TBD, confirm exact overlay values from real design** |
| Mobile image behaviour | Images scale fluidly to container width; maintain aspect ratio; avoid fixed pixel heights that cause distortion |

---

## 10. Iconography

*(Design-system recommendation pending confirmation.)*

| Property | Value |
|---|---|
| Icon style | Line/stroke icons (consistent single style throughout — do not mix filled and outline styles) |
| Stroke weight | Consistent, e.g., 1.5px–2px |
| Size | 20px–24px standard inline size; 32px+ for feature/highlight icons |
| Colour usage | `color-dark` or `color-text-secondary` by default; `color-primary` (red) only for active/highlighted icons, consistent with the "red as accent" rule |
| Spacing | 8px gap between an icon and adjacent text |

Do not mix unrelated icon styles (e.g., combining a line-icon set with an emoji or a filled-icon set).

---

## 11. Responsive Design System

Breakpoints below are a **design-system recommendation**; confirm actual breakpoints against the real implementation.

| Breakpoint | Range (recommended) |
|---|---|
| Mobile | up to 767px |
| Tablet | 768px–1023px |
| Desktop | 1024px+ |

### Desktop
- Container: max-width 1200px, centered, 64px side padding
- Typography: Desktop type scale (§1)
- Section spacing: 96px–120px vertical padding
- Grid: 12-column, 24px–32px gaps
- Buttons: standard sizing (§6), inline side-by-side for primary/secondary pairs

### Tablet
- Container: fluid, 40px side padding
- Typography: interpolate between desktop and mobile scales, or use mobile scale early — **TBD, confirm real behaviour**
- Grid behaviour: typically collapses from 12 columns to 6 or fewer; multi-column sections reduce to 2 columns
- Navigation: may remain expanded or convert to menu earlier than mobile — **TBD**

### Mobile
- Container: fluid, 20px side padding
- Typography: Mobile type scale (§1)
- Stacking: all multi-column layouts stack to a single column
- CTA behaviour: primary and secondary CTAs typically stack vertically (full-width) rather than sitting side-by-side — **design-system recommendation**
- Navigation: collapses to a hamburger/menu pattern
- Form layout: full-width single-column fields
- Image behaviour: full-width, fluid scaling, maintained aspect ratio

Do not simply scale the desktop layout down — each breakpoint should use deliberate stacking/reflow rules as above, and section padding/spacing must reduce proportionally per §3, not remain fixed.

---

## 12. Component Rules

| Component | Consistency rule |
|---|---|
| Header | Identical across all pages except `/sales` (which may use a reduced nav per PRD §4.7 — TBD); logo always links Home |
| Footer | Identical structure across all main pages; confirm whether `/sales` includes a footer or is footer-free (landing-page convention) — **TBD** |
| Hero | Consistent heading/subtext/CTA layout pattern reused across Home, Services, About, Sales (content differs, structure does not) |
| Section heading | Consistent heading + optional eyebrow label + optional supporting subtext pattern |
| CTA / Button | Follows Button System (§6) exactly — no page-specific one-off button styles |
| Service card | Follows Card System (§8); consistent icon + heading + description + optional link |
| Testimonial card | Follows Card System; includes photo/avatar, name, business (if applicable), quote text |
| Statistic / trust item | Only used with confirmed figures — never populated with invented numbers |
| Form field | Follows Form System (§7) exactly across Sales and Contact forms |
| Quote form | Sales Page form per PRD §6.1; consistent field styling with Form System |
| WhatsApp CTA | Consistent icon + label treatment sitewide (see §6.3) |
| Image card | Follows Card + Image System combined |
| Process step | Consistent numbered/sequential treatment for How It Works content |

---

## 13. Design Principles

1. **Trust before decoration** — The interface should make customers feel safe trusting O3 with their packages.
2. **Human before generic** — Use people and real-world shipping moments wherever possible.
3. **Red is an accent** — Red should create emphasis, not dominate every section.
4. **Consistency over novelty** — Use the same typography, spacing, buttons, cards, and colours throughout the site.
5. **Clear conversion paths** — Users should always understand what action to take.
6. **Premium but approachable** — The website should feel polished and established without becoming cold or overly corporate.
7. **Mobile first in usability** — The website must remain easy to use on smaller screens.

---

*This document defines a design system consistent with the confirmed O3 brand direction (Red/Black/White, red as accent, premium-but-human tone). Where no real design value was available, a clearly labeled design-system recommendation is provided using restrained, whole-number, systematic values — never arbitrary AI-generated numbers. Replace recommended values with real extracted values once design files/screenshots are supplied, without altering this document's structure.*

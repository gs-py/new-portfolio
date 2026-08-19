# Gladwin Santhosh — Portfolio

Next.js 14 (App Router) + Tailwind, JavaScript. Neumorphic ("soft UI") visual world.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Environment

`.env` (gitignored) holds the EmailJS keys used by the contact form:

```
NEXT_PUBLIC_my_service_id
NEXT_PUBLIC_my_template          # message to Gladwin
NEXT_PUBLIC_customer_template    # acknowledgement to the sender
NEXT_PUBLIC_public_key
NEXT_PUBLIC_SITE_URL             # canonical origin for metadata, sitemap, robots
```

## Structure

- `lib/data.js` — every piece of content: profile, experience, education, skills, projects, services, case studies, nav. Edit here, not in the pages.
- `app/` — one route per page (`/`, `/services`, `/resume`, `/work`, `/blog`, `/contact`) plus `sitemap.js`, `robots.js`, `not-found.jsx`.
- `components/` — `Header`, `Footer`, `HeroWidget`, `Clock`, `ResumeTabs`, `WorkShowcase`, `ContactForm`, `Counter`, `Social`, `MotionRoot`.

## Design system

Tokens live in `tailwind.config.js`; primitives in `app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `surface` | `#e9e9ee` | the single background everything is extruded from |
| `ink` / `ink-muted` / `ink-faint` | `#1e1f26` / `#565863` / `#666875` | 13.6:1 / 5.8:1 / 4.6:1 on surface |
| `accent` | `#4c4fd4` | active state, links, the second hand |
| `graphite` | `#22232b` | primary buttons |

Shadow utilities: `shadow-neu`, `-sm`, `-lg`, `-flat` (raised) and `shadow-neu-in`, `-in-sm` (engraved).
Class primitives: `.neu`, `.neu-in`, `.neu-press`, `.btn-primary`, `.btn-ghost`, `.field`, `.chip`, `.rule`.

One light source, top-left, everywhere. Raised = available, engraved = selected or contained.

## Motion

- Nav pill and resume tabs slide on Apple's reposition spring (`bounce: 0`, `duration: 0.4`).
- The hero widget is the one authored entrance: the panel extrudes from flat, then its rows stagger in.
- Everything else is interaction feedback — press, hover lift, counter count-up, project crossfade.
- `MotionRoot` sets `reducedMotion: "user"`, and `globals.css` shortens CSS animation under the same query.

The clock hands run on three CSS animations seeded with a negative `animation-delay` at mount: correct time, no per-frame JS, no re-render.

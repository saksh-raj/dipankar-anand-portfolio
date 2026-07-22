# Dipankar Anand — Portfolio

A handcrafted, dark-mode developer portfolio built with React 18, Vite, Tailwind
CSS, and Framer Motion. Cinematic scroll, smooth motion, and a restrained cyan
accent identity.

## Stack

- **React 18** + **Vite** (JavaScript, no TypeScript)
- **Tailwind CSS** — design tokens in `tailwind.config.js`
- **Framer Motion** — all animation
- **Lenis** — smooth scrolling (auto-disabled for reduced-motion)
- **Lucide React** — icons

No component libraries. Everything is bespoke.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

> The `@/` import alias points at `src/` (configured in `vite.config.js`).

## Content

All content lives in `src/data/` and reflects Dipankar Anand's real
professional history (sourced from LinkedIn — nothing invented).

| File | What it holds |
| --- | --- |
| `src/data/profile.js` | Name, role, tagline, email, socials, resume + photo paths, hero stats |
| `src/data/about.js` | Story paragraphs, principles, education |
| `src/data/experience.js` | Roles, companies, dates, achievements, tech (most recent first). A company may hold a single role or a `roles[]` array for multi-title tenures (e.g. Info Edge) |
| `src/data/skills.js` | Skill groups by category |

### Assets to add in `/public`

- `profile.jpg` — professional portrait (4:5 works best). A graceful fallback
  renders if it's missing.
- `resume.pdf` — linked from the navbar, hero and contact CTAs.
- `og-image.jpg` — social share preview (referenced in `index.html`).

## Structure

```
src/
  components/
    layout/     Navbar, Footer, Background, CursorGlow, ScrollProgress
    sections/   Hero, About, Skills, Experience, Contact
    ui/         Section, SectionHeader, Reveal, MagneticButton, Card,
                Counter, FilterPills, TechTag, Socials, Monogram, Toast
  hooks/        useLenis, useActiveSection, useScrollState, useReducedMotion,
                useCountUp, useScrollLock
  utils/        motion (variants), cn
  data/         all editable content
  constants/    nav links
  styles/       globals.css
  App.jsx  main.jsx
```

## Accessibility & performance

- Semantic HTML, ARIA labels, visible keyboard focus rings.
- `prefers-reduced-motion` respected (Lenis + all animation).
- Fonts preconnected; images lazy-loaded; motion/vendor code-split in the build.
- Color contrast tuned for dark UI.

## Customizing the accent

Change the accent everywhere from one place — `tailwind.config.js` →
`theme.extend.colors.accent`. A few `rgba(34,211,238,…)` glows in
`globals.css`, `Background.jsx`, and `CursorGlow.jsx` mirror it; update those to
match if you switch hues.


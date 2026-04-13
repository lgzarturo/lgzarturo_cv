# AGENTS.md

## Commands

- `npm run dev` — Dev server at localhost:4321
- `npm run build` — Build to `./dist/`
- `npm run preview` — Preview production build
- No lint/typecheck scripts exist — this project has none

## Architecture Notes

- Single React component: `src/components/Quote.jsx` (random programming quotes)
- Dark mode is class-based (`.dark` on `<html>`), stored in localStorage as `theme`
- Tailwind CSS 4 (uses `@tailwindcss/vite`, not PostCSS plugin)

## Important Constraints

- Every page must pass props to `BaseLayout.astro`: `title`, `description`, `canonical`, `ogType`
- `VITE_GTM_ID` env var enables Google Tag Manager (optional, script only loads when set)
- `/about-me` redirects to `/recursos` in `astro.config.mjs`

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/CV website for Arturo López, built with **Astro 5**, **React 18**, and **Tailwind CSS 4**. It targets Spanish-speaking audiences and is deployed at `https://lgzarturo.com`.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
```

There are no test commands — this project has no test suite.

## Architecture

### Tech Stack

- **Astro 5** — static site generator with file-based routing
- **React 18** — used only for interactive components (currently just `Quote.jsx`)
- **Tailwind CSS 4** — utility-first styling with class-based dark mode (`darkMode: 'class'`)
- **@astrojs/sitemap** — automatic sitemap generation

### Routing

File-based pages in `src/pages/`:

- `/` → `index.astro` (main CV/portfolio page)
- `/recursos` → `recursos.astro` (learning resources)
- `/springboot-course` → `springboot-course.astro`
- `/about-me` → redirects to `/recursos` (configured in `astro.config.mjs`)

### Layout & Components

- **`BaseLayout.astro`** — root HTML wrapper; handles all SEO meta tags, JSON-LD Person schema, Google Tag Manager (`VITE_GTM_ID` env var), dark mode script, and Google Fonts
- **`SectionColumn.astro`** — two-column grid layout (title left, slot content right)
- **`SectionRow.astro`** — full-width centered section with blue-purple gradient background
- **`SectionTitle.astro`** — centered section with title and content slots
- **`Header.astro`** — fixed nav with mobile hamburger menu and theme toggle; renders differently based on `Astro.url.pathname`
- **`Quote.jsx`** — React component for random programming quotes (only React component in the project)

### Styling System

`src/styles/global.css` defines:

- CSS custom properties for technology badge colors (Java, Spring, Python, AWS, etc.), each with `-100` (light) and `-800` (dark) variants
- Custom animation classes: `animate-fade-in`, `animate-slide-up`, `animate-slide-down`, `animate-bounce-subtle`, `animate-gradient-text`, `animate-pop`, `animate-rotate-grow`, etc.

Dark mode is toggled by adding/removing `.dark` on `<html>`, stored in `localStorage` as `theme`.

### Page Metadata Pattern

Every page passes props to `BaseLayout`:

```astro
<BaseLayout
  title="Page Title"
  description="Meta description"
  canonical="https://lgzarturo.com/path"
  ogType="website"
>
```

### Environment Variables

- `VITE_GTM_ID` — Google Tag Manager ID (optional; GTM script only loads when set)

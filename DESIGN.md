---
name: gotax.dev — Nocturnal Engineering Monograph
description: Dossier editorial nocturno de ingeniería para el portafolio de Ernesto Bracho R.
colors:
  bg-primary: "#0b0c0e"
  bg-elevated: "#111318"
  bg-header: "rgba(11, 12, 14, 0.86)"
  border-subtle: "#1e222b"
  border-strong: "#2c3240"
  text-primary: "#eef0f4"
  text-secondary: "#b4bbc8"
  text-muted: "#8a93a6"
  accent-steel: "#7aa2f7"
  accent-emerald: "#4fd6be"
  accent-amber: "#e0af68"
  accent-copper: "#f0886c"
  accent-mono: "#e6e8ec"
typography:
  display:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  heading-2xl:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.65rem, 3vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  heading-xl:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  heading-lg:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Public Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono-xs:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  xs: "0.35rem"
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4.5rem"
---

## Overview

`gotax.dev` employs the **Nocturnal Engineering Monograph** design system (seed `71e1caaa`, candidate 4). Rather than relying on generic AI portfolio conventions—such as glowing "Available for work" pills, uniform 3-column card grids, or skill-icon walls—the interface is structured as an architectural field dossier. Sections are separated by 1px structural rules (`#1e222b`), tabular monospace metadata (`Azeret Mono`), and asymmetric two-column splits.

## Colors

- **Primary Ground (`#0b0c0e`)**: Deep carbon-obsidian background tuned for low eye strain.
- **Elevated Surface (`#111318`)**: Used sparingly for the portrait frame, the foundational origin row (`notitas`), and the footer.
- **Structural Rules (`#1e222b` / `#2c3240`)**: 1px horizontal and vertical dividers that organize dense technical content without card boxes.
- **Dynamic Accent (`--accent`)**: Defaults to Steel (`#7aa2f7`) and can be switched live in the header between Steel, Emerald (`#4fd6be`), Amber (`#e0af68`), Copper (`#f0886c`), and Monochrome (`#e6e8ec`).

## Typography

- **Display & Section Headings (`Schibsted Grotesk`)**: Sharp geometric grotesk with authoritative weight (`600`–`700`) and restrained negative tracking (`-0.025em` to `-0.03em`).
- **Body Copy (`Public Sans`)**: Neutral, high-legibility humanist sans constrained to `62ch`–`68ch` for comfortable reading.
- **Technical Metadata & Dates (`Azeret Mono`)**: Strictly reserved for dates (`tabular-nums`), repository visibility specs, and domain marks.

## Layout

- **Container**: `1120px` max-width with fluid horizontal padding `clamp(1.25rem, 4vw, 3rem)`.
- **Hero Grid**: Asymmetric `260px 1fr` split on desktop with `4 / 5` portrait framing (`object-position: center 6%`), collapsing to a single column below `920px`.
- **Projects Ledger**: `280px 1fr` specification-and-narrative rows with an internal 2-column `El desafío` / `Cómo lo hice` split.
- **Code Journey Ledger**: 3-column chronological index (`220px 1fr 170px`).
- **Career Timeline**: Vertical progress spine driven by GPU-accelerated `scaleY` scroll progress alongside `260px 1fr` experience rows.

## Elevation & Depth

Depth is achieved through hairline borders (`1px solid #1e222b`) and subtle surface contrast (`#0b0c0e` vs `#111318`), with `backdrop-filter: blur(12px)` reserved exclusively for the sticky navigation bar.

## Shapes

Sharp `0px` corners across all structural frames, portrait containers, and ledger rows. Circular (`50%`) geometry is reserved only for timeline nodes and color swatches.

## Components

- **`Header` & `AccentSwitcher`**: Sticky top bar with live `--accent` persistence in `localStorage` (`gotax:theme:v1`) and pre-hydration script to prevent flash.
- **`ProjectsSection` & `ProjectFilterBar`**: Compound component architecture using React 19 `use()` and `useTransition` for accessible tab filtering.
- **`ProjectRow`**: Explicit subcomponents (`PublicRepoAction` and `PrivateRepoNotice`) that never expose private repository URLs.
- **`ExperienceSection`**: Scroll-linked timeline spine using passive event listeners and `transform: scaleY(...)`.

## Do's and Don'ts

- **Do** keep all project challenge/solution copy in `src/data/projectsData.js` and career entries in `src/data/experienceData.js`.
- **Don't** add eyebrow/kicker labels above headings (`<h1>`–`<h4>`).
- **Don't** wrap ledger rows inside rounded card containers or add glowing pill badges.

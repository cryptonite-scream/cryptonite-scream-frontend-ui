# Copilot Instructions — Click by Talevo (Frontend UI)

You are working in the **Click by Talevo** frontend UI repository. This is a premium, AI‑first SaaS platform for influencer marketing and creator economy management.

## Product & UX Principles
- **Ultra‑premium, dark‑mode first** UI with glassmorphism + modern gradients.
- **Minimal but data‑rich** layouts (Stripe/Linear/Notion/Bloomberg/Superhuman feel).
- Smooth, high‑performance animations (Framer Motion) with restraint.
- Prioritize **clarity, speed, and enterprise polish**.
- Prefer **responsive, accessible** components.

## Tech Stack (Frontend)
- **Next.js 15**, **React**, **TypeScript**
- **TailwindCSS** for styling
- **Zustand** for client state
- **Recharts** for analytics
- **Framer Motion** for animations
- **Clerk/Auth.js** for auth UI integration

## Coding Standards
- Use **TypeScript** everywhere; no `any` unless justified.
- Components must be **reusable**, **responsive**, and **accessible**.
- Provide **loading**, **empty**, and **error** states for all data views.
- Keep modules **feature‑scoped** and **cleanly separated**.
- Prefer **server components** where appropriate; use client components only when needed.

## UI Patterns
- Use a consistent **design system**: spacing scale, typography, colors, shadows, radius.
- Use **cards, tables, and dashboards** with subtle borders + glass blur.
- Charts should be visually refined: minimal gridlines, strong labels, legible tooltips.
- Use **command palette**, **global search**, and **keyboard shortcuts** when relevant.

## Naming & Structure
- Feature folders under `app/(dashboard)/<feature>`
- Shared UI under `components/` with clear categories (e.g., `ui/`, `charts/`, `layout/`).
- Use `lib/` for helpers and `hooks/` for reusable hooks.

## Do/Don’t
- ✅ Build **production‑ready** components.
- ✅ Use **realistic data structures** and typed models.
- ❌ Avoid toy placeholders or mock‑only implementations.

If you’re unsure, ask for clarification before making architectural changes.

Bubble feature — short status and notes

Purpose: single, reusable Bubble component to showcase tech or competencies in the hero; it cycles text and color dynamically so only one DOM node is used.

What I implemented:

Component: Bubble.tsx — accepts text, color, size, ariaLabel, className; sets per-instance CSS vars via React.useMemo; exported as React.memo(Bubble).
Styles: bubble.module.css — full visual rules and animation, reads --bubble-color and --bubble-size.
Integration: index.tsx — simple UI to switch between TECH and SOFT datasets and a 3s interval that cycles the single Bubble instance.
Current status: implemented on your working branch (you created feature/hero-redesign); files are added/updated but no automated tests yet.

Suggested next steps:

Run the dev server (npm run dev / yarn dev) and verify animation, color contrast, and mobile layout.
Tweak timings/styles in bubble.module.css as needed.
Add a small accessibility check (screen reader text, color contrast) and a unit/interaction test if you want CI coverage.
Keep this note with the branch so you can pick up where you left off.

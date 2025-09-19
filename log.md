## Notes about each challenge

Day 001 - Sign Up Page
- Normalize before polish: set box-sizing: border-box, add a tiny reset, and build layout with display: flex + gap so 100% widths align.
- Single source of truth: declare design tokens as CSS custom properties (--brand-*, --surface) and use var(...) everywhere for quick theme/visual changes.
- Happy path first (wired early & responsive by default): attach the submit handler early (querySelector → addEventListener('submit') → event.preventDefault() → console.log), then trim input and render success; add errors after. Constrain parents with min()/max()/clamp() (e.g., inline-size: min(90vw, 420px)), let children be inline-size: 100%, and space with flex + gap.

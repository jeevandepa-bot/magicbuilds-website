# Goal
Elevate the visual design, typography, spacing, and content structure of the Magicbuilds website so it looks like a premium, bespoke, human-crafted agency site, entirely removing the generic "AI-generated template" feel.

## Acceptance criteria
- Typography is sophisticated (varying weights, better letter-spacing, potential introduction of a secondary serif or premium sans-serif font).
- Structural layouts move away from repetitive, perfectly symmetrical, basic grids (e.g., standard 3-column feature cards).
- Negative space (padding/margins) is used intentionally to create breathing room and visual hierarchy.
- Content placement feels editorial rather than templated.

## Eval (the loop may add tests, never weaken them)
- Tests:        `npm run build`
- Lint/types:   `npm run lint`
- Build:        `npm run build`
- Human check:  The User (Jeevan) will visually inspect the layout, typography, and spacing on both desktop and mobile, and confirm if the "AI-generated" feel is gone.

## Budget
- Max attempts per task: 6
- Outer-loop review every: 10 tasks
- Playbook trial length: 5 tasks

## Needs human sign-off
- Deleting or changing existing tests
- New dependencies (e.g., adding new font libraries or animation frameworks)
- Deploys, migrations, anything touching prod data or secrets

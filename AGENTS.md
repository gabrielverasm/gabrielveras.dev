# AGENTS.md

## Project Context

This project is `gabrielveras.dev`, a bilingual professional portfolio and online resume for Gabriel Veras, a Senior Java Backend Engineer.

The goal is to present a clean, professional, maintainable and production-ready Angular application focused on:

- Senior Java Backend Engineer positioning
- Portuguese and English content
- Work experience
- Technical skills
- Education
- Courses
- Future projects
- Contact and resume links

## Technical Stack

Use the latest stable ecosystem already configured in the project:

- Angular 21+
- TypeScript
- Standalone Components
- Angular Router
- SCSS
- npm with package-lock
- ESLint
- Prettier
- Husky
- lint-staged

Do not add new dependencies unless they are clearly justified.

## Architecture Rules

Follow this folder structure:

- `src/app/core`: application core, models, constants, i18n and shared services
- `src/app/layout`: layout components such as header, footer and language switcher
- `src/app/pages`: route-level page components
- `src/app/sections`: landing page sections such as hero, about, experience and skills
- `src/app/shared`: reusable presentational components

Keep components small, focused and easy to test.

Prefer composition over large components.

Do not put business/content data directly inside HTML templates.

Use typed data from TypeScript files whenever possible.

## Angular Rules

Use modern Angular practices:

- Standalone components
- Signals for simple local state when useful
- New Angular control flow syntax when applicable
- Typed inputs and outputs
- Strict TypeScript
- Component-level SCSS
- Accessible semantic HTML

Avoid:

- NgModules
- Any unnecessary dependency
- Large HTML templates with repeated hardcoded content
- Direct DOM manipulation
- Inline styles unless there is a strong reason
- Overengineering

## Styling Rules

Use SCSS with CSS variables/design tokens.

Prefer:

- semantic class names
- responsive layout
- mobile-first design
- accessible contrast
- consistent spacing scale
- clean professional visual style

Avoid:

- excessive animations
- visual noise
- generic template look
- overly colorful "gamer" style

## Accessibility Rules

Accessibility is a first-class requirement.

Target WCAG 2.2 AA whenever practical.

Use semantic HTML before ARIA.

Prefer native elements:

- `button` for actions
- `a` for navigation
- headings in logical order
- `nav`, `main`, `section`, `article`, `footer`, `header`

Every page must have:

- one clear `<main>` landmark
- logical heading hierarchy
- descriptive link text
- visible focus states
- good keyboard navigation
- sufficient color contrast
- responsive readable typography
- meaningful `alt` text for informative images
- empty `alt=""` for decorative images
- accessible language switcher
- accessible download links for resumes

Avoid:

- clickable divs
- removing outlines without replacement
- relying only on color to communicate meaning
- generic link text like "click here"
- headings used only for visual size
- excessive animations

Respect user preferences:

- `prefers-reduced-motion`
- readable font sizes
- high contrast-friendly colors

## Internationalization Rules

The site must support Portuguese and English.

Use simple typed content files:

- `src/app/core/i18n/content.pt.ts`
- `src/app/core/i18n/content.en.ts`

Do not use Angular official i18n for now unless explicitly requested.

All visible text must come from the content files whenever practical.

## Quality Rules

Before finishing any relevant change, ensure:

```bash
npm run lint
npm run format:check
npm run build
```

Code should be simple, readable, strongly typed and production-ready.

## Git Rules

Use Conventional Commits:

- `feat:` for features
- `fix:` for bug fixes
- `style:` for visual/style-only changes
- `refactor:` for internal improvements
- `chore:` for tooling/configuration
- `docs:` for documentation

Examples:

- `feat: add bilingual hero section`
- `chore: configure eslint and prettier`
- `style: improve responsive header layout`

## Product Direction

This is not just a decorative portfolio.

It should communicate seniority, engineering discipline, backend expertise and international readiness.

The design must be clean, fast, accessible, responsive and credible.

## SEO Rules

SEO is a first-class requirement.

Use clean semantic HTML and meaningful content.

Every relevant page must have:

- descriptive `<title>`
- meta description
- canonical URL
- Open Graph tags
- Twitter card tags
- correct language metadata
- crawlable text content
- descriptive anchor text
- structured data when useful

For this portfolio, prefer structured data using JSON-LD:

- `Person`
- `ProfilePage`
- `WebSite`

The site must include:

- `robots.txt`
- `sitemap.xml`
- accessible resume download links
- public LinkedIn/GitHub links when available

Avoid:

- hidden keyword stuffing
- fake project content
- duplicated titles/descriptions
- content available only as images
- generic headings

## Responsive and Mobile Accessibility Rules

This project must be mobile-first and accessible across devices.

The portfolio should work well on:

- small mobile screens
- large mobile screens
- tablets
- notebooks
- desktops
- keyboard navigation
- screen readers
- browser zoom
- larger system font sizes

Follow responsive web principles:

- start from the mobile layout first
- progressively enhance for larger screens
- avoid fixed widths that break small screens
- avoid horizontal scrolling
- use flexible grids and containers
- use readable font sizes
- use large enough tap targets
- keep navigation simple on mobile
- ensure buttons and links are easy to tap
- test at 320px width minimum
- test with browser zoom at 200%

Prefer responsive websites over unnecessary native-app-like complexity.

The site must feel like a professional web experience, not a desktop layout forced into mobile.

## AI/Codex Development Rules

Codex must work as a careful engineering assistant, not as an automatic bulk editor.

Before changing files:

- Read this `AGENTS.md`.
- Understand the user's latest request and any explicit constraints.
- Inspect only the files needed for the task.
- Identify whether the task is a feature, bugfix, performance change, content change or documentation change.
- Keep the plan small and scoped to the requested outcome.
- Ask before expanding scope.

Scope rules:

- Prefer small, reviewable changes.
- Do not combine unrelated feature, bugfix, performance, content and tooling changes unless the user explicitly asks for that combination.
- Do not refactor unrelated code while solving a narrow task.
- Preserve existing architecture, content model, visual direction and Senior Java Backend Engineer positioning unless the task explicitly changes them.
- When a task touches PT/EN content, update both languages consistently.

Command execution rules:

- Do not run `npm`, `git`, build, test, lint, format, audit, Lighthouse, dev server or deployment commands unless the user explicitly asks for them.
- If validation commands are required but not authorized, report the exact commands the user should run manually.
- Never perform destructive git operations unless explicitly requested.

Performance and bundle rules:

- Treat performance as a first-class requirement.
- Avoid increasing the initial bundle without a clear reason.
- Prefer HTML/CSS/browser-native improvements before adding JavaScript.
- Do not add dependencies unless clearly justified and approved by the user.
- For LCP images, prefer explicit dimensions, stable paths, appropriate loading behavior, preload/fetch priority when justified and no unnecessary lazy loading above the fold.
- Preserve component style budgets; reduce local CSS before moving or globalizing styles.

CSS and styling rules:

- Keep styles component-scoped by default.
- Do not move CSS to `src/styles.scss` just to silence component style budget warnings.
- Avoid global CSS changes unless the root cause is genuinely global.
- Do not use `overflow-x: hidden` globally to hide layout bugs.
- Fix the element causing overflow instead of masking the scrollbar.
- Maintain the existing visual system and avoid redesigning unless requested.

Responsive rules:

- Check responsive behavior mentally and, when authorized, with real viewport validation.
- Protect common widths such as `320px`, `360px`, `375px`, `390px`, `414px`, `768px`, `820px`, `912px`, `1024px`, `1280px` and desktop widths.
- Ensure floating, fixed and absolute elements remain inside the viewport.
- Use flexible grid/flex sizing and `min-width: 0` where needed to prevent overflow.
- Do not force desktop layouts onto tablet/mobile screens.
- Do not force mobile layouts onto desktop/mouse environments unless the viewport truly requires it.

Accessibility rules for AI changes:

- Keep semantic elements and accessible names.
- Do not remove visible focus states.
- Do not make icon-only controls depend on visuals alone.
- Ensure keyboard users can reach and operate new controls.
- Preserve `aria-label`, `aria-expanded`, `aria-controls`, language labels and download link behavior when relevant.
- Tooltips may enhance usability but must not be required for accessibility.

Versioning rules before commit or publication:

- Confirm the project version in both:
  - `package.json`
  - `src/app/core/constants/app-version.ts`
- Do not change versions unless explicitly requested.
- Do not rely on generated version sync unless the user asked to run it.

Validation checklist:

- Confirm files changed match the requested scope.
- Confirm no unrelated content, SEO metadata, URLs, assets, deploy files or workflows were changed.
- Confirm PT/EN content remains aligned when content is touched.
- Confirm responsive behavior is not obviously broken.
- Confirm accessibility behavior is preserved.
- Confirm performance-sensitive changes do not increase initial bundle without justification.
- If commands were authorized, report exact command results.
- If commands were not authorized, list the exact commands the user should run.

Final report rules:

- Start with what changed and why.
- List files changed.
- Separate requested changes from incidental or pre-existing changes.
- Mention validation performed and validation still needed.
- Report any known risks.
- Explicitly state whether commands were run.

## Do Not Do

- Do not use global `overflow-x: hidden` to hide a layout problem.
- Do not move CSS to `styles.scss` just to silence a component style budget warning.
- Do not mix feature, bugfix and performance work without telling the user.
- Do not partially update PT/EN text.
- Do not increase the initial bundle without justification.
- Do not remove accessibility behavior, labels or focus states.
- Do not execute `npm`, `git`, build, test, lint, format, audit or deployment commands without authorization.
- Do not alter package version or `app-version.ts` unless explicitly requested.
- Do not change README, workflows, deploy files, SEO metadata, public assets, URLs, robots or sitemap unless the task explicitly asks for it.

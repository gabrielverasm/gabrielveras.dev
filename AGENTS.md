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

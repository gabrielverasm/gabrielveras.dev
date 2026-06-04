# gabrielveras.dev

Bilingual professional portfolio and online resume for Gabriel Veras, Senior Java Backend Engineer.

Live site: [https://gabrielverasm.github.io/gabrielveras.dev/](https://gabrielverasm.github.io/gabrielveras.dev/)

## Purpose

This project presents Gabriel Veras's professional background, technical focus and contact channels for backend engineering opportunities in Brazil and internationally.

The portfolio is built to be clear, accessible, responsive and maintainable, with content available in Portuguese and English.

## Features

- Bilingual content in Portuguese and English.
- Responsive portfolio layout for mobile, tablet and desktop screens.
- Professional experience, skills, education, projects and contact sections.
- Accessibility controls for theme, high contrast and font size.
- Theme switch.
- High contrast mode.
- Font size controls.
- Profile photo modal.
- SEO metadata.
- Open Graph and Twitter social preview metadata.
- `sitemap.xml` and `robots.txt` files.
- Visible app version in the footer.

## Tech Stack

- Angular 21
- TypeScript
- Standalone Components
- Angular Router
- SCSS
- npm
- ESLint
- Prettier
- Husky
- lint-staged
- GitHub Pages

## Quality Workflow

The project includes npm scripts for local development, formatting, linting, testing and production builds:

```bash
npm run start
npm run lint
npm run format
npm run format:check
npm run build
npm run quality
npm run test
```

`npm run quality` runs linting, formatting checks and a production build.

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run start
```

Create a production build:

```bash
npm run build
```

Run the full local quality check:

```bash
npm run quality
```

## Versioning

`package.json` is the source of truth for the app version.

The `scripts/sync-version.mjs` script generates and syncs `src/app/core/constants/app-version.ts`. The `prestart`, `prebuild` and `prequality` scripts run this sync automatically before the related commands.

The synced app version is displayed in the site footer.

## Deployment

The site is hosted with GitHub Pages.

Current public URL:

[https://gabrielverasm.github.io/gabrielveras.dev/](https://gabrielverasm.github.io/gabrielveras.dev/)

The production build for GitHub Pages uses the base href `/gabrielveras.dev/`.

The custom domain `gabrielveras.dev` is planned, but it is still pending availability. Until then, the GitHub Pages URL is the active public URL.

## Repository Metadata Suggestions

Suggested GitHub repository description:

```text
Bilingual Angular portfolio and online resume for Gabriel Veras, Senior Java Backend Engineer.
```

Suggested topics:

```text
angular, typescript, scss, portfolio, resume, github-pages, accessibility, i18n, seo, java, spring-boot, quarkus, backend-engineer
```

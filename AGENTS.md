# Repository Guidelines

## Project Structure & Module Organization
App code lives under `src/`. The App Router sits in `src/app` (with language variants in `src/app/ja` and serverless handlers in `src/app/api/*`). Domain features are grouped inside `src/features` (e.g., `analysis`, `upload`) while UI primitives stay in `src/components` and `src/components/ui`. Shared configuration lives in `src/config.ts`, and cross-cutting helpers belong in `src/lib`. Static assets (logos, Open Graph images, favicons) go in `public/`. Keep environment defaults in `.env.example` and update it whenever new variables are introduced.

## Build, Test, and Development Commands
Run `npm install` once to pull dependencies (Node 18.18+ per `.nvmrc`). Use `npm start` for local work; it proxies to `next dev --turbopack` on port 3000. `npm run lint` enforces the Next.js + TypeScript rules, and `npm run lint:fix` can clean straightforward issues. `npm run typecheck` calls `tsc --noEmit` to catch typing regressions early. Document new workflow scripts in `package.json` here.

## Coding Style & Naming Conventions
Write in strict TypeScript using React Server/Client components. Follow two-space indentation and LF endings (`.editorconfig`). Prefer functional components with a single default export per file. Reach for the `@/` path alias instead of long relative imports. Components use PascalCase filenames, hooks camelCase, configuration/constants SCREAMING_CASE. Tailwind CSS v4 powers styling—compose utility classes over custom CSS unless a design token demands otherwise. Run Prettier locally if you like, but ESLint is the authority.

## Testing Guidelines
Automated tests are not wired yet. When you add coverage, use Vitest with React Testing Library and suffix files `*.test.ts` or `*.test.tsx`, colocated beside the module or under `src/__tests__`. Record manual verification steps in PRs until suites land. Mock network traffic and avoid calling the Gemini API from tests.

## Commit & Pull Request Guidelines
Commits should follow Conventional Commit prefixes (`feat:`, `fix:`, `chore:`, etc.) to keep changelog automation viable. Clean up work-in-progress commits before review. Every PR needs problem statement, concise change summary, testing notes (manual or automated), and screenshots or GIFs for UI adjustments. Ensure `npm run lint` and `npm run typecheck` succeed before requesting review, and reference related tickets or issues in the PR body.

## Security & Configuration Tips
Store secrets only in `.env.local`, never in git. Required today: `GEMINI_API_KEY`; optional `ZASSHA_SEGMENT_LEN` enables server-side video chunking when `ffmpeg` is installed. Remove personal `.env.local` files before zipping or sharing the project, and audit dependencies regularly for security updates.

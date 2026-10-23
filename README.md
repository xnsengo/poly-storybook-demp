# investia-storybook

Storybook and component package for the Investia site (`ploy-web`: Astro 6 + React 19 + Tailwind v4).

`src/components`, `src/content`, `src/styles`, `src/hooks`, `src/lib/utils.ts` and `public/` are
copied unchanged from the site. This project adds the `*.stories.tsx` files, the `.storybook/`
config, the package build (`src/index.ts`, `vite.lib.config.ts`, `src/styles/package.css`),
mock data in `public/mock/` and the typing shim `src/types/svg-export.d.ts`.

## Usage

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # output in storybook-static/
npm run build            # package build: dist/ + COMPONENTS.md
npm run verify           # lint + typecheck + package build + Storybook build
```

Live Storybook: https://xnsengo.github.io/poly-storybook-demp/ (deployed by GitHub Actions on every push to `main`).

## Using it as a package

This repository is also the npm package `@xnsengo/investia-ui`:

```bash
npm i "@xnsengo/investia-ui@github:xnsengo/poly-storybook-demp#v0.1.0"
```

```tsx
import { Button, SiteShell, Body2Products, homeContent } from "@xnsengo/investia-ui";
```

| Output | Contents |
| --- | --- |
| `dist/index.js` + `*.d.ts` | Every component, page, EN/FR copy dictionary and helper such as `cn` (ESM, typed) |
| `dist/components.css` | The components' own CSS (section styles, Swiper, Marquee) |
| `dist/styles.css` | Full Tailwind theme and utilities, for standalone use |
| `COMPONENTS.md` | Generated component catalog (purpose and Storybook link), for agents and developers |

`dist/` and `COMPONENTS.md` are committed so a GitHub install needs no build step. Run
`npm run build` before committing component changes.

To use the package in a Ploy project (including a snippet to paste into its `AGENTS.md`),
see [docs/ploy-integration.md](docs/ploy-integration.md).

## Structure (Atomic Design)

| Storybook group | Contents |
| --- | --- |
| Introduction | Overview (`src/introduction.mdx`) |
| Foundations | The site's own design-system page (logo, colours, type, primitives) |
| Atoms | Button, Heading, DisplayHeading, Text, Link, Tag, Avatar, Image, Logo, Icons, Layout (Section/Container/Separator), Form controls, Reveal, … |
| Molecules | Card, Faq, Tabs, Table, Carousel, Marquee, Overlay (Dialog/Popover/Tooltip), Navbar, SiteFooterLinks |
| Organisms | Global / Home / Products / Experience / Advisor sections, each with EN, FR, Tablet and Phone stories |
| Templates | SiteShell |
| Pages | Home, The Investia experience, Products and services, Find an advisor, 404 (switch `locale`) |

Story files sit next to their component, e.g. `src/components/atoms/button.stories.tsx`.

## Notes

- **Copy**: organism stories use the EN/FR dictionaries in `src/content/<page>/`, the same data the pages pass.
- **AdvisorSearch**: on the site it calls the Astro SSR route `/api/advisors`. In Storybook its
  `endpoint` points at `public/mock/advisors.json` / `advisors-empty.json` (fictional advisors).
  `WithResults`, `NoResults` and `EmptyInputError` run the search with a play function. The full
  "Find an advisor" page under Pages has no such route, so a search there shows the no-results state.
- **Toolbar**: viewport presets 375 / 768 / 1140 / 1440; backgrounds light / light blue / dark; the
  a11y panel runs axe on every story.
- **Subpath hosting**: components reference `/images`, `/fonts` and `/mock` by root path.
  `.storybook/subpath-assets.ts` rewrites them at runtime when Storybook is served under a subpath
  such as GitHub Pages' `/poly-storybook-demp/`; on a root deployment it does nothing.
- **Not included**: `templates/seo.tsx` and `seo-json.tsx` only render `<head>` tags and have no
  visual output, so they were not copied.
- **`src/types/svg-export.d.ts`**: the `<title>` in `logo.tsx` carries leftover SVG-export
  attributes that React's typings reject. The shim adds those types so the component stays unchanged.
- **Lint scope**: `npm run lint` checks only this project's own files (stories, `.storybook`,
  `scripts`, `src/types`, `src/index.ts`, `vite.lib.config.ts`). The copied component sources have a
  few `react-hooks/set-state-in-effect` errors; they belong to the site and should be fixed there.

## Syncing with the site

After the site's components change, run:

```bash
node scripts/sync-from-site.mjs "../site-4ca098c2-2930-4f97-8fab-665532689ff9-main"
npm run verify
```

The script overwrites the copied sources and assets and keeps every `*.stories.tsx`,
`src/styles/package.css` and `public/mock/`. New components need stories (and an export in
`src/index.ts`) added by hand.

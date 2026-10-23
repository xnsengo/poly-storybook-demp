# Using @xnsengo/investia-ui in a Ploy project (POC)

## 1. Install

Add this to `dependencies` in the Ploy project's `package.json`:

```json
"@xnsengo/investia-ui": "github:xnsengo/poly-storybook-demp#v0.1.0"
```

Then reinstall with bun to update `bun.lock` (the Ploy project locks its dependencies with bun; if it
also has a `package-lock.json`, run `npm install` as well to keep it in sync, as Ploy's AGENTS.md
requires):

```bash
bun install
```

> Do not rely on `npm install` alone: without an npm lockfile it resolves newer Astro / Cloudflare
> versions than `bun.lock`, and in testing the unmodified site then fails its SSR build with
> `rollupOptions.input should not be an html file`. This is unrelated to the package.

> The package's `dist/` is committed to the repository, so installing needs no build step.
> `react` / `react-dom` are peer dependencies the Ploy project already has; the other runtime
> dependencies (Radix, swiper, motion, lucide-react, …) match the Ploy project's versions.

## 2. Styles

The Ploy project already compiles `src/styles/globals.css` with the same Investia Tailwind theme,
so it only needs:

```css
/* src/styles/globals.css, after @import "./theme.css"; */
@import "@xnsengo/investia-ui/components.css";
@source "../../node_modules/@xnsengo/investia-ui/dist";
```

- `components.css`: the components' own CSS (section styles, Swiper, Marquee).
- `@source`: Tailwind v4 does not scan `node_modules` by default; this line makes it generate the
  utility classes the package's components use.

A project without Tailwind imports `@xnsengo/investia-ui/styles.css` plus `components.css` instead.

## 3. Static assets

The components reference `/fonts/*` and `/images/*` by root path. The Ploy project's `public/`
already contains the same files, so nothing else is needed.

## 4. Snippet for the Ploy `AGENTS.md`

Append this block to the end of the Ploy project's `AGENTS.md`:

```markdown
## Shared component library (@xnsengo/investia-ui)

The Investia components are published as the package `@xnsengo/investia-ui`.
Before building any atom, molecule, section or page, check whether the package
already has it, and import it from the package instead of creating or copying
a component:

    import { Button, Card, SiteShell, Body2Products } from "@xnsengo/investia-ui";

- Catalog of every export, with what it is for and its Storybook link:
  `node_modules/@xnsengo/investia-ui/COMPONENTS.md`.
- Props, variants and EN/FR examples: https://xnsengo.github.io/poly-storybook-demp/
- Copy dictionaries are exported too (`homeContent`, `productsContent`,
  `experienceContent`, `advisorContent`, `ROUTES`); pass them as props the
  same way the package's page components do.
- Only build a new component when nothing in the package fits. Build it in
  this project following the usual rules, and note it so it can be moved into
  the package later.
- Do not edit files under `node_modules/@xnsengo/investia-ui`.
```

## 5. Validating the POC

1. Create a test page in Ploy, for example by asking it to "build an About us page with the existing components".
2. Check that the generated code imports from `@xnsengo/investia-ui` rather than adding files under `src/components/`.
3. Build and preview, and confirm that styles, fonts and images render correctly.

## 6. Releasing a new version

After changing components in this repository:

```bash
npm run verify                         # regenerate dist/ and COMPONENTS.md, and check everything
git add -A && git commit -m "..."      # commit the changes together with the new dist/
npm version patch                      # 0.1.0 -> 0.1.1: version commit plus git tag v0.1.1
git push --follow-tags
```

In the Ploy project, change `#v0.1.0` in the dependency to the new tag and reinstall.

## 7. Moving to a private package later

The package name is already scoped (`@xnsengo/investia-ui`) and `publishConfig` points at GitHub
Packages. To go private: make the repository private, run `npm publish` (with a token that has
`write:packages`), then in the Ploy project change the dependency to `"^0.1.0"` and add an `.npmrc`:

```
@xnsengo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

No `import` statement needs to change.

// Re-copy components, content, styles and public assets from the Astro site
// into this Storybook project, keeping every *.stories.tsx and the mock data.
//
//   node scripts/sync-from-site.mjs "../site-4ca098c2-...-main"
import { cpSync, existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const site = resolve(process.argv[2] ?? "");
if (!existsSync(join(site, "src", "components"))) {
  console.error("Usage: node scripts/sync-from-site.mjs <path-to-astro-site>");
  process.exit(1);
}
const here = resolve(import.meta.dirname, "..");

const isStory = (path) => /\.stories\.tsx$/.test(path);

// Remove copied source files (not stories) so deletions upstream carry over.
function clean(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) clean(path);
    else if (!isStory(path)) rmSync(path);
  }
}

for (const dir of ["components", "content", "styles", "hooks"]) {
  clean(join(here, "src", dir));
  cpSync(join(site, "src", dir), join(here, "src", dir), {
    recursive: true,
    filter: (src) => !isStory(src),
  });
}
cpSync(join(site, "src", "lib", "utils.ts"), join(here, "src", "lib", "utils.ts"));
cpSync(join(site, "public"), join(here, "public"), { recursive: true });

// Site-only files with no place in Storybook.
for (const path of [
  "src/components/templates/seo.tsx",
  "src/components/templates/seo-json.tsx",
  "src/content/pages",
  "public/_headers",
  "public/.assetsignore",
]) {
  rmSync(join(here, path), { recursive: true, force: true });
}

console.log(`Synced from ${site}. Run \`npm run verify\` next.`);

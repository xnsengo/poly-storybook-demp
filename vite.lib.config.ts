import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// Library build for @xnsengo/investia-ui: one ES module, component CSS in
// dist/components.css, and .d.ts files with the `@/` alias resolved.
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));
const external = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];
const isExternal = (id: string) =>
  external.some((dep) => id === dep || id.startsWith(`${dep}/`));

export default defineConfig({
  plugins: [
    // "use client" means nothing inside a single bundle and ends up mid-file,
    // where the consumer's bundler warns about it on every build.
    {
      name: "strip-use-client",
      transform(code, id) {
        if (!id.includes("/src/")) return null;
        return code.replace(/^\s*["']use client["'];?/, "");
      },
    },
    react(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
      entryRoot: "src",
      outDir: "dist",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // Fonts and images stay at /fonts and /images, served by the consuming site.
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
      cssFileName: "components",
    },
    rolldownOptions: { external: isExternal },
  },
});

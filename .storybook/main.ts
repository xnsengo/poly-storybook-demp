import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  // Fonts (/fonts/*) and images (/images/*) are referenced by absolute path,
  // exactly as in the Astro site's public/ folder.
  staticDirs: ["../public"],
  docs: { defaultName: "Docs" },
  // react-docgen (the default) keeps prop defaults as written. The TypeScript
  // flavour inlines identifiers, and SiteFooter's socialLinks default holds
  // JSX icons that the args serialiser then fails on.
  typescript: { reactDocgen: "react-docgen" },
};

export default config;

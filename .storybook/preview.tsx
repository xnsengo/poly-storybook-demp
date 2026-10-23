import type { Preview } from "@storybook/react-vite";

import "../src/styles/globals.css";

// Breakpoints the site is measured against (Tailwind md = 768px, desktop 1140px+).
const viewports = {
  phone: { name: "Phone 375", styles: { width: "375px", height: "812px" } },
  tablet: { name: "Tablet 768", styles: { width: "768px", height: "1024px" } },
  laptop: { name: "Laptop 1140", styles: { width: "1140px", height: "900px" } },
  desktop: { name: "Desktop 1440", styles: { width: "1440px", height: "900px" } },
};

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    viewport: { options: viewports },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#ffffff" },
        subtle: { name: "Light blue", value: "#dbf0ff" },
        dark: { name: "Dark", value: "#01233f" },
      },
    },
    a11y: { test: "todo" },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          "Atoms",
          "Molecules",
          "Organisms",
          ["Global", "Home", "Products", "Experience", "Advisor"],
          "Templates",
          "Pages",
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;

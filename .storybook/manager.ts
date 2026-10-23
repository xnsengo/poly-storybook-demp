import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Investia components",
    colorPrimary: "#064dd9",
    colorSecondary: "#064dd9",
  }),
});

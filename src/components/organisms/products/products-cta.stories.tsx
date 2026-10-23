import type { Meta, StoryObj } from "@storybook/react-vite";

import { productsContent } from "@/content/products/products-content";

import { ProductsCta } from "./products-cta";

const meta = {
  title: "Organisms/Products/ProductsCta",
  component: ProductsCta,
  parameters: { layout: "fullscreen" },
  args: productsContent.en.cta,
} satisfies Meta<typeof ProductsCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: productsContent.fr.cta };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

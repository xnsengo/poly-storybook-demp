import type { Meta, StoryObj } from "@storybook/react-vite";

import { productsContent } from "@/content/products/products-content";

import { ProductsCardGrid } from "./products-card-grid";

const meta = {
  title: "Organisms/Products/ProductsCardGrid",
  component: ProductsCardGrid,
  parameters: { layout: "fullscreen" },
  args: { ...productsContent.en.savings, layout: "thirds" as const },
} satisfies Meta<typeof ProductsCardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: { ...productsContent.fr.savings, layout: "thirds" as const } };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

export const InsuranceTwoThirds: Story = {
  args: { ...productsContent.en.insurance, layout: "two-thirds", last: true },
};

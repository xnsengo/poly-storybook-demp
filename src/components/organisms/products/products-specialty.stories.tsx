import type { Meta, StoryObj } from "@storybook/react-vite";

import { productsContent } from "@/content/products/products-content";

import { ProductsSpecialty } from "./products-specialty";

const meta = {
  title: "Organisms/Products/ProductsSpecialty",
  component: ProductsSpecialty,
  parameters: { layout: "fullscreen" },
  args: productsContent.en.specialty,
} satisfies Meta<typeof ProductsSpecialty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: productsContent.fr.specialty };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

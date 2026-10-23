import type { Meta, StoryObj } from "@storybook/react-vite";

import { productsContent } from "@/content/products/products-content";

// ProductsPage passes the hero artwork separately from the copy.
const images = {
  imageSrc: "/images/7f3c2a91-produits-hero-dsktp.webp",
  tabletImageSrc: "/images/7f3c2a91-produits-hero-tblt.webp",
  mobileImageSrc: "/images/7f3c2a91-produits-hero-phne.webp",
};

import { ProductsHero } from "./products-hero";

const meta = {
  title: "Organisms/Products/ProductsHero",
  component: ProductsHero,
  parameters: { layout: "fullscreen" },
  args: { ...productsContent.en.hero, ...images },
} satisfies Meta<typeof ProductsHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const English: Story = {};

export const French: Story = { args: { ...productsContent.fr.hero, ...images } };

export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

export const WithoutCurve: Story = { args: { showCurve: false } };

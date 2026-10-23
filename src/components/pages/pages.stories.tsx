import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Locale } from "@/content/site/routes";

import { AdvisorPage } from "./advisor/page";
import { ExperiencePage } from "./experience/page";
import { HomePage } from "./home/page";
import { NotFoundPage } from "./not-found/page";
import { ProductsPage } from "./products/page";

type PageArgs = { locale: Locale };

/**
 * Full routes as the Astro shells mount them. Switch `locale` to see the
 * French route (/accueil, /produits-et-services, …).
 */
const meta = {
  title: "Pages",
  parameters: { layout: "fullscreen" },
  args: { locale: "en" },
  argTypes: { locale: { control: "inline-radio", options: ["en", "fr"] } },
} satisfies Meta<PageArgs>;

export default meta;
type Story = StoryObj<PageArgs>;

export const Home: Story = {
  render: ({ locale }) => <HomePage locale={locale} />,
};

export const Experience: Story = {
  name: "The Investia experience",
  render: ({ locale }) => <ExperiencePage locale={locale} />,
};

export const Products: Story = {
  name: "Products and services",
  render: ({ locale }) => <ProductsPage locale={locale} />,
};

export const Advisor: Story = {
  name: "Find an advisor",
  parameters: {
    docs: {
      description: {
        story:
          "The page's search posts to the same-origin `/api/advisors` relay, which only exists in the Astro site, so a search here shows the no-results state. Use Organisms/Advisor/AdvisorSearch for the mocked result states.",
      },
    },
  },
  render: ({ locale }) => <AdvisorPage locale={locale} />,
};

export const NotFound: Story = {
  name: "404",
  render: () => <NotFoundPage />,
};

export const HomePhone: Story = {
  name: "Home · phone",
  globals: { viewport: { value: "phone" } },
  render: ({ locale }) => <HomePage locale={locale} />,
};

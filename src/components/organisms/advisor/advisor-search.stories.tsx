import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";

import { advisorContent } from "@/content/advisor/advisor-content";

import { AdvisorSearch } from "./advisor-search";

// The site relays searches through /api/advisors (an Astro SSR route). In
// Storybook the endpoint points at static fixtures in public/mock/, which the
// dev server serves whatever the ?q=&lang= query string is. The advisors in
// them are fictional.
const RESULTS = "/mock/advisors.json";
const EMPTY = "/mock/advisors-empty.json";

const meta = {
  title: "Organisms/Advisor/AdvisorSearch",
  component: AdvisorSearch,
  parameters: { layout: "fullscreen" },
  args: {
    lang: "en",
    hero: advisorContent.en.hero,
    search: advisorContent.en.search,
    portal: advisorContent.en.portal,
    endpoint: RESULTS,
  },
  argTypes: {
    lang: { control: "inline-radio", options: ["en", "fr"] },
    endpoint: { control: "inline-radio", options: [RESULTS, EMPTY] },
  },
} satisfies Meta<typeof AdvisorSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Idle: Story = {};

export const French: Story = {
  args: {
    lang: "fr",
    hero: advisorContent.fr.hero,
    search: advisorContent.fr.search,
    portal: advisorContent.fr.portal,
  },
};

export const WithResults: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole("textbox")[0];
    await userEvent.type(input, "H2X 1Y4");
    await userEvent.keyboard("{Enter}");
    await expect(
      await canvas.findByText(/Alex/, {}, { timeout: 4000 }),
    ).toBeInTheDocument();
  },
};

export const NoResults: Story = {
  args: { endpoint: EMPTY },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole("textbox")[0];
    await userEvent.type(input, "X0A 0A0");
    await userEvent.keyboard("{Enter}");
  },
};

export const EmptyInputError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole("textbox")[0];
    await userEvent.click(input);
    await userEvent.keyboard("{Enter}");
  },
};

export const Phone: Story = { globals: { viewport: { value: "phone" } } };

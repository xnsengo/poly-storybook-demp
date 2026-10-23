import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "@/components/atoms/text";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const TABS = [
  {
    value: "savings",
    label: "Savings",
    description: "RRSP, TFSA, RESP",
    body: "Registered and non-registered plans to help you reach your goals.",
  },
  {
    value: "retirement",
    label: "Retirement",
    description: "RRIF, LIF, annuities",
    body: "Turn your savings into a steady retirement income.",
  },
  {
    value: "insurance",
    label: "Insurance",
    description: "Life, critical illness",
    body: "Protect your loved ones against the unexpected.",
  },
];

const meta = {
  title: "Molecules/Tabs",
  component: Tabs,
  args: { defaultValue: "savings" },
  render: (args) => (
    <Tabs {...args} className="max-w-[720px]">
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Text>{tab.body}</Text>
        </TabsContent>
      ))}
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescriptions: Story = {
  render: (args) => (
    <Tabs {...args} className="max-w-[720px]">
      <TabsList>
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            description={tab.description}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Text>{tab.body}</Text>
        </TabsContent>
      ))}
    </Tabs>
  ),
};

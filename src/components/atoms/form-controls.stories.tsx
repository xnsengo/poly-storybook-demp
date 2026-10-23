import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";

import { Checkbox } from "./checkbox";
import { Input } from "./input";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Select } from "./select";
import { Text } from "./text";
import { Textarea } from "./textarea";

/**
 * Form fields share `fieldVariants`, so `surface` switches all of them between
 * the default, light and dark surfaces together.
 */
const meta = {
  title: "Atoms/Form controls",
  component: Input,
  args: { surface: "default", placeholder: "City or postal code" },
  argTypes: {
    surface: { control: "inline-radio", options: ["default", "light", "dark"] },
  },
  decorators: [
    (Story) => (
      <div className="max-w-[420px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

function Field({
  label,
  children,
}: {
  label: string;
  children: (id: string) => React.ReactNode;
}) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-body text-sm font-bold">
        {label}
      </label>
      {children(id)}
    </div>
  );
}

export const TextInput: Story = {
  render: (args) => (
    <Field label="Find an advisor">{(id) => <Input id={id} {...args} />}</Field>
  ),
};

export const DisabledInput: Story = {
  args: { disabled: true, value: "H1A 1A1", readOnly: true },
  render: TextInput.render,
};

export const TextareaField: Story = {
  name: "Textarea",
  render: ({ surface }) => (
    <Field label="Message">
      {(id) => (
        <Textarea
          id={id}
          surface={surface}
          rows={4}
          placeholder="How can we help?"
        />
      )}
    </Field>
  ),
};

export const SelectField: Story = {
  name: "Select",
  render: ({ surface }) => (
    <Field label="Province">
      {(id) => (
        <Select id={id} surface={surface} defaultValue="qc">
          <option value="qc">Quebec</option>
          <option value="on">Ontario</option>
          <option value="bc">British Columbia</option>
        </Select>
      )}
    </Field>
  ),
};

export const CheckboxField: Story = {
  name: "Checkbox",
  render: () => (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3 font-body">
        <Checkbox defaultChecked /> I agree to be contacted
      </label>
      <label className="flex items-center gap-3 font-body">
        <Checkbox /> Subscribe to economic news
      </label>
      <label className="flex items-center gap-3 font-body opacity-80">
        <Checkbox disabled /> Disabled
      </label>
    </div>
  ),
};

export const RadioGroupField: Story = {
  name: "Radio group",
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="small" className="font-bold">
        Preferred language
      </Text>
      <RadioGroup defaultValue="en" aria-label="Preferred language">
        <label className="flex items-center gap-3 font-body">
          <RadioGroupItem value="en" /> English
        </label>
        <label className="flex items-center gap-3 font-body">
          <RadioGroupItem value="fr" /> Français
        </label>
      </RadioGroup>
    </div>
  ),
};

export const OnDarkSurface: Story = {
  args: { surface: "dark" },
  globals: { backgrounds: { value: "dark" } },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} aria-label="Search" />
      <Select surface="dark" aria-label="Province" defaultValue="qc">
        <option value="qc">Quebec</option>
      </Select>
    </div>
  ),
};

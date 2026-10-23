import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info } from "lucide-react";

import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./overlay";

const meta = {
  title: "Molecules/Overlay",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Radix-based dialog, popover and tooltip, each rendered on the site's `Card` surface.",
      },
      story: { inline: false, iframeHeight: 420 },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogStory: Story = {
  name: "Dialog",
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button as="button">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cookie preferences</DialogTitle>
          <DialogDescription>
            Choose which cookies Investia may use on this device.
          </DialogDescription>
        </DialogHeader>
        <Text className="mt-4">
          Essential cookies are always on. Analytics cookies help us improve
          the site.
        </Text>
        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button as="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button as="button">Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DialogOpen: Story = {
  ...DialogStory,
  name: "Dialog (open)",
  args: { defaultOpen: true },
};

export const PopoverStory: Story = {
  name: "Popover",
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button as="button" variant="outline">
          Client Portal
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Text variant="small">
          Already a client? Register now and access your portfolio online.
        </Text>
      </PopoverContent>
    </Popover>
  ),
};

export const TooltipStory: Story = {
  name: "Tooltip",
  render: () => (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="More information"
          className="inline-flex size-10 items-center justify-center rounded-full text-ploy-accent-primary"
        >
          <Info size={20} aria-hidden="true" />
        </button>
      </TooltipTrigger>
      <TooltipContent>Contributions are tax-deductible</TooltipContent>
    </Tooltip>
  ),
};

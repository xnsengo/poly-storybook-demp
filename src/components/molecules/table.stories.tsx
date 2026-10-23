import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

// Illustrative figures for the story only.
const ROWS = [
  { plan: "RRSP", deductible: "Yes", withdrawals: "Taxable" },
  { plan: "TFSA", deductible: "No", withdrawals: "Tax-free" },
  { plan: "RESP", deductible: "No", withdrawals: "Taxed in the student's hands" },
  { plan: "Non-registered", deductible: "No", withdrawals: "Gains taxable" },
];

const meta = {
  title: "Molecules/Table",
  component: Table,
  render: (args) => (
    <Table {...args}>
      <TableCaption>Comparison of common savings plans</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Plan</TableHead>
          <TableHead>Contributions deductible</TableHead>
          <TableHead>Withdrawals</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.map((row) => (
          <TableRow key={row.plan}>
            <TableCell className="font-bold">{row.plan}</TableCell>
            <TableCell>{row.deductible}</TableCell>
            <TableCell>{row.withdrawals}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Ask your advisor which plan fits you.</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

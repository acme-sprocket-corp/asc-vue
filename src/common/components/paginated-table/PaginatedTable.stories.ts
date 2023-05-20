import { PaginatedTable } from "@/common";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof PaginatedTable> = {
  component: PaginatedTable,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof PaginatedTable> = {
  args: {
    headers: ["First", "Second", "Third"],
    pageSize: 10,
    currentPage: 2,
    entityCount: 30,
  },
};

import { PaginatedTable } from "@/common";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof PaginatedTable> = {
  component: PaginatedTable,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof PaginatedTable> = {
  args: {
    entityCount: 30,
    currentPage: 2,
    pageSize: 10,
    pageChange: () => {
      return;
    },
    pageSizeChange: () => {
      return;
    },
    headers: ["First", "Second", "Third"],
  },
};

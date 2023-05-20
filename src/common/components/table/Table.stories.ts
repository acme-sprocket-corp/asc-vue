import type { Meta, StoryObj } from "@storybook/vue3";
import TableElement from "./TableElement.vue";
import StoryTableElement from "./StoryTableElement.vue";

const meta: Meta<typeof TableElement> = {
  component: StoryTableElement,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof TableElement> = {
  args: {
    headers: ["First", "Second", "Third"],
  },
};

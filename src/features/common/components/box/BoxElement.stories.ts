import type { Meta, StoryObj } from "@storybook/vue3";
import BoxElement from "./BoxElement.vue";

const meta: Meta<typeof BoxElement> = {
  component: BoxElement,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof BoxElement> = {};

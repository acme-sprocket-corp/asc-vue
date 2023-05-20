import HomeView from "./HomeView.vue";
import { type Meta, type StoryObj } from "@storybook/vue3";

const meta: Meta<typeof HomeView> = {
  component: HomeView,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof HomeView> = {
  parameters: {
    jest: "HomeView.test.ts",
  },
};

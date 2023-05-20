import HomeView from "./HomeView.vue";
import { type Meta, type StoryObj } from "@storybook/vue3";

const meta: Meta<typeof HomeView> = {
  component: HomeView,
};

export default meta;

export const Default: StoryObj<typeof HomeView> = {};

import type { Preview } from "@storybook/vue3";
import { withTests } from "@storybook/addon-jest";
import "../src/styles/index.scss";
import results from "../src/coverage/coverage-final.json";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withTests({
    results,
    filesExt: "((\\.specs?)|(\\.tests?))?(\\.ts)?$",
  }),
];

export default preview;

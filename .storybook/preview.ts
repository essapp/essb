import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true
    },
    darkMode: {
      current: 'light'
    }
  },

  tags: ["autodocs"]
};

export default preview;

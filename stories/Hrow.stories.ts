import type { Meta, StoryObj } from "@storybook/vue3";
import EHrow from "../src/hrow/Hrow.vue";

const meta = {
  title: "Example/hrow",
  component: EHrow,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
    },
  },
} satisfies Meta<typeof EHrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        id: 0,
        label: "name",
        rowProps: { itemType: "input", itemProps: { type: "button" } },
      },
    ],
  },
};

import type { Meta, StoryObj } from "@storybook/vue3";
import EField from "../src/field/Field.vue";

const meta = {
  title: "Example/field",
  component: EField,
  tags: ["autodocs"],
  argTypes: {
    itemType: {
      control: "select",
      options: [
        "button",
        "check",
        "date",
        "dateRange",
        "image",
        "input",
        "number",
        "password",
        "radio",
        "search",
        "select",
        "switch",
        "text",
        "time",
        "timeRange",
      ],
    },
  },
} satisfies Meta<typeof EField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    itemType: "input",
    itemProps: { "type": "button" },
  },
};

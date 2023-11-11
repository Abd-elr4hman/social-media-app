import type { Meta, StoryObj } from "@storybook/react";
import Model from "../components/Modal";

const meta = {
  title: "Example/Model",
  component: Model,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Model>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: true,
    title: "test model",
    actionLabel: "submit",
  },
};

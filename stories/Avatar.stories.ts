import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "../components/Avatar";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    userId: "aa",
    isLarge: true,
    hasBorder: true,
    placeHolderImage: "/placeholder.png",
  },
};

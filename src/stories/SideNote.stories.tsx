import type { Meta, StoryObj } from "@storybook/react";
import { SideNote, Text } from "../../lib/main";

const meta = {
  title: "Components/SideNote",
  component: SideNote,
  args: {
    title: "This is a test title",
    titleSize: "md",
    sideNoteFooter: <a href="/">Learn more</a>,
    children: <Text>This is test note!</Text>,
  },
  argTypes: {
    title: {
      control: false,
      description: "Contains the title to be shown.",
    },
    titleSize: {
      description: "Sets the title text size.",
    },
    sideNoteFooter: {
      control: false,
      description: "A prop which can be passed with a single HTML Element",
    },
  },
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof SideNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "SideNote",
};

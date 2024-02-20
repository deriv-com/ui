import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../../lib/components/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Text",
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: "centered",
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    args: {
        color: "red",
        weight: "normal",
        size: "sm",
        as: "h1",
        align: "center",
        fontStyle: "",
        lineHeight: "md",
        children: "Hello World",
        className: "",
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {
            control: { type: "text" },
        },
        weight: {
            control: { type: "text" },
        },
        as: {
            control: { type: "text" },
        },
        fontStyle: {
            options: [
                "normal",
                "italic",
                "oblique",
                "revert",
                "revert-layer",
                "unset",
                "initial",
                "inherit",
            ],
            control: { type: "select" },
        },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "Text",
};

import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../src/components/Breadcrumbs";
import { fn } from "@storybook/test";

const meta = {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered",
    },
    args: {
        textSize: "sm",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Breadcrumbs",
    args: {
        items: [
            { value: "Item1", text: "Item1" },
            { value: "Item2", text: "Item2" },
            { value: "Item3", text: "Item3" },
            { value: "Item4", text: "Item4" },
        ],
        handleOnClick: fn(),
    },
};

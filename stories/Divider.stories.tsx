import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../src/components/Divider";

const meta: Meta<typeof Divider> = {
    title: "Components/Divider",
    component: Divider,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        color: "",
        height: "",
        margin: "",
        className: "",
    },
    argTypes: {
        color: { control: { type: "color" } },
        height: { control: { type: "text" } },
        margin: { control: { type: "text" } },
        className: { control: { type: "text" } },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Divider",
    render: () => (
        <div>
            <span>This is a test text</span>
            <Divider />
            <span>This is another test text</span>
        </div>
    ),
};

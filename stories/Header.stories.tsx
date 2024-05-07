import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/main";

const meta = {
    title: "Components/Header",
    component: Header,
    args: {
        className: "test-class",
    },
    argTypes: {
        className: {
            control: false,
            description: "Additional classes to be applied to the header.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Header",
    render: () => (
        <div style={{ width: "900px" }}>
            <Header>Test Header</Header>
        </div>
    ),
};

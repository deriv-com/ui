import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../src/main";

const meta = {
    title: "Components/Footer",
    component: Footer,
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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Footer",
    render: () => (
        <div style={{ width: "900px" }}>
            <span>content</span>
            <Footer>Test footer</Footer>
        </div>
    ),
};

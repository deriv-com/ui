import type { Meta, StoryObj } from "@storybook/react";
import { Wrapper } from "../src/main";

const meta = {
    title: "Components/Wrapper",
    component: Wrapper,
    args: {
        className: "test-class",
        variant: "left",
    },
    argTypes: {
        className: {
            control: false,
            description: "Additional classes to be applied to the header.",
        },
        variant: {
            options: ["left", "right"],
            control: { type: "radio" },
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Wrapper",
    render: () => (
        <div style={{ display: "flex", width: "900px" }}>
            <Wrapper variant="left" style={{ backgroundColor: "orange" }}>
                Left Wrapper
            </Wrapper>

            <Wrapper variant="right" style={{ backgroundColor: "pink" }}>
                Right Wrapper
            </Wrapper>
        </div>
    ),
};

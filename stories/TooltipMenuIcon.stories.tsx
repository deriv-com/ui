import type { Meta, StoryObj } from "@storybook/react";
import { TooltipMenuIcon } from "../src/main";

const meta = {
    title: "Components/TooltipMenuIcon",
    component: TooltipMenuIcon,
    args: {
        as: "a",
        href: "https://deriv.com/",
        tooltipContent: "tooltip content",
        tooltipPosition: "top",
        tooltipColor: "#D6DADB",
        disableHover: false,
    },
    argTypes: {
        as: {
            description:
                'The HTML element or React component to render which can be "a" | "div" | "button".',
        },
        tooltipContent: {
            description: "The content to display inside the tooltip.",
        },
        tooltipPosition: {
            description: "The position of the tooltip relative to the element.",
        },
        tooltipColor: {
            description:
                "The background color of the tooltip. Defaults to '#D6DADB'.",
        },
        disableHover: {
            description:
                "Whether to disable the hover effect that triggers the children. Defaults to false.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof TooltipMenuIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "TooltipMenuIcon",
    render: (arg) => (
        <div style={{ width: "900px" }}>
            <TooltipMenuIcon style={{ padding: "10px" }} {...arg}>
                Deriv
            </TooltipMenuIcon>
        </div>
    ),
};

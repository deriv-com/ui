import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Tooltip } from "../src/main";

const meta: Meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    args: {
        as: "button",
        tooltipContent: "tooltip content",
        tooltipPosition: "top",
        children: "Hover over me",
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
            control: {
                type: "select",
                options: [
                    "auto",
                    "auto-start",
                    "auto-end",
                    "top",
                    "top-start",
                    "top-end",
                    "bottom",
                    "bottom-start",
                    "bottom-end",
                    "right",
                    "right-start",
                    "right-end",
                    "left",
                    "left-start",
                    "left-end",
                ],
            },
        },
        tooltipContainerClassName: {
            description: "The class name for the tooltip container.",
            control: false,
        },
        tooltipOffset: {
            description: "The distance between the tooltip and the content.",
        },
        variant: {
            description: "The variant of the tooltip.",
            control: {
                type: "select",
                options: ["general", "error"],
            },
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Tooltip> = {
    name: "Default Tooltip",
    args: {
        as: "button",
        children: "Hover over me",
        tooltipContent: "This is a tooltip",
        tooltipPosition: "top",
    },
    render: (args) => (
        <div
            style={{
                width: "900px",
                height: "100%",
                display: "grid",
                placeContent: "center",
            }}
        >
            <Tooltip {...args} />
        </div>
    ),
};

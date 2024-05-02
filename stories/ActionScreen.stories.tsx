import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionScreen } from "../src/components/ActionScreen";
import { Button } from "../src/components/Button";

const meta = {
    title: "Components/ActionScreen",
    component: ActionScreen,
    args: {
        actionButtons: <Button>CTA Button</Button>,
        description:
            "This is the ActionScreen component from the deriv-com/ui library.",
        descriptionSize: "md",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 72 72"
                role="img"
                id="selected_downloadable_icon_id"
                height="120px"
                width="120px"
            >
                <path
                    fill="#FF444F"
                    d="M0 28C0 12.536 12.536 0 28 0h16c15.464 0 28 12.536 28 28v16c0 15.464-12.536 28-28 28H28C12.536 72 0 59.464 0 44z"
                ></path>
                <path
                    fill="#fff"
                    d="m45.167 14.917-2.321 13.166h-8.06c-7.518 0-14.684 6.091-16.012 13.61l-.563 3.2c-1.322 7.518 3.695 13.61 11.213 13.61h6.722c5.48 0 10.7-4.436 11.664-9.916L54 13.497zM39.45 47.346c-.296 1.692-1.82 3.07-3.513 3.07h-4.084c-3.38 0-5.64-2.743-5.047-6.128l.352-1.996c.6-3.38 3.824-6.128 7.203-6.128h7.06z"
                ></path>
            </svg>
        ),
        title: "Welcome to Deriv's UI Library",
    },
    argTypes: {
        description: {
            control: false,
            description: "Contains the description to be shown.",
        },
        descriptionSize: {
            description: "Sets the description text size.",
        },
        icon: {
            control: false,
            description: "Can be used for rendering icons.",
        },
        actionButtons: {
            control: false,
            description:
                "A prop which can be passed with a single button or div containing a group of buttons for CTA.",
        },
        title: {
            control: false,
            description: "Contains the title to be shown.",
        },
        titleSize: {
            description: "Sets the title text size.",
        },
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    render: (args) => <ActionScreen {...args}></ActionScreen>,
} satisfies Meta<typeof ActionScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    name: "ActionScreen",
};

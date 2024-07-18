import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src/components/Button";

const meta = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        borderWidth: "md",
        variant: "contained",
        children: "Click Me!",
        color: "primary",
        isLoading: false,
        disabled: false,
        size: "md",
        hideHoverStyles:false,
        isFullWidth: false,
        rounded: "sm",
        type: "button",
        textSize: undefined,
    },

    argTypes: {
        borderWidth: {
            options: ["none", "sm", "md", "lg"],
            control: { type: "radio" },
        },
        variant: {
            options: ["contained", "outlined", "ghost"],
            control: { type: "radio" },
        },
        "aria-label": {
            table: {
                disable: true,
            },
        },
        isLoading: {
            options: ["true", "false"],
            control: { type: "boolean" },
        },
        hideHoverStyles: {
            options: ["true", "false"],
            control: { type: "boolean" },
        },
        rounded: {
            options: ["sm", "md", "lg"],
            control: { type: "radio" },
        },
        color: {
            options: ["primary", "primary-light", "primary-transparent", "black", "white"],
            control: { type: "radio" },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
    args: {
        variant: "contained",
        children: "Click me!",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Button",
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        children: "Button",
    },
};

export const ContainedPrimary: Story = {
    name: "Contained (Primary)",
    args: { ...meta.args },
};

export const ContainedPrimaryWithNoHover: Story = {
    name: "Contained (Primary No Hover Style)",
    args: {
        ...meta.args,
        hideHoverStyles:true,
     },
};

export const ContainedPrimaryLight: Story = {
    name: "Contained (Primary Light)",
    args: {
        ...meta.args,
        color: "primary-light",
    },
};

export const ContainedBlack: Story = {
    name: "Contained (Black)",
    args: {
        ...meta.args,
        color: "black",
    },
};

export const ContainedWhite: Story = {
    name: "Contained (White)",
    args: {
        ...meta.args,
        color: "white",
    },
};

export const OutlinedPrimary: Story = {
    name: "Outlined (Primary)",
    args: {
        ...meta.args,
        variant: "outlined",
    },
};

export const OutlinedPrimaryLight: Story = {
    name: "Outlined (Primary Light)",
    args: {
        ...meta.args,
        variant: "outlined",
        color: "primary-light",
    },
};

export const OutlinedBlack: Story = {
    name: "Outlined (Black)",
    args: {
        ...meta.args,
        variant: "outlined",
        color: "black",
    },
};

export const OutlinedWhite: Story = {
    name: "Outlined (White)",
    args: {
        ...meta.args,
        variant: "outlined",
        color: "white",
    },
};

export const GhostPrimary: Story = {
    name: "Ghost (Primary)",
    args: {
        ...meta.args,
        variant: "ghost",
    },
};

export const GhostPrimaryLight: Story = {
    name: "Ghost (Primary Light)",
    args: {
        ...meta.args,
        variant: "ghost",
        color: "primary-light",
    },
};

export const GhostPrimaryTransparent: Story = {
    name: "Ghost (Primary Transparent)",
    args: {
        ...meta.args,
        variant: "ghost",
        color: "primary-transparent",
    },
};

export const GhostBlack: Story = {
    name: "Ghost (Black)",
    args: {
        ...meta.args,
        variant: "ghost",
        color: "black",
    },
};

export const GhostWhite: Story = {
    name: "Ghost (White)",
    args: {
        ...meta.args,
        variant: "ghost",
        color: "white",
    },
};

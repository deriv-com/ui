import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../src/components/Badge";

const meta = {
    title: "Components/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        variant: "contained",
        children: "label",
        color: "light-blue",
        badgeSize: "md",
        isBold: true,
        rightIcon: <span>👉</span>,
        rounded:"sm",
        leftIcon: <span>👈</span>,
        padding: "tight",
        textSize: undefined,
    },

    argTypes: {
        variant: {
            options: ["contained", "bordered"],
        },
        color: {
            options: [
                "general",
                "blue",
                "purple",
                "success",
                "danger",
                "warning",
            ],
        },
        badgeSize: {
            options: [
               "lg",
               "md",
               "sm",
               "xs",
            ],
        },
        rounded: {
            options: [
                "lg",
                "md",
                "sm",
                "full",
            ],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
    args: {
        variant: "contained",
        children: "Click me!",
        isBold: true,
    },
};

export const Outlined: Story = {
    args: {
        variant: "bordered",
        children: "Badge",
        isBold: true,
        padding: "loose",
    },
};

export const ContainedBlue: Story = {
    name: "Contained (Success)",
    args: { ...meta.args },
};

export const ContainedGray: Story = {
    name: "Contained (General)",
    args: {
        ...meta.args,
        color: "general",
    },
};

export const ContainedPurpleRounded: Story = {
    name: "Contained (Round-lg)",
    args: {
        ...meta.args,
        color: "purple",
        rounded:"lg"
    },
};

export const ContainedRed: Story = {
    name: "Contained (Red)",
    args: {
        ...meta.args,
        color: "danger",
        padding: "loose",
    },
};

export const ContainedGold: Story = {
    name: "Contained (Gold)",
    args: {
        ...meta.args,
        color: "gold",
        padding: "loose"
    },
};

export const ContainedGreen: Story = {
    name: "Contained (Green)",
    args: {
        ...meta.args,
        color: "green",
        padding: "loose"
    },
};

export const OutlinedGray: Story = {
    name: "Outlined (Gray)",
    args: {
        ...meta.args,
        color:"general",
        variant: "bordered",
    },
};

export const OutlinedSuccess: Story = {
    name: "Outlined (Success)",
    args: {
        ...meta.args,
        variant: "bordered",
        color: "success",
    },
};

export const OutlinedYellow: Story = {
    name: "Outlined (Yellow)",
    args: {
        ...meta.args,
        variant: "bordered",
        color: "warning",
    },
};

export const OutlinedRed: Story = {
    name: "Outlined (Red)",
    args: {
        ...meta.args,
        variant: "bordered",
        color: "danger",
    },
};

export const BadgeRed: Story = {
    name: "Badge (Red)",
    args: {
        ...meta.args,
        children:"1",
        variant: "contained",
        color: "danger",
        rightIcon:undefined,
        rounded:"full",
        leftIcon:undefined,
    },
};

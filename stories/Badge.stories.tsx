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
        rounded: "sm",
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
                "primary",
                "blue",
                "blue-secondary",
                "purple",
                "success",
                "success-secondary",
                "danger",
                "danger-secondary",
                "warning",
                "warning-secondary",
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

export const ContainedPrimary: Story = {
    name: "Contained (Success)",
    args: { ...meta.args },
};

export const ContainedPurple: Story = {
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
        color: "general",
        rounded: "lg",
    },
};

export const ContainedRed: Story = {
    name: "Contained (Yellow)",
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
        padding: "loose",
    },
};

export const ContainedYellow: Story = {
    name: "Contained (Yellow)",
    args: {
        ...meta.args,
        color: "warning",
        padding: "loose",
    },
};

export const OutlinedPrimary: Story = {
    name: "Outlined (Primary)",
    args: {
        ...meta.args,
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

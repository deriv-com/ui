import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../src/main";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        defaultOpen: false,
        isCompact: false,
        title: "What is your return policy?",
        variant: "underline",
    },
    argTypes: {
        title: { control: { type: "text" } },
        defaultOpen: { control: { type: "boolean" } },
        variant: {
            options: ["underline", "bordered", "shadow"],
            control: { type: "select" },
        },
    },
} satisfies Meta<typeof Accordion>;

const styles = {
    width: "800px",
    color: "var(--du-text-general)",
};

const props = {
    className: "theme--light",
    style: styles,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {
    args: {
        variant: "underline",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
    ),
};

export const Bordered: Story = {
    args: {
        variant: "bordered",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
    ),
};

export const Shadow: Story = {
    args: {
        variant: "shadow",
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
    ),
};

export const Compact: Story = {
    args: {
        isCompact: true,
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
    ),
};

export const DefaultOpen: Story = {
    args: {
        defaultOpen: true,
    },
    render: (args) => (
        <div {...props}>
            <Accordion {...args}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
        </div>
    ),
};

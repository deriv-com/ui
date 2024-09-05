import { StoryObj, Meta } from "@storybook/react";
import { SectionMessage } from "../src/main";
import { Button } from "../src/components/Button";

const meta = {
    title: "Components/SectionMessage",
    component: SectionMessage,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: {
                type: "text",
            },
        },
        className: {
            disable: true,
        },
        ctaSection: {
            control: false,
            description:
                "A prop which can be passed with a single button or div containing a group of buttons for CTA.",
        },
        title: {
            control: {
                type: "text",
            },
        },
        variant: {
            control: {
                type: "select",
            },
            defaultValue: "general",
            options: ["warning", "info", "success", "error", "general"],
        },
    },
} satisfies Meta<typeof SectionMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Section Message with CTA",
    args: {
        children: "This is a default section message",
        title: "Section message",
        variant: "general",
        ctaSection: (
            <Button color="black" variant="outlined" size="sm" rounded="md">
                Button
            </Button>
        ),
    },
};

export const Warning: Story = {
    name: "Warning Section Message",
    args: {
        children: "This is a default inline message",
        title: "Section message",
        variant: "warning",
    },
};

export const Error: Story = {
    name: "Error Section Message",
    args: {
        children: "This is a default inline message",
        title: "Section message",
        variant: "error",
    },
};

export const Info: Story = {
    name: "Info Section Message",
    args: {
        children: "This is a default inline message",
        title: "Section message",
        variant: "info",
    },
};

export const Success: Story = {
    name: "Success Section Message",
    args: {
        children: "This is a default inline message",
        title: "Section message",
        variant: "success",
    },
};

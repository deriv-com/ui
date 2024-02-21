import { StoryObj, Meta } from "@storybook/react";
import { Input } from "../../lib/main";
import { useState } from "react";

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        isFullWidth: false,
        label: "Enter Password",
        value: "",
        variant: "general",
        message: "This is a helper message",
        error: false,
        disabled: false,
        hideMessage: false,
    },
    argTypes: {
        leftPlaceholder: {
            control: {
                disable: true,
            },
        },
        rightPlaceholder: {
            control: {
                disable: true,
            },
        },
        value: {
            control: {
                disable: true,
            },
        },
        variant: {
            options: ["general", "success", "warning", "error"],
            control: {
                type: "select",
            },
        },
        message: {
            control: {
                type: "text",
            },
        },
        error: {
            control: {
                type: "boolean",
            },
        },
        hideMessage: {
            control: {
                type: "boolean",
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Input",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

export const Disabled: Story = {
    name: "Disabled Input",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
        disabled: true,
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

export const Success: Story = {
    name: "Success Input",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
        variant: "success",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

export const Error: Story = {
    name: "Error Input",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
        variant: "error",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

export const Warning: Story = {
    name: "Error Input",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
        variant: "warning",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

export const RightPlaceholder: Story = {
    name: "Input with Right Placeholder",
    args: {
        label: "Enter name",
        value: "",
        message: "This is a helper message",
        rightPlaceholder: "USD",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <Input
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        );
    },
};

import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../src/main";
import { useState } from "react";

const meta = {
    title: "Components/TextArea",
    component: TextArea,
    args: {
        label: "Description",
        hint: "This is a hint for the user",
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Description",
        hint: "This is a hint for the user",
        textSize: "sm",
    },

    render: (args) => {
    const [currentValue, setCurrentValue] = useState('');
        return (
            <TextArea
                {...args}
                value={currentValue}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentValue(e.target.value)}
            />
        )
    },
};

export const WithError: Story = {
    args: {
        label: "Description",
        hint: "This is an error hint",
        isInvalid: true,
        textSize: "sm",
    },
};

export const WithCounter: Story = {
    args: {
        label: "Description",
        hint: "This is a counter hint",
        maxLength: 100,
        shouldShowCounter: true,
        textSize: "sm",
    },
    render: (args) => {
        const [value, setValue ] = useState("");

        return (
            <TextArea
                {...args}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            />
        )
    },
};

export const WithErrorAndCounter: Story = {
    args: {
        label: "Description",
        hint: "This is an error and counter hint",
        maxLength: 100,
        isInvalid: true,
        shouldShowCounter: true,
        textSize: "sm",
    },

    render: (args) => {
        const [value, setValue ] = useState("");

        return (
            <TextArea
                {...args}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
            />
        )
    },
};

import { StoryObj, Meta } from "@storybook/react";
import { PasswordInput } from "../src/main";
import { useState } from "react";
import { Button } from "../src/main";

const meta = {
    title: "Components/PasswordInput",
    component: PasswordInput,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        isFullWidth: false,
        hideMessage: false,
        label: "Enter Password",
        value: "",
        onChange: () => { },
        hidePasswordMeter: false,
        hint: "This is a hint message",
    },
    argTypes: {
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
        onChange: {
            control: {
                disable: true,
            },
        },
        hidePasswordMeter: {
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
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Password Input",
    args: {
        label: "Enter Password",
        value: "",
        onChange: () => { },
        hidePasswordMeter: false,
        hint: "This is a hint message",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <div className="theme--light">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        );
    },
};

export const HideMessage: Story = {
    name: "Password Input with no message",
    args: {
        hideMessage: true,
        label: "Enter Password",
        value: "",
        onChange: () => { },
        hidePasswordMeter: false,
        hint: "This is a hint message",
    },
    render: (args) => {
        const [value, setValue] = useState("");

        return (
            <div className="theme--light">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        );
    },
};

export const HidePasswordMeter: Story = {
    name: "Password Input with no password meter",
    args: {
        label: "Enter Password",
        value: "",
        onChange: () => { },
        hidePasswordMeter: true,
        hint: "This is a hint message",
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);

        return (
            <div className="theme--light">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        );
    },
};

export const customErrorMessage: Story = {
    name: "Password Input with custom error message",
    args: {
        label: "Enter Password",
        value: "",
        onChange: () => { },
        hidePasswordMeter: true,
        hint: "This is a hint message",
    },
    render: (args) => {
        const [value, setValue] = useState(args.value);
        const [errorMessage, setErrorMessage] = useState("");


        return (
            <div className="theme--light" style={{ display: "flex", flexDirection: "column" }}>
                <PasswordInput
                    {...args}
                    value={value}
                    customErrorMessage={errorMessage}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={() => setErrorMessage("This is a custom error message")}>submit</Button>
            </div>
        );
    },
};

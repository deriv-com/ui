import { StoryObj, Meta } from "@storybook/react";
import { DatePicker } from "../../lib/main";

const meta = {
    title: "Components/DatePicker",
    component: DatePicker,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        isFullWidth: false,
        label: "Label Text",
        variant: "general",
        message: "This is a helper message",
        errorMessage: "This is a error message",
        isInvalid: false,
        disabled: false,
        onDateChange: () => {},
        wrapperClassName: "",
        hideMessage: false,
        leftPlaceholder: "",
        rightPlaceholder: "",
        mobileAlignment: "below",
    },
    argTypes: {
        isFullWidth: {
            control: {
                type: "boolean",
            },
        },
        label: {
            control: {
                type: "text",
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
        errorMessage: {
            control: {
                type: "text",
            },
        },
        isInvalid: {
            control: {
                type: "boolean",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        wrapperClassName: {
            control: {
                type: "text",
            },
        },
        hideMessage: {
            control: {
                type: "boolean",
            },
        },
        leftPlaceholder: {
            control: {
                type: "text",
            },
        },
        rightPlaceholder: {
            control: {
                type: "text",
            },
        },
        mobileAlignment: {
            options: ["above", "below"],
            control: {
                type: "select",
            },
        },
    },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Datepicker: Story = {
    name: "DatePicker",
    args: { value: "" },
};

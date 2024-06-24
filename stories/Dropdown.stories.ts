import { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "../src/components/Dropdown";

const meta = {
    title: "Components/Dropdown",
    component: Dropdown,
    args: {
        disabled: false,
        dropdownIcon: "",
        errorMessage: "Error message",
        icon: "",
        isRequired: true,
        label: "Dropdown Label",
        list: [
            { text: "Option 1", value: "option1" },
            { text: "Option 2", value: "option2" },
            { text: "Option 3", value: "option3" },
        ],
        listHeight: "md",
        name: "dropdownName",
        onSearch: (inputValue: string) =>
            console.log(`Input value changed: ${inputValue}`),
        onSelect: (value: string) => console.log(`Selected value: ${value}`),
        value: "option1",
        variant: "comboBox",
    },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComboBox: Story = {
    args: {
        variant: "comboBox",
        list: [
            { text: "Option 1", value: "option1" },
            { text: "Option 2", value: "option2" },
            { text: "Option 3", value: "option3" },
        ],
        label: "Select an option",
    },
};

export const Prompt: Story = {
    args: {
        variant: "prompt",
        list: [
            { text: "Option A", value: "optionA" },
            { text: "Option B", value: "optionB" },
            { text: "Option C", value: "optionC" },
        ],
        label: "Choose an option",
    },
};

export const PromptNoResults: Story = {
    name: "Prompt With No Search Results Message",
    args: {
        variant: "prompt",
        list: [
            { text: "Option A", value: "optionA" },
            { text: "Option B", value: "optionB" },
            { text: "Option C", value: "optionC" },
        ],
        label: "Choose an option",
        emptyResultMessage: "No search results"
    }

}

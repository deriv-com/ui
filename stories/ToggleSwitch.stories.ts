import { StoryObj, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ToggleSwitch } from "../src/components/ToggleSwitch";

const meta = {
    title: "Components/ToggleSwitch",
    component: ToggleSwitch,
    tags: ["autodocs"],
    args: {
        onChange: action("ToggleSwitch changed"),
        value: false,
    },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: action("ToggleSwitch changed"),
        value: false,
    },
};


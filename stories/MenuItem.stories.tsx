import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../src/main";
import { LegacyAdsIcon, LegacyWhatsappIcon } from "@deriv/quill-icons";

const meta = {
    title: "Components/MenuItem",
    component: MenuItem,
    args: {
        as: "a",
        leftComponent: <LegacyWhatsappIcon width={16} height={16} />,
        rightComponent: <LegacyAdsIcon width={16} height={16} />,
        disableHover: false,
        active: true,
    },
    argTypes: {
        as: { control: false },
        leftComponent: { control: false },
        rightComponent: { control: false },
        disableHover: { control: false },
        active: { control: false },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "MenuItem",
    render: (args) => (
        <MenuItem {...args}>
            <span style={{ margin: "0 10px" }}>Menu Item</span>
        </MenuItem>
    ),
};

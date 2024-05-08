import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/main";
import { LegacyAdsIcon, LegacyWhatsappIcon } from "@deriv/quill-icons";

const meta = {
    title: "Components/MenuItem",
    component: Header.MenuItem,
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
} satisfies Meta<typeof Header.MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Header.MenuItem",
    render: (args) => (
        <Header.MenuItem {...args}>
            <span style={{ margin: "0 10px" }}>Menu Item</span>
        </Header.MenuItem>
    ),
};

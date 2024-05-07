import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/main";

const meta = {
    title: "Components/DerivLogo",
    component: Header.DerivLogo,
    args: { variant: "default" },
    argTypes: {
        variant: {
            options: ["default", "wallets"],
            control: { type: "select" },
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof Header.DerivLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Header.DerivLogo",
    render: (args) => <Header.DerivLogo variant={args.variant} />,
};

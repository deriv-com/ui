import type { Meta, StoryObj } from "@storybook/react";
import { DerivLogo } from "../src/main";

const meta = {
    title: "Components/DerivLogo",
    component: DerivLogo,
    args: {
        variant: "wallets",
        logoHeight: 30,
        logoWidth: 30,
        href: "https://deriv.com/",
        target: "_blank",
    },
    argTypes: {
        variant: {
            options: ["default", "wallets"],
            control: { type: "select" },
            description: "Specifies the variant of the logo.",
        },
        logoHeight: {
            description: "Height of the logo.",
        },
        logoWidth: {
            description: "Width of the logo.",
        },
        href: {},
        target: {},
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof DerivLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "DerivLogo",
    render: (args) => (
        <DerivLogo
            variant={args.variant}
            logoHeight={args.logoHeight}
            logoWidth={args.logoWidth}
            href={args.href}
            target={args.target}
        />
    ),
};

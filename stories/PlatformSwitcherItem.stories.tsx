import type { Meta, StoryObj } from "@storybook/react";
import { DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon as DerivTraderLogo } from "@deriv/quill-icons/Logo";
import { PlatformSwitcherItem } from "../src/main";

const meta = {
    title: "Components/PlatformSwitcherItem",
    component: PlatformSwitcherItem,
    args: {
        href: "https://app.deriv.com",
        description:
            "A whole new trading experience on a powerful yet easy to use platform.",
        icon: <DerivTraderLogo width={148} height={32} />,
        active: false,
    },
    argTypes: {
        href: { control: false, description: "" },
        description: {
            control: false,
            description:
                "The content description of the item, can be a string or JSX.",
        },
        icon: {
            control: false,
            description: "The icon to be displayed inside the item.",
        },
        active: {
            control: false,
            description: "Indicates if the current item is active.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof PlatformSwitcherItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "PlatformSwitcherItem",
    render: (arg) => (
        <div style={{ display: "flex" }}>
            <PlatformSwitcherItem {...arg} />
        </div>
    ),
};

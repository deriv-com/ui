import type { Meta, StoryObj } from "@storybook/react";
import { DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon as DerivTraderLogo } from "@deriv/quill-icons/Logo";
import { Header, PlatformSwitcher, Wrapper } from "../src/main";

const meta = {
    title: "Components/PlatformSwitcher",
    component: PlatformSwitcher,
    args: {
        bottomLinkLabel: "Looking for CFDs? Go to Trader’s Hub",
        bottomLinkProps: { href: "https://deriv.com/" },
        buttonProps: {
            icon: <DerivTraderLogo width={114.97} height={25} />,
            style: { padding: "0 16px" },
        },
    },
    argTypes: {
        bottomLinkLabel: {
            control: false,
            description:
                "Optional label for a bottom link in the context menu, can be a string or JSX element.",
        },
        bottomLinkProps: {
            control: false,
            description:
                "Optional props for the bottom link, assuming it's rendered as an `<a>` tag.",
        },
        buttonProps: {
            control: false,
            description:
                "Props for the PlatformSwitcherButton, like `icon` excluding `isExpanded` and `onClick`.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof PlatformSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "PlatformSwitcher",
    render: (arg) => (
        <div style={{ width: "900px" }}>
            <Header>
                <Wrapper variant="left">
                    <PlatformSwitcher {...arg}>
                        <span>PlatformSwitcher</span>
                    </PlatformSwitcher>
                </Wrapper>
            </Header>
        </div>
    ),
};

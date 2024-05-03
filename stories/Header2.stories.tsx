import type { Meta, StoryObj } from "@storybook/react";
import { Header2, Button } from "../src/main";
import { LegacyCashierIcon, LegacyReportsIcon, LabelPairedHouseBlankCaptionBoldIcon, LabelPairedHouseBlankCaptionRegularIcon } from "@deriv/quill-icons";

const meta = {
    title: "Components/Header2",
    component: Header2,
    parameters: { layout: "centered" },
    tags: ["autodocs"],
    args: {
        items: [
            {
                icon: <LegacyReportsIcon iconSize="xs" />,
                label: "Reports",
            },
            {
                icon: <LegacyCashierIcon iconSize="xs" />,
                label: "Cashier",
            },
        ],
        account_list: [
            {
                icon: "USD",
                type: "US Dollar",
                loginId: "CR900000702",
                balance: "10,000.00",
                currency: "USD",
                token: "",
                is_eu: true,
            },
            {
                icon: "USDT",
                type: "Tether TRC20",
                loginId: "CR900000527",
                balance: "60,000.00",
                currency: "tUSDT",
                token: "",
                is_eu: false,
            },
            {
                icon: "Demo",
                type: "Demo",
                loginId: "VRTC900000702",
                balance: "10,000.00",
                currency: "USD",
                token: "",
                is_eu: false,
            },
        ],
    },
} satisfies Meta<typeof Header2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Header",
    render: (args) => (
        <div style={{ width: "900px", minHeight: "600px" }}>
            <Header2>
                <Header2.LeftWrapper>
                    <Header2.Logo />
                    <Header2.PlatformSwitcher />
                    <Header2.MenuItems items={args.items} />
                </Header2.LeftWrapper>
                <Header2.RightWrapper>
                    <Header2.Notification />
                    <Header2.AccountSetting />
                    <Header2.AccountSwitcher
                        accounts_list={args.account_list}
                    />
                    <Button size="sm"> Deposit </Button>
                </Header2.RightWrapper>
            </Header2>
        </div>
    ),
};

export const LoggedOut: Story = {
    name: "Logged out Header",
    render: () => (
        <div style={{ width: "900px", minHeight: "600px" }}>
            <Header2>
                <Header2.LeftWrapper>
                    <Header2.PlatformSwitcher />
                </Header2.LeftWrapper>
                <Header2.RightWrapper>
                    <Button variant="ghost" size="sm">
                        {" "}
                        Login{" "}
                    </Button>
                    <Button size="sm"> Signup </Button>
                </Header2.RightWrapper>
            </Header2>
        </div>
    ),
};

export const TradersHub: Story = {
    name: "Trader's Hub Header",
    args:{
        items: [
            {
                icon: <LabelPairedHouseBlankCaptionRegularIcon />,
                label: "Trader's Hub",
            },
            {
                icon: <LegacyCashierIcon iconSize="xs" />,
                label: "Cashier",
            },
        ],
    },
    render: (args) => (
        <div style={{ width: "900px", minHeight: "600px" }}>
            <Header2>
                <Header2.LeftWrapper>
                    <Header2.PlatformSwitcher />
                    <Header2.MenuItems items={args.items} />
                </Header2.LeftWrapper>
                <Header2.RightWrapper>
                    <Button variant="ghost" size="sm">
                        Login
                    </Button>
                    <Button size="sm"> Signup </Button>
                </Header2.RightWrapper>
            </Header2>
        </div>
    ),
};

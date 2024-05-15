import type { Meta, StoryObj } from "@storybook/react";

import { AccountSwitcher, Divider, Header, Wrapper } from "../src/main";
import {
    CurrencyBtcIcon,
    CurrencyDemoIcon,
    CurrencyEthIcon,
    CurrencyUsdIcon,
    CurrencyUsdtIcon,
} from "@deriv/quill-icons";

const accountsList = [
    {
        icon: <CurrencyUsdIcon />,
        type: "US Dollar",
        loginid: "id1",
        balance: "1000",
        currency: "USD",
        token: "token1",
        isVirtual: true,
        isEu: true,
        isActive: false,
    },
    {
        icon: <CurrencyBtcIcon />,
        type: "Bitcoin",
        loginid: "id2",
        balance: "0.00054",
        currency: "BTC",
        token: "token2",
        isVirtual: false,
        isEu: false,
        isActive: true,
    },
    {
        icon: <CurrencyDemoIcon />,
        type: "US Dollar",
        loginid: "id3",
        balance: "10000",
        currency: "USD",
        token: "token3",
        isVirtual: false,
        isEu: false,
        isActive: false,
    },
    {
        icon: <CurrencyUsdtIcon />,
        type: "Tether TRC20",
        loginid: "id4",
        balance: "500",
        currency: "USD",
        token: "token4",
        isVirtual: false,
        isEu: true,
        isActive: false,
    },
    {
        icon: <CurrencyEthIcon />,
        type: "Etherium",
        loginid: "id5",
        balance: "1000",
        currency: "ETH",
        token: "token5",
        isVirtual: false,
        isEu: true,
        isActive: false,
    },
];

const meta = {
    title: "Components/AccountSwitcher",
    component: AccountSwitcher,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AccountSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "AccountSwitcher",
    args: {
        activeAccount: {
            icon: <div>Icon</div>,
            type: "Etherium",
            loginid: "id5",
            balance: "1000",
            currency: "ETH",
            token: "token5",
            isVirtual: false,
            isEu: true,
            isActive: false,
        },
        children: [], // Add an empty array for the children property
    },
    render: () => {
        return (
            <div style={{ width: "800px", height: "500px" }}>
                <Header>
                    <Wrapper variant="right">
                        <AccountSwitcher
                            activeAccount={
                                accountsList.find(
                                    (account) => account.isActive,
                                ) || {
                                    icon: <CurrencyBtcIcon />,
                                    type: "Bitcoin",
                                    loginid: "id2",
                                    balance: "0",
                                    currency: "BTC",
                                    token: "token2",
                                    isVirtual: false,
                                    isEu: false,
                                    isActive: true,
                                }
                            }
                        >
                            <AccountSwitcher.Tab title="Real">
                                <AccountSwitcher.AccountsPanel
                                    isOpen
                                    title="EU Accounts"
                                >
                                    {accountsList
                                        .filter(
                                            (account) =>
                                                !account.isVirtual &&
                                                account.isEu,
                                        )
                                        .map((account) => (
                                            <AccountSwitcher.AccountsItem
                                                key={account.loginid}
                                                account={account}
                                                onSelectAccount={() => {
                                                    console.log(
                                                        `account with loginid ${account.loginid} clicked`,
                                                    );
                                                }}
                                            />
                                        ))}
                                </AccountSwitcher.AccountsPanel>
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.AccountsPanel title="Non-EU">
                                    {accountsList
                                        .filter(
                                            (account) =>
                                                !account.isVirtual &&
                                                !account.isEu,
                                        )
                                        .map((account) => (
                                            <AccountSwitcher.AccountsItem
                                                key={account.loginid}
                                                account={account}
                                                onSelectAccount={() => {}}
                                            />
                                        ))}
                                </AccountSwitcher.AccountsPanel>
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.TotalAsset
                                    title="Total assets"
                                    description="test description text comes here"
                                    value="10,021 USD"
                                />
                                <Divider color="#f2f3f4" height="4px" />
                                <AccountSwitcher.TradersHubLink>
                                    Looking for CFD?{" "}
                                </AccountSwitcher.TradersHubLink>
                                <Divider color="#f2f3f4" height="4px" />

                                <AccountSwitcher.Footer>
                                    this is a footer
                                </AccountSwitcher.Footer>
                            </AccountSwitcher.Tab>
                            <AccountSwitcher.Tab title="Demo">
                                test 2
                            </AccountSwitcher.Tab>
                        </AccountSwitcher>
                    </Wrapper>
                </Header>
            </div>
        );
    },
};

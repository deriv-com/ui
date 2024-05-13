import React from "react";
import ReactDOM from "react-dom/client";
import {
    LegacyReportsIcon,
    LabelPairedHouseBlankMdRegularIcon,
    LegacyChevronRight2pxIcon,
    CurrencyUsdIcon,
    CurrencyBtcIcon,
    CurrencyDemoIcon,
    CurrencyUsdtIcon,
    CurrencyEthIcon,
} from "@deriv/quill-icons";

import { TAccount } from "../src/components/AppLayout/AccountSwitcher/types";

import {
    MenuItem,
    useDevice,
    Header,
    Drawer,
    DerivLogo,
    Button,
    Wrapper,
    AccountSwitcher,
    Divider,
} from "../src/main";

const accountsList: TAccount[] = [
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
AccountSwitcher.setAppElement(document.getElementById("root") as HTMLElement);
const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);
    return (
        <>
            {!isMobile ? (
                <Header>
                    <Wrapper
                        variant="left"
                        style={{ gap: "15px", padding: "10px" }}
                    >
                        <DerivLogo variant="default" />
                        <MenuItem
                            style={{ marginLeft: "15px", gap: "5px" }}
                            as="button"
                            leftComponent={
                                <LabelPairedHouseBlankMdRegularIcon />
                            }
                        >
                            Trader's Hub
                        </MenuItem>

                        <MenuItem
                            style={{ marginLeft: "15px", gap: "5px" }}
                            as="button"
                            leftComponent={<LegacyReportsIcon iconSize="xs" />}
                        >
                            Reports
                        </MenuItem>
                    </Wrapper>
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
                        <Button size="sm" style={{ margin: "0 10px" }}>
                            Deposit
                        </Button>
                    </Wrapper>
                </Header>
            ) : (
                <>
                    <Button onClick={() => setDrawerOpen(true)}>
                        Open Drawer
                    </Button>
                    <Drawer
                        width="300px"
                        isOpen={is_drawer_open}
                        onCloseDrawer={() => setDrawerOpen(false)}
                    >
                        <Drawer.Header
                            onCloseDrawer={() => setDrawerOpen(false)}
                        >
                            <DerivLogo variant="default" />
                        </Drawer.Header>
                        <Drawer.Content>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <MenuItem
                                    style={{
                                        gap: "5px",
                                        display: "flex",
                                        padding: "10px",
                                    }}
                                    active
                                    as="button"
                                    leftComponent={
                                        <LabelPairedHouseBlankMdRegularIcon />
                                    }
                                    rightComponent={
                                        <LegacyChevronRight2pxIcon iconSize="xs" />
                                    }
                                >
                                    Trader's Hub
                                </MenuItem>
                            </div>
                        </Drawer.Content>
                        <Drawer.Footer>This is a footer</Drawer.Footer>
                    </Drawer>
                </>
            )}
        </>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

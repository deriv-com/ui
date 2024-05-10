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

import { TAccount } from "../src/components/AppLayout/AccountSwitcher/AccountsPanel/types";

import {
    MenuItem,
    useDevice,
    Header,
    Drawer,
    DerivLogo,
    Button,
    Wrapper,
    AccountSwitcher,
} from "../src/main";

const accountsList : TAccount[]  = [
    {
        icon: <CurrencyUsdIcon/>,
        type: "US Dollar",
        loginid: "id1",
        balance: "1000",
        currency: "USD",
        token: "token1",
        isVirtual: true,
        isEu: true,
    },
    {
        icon: <CurrencyBtcIcon/>,
        type: "Bitcoin",
        loginid: "id2",
        balance: "0",
        currency: "BTC",
        token: "token2",
        isVirtual: false,
        isEu: false,
    },
    {
        icon: <CurrencyDemoIcon/>,
        type: "US Dollar",
        loginid: "id3",
        balance: "10000",
        currency: "USD",
        token: "token3",
        isVirtual: false,
        isEu: false,
    },
    {
        icon: <CurrencyUsdtIcon/>,
        type: "Tether TRC20",
        loginid: "id4",
        balance: "500",
        currency: "USD",
        token: "token4",
        isVirtual: false,
        isEu: true,
    },
    {
        icon: <CurrencyEthIcon/>,
        type: "Etherium",
        loginid: "id5",
        balance: "1000",
        currency: "ETH",
        token: "token5",
        isVirtual: false,
        isEu: true,
    },
];

const App = () => {
    const { isMobile } = useDevice();
    const [is_drawer_open, setDrawerOpen] = React.useState(false);
    return (
        <div>
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
                        <AccountSwitcher accounts={accountsList} />
                        <Button size="sm" style={{margin: "0 10px"}}>Deposit</Button>
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
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

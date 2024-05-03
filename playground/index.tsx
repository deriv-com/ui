import React from "react";
import ReactDOM from "react-dom/client";
import { Header2, Button } from "../src/main";
import { LegacyCashierIcon, LegacyReportsIcon } from "@deriv/quill-icons";

const account_list = [
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
];

const menuItems = [
    {
        icon: <LegacyReportsIcon iconSize="xs" />,
        label: "Reports",
    },
    {
        icon: <LegacyCashierIcon iconSize="xs" />,
        label: "Cashier",
    },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Header2>
            <Header2.LeftWrapper>
                <Header2.Logo />
                <Header2.PlatformSwitcher />
                <Header2.MenuItems items={menuItems} />
            </Header2.LeftWrapper>
            <Header2.RightWrapper>
                <Header2.Notification />
                <Header2.AccountSetting />
                <Header2.AccountSwitcher accounts_list={account_list} />
                <Button size="sm"> Deposit </Button>
            </Header2.RightWrapper>
        </Header2>

        {/* <Header variant="guest" /> */}
    </React.StrictMode>,
);

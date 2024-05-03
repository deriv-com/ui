import { Tabs, Tab } from "../../../Tabs";
import { Accordion } from "../../../Accordion";
import { Divider } from "../../../Divider";
import { AccountSwitcherItem } from "./AccountSwitcherItem";
import { DropDown } from "../DropDown";
import {
    LegacyChevronDown2pxIcon,
    LegacyChevronUp2pxIcon,
    CurrencyUsdIcon,
} from "@deriv/quill-icons";

import "./AccountSwitcher.scss";
import React from "react";

type TAccount = {
    icon: string;
    type: string;
    loginId: string;
    balance: string;
    currency: string;
    token: string;
    is_eu: boolean;
};

type AccountSwitcherProps = {
    accounts_list: TAccount[];
};

export const AccountSwitcher = ({ accounts_list }: AccountSwitcherProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div
            className="deriv-account-switcher"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="deriv-account-switcher__currency-icon">
                <CurrencyUsdIcon iconSize="sm" />
            </div>
            <div className="deriv-account-switcher__balance">0.00 USD</div>
            {isOpen ? (
                <LegacyChevronUp2pxIcon iconSize="xs" />
            ) : (
                <LegacyChevronDown2pxIcon iconSize="xs" />
            )}
            <DropDown isOpen={isOpen}>
                <Tabs activeTab="Real" variant="secondary">
                    <Tab title="Real">
                        <div className="deriv-account-switcher__tab--real">
                            <div className="account-switcher__accounts">
                                <Accordion
                                    title={
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Non-EU Deriv account
                                        </div>
                                    }
                                    defaultOpen
                                >
                                    {accounts_list
                                        .filter((account) => !account.is_eu)
                                        .map((account) => (
                                            <AccountSwitcherItem
                                                account={account}
                                                key={account.loginId}
                                            />
                                        ))}
                                </Accordion>
                                <Divider height="2px" />
                                <Accordion
                                    title={
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            EU Deriv account
                                        </div>
                                    }
                                >
                                    {accounts_list
                                        .filter((account) => account.is_eu)
                                        .map((account) => (
                                            <AccountSwitcherItem
                                                account={account}
                                                key={account.loginId}
                                            />
                                        ))}
                                </Accordion>
                                <Divider height="2px" />
                            </div>
                            <div className="account-switcher__total-asset">
                                total asset
                            </div>
                            <div className="account-switcher__cfd">
                                cfd link
                            </div>
                            <div className="account-switcher__footer">
                                footer
                            </div>
                        </div>
                    </Tab>
                    <Tab
                        title="Demo"
                        className="deriv-account-switcher__tab--demo"
                    >
                        Demo Tab content
                    </Tab>
                </Tabs>
            </DropDown>
        </div>
    );
};

AccountSwitcher.displayName = "AccountSwitcher";

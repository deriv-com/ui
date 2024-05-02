import { Tabs, Tab } from "../../../Tabs";
import { Accordion } from "../../../Accordion";
import {
    LegacyChevronDown2pxIcon,
    CurrencyUsdIcon,
    // CurrencyBtcIcon,
    // CurrencyDemoIcon,
    // CurrencyUsdtIcon,
    // CurrencyEthIcon,
} from "@deriv/quill-icons";

import "./AccountSwitcher.scss";

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

// const getCurrencyIcon = (currency: string) => {
//     const CurrencyIcons: {
//         [key: string]: React.ForwardRefExoticComponent<
//             React.SVGProps<SVGSVGElement>
//         >;
//     } = {
//         usd: CurrencyBtcIcon,
//         demo: CurrencyDemoIcon,
//         btc: CurrencyBtcIcon,
//         usdt: CurrencyUsdtIcon,
//         eth: CurrencyEthIcon,
//     };

//     return CurrencyIcons[currency] || CurrencyUsdIcon;
// };

export const AccountSwitcher = ({ accounts_list }: AccountSwitcherProps) => {
    return (
        <div className="deriv-account-switcher">
            <div className="deriv-account-switcher__currency-icon">
                <CurrencyUsdIcon iconSize="sm" />
            </div>
            <div className="deriv-account-switcher__balance">0.00 USD</div>
            <LegacyChevronDown2pxIcon iconSize="xs" />
            <div className="deriv-account-switcher__dropdown">
                <Tabs activeTab="Real" variant="secondary">
                    <Tab title="Real">
                        <div className="deriv-account-switcher__tab--real">
                            <div className="account-switcher__accounts">
                                <Accordion
                                    title="Non-EU Deriv account"
                                    defaultOpen
                                >
                                    {accounts_list.map((account) => (
                                        <div className="deriv-account-switcher__account" key={account.loginId}>
                                            <div className="icon">
                                                {/* {getCurrencyIcon(account.icon)} */}
                                            </div>
                                        </div>
                                    ))}
                                </Accordion>
                                <Accordion title="EU Deriv account">
                                    account for EU
                                </Accordion>
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
            </div>
        </div>
    );
};

AccountSwitcher.displayName = "AccountSwitcher";

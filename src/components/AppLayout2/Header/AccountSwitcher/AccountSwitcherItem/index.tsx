import {
    CurrencyUsdIcon,
    CurrencyBtcIcon,
    CurrencyDemoIcon,
    CurrencyUsdtIcon,
    CurrencyEthIcon,
} from "@deriv/quill-icons";

import "./AccountSwitcherItem.scss"

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
    account: TAccount;
};

const getCurrencyIcon = (currency: string) => {
    const CurrencyIcons: { [key: string]: JSX.Element } = {
        usd: <CurrencyBtcIcon />,
        demo: <CurrencyDemoIcon />,
        btc: <CurrencyBtcIcon />,
        usdt: <CurrencyUsdtIcon />,
        eth: <CurrencyEthIcon />,
    };

    return CurrencyIcons[currency] || <CurrencyUsdIcon />;
};

export const AccountSwitcherItem = ({ account }: AccountSwitcherProps) => {
    return (
        <div className="deriv-account-switcher-item" key={account.loginId}>
            <div className="deriv-account-switcher-item__icon">
                {getCurrencyIcon(account.icon)}
            </div>
            <div className="deriv-account-switcher-item__detail">
                <div className="deriv-account-switcher-item__currency">
                    {account.currency}
                </div>
                <div className="deriv-account-switcher-item__loginid">
                    {account.loginId}
                </div>
            </div>
            <div className="deriv-account-switcher-item__balance">
                {`${account.balance} ${account.currency}`}
            </div>
        </div>
    );
};

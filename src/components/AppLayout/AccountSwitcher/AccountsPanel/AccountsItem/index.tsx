import { TAccount } from "../types";

import "./AccountsItem.scss";
type AccountSwitcherProps = {
    account: TAccount;
    onClick: () => void;
};

export const AccountsItem = ({ account, onClick }: AccountSwitcherProps) => {
    return (
        <div className="deriv-account-switcher-item" key={account.loginid} onClick={onClick}>
            <div className="deriv-account-switcher-item__icon">
                {account.icon}
            </div>
            <div className="deriv-account-switcher-item__detail">
                <div className="deriv-account-switcher-item__currency">
                    {account.type}
                </div>
                <div className="deriv-account-switcher-item__loginid">
                    {account.loginid}
                </div>
            </div>
            <div className="deriv-account-switcher-item__balance">
                {`${account.balance} ${account.currency}`}
            </div>
        </div>
    );
};

import clsx from "clsx";
import { TAccount } from "../types";

import "./AccountsItem.scss";

type AccountSwitcherProps = {
    account: TAccount;
    onSelectAccount: () => void;
};

export const AccountsItem = ({ account, onSelectAccount }: AccountSwitcherProps) => {
    return (
        <div
            className={clsx("deriv-account-switcher-item", {
                "deriv-account-switcher-item--active": account.isActive,
            })}
            key={account.loginid}
            onClick={onSelectAccount}
        >
            <div className="deriv-account-switcher-item__icon">
                {account.icon}
            </div>
            <div className="deriv-account-switcher-item__detail">
                <div
                    className={clsx("deriv-account-switcher-item__currency", {
                        "deriv-account-switcher-item__currency--active":
                            account.isActive,
                    })}
                >
                    {account.currencyLabel}
                </div>
                <div
                    className={clsx("deriv-account-switcher-item__loginid", {
                        "deriv-account-switcher-item__loginid--active":
                            account.isActive,
                    })}
                >
                    {account.loginid}
                </div>
            </div>
            <div
                className={clsx("deriv-account-switcher-item__balance", {
                    "deriv-account-switcher-item__balance--active":
                        account.isActive,
                })}
            >
                {`${account.balance} ${account.currency}`}
            </div>
        </div>
    );
};

import clsx from "clsx";
import { TAccount } from "../types";

import "./AccountsItem.scss";
import { Button } from "../../../Button";

type AccountSwitcherProps = {
    account: TAccount;
    onSelectAccount: () => void;
    onResetBalance?: () => void;
};

export const AccountsItem = ({
    account,
    onSelectAccount,
    onResetBalance,
}: AccountSwitcherProps) => {
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
                {onResetBalance ? (
                    <Button
                        borderWidth="sm"
                        textSize="xs"
                        size="xs"
                        variant="outlined"
                        color="black"
                        isFullWidth
                        onClick={onResetBalance}
                    >
                        Reset balance
                    </Button>
                ) : (
                    `${account.balance} ${account.currency}`
                )}
            </div>
        </div>
    );
};

import { AccountsItem } from "./AccountsItem";
import { Accordion } from "../../../Accordion";
import {TAccount} from "./types"

import "./AccountsPanel.scss"

type AccountsListProps = {
    title: string | JSX.Element;
    accounts: TAccount[];
    onClick: (loginid: string) => void;
};

export const AccountsPanel = ({
    accounts,
    onClick,
    title,
}: AccountsListProps) => {
    return (
            <Accordion defaultOpen={true} className="deriv-account-switcher__list" title={title}>
                {accounts.map((account) => (
                    <AccountsItem
                        key={account.loginid}
                        account={account}
                        onClick={() => onClick(account.loginid)}
                    />
                ))}
            </Accordion>
    );
};


type AccountsItemProps = {
    account: {
        loginid: string;
        icon: string;
        title: string;
    };
    onClick: () => void;
}
export const AccountsItem = ({ account, onClick }: AccountsItemProps) => {
    return (
        <div className="deriv-account-switcher__item" onClick={onClick}>
            <div className="deriv-account-switcher__item-icon">
                {account.icon}
            </div>
            <div className="deriv-account-switcher__item-title">
                {account.title}
            </div>
        </div>
    )
}
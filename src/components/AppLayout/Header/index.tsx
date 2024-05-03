import { DerivLogo } from "./DerivLogo";
import { PlatformSwitcher } from "./PlatformSwitcher";
import { MenuItem } from "./MenuItem";
import { HeaderConfigs, THeaderVariants } from "./HeaderConfigs";
import { Tutorial } from "./Tutorial";
import { Notification } from "./Notification";
import { AccountSettings } from "./AccountSettings";
import { AccountSwitcher } from "./AccountSwitcher";
import { ActionsButtons } from "./ActionsButtons";
import "./Header.scss";
import { TAccountList } from "../LayoutTypes";

type THeader = {
    variant: THeaderVariants;
    showInEU: boolean;
    accountList: TAccountList[];
    totalAssets: string;
    isUserAuthorized: boolean;
    actionButtonCallBack: () => void;
    notificationData: {
        notificationCount: number;
        notificationList: {
            title: string;
            description: string;
            actionButton: () => void;
        }[];
    };
};

export const Header = ({ variant }: THeader) => {
    const config = HeaderConfigs[variant];
    const {
        logoVariant,
        platformSwitcher,
        menuItems,
        tutorial,
        notification,
        accountSettings,
        accountSwitcher,
        actionButtons,
    } = config;

    return (
        <header className="deriv-header">
            <div className="deriv-header__left">
                {logoVariant && <DerivLogo variant={logoVariant} />}
                {platformSwitcher && <PlatformSwitcher />}
                {menuItems &&
                    menuItems.map(({ href, icon, label }) => (
                        <MenuItem
                            key={label}
                            label={label}
                            href={href}
                            icon={icon}
                        />
                    ))}
            </div>
            <div className="deriv-header__right">
                {tutorial && <Tutorial />}
                {notification && <Notification />}
                {accountSettings && <AccountSettings />}
                {accountSwitcher && <AccountSwitcher />}
                {actionButtons && <ActionsButtons />}
            </div>
        </header>
    );
};

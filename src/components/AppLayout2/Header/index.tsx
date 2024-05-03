import "./Header.scss";
import React from "react";
import { RightWrapper } from "./RightWrapper";
import { LeftWrapper } from "./LeftWrapper";
import {AccountSetting} from "./AccountSetting"
import {Notification} from "./Notification"
import {AccountSwitcher} from "./AccountSwitcher"
import {DerivLogo} from "./Logo"
import {PlatformSwitcher} from "./PlatformSwitcher"
import {MenuItems} from "./MenuItems"


export const Header = ({children }: React.PropsWithChildren) => (
    <header className="deriv-header">
        {children}
    </header>
);

Header.RightWrapper = RightWrapper;
Header.LeftWrapper = LeftWrapper;
Header.AccountSetting = AccountSetting;
Header.Notification = Notification;
Header.AccountSwitcher = AccountSwitcher;
Header.Logo = DerivLogo;
Header.PlatformSwitcher = PlatformSwitcher;
Header.MenuItems = MenuItems;



Header.displayName = "Header";

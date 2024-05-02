import React from "react"
import { PlatformSwitcher } from "../PlatformSwitcher";
import { DerivLogo } from "../Logo";
import {MenuItems} from "../MenuItems"

export const RightWrapper = ({ children }: React.PropsWithChildren) => {
    return <div className="deriv-header__right">{children}</div>
}

RightWrapper.Logo = DerivLogo;
RightWrapper.PlatformSwitcher = PlatformSwitcher;
RightWrapper.MenuItems = MenuItems;


RightWrapper.displayName = "HeaderRightWrapper";
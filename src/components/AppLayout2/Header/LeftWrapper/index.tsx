import React from "react"
import { Notification } from "../Notification";
import { AccountSetting } from "../AccountSetting";
import { AccountSwitcher } from "../AccountSwitcher";

export const LeftWrapper = ({children}: React.PropsWithChildren)=>{
    return <>{children}</>
}

LeftWrapper.Notification = Notification;
LeftWrapper.AccountSetting = AccountSetting;
LeftWrapper.AccountSwitcher = AccountSwitcher;

LeftWrapper.displayName = "HeaderLeftWrapper";
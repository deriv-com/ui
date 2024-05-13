import { ComponentProps, PropsWithChildren } from "react";

import "./AccountSwitcherFooter.scss";
import clsx from "clsx";

export const AccountSwitcherFooter = ({
    children,
    className,
    ...rest
}: PropsWithChildren<ComponentProps<"div">>) => {
    return (
        <div className={clsx("deriv-account-switcher__footer", className)} {...rest}>
            {children}
        </div>
    );
};

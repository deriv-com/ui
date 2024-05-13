import { ComponentProps, PropsWithChildren } from "react";

export const AccountSwitcherFooter = ({
    children,
    ...rest
}: PropsWithChildren<ComponentProps<"div">>) => {
    return <div {...rest}>{children}</div>;
};

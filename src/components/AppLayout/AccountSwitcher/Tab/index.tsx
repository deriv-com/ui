import { ComponentProps, PropsWithChildren } from "react";
import { Tab } from "../../../Tabs";

type AccountSwitcherTabProps = PropsWithChildren<ComponentProps<typeof Tab>>;

export const AccountSwitcherTab = ({
    title,
    className,
    children,
}: AccountSwitcherTabProps) => {
    return (
        <Tab title={title} className={className}>
            {children}
        </Tab>
    );
};

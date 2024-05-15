import { Accordion } from "../../../Accordion";

import "./AccountsPanel.scss";
import { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";

type AccountsListProps = Omit<ComponentProps<"div">, "title"> & {
    title: string | JSX.Element;
    headerClassName?: string;
    isOpen?: boolean;
};

export const AccountsPanel = ({
    children,
    title,
    className,
    headerClassName,
    isOpen = false,
    ...rest
}: PropsWithChildren<AccountsListProps>) => {
    return (
        <Accordion
            defaultOpen={isOpen}
            className={clsx("deriv-account-switcher__list", className)}
            headerClassName={clsx(
                "deriv-account-switcher__title",
                headerClassName,
            )}
            title={title}
            {...rest}
        >
            {children}
        </Accordion>
    );
};

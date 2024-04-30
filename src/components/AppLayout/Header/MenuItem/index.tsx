import { ReactNode } from "react";
import clsx from "clsx";
import { Text } from "../../../Text";

import "./MenuItem.scss";

type TMenuItem = {
    href: HTMLAnchorElement["href"];
    className?: HTMLAnchorElement["className"];
    icon: ReactNode;
    label: string;
    isActive?: boolean;
};

export const MenuItem = ({
    href,
    className,
    label,
    isActive,
    icon,
}: TMenuItem) => (
    <a
        href={href}
        className={clsx(
            "deriv-menu-item",
            { "deriv-menu-item--active": isActive },
            className,
        )}
    >
        {icon}
        <Text
            size="md"
            weight={isActive ? "bold" : "normal"}
            className={clsx("deriv-menu-item__label")}
        >
            {label}
        </Text>
    </a>
);

MenuItem.displayName = "MenuItem";

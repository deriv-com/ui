import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { Text } from "../../../Text";

import "./MenuItem.scss";

type TMenuItem = ComponentProps<"a"> & {
    icon: ReactNode;
    label: string;
    active?: boolean;
};

export const MenuItem = ({
    href,
    className,
    label,
    active,
    icon,
    ...props
}: TMenuItem) => (
    <a
        href={href}
        className={clsx(
            "deriv-menu-item",
            { "deriv-menu-item--active": active },
            className,
        )}
        {...props}
    >
        {icon}
        <Text
            size="md"
            weight={active ? "bold" : "normal"}
            className={clsx("deriv-menu-item__label")}
        >
            {label}
        </Text>
    </a>
);

MenuItem.displayName = "MenuItem";

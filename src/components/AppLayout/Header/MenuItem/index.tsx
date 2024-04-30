import { IconTypes } from "@deriv/quill-icons";
import clsx from "clsx";
import { Text } from "../../../Text";

import "./MenuItem.scss";

type TMenuItem = {
    href: HTMLAnchorElement["href"];
    className?: HTMLAnchorElement["className"];
    Icon: IconTypes;
    iconSize: number;
    label: string;
    isActive?: boolean;
};

export const MenuItem = ({
    href,
    className,
    Icon,
    label,
    iconSize,
    isActive,
}: TMenuItem) => (
    <a
        href={href}
        className={clsx(
            "deriv-menu-item",
            { "deriv-menu-item--active": isActive },
            className,
        )}
    >
        <Icon width={iconSize} height={iconSize} />
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

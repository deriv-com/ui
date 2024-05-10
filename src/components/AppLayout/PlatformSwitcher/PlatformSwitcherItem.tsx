import { ComponentProps, ReactNode, JSX } from "react";
import clsx from "clsx";
import { Text } from "../../Text";
import "./PlatformSwitcher.scss";

type TPlatformSwitcherItem = ComponentProps<"a"> & {
    icon: ReactNode;
    active: boolean;
    description: JSX.Element | string;
};

export const PlatformSwitcherItem = ({
    icon,
    description,
    active,
    className,
    ...props
}: TPlatformSwitcherItem) => (
    <a
        className={clsx(
            "deriv-platform-switcher__item",
            {
                "deriv-platform-switcher__item--active": active,
            },
            className,
        )}
        {...props}
    >
        {icon}
        <Text
            className="deriv-platform-switcher__item-text"
            size="sm"
            as="p"
            color="general"
        >
            {description}
        </Text>
    </a>
);

PlatformSwitcherItem.displayName = "PlatformSwitcherItem";

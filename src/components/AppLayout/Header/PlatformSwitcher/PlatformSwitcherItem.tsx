import clsx from "clsx";
import { IconTypes } from "@deriv/quill-icons";
import { Text } from "../../../Text";

import "./PlatformSwitcher.scss";

type TPlatformSwitcherItem = {
    Icon: IconTypes;
    description: string;
    active: boolean;
    href: string;
};

export const PlatformSwitcherItem = ({
    Icon,
    description,
    active,
    href,
}: TPlatformSwitcherItem) => (
    <a
        href={href}
        className={clsx("deriv-platform-switcher-item", {
            "deriv-platform-switcher-item--active": active,
        })}
    >
        <Icon width={147.556} height={32} />
        <Text
            size="sm"
            as="p"
            color="general"
            className="deriv-platform-switcher-item__text"
        >
            {description}
        </Text>
    </a>
);

PlatformSwitcherItem.displayName = "PlatformSwitcherItem";

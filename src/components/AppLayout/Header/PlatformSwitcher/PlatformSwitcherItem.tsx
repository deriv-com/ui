import clsx from "clsx";
import { PlatformsConfig } from "./platformsConfig";
import { Text } from "../../../Text";
import "./PlatformSwitcher.scss";

export const PlatformSwitcherItem = ({
    icon,
    description,
    active,
    href,
}: Omit<PlatformsConfig, "buttonIcon" | "showInEU">) => (
    <a
        href={href}
        className={clsx("deriv-platform-switcher-item", {
            "deriv-platform-switcher-item--active": active,
        })}
    >
        {icon}
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

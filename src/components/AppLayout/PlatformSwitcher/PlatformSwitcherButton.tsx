import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { LegacyChevronDown2pxIcon } from "@deriv/quill-icons";
import "./PlatformSwitcher.scss";

type TPlatformSwitcherButton = ComponentProps<"button"> & {
    icon: ReactNode;
    isExpanded: boolean;
    chevronIconSize?: number;
    chevronIconClassName?: string;
};

export const PlatformSwitcherButton = ({
    icon,
    className,
    chevronIconSize = 16,
    chevronIconClassName,
    isExpanded,
    ...props
}: TPlatformSwitcherButton) => (
    <button
        className={clsx("deriv-platform-switcher__button", className)}
        {...props}
    >
        {icon}
        <LegacyChevronDown2pxIcon
            className={clsx(
                "deriv-platform-switcher__button-chevron",
                {
                    "deriv-platform-switcher__button-chevron__expanded":
                        isExpanded,
                },
                chevronIconClassName,
            )}
            width={chevronIconSize}
            height={chevronIconSize}
        />
    </button>
);

PlatformSwitcherButton.displayName = "PlatformSwitcherButton";

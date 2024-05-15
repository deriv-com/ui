import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { LegacyChevronDown2pxIcon } from "@deriv/quill-icons";
import "./PlatformSwitcher.scss";

type TPlatformSwitcherButton = ComponentProps<"button"> & {
    icon: ReactNode;
    isExpanded: boolean;
    iconSize?: number;
    iconClassName?: string;
};

/**
 * PlatformSwitcherButton component renders a button with an icon and a chevron that indicates expansion state.
 * @param {TPlatformSwitcherButton} props - The properties passed to the component.
 * @property {ReactNode} icon - The icon to be displayed inside the button.
 * @property {boolean} isExpanded - Flag to determine if the switcher is expanded.
 * @property {number} [iconSize=16] - Optional size for the chevron icon.
 * @property {string} [iconClassName] - Optional additional class names for the chevron icon.
 * @returns {JSX.Element} The PlatformSwitcherButton component.
 */
export const PlatformSwitcherButton = ({
    icon,
    className,
    iconSize = 16,
    iconClassName,
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
                iconClassName,
            )}
            width={iconSize}
            height={iconSize}
        />
    </button>
);

PlatformSwitcherButton.displayName = "PlatformSwitcherButton";

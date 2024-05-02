import { ComponentProps, ReactNode } from "react";
import { LegacyChevronDown2pxIcon } from "@deriv/quill-icons";
import "./PlatformSwitcher.scss";

type TPlatformSwitcherButton = Omit<ComponentProps<"button">, "className"> & {
    icon: ReactNode;
};

export const PlatformSwitcherButton = ({
    icon,
    ...props
}: TPlatformSwitcherButton) => (
    <button className="deriv-platform-switcher-button" {...props}>
        {icon}
        <LegacyChevronDown2pxIcon
            className="deriv-platform-switcher-button__chevron-icon"
            width={16}
            height={16}
        />
    </button>
);

PlatformSwitcherButton.displayName = "PlatformSwitcherButton";

import { ComponentProps } from "react";
import { LegacyChevronDown2pxIcon, IconTypes } from "@deriv/quill-icons";

import "./PlatformSwitcher.scss";

type TPlatformSwitcherButton = ComponentProps<"button"> & {
    Icon: IconTypes;
};

export const PlatformSwitcherButton = ({
    Icon,
    ...props
}: TPlatformSwitcherButton) => (
    <button className="deriv-platform-switcher-button" {...props}>
        <Icon width={110.67} height={24} />
        <LegacyChevronDown2pxIcon
            className="deriv-platform-switcher-button__chevron-icon"
            width={16}
            height={16}
        />
    </button>
);

PlatformSwitcherButton.displayName = "PlatformSwitcherButton";

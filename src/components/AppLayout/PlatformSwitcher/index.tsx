import {
    ComponentProps,
    PropsWithChildren,
    useRef,
    useState,
    JSX,
} from "react";
import { useOnClickOutside } from "usehooks-ts";
import { PlatformSwitcherButton } from "./PlatformSwitcherButton";
import { ContextMenu } from "../../ContextMenu";
import "./PlatformSwitcher.scss";

type TPlatformSwitcher = {
    buttonProps: Omit<
        ComponentProps<typeof PlatformSwitcherButton>,
        "isExpanded" | "onClick"
    >;
    bottomLink: ComponentProps<"a"> & { text: string | JSX.Element };
};

export const PlatformSwitcher = ({
    buttonProps,
    children,
    bottomLink,
}: PropsWithChildren<TPlatformSwitcher>) => {
    const [isExpanded, setExpanded] = useState(false);
    const ref = useRef(null);

    useOnClickOutside(ref, (e) => {
        e.stopPropagation();
        setExpanded(!isExpanded);
    });

    return (
        <div className="deriv-platform-switcher">
            <PlatformSwitcherButton
                isExpanded={isExpanded}
                onClick={(e) => {
                    if (!ref.current) {
                        e.stopPropagation();
                        setExpanded(!isExpanded);
                    }
                }}
                {...buttonProps}
            />
            {isExpanded && <div className="deriv-platform-switcher__overlay" />}
            <ContextMenu
                ref={ref}
                isOpen={isExpanded}
                className="deriv-platform-switcher__context-menu"
            >
                <div className="deriv-platform-switcher__context-menu__wrapper">
                    <div className="deriv-platform-switcher__context-menu__items">
                        {children}
                    </div>

                    {bottomLink && (
                        <div className="deriv-platform-switcher__context-menu__link">
                            <a {...bottomLink}>{bottomLink.text}</a>
                        </div>
                    )}
                </div>
            </ContextMenu>
        </div>
    );
};

PlatformSwitcher.displayName = "PlatformSwitcher";

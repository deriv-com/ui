import {
    ComponentProps,
    PropsWithChildren,
    useRef,
    useState,
    JSX,
} from "react";
import clsx from "clsx";
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

/**
 * PlatformSwitcher component manages a dropdown-like interface for switching between different platforms or sections.
 * It includes a button to trigger expansion of the menu and a context menu that renders its children as items.
 *
 * @param {PropsWithChildren<TPlatformSwitcher>} props - The properties passed to the component.
 * @property {Omit<ComponentProps<typeof PlatformSwitcherButton>, "isExpanded" | "onClick">} buttonProps - Properties to pass to the PlatformSwitcherButton component, excluding 'isExpanded' and 'onClick'.
 * @property {ComponentProps<"a"> & { text: string | JSX.Element }} bottomLink - Properties for the bottom link element, including text content which can be a string or JSX.
 * @returns {JSX.Element} The PlatformSwitcher component wrapped in a div with overlay and context menu.
 */
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
            <div
                className={clsx("deriv-platform-switcher__overlay", {
                    "deriv-platform-switcher__overlay-fadeout": !isExpanded,
                })}
            />
            <ContextMenu
                ref={ref}
                className="deriv-platform-switcher__context-menu"
                isOpen={isExpanded}
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

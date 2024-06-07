import { ReactNode, useState, ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import { LegacyChevronRight1pxIcon } from "@deriv/quill-icons";
import { Text } from "../../Text";
import "./Submenu.scss";

type TSubmenu = {
    icon: ReactNode;
    label: string;
    labelSize?: ComponentProps<typeof Text>["size"];
    submenuContent: ReactNode;
    submenuClassName?: ComponentProps<"div">["className"];
    className?: ComponentProps<"button">["className"];
};

/**
 * Represents a submenu component with expandable/collapsible functionality.
 * This component displays a button that, when clicked, toggles the visibility
 * of a submenu panel. The submenu can contain any ReactNode elements provided
 * through props and has customizable text and icon components.
 *
 * @component
 * @param {ReactNode} props.icon - The icon displayed in the button that toggles the submenu.
 * @param {string} props.label - The label text displayed next to the icon in the toggle button.
 * @param {string} [props.labelSize="md"] - The size of the label text, defaults to "md".
 * @param {ReactNode} props.submenuContent - The content displayed inside the submenu when it is open.
 * @param {string} [props.submenuClassName] - Optional custom class name for styling the submenu container.
 * @param {string} [props.className] - Optional custom class name for styling the toggle button.
 * @param {ReactNode} props.children - The children nodes provided to the submenu panel, which are displayed below the submenuContent.
 * @returns {JSX.Element} The rendered Submenu component with toggle functionality.
 */
export const Submenu = ({
    icon,
    label,
    labelSize = "md",
    className,
    children,
    submenuContent,
    submenuClassName,
}: PropsWithChildren<TSubmenu>) => {
    const [submenuOpen, SetSubmenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const onCloseSubmenu = () => {
        setIsClosing(true);

        setTimeout(() => {
            SetSubmenuOpen(false);
            setIsClosing(false);
        }, 500);
    };

    const onOpenSubmenu = () => SetSubmenuOpen(true);

    return (
        <>
            <button
                className={clsx("submenu_button", className)}
                onClick={onOpenSubmenu}
            >
                <span className="submenu_wrapper">
                    {icon}
                    <Text size={labelSize}>{label}</Text>
                </span>
                <LegacyChevronRight1pxIcon iconSize="xs" />
            </button>

            {submenuOpen && (
                <div
                    className={clsx(
                        "submenu",
                        { submenu_exit: isClosing },
                        submenuClassName,
                    )}
                >
                    <button onClick={onCloseSubmenu}>{submenuContent}</button>
                    {children}
                </div>
            )}
        </>
    );
};

Submenu.displayName = "Submenu";

import { ComponentProps, PropsWithChildren } from "react";
import { LegacyClose2pxIcon } from "@deriv/quill-icons";

import "./DrawerHeader.scss";
import clsx from "clsx";

type DrawerHeaderProps = ComponentProps<"div"> & {
    onCloseDrawer: () => void;
    wrapperClassName?: string;
};

/**
 * DrawerHeader component.
 * @param {VoidFunction} onCloseDrawer
 * @param {React.ReactNode} children - The children nodes to be rendered inside the header.
 * @param {string} className - Applies on the right side content wrapper of the Drawerheader.
 * @param {string} WrapperClassName - Applies on the header wrapper
 *
 * @returns {JSX.Element} - Returns the header element.
 */
export const DrawerHeader = ({
    onCloseDrawer,
    children,
    className,
    wrapperClassName,
    ...rest
}: PropsWithChildren<DrawerHeaderProps>) => {
    return (
        <div
            className={clsx("deriv-drawer__header", wrapperClassName)}
            {...rest}
        >
            <div
                role="drawer-close-button"
                className="deriv-drawer__header__close-btn"
                onClick={onCloseDrawer}
            >
                <LegacyClose2pxIcon iconSize="xs" />
            </div>
            <div className={clsx("deriv-drawer__header__content", className)}>
                {children}
            </div>
        </div>
    );
};

DrawerHeader.displayName = "DrawerHeader";

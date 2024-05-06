import { ComponentProps, PropsWithChildren } from "react";
import { LegacyClose2pxIcon } from "@deriv/quill-icons";

import "./DrawerHeader.scss";
import clsx from "clsx";

type DrawerHeaderProps = ComponentProps<"div"> & {
    onCloseDrawer: () => void;
};

export const DrawerHeader = ({
    onCloseDrawer,
    children,
    className,
    ...rest
}: PropsWithChildren<DrawerHeaderProps>) => {
    return (
        <div className={clsx("deriv-drawer__header", className)} {...rest}>
            <div
                className="deriv-drawer__header__close-btn"
                onClick={onCloseDrawer}
            >
                <LegacyClose2pxIcon iconSize="xs" />
            </div>
            <div className="deriv-drawer__header__content">{children}</div>
        </div>
    );
};

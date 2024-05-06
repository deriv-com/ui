import React, { ComponentProps, useEffect, useRef, useState } from "react";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerContent } from "./DrawerContent";
import { DrawerFooter } from "./DrawerFooter";

import "./Drawer.scss";
import clsx from "clsx";

type DrawerProps = ComponentProps<"div"> & {
    isOpen: boolean;
    onCloseDrawer: () => void;
    width?: string;
    overlayClassName?: string;
};

export const Drawer = ({
    isOpen,
    onCloseDrawer,
    width = "auto",
    children,
    className,
    overlayClassName,
    ...rest
}: React.PropsWithChildren<DrawerProps>) => {
    const [hide, setHide] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (isOpen) setHide(false);
        else {
            timerRef.current = setTimeout(() => {
                setHide(!isOpen);
            }, 400);
        }
        return () => {
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, [isOpen]);

    if (hide) return null;

    return (
        <>
            <div
                className={clsx(`deriv-drawer__overlay ${!isOpen ? "exit" : ""}`, overlayClassName)}
                onClick={(e) => {
                    e.stopPropagation();
                    onCloseDrawer();
                }}
            />
            <div
                className={clsx(`deriv-drawer__container ${!isOpen ? "exit" : ""}`, className )}
                style={{ width }}
                {...rest}
            >
                {children}
            </div>
        </>
    );
};

Drawer.Header = DrawerHeader;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;

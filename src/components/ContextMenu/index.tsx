import clsx from "clsx";
import "./ContextMenu.scss";
import { ComponentProps, PropsWithChildren, useEffect, useRef, useState } from "react";

type ContextMenuProps = ComponentProps<"div"> & {
    isOpen: boolean;
    onClickOutside?: () => void;
};

export const ContextMenu = ({
    children,
    className,
    isOpen,
    onClickOutside,
    ...rest
}: PropsWithChildren<ContextMenuProps>) => {
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
                data-testid="context-menu-overlay"
                className={clsx(
                    "deriv-context-menu__overlay",
                    !isOpen && "exit",
                )}
                onClick={(e) => {
                    e.stopPropagation();
                    onClickOutside?.();
                }}
            />
            <div
                className={clsx(
                    "deriv-context-menu",
                    !isOpen && "exit",
                    className,
                )}
                {...rest}
            >
                {children}
            </div>
        </>
    );
};

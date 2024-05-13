import clsx from "clsx";
import "./ContextMenu.scss";
import {
    ComponentProps,
    PropsWithChildren,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";

type ContextMenuProps = ComponentProps<"div"> & {
    isOpen: boolean;
};

export const ContextMenu = forwardRef<
    HTMLDivElement,
    PropsWithChildren<ContextMenuProps>
>(
    (
        {
            children,
            className,
            isOpen,
            ...rest
        }: PropsWithChildren<ContextMenuProps>,
        ref,
    ) => {
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
            <div
                ref={ref}
                className={clsx(
                    "deriv-context-menu",
                    !isOpen && "deriv-fadeout",
                    className,
                )}
                onClick={(e) => e.stopPropagation()}
                {...rest}
            >
                {children}
            </div>
        );
    },
);

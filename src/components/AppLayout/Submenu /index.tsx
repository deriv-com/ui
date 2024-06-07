import {
    useState,
    ComponentProps,
    PropsWithChildren,
    useRef,
    useEffect,
} from "react";
import clsx from "clsx";
import "./Submenu.scss";

type TSubmenu = ComponentProps<"div"> & {
    isOpen: boolean;
};

/**
 * `Submenu` is a component that renders a collapsible/expandable menu which supports an exit animation when closed.
 * The component will remain in the DOM just long enough to perform the exit animation before it is unmounted,
 * ensuring a smooth user experience. It utilizes the CSS class `submenu_exit` to apply styles for the exit animation.
 *
 * @component
 * @param {React.ReactNode} [props.children] - The content to be rendered inside the submenu. This is optional and can be any React node.
 * @param {string} [props.className] - Optional CSS class to be applied to the submenu container for additional styling.
 * @param {boolean} props.isOpen - A boolean flag to control the visibility of the submenu. When set to true, the submenu is open or visible. When set to false, the submenu will start the exit animation and then unmount.
 *
 * @returns {JSX.Element|null} The JSX code for the submenu if it is mounted; otherwise, null if it is not mounted.
 *
 * @example
 * // To use the Submenu component:
 * <Submenu isOpen={true} className="custom-submenu">
 *   <p>Menu Content Here</p>
 * </Submenu>
 *
 * @example
 * // To trigger an exit animation, change isOpen to false:
 * <Submenu isOpen={false} className="custom-submenu">
 *   <p>Menu Content Here</p>
 * </Submenu>
 */
export const Submenu = ({
    children,
    className,
    isOpen,
}: PropsWithChildren<TSubmenu>) => {
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [isMounted, setIsMounted] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(false);
        } else {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsMounted(false);
                setIsClosing(false);
            }, 400);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isOpen]);

    if (!isMounted) return null;
    return (
        <div
            className={clsx("submenu", { submenu_exit: isClosing }, className)}
        >
            {children}
        </div>
    );
};

Submenu.displayName = "Submenu";

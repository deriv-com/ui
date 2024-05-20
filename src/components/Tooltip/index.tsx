import {
    ComponentProps,
    MouseEventHandler,
    PropsWithChildren,
    useRef,
    useState,
} from "react";
import clsx from "clsx";
import { useOnClickOutside } from "usehooks-ts";
import "./Tooltip.scss";

type TTooltip = Omit<
    ComponentProps<"div">,
    "ref" | "onMouseEnter" | "onMouseLeave"
> & {
    message: string;
    position?: "top" | "bottom" | "left" | "right";
    triggerAction?: "hover" | "click";
    variant?: "general" | "dark" | "error";
    activeClassName?: HTMLDivElement["className"];
};

const TooltipVariantClass = {
    dark: "deriv-tooltip--dark",
    error: "deriv-tooltip--error",
    general: "deriv-tooltip--general",
} as const;

const TooltipPositionClass = {
    top: "deriv-top",
    bottom: "deriv-bottom",
    right: "deriv-right",
    left: "deriv-left",
} as const;

const TooltipArrowVariantClass = {
    dark: "deriv-arrow--dark",
    error: "deriv-arrow--error",
    general: "deriv-arrow--general",
} as const;

export const Tooltip = ({
    children,
    className,
    activeClassName,
    message,
    position = "top",
    triggerAction = "hover",
    variant = "general",
    onClick,
    ...rest
}: PropsWithChildren<TTooltip>) => {
    const [active, setActive] = useState(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        if (triggerAction === "hover") {
            setActive(true);
        }
    };

    const handleMouseLeave = () => {
        if (triggerAction === "hover") {
            setActive(false);
        }
    };

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (triggerAction === "click") {
            setActive(!active);
        }

        onClick?.(event);
    };

    const handleClickOutside = (
        event: MouseEvent | TouchEvent | FocusEvent,
    ) => {
        if (
            triggerAction === "click" &&
            active &&
            targetRef.current &&
            !targetRef.current.contains(event.target as Node)
        ) {
            setActive(false);
        }
    };

    useOnClickOutside(targetRef, (e) => handleClickOutside(e));

    return (
        <div
            ref={targetRef}
            className={clsx("deriv-tooltip-container", className)}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            {children}

            {active && (
                <div
                    className={clsx(
                        "deriv-tooltip",
                        TooltipPositionClass[position],
                        TooltipVariantClass[variant],
                        activeClassName,
                    )}
                >
                    <span
                        className={clsx(
                            "deriv-arrow",
                            TooltipArrowVariantClass[variant],
                        )}
                    ></span>
                    {message}
                </div>
            )}
        </div>
    );
};

import { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import "./Wrapper.scss";

type TWrapper = ComponentProps<"div"> & {
    variant: "left" | "right";
};

/**
 * A flexible wrapper component that can be aligned to the left or right.
 * @component
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child elements to be rendered inside the wrapper.
 * @param {string} [props.className] - Additional CSS classes to apply to the wrapper.
 * @param {"left" | "right"} props.variant - The variant of the wrapper, either "left" or "right".
 * @param {ComponentProps<"div">} rest - Additional props to be spread onto the wrapper.
 * @returns {ReactNode} The rendered component.
 */
export const Wrapper = ({
    children,
    className,
    variant,
    ...rest
}: PropsWithChildren<TWrapper>) => {
    const [left, right] = [variant == "left", variant == "right"];

    return (
        <div
            className={clsx(
                "deriv-wrapper",
                { "deriv-wrapper__left": left },
                { "deriv-wrapper__right": right },
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

/**
 * The display name for the Wrapper component.
 * @type {string}
 */
Wrapper.displayName = "Wrapper";

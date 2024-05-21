import {
    ComponentProps,
    ElementType,
    PropsWithChildren,
    ReactNode,
} from "react";
import clsx from "clsx";
import "./MenuItem.scss";

type AsElement = "a" | "button";

type TMenuItem<T extends AsElement> = ComponentProps<T> & {
    as: T;
    leftComponent?: ReactNode;
    rightComponent?: ReactNode;
    disableHover?: boolean;
    active?: boolean;
};

/**
 * MenuItem component that can render as either an anchor or a button element, with optional left and right components.
 * The component uses the `as` prop to determine which HTML element to render.
 * It supports additional HTML attributes which are spread into the resulting element.
 * @param {'a' | 'button'} as - Determines the element type ('a' or 'button').
 * @param {ReactNode} leftComponent - Optional component rendered on the left side of the MenuItem.
 * @param {ReactNode} children - The main content of the MenuItem.
 * @param {ReactNode} rightComponent - Optional component rendered on the right side of the MenuItem.
 * @param {boolean} disableHover - If set to true, no hover effects are applied.
 * @param {boolean} active - If set to true, the 'active' styling is applied.
 * @param {string} className - Additional className for custom styling.
 * @param {Object} otherProps - Spread into the element as additional HTML attributes.
 * @returns {React.ReactElement} A React Element of type 'a' or 'button' based on the 'as' prop.
 */
export const MenuItem = <T extends AsElement>({
    as,
    leftComponent,
    children,
    rightComponent,
    disableHover,
    active,
    className,
    ...props
}: PropsWithChildren<TMenuItem<T>>) => {
    const Tag = as as ElementType;

    return (
        <Tag
            className={clsx(
                "deriv-menu-item",
                { "deriv-menu-item--active": active || disableHover },
                className,
            )}
            {...props}
        >
            {leftComponent}
            {children}
            {rightComponent}
        </Tag>
    );
};

MenuItem.displayName = "MenuItem";

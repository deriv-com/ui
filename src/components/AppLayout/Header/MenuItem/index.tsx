import {
    ComponentProps,
    ElementType,
    PropsWithChildren,
    ReactNode,
} from "react";
import clsx from "clsx";
import "./MenuItem.scss";

/**
 * Type definition for MenuItem props.
 * @typedef TMenuItem
 * @property {'a' | 'button'} as - The element type to render, 'a' for anchor or 'button' for button.
 * @property {ReactNode} leftComponent - Optional component to display on the left side.
 * @property {ReactNode} rightComponent - Optional component to display on the right side.
 * @property {boolean} disableHover - If true, disables hover effects.
 * @property {boolean} active - If true, applies an active state style.
 */
interface TMenuItem extends ComponentProps<ElementType> {
    as?: "a" | "button";
    leftComponent?: ReactNode;
    rightComponent?: ReactNode;
    disableHover?: boolean;
    active?: boolean;
}

/**
 * MenuItem component that can render as either an anchor or a button element, with optional left and right components.
 * The component uses the `as` prop to determine which HTML element to render.
 * It supports additional HTML attributes which are spread into the resulting element.
 *
 * @param {PropsWithChildren<TMenuItem>} props - The props object for the MenuItem component.
 * @param {'a' | 'button'} props.as - Determines the element type ('a' or 'button').
 * @param {ReactNode} props.leftComponent - Optional component rendered on the left side of the MenuItem.
 * @param {ReactNode} props.children - The main content of the MenuItem.
 * @param {ReactNode} props.rightComponent - Optional component rendered on the right side of the MenuItem.
 * @param {boolean} props.disableHover - If set to true, no hover effects are applied.
 * @param {boolean} props.active - If set to true, the 'active' styling is applied.
 * @param {string} props.className - Additional className for custom styling.
 * @param {Object} props.otherProps - Spread into the element as additional HTML attributes.
 * @returns {React.ReactElement} A React Element of type 'a' or 'button' based on the 'as' prop.
 */
export const MenuItem = ({
    as = "a",
    leftComponent,
    children,
    rightComponent,
    disableHover,
    active,
    className,
    ...props
}: PropsWithChildren<TMenuItem>) => {
    const Tag = as;

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

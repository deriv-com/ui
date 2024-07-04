import React, {
    ComponentProps,
    ElementType,
    ReactNode,
    useRef,
    useState,
} from "react";
import { Placement } from "@popperjs/core";
import { usePopper } from "react-popper";
import clsx from "clsx";
import "./Tooltip.scss";

type AsElement = "a" | "div" | "button";
type TooltipVariantType = "error" | "general";
export type TooltipProps<T extends AsElement> = ComponentProps<T> & {
    as: T;
    children: ReactNode;
    tooltipContainerClassName?: string;
    tooltipContent: ReactNode;
    tooltipPosition?: Placement;
    variant?: "general" | "error";
};

const TooltipVariantClass: Record<TooltipVariantType, string> = {
    error: "deriv-tooltip--error",
    general: "deriv-tooltip--general",
};

/**
 * A component that renders an icon, a link, or a div with a tooltip.
 *
 * @param {"a" | "div" | "button"} as - The HTML element or React component to render, which can be "a", "div", or "button".
 * @param {string} tooltipContent - The content to display inside the tooltip.
 * @param {import("@popperjs/core").Placement} tooltipPosition - The position of the tooltip relative to the element, using the Placement type from Popper.js.
 * @param {string} tooltipColor - The background color of the tooltip. Defaults to '#D6DADB'.
 * @param {string} [href] - The URL the link points to. Required and applicable only when `as` is "a".
 * @param {React.ReactNode} [icon] - The icon to display. This can be any React node.
 * @param {ComponentProps<"a" | "div" | "button">} ...rest - Component props based on the `as` property.
 *
 * @example
 * // To render a button with a tooltip
 * <YourComponent as="button" tooltipContent="Save" tooltipPosition="bottom">
 *   Save
 * </YourComponent>
 *
 * @example
 * // To render a link with a tooltip and an icon
 * <YourComponent as="a" href="https://example.com" tooltipContent="Go to Example" tooltipPosition="right" icon={<YourIcon />}>
 *   Visit Example.com
 * </YourComponent>
 *
 * @returns {JSX.Element} The rendered component.
 */
export const Tooltip = <T extends AsElement>({
    as,
    children,
    tooltipContainerClassName,
    tooltipContent,
    tooltipPosition = "auto",
    variant = "general",
    ...rest
}: TooltipProps<T>) => {
    const referenceElement = useRef<HTMLElement | null>(null);
    const popperElement = useRef<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null,
    );

    const { styles, attributes } = usePopper(
        referenceElement.current,
        popperElement.current,
        {
            placement: tooltipPosition,
            modifiers: [
                { name: "arrow", options: { element: arrowElement } },
                { name: "offset", options: { offset: [0, 8] } },
            ],
        },
    );

    const [showTooltip, setShowTooltip] = useState(false);
    const onMouseEnter = () => setShowTooltip(true);
    const onMouseLeave = () => setShowTooltip(false);

    const Tag = as as ElementType;

    return (
        <>
            <Tag
                ref={referenceElement}
                className={clsx("deriv-tooltip__trigger", rest.className)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                {children}
            </Tag>
            {showTooltip && (
                <div
                    className={clsx(
                        "deriv-tooltip",
                        TooltipVariantClass[variant],
                        tooltipContainerClassName,
                    )}
                    ref={popperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {tooltipContent}
                    <div
                        className="deriv-tooltip__arrow"
                        data-popper-arrow
                        ref={setArrowElement}
                        style={styles.arrow}
                    />
                </div>
            )}
        </>
    );
};

Tooltip.displayName = "Tooltip";

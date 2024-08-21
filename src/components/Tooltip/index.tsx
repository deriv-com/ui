import React, {
    ComponentProps,
    ElementType,
    forwardRef,
    PropsWithChildren,
    ReactNode,
    useImperativeHandle,
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
    as?: T;
    tooltipContainerClassName?: string;
    tooltipContent: ReactNode;
    tooltipOffset?: number;
    tooltipPosition?: Placement;
    variant?: "general" | "error";
    hideTooltip?: boolean;
};

const TooltipVariantClass: Record<TooltipVariantType, string> = {
    error: "deriv-tooltip--error",
    general: "deriv-tooltip--general",
};

/**
 * A component that renders an icon, a link, or a div with a tooltip.
 *
 * @param {"a" | "div" | "button"} as - The HTML element or React component to render, which can be "a", "div", or "button".
 * @param {ComponentProps<"a" | "div" | "button">} ...rest - Component props based on the `as` property.
 * @param {import("@popperjs/core").Placement} tooltipPosition - The position of the tooltip relative to the element, using the Placement type from Popper.js.
 * @param {number} tooltipOffset - The distance between the tooltip and the content.
 * @param {React.ReactNode} [icon] - The icon to display. This can be any React node.
 * @param {string} [href] - The URL the link points to. Required and applicable only when `as` is "a".
 * @param {string} tooltipContent - The content to display inside the tooltip.
 * @param {string} [tooltipContainerClassName] - Optional class name for the tooltip container.
 * @param {TooltipVariantType} [variant="general"] - The variant of the tooltip, which can be "general" or "error".
 * @param {boolean} [hideTooltip=false] - If true, the tooltip will not be displayed.
 *
 * @example
 * // To render a button with a tooltip
 * <Tooltip as="button" tooltipContent="Save" tooltipPosition="bottom">
 *   Save
 * </Tooltip>
 *
 * @example
 * // To render a link with a tooltip and an icon
 * <Tooltip as="a" href="https://example.com" tooltipContent="Go to Example" tooltipPosition="right" icon={<YourIcon />}>
 *   Visit Example.com
 * </Tooltip>
 *
 * @returns {JSX.Element} The rendered component.
 */

export const Tooltip = forwardRef<
    HTMLElement | null,
    PropsWithChildren<TooltipProps<AsElement>>
>(
    (
        {
            as = "div",
            children,
            hideTooltip = false,
            tooltipContainerClassName,
            tooltipContent,
            tooltipOffset = 8,
            tooltipPosition = "top",
            variant = "general",
            ...rest
        },
        ref,
    ) => {
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
                strategy: "fixed",
                modifiers: [
                    { name: "arrow", options: { element: arrowElement } },
                    {
                        name: "offset",
                        options: { offset: [0, tooltipOffset] },
                    },
                    { name: "hide", enabled: hideTooltip },
                ],
            },
        );

        const [showTooltip, setShowTooltip] = useState(false);
        const onMouseEnter = () => setShowTooltip(true);
        const onMouseLeave = () => setShowTooltip(false);

        useImperativeHandle(ref, () => referenceElement.current as HTMLElement);

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
    },
);

Tooltip.displayName = "Tooltip";

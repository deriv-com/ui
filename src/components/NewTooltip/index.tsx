import React, { ComponentProps, ElementType, ReactNode, useState } from "react";
import { usePopper } from "react-popper";
import { Placement } from "@popperjs/core";
import clsx from "clsx";
import "./NewTooltip.scss";

type AsElement = "a" | "div" | "button";
type NewTooltipProps<T extends AsElement> = ComponentProps<T> & {
    as: T;
    children: ReactNode;
    tooltipContainerClassName?: string;
    tooltipContent: ReactNode;
    tooltipPosition: Placement;
};

/**
 * A component that renders an icon | a link | a div with a tooltip.
 * @param {"a" | "div" | "button"} as - The HTML element or React component to render which can be "a" | "div" | "button".
 * @param {string} tooltipContent - The content to display inside the tooltip.
 * @param {"top" | "bottom" | "left" | "right"} tooltipPosition - The position of the tooltip relative to the element.
 * @param {string} tooltipColor - The background color of the tooltip. Defaults to '#D6DADB'.
 * @param {ComponentProps<"a" | "div" | "button">} ...rest - component props base on the as property.
 * @returns {JSX.Element} The rendered component.
 */
export const NewTooltip = <T extends AsElement>({
    as,
    children,
    tooltipContainerClassName,
    tooltipContent,
    tooltipPosition,
    ...rest
}: NewTooltipProps<T>) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null,
    );
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(
        null,
    );

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: tooltipPosition,
        modifiers: [
            { name: "arrow", options: { element: arrowElement } },
            { name: "offset", options: { offset: [0, 8] } },
        ],
    });

    const [showTooltip, setShowTooltip] = useState(false);
    const onMouseEnter = () => setShowTooltip(true);
    const onMouseLeave = () => setShowTooltip(false);

    const Tag = as as ElementType;

    return (
        <>
            <Tag
                ref={setReferenceElement}
                className={clsx("deriv-tooltip-v2__trigger", rest.className)}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                {children}
            </Tag>
            {showTooltip && (
                <div
                    className={clsx(
                        "deriv-tooltip-v2",
                        tooltipContainerClassName,
                    )}
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    {tooltipContent}
                    <div
                        className="deriv-tooltip-v2__arrow"
                        data-popper-arrow
                        ref={setArrowElement}
                        style={styles.arrow}
                    />
                </div>
            )}
        </>
    );
};

NewTooltip.displayName = "NewTooltip";

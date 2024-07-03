import React, { ElementType, ReactNode, useState } from "react";
import { usePopper } from "react-popper";
import clsx from "clsx";
import "./NewTooltip.scss";
import { Placement } from "@popperjs/core";

type NewTooltipProps = {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    tooltipContent: ReactNode;
    tooltipPosition: Placement;
};

export const NewTooltip = ({
    as,
    children,
    className,
    tooltipContent,
    tooltipPosition,
}: NewTooltipProps) => {
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
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {children}
            </Tag>
            {showTooltip && (
                <div
                    className={clsx("deriv-tooltip-v2", className)}
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

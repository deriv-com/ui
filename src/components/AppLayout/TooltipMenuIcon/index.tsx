import {
    ComponentProps,
    ElementType,
    PropsWithChildren,
    useState,
} from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import clsx from "clsx";
import "./TooltipMenuIcon.scss";

type AsElement = "a" | "div" | "button";
type TTooltipMenuIcon<T extends AsElement> = ComponentProps<T> & {
    as: T;
    tooltipContent: string | JSX.Element;
    tooltipPosition?: "top" | "bottom" | "left" | "right";
    tooltipColor?: string;
    disableHover?: boolean;
    tooltipContainerClassName?: string;
};

/**
 * A component that renders an icon | a link | a div with a tooltip.
 * @param {"a" | "div" | "button"} as - The HTML element or React component to render which can be "a" | "div" | "button".
 * @param {string} tooltipContent - The content to display inside the tooltip.
 * @param {"top" | "bottom" | "left" | "right"} tooltipPosition - The position of the tooltip relative to the element.
 * @param {string} tooltipColor - The background color of the tooltip. Defaults to '#D6DADB'.
 * @param {boolean} disableHover - Whether to disable the hover effect that triggers the children. Defaults to false.
 * @param {ComponentProps<"a" | "div" | "button">} ...rest - component props base on the as property.
 * @returns {JSX.Element} The rendered component.
 */
export const TooltipMenuIcon = <T extends AsElement>({
    as,
    tooltipContent,
    tooltipPosition,
    tooltipColor = "#D6DADB",
    disableHover = false,
    children,
    className,
    tooltipClassName,
    ...rest
}: PropsWithChildren<TTooltipMenuIcon<T>>) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const onMouseEnter = () => setShowTooltip(true);
    const onMouseLeave = () => setShowTooltip(false);

    const Tag = as as ElementType;

    return (
        <Popover
            isOpen={showTooltip}
            positions={tooltipPosition}
            padding={4}
            containerClassName={tooltipClassName}
            content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                    position={position}
                    childRect={childRect}
                    popoverRect={popoverRect}
                    arrowColor={tooltipColor}
                    arrowSize={4}
                >
                    <div
                        style={{ backgroundColor: tooltipColor }}
                        className="tooltip-content"
                    >
                        {tooltipContent}
                    </div>
                </ArrowContainer>
            )}
        >
            <Tag
                className={clsx(
                    { "tooltip-menu-icon": !disableHover },
                    className,
                )}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
            >
                {children}
            </Tag>
        </Popover>
    );
};

TooltipMenuIcon.displayName = "TooltipMenuIcon";

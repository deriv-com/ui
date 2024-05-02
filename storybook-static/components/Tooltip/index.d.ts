import React, { ReactNode } from '../../../node_modules/react';
import "./Tooltip.scss";
type TooltipPositionType = "top" | "bottom" | "left" | "right";
type TooltipTriggerActionType = "hover" | "click";
type TooltipVariantType = "general" | "dark" | "error";
type TooltipProps = {
    children?: ReactNode;
    className?: string;
    message: ReactNode;
    position?: TooltipPositionType;
    triggerAction?: TooltipTriggerActionType;
    variant?: TooltipVariantType;
};
export declare const Tooltip: ({ children, className, message, position, triggerAction, variant, }: TooltipProps) => React.JSX.Element;
export {};

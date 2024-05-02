import React, { ReactNode } from '../../../node_modules/react';
import "./InlineMessage.scss";
type TVariant = "warning" | "info" | "success" | "error" | "general";
type InlineMessageProps = {
    children: ReactNode;
    className?: string;
    icon?: JSX.Element;
    iconPosition?: "top" | "center" | "bottom";
    variant?: TVariant;
    type?: "outlined" | "filled";
};
export declare const InlineMessage: ({ icon, iconPosition, children, className, variant, type, }: InlineMessageProps) => React.JSX.Element;
export {};

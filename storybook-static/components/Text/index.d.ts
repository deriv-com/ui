import React, { CSSProperties, ComponentProps, ElementType, ReactNode } from '../../../node_modules/react';
import "./Text.scss";
type TextColors = "prominent" | "less-prominent" | "general" | "primary" | "success" | "warning" | "error" | "red" | "blue" | "green" | "white";
type TGenericSizes = "2xl" | "2xs" | "3xl" | "3xs" | "4xl" | "5xl" | "6xl" | "lg" | "md" | "sm" | "xl" | "xs";
export interface TextProps extends ComponentProps<ElementType> {
    align?: CSSProperties["textAlign"];
    as?: ElementType;
    children: ReactNode;
    color?: TextColors;
    fontStyle?: CSSProperties["fontStyle"];
    lineHeight?: TGenericSizes;
    size?: Exclude<TGenericSizes, "3xs" | "6xl" | "7xl">;
    weight?: Exclude<CSSProperties["fontWeight"], "bolder" | "lighter">;
    className?: string;
}
export declare const Text: ({ align, as, children, color, fontStyle, lineHeight, size, weight, className, ...rest }: TextProps) => React.JSX.Element;
export {};

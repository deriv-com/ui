import React, { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";
import "./Text.scss";

type TextColors =
    | "prominent"
    | "less-prominent"
    | "general"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "red"
    | "blue"
    | "green";

type TGenericSizes =
    | "2xl"
    | "2xs"
    | "3xl"
    | "3xs"
    | "4xl"
    | "5xl"
    | "6xl"
    | "lg"
    | "md"
    | "sm"
    | "xl"
    | "xs";

export interface TextProps {
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

export const Text = ({
    align = "left",
    as = "span",
    children,
    color = "general",
    fontStyle = "normal",
    lineHeight,
    size = "md",
    weight = "normal",
    className,
}: TextProps) => {
    const textClassNames = clsx(
        "deriv-text",
        `derivs-text__size--${size}`,
        `derivs-text__weight--${weight}`,
        `derivs-text__align--${align}`,
        `derivs-text__color--${color}`,
        `derivs-text__line-height--${lineHeight}`,
        `derivs-text__font-style--${fontStyle}`,
        className,
    );

    const Tag = as;

    return <Tag className={textClassNames}>{children}</Tag>;
};

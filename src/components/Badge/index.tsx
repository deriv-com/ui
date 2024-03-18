import { ComponentProps, ReactElement, ReactNode } from "react";
import clsx from "clsx";
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import "./Badge.scss";

type TVariant = "contained" | "bordered";
type TColor =
    | "blue"
    | "light-blue"
    | "general"
    | "purple"
    | "success"
    | "warning"
    | "danger"
    | "gold"
    | "green"
type TPadding = "tight" | "loose";

interface BadgeProps extends ComponentProps<"div"> {
    children?: ReactNode;
    color?: TColor;
    isBold: boolean;
    rightIcon?: ReactElement;
    leftIcon?: ReactElement;
    padding?: TPadding;
    badgeSize?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    textSize?: ComponentProps<typeof Text>["size"];
    variant?: TVariant;
}

const BadgeVariants = {
    contained: "deriv-badge__variant--contained",
    bordered: "deriv-badge__variant--bordered",
} as const;

const PaddingVariants = {
    tight: "deriv-badge__size--tight",
    loose: "deriv-badge__size--loose",
} as const;

const BadgeColor = {
    blue: "deriv-badge__color--blue",
    "light-blue": "deriv-badge__color--lightblue",
    general: "deriv-badge__color--general",
    purple: "deriv-badge__color--purple",
    success: "deriv-badge__color--success",
    warning: "deriv-badge__color--warning",
    danger: "deriv-badge__color--danger",
    gold: "deriv-badge__color--gold",
    green: "deriv-badge__color--green",
} as const;

const BadgeSize = {
    lg: "deriv-badge__size--lg",
    md: "deriv-badge__size--md",
    sm: "deriv-badge__size--sm",
    xs: "deriv-badge__size--xs",
} as const;

const FontSize = {
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs",
} as const;

export const Badge = ({
    children,
    className,
    color = "general",
    isBold = true,
    leftIcon,
    padding = "tight",
    rightIcon,
    badgeSize = "md",
    textSize,
    variant = "contained",
    ...rest
}: BadgeProps) => {
    return (
        <>
            <div
                className={clsx(
                    "deriv-badge",
                    BadgeVariants[variant],
                    BadgeColor[color],
                    PaddingVariants[padding],
                    BadgeSize[badgeSize],
                    {
                        "deriv-badge__variant--bold-text": isBold,
                    },
                    className,
                )}
                {...rest}
            >
                {leftIcon}
                {children && (
                    <Text
                        align="center"
                        size={textSize ?? FontSize[badgeSize]}
                        weight={isBold ? "bold" : "normal"}
                        as="span"
                    >
                        {children}
                    </Text>
                )}
                {rightIcon}
            </div>
        </>
    );
};

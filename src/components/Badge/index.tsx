import { ComponentProps, ReactElement, ReactNode,forwardRef } from "react";
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
    badgeSize?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    children: ReactNode;
    color?: TColor;
    isBold?: boolean;
    rightIcon?: ReactElement;
    leftIcon?: ReactElement;
    padding?: TPadding;
    rounded?: Extract<TGenericSizes, "lg" | "md" | "sm" | "bd">;
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
    lg: "deriv-badge__padding--lg",
    md: "deriv-badge__padding--md",
    sm: "deriv-badge__padding--sm",
    xs: "deriv-badge__padding--xs",
} as const;

const BadgeRounded = {
    lg: "deriv-badge__rounded--lg",
    md: "deriv-badge__rounded--md",
    sm: "deriv-badge__rounded--sm",
    bd: "deriv-badge__rounded--bd",
} as const;

const FontSize = {
    lg: "lg",
    md: "md",
    sm: "sm",
    xs: "xs",
} as const;

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
    children,
    className,
    color = "general",
    isBold = false,
    leftIcon,
    padding = "tight",
    rightIcon,
    rounded = "sm",
    badgeSize = "md",
    textSize,
    variant = "contained",
    ...rest
}: BadgeProps,ref) => {
    return (
        <>
            <div
              ref={ref}
                className={clsx(
                    "deriv-badge",
                    BadgeVariants[variant],
                    BadgeColor[color],
                    PaddingVariants[padding],
                    BadgeSize[badgeSize],
                    BadgeRounded[rounded],
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
});

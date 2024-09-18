import {
    ComponentProps,
    ReactElement,
    ReactNode,
    forwardRef,
    isValidElement,
} from "react";
import clsx from "clsx";
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import "./Badge.scss";

type TVariant = "contained" | "bordered";
type TColor =
    | "blue"
    | "blue-secondary"
    | "light-blue"
    | "general"
    | "purple"
    | "success"
    | "success-secondary"
    | "warning"
    | "warning-secondary"
    | "danger"
    | "danger-secondary"
    | "gold"
    | "green";
type TPadding = "tight" | "loose";

interface BadgeProps extends ComponentProps<"div"> {
    badgeSize?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    children: ReactNode;
    color?: TColor;
    isBold?: boolean;
    rightIcon?: ReactElement;
    leftIcon?: ReactElement;
    padding?: TPadding;
    rounded?: Extract<TGenericSizes, "lg" | "md" | "sm">;
    textSize?: ComponentProps<typeof Text>["size"];
    variant?: TVariant;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    (
        {
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
        }: BadgeProps,
        ref,
    ) => {
        const isText =
            typeof children === "string" ||
            (isValidElement(children) &&
                typeof children?.props?.i18n_default_text === "string");

        return (
            <div
                ref={ref}
                className={clsx(
                    "deriv-badge",
                    `deriv-badge__variant--${variant}`,
                    `deriv-badge__size--${padding}`,
                    `deriv-badge__color--${color}`,
                    `deriv-badge__padding--${badgeSize}`,
                    `deriv-badge__rounded--${rounded}`,
                    {
                        "deriv-badge__variant--bold-text": isBold,
                    },
                    className,
                )}
                {...rest}
            >
                {leftIcon}
                {(children || isText) &&
                    (isText ? (
                        <Text
                            align="center"
                            size={textSize ?? badgeSize}
                            weight={isBold ? "bold" : "normal"}
                            as="span"
                        >
                            {children}
                        </Text>
                    ) : (
                        children
                    ))}
                {rightIcon}
            </div>
        );
    },
);

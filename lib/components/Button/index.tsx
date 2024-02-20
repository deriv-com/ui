import { ComponentProps, ReactElement } from "react";
import clsx from "clsx";
import { TGenericSizes } from "../../types";
import { Loader } from "../Loader";
import { Text } from "../Text";
import "./Button.scss";

type TVariant = "contained" | "ghost" | "outlined";
type TColor = "black" | "primary-light" | "primary" | "white";

interface ButtonProps extends ComponentProps<"button"> {
  color?: TColor;
  icon?: ReactElement;
  isFullWidth?: boolean;
  isLoading?: boolean;
  rounded?: Extract<TGenericSizes, "md" | "sm">;
  size?: Extract<TGenericSizes, "lg" | "md" | "sm">;
  textSize?: ComponentProps<typeof Text>["size"];
  variant?: TVariant;
}

const ButtonVariants = {
  contained: "deriv-button__variant--contained",
  ghost: "deriv-button__variant--ghost",
  outlined: "deriv-button__variant--outlined",
} as const;

const ButtonSize = {
  lg: "deriv-button__size--lg",
  md: "deriv-button__size--md",
  sm: "deriv-button__size--sm",
} as const;

const ButtonRounded = {
  lg: "deriv-button__rounded--lg",
  md: "deriv-button__rounded--md",
  sm: "deriv-button__rounded--sm",
} as const;

const ButtonColor = {
  black: "deriv-button__color--black",
  primary: "deriv-button__color--primary",
  "primary-light": "deriv-button__color--primary-light",
  white: "deriv-button__color--white",
} as const;

const FontColor = {
  contained: {
    black: "white",
    primary: "white",
    "primary-light": "error",
    white: "general",
  },
  ghost: {
    black: "error",
    primary: "error",
    "primary-light": "error",
    white: "error",
  },
  outlined: {
    black: "general",
    primary: "general",
    "primary-light": "general",
    white: "general",
  },
} as const;

const LoaderColor = {
  black: "#333333",
  primary: "#FFFFFF",
  "primary-light": "#EC3F3F",
  white: "#85ACB0",
} as const;

const FontSize = {
  lg: "md",
  md: "sm",
  sm: "xs",
} as const;

export const Button = ({
  children,
  color = "primary",
  icon,
  isFullWidth = false,
  isLoading = false,
  rounded = "sm",
  size = "md",
  textSize,
  variant = "contained",
  className,
  ...rest
}: ButtonProps) => {
  const isContained = variant === "contained";
  return (
    <button
      {...rest}
      className={clsx(
        "deriv-button",
        ButtonSize[size],
        ButtonVariants[variant],
        ButtonRounded[rounded],
        {
          [ButtonColor[color]]: isContained,
          "deriv-button__full-width": isFullWidth,
        },
        className
      )}
      disabled={rest.disabled || isLoading}
    >
      {isLoading && (
        <div className="deriv-button__loader">
          <Loader
            color={isContained ? LoaderColor[color] : "#85ACB0"}
            isFullScreen={false}
          />
        </div>
      )}
      {icon && !isLoading && icon}
      {children && !isLoading && (
        <Text
          align="center"
          color={FontColor[variant][color]}
          size={textSize ?? FontSize[size]}
          weight="bold"
        >
          {children}
        </Text>
      )}
    </button>
  );
};

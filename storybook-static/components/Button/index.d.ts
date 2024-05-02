import { ComponentProps, ReactElement } from '../../../node_modules/react';
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import "./Button.scss";
type TVariant = "contained" | "ghost" | "outlined";
type TColor = "black" | "primary-light" | "primary" | "white";
interface ButtonProps extends ComponentProps<"button"> {
    color?: TColor;
    icon?: ReactElement;
    isFullWidth?: boolean;
    isLoading?: boolean;
    rounded?: Extract<TGenericSizes, "lg" | "md" | "sm">;
    size?: Extract<TGenericSizes, "lg" | "md" | "sm">;
    hideHoverStyles?: boolean;
    textSize?: ComponentProps<typeof Text>["size"];
    variant?: TVariant;
}
export declare const Button: ({ className, color, icon, isFullWidth, isLoading, rounded, size, hideHoverStyles, textSize, variant, ...rest }: ButtonProps) => import('../../../node_modules/react').JSX.Element;
export {};

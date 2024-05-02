import { ComponentProps, ReactElement, ReactNode } from '../../../node_modules/react';
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import "./Badge.scss";
type TVariant = "contained" | "bordered";
type TColor = "blue" | "light-blue" | "general" | "purple" | "success" | "warning" | "danger" | "gold" | "green";
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
export declare const Badge: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<BadgeProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};

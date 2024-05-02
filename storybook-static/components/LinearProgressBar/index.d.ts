import React, { ComponentProps } from '../../../node_modules/react';
import { TGenericSizes } from "../../types";
import "./LinearProgressBar.scss";
type TLinearProgressProps = ComponentProps<"div"> & {
    danger_limit: number;
    is_loading: boolean;
    label: React.ReactNode;
    percentage: number;
    labelSize?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    warning_limit: number;
};
export declare const LinearProgressBar: ({ danger_limit, is_loading, label, percentage, labelSize, warning_limit, ...rest }: TLinearProgressProps) => React.JSX.Element;
export {};

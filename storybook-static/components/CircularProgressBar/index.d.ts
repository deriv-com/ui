import React, { ReactNode } from '../../../node_modules/react';
import "./CircularProgressBar.scss";
type TCircularProgressProps = {
    children?: ReactNode;
    className?: string;
    danger_limit?: number;
    is_clockwise?: boolean;
    progress?: number;
    radius?: number;
    stroke?: number;
    warning_limit?: number;
    icon?: ReactNode;
};
export declare const CircularProgressBar: ({ children, className, danger_limit, is_clockwise, progress, radius, stroke, warning_limit, }: TCircularProgressProps) => React.JSX.Element;
export {};

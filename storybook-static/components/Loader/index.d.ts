import React from '../../../node_modules/react';
import "./Loader.scss";
type TProps = {
    color?: React.CSSProperties["color"];
    isFullScreen?: boolean;
    className?: string;
};
export declare const Loader: ({ color, isFullScreen, className, }: TProps) => React.JSX.Element;
export {};

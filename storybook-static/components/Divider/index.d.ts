import { CSSProperties } from '../../../node_modules/react';
type DividerProps = {
    color?: string;
    margin?: CSSProperties["margin"];
    height?: CSSProperties["height"];
    className?: HTMLDivElement["className"];
};
export declare const Divider: ({ color, height, margin, className, }: DividerProps) => import('../../../node_modules/react').JSX.Element;
export {};

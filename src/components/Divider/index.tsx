import { CSSProperties } from "react";

type DividerProps = {
    color?: string;
    margin?: CSSProperties["margin"];
    height?: CSSProperties["height"];
    className?: HTMLDivElement["className"];
};

export const Divider = ({
    color = "#d6dadb",
    height = "1px",
    margin,
    className,
}: DividerProps) => (
    <div
        style={{ margin, backgroundColor: color, height }}
        className={className}
    />
);

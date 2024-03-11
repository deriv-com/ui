import React from "react";
import clsx from "clsx";
import "./Loader.scss";

type TProps = {
    color?: React.CSSProperties["color"];
    isFullScreen?: boolean;
    className?: string;
};

export const Loader = ({
    color = "#85ACB0",
    isFullScreen = true,
    className,
}: TProps) => (
    <div
        className={clsx(
            "derivs-loader",
            { "derivs-loader--fullscreen": isFullScreen },
            className,
        )}
        data-testid="dt_derivs-loader"
    >
        <span
            className="derivs-loader__element"
            role="span"
            style={{ backgroundColor: color }}
        />
        <span
            className="derivs-loader__element"
            style={{ backgroundColor: color }}
        />
        <span
            className="derivs-loader__element"
            style={{ backgroundColor: color }}
        />
        <span
            className="derivs-loader__element"
            style={{ backgroundColor: color }}
        />
        <span
            className="derivs-loader__element"
            style={{ backgroundColor: color }}
        />
    </div>
);

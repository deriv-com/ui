import clsx from "clsx";
import React, { ReactNode} from "react";
import "./CircularProgressBar.scss"

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

export const CircularProgressBar = ({
    children,
    className,
    danger_limit = 20,
    is_clockwise = false,
    progress = 0,
    radius = 22,
    stroke = 3,
    warning_limit = 50,
}: TCircularProgressProps) => {
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className={clsx("deriv-circular-progress", className)}>
            <svg height={radius * 2} width={radius * 2}>
                {children && (
                    <foreignObject x="0" y="0" width={radius * 2} height={radius * 2}>
                        <div className={clsx("deriv-circular-progress__content")}>
                            {children}
                        </div>
                    </foreignObject>
                )}
                <circle
                    className={clsx("deriv-circular-progress__bar", {
                        "deriv-circular-progress--clockwise": is_clockwise,
                        "deriv-circular-progress__bar--warning": progress <= warning_limit && progress > danger_limit,
                        "deriv-circular-progress__bar--danger": progress <= danger_limit,
                    })}
                    cx={radius}
                    cy={radius}
                    fill={"transparent"}
                    r={normalizedRadius}
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeWidth={stroke}
                    style={{ strokeDashoffset }}
                />
            </svg>
        </div>
    );
};

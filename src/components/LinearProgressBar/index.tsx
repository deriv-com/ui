import React,{ComponentProps} from 'react';
import clsx from 'clsx';
import { Text } from '../Text';
import { TGenericSizes } from "../../types";
import "./LinearProgressBar.scss"

type TLinearProgressProps = ComponentProps<"div"> & {
    danger_limit:number;
    is_loading: boolean;
    label:React.ReactNode;
    percentage:number;
    labelSize?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    warning_limit:number;
};

export const LinearProgressBar = ({
    danger_limit,
    is_loading,
    label,
    percentage,
    labelSize="xs",
    warning_limit,
    ...rest
}: TLinearProgressProps) => {
    return (
        <div className="deriv-linear-progress-bar" {...rest}>
                <React.Fragment>
                    <Text size={labelSize} className="deriv-linear-progress-bar__remaining-time">
                       {label}
                    </Text>
                    {is_loading || percentage < 1 ? (
                        <div className="deriv-linear-progress-bar__infinite-loader">
                            <div className="deriv-linear-progress-bar__infinite-loader--indeterminate" />
                        </div>
                    ) : (
                        <div className="deriv-linear-progress-bar__track">
                            <div
                                className={clsx("deriv-linear-progress-bar__line", {
                                    "deriv-linear-progress-bar__line--green": percentage >= warning_limit,
                                    "deriv-linear-progress-bar__line--yellow": percentage < warning_limit && percentage >= danger_limit,
                                    "deriv-linear-progress-bar__line--red": percentage < danger_limit,
                                })}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    )}
                </React.Fragment>
        </div>
    );
};

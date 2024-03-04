import React from 'react';
import clsx from 'clsx';
import { Text } from '../Text';
import { TGenericSizes } from "../../types";
import "./ProgressBar.scss"

type TLinearProgressProps = {
    className?: string;
    danger_limit:number;
    is_loading: boolean;
    label:React.ReactNode;
    percentage:number;
    size?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    warning_limit:number;
};

export const LinearProgressBar = ({
    className,
    danger_limit,
    is_loading,
    label,
    percentage,
    size="xs",
    warning_limit
}: TLinearProgressProps) => {
    return (
        <div className={clsx('deriv-progress-slider', className)}>
                <React.Fragment>
                    <Text size={size} className='deriv-progress-slider__remaining-time'>
                       {label}
                    </Text>
                    {is_loading || percentage < 1 ? (
                        <div className='deriv-progress-slider__infinite-loader'>
                            <div className='deriv-progress-slider__infinite-loader--indeterminate' />
                        </div>
                    ) : (
                        /* Calculate line width based on percentage of time left */
                        <div className='deriv-progress-slider__track'>
                            <div
                                className={clsx('deriv-progress-slider__line', {
                                    'deriv-progress-slider__line--green': percentage >= warning_limit,
                                    'deriv-progress-slider__line--yellow': percentage < warning_limit && percentage >= danger_limit,
                                    'deriv-progress-slider__line--red': percentage < danger_limit,
                                })}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    )}
                </React.Fragment>

        </div>
    );
};

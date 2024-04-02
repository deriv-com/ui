import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import { Input } from "../Input";
import "./ToggleSwitch.scss";

interface ToggleSwitchProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: boolean;
    wrapperClassName?: React.ComponentProps<typeof Input>["wrapperClassName"];
    className?: React.ComponentProps<typeof Input>["className"];
    wrapperStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
    (
        {
            onChange,
            value = false,
            wrapperClassName,
            className,
            wrapperStyle,
            style,
        },
        ref,
    ) => {
        const [isChecked, setIsChecked] = useState<boolean>(value);

        useEffect(() => {
            if (value !== undefined) {
                setIsChecked(value);
            }
        }, [value]);

        const onClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked(!isChecked);
            onChange?.(event);
        };

        return (
            <label
                className={clsx("deriv-toggle-switch", wrapperClassName)}
                style={wrapperStyle}
            >
                <input
                    checked={isChecked}
                    onChange={onClickHandler}
                    ref={ref}
                    type="checkbox"
                    className={clsx(className)}
                    style={style}
                />
                <span className="deriv-toggle-switch__slider" />
            </label>
        );
    },
);

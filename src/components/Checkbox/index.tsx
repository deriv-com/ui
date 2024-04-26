import { ComponentProps, ReactNode, Ref, forwardRef } from "react";
import clsx from "clsx";
import "./Checkbox.scss";

interface CheckboxProps
    extends Omit<
        ComponentProps<"input">,
        "placeholder" | "defaultChecked" | "name"
    > {
    name: string;
    error?: boolean;
    isPartialEnable?:boolean;
    label?: ReactNode;
    labelClassName?: string;
    wrapperClassName?: string;
}

export const Checkbox = forwardRef(
    (
        {
            checked = false,
            className,
            disabled,
            error,
            isPartialEnable=false,
            label,
            labelClassName,
            wrapperClassName,
            name,
            ...rest
        }: CheckboxProps,
        ref: Ref<HTMLInputElement>,
    ) => {
        return (
            <div className={clsx("deriv-checkbox", wrapperClassName)}>
                <div className="deriv-checkbox__wrapper">
                    <input
                        id={rest.id ?? name}
                        className={clsx(
                            "deriv-checkbox__box",
                            {
                                "deriv-checkbox__box--unchecked": !checked,
                                "deriv-checkbox__box--checked": checked,
                                "deriv-checkbox__box--disabled": disabled,
                                "deriv-checkbox__box--partial": isPartialEnable && checked,
                            },
                            className,
                        )}
                        type="checkbox"
                        checked={!disabled && checked}
                        disabled={disabled}
                        ref={ref}
                        name={name}
                        {...rest}
                    />
                </div>
                <label
                    className={clsx(
                        "deriv-checkbox__label",
                        {
                            "deriv-checkbox__label--error": error,
                            "deriv-checkbox__label--disabled": disabled,
                        },
                        labelClassName,
                    )}
                    htmlFor={rest.id ?? name}
                >
                    {label}
                </label>
            </div>
        );
    },
);

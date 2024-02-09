import { ComponentProps, ReactNode, Ref, forwardRef } from "react";
import clsx from "clsx";
import "./Checkbox.scss";

interface CheckboxProps
  extends Omit<ComponentProps<"input">, "placeholder" | "defaultChecked"> {
  error?: boolean;
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
      id = "deriv-checkbox",
      label,
      labelClassName,
      wrapperClassName,
      ...rest
    }: CheckboxProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={clsx("deriv-checkbox__wrapper", wrapperClassName)}>
        <input
          id={id}
          className={clsx(
            "deriv-checkbox",
            {
              "deriv-checkbox--unchecked": !checked,
              "deriv-checkbox--checked": checked,
              "deriv-checkbox--disabled": disabled,
            },
            className
          )}
          type="checkbox"
          checked={!disabled && checked}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
        <label
          className={clsx(
            "deriv-checkbox__label",
            {
              "deriv-checkbox__label--error": error,
              "deriv-checkbox__label--disabled": disabled,
            },
            labelClassName
          )}
          htmlFor={id}
        >
          {label}
        </label>
      </div>
    );
  }
);

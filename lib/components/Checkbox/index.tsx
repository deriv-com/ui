import { ComponentProps, ReactNode, Ref, forwardRef, useId } from "react";
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
      label,
      labelClassName,
      wrapperClassName,
      ...rest
    }: CheckboxProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id = useId();

    return (
      <div className={clsx("deriv-checkbox", wrapperClassName)}>
        <div className="deriv-checkbox__wrapper">
          <input
            id={rest.id ?? id}
            className={clsx(
              "deriv-checkbox__box",
              {
                "deriv-checkbox__box--unchecked": !checked,
                "deriv-checkbox__box--checked": checked,
                "deriv-checkbox__box--disabled": disabled,
              },
              className
            )}
            type="checkbox"
            checked={!disabled && checked}
            disabled={disabled}
            ref={ref}
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
            labelClassName
          )}
          htmlFor={rest.id ?? id}
        >
          {label}
        </label>
      </div>
    );
  }
);

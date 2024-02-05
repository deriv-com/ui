import React, { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import "./Checkbox.scss";

interface CheckboxProps extends Omit<ComponentProps<"input">, "placeholder"> {
  error?: boolean;
  label?: ReactNode;
  labelClassName?: string;
  wrapperClassName?: string;
}

export const Checkbox = ({
  checked,
  className,
  defaultChecked,
  error,
  id = "deriv-checkbox",
  label,
  labelClassName,
  wrapperClassName,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={clsx("deriv-checkbox__wrapper", wrapperClassName)}>
      <input
        id={id}
        className={clsx(
          "deriv-checkbox",
          {
            "deriv-checkbox--unchecked": !checked,
            "deriv-checkbox--checked": checked,
          },
          className
        )}
        type="checkbox"
        {...rest}
      />
      <span className="deriv-checkbox__icon"></span>
      <label
        className={clsx(
          "deriv-checkbox__label",
          {
            "deriv-checkbox__label--error": error,
            "deriv-checkbox__label--disabled": rest.disabled,
          },
          labelClassName
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

import React, { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import "./Checkbox.scss";

interface CheckboxProps extends Omit<ComponentProps<"input">, "placeholder"> {
  wrapperClassName?: string;
  label?: ReactNode;
}

export const Checkbox = ({
  checked,
  className,
  defaultChecked,
  id = "deriv-checkbox",
  label,
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
      <label className="deriv-checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

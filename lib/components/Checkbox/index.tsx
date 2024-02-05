import React, { ComponentProps } from "react";
import clsx from "clsx";
import "./Checkbox.scss";

interface CheckboxProps extends Omit<ComponentProps<"input">, "placeholder"> {
  wrapperClassName?: string;
}

export const Checkbox = ({
  checked,
  children,
  className,
  defaultChecked,
  wrapperClassName,
  ...rest
}: CheckboxProps) => {
  return (
    <div className={clsx("deriv-checkbox__wrapper", wrapperClassName)}>
      <input
        checked={checked}
        defaultChecked={defaultChecked}
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
      <label className="deriv-checkbox__label">{children}</label>
    </div>
  );
};

import React, { ChangeEvent, ComponentProps, ReactNode, useState } from "react";
import clsx from "clsx";
import HelperMessage, { HelperMessageProps } from "./HelperMessage";
import "./Input.scss";

interface InputProps
  extends Omit<ComponentProps<"input">, "style" | "placeholder">,
    HelperMessageProps {
  label?: string;
  hasError?: boolean;
  hasRightPlaceholder?: ReactNode;
}

export const Input = ({
  label,
  id,
  hasError,
  message,
  hasRightPlaceholder,
  ...rest
}: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    rest.onChange?.(e);
  };

  return (
    <div className="deriv-input">
      <input
        className={clsx("deriv-input--field", {
          "deriv-input--field__error": hasError,
          className: rest.className,
        })}
        id={id}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <label
        className={clsx("deriv-input--label", {
          "deriv-input--label__error": hasError,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      {hasRightPlaceholder && (
        <div className="deriv-input--right-content">{hasRightPlaceholder}</div>
      )}
      <div className="deriv-input--helper-message">
        {message && <HelperMessage message={message} hasError={hasError} />}
      </div>
    </div>
  );
};

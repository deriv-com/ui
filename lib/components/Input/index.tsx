import React, { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import HelperMessage from "./HelperMessage";
import "./Input.scss";

export type InputVariants = "general" | "success" | "error";
export interface InputProps
  extends Omit<ComponentProps<"input">, "style" | "placeholder"> {
  label?: string;
  leftPlaceholder?: ReactNode;
  rightPlaceholder?: ReactNode;
  error?: boolean;
  variant?: InputVariants;
  message?: ReactNode;
}

const InputVariant: Record<InputVariants, string> = {
  general: "deriv-input--field__general",
  success: "deriv-input--field__success",
  error: "deriv-input--field__error",
};

const LabelVariant: Record<InputVariants, string> = {
  general: "deriv-input--label__general",
  success: "deriv-input--label__success",
  error: "deriv-input--label__error",
};

export const Input = ({
  label,
  id,
  error,
  message,
  leftPlaceholder,
  rightPlaceholder,
  variant = "general",
  className,
  disabled,
  ...rest
}: InputProps) => {
  return (
    <div className="deriv-input">
      {leftPlaceholder && (
        <div className="deriv-input--left-content">{leftPlaceholder}</div>
      )}
      <input
        placeholder={label}
        className={clsx(
          "deriv-input--field",
          className,
          InputVariant[error ? "error" : variant]
        )}
        id={id}
        {...rest}
      />
      <label
        className={clsx(
          "deriv-input--label",
          LabelVariant[error ? "error" : variant]
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {rightPlaceholder && (
        <div className="deriv-input--right-content">{rightPlaceholder}</div>
      )}
      <div className="deriv-input--helper-message">
        {message && (
          <HelperMessage
            message={message}
            variant={variant}
            error={error}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

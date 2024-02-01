import React, { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import HelperMessage from "./HelperMessage";
import "./Input.scss";

export type InputVariants =
  | "general"
  | "success"
  | "error"
  | "warning"
  | "disabled";
interface InputProps
  extends Omit<ComponentProps<"input">, "style" | "placeholder"> {
  label?: string;
  leftPlaceholder?: ReactNode;
  rightPlaceholder?: ReactNode;
  error?: boolean;
  variant?: InputVariants;
  message?: ReactNode;
}

const InputVariant: Record<InputVariants, string> = {
  general: "deriv-input--general",
  success: "deriv-input--success",
  warning: "deriv-input--general",
  error: "deriv-input--error",
  disabled: "deriv-input--disabled",
};

const LabelVariant: Record<InputVariants, string> = {
  general: "deriv-input__label--general",
  success: "deriv-input__label--success",
  warning: "deriv-input__label--general",
  error: "deriv-input__label--error",
  disabled: "deriv-input__label--disabled",
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
    <div
      className={clsx(
        "deriv-input",
        className,
        InputVariant[error ? "error" : variant],
        {
          "deriv-input--disabled": disabled,
        }
      )}
    >
      {leftPlaceholder && (
        <div className="deriv-input__left-content">{leftPlaceholder}</div>
      )}
      <input
        placeholder={label}
        className="deriv-input__field"
        id={id}
        disabled={disabled}
        {...rest}
      />
      <label
        className={clsx(
          "deriv-input__label",
          LabelVariant[error ? "error" : variant],
          {
            "deriv-input--label--disabled": disabled,
          }
        )}
        htmlFor={id}
      >
        {label}
      </label>
      {rightPlaceholder && (
        <div className="deriv-input__right-content">{rightPlaceholder}</div>
      )}
      <div className="deriv-input__helper-message">
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

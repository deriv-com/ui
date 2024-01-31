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
  general: "deriv-input__general",
  success: "deriv-input__success",
  warning: "deriv-input__general",
  error: "deriv-input__error",
  disabled: "deriv-input__disabled",
};

const LabelVariant: Record<InputVariants, string> = {
  general: "deriv-input--label__general",
  success: "deriv-input--label__success",
  warning: "deriv-input--label__general",
  error: "deriv-input--label__error",
  disabled: "deriv-input--label__disabled",
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
          "deriv-input__disabled": disabled,
        }
      )}
    >
      {leftPlaceholder && (
        <div className="deriv-input--left-content">{leftPlaceholder}</div>
      )}
      <input
        placeholder={label}
        className="deriv-input--field"
        id={id}
        disabled={disabled}
        {...rest}
      />
      <label
        className={clsx(
          "deriv-input--label",
          LabelVariant[error ? "error" : variant],
          {
            "deriv-input--label__disabled": disabled,
          }
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

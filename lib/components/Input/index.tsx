import React, { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import HelperMessage from "./HelperMessage";
import "./Input.scss";

export type InputVariants = "general" | "success" | "error";
interface InputProps
  extends Omit<ComponentProps<"input">, "style" | "placeholder"> {
  label?: string;
  hasRightPlaceholder?: ReactNode;
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
  hasRightPlaceholder,
  variant = "general",
  ...rest
}: InputProps) => {
  return (
    <div className="deriv-input">
      <input
        placeholder={label}
        className={clsx(
          "deriv-input--field",
          { className: rest.className },
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
      {hasRightPlaceholder && (
        <div className="deriv-input--right-content">{hasRightPlaceholder}</div>
      )}
      <div className="deriv-input--helper-message">
        {message && (
          <HelperMessage
            message={message}
            variant={variant}
            error={error}
            disabled={rest.disabled}
          />
        )}
      </div>
    </div>
  );
};

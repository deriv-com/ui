import React, { ReactNode } from "react";
import clsx from "clsx";
import { InputVariants } from ".";
import "./Input.scss";

export interface HelperMessageProps {
  error?: boolean;
  message?: ReactNode;
  variant?: InputVariants;
  disabled?: boolean;
}

const MessageVariant: Record<InputVariants, string> = {
  general: "deriv-helper-message__general",
  success: "deriv-helper-message__success",
  warning: "deriv-helper-message__warning",
  error: "deriv-helper-message__error",
};

const HelperMessage = ({
  error,
  message,
  variant = "general",
  disabled,
}: HelperMessageProps) => (
  <p
    className={clsx("deriv-helper-message", {
      [MessageVariant["general"]]: disabled,
      [MessageVariant[error ? "error" : variant]]: !disabled,
    })}
  >
    {message}
  </p>
);

export default HelperMessage;

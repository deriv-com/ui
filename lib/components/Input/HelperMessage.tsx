import React from "react";
import clsx from "clsx";
import "./Input.scss";

export interface HelperMessageProps {
  message?: string;
  hasError?: boolean;
}

const HelperMessage = ({ message, hasError }: HelperMessageProps) => (
  <p
    className={clsx("deriv-helper-message", {
      "deriv-helper-message__error": hasError,
    })}
  >
    {message}
  </p>
);

export default HelperMessage;

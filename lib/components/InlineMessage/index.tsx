import React, { ReactNode } from "react";
import clsx from "clsx";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./VariantIcons";
import "./InlineMessage.scss";

type TVariant = "warning" | "info" | "success" | "error" | "general";

type InlineMessageProps = {
  children: ReactNode;
  className?: string;
  icon?: JSX.Element;
  variant?: TVariant;
  type?: "outlined" | "filled";
};

const VariantIcons: Record<Exclude<TVariant, "general">, JSX.Element> = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

const VariantClasses = {
  error: {
    filled: "deriv-inline-message__error--filled",
    outlined: "deriv-inline-message__error--outlined",
  },
  general: "deriv-inline-message__general",
  info: {
    filled: "deriv-inline-message__info--filled",
    outlined: "deriv-inline-message__info--outlined",
  },
  success: {
    filled: "deriv-inline-message__success--filled",
    outlined: "deriv-inline-message__success--outlined",
  },
  warning: {
    filled: "deriv-inline-message__warning--filled",
    outlined: "deriv-inline-message__warning--outlined",
  },
};

export const InlineMessage = ({
  icon,
  children,
  className,
  variant = "general",
  type = "filled",
}: InlineMessageProps) => (
  <div
    className={clsx(
      "deriv-inline-message",
      variant !== "general"
        ? VariantClasses[variant][type]
        : VariantClasses[variant],
      className
    )}
  >
    {(variant !== "general" || icon) && (
      <div className="deriv-inline-message__icon">
        {variant !== "general" ? VariantIcons[variant] : icon ?? null}
      </div>
    )}
    {children}
  </div>
);

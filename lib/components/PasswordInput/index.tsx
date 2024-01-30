import React, { ComponentProps } from "react";
import clsx from "clsx";
import { Input } from "../Input";
import "./PasswordInput.scss";

interface PasswordInputProps extends ComponentProps<typeof Input> {
  score: 0 | 1 | 2 | 3 | 4;
}

export const PasswordInput = ({ score = 0, ...props }: PasswordInputProps) => {
  const PasswordStrengthClass: Record<PasswordInputProps["score"], string> = {
    0: "",
    1: "deriv-password-meter--bar__weak",
    2: "deriv-password-meter--bar__moderate",
    3: "deriv-password-meter--bar__strong",
    4: "deriv-password-meter--bar__complete",
  };

  const PasswordVariant: Record<
    PasswordInputProps["score"],
    PasswordInputProps["variant"]
  > = {
    0: "general",
    1: "error",
    2: "error",
    3: "success",
    4: "success",
  };

  return (
    <div className="deriv-password">
      <Input type="password" {...props} variant={PasswordVariant[score]} />
      <div className="deriv-password-meter">
        <div
          className={clsx(
            "deriv-password-meter--bar",
            PasswordStrengthClass[score]
          )}
        ></div>
      </div>
    </div>
  );
};

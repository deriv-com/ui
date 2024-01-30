import React, { ComponentProps, useMemo } from "react";
import clsx from "clsx";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import { dictionary } from "@zxcvbn-ts/language-common";
import { Input } from "../Input";
import "./PasswordInput.scss";
import { calculateScore, isPasswordValid } from "./PasswordUtils";
import {
  passwordErrorMessage,
  passwordKeys,
  passwordRegex,
  warningMessages,
} from "./PasswordConstants";

type TScore = 0 | 1 | 2 | 3 | 4;
interface PasswordInputProps extends ComponentProps<typeof Input> {}

export const validatePassword = (password: string) => {
  const score = calculateScore(password);
  let errorMessage = "";

  const options = { dictionary: { ...dictionary } };
  zxcvbnOptions.setOptions(options);

  const { feedback } = zxcvbn(password);
  if (!passwordRegex.isLengthValid.test(password)) {
    errorMessage = passwordErrorMessage.invalidLength;
  } else if (!isPasswordValid(password)) {
    errorMessage = passwordErrorMessage.missingCharacter;
  } else {
    errorMessage = warningMessages[feedback.warning as passwordKeys] ?? "";
  }
  return { errorMessage, score };
};

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const { errorMessage, score } = useMemo(
    () => validatePassword(props.value as string),
    [props.value]
  );

  const PasswordStrengthClass: Record<TScore, string> = {
    0: "",
    1: "deriv-password-meter--bar__weak",
    2: "deriv-password-meter--bar__moderate",
    3: "deriv-password-meter--bar__strong",
    4: "deriv-password-meter--bar__complete",
  };

  const PasswordVariant: Record<TScore, PasswordInputProps["variant"]> = {
    0: "general",
    1: "error",
    2: "warning",
    3: "success",
    4: "success",
  };

  console.log(score);

  return (
    <div className="deriv-password">
      <Input
        type="password"
        value={props.value}
        message={errorMessage}
        {...props}
        variant={PasswordVariant[score as TScore]}
      />
      <div className="deriv-password-meter">
        <div
          className={clsx(
            "deriv-password-meter--bar",
            PasswordStrengthClass[score as TScore]
          )}
        ></div>
      </div>
    </div>
  );
};

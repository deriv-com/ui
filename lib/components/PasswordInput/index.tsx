import React, {
  ChangeEvent,
  ComponentProps,
  useCallback,
  useMemo,
  useState,
} from "react";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import { dictionary } from "@zxcvbn-ts/language-common";
import { Input } from "../Input";
import { calculateScore, isPasswordValid } from "./PasswordUtils";
import {
  TScore,
  passwordErrorMessage,
  passwordKeys,
  passwordRegex,
  warningMessages,
} from "./PasswordConstants";
import { PasswordMeter } from "./PasswordMeter";
import "./PasswordInput.scss";

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

const PasswordVariant: Record<TScore, PasswordInputProps["variant"]> = {
  0: "error",
  1: "error",
  2: "warning",
  3: "success",
  4: "success",
};

interface PasswordInputProps extends ComponentProps<typeof Input> {
  hidePasswordMeter?: boolean;
}

export const PasswordInput = ({
  hidePasswordMeter,
  ...props
}: PasswordInputProps) => {
  const [isTouched, setIsTouched] = useState(false);

  const { errorMessage, score } = useMemo(
    () => validatePassword(props.value as string),
    [props.value]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e);
      if (!isTouched) {
        setIsTouched(true);
      }
    },
    [isTouched, props.onChange]
  );

  const handleBlur = useCallback(() => {
    if (!isTouched) {
      setIsTouched(true);
    }
  }, [isTouched]);

  return (
    <div className="deriv-password">
      <Input
        type="password"
        value={props.value}
        message={isTouched ? errorMessage : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant={isTouched ? PasswordVariant[score as TScore] : "general"}
        {...props}
      />
      {!hidePasswordMeter && <PasswordMeter score={score as TScore} />}
    </div>
  );
};

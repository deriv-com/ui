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
import { EyeIcon, EyeIconSlash } from "./PasswordIcon";
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

type InputProps = ComponentProps<typeof Input>;

interface PasswordInputProps
  extends Pick<
    InputProps,
    "value" | "onChange" | "label" | "id" | "autoComplete"
  > {
  hidePasswordMeter?: boolean;
  hint?: string;
}

const PasswordVariant: Record<TScore, InputProps["variant"]> = {
  0: "error",
  1: "error",
  2: "warning",
  3: "success",
  4: "success",
};

export const PasswordInput = ({
  autoComplete,
  id,
  label,
  value,
  onChange,
  hint,
  hidePasswordMeter,
}: PasswordInputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { errorMessage, score } = useMemo(
    () => validatePassword(value as string),
    [value]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (!isTouched) {
        setIsTouched(true);
      }
    },
    [isTouched, onChange]
  );

  const handleBlur = useCallback(() => {
    if (!isTouched) {
      setIsTouched(true);
    }
  }, [isTouched]);

  return (
    <div className="deriv-password">
      <Input
        autoComplete={autoComplete}
        id={id}
        label={label}
        type={showPassword ? "text" : "password"}
        value={value}
        message={isTouched ? errorMessage : "" || hint}
        onChange={handleChange}
        onBlur={handleBlur}
        variant={isTouched ? PasswordVariant[score as TScore] : "general"}
        rightPlaceholder={
          <button
            className="deriv-password__icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeIconSlash />}
          </button>
        }
      />
      {!hidePasswordMeter && <PasswordMeter score={score as TScore} />}
    </div>
  );
};

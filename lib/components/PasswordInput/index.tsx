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
  ...rest
}: PasswordInputProps) => {
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { errorMessage, score } = useMemo(
    () => validatePassword(rest.value as string),
    [rest.value]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      rest.onChange?.(e);
      if (!isTouched) {
        setIsTouched(true);
      }
    },
    [isTouched, rest.onChange]
  );

  const handleBlur = useCallback(() => {
    if (!isTouched) {
      setIsTouched(true);
    }
  }, [isTouched]);

  return (
    <div className="deriv-password">
      <Input
        type={showPassword ? "text" : "password"}
        value={rest.value}
        message={isTouched ? errorMessage : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant={isTouched ? PasswordVariant[score as TScore] : "general"}
        rightPlaceholder={
          <button
            className="deriv-password-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="22"
                viewBox="0 0 18 22"
              >
                <path d="M.96 3.832l16.626 13.152q.3.274.082.602-.3.3-.629.082L.414 4.543q-.3-.3-.082-.629.3-.274.629-.082m15.86 7.246q-.437 1.066-1.476 2.434l-.684-.52q.957-1.285 1.34-2.242-.273-.683-.848-1.559a11.4 11.4 0 00-1.476-1.722 8 8 0 00-2.051-1.395Q10.449 5.528 9 5.5q-1.64.027-2.926.71l-.738-.573Q6.894 4.68 9 4.625q1.668.027 2.98.656 1.313.63 2.297 1.559a10.5 10.5 0 011.586 1.86q.63.956.957 1.722.11.328 0 .656M2.656 7.988l.711.547Q2.383 9.793 2 10.75q.273.683.848 1.559.6.875 1.476 1.722a8 8 0 002.051 1.395Q7.551 15.973 9 16q1.64-.027 2.926-.71l.738.573Q11.106 16.82 9 16.875q-1.668-.027-2.98-.656a8.5 8.5 0 01-2.27-1.559 10 10 0 01-1.613-1.86q-.63-.956-.93-1.722a.82.82 0 010-.656q.41-1.066 1.45-2.434M9 14.25q-1.476-.027-2.488-1.04-.985-.983-1.012-2.46 0-.273.027-.52l.848.684q.082 1.04.82 1.75.738.684 1.805.711.218 0 .465-.027l.82.656A3.4 3.4 0 019 14.25m3.5-3.5q0 .273-.027.52l-.848-.684a2.64 2.64 0 00-.82-1.75Q10.067 8.152 9 8.125q-.22 0-.437.055l-.848-.684Q8.316 7.25 9 7.25q1.476.027 2.488 1.012.985 1.011 1.012 2.488"></path>
                <defs>
                  <clipPath id="78d09494b5365500d86aa9ec7165151f__a">
                    <path d="M0 0h18v22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="22"
                viewBox="0 0 16 22"
              >
                <path d="M3.324 7.469A11.4 11.4 0 001.848 9.19q-.575.876-.848 1.559.273.683.848 1.559.6.875 1.476 1.722a8 8 0 002.051 1.395Q6.551 15.973 8 16q1.449-.028 2.625-.574a8 8 0 002.05-1.395 11.4 11.4 0 001.477-1.722q.575-.876.848-1.559-.273-.683-.848-1.559a11.4 11.4 0 00-1.476-1.722 8 8 0 00-2.051-1.395Q9.449 5.528 8 5.5q-1.449.027-2.625.574-1.15.548-2.05 1.395M8 4.625q1.668.027 2.98.656 1.313.63 2.297 1.559a10.5 10.5 0 011.586 1.86q.63.956.957 1.722a.82.82 0 010 .656q-.327.766-.957 1.723t-1.586 1.86a9 9 0 01-2.296 1.558q-1.313.629-2.981.656-1.668-.027-2.98-.656a9 9 0 01-2.297-1.559 10.5 10.5 0 01-1.586-1.86q-.63-.956-.93-1.722a.82.82 0 010-.656q.3-.766.93-1.723.629-.957 1.586-1.86A9 9 0 015.02 5.282q1.312-.63 2.98-.657M5.375 10.75q0 .711.355 1.313.356.6.957.957.63.355 1.313.355a2.63 2.63 0 002.27-1.312q.355-.602.355-1.313 0-.71-.355-1.312A2.63 2.63 0 008 8.126a2.63 2.63 0 00-2.27 1.311 2.53 2.53 0 00-.355 1.313m6.125 0q0 .957-.465 1.75T9.75 13.785q-.82.465-1.75.465t-1.75-.465A3.6 3.6 0 014.965 12.5a3.4 3.4 0 01-.465-1.75q0-.957.465-1.75T6.25 7.715A3.5 3.5 0 018 7.25q.93 0 1.75.465.82.492 1.285 1.285t.465 1.75"></path>
                <defs>
                  <clipPath id="e19be413b562218a8183a6434f0e3b57__a">
                    <path d="M0 0h16v22H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            )}
          </button>
        }
        {...rest}
      />
      {!hidePasswordMeter && <PasswordMeter score={score as TScore} />}
    </div>
  );
};

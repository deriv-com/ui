import React, {
    ChangeEvent,
    ComponentProps,
    FocusEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { zxcvbn, zxcvbnOptions } from "@zxcvbn-ts/core";
import { dictionary } from "@zxcvbn-ts/language-common";
import clsx from "clsx";
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

export const validatePassword = (password: string, customErrorMessage="") => {
    const score = calculateScore(password, customErrorMessage);
    let errorMessage = "";

    const options = { dictionary: { ...dictionary } };
    zxcvbnOptions.setOptions(options);
    if(!password){
        return { errorMessage, score };
    }
    const { feedback } = zxcvbn(password);
    if (!passwordRegex.isLengthValid.test(password)) {
        errorMessage = passwordErrorMessage.invalidLength;
    } else if (!isPasswordValid(password)) {
        errorMessage = passwordErrorMessage.missingCharacter;
    }
    else if( customErrorMessage){
        errorMessage = customErrorMessage;
    }
    else {
        errorMessage = warningMessages[feedback.warning as passwordKeys] ?? "";
    }

    return { errorMessage, score };
};

type InputProps = ComponentProps<typeof Input>;

interface PasswordInputProps extends Omit<InputProps, "rightPlaceholder"> {
    hidePasswordMeter?: boolean;
    hint?: string;
    customErrorMessage?: string;
}

const PasswordVariant: Record<TScore, InputProps["variant"]> = {
    0: "error",
    1: "error",
    2: "warning",
    3: "success",
    4: "success",
    5: "error",
};

/**
 * PasswordInputProps interface
 * @interface PasswordInputProps
 * @extends {Omit<InputProps, "rightPlaceholder">}
 * @property {boolean} [hidePasswordMeter] - If true, the password strength meter will be hidden.
 * @property {string} [hint] - The hint message to display below the input field.
 */

/**
 * PasswordInput component
 * @component
 * @param {PasswordInputProps} props - The props that define the PasswordInput field.
 * @returns {ReactNode} The React Node that represents the PasswordInput field.
 *
 * @example
 * <PasswordInput
 *   hidePasswordMeter
 *   hint="Password must be at least 8 characters"
 *   label="Password"
 *   isFullWidth={true}
 * />
 */

export const PasswordInput = ({
    hidePasswordMeter,
    hint,
    onBlur,
    onChange,
    value,
    customErrorMessage="",
    ...rest
}: PasswordInputProps) => {
    useEffect(() => {
        setBackendErrorMessage(customErrorMessage);
    }, [customErrorMessage]);
    const [isTouched, setIsTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [backendErrorMessage, setBackendErrorMessage] = useState(customErrorMessage);

    const { errorMessage, score } = useMemo(
        () => validatePassword(value as string, backendErrorMessage),
        [value, backendErrorMessage],
    );

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            setBackendErrorMessage("");
            if (!isTouched) {
                setIsTouched(true);
            }
        },
        [isTouched, onChange],
    );

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            onBlur?.(e);
            if (!isTouched) {
                setIsTouched(true);
            }
        },
        [isTouched, onBlur],
    );

    return (
        <div
            className={clsx("deriv-password", {
                "deriv-password--full": rest.isFullWidth,
            })}
        >
            <Input
                aria-label={rest?.label}
                wrapperClassName="deriv-password__wrapper"
                value={value}
                type={showPassword ? "text" : "password"}
                message={isTouched ? errorMessage : "" || hint}
                onChange={handleChange}
                onBlur={handleBlur}
                variant={
                    isTouched ? PasswordVariant[score as TScore] : "general"
                }
                rightPlaceholder={
                    <button
                        className="deriv-password__icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeIcon /> : <EyeIconSlash />}
                    </button>
                }
                {...rest}
            />
            {!hidePasswordMeter && <PasswordMeter score={score as TScore} />}
        </div>
    );
};

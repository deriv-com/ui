import React, { ComponentProps } from '../../../node_modules/react';
import { Input } from "../Input";
import "./PasswordInput.scss";
export declare const validatePassword: (password: string, customErrorMessage?: string) => {
    errorMessage: string;
    score: number | undefined;
};
type InputProps = ComponentProps<typeof Input>;
interface PasswordInputProps extends Omit<InputProps, "rightPlaceholder"> {
    hidePasswordMeter?: boolean;
    hint?: string;
    customErrorMessage?: string;
}
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
export declare const PasswordInput: ({ hidePasswordMeter, hint, onBlur, onChange, value, customErrorMessage, ...rest }: PasswordInputProps) => React.JSX.Element;
export {};

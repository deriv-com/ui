import React, { ComponentProps, ReactNode, Ref, forwardRef } from "react";
import clsx from "clsx";
import { Text } from "../Text";
import HelperMessage from "./HelperMessage";
import "./Input.scss";

export type InputVariants =
    | "general"
    | "success"
    | "error"
    | "warning"
    | "disabled";
interface InputProps extends Omit<ComponentProps<"input">, "placeholder"> {
    label?: string;
    leftPlaceholder?: ReactNode;
    rightPlaceholder?: ReactNode;
    error?: boolean;
    variant?: InputVariants;
    message?: ReactNode;
    maxLength?:number;
    shouldShowCounter?:boolean;
    wrapperClassName?: string;
    hideMessage?: boolean;
    isFullWidth?: boolean;
}

const InputVariant: Record<InputVariants, string> = {
    general: "deriv-input--general",
    success: "deriv-input--success",
    warning: "deriv-input--general",
    error: "deriv-input--error",
    disabled: "deriv-input--disabled",
};

const LabelVariant: Record<InputVariants, string> = {
    general: "deriv-input__label--general",
    success: "deriv-input__label--success",
    warning: "deriv-input__label--general",
    error: "deriv-input__label--error",
    disabled: "deriv-input__label--disabled",
};

/**
 * Input Variants type
 * @typedef InputVariants
 * @type {"general"|"success"|"error"|"warning"|"disabled"}
 */

/**
 * InputProps interface
 * @interface InputProps
 * @extends {Omit<ComponentProps<"input">, "placeholder">}
 * @property {string} [label] - The label for the input field.
 * @property {ReactNode} [leftPlaceholder] - The placeholder for the left side of the input field.
 * @property {ReactNode} [rightPlaceholder] - The placeholder for the right side of the input field.
 * @property {boolean} [error] - If true, the input field will display an error state.
 * @property {InputVariants} [variant] - The variant of the input field.
 * @property {ReactNode} [message] - The helper message to display below the input field.
 * @property {string} [wrapperClassName] - The class name for the input field wrapper.
 * @property {boolean} [hideMessage] - If true, the helper message will be hidden.
 * @property {boolean} [isFullWidth] - If true, the input field will take up the full width of its container.
 */

/**
 * Input component
 * @component
 * @param {InputProps} props - The props that define the input field.
 * @param {Ref<HTMLInputElement>} ref - The ref to the input field.
 * @returns {ReactNode} The React Node that represents the input field.
 */

/**
 * @example
 * <Input
 *   label="First Name"
 *   variant="general"
 *   message="First name is required"
 *   wrapperClassName="custom-input-wrapper"
 *   isFullWidth={true}
 * />
 */

export const Input = forwardRef(
    (
        {
            className,
            disabled,
            error,
            hideMessage,
            id,
            isFullWidth = false,
            label,
            leftPlaceholder,
            message,
            maxLength,
            shouldShowCounter,
            rightPlaceholder,
            variant = "general",
            value,
            onChange,
            wrapperClassName,
            ...rest
        }: InputProps,
        ref: Ref<HTMLInputElement>,
    ) => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (maxLength && e.target.value.length > maxLength) {
                e.target.value = e.target.value.slice(0, maxLength);
            }
            if (onChange) {
                onChange(e);
            }
        };
        return (
            <div
                className={clsx(
                    "deriv-input__container",
                    {
                        "deriv-input__container--full": isFullWidth,
                    },
                    wrapperClassName,
                )}
            >
                <div
                    className={clsx(
                        "deriv-input",
                        className,
                        InputVariant[error ? "error" : variant],
                        {
                            "deriv-input--disabled": disabled,
                        },
                    )}
                >
                    {leftPlaceholder && (
                        <div className="deriv-input__left-content">
                            {leftPlaceholder}
                        </div>
                    )}
                    <input
                        aria-label={label}
                        placeholder={label}
                        className="deriv-input__field"
                        id={id}
                        data-testid='test'
                        disabled={disabled}
                        ref={ref}
                        onChange={handleInputChange}
                        value={value}
                        {...rest}
                    />
                    <label
                        className={clsx(
                            "deriv-input__label",
                            LabelVariant[error ? "error" : variant],
                            {
                                "deriv-input--label--disabled": disabled,
                            },
                        )}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                    {rightPlaceholder && (
                        <div className="deriv-input__right-content">
                            {rightPlaceholder}
                        </div>
                    )}
                </div>
                <div className="deriv-input__footer">
                    <div className="deriv-input__helper-message">
                        {!hideMessage && message && (
                            <HelperMessage
                                message={message}
                                variant={variant}
                                error={error}
                                disabled={disabled}
                            />
                        )}
                    </div>
                    <div>
                    {shouldShowCounter && !disabled &&(
                    <Text size="xs" color="less-prominent" >
                        {(value as string)?.length ?? 0}/{maxLength}
                    </Text>
                )}
                    </div>
                </div>
            </div>
        );
    },
);

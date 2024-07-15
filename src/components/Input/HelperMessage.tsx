import React, { ReactNode } from "react";
import clsx from "clsx";
import { InputVariants } from ".";
import "./HelperMessage.scss";

export interface HelperMessageProps {
    error?: boolean;
    message?: ReactNode;
    variant?: InputVariants;
    disabled?: boolean;
}
type TMessageVariant = Exclude<InputVariants, "disabled">;
const MessageVariant: Record<TMessageVariant, string> = {
    general: "deriv-helper-message--general",
    success: "deriv-helper-message--success",
    warning: "deriv-helper-message--warning",
    error: "deriv-helper-message--error",
};

/**
 * HelperMessageProps interface
 * @interface HelperMessageProps
 * @property {boolean} [error] - If true, the helper message will display an error state.
 * @property {ReactNode} [message] - The helper message to display.
 * @property {InputVariants} [variant] - The variant of the helper message.
 * @property {boolean} [disabled] - If true, the helper message will be disabled.
 */

/**
 * HelperMessage component
 * @component
 * @param {HelperMessageProps} props - The props that define the HelperMessage.
 * @returns {ReactNode} The React Node that represents the HelperMessage.
 *
 * @example
 * <HelperMessage
 *   error={false}
 *   message="This is a helper message"
 *   variant="general"
 *   disabled={false}
 * />
 */

const HelperMessage = ({
    error,
    message,
    variant = "general",
    disabled,
}: HelperMessageProps) => (
    <p
        className={clsx("deriv-helper-message", {
            "deriv-helper-message--disabled": disabled,
            [MessageVariant[error ? "error" : (variant as TMessageVariant)]]:
                !disabled,
        })}
    >
        {message}
    </p>
);

export default HelperMessage;

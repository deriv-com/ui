import React, { ReactNode } from '../../../node_modules/react';
import { InputVariants } from ".";
import "./HelperMessage.scss";
export interface HelperMessageProps {
    error?: boolean;
    message?: ReactNode;
    variant?: InputVariants;
    disabled?: boolean;
}
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
declare const HelperMessage: ({ error, message, variant, disabled, }: HelperMessageProps) => React.JSX.Element;
export default HelperMessage;

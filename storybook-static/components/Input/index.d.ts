import React, { ComponentProps, ReactNode } from '../../../node_modules/react';
import "./Input.scss";
export type InputVariants = "general" | "success" | "error" | "warning" | "disabled";
interface InputProps extends Omit<ComponentProps<"input">, "placeholder"> {
    label?: string;
    islabelAnimationDisabled?: boolean;
    leftPlaceholder?: ReactNode;
    rightPlaceholder?: ReactNode;
    error?: boolean;
    variant?: InputVariants;
    message?: ReactNode;
    wrapperClassName?: string;
    hideMessage?: boolean;
    isFullWidth?: boolean;
}
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
 * @property {boolean} [islabelAnimationDisabled] - The label for the input field.
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
export declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};

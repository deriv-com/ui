import React, { ComponentPropsWithRef } from '../../../node_modules/react';
import { TGenericSizes } from "../../types";
import "./TextArea.scss";
type TextAreaProps = ComponentPropsWithRef<'textarea'> & {
    hint?: string;
    isInvalid?: boolean;
    label?: string;
    maxLength?: number;
    textSize: Extract<TGenericSizes, "lg" | "md" | "sm">;
    shouldShowCounter?: boolean;
    value?: string;
};
export declare const TextArea: React.ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export {};

import React, { ComponentPropsWithRef, Ref, forwardRef } from "react";
import clsx from "clsx";
import { Text } from "../Text";
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
export const TextArea = forwardRef(({
    hint,
    isInvalid = false,
    label,
    maxLength,
    textSize,
    shouldShowCounter = false,
    value,
    onChange,
    ...rest
}: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (maxLength && e.target.value.length > maxLength) {
            e.target.value = e.target.value.slice(0, maxLength);
        }
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div
            className={clsx("deriv-textarea", {
                "deriv-textarea--error": isInvalid,
            })}
        >
            <textarea data-has-value={!!value} value={value} onChange={handleInputChange} ref={ref} {...rest}/>
            {label && (
                <label>
                    <Text
                        color={isInvalid ? "error" : "less-prominent"}
                        size={textSize}
                    >
                        {label}
                    </Text>
                </label>
            )}
            <div className="deriv-textarea__footer">
                {hint && (
                    <Text
                        as="p"
                        color={isInvalid ? "error" : "less-prominent"}
                        size={textSize}
                    >
                        {hint}
                    </Text>
                )}
                {shouldShowCounter && (
                    <Text
                        color={isInvalid ? "error" : "less-prominent"}
                        size={textSize}
                    >
                        {value?.length ?? 0}/{maxLength}
                    </Text>
                )}
            </div>
        </div>
    );
});

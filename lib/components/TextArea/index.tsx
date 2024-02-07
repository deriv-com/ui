import React, { HtmlHTMLAttributes} from 'react';
import clsx from 'clsx';
import { Text } from "../Text";
import { TGenericSizes } from '../../types';
import './TextArea.scss';

type TTextAreaProps = HtmlHTMLAttributes<HTMLTextAreaElement> &{
    hint?: string;
    isInvalid?: boolean;
    label?: string;
    maxLength?: number;
    onInputChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    textSize:Extract<TGenericSizes, 'lg' | 'md' | 'sm'>;
    shouldShowCounter?: boolean;
    value?: string;
};
export const TextArea = ({
    hint,
    isInvalid = false,
    label,
    maxLength,
    textSize,
    shouldShowCounter = false,
    value,
    ...rest
}: TTextAreaProps) => {

    return (
        <div
            className={clsx('deriv-textarea', {
                'deriv-textarea--error': isInvalid,
            })}
        >
            <textarea
                value={value}
                {...rest}
            />
            {label && (
                <label>
                    <Text color={isInvalid ? 'error' : 'less-prominent'} size={textSize}>
                        {label}
                    </Text>
                </label>
            )}
            <div className='deriv-textarea__footer'>
                {hint && (
                    <Text as='p' color={isInvalid ? 'error' : 'less-prominent'} size={textSize}>
                        {hint}
                    </Text>
                )}
                {shouldShowCounter && (
                    <Text color={isInvalid ? 'error' : 'less-prominent'} size={textSize}>
                        {value?.length || 0}/{maxLength}
                    </Text>
                )}
            </div>
        </div>
    );
};

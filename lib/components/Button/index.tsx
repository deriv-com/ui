import { ComponentProps, CSSProperties, PropsWithChildren, ReactElement } from 'react';
import clsx from 'clsx';
import { TGenericSizes } from '../../types';
import { Loader } from '../Loader';
import { Text } from '../Text';
import './Button.scss';

type TVariant = 'contained' | 'ghost' | 'outlined';
type TColor = 'black' | 'primary-light' | 'primary' | 'white';

interface ButtonProps extends ComponentProps<'button'> {
    color?: TColor;
    icon?: ReactElement;
    isFullWidth?: boolean;
    isLoading?: boolean;
    rounded?: Extract<TGenericSizes, 'md' | 'sm'>;
    size?: Extract<TGenericSizes, 'lg' | 'md' | 'sm'>;
    textSize?: ComponentProps<typeof Text>['size'];
    variant?: TVariant;
}

export const Button = ({
    children,
    color = 'primary',
    icon,
    isFullWidth = false,
    isLoading = false,
    rounded = 'sm',
    size = 'md',
    textSize,
    variant = 'contained',
    ...props
}: PropsWithChildren<ButtonProps>) => {
    const isContained = variant === 'contained';

    const buttonClassNames = clsx(
        'derivs-button',
        `derivs-button__size--${size}`,
        `derivs-button__variant--${variant}`,
        `derivs-button__rounded--${rounded}`,
        isContained && `derivs-button__color--${color}`,
        isFullWidth && 'derivs-button__full-width',
        props.className
    );

    type TButtonFontColor = {
        [key in TVariant]: {
            [key in TColor]: string;
        };
    };

    const fontColorMapper: TButtonFontColor = {
        contained: {
            black: 'white',
            primary: 'white',
            'primary-light': 'error',
            white: 'general',
        },
        ghost: {
            black: 'error',
            primary: 'error',
            'primary-light': 'error',
            white: 'error',
        },
        outlined: {
            black: 'general',
            primary: 'general',
            'primary-light': 'general',
            white: 'general',
        },
    };

    const loaderColorMapper: Record<TColor, CSSProperties['color']> = {
        black: '#333333',
        primary: '#FFFFFF',
        'primary-light': '#EC3F3F',
        white: '#85ACB0',
    };

    const buttonFontSizeMapper = {
        lg: 'md',
        md: 'sm',
        sm: 'xs',
    } as const;

    return (
        <button
            className={buttonClassNames}
            disabled={props.disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <div className='derivs-button__loader'>
                    <Loader color={isContained ? loaderColorMapper[color] : '#85ACB0'} isFullScreen={false} />
                </div>
            )}
            {icon && !isLoading && icon}
            {children && !isLoading && (
                <Text
                    align='center'
                    color={fontColorMapper[variant][color]}
                    size={textSize || buttonFontSizeMapper[size] || 'sm'}
                    weight='bold'
                >
                    {children}
                </Text>
            )}
        </button>
    );
};


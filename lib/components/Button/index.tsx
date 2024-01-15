import { ComponentProps, CSSProperties, FC, PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { TGenericSizes } from '../../types';
import { Loader } from '../Loader';
import { Text } from '../Text';
import './Button.scss';

type TVariant = 'contained' | 'ghost' | 'outlined';
type TColor = 'black' | 'primary-light' | 'primary' | 'white';

interface ButtonProps {
    ariaLabel?: ComponentProps<'button'>['aria-label'];
    color?: TColor;
    disabled?: ComponentProps<'button'>['disabled'];
    icon?: ReactElement;
    isFullWidth?: boolean;
    isLoading?: boolean;
    onClick?: ComponentProps<'button'>['onClick'];
    rounded?: Extract<TGenericSizes, 'md' | 'sm'>;
    size?: Extract<TGenericSizes, 'lg' | 'md' | 'sm'>;
    textSize?: ComponentProps<typeof Text>['size'];
    type?: ComponentProps<'button'>['type'];
    variant?: TVariant;
    className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    ariaLabel,
    children,
    color = 'primary',
    disabled = false,
    icon,
    isFullWidth = false,
    isLoading = false,
    onClick,
    rounded = 'sm',
    size = 'md',
    textSize,
    type,
    variant = 'contained',
    className
}) => {
    const isContained = variant === 'contained';

    const buttonClassNames = classNames(
        'wallets-button',
        `wallets-button__size--${size}`,
        `wallets-button__variant--${variant}`,
        `wallets-button__rounded--${rounded}`,
        isContained && `wallets-button__color--${color}`,
        isFullWidth && 'wallets-button__full-width',
        className
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
            aria-label={ariaLabel}
            className={buttonClassNames}
            disabled={disabled || isLoading}
            onClick={onClick}
            type={type}
        >
            {isLoading && (
                <div className='wallets-button__loader'>
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


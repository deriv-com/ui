import React, { CSSProperties, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

import './Text.scss';

type TGenericSizes = '2xl' | '2xs' | '3xl' | '3xs' | '4xl' | '5xl' | '6xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';

export interface TextProps {
    align?: CSSProperties['textAlign'];
    as?: ElementType;
    children: ReactNode;
    color?: CSSProperties['color'] | 'error' | 'general' | 'less-prominent' | 'primary' | 'success' | 'warning';
    fontStyle?: CSSProperties['fontStyle'];
    lineHeight?: TGenericSizes;
    size?: Exclude<TGenericSizes, '3xs' | '6xl' | '7xl'>;
    weight?: CSSProperties['fontWeight'];
    className?: string;
}

export const Text: React.FC<TextProps> = ({
    align = 'left',
    as = 'span',
    children,
    color = 'general',
    fontStyle = 'normal',
    lineHeight,
    size = 'md',
    weight = 'normal',
    className
}) => {
    const textClassNames = classNames(
        'wallet-text',
        `wallets-text__size--${size}`,
        `wallets-text__weight--${weight}`,
        `wallets-text__align--${align}`,
        `wallets-text__color--${color}`,
        `wallets-text__line-height--${lineHeight}`,
        `wallets-text__font-style--${fontStyle}`,
        className
    );

    const Tag = as;

    return <Tag className={textClassNames}>{children}</Tag>;
};


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
        'deriv-text',
        `derivs-text__size--${size}`,
        `derivs-text__weight--${weight}`,
        `derivs-text__align--${align}`,
        `derivs-text__color--${color}`,
        `derivs-text__line-height--${lineHeight}`,
        `derivs-text__font-style--${fontStyle}`,
        className
    );

    const Tag = as;

    return <Tag className={textClassNames}>{children}</Tag>;
};


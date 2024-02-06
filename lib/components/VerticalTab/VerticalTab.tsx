// Code:
import React from 'react';
import clsx from 'clsx';
import './VerticalTab.scss';

type VerticalTabProps = {
    className?: string;
    style?: React.CSSProperties;
}

export const VerticalTab = ({
    className,
    children
}: React.PropsWithChildren<VerticalTabProps>) => {
    return (
        <div className={clsx(`vertical-tab__wrapper`, className)}>
            {children}
        </div>
    );
}
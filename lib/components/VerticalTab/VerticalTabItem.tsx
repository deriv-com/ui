import React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

export type TabItem = {
    icon?: React.ReactNode;
    title: string;
    component?: React.ReactNode;
    subItems?: {
        title: string;
        component: React.ReactNode;
    }[];
}

type VerticalTabItemProps = {
    tab: TabItem;
    onClick: (title: string) => void;
    className?: string;
    selectedTab: string;
    iconClassName?: string;
    labelClassName?: string;
}

export const VerticalTabItem = ({ tab, onClick, className, selectedTab, iconClassName,labelClassName }: VerticalTabItemProps) => {
    return (
        <div
            className={
                clsx(`vertical-tab__item`, {
                    'vertical-tab__item--active': tab?.title === selectedTab
                }, className)
            }
            onClick={() => onClick(tab?.title)}
        >
            <span className={clsx(`vertical-tab__icon`, iconClassName)}> {tab?.icon}</span>
            <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{tab?.title}</Text>
        </div>
    )
}
import React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

export type TabItem = {
    icon?: React.ReactNode;
    is_disabled?: boolean;
    panel?: React.ReactNode;
    subItems?: {
        is_disabled?: boolean;
        panel: React.ReactNode;
        title: string;
    }[];
    title: string;
}

type VerticalTabItemProps = {
    tab: TabItem;
    onClick: (title: string) => void;
    className?: string;
    selectedTab: string;
}

export const VerticalTabItem = ({ tab, onClick, className, selectedTab }: VerticalTabItemProps) => {
    return (
        <div
            className={
                clsx(`vertical-tab__item`, {
                    'vertical-tab__item--active': tab.title === selectedTab,
                    'vertical-tab__item--disabled': tab.is_disabled
                }, className)
            }
            onClick={() => !tab.is_disabled && onClick(tab.title)}
        >
            <span className='vertical-tab__icon'> {tab?.icon}</span>
            <Text as='span' className='vertical-tab__label'>{tab.title}</Text>
        </div>
    )
}

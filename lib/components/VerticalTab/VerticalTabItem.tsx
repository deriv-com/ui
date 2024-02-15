import React from 'react';
import clsx from 'clsx';

import { Text } from '../Text';

type Title = string | React.JSX.Element;

export type TabItem = {
    id: string;
    icon?: React.ReactNode;
    is_disabled?: boolean;
    panel?: React.ReactNode;
    subItems?: {
        id: string;
        is_disabled?: boolean;
        panel: React.ReactNode;
        title: Title;
    }[];
    title: Title;
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
                clsx('vertical-tab__item', {
                    'vertical-tab__item--active': tab.id === selectedTab,
                    'vertical-tab__item--disabled': tab.is_disabled
                }, className)
            }
            onClick={() => !tab.is_disabled && onClick(tab.id)}
        >
            {tab?.icon && (
                <span className='vertical-tab__icon'> {tab?.icon}</span>
            )}
            <Text size='sm' as='span' className='vertical-tab__label'>{tab.title}</Text>
        </div>
    )
}
